<script lang="ts">
	import { stateModal, stateUi } from 'state-shared';
	import config from '../../game/config';
	import { getContext } from '../../game/context';
	import { stateReportCardUi } from '../../game/stateReportCardUi.svelte';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import HudChoiceCard from './HudChoiceCard.svelte';
	type Props = { x:number; y:number; };
	const props: Props = $props();
	const context = getContext();
	const bonusOptions = Object.entries(config.betModes).filter(([, mode]) => mode.buyBonus);
	const optionLabel = bonusOptions.length === 1 ? '1 OPTION' : `${bonusOptions.length} OPTIONS`;
	const modalOpen = $derived(stateModal.modal?.name === 'buyBonus');
	const disabled = $derived(!context.stateXstateDerived.isIdle() || stateUi.menuOpen || stateReportCardUi.modeModalOpen || (Boolean(stateModal.modal) && !modalOpen));
	const onPress = () => { if (disabled) return; context.eventEmitter.broadcast({ type: 'soundPressGeneral' }); stateModal.modal = { name: 'buyBonus' }; };
</script>
<HudChoiceCard x={props.x} y={props.y} height={UI_LAYOUT.leftPanel.buyHeight} title="BUY FREE SPINS" value={optionLabel} meta="SELECT FEATURE" {disabled} active={modalOpen} onpress={onPress}/>
