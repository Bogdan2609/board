<script lang="ts">
	import { Rectangle, Sprite } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();

	// Native approved background size; same aspect ratio on every screen.
	const BACKGROUND_WIDTH = 1672;
	const BACKGROUND_HEIGHT = 941;

	// Cover the canvas without stretching. Side areas are cropped on tall screens;
	// a separately composed portrait background will be needed for final mobile UI.
	const backgroundLayout = $derived.by(() => {
		const { width, height } = context.stateLayoutDerived.canvasSizes();
		const scale = Math.max(width / BACKGROUND_WIDTH, height / BACKGROUND_HEIGHT);
		return {
			x: width / 2,
			y: height / 2,
			width: BACKGROUND_WIDTH * scale,
			height: BACKGROUND_HEIGHT * scale,
		};
	});
</script>

<!-- Preserve the opaque fallback so that resizing never exposes a transparent canvas. -->
<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x191b17} zIndex={-3} />

<!-- One static environment in both base game and free spins; no old Spine background. -->
<Sprite key="uncleShopBackground" anchor={0.5} {...backgroundLayout} zIndex={-2} />
