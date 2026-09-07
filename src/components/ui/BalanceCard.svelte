<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { Container, Sprite, Text } from 'pixi-svelte';
	import { stateBet } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';

	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type Props = {
		x: number;
		y: number;
	};

	const props: Props = $props();
	const C = HUD_COLORS;

	const balanceTween = new Tween(stateBet.balanceAmount);
	const value = $derived(numberToCurrencyString(balanceTween.current));
	const valueFontSize = $derived(value.length > 13 ? 16 : value.length > 10 ? 18 : 21);

	$effect(() => {
		balanceTween.set(stateBet.balanceAmount);
	});
</script>

<Container x={props.x - 6} y={props.y} rotation={-0.004}>
	<Sprite
		key="reportCardUiBalanceBg"
		width={UI_LAYOUT.leftStats.width * 1.4}
		height={UI_LAYOUT.leftStats.height * 1.4}
	/>

	<Text
		x={104}
		y={25}
		text="BALANCE"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 11,
			fontWeight: '700',
			fill: 0x315f89,
		}}
	/>
	<Text
		x={104}
		y={45}
		text={value}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: valueFontSize,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
</Container>
