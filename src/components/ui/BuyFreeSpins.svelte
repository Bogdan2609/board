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

<Container x={props.x} y={props.y} rotation={-0.012}>
	<Rectangle
		x={7}
		y={8}
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.buyHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.2}
	/>
	<Rectangle
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.buyHeight}
		backgroundColor={C.YELLOW}
		borderColor={C.INK}
		borderWidth={3}
	/>
	<Rectangle
		x={4}
		y={4}
		width={UI_LAYOUT.leftPanel.width - 8}
		height={UI_LAYOUT.leftPanel.buyHeight - 8}
		backgroundColor={C.YELLOW}
		backgroundAlpha={0}
		borderColor={C.INK_SOFT}
		borderWidth={1}
		alpha={0.38}
	/>

	<!-- Masking-tape strips. -->
	<Rectangle
		x={18}
		y={-9}
		width={55}
		height={18}
		rotation={-0.08}
		backgroundColor={C.BLUE_TAPE}
		backgroundAlpha={0.86}
	/>
	<Rectangle
		x={UI_LAYOUT.leftPanel.width - 73}
		y={-7}
		width={54}
		height={18}
		rotation={0.07}
		backgroundColor={C.BLUE_TAPE}
		backgroundAlpha={0.86}
	/>

	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={29}
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
		y={55}
		anchor={{ x: 0.5, y: 0 }}
		text="FREE SPINS"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 24,
			fontWeight: '700',
			fill: C.RED,
		}}
	/>
	<Text
		x={UI_LAYOUT.leftPanel.width / 2}
		y={96}
		anchor={{ x: 0.5, y: 0 }}
		text="★  ★  ★"
		style={{
			fontFamily: 'Arial',
			fontSize: 16,
			fontWeight: '700',
			fill: C.GOLD,
		}}
	/>
</Container>
