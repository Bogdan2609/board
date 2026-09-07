<script lang="ts">
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';

	const context = getContext();

	const canvas = $derived(
		context.stateLayoutDerived.canvasSizes(),
	);

	const SOURCE_WIDTH = 1672;
	const SOURCE_HEIGHT = 941;

	const scale = $derived(
		Math.max(
			canvas.width / SOURCE_WIDTH,
			canvas.height / SOURCE_HEIGHT,
		),
	);

	const backgroundWidth = $derived(
		SOURCE_WIDTH * scale,
	);

	const backgroundHeight = $derived(
		SOURCE_HEIGHT * scale,
	);
</script>

<Sprite
	key="reportCardBackground"
	x={canvas.width / 2}
	y={canvas.height / 2}
	anchor={0.5}
	width={backgroundWidth}
	height={backgroundHeight}
	zIndex={-100}
/>
