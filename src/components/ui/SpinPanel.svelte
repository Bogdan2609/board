<script lang="ts">
	import { Container, Sprite, Text } from 'pixi-svelte';
	import { OnHotkey } from 'components-shared';
	import {
		stateBet,
		stateBetDerived,
		stateConfig,
		stateModal,
	} from 'state-shared';

	import { getContext } from '../../game/context';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type SpinKey =
		| 'spin_default'
		| 'spin_disabled'
		| 'stop_default'
		| 'stop_disabled';

	type ControlKey =
		| 'spin'
		| 'turbo'
		| 'auto'
		| 'increase'
		| 'decrease';

	type Props = {
		x: number;
		topControlsY: number;
		spinY: number;
		betControlsY: number;
	};

	const props: Props = $props();
	const context = getContext();
	const C = HUD_COLORS;

	let stopDisabled = $state(false);
	let hovered = $state<ControlKey | null>(null);
	let pressed = $state<ControlKey | null>(null);

	// ---------------------------------------------------------------------
	// SPIN / STOP
	// ---------------------------------------------------------------------

	const getSpinKey = (): SpinKey => {
		if (context.stateXstateDerived.isIdle()) {
			if (!stateBetDerived.isBetCostAvailable()) {
				return 'spin_disabled';
			}

			return 'spin_default';
		}

		if (stopDisabled) return 'stop_disabled';

		if (stateBetDerived.hasAutoBetCounter()) {
			return 'stop_default';
		}

		if (stateBet.isTurbo) {
			return 'stop_disabled';
		}

		return 'stop_default';
	};

	const spinKey = $derived.by(getSpinKey);

	const spinDisabled = $derived(
		spinKey === 'spin_disabled' || spinKey === 'stop_disabled',
	);

	const isStop = $derived(
		spinKey === 'stop_default' || spinKey === 'stop_disabled',
	);

	const mainButtonSpriteKey = $derived(
		isStop
			? pressed === 'spin'
				? 'reportCardUiStopPressed'
				: 'reportCardUiStopIdle'
			: pressed === 'spin'
				? 'reportCardUiSpinPressed'
				: 'reportCardUiSpinIdle',
	);

	const onSpinPress = () => {
		if (spinDisabled) return;

		context.eventEmitter.broadcast({
			type: 'soundPressBet',
		});

		if (context.stateXstateDerived.isIdle()) {
			if (stateBetDerived.activeBetMode()?.type === 'buy') {
				stateBet.activeBetModeKey = 'BASE';
			}

			context.eventEmitter.broadcast({
				type: 'bet',
			});
			return;
		}

		if (stateBetDerived.hasAutoBetCounter()) {
			stateBet.autoSpinsCounter = 0;
		}

		context.eventEmitter.broadcast({
			type: 'stopButtonClick',
		});
	};

	// ---------------------------------------------------------------------
	// TURBO
	// ---------------------------------------------------------------------

	const turboActive = $derived(stateBet.isTurbo);
	const turboDisabled = $derived(stateBet.isSpaceHold);
	const turboSpriteKey = $derived(
		turboActive ? 'reportCardUiTurboOn' : 'reportCardUiTurboOff',
	);

	const onTurboPress = () => {
		if (turboDisabled) return;

		context.eventEmitter.broadcast({
			type: 'soundPressGeneral',
		});

		stateBetDerived.updateIsTurbo(!stateBet.isTurbo, {
			persistent: true,
		});
	};

	// ---------------------------------------------------------------------
	// AUTO SPIN
	// ---------------------------------------------------------------------

	const autoActive = $derived(stateBetDerived.hasAutoBetCounter());
	const autoSpriteKey = $derived(
		autoActive ? 'reportCardUiAutoOn' : 'reportCardUiAutoOff',
	);

	const autoDisabled = $derived.by(() => {
		if (stateBet.isSpaceHold) return true;

		if (
			!context.stateXstateDerived.isIdle() &&
			!stateBetDerived.hasAutoBetCounter()
		) {
			return true;
		}

		if (!stateBetDerived.isBetCostAvailable()) {
			return true;
		}

		return false;
	});

	const onAutoPress = () => {
		if (autoDisabled) return;

		context.eventEmitter.broadcast({
			type: 'soundPressGeneral',
		});

		if (stateBetDerived.hasAutoBetCounter()) {
			stateBet.autoSpinsCounter = 0;
			return;
		}

		stateModal.modal = {
			name: 'autoSpin',
		};
	};

	// ---------------------------------------------------------------------
	// BET + / -
	// ---------------------------------------------------------------------

	const betOptions = $derived(
		[...stateConfig.betAmountOptions].sort((a, b) => a - b),
	);

	const smallestBet = $derived(betOptions[0]);
	const biggestBet = $derived(betOptions[betOptions.length - 1]);

	const increaseDisabled = $derived(
		!context.stateXstateDerived.isIdle() ||
			betOptions.length === 0 ||
			stateBet.betAmount >= biggestBet,
	);

	const decreaseDisabled = $derived(
		!context.stateXstateDerived.isIdle() ||
			betOptions.length === 0 ||
			stateBet.betAmount <= smallestBet,
	);

	const onIncreasePress = () => {
		if (increaseDisabled) return;

		context.eventEmitter.broadcast({
			type: 'soundPressGeneral',
		});

		const next = betOptions.find((option) => option > stateBet.betAmount);

		stateBetDerived.setBetAmount(
			next ?? biggestBet ?? stateBet.betAmount,
		);
	};

	const onDecreasePress = () => {
		if (decreaseDisabled) return;

		context.eventEmitter.broadcast({
			type: 'soundPressGeneral',
		});

		const next = [...betOptions]
			.reverse()
			.find((option) => option < stateBet.betAmount);

		stateBetDerived.setBetAmount(
			next ?? smallestBet ?? stateBet.betAmount,
		);
	};

	const formattedBet = $derived(`$${stateBet.betAmount.toFixed(2)}`);

	// ---------------------------------------------------------------------
	// GEOMETRY
	// ---------------------------------------------------------------------

	const panelWidth = UI_LAYOUT.rightPanel.width;
	const topSize = UI_LAYOUT.rightPanel.topButtonSize;

	const spinWidth = UI_LAYOUT.rightPanel.spinWidth;
	const spinHeight = UI_LAYOUT.rightPanel.spinHeight;
	const spinX = (panelWidth - spinWidth) / 2;

	// Turbo is centered exactly on the SPIN axis.
	const turboX = spinX + (spinWidth - topSize) / 2;

	// Auto peels/curls to the right of Turbo instead of forming a rigid row.
	const autoX = turboX + UI_LAYOUT.rightPanel.autoOffsetX;
	const autoY = UI_LAYOUT.rightPanel.autoOffsetY;

	const stepWidth = UI_LAYOUT.rightPanel.betStepWidth;
	const betHeight = UI_LAYOUT.rightPanel.betHeight;
	const betGap = UI_LAYOUT.rightPanel.betGap;
	const betCenterWidth = panelWidth - stepWidth * 2 - betGap * 2;
	const betCenterX = stepWidth + betGap;
	const plusX = betCenterX + betCenterWidth + betGap;

	// right_bet_bg has a calculator on the left, so the dynamic text belongs
	// in the clean right-hand portion of the enlarged paper strip.
	const betTextX = betCenterWidth * 0.68;

	const clearPointer = () => {
		hovered = null;
		pressed = null;
	};

	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => {
			stopDisabled = true;

			stateBetDerived.updateIsTurbo(true, {
				persistent: false,
			});
		},

		stopButtonEnable: () => {
			stopDisabled = false;

			stateBetDerived.updateIsTurbo(false, {
				persistent: false,
			});
		},
	});
</script>

<OnHotkey
	hotkey="Space"
	disabled={spinDisabled}
	onpress={onSpinPress}
/>

<!-- TURBO -->
<Container
	x={props.x + turboX}
	y={props.topControlsY + (pressed === 'turbo' ? 3 : 0)}
	rotation={hovered === 'turbo' ? -0.008 : 0}
	eventMode="static"
	cursor={turboDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'turbo')}
	onpointerout={clearPointer}
	onpointerdown={() => !turboDisabled && (pressed = 'turbo')}
	onpointerup={() => {
		pressed = null;
		onTurboPress();
	}}
	onpointerupoutside={() => (pressed = null)}
	alpha={turboDisabled ? 0.42 : hovered === 'turbo' ? 1 : 0.96}
>
	<Sprite
		key={turboSpriteKey}
		width={topSize}
		height={topSize}
	/>
</Container>

<!-- AUTO SPIN -->
<Container
	x={props.x + autoX}
	y={props.topControlsY + autoY + (pressed === 'auto' ? 3 : 0)}
	rotation={
		hovered === 'auto'
			? UI_LAYOUT.rightPanel.autoRotation + 0.02
			: UI_LAYOUT.rightPanel.autoRotation
	}
	eventMode="static"
	cursor={autoDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'auto')}
	onpointerout={clearPointer}
	onpointerdown={() => !autoDisabled && (pressed = 'auto')}
	onpointerup={() => {
		pressed = null;
		onAutoPress();
	}}
	onpointerupoutside={() => (pressed = null)}
	alpha={autoDisabled ? 0.42 : hovered === 'auto' ? 1 : 0.96}
>
	<Sprite
		key={autoSpriteKey}
		width={topSize}
		height={topSize}
	/>
</Container>

<!-- MAIN SPIN / STOP -->
<Container
	x={props.x + spinX}
	y={props.spinY + (pressed === 'spin' ? 4 : 0)}
	rotation={
		pressed === 'spin'
			? 0
			: hovered === 'spin'
				? 0.002
				: 0.004
	}
	eventMode="static"
	cursor={spinDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'spin')}
	onpointerout={clearPointer}
	onpointerdown={() => !spinDisabled && (pressed = 'spin')}
	onpointerup={() => {
		pressed = null;
		onSpinPress();
	}}
	onpointerupoutside={() => (pressed = null)}
	alpha={spinDisabled ? 0.5 : hovered === 'spin' ? 1 : 0.98}
>
	<Sprite
		key={mainButtonSpriteKey}
		width={spinWidth}
		height={spinHeight}
	/>

	{#if !isStop}
		<Text
			x={spinWidth / 2}
			y={42}
			anchor={0.5}
			text="SPIN"
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 17,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>
	{/if}
</Container>

<!-- BET MINUS -->
<Container
	x={props.x - 25}
	y={props.betControlsY + (pressed === 'decrease' ? 3 : 0)}
	rotation={hovered === 'decrease' ? -0.012 : -0.02}
	eventMode="static"
	cursor={decreaseDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'decrease')}
	onpointerout={clearPointer}
	onpointerdown={() => !decreaseDisabled && (pressed = 'decrease')}
	onpointerup={() => {
		pressed = null;
		onDecreasePress();
	}}
	onpointerupoutside={() => (pressed = null)}
	alpha={decreaseDisabled ? 0.4 : hovered === 'decrease' ? 1 : 0.96}
>
	<Sprite
		key="reportCardUiBetMinus"
		width={stepWidth}
		height={betHeight}
	/>
</Container>

<!-- RIGHT BET VALUE -->
<Container
	x={props.x + betCenterX - 25}
	y={props.betControlsY - 25}
	rotation={0.006}
>
	<Sprite
		key="reportCardUiRightBetBg"
		width={betCenterWidth * 1.7}
		height={betHeight * 1.7}
	/>

	<Text
		x={betTextX + 25}
		y={42}
		anchor={{ x: 0.5, y: 0 }}
		text="BET"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 10,
			fontWeight: '700',
			fill: 0x245f9b,
		}}
	/>

	<Text
		x={betTextX + 25}
		y={50}
		anchor={{ x: 0.5, y: 0 }}
		text={formattedBet}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 22,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
</Container>

<!-- BET PLUS -->
<Container
	x={props.x + plusX + 50}
	y={props.betControlsY + (pressed === 'increase' ? 3 : 0) - 15}
	rotation={hovered === 'increase' ? 0.012 : 0.02}
	eventMode="static"
	cursor={increaseDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'increase')}
	onpointerout={clearPointer}
	onpointerdown={() => !increaseDisabled && (pressed = 'increase')}
	onpointerup={() => {
		pressed = null;
		onIncreasePress();
	}}
	onpointerupoutside={() => (pressed = null)}
	alpha={increaseDisabled ? 0.4 : hovered === 'increase' ? 1 : 0.96}
>
	<Sprite
		key="reportCardUiBetPlus"
		width={stepWidth + 15}
		height={betHeight + 15}
	/>
</Container>
