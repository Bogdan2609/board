<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Tween } from 'svelte/motion';
	import { Container, Sprite, Text } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type Props = {
		x: number;
		y: number;
		width: number;
	};

	const props: Props = $props();
	const C = HUD_COLORS;

	const winTween = new Tween(stateBet.winBookEventAmount);
	const visibilityTween = new Tween(0, { duration: UI_LAYOUT.winPanel.fadeMs });

	const value = $derived(bookEventAmountToCurrencyString(winTween.current));
	const valueFontSize = $derived(value.length > 16 ? 20 : value.length > 12 ? 24 : 28);

	let hideTimer: ReturnType<typeof setTimeout> | undefined;

	$effect(() => {
		const amount = stateBet.winBookEventAmount;
		winTween.set(amount);

		if (hideTimer) clearTimeout(hideTimer);

		if (amount > 0) {
			visibilityTween.set(1);
			hideTimer = setTimeout(() => {
				visibilityTween.set(0);
			}, UI_LAYOUT.winPanel.holdMs);
		} else {
			visibilityTween.set(0);
		}
	});

	onDestroy(() => {
		if (hideTimer) clearTimeout(hideTimer);
	});
</script>

<!--
	WIN is always mounted and fades in only when a positive win exists.
	Each tumble update refreshes the hold timer; after the final update it fades away.
-->
<Container
	x={props.x}
	y={props.y + (1 - visibilityTween.current) * 12}
	rotation={-0.002}
	alpha={visibilityTween.current}
>
	<Sprite
		key="reportCardUiWinBg"
		width={props.width}
		height={UI_LAYOUT.winPanel.height}
	/>

	<Text
		x={props.width * 0.58}
		y={13}
		anchor={{ x: 0.5, y: 0 }}
		text="WIN"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 13,
			fontWeight: '700',
			fill: 0x315f89,
		}}
	/>
	<Text
		x={props.width * 0.58}
		y={38}
		anchor={{ x: 0.5, y: 0 }}
		text={value}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: valueFontSize,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
</Container>
