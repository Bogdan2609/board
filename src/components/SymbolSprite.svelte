<script lang="ts">
	import { Sprite } from 'pixi-svelte';

	import { getSymbolInfo } from '../game/utils';
	import { SYMBOL_RENDER_SIZE } from '../game/reelBoardLayout';
	import { onMount } from 'svelte';

	type Props = {
		x?: number;
		y?: number;
		symbolInfo: ReturnType<typeof getSymbolInfo>;
		oncomplete?: () => void;
	};

	const props: Props = $props();

	onMount(() => {
		props.oncomplete?.();
	});

	$effect(() => {
		props.symbolInfo;
		props.oncomplete?.();
	});
</script>

<Sprite
	x={props.x}
	y={props.y}
	anchor={0.5}
	key={props.symbolInfo.assetKey}
	width={SYMBOL_RENDER_SIZE * props.symbolInfo.sizeRatios.width}
	height={SYMBOL_RENDER_SIZE * props.symbolInfo.sizeRatios.height}
/>
