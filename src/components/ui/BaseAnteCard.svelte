<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';

	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type Props = {
		x: number;
		y: number;
	};

	const props: Props = $props();
	const C = HUD_COLORS;
</script>

<Container x={props.x} y={props.y} rotation={0.008}>
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
	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={40}
		anchor={{ x: 0.5, y: 0 }}
		text="↔"
		style={{
			fontFamily: 'Arial',
			fontSize: 25,
			fontWeight: '700',
			fill: 0x315f89,
		}}
	/>
	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={69}
		anchor={{ x: 0.5, y: 0 }}
		text="ANTE"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 20,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
</Container>
