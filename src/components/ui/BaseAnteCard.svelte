<script lang="ts">
	import { Container, Rectangle, Sprite, Text } from 'pixi-svelte';
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

	const cardWidth = UI_LAYOUT.leftPanel.width;
	const cardHeight = UI_LAYOUT.leftPanel.modeHeight;

	const topY = 42;
	const topHeight = 74;
	const topCenterY = 78;

	const dividerY = 120;

	const bottomY = 128;
	const bottomHeight = 76;
	const bottomCenterY = 166;
</script>

<Container
	x={props.x}
	y={props.y + (pressed ? 2 : 0)}
	rotation={pressed ? 0 : 0.004}
	alpha={disabled ? 0.68 : 1}
>
	<Sprite
		key="reportCardUiBaseAnteBg"
		width={cardWidth}
		height={cardHeight}
	/>

	<!-- BASE hit/highlight layer -->
	<Container
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
			x={16}
			y={topY}
			width={cardWidth - 32}
			height={topHeight}
			backgroundColor={baseActive ? C.YELLOW : C.BLUE_HOVER}
			backgroundAlpha={baseActive ? 0.18 : hovered === 'BASE' ? 0.12 : 0.001}
			borderColor={baseActive ? C.GOLD : C.BLUE_HOVER}
			borderWidth={baseActive ? 2 : hovered === 'BASE' ? 1 : 0}
		/>
		<Text
			x={36}
			y={topCenterY}
			anchor={0.5}
			text={baseActive ? '✓' : ''}
			style={{ fontFamily: 'Arial', fontSize: 19, fontWeight: '700', fill: C.GREEN_DARK }}
		/>
		<Text
			x={cardWidth / 2}
			y={topCenterY}
			anchor={0.5}
			text="BASE"
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 22,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>
		<Text
			x={cardWidth - 30}
			y={topCenterY}
			anchor={0.5}
			text={baseActive ? 'ON' : ''}
			style={{ fontFamily: 'Comic Sans MS', fontSize: 10, fontWeight: '700', fill: C.GREEN_DARK }}
		/>
	</Container>

	<Text
		x={cardWidth / 2}
		y={dividerY}
		anchor={0.5}
		text="↕"
		style={{
			fontFamily: 'Arial',
			fontSize: 18,
			fontWeight: '700',
			fill: 0x315f89,
		}}
	/>

	<!-- ANTE hit/highlight layer -->
	<Container
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
			x={16}
			y={bottomY}
			width={cardWidth - 32}
			height={bottomHeight}
			backgroundColor={anteActive ? C.YELLOW : C.YELLOW_HOVER}
			backgroundAlpha={anteActive ? 0.2 : hovered === 'ANTE' ? 0.12 : 0.001}
			borderColor={anteActive ? C.GOLD : C.YELLOW_HOVER}
			borderWidth={anteActive ? 2 : hovered === 'ANTE' ? 1 : 0}
		/>
		<Text
			x={36}
			y={bottomCenterY}
			anchor={0.5}
			text={anteActive ? '✓' : ''}
			style={{ fontFamily: 'Arial', fontSize: 19, fontWeight: '700', fill: C.GREEN_DARK }}
		/>
		<Text
			x={cardWidth / 2}
			y={bottomCenterY}
			anchor={0.5}
			text="ANTE  1.2×"
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 20,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>
		<Text
			x={cardWidth - 30}
			y={bottomCenterY}
			anchor={0.5}
			text={anteActive ? 'ON' : ''}
			style={{ fontFamily: 'Comic Sans MS', fontSize: 10, fontWeight: '700', fill: C.GREEN_DARK }}
		/>
	</Container>
</Container>
