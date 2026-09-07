<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { Container, Rectangle, Text } from 'pixi-svelte';
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

	// Match the stock Stake win label: animate book-event win updates so tumble
	// totals count smoothly instead of jumping between amounts.
	const winTween = new Tween(stateBet.winBookEventAmount);
	const value = $derived(bookEventAmountToCurrencyString(winTween.current));
	const valueFontSize = $derived(value.length > 16 ? 18 : value.length > 12 ? 20 : 22);

	$effect(() => {
		winTween.set(stateBet.winBookEventAmount);
	});
</script>

<Container x={props.x} y={props.y} rotation={-0.003}>
	<Rectangle
		x={5}
		y={5}
		width={props.width}
		height={UI_LAYOUT.winPanel.height}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.15}
	/>
	<Rectangle
		width={props.width}
		height={UI_LAYOUT.winPanel.height}
		backgroundColor={C.PURPLE}
		borderColor={C.INK}
		borderWidth={3}
	/>
	<Rectangle
		x={5}
		y={4}
		width={props.width - 10}
		height={UI_LAYOUT.winPanel.height - 8}
		backgroundColor={C.PURPLE}
		backgroundAlpha={0}
		borderColor={0x8b719f}
		borderWidth={1}
		alpha={0.36}
	/>
	<Text
		x={props.width / 2}
		y={6}
		anchor={{ x: 0.5, y: 0 }}
		text="WIN"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 12,
			fontWeight: '700',
			fill: 0x674881,
		}}
	/>
	<Text
		x={props.width / 2}
		y={25}
		anchor={{ x: 0.5, y: 0 }}
		text={value}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: valueFontSize,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
	<Text
		x={18}
		y={UI_LAYOUT.winPanel.height / 2}
		anchor={0.5}
		text="★"
		style={{ fontFamily: 'Arial', fontSize: 19, fill: C.GOLD }}
	/>
	<Text
		x={props.width - 18}
		y={UI_LAYOUT.winPanel.height / 2}
		anchor={0.5}
		text="★"
		style={{ fontFamily: 'Arial', fontSize: 19, fill: C.GOLD }}
	/>
</Container>
