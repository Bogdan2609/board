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

	const disabled = $derived(
		!context.stateXstateDerived.isIdle() ||
			Boolean(stateModal.modal) ||
			stateUi.menuOpen,
	);

	const activeMode = $derived(stateBet.activeBetModeKey.toUpperCase());
	const textureKey = $derived(
		activeMode === 'ANTE'
			? 'reportCardUiModeAnteBg'
			: 'reportCardUiBaseAnteBg',
	);

	const openModeModal = () => {
		if (disabled) return;

		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		// IMPORTANT:
		// The MODE button NEVER changes BASE/ANTE directly.
		// It only opens its own modal. Selection happens inside that modal.
		stateReportCardUi.modeModalOpen = true;
	};
</script>

<Container
	x={props.x}
	y={props.y + (pressed ? 3 : hovered ? -1 : 0)}
	rotation={pressed ? 0 : hovered ? 0.002 : 0.004}
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
		openModeModal();
	}}
	onpointerupoutside={() => (pressed = false)}
	alpha={disabled ? 0.6 : 1}
>
	<Sprite
		key={textureKey}
		width={UI_LAYOUT.leftPanel.width}
		height={UI_LAYOUT.leftPanel.modeHeight}
	/>
</Container>
