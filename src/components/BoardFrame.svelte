<script lang="ts" module>
	export type EmitterEventBoardFrame =
		| { type: 'boardFrameGlowShow' }
		| { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
	import { Container, Rectangle, Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import {
		FRAME_BG_WIDTH,
		FRAME_BG_HEIGHT,
		FRAME_POSITION_X,
		FRAME_POSITION_Y,
		FRAME_OFFSET_X,
		FRAME_OFFSET_Y,
		REEL_COLS,
		REEL_ROWS,
		REEL_SKEW_X,
	} from '../game/reelBoardLayout';

	const context = getContext();

	const board = $derived(context.stateGameDerived.boardLayout());
	const main = $derived(context.stateLayoutDerived.mainLayout());

	const frameX = $derived(
		main.width * FRAME_POSITION_X + FRAME_OFFSET_X,
	);

	const frameY = $derived(
		main.height * FRAME_POSITION_Y + FRAME_OFFSET_Y,
	);

	const cellWidth = $derived(board.width / REEL_COLS);
	const cellHeight = $derived(board.height / REEL_ROWS);
</script>

<!--
	frame_bg is the teal chalkboard surface underneath the reels.
	Its own transparent padding is preserved; only its runtime size is changed.
-->
<Sprite
	key="reportCardFrameBg"
	x={frameX}
	y={frameY}
	anchor={0.5}
	width={FRAME_BG_WIDTH}
	height={FRAME_BG_HEIGHT}
	zIndex={-20}
/>

<!--
	The 6x6 grid is intentionally procedural. No separators are baked into the
	artwork, so cell geometry stays tied to the actual reel board.
-->
<Container
	x={board.x}
	y={board.y}
	pivot={board.pivot}
	skew={{
		x: REEL_SKEW_X,
		y: 0,
	}}
>
	{#each Array(REEL_COLS + 1) as _, columnIndex}
		{@const x = columnIndex * cellWidth}

		<Rectangle
			x={x - 1}
			y={0}
			width={2}
			height={board.height}
			backgroundColor={0xf3e7c8}
			alpha={0.22}
			zIndex={-10}
		/>
	{/each}

	{#each Array(REEL_ROWS + 1) as _, rowIndex}
		{@const y = rowIndex * cellHeight}

		<Rectangle
			x={0}
			y={y - 1}
			width={board.width}
			height={2}
			backgroundColor={0xf3e7c8}
			alpha={0.16}
			zIndex={-10}
		/>
	{/each}
</Container>
