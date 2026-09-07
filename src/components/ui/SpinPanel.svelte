<script lang="ts">
	import { Container, Rectangle, Sprite, Text } from 'pixi-svelte';
	import { OnHotkey } from 'components-shared';
	import { stateBet, stateBetDerived, stateConfig } from 'state-shared';

	import { getContext } from '../../game/context';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type SpinKey = 'spin_default' | 'spin_disabled' | 'stop_default' | 'stop_disabled';
	type ControlKey = 'spin' | 'increase' | 'fast' | 'decrease';

	type Props = {
		x: number;
		spinY: number;
		fastY: number;
	};

	const props: Props = $props();
	const context = getContext();
	const C = HUD_COLORS;

	let stopDisabled = $state(false);
	let hovered = $state<ControlKey | null>(null);
	let pressed = $state<ControlKey | null>(null);

	const getSpinKey = (): SpinKey => {
		if (context.stateXstateDerived.isIdle()) {
			if (!stateBetDerived.isBetCostAvailable()) return 'spin_disabled';
			return 'spin_default';
		}

		if (stopDisabled) return 'stop_disabled';
		if (stateBetDerived.hasAutoBetCounter()) return 'stop_default';
		if (stateBet.isTurbo) return 'stop_disabled';
		return 'stop_default';
	};

	const spinKey = $derived.by(getSpinKey);
	const spinDisabled = $derived(['spin_disabled', 'stop_disabled'].includes(spinKey));
	const isStop = $derived(spinKey.startsWith('stop'));
	const spinLabel = $derived(isStop ? 'STOP' : 'SPIN');
	const spinSpriteKey = $derived(
		pressed === 'spin' ? 'reportCardUiSpinPressed' : 'reportCardUiSpinIdle',
	);

	// -------------------------------------------------------------------------
	// Separate lower controls: [+] [FAST] [-]
	// -------------------------------------------------------------------------
	const controlGap = 6;
	const stepWidth = 48;
	const turboWidth = UI_LAYOUT.rightPanel.spinWidth - stepWidth * 2 - controlGap * 2;
	const turboX = stepWidth + controlGap;
	const decreaseX = turboX + turboWidth + controlGap;

	const fastActive = $derived(stateBet.isTurbo);
	const fastDisabled = $derived(stateBet.isSpaceHold);
	const fastLabel = $derived(fastActive ? 'FAST ON' : 'FAST');
	const fastSpriteKey = $derived(fastActive ? 'reportCardUiFastOn' : 'reportCardUiFastOff');

	const betOptions = $derived([...stateConfig.betAmountOptions].sort((a, b) => a - b));
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

	const stepPaper = (key: 'increase' | 'decrease', disabled: boolean) => {
		if (disabled) return C.DISABLED;
		if (pressed === key) return C.YELLOW_PRESSED;
		if (hovered === key) return C.YELLOW_HOVER;
		return C.PAPER;
	};

	const onSpinPress = () => {
		if (spinDisabled) return;

		context.eventEmitter.broadcast({ type: 'soundPressBet' });

		if (context.stateXstateDerived.isIdle()) {
			if (stateBetDerived.activeBetMode()?.type === 'buy') {
				stateBet.activeBetModeKey = 'BASE';
			}
			context.eventEmitter.broadcast({ type: 'bet' });
			return;
		}

		if (stateBetDerived.hasAutoBetCounter()) stateBet.autoSpinsCounter = 0;
		context.eventEmitter.broadcast({ type: 'stopButtonClick' });
	};

	const onFastPress = () => {
		if (fastDisabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
	};

	const onIncreasePress = () => {
		if (increaseDisabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		const nextBigger = betOptions.find((option) => option > stateBet.betAmount);
		stateBetDerived.setBetAmount(nextBigger ?? biggestBet ?? stateBet.betAmount);
	};

	const onDecreasePress = () => {
		if (decreaseDisabled) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		const nextSmaller = [...betOptions].reverse().find((option) => option < stateBet.betAmount);
		stateBetDerived.setBetAmount(nextSmaller ?? smallestBet ?? stateBet.betAmount);
	};

	const clearPointer = () => {
		hovered = null;
		pressed = null;
	};

	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => {
			stopDisabled = true;
			stateBetDerived.updateIsTurbo(true, { persistent: false });
		},
		stopButtonEnable: () => {
			stopDisabled = false;
			stateBetDerived.updateIsTurbo(false, { persistent: false });
		},
	});
</script>

<OnHotkey hotkey="Space" disabled={spinDisabled} onpress={onSpinPress} />

<!-- Main spin/stop button. -->
<Container
	x={props.x}
	y={props.spinY + (pressed === 'spin' ? 4 : 0)}
	rotation={pressed === 'spin' ? 0 : hovered === 'spin' ? 0.002 : 0.004}
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
	alpha={spinDisabled ? 0.55 : 1}
>
	{#if isStop}
		<!-- We do not have a dedicated STOP asset yet, so keep a readable fallback. -->
		<Rectangle
			x={-6}
			y={-6}
			width={UI_LAYOUT.rightPanel.spinWidth + 12}
			height={UI_LAYOUT.rightPanel.spinHeight + 12}
			backgroundColor={C.PAPER_LIGHT}
			borderColor={C.INK}
			borderWidth={3}
		/>
		<Rectangle
			width={UI_LAYOUT.rightPanel.spinWidth}
			height={UI_LAYOUT.rightPanel.spinHeight}
			backgroundColor={spinDisabled ? C.DISABLED : C.STOP}
			borderColor={C.INK}
			borderWidth={5}
		/>
		<Text
			x={UI_LAYOUT.rightPanel.spinWidth / 2}
			y={UI_LAYOUT.rightPanel.spinHeight / 2 - 5}
			anchor={0.5}
			text="■"
			style={{
				fontFamily: 'Arial',
				fontSize: 66,
				fontWeight: '700',
				fill: 0xffffff,
			}}
		/>
	{:else}
		<Sprite
			key={spinSpriteKey}
			width={UI_LAYOUT.rightPanel.spinWidth}
			height={UI_LAYOUT.rightPanel.spinHeight}
			alpha={hovered === 'spin' ? 1 : 0.98}
		/>
	{/if}

	<Text
		x={UI_LAYOUT.rightPanel.spinWidth / 2}
		y={UI_LAYOUT.rightPanel.spinHeight - 20}
		anchor={0.5}
		text={spinLabel}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 12,
			fontWeight: '700',
			fill: isStop ? 0xffffff : C.INK,
		}}
	/>
</Container>

<!-- BET INCREASE -->
<Container
	x={props.x}
	y={props.fastY + (pressed === 'increase' ? 3 : 0)}
	rotation={pressed === 'increase' ? 0 : -0.012}
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
>
	<Rectangle
		x={pressed === 'increase' ? 2 : 4}
		y={pressed === 'increase' ? 2 : 5}
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={pressed === 'increase' ? 0.07 : 0.16}
	/>
	<Rectangle
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={stepPaper('increase', increaseDisabled)}
		borderColor={hovered === 'increase' && !increaseDisabled ? C.GOLD : C.INK}
		borderWidth={hovered === 'increase' && !increaseDisabled ? 4 : 3}
	/>
	<Text
		x={stepWidth / 2}
		y={UI_LAYOUT.rightPanel.fastHeight / 2}
		anchor={0.5}
		text="+"
		style={{
			fontFamily: 'Arial',
			fontSize: 27,
			fontWeight: '700',
			fill: increaseDisabled ? C.DISABLED_DARK : C.INK,
		}}
	/>
</Container>

<!-- FAST / TURBO -->
<Container
	x={props.x + turboX}
	y={props.fastY + (pressed === 'fast' ? 3 : 0)}
	rotation={pressed === 'fast' ? 0 : 0.006}
	eventMode="static"
	cursor={fastDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'fast')}
	onpointerout={clearPointer}
	onpointerdown={() => !fastDisabled && (pressed = 'fast')}
	onpointerup={() => {
		pressed = null;
		onFastPress();
	}}
	onpointerupoutside={() => (pressed = null)}
	alpha={fastDisabled ? 0.58 : hovered === 'fast' ? 1 : 0.97}
>
	<Sprite
		key={fastSpriteKey}
		width={turboWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
	/>
	<Text
		x={fastActive ? turboWidth / 2 : turboWidth * 0.65}
		y={UI_LAYOUT.rightPanel.fastHeight / 2}
		anchor={0.5}
		text={fastLabel}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: fastActive ? 9 : 11,
			fontWeight: '700',
			fill: fastDisabled ? C.DISABLED_DARK : C.INK,
		}}
	/>
</Container>

<!-- BET DECREASE -->
<Container
	x={props.x + decreaseX}
	y={props.fastY + (pressed === 'decrease' ? 3 : 0)}
	rotation={pressed === 'decrease' ? 0 : -0.006}
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
>
	<Rectangle
		x={pressed === 'decrease' ? 2 : 4}
		y={pressed === 'decrease' ? 2 : 5}
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={pressed === 'decrease' ? 0.07 : 0.16}
	/>
	<Rectangle
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={stepPaper('decrease', decreaseDisabled)}
		borderColor={hovered === 'decrease' && !decreaseDisabled ? C.GOLD : C.INK}
		borderWidth={hovered === 'decrease' && !decreaseDisabled ? 4 : 3}
	/>
	<Text
		x={stepWidth / 2}
		y={UI_LAYOUT.rightPanel.fastHeight / 2}
		anchor={0.5}
		text="−"
		style={{
			fontFamily: 'Arial',
			fontSize: 27,
			fontWeight: '700',
			fill: decreaseDisabled ? C.DISABLED_DARK : C.INK,
		}}
	/>
</Container>
