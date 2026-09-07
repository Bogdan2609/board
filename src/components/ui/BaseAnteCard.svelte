<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { stateBet } from 'state-shared';

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

	const disabled = $derived(!context.stateXstateDerived.isIdle());
	const activeMode = $derived(stateBet.activeBetModeKey.toUpperCase());
	const baseActive = $derived(activeMode === 'BASE');
	const anteActive = $derived(activeMode === 'ANTE');

	const setMode = (mode: 'BASE' | 'ANTE') => {
		if (disabled || activeMode === mode) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBet.activeBetModeKey = mode;
	};

	const topHeight = 42;
	const bottomY = 60;
	const bottomHeight = UI_LAYOUT.leftPanel.modeHeight - bottomY;
</script>

<Container
	x={props.x}
	y={props.y}
	rotation={0.008}
	alpha={disabled ? 0.72 : 1}
>
	<Rectangle
		x={6}
		y={7}
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.modeHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.18}
	/>
	<Rectangle
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.modeHeight}
		backgroundColor={C.BLUE}
		borderColor={C.INK}
		borderWidth={3}
	/>
	<Rectangle
		x={4}
		y={4}
		width={UI_LAYOUT.leftPanel.width - 8}
		height={UI_LAYOUT.leftPanel.modeHeight - 8}
		backgroundColor={C.BLUE}
		backgroundAlpha={0}
		borderColor={C.INK_SOFT}
		borderWidth={1}
		alpha={0.34}
	/>

	<!-- BASE hit area / selected paper strip -->
	<Container
		y={pressed === 'BASE' ? 2 : 0}
		eventMode="static"
		cursor={disabled ? 'not-allowed' : 'pointer'}
		onpointerover={() => (hovered = 'BASE')}
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
			y={7}
			width={UI_LAYOUT.leftPanel.width - 16}
			height={topHeight}
			backgroundColor={baseActive ? C.PAPER_LIGHT : C.BLUE}
			backgroundAlpha={baseActive ? 0.9 : hovered === 'BASE' ? 0.34 : 0.001}
			borderColor={baseActive ? C.GOLD : C.BLUE}
			borderWidth={baseActive ? 2 : 0}
		/>
		<Text
			x={24}
			y={27}
			anchor={0.5}
			text={baseActive ? '★' : ''}
			style={{ fontFamily: 'Arial', fontSize: 15, fill: C.GOLD }}
		/>
		<Text
			x={UI_LAYOUT.leftPanel.width / 2}
			y={14}
			anchor={{ x: 0.5, y: 0 }}
			text="BASE"
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 20,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>
	</Container>

	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={40}
		anchor={{ x: 0.5, y: 0 }}
		text="↕"
		style={{
			fontFamily: 'Arial',
			fontSize: 22,
			fontWeight: '700',
			fill: 0x315f89,
		}}
	/>

	<!-- ANTE hit area / selected paper strip -->
	<Container
		y={pressed === 'ANTE' ? 2 : 0}
		eventMode="static"
		cursor={disabled ? 'not-allowed' : 'pointer'}
		onpointerover={() => (hovered = 'ANTE')}
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
			height={bottomHeight - 5}
			backgroundColor={anteActive ? C.YELLOW : C.BLUE}
			backgroundAlpha={anteActive ? 0.88 : hovered === 'ANTE' ? 0.34 : 0.001}
			borderColor={anteActive ? C.GOLD : C.BLUE}
			borderWidth={anteActive ? 2 : 0}
		/>
		<Text
			x={24}
			y={79}
			anchor={0.5}
			text={anteActive ? '★' : ''}
			style={{ fontFamily: 'Arial', fontSize: 15, fill: C.GOLD }}
		/>
		<Text
			x={UI_LAYOUT.leftPanel.width / 2}
			y={69}
			anchor={{ x: 0.5, y: 0 }}
			text="ANTE  1.2×"
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 19,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>
	</Container>
</Container>
