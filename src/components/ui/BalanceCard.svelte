<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type Props = {
		x: number;
		y: number;
	};

	const props: Props = $props();
	const C = HUD_COLORS;

	// Keep the custom HUD behaviour aligned with the stock Stake label:
	// balance changes interpolate instead of snapping between values.
	const balanceTween = new Tween(stateBet.balanceAmount);
	const value = $derived(numberToCurrencyString(balanceTween.current));
	const valueFontSize = $derived(value.length > 13 ? 16 : value.length > 10 ? 18 : 20);

	$effect(() => {
		balanceTween.set(stateBet.balanceAmount);
	});
</script>

<Container x={props.x} y={props.y} rotation={-0.006}>
	<Rectangle
		x={5}
		y={5}
		width={UI_LAYOUT.leftStats.width}
		height={UI_LAYOUT.leftStats.height}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.16}
	/>
	<Rectangle
		width={UI_LAYOUT.leftStats.width}
		height={UI_LAYOUT.leftStats.height}
		backgroundColor={C.PAPER}
		borderColor={C.INK}
		borderWidth={3}
	/>
	<Text
		x={14}
		y={6}
		text="BALANCE"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 11,
			fontWeight: '700',
			fill: 0x315f89,
		}}
	/>
	<Text
		x={14}
		y={25}
		text={value}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: valueFontSize,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
</Container>
