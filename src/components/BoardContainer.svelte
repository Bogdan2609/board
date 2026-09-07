<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Container } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { REEL_SKEW_X } from '../game/reelBoardLayout';

	type Props = {
		children: Snippet;
	};

	const props: Props = $props();
	const context = getContext();

	const board = $derived(
		context.stateGameDerived.boardLayout(),
	);
</script>

<Container
	x={board.x}
	y={board.y}
	pivot={board.pivot}
	skew={{
		x: REEL_SKEW_X,
		y: 0,
	}}
>
	{@render props.children()}
</Container>
