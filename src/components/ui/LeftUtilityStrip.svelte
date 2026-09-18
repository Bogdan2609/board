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

	type ButtonKey = 'menu' | 'mute' | 'sounds';

	const props: Props = $props();
	const context = getContext();
	const C = HUD_COLORS;

	let hovered = $state<ButtonKey | null>(null);
	let pressed = $state<ButtonKey | null>(null);

	const soundMuted = $derived(stateSound.volumeValueMaster === 0);

	const buttons = [
		{ key: 'menu', label: '☰ MENU', width: 70 },
		{ key: 'mute', label: 'MUTE', width: 42 },
		{ key: 'sounds', label: 'SOUND', width: 44 },
	] as const;

	const totalWidth =
		buttons.reduce((sum, button) => sum + button.width, 0) +
		UI_LAYOUT.leftUtility.buttonGap * (buttons.length - 1);

	const startX = $derived(
		(UI_LAYOUT.leftUtility.width - totalWidth) / 2,
	);

	const buttonX = (index: number) => {
		let x = startX;

		for (let i = 0; i < index; i++) {
			x += buttons[i].width + UI_LAYOUT.leftUtility.buttonGap;
		}

		return x;
	};

	const menuDisabled = $derived(Boolean(stateModal.modal));

	const activate = (key: ButtonKey) => {
		if (key === 'menu' && menuDisabled) return;

		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (key === 'menu') {
			stateUi.menuOpen = !stateUi.menuOpen;
			return;
		}

		if (key === 'mute') {
			stateSound.volumeValueMaster = 0;
			return;
		}

		stateSound.volumeValueMaster = soundMuted ? 50 : 0;
	};

	const fillColor = (key: ButtonKey) => {
		if (pressed === key) return C.YELLOW_PRESSED;
		if (hovered === key) return C.YELLOW_HOVER;
		if (key === 'sounds' && !soundMuted) return C.YELLOW;
		return C.PAPER_LIGHT;
	};
</script>

<Container x={props.x} y={props.y} rotation={-0.004}>
	{#each buttons as button, index}
		<Container
			x={buttonX(index)}
			y={pressed === button.key ? 2 : 0}
			eventMode="static"
			cursor={button.key === 'menu' && menuDisabled ? 'not-allowed' : 'pointer'}
			onpointerover={() => {
				if (button.key === 'menu' && menuDisabled) return;
				hovered = button.key;
			}}
			onpointerout={() => {
				hovered = null;
				pressed = null;
			}}
			onpointerdown={() => {
				if (button.key === 'menu' && menuDisabled) return;
				pressed = button.key;
			}}
			onpointerup={() => {
				pressed = null;
				activate(button.key);
			}}
			onpointerupoutside={() => (pressed = null)}
			alpha={button.key === 'menu' && menuDisabled ? 0.45 : 1}
		>
			<Rectangle
				width={button.width}
				height={UI_LAYOUT.leftUtility.height}
				backgroundColor={fillColor(button.key)}
				borderColor={C.GOLD}
				borderWidth={1}
			/>
			<Text
				x={button.width / 2}
				y={UI_LAYOUT.leftUtility.height / 2}
				anchor={0.5}
				text={button.label}
				style={{
					fontFamily: 'Comic Sans MS',
					fontSize: 10,
					fontWeight: '700',
					fill: C.INK,
				}}
			/>
		</Container>
	{/each}
</Container>
