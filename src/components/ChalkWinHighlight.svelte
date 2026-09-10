<script lang="ts">
	import { onMount } from 'svelte';
	import { Sprite } from 'pixi-svelte';

	import { CELL_HEIGHT, CELL_WIDTH } from '../game/reelBoardLayout';
	import type { SymbolState } from '../game/types';

	type Props = {
		reelIndex: number;
		rowIndex: number;
		state: SymbolState;
	};

	const props: Props = $props();

	const ASSET_KEYS = [
		['chalkWin01Frame1', 'chalkWin01Frame2', 'chalkWin01Frame3', 'chalkWin01'],
		['chalkWin02Frame1', 'chalkWin02Frame2', 'chalkWin02Frame3', 'chalkWin02'],
		['chalkWin03Frame1', 'chalkWin03Frame2', 'chalkWin03Frame3', 'chalkWin03'],
	] as const;

	const variantIndex = $derived((props.reelIndex * 7 + props.rowIndex * 5) % 3);

	// When the static board takes over after the win animation, start on the
	// completed texture so the chalk animation does not replay a second time.
	let frameIndex = $state(props.state === 'win' ? 0 : 3);

	const assetKey = $derived(ASSET_KEYS[variantIndex][frameIndex]);

	onMount(() => {
		if (props.state !== 'win') {
			frameIndex = 3;
			return;
		}

		frameIndex = 0;

		const timers = [
			setTimeout(() => (frameIndex = 1), 45),
			setTimeout(() => (frameIndex = 2), 90),
			setTimeout(() => (frameIndex = 3), 135),
		];

		return () => timers.forEach(clearTimeout);
	});
</script>

<!-- Exact cell fit: 142x115 at runtime, with no bleed into adjacent cells. -->
<Sprite
	anchor={0.5}
	key={assetKey}
	width={CELL_WIDTH}
	height={CELL_HEIGHT}
/>
