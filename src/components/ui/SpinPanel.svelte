<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { OnHotkey } from 'components-shared';
	import { stateBet, stateBetDerived, stateConfig } from 'state-shared';

	import { getContext } from '../../game/context';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';

	type SpinKey = 'spin_default' | 'spin_disabled' | 'stop_default' | 'stop_disabled';

	type Props = {
		x: number;
		spinY: number;
		fastY: number;
	};

	const props: Props = $props();
	const context = getContext();
	const C = HUD_COLORS;

	let stopDisabled = $state(false);

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
	const spinLabel = $derived(spinKey.startsWith('stop') ? 'STOP' : 'SPIN');
	const spinColor = $derived(spinDisabled ? C.DISABLED : C.GREEN);
	const spinDarkColor = $derived(spinDisabled ? C.DISABLED_DARK : C.GREEN_DARK);

	// -------------------------------------------------------------------------
	// Separate lower controls: [+] [FAST] [-]
	// -------------------------------------------------------------------------
	const controlGap = 5;
	const stepWidth = 42;
	const turboWidth =
		UI_LAYOUT.rightPanel.spinWidth - stepWidth * 2 - controlGap * 2;
	const turboX = stepWidth + controlGap;
	const decreaseX = turboX + turboWidth + controlGap;

	const fastActive = $derived(stateBet.isTurbo);
	const fastDisabled = $derived(stateBet.isSpaceHold);
	const fastPaper = $derived(fastActive ? C.YELLOW : C.PAPER);
	const fastLabel = $derived(fastActive ? 'FAST ON' : 'FAST');

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

		const nextSmaller = [...betOptions]
			.reverse()
			.find((option) => option < stateBet.betAmount);
		stateBetDerived.setBetAmount(nextSmaller ?? smallestBet ?? stateBet.betAmount);
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
	y={props.spinY}
	rotation={0.004}
	eventMode="static"
	cursor={spinDisabled ? 'not-allowed' : 'pointer'}
	onpointerup={onSpinPress}
>
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
		x={5}
		y={7}
		width={UI_LAYOUT.rightPanel.spinWidth}
		height={UI_LAYOUT.rightPanel.spinHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={spinDisabled ? 0.12 : 0.22}
	/>
	<Rectangle
		width={UI_LAYOUT.rightPanel.spinWidth}
		height={UI_LAYOUT.rightPanel.spinHeight}
		backgroundColor={spinColor}
		borderColor={C.INK}
		borderWidth={5}
	/>
	<Rectangle
		x={7}
		y={7}
		width={UI_LAYOUT.rightPanel.spinWidth - 14}
		height={UI_LAYOUT.rightPanel.spinHeight - 14}
		backgroundColor={spinColor}
		backgroundAlpha={0}
		borderColor={spinDarkColor}
		borderWidth={2}
		alpha={0.72}
	/>
	<Text
		x={UI_LAYOUT.rightPanel.spinWidth / 2}
		y={UI_LAYOUT.rightPanel.spinHeight / 2 - 4}
		anchor={0.5}
		text={spinKey.startsWith('stop') ? '■' : '↻'}
		style={{
			fontFamily: 'Arial',
			fontSize: spinKey.startsWith('stop') ? 70 : 96,
			fontWeight: '700',
			fill: 0xffffff,
			stroke: { color: spinDarkColor, width: 4 },
		}}
	/>
	<Text
		x={UI_LAYOUT.rightPanel.spinWidth / 2}
		y={UI_LAYOUT.rightPanel.spinHeight - 23}
		anchor={0.5}
		text={spinLabel}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 13,
			fontWeight: '700',
			fill: 0xf7f0d5,
		}}
	/>
</Container>

<!-- BET INCREASE: separate button -->
<Container
	x={props.x}
	y={props.fastY}
	rotation={-0.012}
	eventMode="static"
	cursor={increaseDisabled ? 'not-allowed' : 'pointer'}
	onpointerup={onIncreasePress}
>
	<Rectangle
		x={4}
		y={5}
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.16}
	/>
	<Rectangle
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={increaseDisabled ? C.DISABLED : C.PAPER}
		borderColor={C.INK}
		borderWidth={3}
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

<!-- FAST / TURBO: separate button -->
<Container
	x={props.x + turboX}
	y={props.fastY}
	rotation={0.006}
	eventMode="static"
	cursor={fastDisabled ? 'not-allowed' : 'pointer'}
	onpointerup={onFastPress}
>
	<Rectangle
		x={4}
		y={5}
		width={turboWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.16}
	/>
	<Rectangle
		width={turboWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={fastDisabled ? C.DISABLED : fastPaper}
		borderColor={C.INK}
		borderWidth={3}
	/>
	<Text
		x={turboWidth / 2}
		y={UI_LAYOUT.rightPanel.fastHeight / 2}
		anchor={0.5}
		text={`⚡ ${fastLabel}`}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: fastActive ? 11 : 13,
			fontWeight: '700',
			fill: fastActive ? C.GREEN_DARK : C.INK,
		}}
	/>
</Container>

<!-- BET DECREASE: separate button -->
<Container
	x={props.x + decreaseX}
	y={props.fastY}
	rotation={-0.006}
	eventMode="static"
	cursor={decreaseDisabled ? 'not-allowed' : 'pointer'}
	onpointerup={onDecreasePress}
>
	<Rectangle
		x={4}
		y={5}
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.16}
	/>
	<Rectangle
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.fastHeight}
		backgroundColor={decreaseDisabled ? C.DISABLED : C.PAPER}
		borderColor={C.INK}
		borderWidth={3}
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
