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

	// Reel bounds are used only for WIN, which intentionally matches the 6x6 width.
	const boardLeft = $derived(board.x - board.width / 2);
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

	const winX = $derived(boardLeft);
	const winY = $derived(hudBottomY - UI_LAYOUT.winPanel.height);
	const winWidth = $derived(boardWidth);

	const rightX = $derived(
		Math.min(
			main.width - UI_LAYOUT.safeGap.edge - UI_LAYOUT.rightPanel.spinWidth,
			notebookRight + UI_LAYOUT.safeGap.side,
		),
	);
	const fastY = $derived(hudBottomY - UI_LAYOUT.rightPanel.fastHeight);
	const spinY = $derived(fastY - UI_LAYOUT.rightPanel.gap - UI_LAYOUT.rightPanel.spinHeight);

	// Keep this reactive guardrail while the HUD geometry is being tuned.
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
		<SpinPanel x={rightX} {spinY} {fastY} />
		<HudMenuOverlay />

		{#if bottomClearance < UI_LAYOUT.safeGap.bottom}
			<!-- Intentional no-op guard. No debug overlay in production HUD. -->
		{/if}
	</Container>
{/if}
