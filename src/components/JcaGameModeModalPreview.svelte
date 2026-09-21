<script lang="ts">
    import JcaGameModeModal from './JcaGameModeModal.svelte';
    import type { GameModeModalLabels, GameModeOption } from './JcaGameModeModal.svelte';

    // Storybook-only demonstration: names and descriptions are illustrative, NOT RGS game modes.
    const labels: GameModeModalLabels = {
        heading: 'GAME MODES',
        detailsHeading: 'MODE DETAILS',
        cost: 'Cost',
        rtp: 'RTP',
        maxWin: 'Maximum win',
        confirm: 'SELECT MODE',
        close: 'Close',
        unavailable: 'Unavailable',
    };
    const modes: GameModeOption[] = [
        { key: 'BASE', title: 'BASE', description: 'Standard play. Demo interface only; server settings are not connected.' },
        { key: 'ANTE_I', title: 'ANTE I', description: 'Concept for an additional game mode. No wager or probability is configured.' },
        { key: 'ANTE_II', title: 'ANTE II', description: 'Concept for another game mode. Real bet costs, rules and RTP will come from the approved math/configuration.' },
        { key: 'ANTE_III', title: 'ANTE III', description: 'A third example entry to verify scrolling, selection and layout.' },
        { key: 'ANTE_IV', title: 'ANTE IV', description: 'Extra example entry for testing a longer, scrollable list of modes.' },
    ];

    let open = $state(true);
    let currentModeKey = $state('BASE');
    let lastSelection = $state('');

    function selectMode(mode: GameModeOption) {
        // Demo only: never writes stateBet, does not call RGS, and cannot place a wager.
        currentModeKey = mode.key;
        lastSelection = mode.title;
        open = false;
    }
</script>

<div class="demo-scene">
    <div class="demo-controls">
        <p>STORYBOOK UI DEMO — no real bets or mode activation</p>
        <button class="selector" type="button" aria-label="Open game mode selection" onclick={() => (open = true)}>
            <img src="/assets/jca/ui/game_mode_selector_static_v1.png" alt="" />
            <span>{modes.find((mode) => mode.key === currentModeKey)?.title}</span>
        </button>
        {#if lastSelection}<p>Demo selection: {lastSelection}</p>{/if}
    </div>
    <JcaGameModeModal
        {open}
        {modes}
        {labels}
        {currentModeKey}
        onclose={() => (open = false)}
        onselect={selectMode}
    />
</div>

<style>
    .demo-scene { width: 100%; min-height: 100dvh; background: #30241b url('/assets/backgrounds/uncle_shop_static_v1.png') center center / cover no-repeat; display: grid; place-items: center; box-sizing: border-box; overflow: hidden; }
    .demo-controls { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 20px; background: rgb(25 16 12 / 72%); border: 1px solid #9e7a4a; border-radius: 10px; color: #f2dbab; text-align: center; font: 14px system-ui, sans-serif; }
    .demo-controls p { margin: 0; }
    .selector { border: none; background: none; padding: 0; width: min(260px, 75vw); cursor: pointer; position: relative; }
    .selector img { display: block; width: 100%; }
    .selector span { position: absolute; left: 15%; right: 15%; top: 48%; transform: translateY(-50%); color: #f9e3ad; font-size: 23px; font-weight: 800; text-shadow: 0 2px 2px #241309; }
</style>
