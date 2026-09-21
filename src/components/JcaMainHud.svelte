<script lang="ts">
    import { onMount } from 'svelte';
    import { stateBet, stateBetDerived, stateConfig, stateUi, stateModal, stateSound } from 'state-shared';
    import { numberToCurrencyString, bookEventAmountToCurrencyString } from 'utils-shared/amount';
    import { getContext } from '../game/context';
    import JcaGameModeModal from './JcaGameModeModal.svelte';
    import type { GameModeOption, GameModeModalLabels } from './JcaGameModeModal.svelte';

    const context = getContext();

    // This HUD is a fixed HTML overlay. Pixi's canvasSizes may use an internal
    // logical coordinate space, which is not necessarily the browser/Storybook
    // viewport after maximising the preview. Keep actual CSS viewport dimensions
    // reactive and use them only for DOM control fitting and sizing.
    let viewport = $state({
        width: typeof window === 'undefined' ? 0 : window.innerWidth,
        height: typeof window === 'undefined' ? 0 : window.innerHeight,
    });
    onMount(() => {
        const updateViewport = () => {
            viewport = { width: window.innerWidth, height: window.innerHeight };
        };
        updateViewport();
        window.addEventListener('resize', updateViewport);
        document.addEventListener('fullscreenchange', updateViewport);
        return () => {
            window.removeEventListener('resize', updateViewport);
            document.removeEventListener('fullscreenchange', updateViewport);
        };
    });

    // IMPORTANT: the approved RGS math/configuration does not yet expose the new 6x6 ANTE modes.
    // This is an art/layout preview, not a way to activate additional wagers.
    const rgsEnabled = import.meta.env.VITE_JCA_ENABLE_RGS === 'true';
    const demoOnly = !rgsEnabled;
    const labels: GameModeModalLabels = {
        heading: 'GAME MODES', detailsHeading: 'MODE DETAILS', cost: 'Cost', rtp: 'RTP',
        maxWin: 'Maximum win', confirm: 'SELECT MODE', close: 'Close', unavailable: 'Unavailable',
    };
    const demoModes: GameModeOption[] = [
        { key: 'BASE', title: 'BASE', description: 'Standard play. Art preview only; no paid action can be started from this demo.' },
        { key: 'ANTE_I', title: 'ANTE I', description: 'Visual concept only. This mode has no configured wager, RTP or payouts.' },
        { key: 'ANTE_II', title: 'ANTE II', description: 'Visual concept only. Actual rules and costs require approved RGS math.' },
        { key: 'ANTE_III', title: 'ANTE III', description: 'Visual concept for a future additional mode.' },
        { key: 'ANTE_IV', title: 'ANTE IV', description: 'Visual concept to test a scrollable list.' },
    ];
    const modes: GameModeOption[] = rgsEnabled
        ? [{ key: 'BASE', title: 'BASE', description: 'Standard game. Additional ANTE modes are not configured.' }]
        : demoModes;

    let modeModalOpen = $state(false);
    let menuOpen = $state(false);
    let selectedModeKey = $state('BASE');
    const selectedModeTitle = $derived(modes.find((m) => m.key === selectedModeKey)?.title ?? 'BASE');
    const idle = $derived(context.stateXstateDerived.isIdle());
    const replay = $derived(stateUi.config.mode === 'replay');
    const paidDisabled = $derived(demoOnly || replay || modeModalOpen);
    const spinDisabled = $derived(paidDisabled || (idle && !stateBetDerived.isBetCostAvailable()));
    const balance = $derived(numberToCurrencyString(stateBet.balanceAmount));
    const win = $derived(bookEventAmountToCurrencyString(stateBet.winBookEventAmount));
    // WIN is an earned amount, not a permanent $0.00 plaque. During the next
    // bet, suppress the old total until the SDK resets/updates the book amount.
    let awaitingFreshWin = $state(false);
    context.eventEmitter.subscribeOnMount({
        bet: () => (awaitingFreshWin = Number(stateBet.winBookEventAmount) > 0),
    });
    $effect(() => {
        const amount = Number(stateBet.winBookEventAmount);
        if (awaitingFreshWin && (!Number.isFinite(amount) || amount <= 0)) {
            awaitingFreshWin = false;
        }
    });
    const showWin = $derived(
        !awaitingFreshWin &&
        Number.isFinite(Number(stateBet.winBookEventAmount)) &&
        Number(stateBet.winBookEventAmount) > 0
    );
    const bet = $derived(numberToCurrencyString(stateBetDerived.betCost()));
    const betOptions = $derived([...(stateConfig.betAmountOptions ?? [])].sort((a, b) => a - b));
    const prevBet = $derived(betOptions.slice().reverse().find((v) => v < stateBet.betAmount));
    const nextBet = $derived(betOptions.find((v) => v > stateBet.betAmount));

    // Board geometry is taken from the SAME transform used by Board, BoardFrame and symbols.
    // The HUD is HTML over the canvas, so convert main-container coordinates to screen pixels.
    const pos = $derived.by(() => {
        const canvas = context.stateLayoutDerived.canvasSizes();
        const main = context.stateLayoutDerived.mainLayout();
        const board = context.stateGameDerived.boardLayout();
        const boardW = board.width * board.scale * main.scale;
        const boardH = board.height * board.scale * main.scale;
        const cx = main.x + (board.x - main.width / 2) * main.scale;
        const cy = main.y + (board.y - main.height / 2) * main.scale;
        const left = cx - boardW / 2;
        const right = cx + boardW / 2;
        const top = cy - boardH / 2;
        const bottom = cy + boardH / 2;
        // left/right/top/bottom come from the Pixi board transform and locate the
        // board correctly in this HTML overlay. For its remaining free space,
        // however, use the real CSS viewport, NOT Pixi's internal canvas size:
        // the latter may be smaller in fullscreen/Storybook, shrinking every
        // button on a larger screen (the v10 fullscreen regression).
        const viewW = viewport.width || canvas.width;
        const viewH = viewport.height || canvas.height;
        const space = Math.max(0, Math.min(left, viewW - right));
        // One unified scale for all art and text, derived primarily from the
        // visible board height. Normal 1200x675 stays around 0.9; a larger
        // fullscreen board can grow to 1.25 instead of dropping to 0.55.
        // The free-space bound prevents overlap with the reel frame.
        const s = Math.max(0.55, Math.min(1.25, boardH / 610, viewH / 740, space / 260));
        const offset = Math.min(165 * s, space * 0.50);
        const leftX = left - offset;
        const rightX = right + offset;
        // The footer is anchored to the actual viewport, not to the lower
        // board edge: fullscreen must not leave a growing strip below the HUD.
        // Scale ONLY the lower controls (secondary row, BALANCE, WIN, BET).
        // Keep the art's aspect ratio and make all three readouts share a baseline.
        const footerS = Math.min(1.42, s * 1.12);
        const footerInset = Math.max(8, Math.min(15, viewH * 0.014));
        const footerBottom = viewH - footerInset;
        const balanceHeight = 64;
        const betHeight = 62;
        const winHeight = 70;
        const smallHeight = 50;
        const balanceY = footerBottom - balanceHeight * footerS / 2;
        const winY = footerBottom - winHeight * footerS / 2;
        const betY = footerBottom - betHeight * footerS / 2;
        // Three small keys form a single row directly above BALANCE.
        const smallY = footerBottom - (balanceHeight + 8 + smallHeight / 2) * footerS;
        // The RIGHT column is one compact bottom-anchored stack, not three
        // independently positioned controls with enormous vertical gaps:
        //         SPIN
        //      TURBO  AUTO
        //       - BET +
        const spinHeight = 181 * s;
        const turboHeight = 38 * s;
        const turboY = footerBottom - betHeight * footerS - 8 * s - turboHeight / 2;
        const spinY = turboY - turboHeight / 2 - 7 * s - spinHeight / 2;
        // Allow the larger readouts to fill the side gutters without clipping
        // the browser edges or covering the active reel area.
        const betWidth = Math.min(344, Math.max(260, 2 * (viewW - rightX - 10) / footerS));
        const balanceWidth = Math.min(250, Math.max(206, 2 * (leftX - 10) / footerS));
        const leftArtScale = Math.min(1.20, Math.max(1, 2 * (left - leftX - 10) / (188 * s)));
        return {
            s, footerS, leftArtScale, leftX, rightX, cx, top, bottom,
            balanceY, winY, betY, smallY, turboY, spinY,
            betWidth, balanceWidth,
            buyY: top + 150 * s,
            modeY: top + 333 * s,
        };
    });

    const scaledBox = (x: number, y: number, w: number, h: number, scale: number) =>
        `left:${x}px;top:${y}px;width:${w * scale}px;height:${h * scale}px;`;
    const box = (x: number, y: number, w: number, h: number) =>
        scaledBox(x, y, w, h, pos.s);
    const footerBox = (x: number, y: number, w: number, h: number) =>
        scaledBox(x, y, w, h, pos.footerS);
    const artBox = (x: number, y: number, w: number, h: number) =>
        scaledBox(x, y, w, h, pos.s * pos.leftArtScale);
    const textSize = (n: number) => `font-size:${n * pos.s}px;`;
    const artTextSize = (n: number) => `font-size:${n * pos.s * pos.leftArtScale}px;`;
    const footerTextSize = (n: number) => `font-size:${n * pos.footerS}px;`;
    const clickSound = () => context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
    function openSdkModal(name: 'betAmountMenu' | 'buyBonus' | 'autoSpin' | 'payTable' | 'gameRules' | 'settings') {
        clickSound();
        menuOpen = false;
        stateUi.menuOpen = false;
        stateModal.modal = { name };
    }
    function openModeModal() {
        if (!idle || replay) return;
        clickSound();
        menuOpen = false;
        modeModalOpen = true;
    }
    function selectMode(mode: GameModeOption) {
        // Never map demo ANTE labels onto the live stateBet.activeBetModeKey.
        if (rgsEnabled && mode.key !== 'BASE') return;
        selectedModeKey = mode.key;
        modeModalOpen = false;
    }
    function changeBet(direction: -1 | 1) {
        if (!idle || replay || modeModalOpen) return;
        const amount = direction === -1 ? prevBet : nextBet;
        if (amount === undefined) return;
        clickSound();
        stateBetDerived.setBetAmount(amount);
    }
    function spin() {
        if (spinDisabled) return;
        context.eventEmitter.broadcast({ type: 'soundPressBet' });
        if (idle) {
            if (stateBetDerived.activeBetMode()?.type === 'buy') stateBet.activeBetModeKey = 'BASE';
            context.eventEmitter.broadcast({ type: 'bet' });
        } else {
            if (stateBetDerived.hasAutoBetCounter()) stateBet.autoSpinsCounter = 0;
            context.eventEmitter.broadcast({ type: 'stopButtonClick' });
        }
    }
    function toggleTurbo() {
        if (stateBet.isSpaceHold || replay || modeModalOpen) return;
        clickSound();
        stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
    }
    function autoSpin() {
        if (paidDisabled) return;
        if (stateBetDerived.hasAutoBetCounter()) {
            clickSound();
            stateBet.autoSpinsCounter = 0;
        } else if (idle && stateBetDerived.isBetCostAvailable()) openSdkModal('autoSpin');
    }
    function buyBonus() {
        if (paidDisabled || !idle) return;
        if (stateBetDerived.activeBetMode()?.type === 'activate') {
            clickSound();
            stateBet.activeBetModeKey = 'BASE';
        } else openSdkModal('buyBonus');
    }
    function toggleSound() {
        clickSound();
        stateSound.volumeValueMaster = stateSound.volumeValueMaster === 0 ? 50 : 0;
    }
</script>

<!-- Pointer events pass through the overlay except for the actual UI controls. -->
<div class="jca-main-hud" aria-label="Jackie Chan Adventures game controls">
    <!-- LEFT: bonus purchase, game mode, three horizontal secondary controls, balance. -->
    <button class="art control buy" style={artBox(pos.leftX, pos.buyY, 176, 159)}
        aria-label="Buy free spins" title={demoOnly ? 'Demo only: wagers are disabled' : 'Buy free spins'}
        disabled={paidDisabled || !idle} onclick={buyBonus}>
        <img src="/assets/jca/ui/buy_free_spins_static_v1.png" alt="" draggable="false" />
        <span class="buy-label" style={artTextSize(18)}>BUY<br />FREE SPINS</span>
    </button>

    <button class="art control mode" style={artBox(pos.leftX, pos.modeY, 188, 125)}
        aria-label="Select game mode" disabled={!idle || replay} onclick={openModeModal}>
        <img src="/assets/jca/ui/game_mode_selector_hud_v1.png" alt="" draggable="false" />
        <span class="mode-label" style={artTextSize(19)}>{selectedModeTitle}</span>
    </button>

    <div class="secondary-row" style={footerBox(pos.leftX, pos.smallY, 170, 50)}>
        <button class="art control small" aria-label="Menu" title="Menu" onclick={() => { clickSound(); menuOpen = !menuOpen; }}>
            <img src="/assets/jca/ui/small_button_static_v1.png" alt="" draggable="false" />
            <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3.3" stroke-linecap="round"><path d="M7 9h18M7 16h18M7 23h18" /></svg>
        </button>
        <button class="art control small" aria-label="Settings" title="Settings" onclick={() => openSdkModal('settings')}>
            <img src="/assets/jca/ui/small_button_static_v1.png" alt="" draggable="false" />
            <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="m12 4 1-2h6l1 2 2.3 1 2.2-1 4 4-1 2.2 1 2.3 2.5 1v6l-2.5 1-1 2.3 1 2.2-4 4-2.2-1-2.3 1-1 2h-6l-1-2-2.3-1-2.2 1-4-4 1-2.2-1-2.3-2.5-1v-6l2.5-1 1-2.3-1-2.2 4-4 2.2 1z" transform="translate(2 2) scale(.875)"/><circle cx="16" cy="16" r="4" /></svg>
        </button>
        <button class="art control small" aria-label="Game information" title="Game information" onclick={() => openSdkModal('payTable')}>
            <img src="/assets/jca/ui/small_button_static_v1.png" alt="" draggable="false" />
            <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.6"><circle cx="16" cy="16" r="11"/><path stroke-linecap="round" d="M16 14v8M16 10v.2" /></svg>
        </button>
    </div>

    <div class="art display balance" style={footerBox(pos.leftX, pos.balanceY, pos.balanceWidth, 64)} aria-live="polite">
        <img src="/assets/jca/ui/balance_display_static_v1.png" alt="" draggable="false" />
        <span class="display-copy"><span class="caption" style={footerTextSize(12)}>BALANCE</span><strong style={footerTextSize(21)}>{balance}</strong></span>
    </div>

    <!-- WIN is mounted only for a positive, current award. Absolute placement
         prevents the board and other HUD parts from jumping in/out. -->
    {#if showWin}
        <div class="art display win" style={footerBox(pos.cx, pos.winY, 314, 70)} aria-live="polite">
            <img src="/assets/jca/ui/win_display_static_v1.png" alt="" draggable="false" />
            <span class="display-copy"><span class="caption" style={footerTextSize(12)}>WIN</span><strong style={footerTextSize(23)}>{win}</strong></span>
        </div>
    {/if}

    <!-- RIGHT: one compact bottom-anchored stack: SPIN / TURBO AUTO / - BET +. -->
    <button class="art control spin" style={box(pos.rightX, pos.spinY, 193, 181)}
        disabled={spinDisabled} aria-label={idle ? 'Spin' : 'Stop'} onclick={spin}>
        <img src="/assets/jca/ui/spin_button_static_v1.png" alt="" draggable="false" />
        <span class="spin-mark" aria-hidden="true" style={textSize(40)}>{idle ? '⟳' : '■'}</span>
        <span class="spin-label" style={textSize(14)}>{idle ? 'SPIN' : 'STOP'}</span>
    </button>

    <div class="top-controls" style={box(pos.rightX, pos.turboY, 200, 38)}>
        <button class="art control top-button" class:active={stateBet.isTurbo}
            aria-label="Turbo" aria-pressed={stateBet.isTurbo}
            disabled={replay || stateBet.isSpaceHold || modeModalOpen} onclick={toggleTurbo}>
            <img src="/assets/jca/ui/turbo_button_static_v1.png" alt="" draggable="false" />
            <span style={textSize(13)}>TURBO</span>
        </button>
        <button class="art control top-button" aria-label="Automatic spins" disabled={paidDisabled}
            onclick={autoSpin}>
            <img src="/assets/jca/ui/auto_button_static_v1.png" alt="" draggable="false" />
            <span style={textSize(13)}>AUTO</span>
        </button>
    </div>

    <div class="bet-controls" style={footerBox(pos.rightX, pos.betY, pos.betWidth, 62)}>
        <button class="art control adjust" aria-label="Decrease bet" disabled={replay || !idle || modeModalOpen || prevBet === undefined} onclick={() => changeBet(-1)}>
            <img src="/assets/jca/ui/bet_adjust_static_v1.png" alt="" draggable="false" />
            <span style={footerTextSize(27)}>−</span>
        </button>
        <button class="art bet-readout" aria-label={`Bet: ${bet}`} disabled={replay || !idle || modeModalOpen}
            onclick={() => openSdkModal('betAmountMenu')}>
            <img src="/assets/jca/ui/bet_display_static_v1.png" alt="" draggable="false" />
            <span class="display-copy"><span class="caption" style={footerTextSize(11)}>BET</span><strong style={footerTextSize(18)}>{bet}</strong></span>
        </button>
        <button class="art control adjust" aria-label="Increase bet" disabled={replay || !idle || modeModalOpen || nextBet === undefined} onclick={() => changeBet(1)}>
            <img src="/assets/jca/ui/bet_adjust_static_v1.png" alt="" draggable="false" />
            <span style={footerTextSize(27)}>+</span>
        </button>
    </div>

    {#if demoOnly}
        <span class="qa-note" style={`top:${pos.spinY - 181 * pos.s / 2 - 13 * pos.s}px;left:${pos.rightX}px;${textSize(10)}`}>
            UI QA · no real bets
        </span>
    {/if}
    {#if menuOpen}
        <div class="menu-layer" role="group" aria-label="Game menu" style={`left:${pos.leftX}px;top:${pos.smallY - 170 * pos.footerS}px;${textSize(14)}`}>
            <button onclick={() => openSdkModal('payTable')}>PAYTABLE</button>
            <button onclick={() => openSdkModal('gameRules')}>RULES</button>
            <button onclick={() => openSdkModal('settings')}>SETTINGS</button>
            <button onclick={toggleSound}>{stateSound.volumeValueMaster === 0 ? 'SOUND OFF' : 'SOUND ON'}</button>
            <button onclick={() => (menuOpen = false)}>CLOSE</button>
        </div>
    {/if}
</div>

<JcaGameModeModal
    open={modeModalOpen}
    {modes}
    {labels}
    currentModeKey={selectedModeKey}
    onclose={() => (modeModalOpen = false)}
    onselect={selectMode}
/>

<style>
    .jca-main-hud { position: fixed; inset: 0; z-index: 35; pointer-events: none; overflow: hidden; font-family: system-ui, sans-serif; color: #f9e3b8; user-select: none; }
    .art { position: absolute; transform: translate(-50%, -50%); border: 0; background: none; padding: 0; margin: 0; color: #f9e3b8; font: inherit; }
    .art > img { position: absolute; inset: 0; width: 100%; height: 100%; display: block; pointer-events: none; }
    .control { cursor: pointer; pointer-events: auto; -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
    .control:hover:not(:disabled) > img { filter: brightness(1.10); }
    .control:active:not(:disabled) { transform: translate(-50%, -48%); }
    .control:disabled { cursor: not-allowed; }
    .control:disabled > img { filter: brightness(.82); }
    .control:disabled span { opacity: .72; }
    .control:focus-visible, .bet-readout:focus-visible { outline: 3px solid #ffdd86; outline-offset: 3px; border-radius: 8px; }
    .buy, .mode { display: grid; place-items: center; }
    .buy-label, .mode-label, .top-button > span, .adjust > span { position: relative; display: block; text-align: center; font-weight: 850; color: #fff0c7; text-shadow: 0 1px 2px #281307, 0 -1px 1px #281307; line-height: 1.12; pointer-events: none; }
    .buy-label { margin-top: 1%; color: #362014; text-shadow: 0 1px 1px #f9d9aa; }
    .mode-label { margin-top: -2%; }
    .secondary-row, .top-controls, .bet-controls { position: absolute; transform: translate(-50%, -50%); display: flex; justify-content: center; align-items: center; gap: 3.5%; pointer-events: none; }
    .small, .top-button, .adjust, .bet-readout { position: relative; transform: none; height: 100%; display: grid; place-items: center; flex: 1 1 0; min-width: 0; }
    .small { flex: 0 0 30.5%; }
    .small svg { position: relative; z-index: 1; width: 44%; height: 44%; color: #f8e1ad; filter: drop-shadow(0 1px 1px #201209); pointer-events: none; }
    .small:active:not(:disabled), .top-button:active:not(:disabled), .adjust:active:not(:disabled) { transform: translateY(2%); }
    .top-button { flex-basis: 48%; }
    .top-button.active > img { filter: brightness(1.18) drop-shadow(0 0 2px #167c60); }
    .display { pointer-events: none; }
    .display-copy { position: relative; width: 75%; height: 100%; margin: 0 auto; display: flex; justify-content: center; flex-direction: column; align-items: center; gap: 1px; white-space: nowrap; text-shadow: 0 1px 2px #241205; pointer-events: none; }
    .display-copy .caption { color: #e1c48e; font-weight: 750; line-height: 1.05; }
    .display-copy strong { display: block; font-weight: 800; line-height: 1.05; font-variant-numeric: tabular-nums; max-width: 100%; overflow: hidden; text-overflow: ellipsis; }
    .spin { display: grid; place-items: center; }
    .spin-mark { position: relative; margin-top: -9%; color: #f7e3af; text-shadow: 0 2px 3px #173e31, 0 0 2px #102f26; line-height: 1; font-weight: 850; }
    .spin-label { position: absolute; top: 57%; width: 50%; text-align: center; font-weight: 850; text-shadow: 0 1px 2px #173e31; }
    .bet-controls { gap: 1%; }
    .adjust { flex: 0 0 14.5%; height: 85%; }
    .bet-readout { flex: 1 1 auto; cursor: pointer; pointer-events: auto; }
    .bet-readout > img { position: absolute; width: 100%; height: 100%; inset: 0; pointer-events: none; }
    .bet-readout:disabled { cursor: default; }
    .bet-readout .display-copy { width: 74%; }
    .qa-note { position: absolute; transform: translateX(-50%); white-space: nowrap; opacity: 0.78; color: #f5d8a6; font-weight: 700; text-shadow: 0 1px 2px #1e120b; }
    .menu-layer { position: absolute; width: 200px; transform: translateX(-50%); display: grid; grid-template-columns: 1fr 1fr; gap: 5px; padding: 10px; background: #302219; border: 2px solid #ad8249; border-radius: 8px; pointer-events: auto; box-shadow: 0 7px 18px #0009; }
    .menu-layer button { padding: 9px 4px; color: #fae0a9; background: #4d3427; border: 1px solid #b28b55; border-radius: 4px; cursor: pointer; font: inherit; font-weight: 650; }
    .menu-layer button:hover { background: #765139; }
</style>
