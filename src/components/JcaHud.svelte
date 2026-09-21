<script lang="ts">
    import { Container, Rectangle, Text } from 'pixi-svelte';
    import { stateBet, stateBetDerived, stateConfig, stateUi, stateModal, stateSound } from 'state-shared';
    import { numberToCurrencyString, bookEventAmountToCurrencyString } from 'utils-shared/amount';
    import { getContext } from '../game/context';
    import JcaHudButton from './JcaHudButton.svelte';
    import JcaHudValue from './JcaHudValue.svelte';

    const context = getContext();
    // Paid actions stay unavailable until a server-side 6x6 math build is configured.
    const canUseRgs = import.meta.env.VITE_JCA_ENABLE_RGS === 'true';
    const balance = $derived(numberToCurrencyString(stateBet.balanceAmount));
    const win = $derived(bookEventAmountToCurrencyString(stateBet.winBookEventAmount));
    const bet = $derived(numberToCurrencyString(stateBetDerived.betCost()));
    const idle = $derived(context.stateXstateDerived.isIdle());
    const replay = $derived(stateUi.config.mode === 'replay');
    const paidDisabled = $derived(!canUseRgs || replay);
    const spinDisabled = $derived(paidDisabled || (idle && !stateBetDerived.isBetCostAvailable()));

    const view = $derived.by(() => {
        const { width, height } = context.stateLayoutDerived.canvasSizes();
        const mobile = width < 600 && height >= 500;
        const short = height < 500;
        const scale = Math.max(0.1, Math.min(1, (width - 18) / 1230, short ? 0.64 : 1));
        const mobileWidth = Math.max(280, Math.min(480, width - 12));
        return {
            width, height, mobile, short, scale, mobileWidth,
            top: mobile ? height - 8 - 122 : height - 10 - 90 * scale,
        };
    });

    const click = () => context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
    const openModal = (name: 'betAmountMenu' | 'buyBonus' | 'autoSpin' | 'payTable' | 'gameRules' | 'settings') => {
        click();
        stateUi.menuOpen = false;
        stateModal.modal = { name };
    };
    const changeBet = (direction: -1 | 1) => {
        if (!idle || replay) return;
        const options = [...stateConfig.betAmountOptions].sort((a, b) => a - b);
        const next = direction > 0
            ? options.find((v) => v > stateBet.betAmount)
            : options.slice().reverse().find((v) => v < stateBet.betAmount);
        if (next !== undefined) { click(); stateBetDerived.setBetAmount(next); }
    };
    const toggleTurbo = () => {
        if (stateBet.isSpaceHold || replay) return;
        click();
        stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
    };
    const spin = () => {
        if (spinDisabled) return;
        context.eventEmitter.broadcast({ type: 'soundPressBet' });
        if (idle) {
            if (stateBetDerived.activeBetMode()?.type === 'buy') stateBet.activeBetModeKey = 'BASE';
            context.eventEmitter.broadcast({ type: 'bet' });
        } else {
            if (stateBetDerived.hasAutoBetCounter()) stateBet.autoSpinsCounter = 0;
            context.eventEmitter.broadcast({ type: 'stopButtonClick' });
        }
    };
    const autoSpin = () => {
        if (paidDisabled) return;
        if (stateBetDerived.hasAutoBetCounter()) {
            click();
            stateBet.autoSpinsCounter = 0;
        } else if (idle && stateBetDerived.isBetCostAvailable()) openModal('autoSpin');
    };
    const buyBonus = () => {
        if (paidDisabled || !idle) return;
        if (stateBetDerived.activeBetMode()?.type === 'activate') {
            click();
            stateBet.activeBetModeKey = 'BASE';
        } else openModal('buyBonus');
    };
    const toggleMenu = () => { click(); stateUi.menuOpen = !stateUi.menuOpen; };
    const toggleSound = () => { click(); stateSound.volumeValueMaster = stateSound.volumeValueMaster === 0 ? 50 : 0; };
</script>

{#if view.mobile}
    <!-- Portrait: a two-row dock; all seven controls remain on-screen and tappable. -->
    <Container x={view.width / 2} y={view.top}>
        <Rectangle x={0} y={0} anchor={{ x: 0.5, y: 0 }} width={view.mobileWidth} height={122}
            borderRadius={12} backgroundColor={0x2b1e19} borderColor={0x92724a} borderWidth={2} />
        {#each [{ label: 'BALANCE', value: balance }, { label: 'WIN', value: win }, { label: 'BET', value: bet }] as entry, i}
            <JcaHudValue x={(i - 1) * ((view.mobileWidth - 18) / 3 + 1)} y={31}
                label={entry.label} value={entry.value} compact width={(view.mobileWidth - 18) / 3} height={49}
                onpress={i === 2 && idle && !replay ? () => openModal('betAmountMenu') : undefined} />
        {/each}
        {#each [
            { label: 'MENU', onpress: toggleMenu, disabled: false },
            { label: 'BONUS', onpress: buyBonus, disabled: paidDisabled || !idle },
            { label: 'AUTO', onpress: autoSpin, disabled: paidDisabled },
            { label: idle ? 'SPIN' : 'STOP', onpress: spin, disabled: spinDisabled },
            { label: 'TURBO', onpress: toggleTurbo, disabled: replay || stateBet.isSpaceHold },
            { label: '−', onpress: () => changeBet(-1), disabled: replay || !idle },
            { label: '+', onpress: () => changeBet(1), disabled: replay || !idle },
        ] as button, i}
            <JcaHudButton x={(i - 3) * ((view.mobileWidth - 18) / 7)} y={92}
                width={i === 3 ? 49 : (view.mobileWidth - 25) / 7 - 2} height={47}
                label={button.label} onpress={button.onpress} disabled={button.disabled}
                active={i === 4 && stateBet.isTurbo} primary={i === 3} fontSize={i === 3 ? 11 : 10} />
        {/each}
    </Container>
{:else}
    <!-- Desktop and short landscape: one compact row instead of two oversized HUD tiers. -->
    <Container x={view.width / 2} y={view.top} scale={view.scale}>
        <Rectangle x={0} y={0} anchor={{ x: 0.5, y: 0 }} width={1230} height={90}
            borderRadius={13} backgroundColor={0x2b1e19} borderColor={0x96734a} borderWidth={2.3} />
        <JcaHudValue x={-516} y={45} label="BALANCE" value={balance} width={145} height={65} />
        <JcaHudValue x={-356} y={45} label="WIN" value={win} width={145} height={65} />
        <JcaHudValue x={-196} y={45} label="BET" value={bet} width={145} height={65}
            onpress={idle && !replay ? () => openModal('betAmountMenu') : undefined} />
        <JcaHudButton x={-77} y={45} label="MENU" onpress={toggleMenu} width={65} height={64} />
        <JcaHudButton x={0} y={45} label="BONUS" onpress={buyBonus} disabled={paidDisabled || !idle} width={65} height={64} fontSize={12} />
        <JcaHudButton x={77} y={45} label="AUTO" onpress={autoSpin} disabled={paidDisabled} width={65} height={64} />
        <JcaHudButton x={154} y={45} label="TURBO" onpress={toggleTurbo} active={stateBet.isTurbo}
            disabled={replay || stateBet.isSpaceHold} width={67} height={64} />
        <JcaHudButton x={269} y={45} label={idle ? 'SPIN' : 'STOP'} onpress={spin}
            disabled={spinDisabled} primary width={102} height={72} />
        <JcaHudButton x={385} y={45} label="−" onpress={() => changeBet(-1)} disabled={replay || !idle}
            width={62} height={64} fontSize={26} />
        <JcaHudButton x={464} y={45} label="+" onpress={() => changeBet(1)} disabled={replay || !idle}
            width={62} height={64} fontSize={26} />
        {#if paidDisabled}
            <Text x={566} y={45} anchor={0.5} eventMode="none" text="QA\nONLY"
                style={{ fontFamily: 'proxima-nova', fontSize: 12, fill: 0xb7a386, align: 'center', fontWeight: '600' }} />
        {/if}
    </Container>
{/if}

{#if stateUi.menuOpen}
    <Rectangle x={0} y={0} width={view.width} height={view.height}
        eventMode="static" cursor="pointer" backgroundColor={0x000000} alpha={0.62}
        onpointerup={() => (stateUi.menuOpen = false)} />
    <Container x={view.width / 2} y={Math.max(12, view.top - 186)}>
        <Rectangle x={0} y={0} width={Math.min(view.width - 18, 362)} height={180} anchor={{ x: 0.5, y: 0 }}
            borderRadius={12} backgroundColor={0x2b1e19} borderColor={0xb08c57} borderWidth={2} />
        <Text x={0} y={20} text="UNCLE'S JOURNAL" anchor={0.5} eventMode="none"
            style={{ fontFamily: 'proxima-nova', fontSize: 14, fontWeight: '600', fill: 0xffe7b4 }} />
        <JcaHudButton x={-86} y={66} width={152} height={46} label="PAYTABLE" onpress={() => openModal('payTable')} />
        <JcaHudButton x={86} y={66} width={152} height={46} label="RULES" onpress={() => openModal('gameRules')} />
        <JcaHudButton x={-86} y={120} width={152} height={46} label="SETTINGS" onpress={() => openModal('settings')} />
        <JcaHudButton x={86} y={120} width={152} height={46} label={stateSound.volumeValueMaster === 0 ? 'SOUND OFF' : 'SOUND ON'} onpress={toggleSound} />
        <JcaHudButton x={0} y={163} width={98} height={27} fontSize={12} label="CLOSE" onpress={toggleMenu} />
    </Container>
{/if}
