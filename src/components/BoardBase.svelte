<script lang="ts">
	import ReelSymbol from './ReelSymbol.svelte';
	import ReelSymbolHighlight from './ReelSymbolHighlight.svelte';
	import { getContext } from '../game/context';

	const context = getContext();
</script>

<!-- LOWER LAYER: chalk highlights -->
{#each context.stateGame.board as reel, reelIndex (reelIndex)}
	{#each reel.reelState.symbols as reelSymbol, rowIndex}
		<ReelSymbolHighlight {reelIndex} {rowIndex} {reelSymbol} />
	{/each}
{/each}

<!-- UPPER LAYER: symbols -->
{#each context.stateGame.board as reel, reelIndex (reelIndex)}
	{#each reel.reelState.symbols as reelSymbol, rowIndex}
		<ReelSymbol {reelIndex} {rowIndex} {reelSymbol} />
	{/each}
{/each}
