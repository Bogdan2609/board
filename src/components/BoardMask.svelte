<script lang="ts">
	import { Rectangle } from 'pixi-svelte';

	import { getContext } from '../game/context';

	type Props = {
		debug?: boolean;
	};

	const props: Props = $props();
	const context = getContext();

	const board = $derived(
		context.stateGameDerived.boardLayout(),
	);
</script>

{#if props.debug}
	<Rectangle
		x={0}
		y={0}
		width={board.width}
		height={board.height}
		backgroundColor={0x00ff00}
		backgroundAlpha={0.18}
		borderColor={0x00ff00}
		borderWidth={2}
	/>
{/if}

<Rectangle
	isMask
	x={0}
	y={0}
	width={board.width}
	height={board.height}
/>
