<script lang="ts">
	import { Container, Rectangle, Sprite, Text } from 'pixi-svelte';
	import { stateModal, stateUi } from 'state-shared';

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

	const disabled = $derived(Boolean(stateModal.modal));
	const buttonWidth = UI_LAYOUT.leftPanel.width;
	const buttonHeight = UI_LAYOUT.leftButtons.buttonSize;
	const iconSize = 36;

	const toggleMenu = () => {
		if (disabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = !stateUi.menuOpen;
	};

	const backgroundColor = $derived(
		pressed
			? C.YELLOW_PRESSED
			: hovered || stateUi.menuOpen
				? C.YELLOW_HOVER
				: C.PAPER,
	);
</script>

<Container
	x={props.x}
	y={props.y + (pressed ? 2 : 0)}
	rotation={pressed ? 0 : -0.004}
	eventMode="static"
	cursor={disabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => !disabled && (hovered = true)}
	onpointerout={() => {
		hovered = false;
		pressed = false;
	}}
	onpointerdown={() => !disabled && (pressed = true)}
	onpointerup={() => {
		pressed = false;
		toggleMenu();
	}}
	onpointerupoutside={() => (pressed = false)}
	alpha={disabled ? 0.5 : 1}
>
	<Rectangle
		width={buttonWidth}
		height={buttonHeight}
		backgroundColor={backgroundColor}
		backgroundAlpha={0.96}
		borderColor={stateUi.menuOpen ? C.GOLD_LIGHT : C.GOLD}
		borderWidth={2}
	/>

	<Sprite
		key={stateUi.menuOpen ? 'reportCardUiMenuClose' : 'reportCardUiMenu'}
		x={16}
		y={(buttonHeight - iconSize) / 2}
		width={iconSize}
		height={iconSize}
	/>

	<Text
		x={66}
		y={buttonHeight / 2}
		anchor={{ x: 0, y: 0.5 }}
		text={stateUi.menuOpen ? 'CLOSE' : 'MENU'}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 15,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
</Container>
