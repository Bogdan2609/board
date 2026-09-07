<script lang="ts">
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import {
		NOTEBOOK_WIDTH,
		NOTEBOOK_HEIGHT,
		NOTEBOOK_OFFSET_X,
		NOTEBOOK_OFFSET_Y,
	} from '../game/reelBoardLayout';

	const context = getContext();
	const board = $derived(context.stateGameDerived.boardLayout());

	const notebookX = $derived(board.x + NOTEBOOK_OFFSET_X);
	const notebookY = $derived(board.y + NOTEBOOK_OFFSET_Y);
</script>

<Sprite
	key="reportCardFrameEdge"
	x={notebookX}
	y={notebookY}
	anchor={0.5}
	width={NOTEBOOK_WIDTH}
	height={NOTEBOOK_HEIGHT}
	zIndex={100}
/>
