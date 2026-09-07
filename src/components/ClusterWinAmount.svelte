<script lang="ts" module>
	export type RawWin = {
		win: number;
		mult: number;
		result: number;
		reel: number; // 0 | 1 | 2 | 3 | 4 | 5;
		row: number; // 1 | 2 | 3 | 4 | 5; // excluding the off top row and the off bottom row
	};
	export type Win = RawWin & { oncomplete: () => void };
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';

	import { BitmapText } from 'pixi-svelte';
	import { stateBetDerived } from 'state-shared';
	import { SECOND } from 'constants-shared/time';
	import { FadeContainer } from 'components-pixi';
	import { waitForTimeout } from 'utils-shared/wait';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { CELL_WIDTH, CELL_HEIGHT, SYMBOL_RENDER_SIZE } from '../game/reelBoardLayout';
	import { getContext } from '../game/context';

	type Props = { win: Win };

	const props: Props = $props();
	const context = getContext();
	const y = new Tween(0);
	const scale = new Tween(1);
	let show = $state(true);

	let showMultiplier = $state(props.win.mult > 1);

	// update showMultiplier
	onMount(async () => {
		await waitForTimeout(SECOND / stateBetDerived.timeScale());
		showMultiplier = false;
	});

	// update scale
	onMount(async () => {
		if (showMultiplier) {
			await waitForTimeout(SECOND);
			context.eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_multiplier_combine_a' });
			await scale.set(0.1, { duration: 200 / stateBetDerived.timeScale() });
			await scale.set(1, { duration: 200 / stateBetDerived.timeScale() });
		}
	});

	// update y
	onMount(async () => {
		await y.set(-CELL_HEIGHT, { duration: (SECOND * 2) / stateBetDerived.timeScale() });
		show = false;
	});
</script>

<FadeContainer
	{show}
	oncomplete={() => {
		if (!show) props.win.oncomplete();
	}}
>
	<BitmapText
		x={CELL_WIDTH * (props.win.reel + 0.5)}
		y={CELL_HEIGHT * (props.win.row - 0.5) + y.current}
		scale={scale.current}
		text={showMultiplier
			? `${bookEventAmountToCurrencyString(props.win.win)} X ${props.win.mult}`
			: bookEventAmountToCurrencyString(props.win.result)}
		anchor={0.5}
		style={{
			fontFamily: 'gold',
			fontSize: SYMBOL_RENDER_SIZE * 0.5,
		}}
	/>
</FadeContainer>
