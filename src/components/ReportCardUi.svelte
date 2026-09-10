<script lang="ts">
	import { Container } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { UI_LAYOUT } from '../game/uiLayout';
	import {
		NOTEBOOK_BASE_HEIGHT,
		NOTEBOOK_OFFSET_X,
		NOTEBOOK_OFFSET_Y,
		NOTEBOOK_POSITION_X,
		NOTEBOOK_POSITION_Y,
		NOTEBOOK_RENDER_HEIGHT,
		NOTEBOOK_WIDTH,
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
	// Notebook bounds. Side HUD rails are positioned against the OUTER artwork,
	// not against the reel field, so controls never overlap the notebook.
	// -------------------------------------------------------------------------
	const notebookX = $derived(main.width * NOTEBOOK_POSITION_X + NOTEBOOK_OFFSET_X);
	const notebookY = $derived(main.height * NOTEBOOK_POSITION_Y + NOTEBOOK_OFFSET_Y);
	const notebookTop = $derived(notebookY - NOTEBOOK_BASE_HEIGHT / 2);
	const notebookLeft = $derived(notebookX - NOTEBOOK_WIDTH / 2);
	const notebookRight = $derived(notebookX + NOTEBOOK_WIDTH / 2);
	const notebookBottom = $derived(notebookTop + NOTEBOOK_RENDER_HEIGHT);

	const boardWidth = $derived(board.width);

	// -------------------------------------------------------------------------
	// Shared bottom baseline for Balance + Win.
	// The old left BetCard has been removed completely from the HUD layout.
	// -------------------------------------------------------------------------
	const hudBottomY = $derived(main.height - UI_LAYOUT.bottom.bottomOffset);

	const leftX = $derived(
		Math.max(
			UI_LAYOUT.safeGap.edge,
			notebookLeft - UI_LAYOUT.safeGap.side - UI_LAYOUT.leftPanel.width,
		),
	);

	const leftTopY = $derived(Math.max(UI_LAYOUT.safeGap.edge + 22, notebookTop + 92));
	const modeY = $derived(leftTopY + UI_LAYOUT.leftPanel.buyHeight + UI_LAYOUT.leftPanel.gap);

	// Balance now occupies the former bottom stats slot and shares the same
	// bottom edge as the WIN banner. Utility buttons follow it downward.
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
			notebookRight + UI_LAYOUT.safeGap.side,
		),
	);

	// Right rail uses its own bottom edge so SPIN/Turbo/Auto can sit lower
	// without moving Balance or WIN.
	const rightBottomY = $derived(main.height - UI_LAYOUT.rightPanel.bottomOffset);

	const betControlsY = $derived(
		rightBottomY - UI_LAYOUT.rightPanel.betHeight,
	);

	const spinY = $derived(
		betControlsY -
			UI_LAYOUT.rightPanel.sectionGap -
			UI_LAYOUT.rightPanel.spinHeight,
	);

	// The top controls intentionally overlap the SPIN silhouette slightly.
	// Turbo is centered over SPIN; Auto is offset/rotated to curl to the right.
	const topControlsY = $derived(
		spinY -
			UI_LAYOUT.rightPanel.topButtonSize +
			UI_LAYOUT.rightPanel.topButtonOverlap,
	);

	const bottomClearance = $derived(winY - notebookBottom);
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
