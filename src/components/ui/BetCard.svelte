<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { stateBetDerived, stateModal } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import { getContext } from '../../game/context';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type Props = {
		x: number;
		y: number;
	};

	const props: Props = $props();
	const context = getContext();
	const C = HUD_COLORS;

	let hovered = $state(false);
	let pressed = $state(false);

	const label = $derived(stateBetDerived.activeBetMode()?.text.betAmountLabel || 'BET');
	const value = $derived(numberToCurrencyString(stateBetDerived.betCost()));
	const valueFontSize = $derived(value.length > 13 ? 16 : value.length > 10 ? 18 : 20);
	const disabled = $derived(!context.stateXstateDerived.isIdle());
	const menuOpen = $derived(stateModal.modal?.name === 'betAmountMenu');
	const paperColor = $derived(
		disabled ? 0xcbddea : pressed ? 0xb4d9ef : hovered || menuOpen ? C.BLUE_HOVER : C.BLUE,
	);

	const onPress = () => {
		if (disabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'betAmountMenu' };
	};
</script>

<Container
	x={props.x}
	y={props.y + (pressed ? 2 : 0)}
	rotation={pressed ? 0 : 0.006}
	eventMode="static"
	cursor={disabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = true)}
	onpointerout={() => {
		hovered = false;
		pressed = false;
	}}
	onpointerdown={() => !disabled && (pressed = true)}
	onpointerup={() => {
		pressed = false;
		onPress();
	}}
	onpointerupoutside={() => (pressed = false)}
	alpha={disabled ? 0.72 : 1}
>
	<Rectangle
		x={pressed ? 2 : 5}
		y={pressed ? 2 : 5}
		width={UI_LAYOUT.leftStats.width}
		height={UI_LAYOUT.leftStats.height}
		backgroundColor={C.SHADOW}
		backgroundAlpha={pressed ? 0.08 : 0.16}
	/>
	<Rectangle
		width={UI_LAYOUT.leftStats.width}
		height={UI_LAYOUT.leftStats.height}
		backgroundColor={paperColor}
		borderColor={menuOpen ? C.GOLD : C.INK}
		borderWidth={menuOpen ? 4 : 3}
	/>
	<Text
		x={14}
		y={6}
		text={label}
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
	<Text
		x={UI_LAYOUT.leftStats.width - 16}
		y={UI_LAYOUT.leftStats.height / 2}
		anchor={0.5}
		text={menuOpen ? '⌄' : '›'}
		style={{
			fontFamily: 'Arial',
			fontSize: 24,
			fontWeight: '700',
			fill: disabled ? 0x8c969e : 0x315f89,
		}}
	/>
</Container>
