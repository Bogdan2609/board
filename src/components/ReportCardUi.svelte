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

	import LeftHudRail from './ui/LeftHudRail.svelte';
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
	// Shared bottom baseline for WIN and the right-side control rail.
	// -------------------------------------------------------------------------
	const hudBottomY = $derived(main.height - UI_LAYOUT.bottom.bottomOffset);

	// 180 px keeps the left rail fully outside the 1150 px wooden frame on a
	// 1600 px logical stage: 18 px outer safe area + 180 px rail + 24 px gap.
	const leftX = $derived(
		Math.max(
			UI_LAYOUT.safeGap.edge,
			frameLeft - UI_LAYOUT.safeGap.side - UI_LAYOUT.leftPanel.width,
		),
	);

	// The compact rail is intentionally top-anchored. Its own component owns
	// all vertical spacing so the four left controls behave as one unit.
	const leftTopY = $derived(UI_LAYOUT.safeGap.edge + 22);

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
	// without moving WIN.
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
		<LeftHudRail x={leftX} y={leftTopY} />

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
