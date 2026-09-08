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
	const rulesOpen = $derived(stateModal.modal?.name === 'gameRules');

	const toggleSound = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateSound.volumeValueMaster = soundMuted ? 50 : 0;
	};

	const openInfo = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = false;
		stateModal.modal = { name: 'gameRules' };
	};

	const openMenu = () => {
		if (stateModal.modal) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = !stateUi.menuOpen;
	};

	const activate = (key: ButtonKey) => {
		if (key === 'sound') toggleSound();
		if (key === 'info') openInfo();
		if (key === 'menu') openMenu();
	};

	const buttonX = (index: number) =>
		index * (UI_LAYOUT.leftButtons.buttonSize + UI_LAYOUT.leftButtons.gap);

	const buttonPaper = (key: ButtonKey) => {
		if (pressed === key) return C.YELLOW_PRESSED;
		if (key === 'sound' && soundMuted) return 0xf5d8d3;
		if (key === 'info' && rulesOpen) return C.YELLOW;
		if (key === 'menu' && stateUi.menuOpen) return C.YELLOW;
		if (hovered === key) return key === 'info' ? C.BLUE_HOVER : C.YELLOW_HOVER;
		return key === 'info' ? C.BLUE : C.PAPER_LIGHT;
	};
</script>

<Container x={props.x} y={props.y}>
	<!-- SOUND -->
	<Container
		x={buttonX(0)}
		y={pressed === 'sound' ? 3 : 0}
		rotation={pressed === 'sound' ? -0.006 : -0.018}
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
			x={pressed === 'sound' ? 2 : 4}
			y={pressed === 'sound' ? 2 : 5}
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={C.SHADOW}
			backgroundAlpha={pressed === 'sound' ? 0.08 : 0.17}
		/>
		<Rectangle
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={buttonPaper('sound')}
			borderColor={soundMuted ? C.RED : C.INK}
			borderWidth={3}
		/>
		<Text
			x={UI_LAYOUT.leftButtons.buttonSize / 2}
			y={UI_LAYOUT.leftButtons.buttonSize / 2}
			anchor={0.5}
			text={soundMuted ? '🔇' : '🔊'}
			style={{ fontFamily: 'Arial', fontSize: 24, fontWeight: '700', fill: C.INK }}
		/>
	</Container>

	<!-- INFO -->
	<Container
		x={buttonX(1)}
		y={pressed === 'info' ? 3 : 0}
		rotation={pressed === 'info' ? 0.004 : 0.014}
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
			x={pressed === 'info' ? 2 : 4}
			y={pressed === 'info' ? 2 : 5}
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={C.SHADOW}
			backgroundAlpha={pressed === 'info' ? 0.08 : 0.17}
		/>
		<Rectangle
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={buttonPaper('info')}
			borderColor={rulesOpen ? C.GOLD : C.INK}
			borderWidth={rulesOpen ? 4 : 3}
		/>
		<Text
			x={UI_LAYOUT.leftButtons.buttonSize / 2}
			y={UI_LAYOUT.leftButtons.buttonSize / 2}
			anchor={0.5}
			text="i"
			style={{
				fontFamily: 'Georgia',
				fontSize: 31,
				fontWeight: '700',
				fill: 0x245f9b,
			}}
		/>
	</Container>

	<!-- MENU -->
	<Container
		x={buttonX(2)}
		y={pressed === 'menu' ? 3 : 0}
		rotation={pressed === 'menu' ? 0 : -0.008}
		eventMode="static"
		cursor={stateModal.modal ? 'not-allowed' : 'pointer'}
		onpointerover={() => !stateModal.modal && (hovered = 'menu')}
		onpointerout={() => {
			hovered = null;
			pressed = null;
		}}
		onpointerdown={() => !stateModal.modal && (pressed = 'menu')}
		onpointerup={() => {
			pressed = null;
			activate('menu');
		}}
		onpointerupoutside={() => (pressed = null)}
		alpha={stateModal.modal ? 0.5 : 1}
	>
		<Rectangle
			x={pressed === 'menu' ? 2 : 4}
			y={pressed === 'menu' ? 2 : 5}
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={C.SHADOW}
			backgroundAlpha={pressed === 'menu' ? 0.08 : 0.17}
		/>
		<Rectangle
			width={UI_LAYOUT.leftButtons.buttonSize}
			height={UI_LAYOUT.leftButtons.buttonSize}
			backgroundColor={buttonPaper('menu')}
			borderColor={stateUi.menuOpen ? C.GOLD : C.INK}
			borderWidth={stateUi.menuOpen ? 4 : 3}
		/>
		<Text
			x={UI_LAYOUT.leftButtons.buttonSize / 2}
			y={UI_LAYOUT.leftButtons.buttonSize / 2}
			anchor={0.5}
			text={stateUi.menuOpen ? '×' : '≡'}
			style={{ fontFamily: 'Arial', fontSize: 35, fontWeight: '700', fill: C.INK }}
		/>
	</Container>
</Container>
