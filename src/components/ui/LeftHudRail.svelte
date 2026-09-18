<script lang="ts">
	import { Container } from 'pixi-svelte';

	import { UI_LAYOUT } from '../../game/uiLayout';
	import BalanceCard from './BalanceCard.svelte';
	import BaseAnteCard from './BaseAnteCard.svelte';
	import BuyFreeSpins from './BuyFreeSpins.svelte';
	import UtilityButtons from './UtilityButtons.svelte';

	type Props = {
		x: number;
		y: number;
	};

	const props: Props = $props();

	const modeY = UI_LAYOUT.leftPanel.buyHeight + UI_LAYOUT.leftPanel.gap;
	const utilityY =
		modeY + UI_LAYOUT.leftPanel.modeHeight + UI_LAYOUT.leftPanel.gap;
	const balanceY =
		utilityY +
		UI_LAYOUT.leftButtons.buttonSize +
		UI_LAYOUT.leftButtons.statsGap;
</script>

<Container x={props.x} y={props.y}>
	<BuyFreeSpins x={0} y={0} />
	<BaseAnteCard x={0} y={modeY} />
	<UtilityButtons x={0} y={utilityY} />
	<BalanceCard x={0} y={balanceY} />
</Container>
