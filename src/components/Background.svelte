<script lang="ts">
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';

	const context = getContext();

	const canvas = $derived(
		context.stateLayoutDerived.canvasSizes(),
	);

	const layoutType = $derived(
		context.stateLayoutDerived.layoutType(),
	);

	const SOURCE_WIDTH = 1672;
	const SOURCE_HEIGHT = 941;

	const isWideLayout = $derived(
		['desktop', 'landscape'].includes(layoutType),
	);

	// On desktop/landscape the complete classroom artwork must remain visible.
	// Rendering it directly to the canvas prevents the previous "cover" mode
	// from cropping the top/bottom when the browser aspect ratio is wider than
	// the 16:9 source image.
	//
	// Portrait/tablet keep the old cover behaviour for now because they use a
	// different composition strategy.
	const coverScale = $derived(
		Math.max(
			canvas.width / SOURCE_WIDTH,
			canvas.height / SOURCE_HEIGHT,
		),
	);

	const backgroundWidth = $derived(
		isWideLayout
			? canvas.width
			: SOURCE_WIDTH * coverScale,
	);

	const backgroundHeight = $derived(
		isWideLayout
			? canvas.height
			: SOURCE_HEIGHT * coverScale,
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
