<script lang="ts">
    import { onMount } from 'svelte';
    import { EnablePixiExtension } from 'components-pixi';
    import { EnableHotkey, EnableSpaceHold } from 'components-shared';
    import { MainContainer } from 'components-layout';
    import { App } from 'pixi-svelte';
    import { stateModal } from 'state-shared';
    import { GameVersion, Modals } from 'components-ui-html';

    import { getContext } from '../game/context';
    import EnableSound from './EnableSound.svelte';
    import EnableGameActor from './EnableGameActor.svelte';
    import ResumeBet from './ResumeBet.svelte';
    import Sound from './Sound.svelte';
    import Background from './Background.svelte';
    import LoadingScreen from './LoadingScreen.svelte';
    import BoardFrame from './BoardFrame.svelte';
    import BoardFrameOverlay from './BoardFrameOverlay.svelte';
    import Board from './Board.svelte';
    import Anticipations from './Anticipations.svelte';
    import ClusterWinAmounts from './ClusterWinAmounts.svelte';
    import TumbleBoard from './TumbleBoard.svelte';
    import TumbleWinAmount from './TumbleWinAmount.svelte';
    import GlobalMultiplier from './GlobalMultiplier.svelte';
    import MultiplierBoard from './MultiplierBoard.svelte';
    import MultiplierTotal from './MultiplierTotal.svelte';
    import Win from './Win.svelte';
    import FreeSpinIntro from './FreeSpinIntro.svelte';
    import FreeSpinCounter from './FreeSpinCounter.svelte';
    import FreeSpinOutro from './FreeSpinOutro.svelte';
    import Transition from './Transition.svelte';
    import JcaHud from './JcaHud.svelte';
    import JcaMainHud from './JcaMainHud.svelte';

    const context = getContext();
    // Use the approved art HUD wherever left/right side controls remain usable.
    // The existing compact Pixi HUD is preserved on small/short screens.
    const artHudFits = $derived(
        context.stateLayoutDerived.canvasSizes().width >= 1150 &&
        context.stateLayoutDerived.canvasSizes().height >= 600
    );

    onMount(() => (context.stateLayout.showLoadingScreen = true));
    context.eventEmitter.subscribeOnMount({
        buyBonusConfirm: () => {
            stateModal.modal = { name: 'buyBonusConfirm' };
        },
    });
</script>

<App>
    <EnableSound />
    <EnableHotkey />
    <EnableSpaceHold />
    <EnableGameActor />
    <EnablePixiExtension />
    <Background />

    {#if context.stateLayout.showLoadingScreen}
        <LoadingScreen onloaded={() => (context.stateLayout.showLoadingScreen = false)} />
    {:else}
        <ResumeBet />
        <Sound />
        <MainContainer><BoardFrame /></MainContainer>
        <MainContainer>
            <Board />
            <Anticipations />
            <TumbleWinAmount />
            <GlobalMultiplier />
        </MainContainer>
        <MainContainer>
            <TumbleBoard />
            <ClusterWinAmounts />
        </MainContainer>
        <MainContainer>
            <MultiplierBoard />
            <MultiplierTotal />
        </MainContainer>
        <MainContainer><BoardFrameOverlay /></MainContainer>
        {#if !artHudFits}<JcaHud />{/if}
        <Win />
        <FreeSpinIntro />
        {#if ['desktop', 'landscape'].includes(context.stateLayoutDerived.layoutType())}
            <FreeSpinCounter />
        {/if}
        <FreeSpinOutro />
        <Transition />
    {/if}
</App>

{#if artHudFits && !context.stateLayout.showLoadingScreen}
    <JcaMainHud />
{/if}

<Modals>
    {#snippet version()}
        <GameVersion version="0.0.0" />
    {/snippet}
</Modals>
