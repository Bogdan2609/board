<script lang="ts">
	import { Container } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { UI_LAYOUT } from '../game/uiLayout';
	import {
		FRAME_EDGE_HEIGHT,
		FRAME_EDGE_WIDTH,
		FRAME_OFFSET_X,
		FRAME_OFFSET_Y,
		FRAME_POSITION_X,
		FRAME_POSITION_Y,
	} from '../game/reelBoardLayout';

	import BuyFreeSpins from './ui/BuyFreeSpins.svelte';
	import BaseAnteCard from './ui/BaseAnteCard.svelte';
	import UtilityButtons from './ui/UtilityButtons.svelte';
	import BalanceCard from './ui/BalanceCard.svelte';
	import WinBar from './ui/WinBar.svelte';
	import SpinPanel from './ui/SpinPanel.svelte';
	import HudMenuOverlay from './ui/HudMenuOverlay.svelte';

	const context = getContext();

	const main = $derived(context.stateLayoutDerived.mainLayout());
	const board = $derived(context.stateGameDerived.boardLayout());
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const showWideHud = $derived(['desktop', 'landscape'].includes(layoutType));

	// -------------------------------------------------------------------------
	// Frame bounds. Side HUD rails are positioned against the OUTER artwork,
	// not against the reel field, so controls never overlap the wooden frame.
	// -------------------------------------------------------------------------
	const frameX = $derived(main.width * FRAME_POSITION_X + FRAME_OFFSET_X);
	const frameY = $derived(main.height * FRAME_POSITION_Y + FRAME_OFFSET_Y);
	const frameLeft = $derived(frameX - FRAME_EDGE_WIDTH / 2);
	const frameRight = $derived(frameX + FRAME_EDGE_WIDTH / 2);
	const frameBottom = $derived(frameY + FRAME_EDGE_HEIGHT / 2);

	const boardWidth = $derived(board.width);

	// -------------------------------------------------------------------------
	// Shared bottom baseline for Balance + Win.
	// -------------------------------------------------------------------------
	const hudBottomY = $derived(main.height - UI_LAYOUT.bottom.bottomOffset);

	const leftX = $derived(
		Math.max(
			UI_LAYOUT.safeGap.edge,
			frameLeft - UI_LAYOUT.safeGap.side - UI_LAYOUT.leftPanel.width,
		),
	);

	// Important: moving the reel frame vertically must NOT drag BUY FREE SPINS
	// and BASE/ANTE down with it. Their top rail remains stage-safe and stable.
	const leftTopY = $derived(UI_LAYOUT.safeGap.edge + 22);
	const modeY = $derived(
		leftTopY + UI_LAYOUT.leftPanel.buyHeight + UI_LAYOUT.leftPanel.gap,
	);

	// Balance occupies the bottom stats slot and shares the same bottom edge as
	// the WIN banner. Utility buttons follow it upward.
	const balanceY = $derived(hudBottomY - UI_LAYOUT.leftStats.height);
	const utilityY = $derived(
		balanceY - UI_LAYOUT.leftButtons.statsGap - UI_LAYOUT.leftButtons.buttonSize,
	);

	// WIN remains centered under the 6x6 field.
	const winWidth = $derived(boardWidth * UI_LAYOUT.winPanel.widthRatio);
	const winX = $derived(board.x - winWidth / 2);
	const winY = $derived(hudBottomY - UI_LAYOUT.winPanel.height);

	// SpinPanel contains intentional hand-drawn overhang in the bottom BET
	// cluster. Reserve that true visual width at the right edge so the + button
	// does not leave the 1600x900 stage.
	const rightX = $derived(
		Math.min(
			main.width -
				UI_LAYOUT.safeGap.edge -
				UI_LAYOUT.rightPanel.width -
				UI_LAYOUT.rightPanel.edgeReserve,
			frameRight + UI_LAYOUT.safeGap.side,
		),
	);

	// Right rail uses its own bottom edge so SPIN/Turbo/Auto can sit lower
	// without moving Balance or WIN.
	const rightBottomY = $derived(
		main.height - UI_LAYOUT.rightPanel.bottomOffset,
	);

	const betControlsY = $derived(
		rightBottomY - UI_LAYOUT.rightPanel.betHeight,
	);

	const spinY = $derived(
		betControlsY -
			UI_LAYOUT.rightPanel.sectionGap -
			UI_LAYOUT.rightPanel.spinHeight,
	);

	// The top controls intentionally overlap the SPIN silhouette slightly.
	const topControlsY = $derived(
		spinY -
			UI_LAYOUT.rightPanel.topButtonSize +
			UI_LAYOUT.rightPanel.topButtonOverlap,
	);

	const bottomClearance = $derived(winY - frameBottom);
</script>

{#if showWideHud}
	<Container>
		<BuyFreeSpins x={leftX} y={leftTopY} />
		<BaseAnteCard x={leftX} y={modeY} />
		<UtilityButtons x={leftX} y={utilityY} />
		<BalanceCard x={leftX} y={balanceY} />

		<WinBar x={winX} y={winY} width={winWidth} />
		<SpinPanel
			x={rightX}
			{topControlsY}
			{spinY}
			{betControlsY}
		/>
		<HudMenuOverlay />

		{#if bottomClearance < UI_LAYOUT.safeGap.bottom}
			<!-- Intentional no-op guard. No debug overlay in production HUD. -->
		{/if}
	</Container>
{/if}
