<script lang="ts">
	import { Container, Sprite, Text } from 'pixi-svelte';
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

	const onPress = () => {
		if (disabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		stateBet.activeBetModeKey = 'BASE';
		stateModal.modal = { name: 'buyBonus' };
	};
</script>

<Container
	x={props.x}
	y={props.y + (pressed ? 4 : 0)}
	rotation={pressed ? -0.002 : hovered ? -0.005 : -0.008}
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
	alpha={disabled ? 0.62 : hovered || modalOpen ? 1 : 0.97}
>
	<!-- Slightly oversize the art around the fixed left-column anchor. -->
	<Sprite
		key="reportCardUiBuyFreeSpinsBg"
		x={-4}
		y={-2}
		width={UI_LAYOUT.leftPanel.width + 8}
		height={UI_LAYOUT.leftPanel.buyHeight + 4}
	/>

	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={30}
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
		y={57}
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
		y={100}
		anchor={{ x: 0.5, y: 0 }}
		text={disabled ? 'WAIT…' : modalOpen ? '★  CHOOSE  ★' : '★  ★  ★'}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: modalOpen ? 12 : 15,
			fontWeight: '700',
			fill: disabled ? C.DISABLED_DARK : C.GOLD,
		}}
	/>
</Container>
