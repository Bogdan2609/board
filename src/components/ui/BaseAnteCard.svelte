<script lang="ts">
	import { stateBet, stateModal, stateUi } from 'state-shared';
	import config from '../../game/config';
	import { getContext } from '../../game/context';
	import { stateReportCardUi } from '../../game/stateReportCardUi.svelte';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import HudChoiceCard from './HudChoiceCard.svelte';
	type Props = { x:number; y:number; };
	type ModeEntry = [string,{cost:number;feature:boolean;buyBonus:boolean;rtp:number;max_win:number;description:string;}];
	const props: Props = $props();
	const context = getContext();
	const modeOptions = (Object.entries(config.betModes) as ModeEntry[]).filter(([, mode]) => !mode.buyBonus);
	const activeModeKey = $derived(stateBet.activeBetModeKey.toLowerCase());
	const activeOption = $derived(modeOptions.find(([key]) => key.toLowerCase() === activeModeKey));
	const fmt = (v:number) => Number.isInteger(v) ? String(v) : v.toFixed(2).replace(/0+$/,'').replace(/\.$/,'');
	const label = (key:string,cost:number) => { const n=key.toLowerCase(); if(n==='base') return 'BASE'; if(n.startsWith('ante')) { const suffix=n.slice(4).replace(/^[_-]+/,'').replace(/[_-]+/g,' ').trim().toUpperCase(); return `${suffix?`ANTE ${suffix}`:'ANTE'} · ${fmt(cost)}×`; } return key.replace(/[_-]+/g,' ').toUpperCase(); };
	const activeLabel = $derived(activeOption ? label(activeOption[0], activeOption[1].cost) : stateBet.activeBetModeKey.toUpperCase());
	const optionsLabel = modeOptions.length === 1 ? '1 OPTION' : `${modeOptions.length} OPTIONS`;
	const disabled = $derived(!context.stateXstateDerived.isIdle() || Boolean(stateModal.modal) || stateUi.menuOpen);
	const openModeModal = () => { if(disabled) return; context.eventEmitter.broadcast({type:'soundPressGeneral'}); stateReportCardUi.modeModalOpen = true; };
</script>
<HudChoiceCard x={props.x} y={props.y} height={UI_LAYOUT.leftPanel.modeHeight} title="BET MODE" value={activeLabel} meta={optionsLabel} {disabled} active={stateReportCardUi.modeModalOpen} onpress={openModeModal}/>
