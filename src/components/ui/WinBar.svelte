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
	const valueFontSize = $derived(value.length > 16 ? 18 : value.length > 12 ? 21 : 24);

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
	WIN is intentionally always mounted: only alpha/Y are animated.
	Every positive win update refreshes the hold timer, so tumble wins keep the
	banner visible and the final total fades out after the last update.
-->
<Container
	x={props.x}
	y={props.y + (1 - visibilityTween.current) * 10}
	rotation={-0.002}
	alpha={visibilityTween.current}
>
	<Sprite
		key="reportCardUiWinBg"
		width={props.width}
		height={UI_LAYOUT.winPanel.height}
	/>

	<Text
		x={props.width * 0.56}
		y={12}
		anchor={{ x: 0.5, y: 0 }}
		text="WIN"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 12,
			fontWeight: '700',
			fill: 0x315f89,
		}}
	/>
	<Text
		x={props.width * 0.56}
		y={34}
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
