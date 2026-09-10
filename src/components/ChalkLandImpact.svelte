<script lang="ts">
	import { onMount } from 'svelte';
	import { Sprite } from 'pixi-svelte';

	import { CELL_HEIGHT, CELL_WIDTH } from '../game/reelBoardLayout';

	const FRAMES = [
		'chalkImpact01',
		'chalkImpact02',
		'chalkImpact03',
		'chalkImpact04',
	] as const;

	let frameIndex = $state(0);
	let show = $state(true);

	onMount(() => {
		const timers = [
			setTimeout(() => (frameIndex = 1), 32),
			setTimeout(() => (frameIndex = 2), 64),
			setTimeout(() => (frameIndex = 3), 96),
			setTimeout(() => (show = false), 132),
		];

		return () => timers.forEach(clearTimeout);
	});
</script>

{#if show}
	<Sprite
		anchor={0.5}
		key={FRAMES[frameIndex]}
		width={CELL_WIDTH}
		height={CELL_HEIGHT}
	/>
{/if}
