<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { Container, Sprite, Text } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';

	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type Props = {
		x: number;
		y: number;
		width: number;
	};

	const props: Props = $props();
	const C = HUD_COLORS;

	const winTween = new Tween(stateBet.winBookEventAmount);
	const value = $derived(bookEventAmountToCurrencyString(winTween.current));
	const valueFontSize = $derived(value.length > 16 ? 17 : value.length > 12 ? 19 : 21);
	const hasWin = $derived(stateBet.winBookEventAmount > 0);

	$effect(() => {
		winTween.set(stateBet.winBookEventAmount);
	});
</script>

<Container x={props.x} y={props.y} rotation={-0.002}>
	<Sprite
		key="reportCardUiWinBg"
		width={props.width}
		height={UI_LAYOUT.winPanel.height}
		alpha={hasWin ? 1 : 0.96}
	/>

	<Text
		x={props.width / 2}
		y={7}
		anchor={{ x: 0.5, y: 0 }}
		text={hasWin ? '★  WIN  ★' : 'WIN'}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 11,
			fontWeight: '700',
			fill: hasWin ? C.GOLD : 0x674881,
		}}
	/>
	<Text
		x={props.width / 2}
		y={25}
		anchor={{ x: 0.5, y: 0 }}
		text={value}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: valueFontSize,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
</Container>
