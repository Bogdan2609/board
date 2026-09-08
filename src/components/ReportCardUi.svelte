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
	import BetCard from './ui/BetCard.svelte';
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
	// Shared HUD baseline.
	// BET, WIN and FAST all end on the same lower edge.
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

	const betY = $derived(hudBottomY - UI_LAYOUT.leftStats.height);
	const balanceY = $derived(betY - UI_LAYOUT.leftStats.gap - UI_LAYOUT.leftStats.height);
	const utilityY = $derived(
		balanceY - UI_LAYOUT.leftButtons.statsGap - UI_LAYOUT.leftButtons.buttonSize,
	);

	// WIN is centered under the 6x6 field but slightly narrower than the board.
	// This avoids the old ultra-stretched look while keeping it visually tied to reels.
	const winWidth = $derived(boardWidth * UI_LAYOUT.winPanel.widthRatio);
	const winX = $derived(board.x - winWidth / 2);
	const winY = $derived(hudBottomY - UI_LAYOUT.winPanel.height);

	const rightX = $derived(
		Math.min(
			main.width - UI_LAYOUT.safeGap.edge - UI_LAYOUT.rightPanel.width,
			notebookRight + UI_LAYOUT.safeGap.side,
		),
	);

	// Bottom row: [-] BET [+]
	const betControlsY = $derived(
		hudBottomY - UI_LAYOUT.rightPanel.betHeight,
	);

	// Main SPIN sits immediately above bet controls.
	const spinY = $derived(
		betControlsY -
			UI_LAYOUT.rightPanel.sectionGap -
			UI_LAYOUT.rightPanel.spinHeight,
	);

	// Turbo / Auto sit immediately above SPIN.
	const topControlsY = $derived(
		spinY -
			UI_LAYOUT.rightPanel.sectionGap -
			UI_LAYOUT.rightPanel.topButtonSize,
	);

	const bottomClearance = $derived(winY - notebookBottom);
</script>

{#if showWideHud}
	<Container>
		<BuyFreeSpins x={leftX} y={leftTopY} />
		<BaseAnteCard x={leftX} y={modeY} />
		<UtilityButtons x={leftX} y={utilityY} />
		<BalanceCard x={leftX} y={balanceY} />
		<BetCard x={leftX} y={betY} />

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
