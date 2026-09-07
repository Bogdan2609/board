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

	const buttons = [
		{ label: '🔊', bg: C.PAPER_LIGHT, rot: -0.025, family: 'Arial', size: 21 },
		{ label: 'i', bg: C.BLUE, rot: 0.018, family: 'Georgia', size: 27 },
		{ label: '≡', bg: C.PAPER_LIGHT, rot: -0.01, family: 'Arial', size: 31 },
	] as const;
</script>

<Container x={props.x} y={props.y}>
	{#each buttons as button, index}
		{@const buttonX = index * (UI_LAYOUT.leftButtons.buttonSize + UI_LAYOUT.leftButtons.gap)}
		<Container x={buttonX} rotation={button.rot}>
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
				backgroundColor={button.bg}
				borderColor={C.INK}
				borderWidth={3}
			/>
			<Text
				x={UI_LAYOUT.leftButtons.buttonSize / 2}
				y={UI_LAYOUT.leftButtons.buttonSize / 2}
				anchor={0.5}
				text={button.label}
				style={{
					fontFamily: button.family,
					fontSize: button.size,
					fontWeight: '700',
					fill: index === 1 ? 0x245f9b : C.INK,
				}}
			/>
		</Container>
	{/each}
</Container>
