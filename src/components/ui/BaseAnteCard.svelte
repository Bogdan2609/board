<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { stateBet, stateModal, stateUi } from 'state-shared';

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

	let hovered = $state<'BASE' | 'ANTE' | null>(null);
	let pressed = $state<'BASE' | 'ANTE' | null>(null);

	const uiBlocked = $derived(Boolean(stateModal.modal) || stateUi.menuOpen);
	const disabled = $derived(!context.stateXstateDerived.isIdle() || uiBlocked);
	const activeMode = $derived(stateBet.activeBetModeKey.toUpperCase());
	const baseActive = $derived(activeMode === 'BASE');
	const anteActive = $derived(activeMode === 'ANTE');

	const setMode = (mode: 'BASE' | 'ANTE') => {
		if (disabled || activeMode === mode) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBet.activeBetModeKey = mode;
	};

	const topY = 7;
	const topHeight = 46;
	const dividerY = 56;
	const bottomY = 62;
	const bottomHeight = UI_LAYOUT.leftPanel.modeHeight - bottomY - 6;
</script>

<Container x={props.x} y={props.y} rotation={0.006} alpha={disabled ? 0.72 : 1}>
	<Rectangle
		x={5}
		y={6}
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.modeHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.16}
	/>
	<Rectangle
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.modeHeight}
		backgroundColor={C.PAPER_LIGHT}
		borderColor={C.INK}
		borderWidth={3}
	/>
	<Rectangle
		x={5}
		y={5}
		width={UI_LAYOUT.leftPanel.width - 10}
		height={UI_LAYOUT.leftPanel.modeHeight - 10}
		backgroundColor={C.PAPER_LIGHT}
		backgroundAlpha={0}
		borderColor={0x86b9d8}
		borderWidth={1}
		alpha={0.52}
	/>
	<Rectangle
		x={12}
		y={dividerY}
		width={UI_LAYOUT.leftPanel.width - 24}
		height={2}
		backgroundColor={0x86b9d8}
		backgroundAlpha={0.72}
	/>

	<!-- BASE -->
	<Container
		y={pressed === 'BASE' ? 2 : 0}
		eventMode="static"
		cursor={disabled ? 'not-allowed' : 'pointer'}
		onpointerover={() => !disabled && (hovered = 'BASE')}
		onpointerout={() => {
			hovered = null;
			pressed = null;
		}}
		onpointerdown={() => !disabled && (pressed = 'BASE')}
		onpointerup={() => {
			pressed = null;
			setMode('BASE');
		}}
		onpointerupoutside={() => (pressed = null)}
	>
		<Rectangle
			x={8}
			y={topY}
			width={UI_LAYOUT.leftPanel.width - 16}
			height={topHeight}
			backgroundColor={baseActive ? 0xfff7db : hovered === 'BASE' ? C.BLUE_HOVER : C.PAPER_LIGHT}
			backgroundAlpha={baseActive || hovered === 'BASE' ? 0.98 : 0.001}
			borderColor={baseActive ? C.GOLD : hovered === 'BASE' ? 0x83bad9 : C.PAPER_LIGHT}
			borderWidth={baseActive ? 3 : hovered === 'BASE' ? 1 : 0}
		/>
		<Text
			x={22}
			y={topY + topHeight / 2}
			anchor={0.5}
			text={baseActive ? '✓' : ''}
			style={{ fontFamily: 'Arial', fontSize: 17, fontWeight: '700', fill: C.GREEN_DARK }}
		/>
		<Text
			x={UI_LAYOUT.leftPanel.width / 2}
			y={16}
			anchor={{ x: 0.5, y: 0 }}
			text="BASE"
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 21,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>
		<Text
			x={UI_LAYOUT.leftPanel.width - 24}
			y={topY + topHeight / 2}
			anchor={0.5}
			text={baseActive ? 'ON' : ''}
			style={{ fontFamily: 'Comic Sans MS', fontSize: 10, fontWeight: '700', fill: C.GREEN_DARK }}
		/>
	</Container>

	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={45}
		anchor={{ x: 0.5, y: 0 }}
		text="↕"
		style={{
			fontFamily: 'Arial',
			fontSize: 20,
			fontWeight: '700',
			fill: 0x315f89,
		}}
	/>

	<!-- ANTE -->
	<Container
		y={pressed === 'ANTE' ? 2 : 0}
		eventMode="static"
		cursor={disabled ? 'not-allowed' : 'pointer'}
		onpointerover={() => !disabled && (hovered = 'ANTE')}
		onpointerout={() => {
			hovered = null;
			pressed = null;
		}}
		onpointerdown={() => !disabled && (pressed = 'ANTE')}
		onpointerup={() => {
			pressed = null;
			setMode('ANTE');
		}}
		onpointerupoutside={() => (pressed = null)}
	>
		<Rectangle
			x={8}
			y={bottomY}
			width={UI_LAYOUT.leftPanel.width - 16}
			height={bottomHeight}
			backgroundColor={anteActive ? C.YELLOW : hovered === 'ANTE' ? C.YELLOW_HOVER : C.PAPER_LIGHT}
			backgroundAlpha={anteActive || hovered === 'ANTE' ? 0.98 : 0.001}
			borderColor={anteActive ? C.GOLD : hovered === 'ANTE' ? C.GOLD_LIGHT : C.PAPER_LIGHT}
			borderWidth={anteActive ? 3 : hovered === 'ANTE' ? 1 : 0}
		/>
		<Text
			x={22}
			y={bottomY + bottomHeight / 2}
			anchor={0.5}
			text={anteActive ? '✓' : ''}
			style={{ fontFamily: 'Arial', fontSize: 17, fontWeight: '700', fill: C.GREEN_DARK }}
		/>
		<Text
			x={UI_LAYOUT.leftPanel.width / 2}
			y={74}
			anchor={{ x: 0.5, y: 0 }}
			text="ANTE  1.2×"
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 20,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>
		<Text
			x={UI_LAYOUT.leftPanel.width - 24}
			y={bottomY + bottomHeight / 2}
			anchor={0.5}
			text={anteActive ? 'ON' : ''}
			style={{ fontFamily: 'Comic Sans MS', fontSize: 10, fontWeight: '700', fill: C.GREEN_DARK }}
		/>
	</Container>
</Container>
