<script lang="ts">
	import { Container, Rectangle, Sprite, Text } from 'pixi-svelte';
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
		spinKey === 'spin_disabled' ||
			spinKey === 'stop_disabled',
	);

	const isStop = $derived(
		spinKey === 'stop_default' ||
			spinKey === 'stop_disabled',
	);

	const spinLabel = $derived(isStop ? 'STOP' : 'SPIN');

	const spinSpriteKey = $derived(
		pressed === 'spin'
			? 'reportCardUiSpinPressed'
			: 'reportCardUiSpinIdle',
	);

	const onSpinPress = () => {
		if (spinDisabled) return;

		context.eventEmitter.broadcast({
			type: 'soundPressBet',
		});

		// Normal spin.
		if (context.stateXstateDerived.isIdle()) {
			if (stateBetDerived.activeBetMode()?.type === 'buy') {
				stateBet.activeBetModeKey = 'BASE';
			}

			context.eventEmitter.broadcast({
				type: 'bet',
			});

			return;
		}

		// Stop autoplay first.
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

	const onTurboPress = () => {
		if (turboDisabled) return;

		context.eventEmitter.broadcast({
			type: 'soundPressGeneral',
		});

		stateBetDerived.updateIsTurbo(
			!stateBet.isTurbo,
			{ persistent: true },
		);
	};

	// ---------------------------------------------------------------------
	// AUTO SPIN
	// ---------------------------------------------------------------------

	const autoActive = $derived(
		stateBetDerived.hasAutoBetCounter(),
	);

	const autoDisabled = $derived.by(() => {
		if (stateBet.isSpaceHold) return true;

		// While a normal spin is running, AUTO cannot be enabled.
		// If auto is already running, button remains available so it can stop it.
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
			// Second click stops Auto Spin.
			stateBet.autoSpinsCounter = 0;
			return;
		}

		// Open standard auto-spin amount modal.
		stateModal.modal = {
			name: 'autoSpin',
		};
	};

	// ---------------------------------------------------------------------
	// BET + / -
	// ---------------------------------------------------------------------

	const betOptions = $derived(
		[...stateConfig.betAmountOptions].sort(
			(a, b) => a - b,
		),
	);

	const smallestBet = $derived(betOptions[0]);
	const biggestBet = $derived(
		betOptions[betOptions.length - 1],
	);

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

		const next = betOptions.find(
			(option) => option > stateBet.betAmount,
		);

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
			.find(
				(option) => option < stateBet.betAmount,
			);

		stateBetDerived.setBetAmount(
			next ?? smallestBet ?? stateBet.betAmount,
		);
	};

	const formattedBet = $derived(
		`$${stateBet.betAmount.toFixed(2)}`,
	);

	// ---------------------------------------------------------------------
	// GEOMETRY
	// ---------------------------------------------------------------------

	const panelWidth = UI_LAYOUT.rightPanel.width;

	const topSize =
		UI_LAYOUT.rightPanel.topButtonSize;

	const topGap =
		UI_LAYOUT.rightPanel.topButtonGap;

	const topTotalWidth = topSize * 2 + topGap;

	const topStartX =
		(panelWidth - topTotalWidth) / 2;

	const turboX = topStartX;

	const autoX =
		topStartX + topSize + topGap;

	const stepWidth =
		UI_LAYOUT.rightPanel.betStepWidth;

	const betGap =
		UI_LAYOUT.rightPanel.betGap;

	const betCenterWidth =
		panelWidth -
		stepWidth * 2 -
		betGap * 2;

	const betCenterX =
		stepWidth + betGap;

	const plusX =
		betCenterX +
		betCenterWidth +
		betGap;

	const clearPointer = () => {
		hovered = null;
		pressed = null;
	};

	const temporaryButtonFill = (
		key: 'turbo' | 'auto',
		active: boolean,
		disabled: boolean,
	) => {
		if (disabled) return C.DISABLED;

		if (pressed === key) {
			return C.YELLOW_PRESSED;
		}

		if (active) {
			return C.GREEN;
		}

		if (hovered === key) {
			return C.YELLOW_HOVER;
		}

		return 0x183733;
	};

	// Preserve temporary non-persistent turbo behaviour used by STOP.
	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => {
			stopDisabled = true;

			stateBetDerived.updateIsTurbo(
				true,
				{ persistent: false },
			);
		},

		stopButtonEnable: () => {
			stopDisabled = false;

			stateBetDerived.updateIsTurbo(
				false,
				{ persistent: false },
			);
		},
	});
</script>

<OnHotkey
	hotkey="Space"
	disabled={spinDisabled}
	onpress={onSpinPress}
/>

<!-- ================================================================ -->
<!-- TOP CONTROLS: TURBO / AUTO                                       -->
<!-- ================================================================ -->

<!-- TURBO -->
<Container
	x={props.x + turboX}
	y={props.topControlsY + (pressed === 'turbo' ? 3 : 0)}
	rotation={hovered === 'turbo' ? -0.02 : -0.035}
	eventMode="static"
	cursor={turboDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'turbo')}
	onpointerout={clearPointer}
	onpointerdown={() =>
		!turboDisabled && (pressed = 'turbo')}
	onpointerup={() => {
		pressed = null;
		onTurboPress();
	}}
	onpointerupoutside={() => (pressed = null)}
	alpha={turboDisabled ? 0.55 : 1}
>
	<!-- Temporary shape.
	     Later this becomes turbo_off.png / turbo_on.png -->
	<Rectangle
		x={4}
		y={5}
		width={topSize}
		height={topSize}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.18}
	/>

	<Rectangle
		width={topSize}
		height={topSize}
		backgroundColor={temporaryButtonFill(
			'turbo',
			turboActive,
			turboDisabled,
		)}
		borderColor={turboActive ? C.GOLD : C.PAPER_LIGHT}
		borderWidth={5}
	/>

	<!-- ICON ONLY. NO "TURBO" LABEL. -->
	<Text
		x={topSize / 2}
		y={topSize / 2}
		anchor={0.5}
		text="⚡"
		style={{
			fontFamily: 'Arial',
			fontSize: 38,
			fontWeight: '700',
			fill: turboActive ? 0xffe36a : 0xffffff,
		}}
	/>
</Container>

<!-- AUTO -->
<Container
	x={props.x + autoX}
	y={props.topControlsY + (pressed === 'auto' ? 3 : 0)}
	rotation={hovered === 'auto' ? 0.018 : 0.032}
	eventMode="static"
	cursor={autoDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'auto')}
	onpointerout={clearPointer}
	onpointerdown={() =>
		!autoDisabled && (pressed = 'auto')}
	onpointerup={() => {
		pressed = null;
		onAutoPress();
	}}
	onpointerupoutside={() => (pressed = null)}
	alpha={autoDisabled ? 0.55 : 1}
>
	<!-- Temporary shape.
	     Later this becomes auto_off.png / auto_on.png -->
	<Rectangle
		x={4}
		y={5}
		width={topSize}
		height={topSize}
		backgroundColor={C.SHADOW}
		backgroundAlpha={0.18}
	/>

	<Rectangle
		width={topSize}
		height={topSize}
		backgroundColor={temporaryButtonFill(
			'auto',
			autoActive,
			autoDisabled,
		)}
		borderColor={autoActive ? C.GOLD : C.PAPER_LIGHT}
		borderWidth={5}
	/>

	<!-- ICON ONLY. NO "AUTO" LABEL. -->
	<Text
		x={topSize / 2}
		y={topSize / 2}
		anchor={0.5}
		text="↻"
		style={{
			fontFamily: 'Arial',
			fontSize: 43,
			fontWeight: '700',
			fill: 0xffffff,
		}}
	/>
</Container>

<!-- ================================================================ -->
<!-- MAIN SPIN / STOP                                                 -->
<!-- ================================================================ -->

<Container
	x={props.x}
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
	onpointerdown={() =>
		!spinDisabled && (pressed = 'spin')}
	onpointerup={() => {
		pressed = null;
		onSpinPress();
	}}
	onpointerupoutside={() => (pressed = null)}
	alpha={spinDisabled ? 0.55 : 1}
>
	{#if isStop}
		<!-- Temporary STOP fallback until stop assets are added. -->
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
			backgroundColor={
				spinDisabled
					? C.DISABLED
					: C.STOP
			}
			borderColor={C.INK}
			borderWidth={5}
		/>

		<Text
			x={UI_LAYOUT.rightPanel.spinWidth / 2}
			y={UI_LAYOUT.rightPanel.spinHeight / 2}
			anchor={0.5}
			text="■"
			style={{
				fontFamily: 'Arial',
				fontSize: 72,
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

		<Text
			x={UI_LAYOUT.rightPanel.spinWidth / 2}
			y={42}
			anchor={0.5}
			text={spinLabel}
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 17,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>
	{/if}
</Container>

<!-- ================================================================ -->
<!-- BOTTOM BET ROW: [-] [BET $] [+]                                 -->
<!-- ================================================================ -->

<!-- MINUS -->
<Container
	x={props.x}
	y={props.betControlsY + (pressed === 'decrease' ? 3 : 0)}
	rotation={-0.02}
	eventMode="static"
	cursor={decreaseDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'decrease')}
	onpointerout={clearPointer}
	onpointerdown={() =>
		!decreaseDisabled && (pressed = 'decrease')}
	onpointerup={() => {
		pressed = null;
		onDecreasePress();
	}}
	onpointerupoutside={() => (pressed = null)}
>
	<Rectangle
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.betHeight}
		backgroundColor={
			decreaseDisabled
				? C.DISABLED
				: hovered === 'decrease'
					? C.YELLOW_HOVER
					: 0x183733
		}
		borderColor={C.PAPER_LIGHT}
		borderWidth={4}
	/>

	<Text
		x={stepWidth / 2}
		y={UI_LAYOUT.rightPanel.betHeight / 2}
		anchor={0.5}
		text="−"
		style={{
			fontFamily: 'Arial',
			fontSize: 34,
			fontWeight: '700',
			fill: 0xffffff,
		}}
	/>
</Container>

<!-- BET VALUE -->
<Container
	x={props.x + betCenterX}
	y={props.betControlsY}
	rotation={0.008}
>
	<Rectangle
		width={betCenterWidth}
		height={UI_LAYOUT.rightPanel.betHeight}
		backgroundColor={C.PAPER_LIGHT}
		borderColor={C.INK}
		borderWidth={3}
	/>

	<Text
		x={betCenterWidth / 2}
		y={8}
		anchor={{ x: 0.5, y: 0 }}
		text="BET"
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 11,
			fontWeight: '700',
			fill: 0x245f9b,
		}}
	/>

	<Text
		x={betCenterWidth / 2}
		y={27}
		anchor={{ x: 0.5, y: 0 }}
		text={formattedBet}
		style={{
			fontFamily: 'Comic Sans MS',
			fontSize: 23,
			fontWeight: '700',
			fill: C.INK,
		}}
	/>
</Container>

<!-- PLUS -->
<Container
	x={props.x + plusX}
	y={props.betControlsY + (pressed === 'increase' ? 3 : 0)}
	rotation={0.018}
	eventMode="static"
	cursor={increaseDisabled ? 'not-allowed' : 'pointer'}
	onpointerover={() => (hovered = 'increase')}
	onpointerout={clearPointer}
	onpointerdown={() =>
		!increaseDisabled && (pressed = 'increase')}
	onpointerup={() => {
		pressed = null;
		onIncreasePress();
	}}
	onpointerupoutside={() => (pressed = null)}
>
	<Rectangle
		width={stepWidth}
		height={UI_LAYOUT.rightPanel.betHeight}
		backgroundColor={
			increaseDisabled
				? C.DISABLED
				: hovered === 'increase'
					? C.YELLOW_HOVER
					: 0x183733
		}
		borderColor={C.PAPER_LIGHT}
		borderWidth={4}
	/>

	<Text
		x={stepWidth / 2}
		y={UI_LAYOUT.rightPanel.betHeight / 2}
		anchor={0.5}
		text="+"
		style={{
			fontFamily: 'Arial',
			fontSize: 32,
			fontWeight: '700',
			fill: 0xffffff,
		}}
	/>
</Container>
