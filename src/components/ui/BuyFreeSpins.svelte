<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { stateBet, stateModal } from 'state-shared';

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

	const disabled = $derived(!context.stateXstateDerived.isIdle());

	const onPress = () => {
		if (disabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		// Our HUD has a dedicated BASE/ANTE selector, so BUY FREE SPINS
		// always does what its label says. Reset an activation mode first
		// so the buy flow cannot inherit ANTE's cost multiplier.
		stateBet.activeBetModeKey = 'BASE';
		stateModal.modal = { name: 'buyBonus' };
	};
</script>

<Container
	x={props.x}
	y={props.y + (pressed ? 3 : 0)}
	rotation={pressed ? -0.006 : -0.012}
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
	alpha={disabled ? 0.68 : 1}
>
	<Rectangle
		x={7}
		y={8}
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.buyHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={pressed ? 0.1 : 0.2}
	/>
	<Rectangle
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.buyHeight}
		backgroundColor={disabled ? 0xd9d4c7 : hovered ? 0xffe99f : C.YELLOW}
		borderColor={C.INK}
		borderWidth={3}
	/>
	<Rectangle
		x={4}
		y={4}
		width={UI_LAYOUT.leftPanel.width - 8}
		height={UI_LAYOUT.leftPanel.buyHeight - 8}
		backgroundColor={C.YELLOW}
		backgroundAlpha={0}
		borderColor={C.INK_SOFT}
		borderWidth={1}
		alpha={0.38}
	/>

	<!-- Masking-tape strips. -->
	<Rectangle
		x={18}
		y={-9}
		width={55}
		height={18}
		rotation={-0.08}
		backgroundColor={C.BLUE_TAPE}
		backgroundAlpha={0.86}
	/>
	<Rectangle
		x={UI_LAYOUT.leftPanel.width - 73}
		y={-7}
		width={54}
		height={18}
		rotation={0.07}
		backgroundColor={C.BLUE_TAPE}
		backgroundAlpha={0.86}
	/>

	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={29}
		anchor={{ x: 0.5, y: 0 }}
		text="BUY"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 20,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={55}
		anchor={{ x: 0.5, y: 0 }}
		text="FREE SPINS"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 24,
			fontWeight: '700',
			fill: disabled ? C.DISABLED_DARK : C.RED,
		}}
	/>
	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={96}
		anchor={{ x: 0.5, y: 0 }}
		text={disabled ? 'WAIT…' : '★  ★  ★'}
		style={{
			fontFamily: 'Arial',
			fontSize: 16,
			fontWeight: '700',
			fill: disabled ? C.DISABLED_DARK : C.GOLD,
		}}
	/>
</Container>
