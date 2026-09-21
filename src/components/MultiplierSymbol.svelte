<script lang="ts">
    import { getSymbolBackgroundInfo, getSymbolInfo } from '../game/utils';
    import type { MultiplierSymbol } from '../game/stateGame.svelte';
    import SymbolSprite from './SymbolSprite.svelte';
    import SymbolSpineMain from './SymbolSpineMain.svelte';
    import SymbolSpineBackground from './SymbolSpineBackground.svelte';

    type Props = { reelIndex: number; multiplierSymbol: MultiplierSymbol };
    const props: Props = $props();
    const symbolInfo = $derived(getSymbolInfo({
        rawSymbol: props.multiplierSymbol.rawSymbol,
        state: props.multiplierSymbol.symbolState,
    }));
    const symbolBackgroundInfo = $derived(getSymbolBackgroundInfo({
        rawSymbol: props.multiplierSymbol.rawSymbol,
        state: props.multiplierSymbol.symbolState,
    }));
</script>

<!-- Approved JCA multipliers are sprites; do not feed them into SpineProvider.
     The legacy Spine path is retained only for a future explicit feature pass. -->
{#if symbolInfo.type === 'sprite'}
    <SymbolSprite
        {symbolInfo}
        state={props.multiplierSymbol.symbolState}
        x={props.multiplierSymbol.symbolX.current}
        y={props.multiplierSymbol.symbolY.current}
        oncomplete={() => props.multiplierSymbol.oncomplete()}
    />
{:else}
    <SymbolSpineBackground
        {symbolBackgroundInfo}
        x={props.multiplierSymbol.initX}
        y={props.multiplierSymbol.initY}
    />
    <SymbolSpineMain
        {symbolInfo}
        x={props.multiplierSymbol.symbolX.current}
        y={props.multiplierSymbol.symbolY.current}
        listener={{ complete: props.multiplierSymbol.oncomplete }}
    />
{/if}
