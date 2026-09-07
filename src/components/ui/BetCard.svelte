<script lang="ts">
	import { Container, Sprite, Text } from 'pixi-svelte';
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
	const valueFontSize = $derived(value.length > 13 ? 15 : value.length > 10 ? 17 : 19);
	const disabled = $derived(!context.stateXstateDerived.isIdle());
	const menuOpen = $derived(stateModal.modal?.name === 'betAmountMenu');

	const onPress = () => {
		if (disabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'betAmountMenu' };
	};
</script>

<Container
	x={props.x}
	y={props.y + (pressed ? 2 : 0)}
	rotation={pressed ? 0 : 0.004}
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
	alpha={disabled ? 0.62 : hovered || menuOpen ? 1 : 0.96}
>
	<Sprite
		key="reportCardUiBetBg"
		width={UI_LAYOUT.leftStats.width}
		height={UI_LAYOUT.leftStats.height}
	/>

	<Text
		x={68}
		y={7}
		text={label}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 10,
			fontWeight: '700',
			fill: menuOpen ? C.GOLD : 0x315f89,
		}}
	/>
	<Text
		x={68}
		y={24}
		text={value}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: valueFontSize,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
	<Text
		x={UI_LAYOUT.leftStats.width - 22}
		y={UI_LAYOUT.leftStats.height / 2}
		anchor={0.5}
		text={menuOpen ? '⌄' : '›'}
		style={{
			fontFamily: 'Arial',
			fontSize: 21,
			fontWeight: '700',
			fill: disabled ? 0x8c969e : 0x315f89,
		}}
	/>
</Container>
