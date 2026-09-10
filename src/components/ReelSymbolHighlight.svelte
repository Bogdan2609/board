<script lang="ts">
	import SymbolWrap from './SymbolWrap.svelte';
	import ChalkWinHighlight from './ChalkWinHighlight.svelte';
	import { getSymbolInfo, getSymbolX } from '../game/utils';
	import type { ReelSymbol } from '../game/stateGame.svelte';

	type Props = {
		reelIndex: number;
		rowIndex: number;
		reelSymbol: ReelSymbol;
	};

	const props: Props = $props();

	const symbolInfo = $derived(
		getSymbolInfo({
			rawSymbol: props.reelSymbol.rawSymbol,
			state: props.reelSymbol.symbolState,
		}),
	);

	const showChalkWinHighlight = $derived(
		props.reelSymbol.symbolState === 'win' ||
		props.reelSymbol.symbolState === 'postWinStatic',
	);
</script>

{#if showChalkWinHighlight}
	<SymbolWrap
		x={getSymbolX(props.reelIndex)}
		y={props.reelSymbol.symbolY.current}
		animating={symbolInfo.type === 'spine' &&
			(props.reelSymbol.symbolState === 'land' || props.reelSymbol.symbolState === 'win')}
	>
		<ChalkWinHighlight
			reelIndex={props.reelIndex}
			rowIndex={props.rowIndex}
			state={props.reelSymbol.symbolState}
		/>
	</SymbolWrap>
{/if}
