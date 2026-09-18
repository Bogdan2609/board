<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import BalanceCard from './BalanceCard.svelte';
	import BaseAnteCard from './BaseAnteCard.svelte';
	import BuyFreeSpins from './BuyFreeSpins.svelte';
	import UtilityButtons from './UtilityButtons.svelte';
	type Props={x:number;topY:number;bottomY:number}; const props:Props=$props();
	const modeY=$derived(props.topY+UI_LAYOUT.leftPanel.buyHeight+UI_LAYOUT.leftPanel.gap);
	const balanceY=$derived(props.bottomY-UI_LAYOUT.leftStats.height);
	const utilityY=$derived(balanceY-UI_LAYOUT.leftUtility.gap-UI_LAYOUT.leftUtility.height);
</script>
<Container>
	<BuyFreeSpins x={props.x} y={props.topY}/>
	<BaseAnteCard x={props.x} y={modeY}/>
	<UtilityButtons x={props.x} y={utilityY}/>
	<BalanceCard x={props.x} y={balanceY}/>
</Container>
