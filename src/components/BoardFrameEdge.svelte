<script lang="ts">
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import {
		FRAME_EDGE_WIDTH,
		FRAME_EDGE_HEIGHT,
		FRAME_POSITION_X,
		FRAME_POSITION_Y,
		FRAME_OFFSET_X,
		FRAME_OFFSET_Y,
	} from '../game/reelBoardLayout';

	const context = getContext();
	const main = $derived(context.stateLayoutDerived.mainLayout());

	const frameX = $derived(
		main.width * FRAME_POSITION_X + FRAME_OFFSET_X,
	);

	const frameY = $derived(
		main.height * FRAME_POSITION_Y + FRAME_OFFSET_Y,
	);
</script>

<!--
	Outer wooden/navy rim. This component is mounted after all reel-content
	layers in Game.svelte so moving symbols cannot cover the physical frame.
-->
<Sprite
	key="reportCardFrameEdge"
	x={frameX}
	y={frameY}
	anchor={0.5}
	width={FRAME_EDGE_WIDTH}
	height={FRAME_EDGE_HEIGHT}
	zIndex={100}
/>
