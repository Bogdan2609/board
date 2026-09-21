<script lang="ts">
    import { Sprite } from 'pixi-svelte';
    import { getSymbolInfo } from '../game/utils';
    import { SYMBOL_SIZE } from '../game/constants';
    import type { SymbolState } from '../game/types';

    type Props = {
        x?: number;
        y?: number;
        state: SymbolState;
        symbolInfo: ReturnType<typeof getSymbolInfo>;
        oncomplete?: () => void;
    };
    const props: Props = $props();

    // Artwork is centred inside a 768x768 alpha canvas; tune occupation by family,
    // not by changing the logical SYMBOL_SIZE (used by all reel/tumble coordinates).
    // These factors affect approved JCA textures only; unknown/legacy assets stay 1x.
    const JCA_SCALE: Record<string, number> = {
        jcaH1: 1.04,
        jcaH2: 1.04,
        jcaH3: 1.04,
        jcaH4: 1.075,
        jcaH5: 1.075,
        jcaL1: 1.12,
        jcaL2: 1.12,
        jcaL3: 1.12,
        jcaL4: 1.12,
        jcaS: 1.035,
        jcaM5: 1.055,
    };
    const occupation = $derived(
        Math.min(0.98, props.symbolInfo.sizeRatios.width * (JCA_SCALE[props.symbolInfo.assetKey] ?? 1)),
    );

    // A static sprite can occupy multiple logical states with the SAME texture.
    // React to STATE instead of symbolInfo identity, otherwise win/tumble promises hang.
    $effect(() => {
        const state = props.state;
        if (state === 'win' || state === 'land' || state === 'explosion') {
            props.oncomplete?.();
        }
    });
</script>

<Sprite
    x={props.x}
    y={props.y}
    anchor={0.5}
    key={props.symbolInfo.assetKey}
    width={SYMBOL_SIZE * occupation}
    height={SYMBOL_SIZE * occupation}
/>
