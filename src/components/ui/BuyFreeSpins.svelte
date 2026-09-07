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
	const modalOpen = $derived(stateModal.modal?.name === 'buyBonus');
	const paperColor = $derived(
		disabled
			? 0xd9d4c7
			: pressed
				? C.YELLOW_PRESSED
				: hovered || modalOpen
					? C.YELLOW_HOVER
					: C.YELLOW,
	);

	const onPress = () => {
		if (disabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		// BUY FREE SPINS is independent from the BASE/ANTE activation switch.
		// Reset ANTE first so the buy flow cannot inherit its 1.2x multiplier.
		stateBet.activeBetModeKey = 'BASE';
		stateModal.modal = { name: 'buyBonus' };
	};
</script>

<Container
	x={props.x}
	y={props.y + (pressed ? 4 : 0)}
	rotation={pressed ? -0.004 : hovered ? -0.008 : -0.012}
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
		x={pressed ? 3 : 7}
		y={pressed ? 4 : 8}
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.buyHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={pressed ? 0.08 : hovered ? 0.15 : 0.2}
	/>
	<Rectangle
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.buyHeight}
		backgroundColor={paperColor}
		borderColor={modalOpen ? C.GOLD : C.INK}
		borderWidth={modalOpen ? 4 : 3}
	/>
	<Rectangle
		x={4}
		y={4}
		width={UI_LAYOUT.leftPanel.width - 8}
		height={UI_LAYOUT.leftPanel.buyHeight - 8}
		backgroundColor={paperColor}
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
		rotation={hovered ? -0.05 : -0.08}
		backgroundColor={C.BLUE_TAPE}
		backgroundAlpha={0.86}
	/>
	<Rectangle
		x={UI_LAYOUT.leftPanel.width - 73}
		y={-7}
		width={54}
		height={18}
		rotation={hovered ? 0.04 : 0.07}
		backgroundColor={C.BLUE_TAPE}
		backgroundAlpha={0.86}
	/>

	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={28}
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
		y={54}
		anchor={{ x: 0.5, y: 0 }}
		text="FREE SPINS"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: hovered ? 25 : 24,
			fontWeight: '700',
			fill: disabled ? C.DISABLED_DARK : C.RED,
		}}
	/>
	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={95}
		anchor={{ x: 0.5, y: 0 }}
		text={disabled ? 'WAIT…' : modalOpen ? '★  CHOOSE  ★' : '★  ★  ★'}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: modalOpen ? 12 : 16,
			fontWeight: '700',
			fill: disabled ? C.DISABLED_DARK : C.GOLD,
		}}
	/>
</Container>
