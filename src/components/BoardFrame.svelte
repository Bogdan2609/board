<script lang="ts" module>
	export type EmitterEventBoardFrame =
		| { type: 'boardFrameGlowShow' }
		| { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
	import { Container, Rectangle, Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import {
		NOTEBOOK_WIDTH,
		NOTEBOOK_BASE_HEIGHT,
		NOTEBOOK_TOP_HEIGHT,
		NOTEBOOK_MIDDLE_HEIGHT,
		NOTEBOOK_BOTTOM_HEIGHT,
		NOTEBOOK_POSITION_X,
		NOTEBOOK_POSITION_Y,
		NOTEBOOK_OFFSET_X,
		NOTEBOOK_OFFSET_Y,
		REEL_COLS,
		REEL_ROWS,
		REEL_SKEW_X,
	} from '../game/reelBoardLayout';

	const context = getContext();

	const board = $derived(context.stateGameDerived.boardLayout());
	const main = $derived(context.stateLayoutDerived.mainLayout());

	// notebookY is the center of the original, undistorted notebook.
	// We derive the top edge from NOTEBOOK_BASE_HEIGHT, so increasing only the
	// middle slice never moves or stretches the spiral/top edge.
	const notebookX = $derived(
		main.width * NOTEBOOK_POSITION_X + NOTEBOOK_OFFSET_X,
	);

	const notebookY = $derived(
		main.height * NOTEBOOK_POSITION_Y + NOTEBOOK_OFFSET_Y,
	);

	const notebookTopY = $derived(
		notebookY - NOTEBOOK_BASE_HEIGHT / 2,
	);

	const notebookMiddleY = $derived(
		notebookTopY + NOTEBOOK_TOP_HEIGHT,
	);

	const notebookBottomY = $derived(
		notebookMiddleY + NOTEBOOK_MIDDLE_HEIGHT,
	);

	const cellWidth = $derived(board.width / REEL_COLS);
	const cellHeight = $derived(board.height / REEL_ROWS);
</script>

<!--
	Three slices from the same notebook_master.png.
	TOP and BOTTOM preserve their natural aspect/height.
	Only MIDDLE receives the extra vertical stretch.
-->
<Sprite
	key="notebookTop"
	x={notebookX}
	y={notebookTopY}
	anchor={{ x: 0.5, y: 0 }}
	width={NOTEBOOK_WIDTH}
	height={NOTEBOOK_TOP_HEIGHT}
	zIndex={-20}
/>

<Sprite
	key="notebookMiddle"
	x={notebookX}
	y={notebookMiddleY}
	anchor={{ x: 0.5, y: 0 }}
	width={NOTEBOOK_WIDTH}
	height={NOTEBOOK_MIDDLE_HEIGHT}
	zIndex={-20}
/>

<Sprite
	key="notebookBottom"
	x={notebookX}
	y={notebookBottomY}
	anchor={{ x: 0.5, y: 0 }}
	width={NOTEBOOK_WIDTH}
	height={NOTEBOOK_BOTTOM_HEIGHT}
	zIndex={-20}
/>

<!--
	The precise 6x6 grid follows the reel board, not the notebook artwork.
	That lets us move/skew the playable area independently from the paper.
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
			backgroundColor={0x76a9c9}
			alpha={0.16}
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
			backgroundColor={0x76a9c9}
			alpha={0.08}
			zIndex={-10}
		/>
	{/each}
</Container>
