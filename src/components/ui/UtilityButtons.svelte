<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { stateModal, stateSound, stateUi } from 'state-shared';

	import { getContext } from '../../game/context';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type Props = {
		x: number;
		y: number;
	};

	type ButtonKey = 'sound' | 'info' | 'menu';

	const props: Props = $props();
	const context = getContext();
	const C = HUD_COLORS;

	let hovered = $state<ButtonKey | null>(null);
	let pressed = $state<ButtonKey | null>(null);

	const soundMuted = $derived(stateSound.volumeValueMaster === 0);

	const toggleSound = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateSound.volumeValueMaster = soundMuted ? 50 : 0;
	};

	const openInfo = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateModal.modal = { name: 'gameRules' };
	};

	const openMenu = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = true;
	};

	const activate = (key: ButtonKey) => {
		if (key === 'sound') toggleSound();
		if (key === 'info') openInfo();
		if (key === 'menu') openMenu();
	};

	const buttonX = (index: number) =>
		index * (UI_LAYOUT.leftButtons.buttonSize + UI_LAYOUT.leftButtons.gap);
</script>

<Container x={props.x} y={props.y}>
	<!-- SOUND -->
	<Container
		x={buttonX(0)}
		y={pressed === 'sound' ? 2 : 0}
		rotation={-0.025}
		eventMode="static"
		cursor="pointer"
		onpointerover={() => (hovered = 'sound')}
		onpointerout={() => {
			hovered = null;
			pressed = null;
		}}
		onpointerdown={() => (pressed = 'sound')}
		onpointerup={() => {
			pressed = null;
			activate('sound');
		}}
		onpointerupoutside={() => (pressed = null)}
	>
		<Rectangle
			x={4}
			y={5}
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={C.SHADOW}
			backgroundAlpha={0.17}
		/>
		<Rectangle
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={hovered === 'sound' ? C.YELLOW : C.PAPER_LIGHT}
			borderColor={C.INK}
			borderWidth={3}
		/>
		<Text
			x={UI_LAYOUT.leftButtons.buttonSize / 2}
			y={UI_LAYOUT.leftButtons.buttonSize / 2}
			anchor={0.5}
			text={soundMuted ? '🔇' : '🔊'}
			style={{ fontFamily: 'Arial', fontSize: 21, fontWeight: '700', fill: C.INK }}
		/>
	</Container>

	<!-- INFO -->
	<Container
		x={buttonX(1)}
		y={pressed === 'info' ? 2 : 0}
		rotation={0.018}
		eventMode="static"
		cursor="pointer"
		onpointerover={() => (hovered = 'info')}
		onpointerout={() => {
			hovered = null;
			pressed = null;
		}}
		onpointerdown={() => (pressed = 'info')}
		onpointerup={() => {
			pressed = null;
			activate('info');
		}}
		onpointerupoutside={() => (pressed = null)}
	>
		<Rectangle
			x={4}
			y={5}
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={C.SHADOW}
			backgroundAlpha={0.17}
		/>
		<Rectangle
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={hovered === 'info' ? 0xc4e7ff : C.BLUE}
			borderColor={C.INK}
			borderWidth={3}
		/>
		<Text
			x={UI_LAYOUT.leftButtons.buttonSize / 2}
			y={UI_LAYOUT.leftButtons.buttonSize / 2}
			anchor={0.5}
			text="i"
			style={{
				fontFamily: 'Georgia',
				fontSize: 27,
				fontWeight: '700',
				fill: 0x245f9b,
			}}
		/>
	</Container>

	<!-- MENU -->
	<Container
		x={buttonX(2)}
		y={pressed === 'menu' ? 2 : 0}
		rotation={-0.01}
		eventMode="static"
		cursor="pointer"
		onpointerover={() => (hovered = 'menu')}
		onpointerout={() => {
			hovered = null;
			pressed = null;
		}}
		onpointerdown={() => (pressed = 'menu')}
		onpointerup={() => {
			pressed = null;
			activate('menu');
		}}
		onpointerupoutside={() => (pressed = null)}
	>
		<Rectangle
			x={4}
			y={5}
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={C.SHADOW}
			backgroundAlpha={0.17}
		/>
		<Rectangle
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={hovered === 'menu' || stateUi.menuOpen ? C.YELLOW : C.PAPER_LIGHT}
			borderColor={C.INK}
			borderWidth={3}
		/>
		<Text
			x={UI_LAYOUT.leftButtons.buttonSize / 2}
			y={UI_LAYOUT.leftButtons.buttonSize / 2}
			anchor={0.5}
			text="≡"
			style={{ fontFamily: 'Arial', fontSize: 31, fontWeight: '700', fill: C.INK }}
		/>
	</Container>
</Container>
