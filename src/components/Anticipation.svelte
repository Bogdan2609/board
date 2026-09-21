<script lang="ts">
    import { SpineProvider, SpineTrack } from 'pixi-svelte';
    import { stateBetDerived } from 'state-shared';
    import { getContext } from '../game/context';
    import type { Reel } from '../game/stateGame.svelte';
    import { REEL_PADDING, SYMBOL_SIZE } from '../game/constants';

    type Props = { reel: Reel; oncomplete: () => void };
    const props: Props = $props();
    const context = getContext();
    type AnimationName = 'anticipation_intro' | 'anticipation_loop' | 'anticipation_out';
    let animationName = $state<AnimationName>('anticipation_intro');

    $effect(() => {
        if (props.reel.reelState.motion === 'stopped') animationName = 'anticipation_out';
    });
    const layout = $derived(context.stateGameDerived.boardLayout());
</script>

<SpineProvider
    key="anticipation"
    width={SYMBOL_SIZE * 0.56 * layout.scale}
    x={layout.x - layout.width * layout.scale * 0.5 +
        (props.reel.reelIndex + REEL_PADDING) * SYMBOL_SIZE * layout.scale}
    y={layout.y - (layout.height * layout.scale) / 2 - SYMBOL_SIZE * 0.06 * layout.scale}
>
    <SpineTrack
        trackIndex={0}
        {animationName}
        loop={animationName === 'anticipation_loop'}
        timeScale={stateBetDerived.timeScale()}
        listener={{
            complete: () => {
                if (animationName === 'anticipation_intro') animationName = 'anticipation_loop';
                if (animationName === 'anticipation_out') props.oncomplete();
            },
        }}
    />
</SpineProvider>
