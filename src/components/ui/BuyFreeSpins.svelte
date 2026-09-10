<script lang="ts">
	import { Container, Sprite } from 'pixi-svelte';
	import { stateBet, stateModal, stateUi } from 'state-shared';

	import { getContext } from '../../game/context';
	import { stateReportCardUi } from '../../game/stateReportCardUi.svelte';
	import { UI_LAYOUT } from '../../game/uiLayout';

	type Props = {
		x: number;
		y: number;
	};

	const props: Props = $props();
	const context = getContext();

	let hovered = $state(false);
	let pressed = $state(false);

	const modalOpen = $derived(stateModal.modal?.name === 'buyBonus');
	const disabled = $derived(
		!context.stateXstateDerived.isIdle() ||
			stateUi.menuOpen ||
			stateReportCardUi.modeModalOpen ||
			(Boolean(stateModal.modal) && !modalOpen),
	);

	const onPress = () => {
		if (disabled) return;

		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		// BUY FREE SPINS has its OWN standard StakeEngine modal.
		stateBet.activeBetModeKey = 'BASE';
		stateModal.modal = { name: 'buyBonus' };
	};
</script>

<Container
	x={props.x}
	y={props.y + (pressed ? 4 : hovered ? -1 : 0)}
	rotation={pressed ? 0 : hovered ? -0.004 : -0.007}
	eventMode="static"
	cursor={disabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => !disabled && (hovered = true)}
	onpointerout={() => {
		hovered = false;
		pressed = false;
	}}
	onpointerdown={() => !disabled && (pressed = true)}
	onpointerup={() => {
		pressed = false;
		onPress();
	}}
	onpointerupoutside={() => (pressed = false)}
	alpha={disabled ? 0.58 : modalOpen || hovered ? 1 : 0.98}
>
	<Sprite
		key="reportCardUiBuyFreeSpinsBg"
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.buyHeight}
	/>
</Container>
