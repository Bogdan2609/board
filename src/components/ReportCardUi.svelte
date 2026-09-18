<script lang="ts">
	import { Container } from 'pixi-svelte';
	import { getContext } from '../game/context';
	import { UI_LAYOUT } from '../game/uiLayout';
	import { FRAME_EDGE_HEIGHT,FRAME_EDGE_WIDTH,FRAME_OFFSET_X,FRAME_OFFSET_Y,FRAME_POSITION_X,FRAME_POSITION_Y } from '../game/reelBoardLayout';
	import LeftHudRail from './ui/LeftHudRail.svelte';
	import WinBar from './ui/WinBar.svelte';
	import SpinPanel from './ui/SpinPanel.svelte';
	import HudMenuOverlay from './ui/HudMenuOverlay.svelte';
	const context=getContext();
	const main=$derived(context.stateLayoutDerived.mainLayout()); const board=$derived(context.stateGameDerived.boardLayout()); const layoutType=$derived(context.stateLayoutDerived.layoutType()); const showWideHud=$derived(['desktop','landscape'].includes(layoutType));
	const frameX=$derived(main.width*FRAME_POSITION_X+FRAME_OFFSET_X); const frameY=$derived(main.height*FRAME_POSITION_Y+FRAME_OFFSET_Y); const frameLeft=$derived(frameX-FRAME_EDGE_WIDTH/2); const frameRight=$derived(frameX+FRAME_EDGE_WIDTH/2); const frameBottom=$derived(frameY+FRAME_EDGE_HEIGHT/2); const boardWidth=$derived(board.width);
	const hudBottomY=$derived(main.height-UI_LAYOUT.bottom.bottomOffset);
	const leftX=$derived(Math.max(UI_LAYOUT.safeGap.edge,frameLeft-UI_LAYOUT.safeGap.side-UI_LAYOUT.leftPanel.width)); const leftTopY=$derived(UI_LAYOUT.safeGap.edge+22);
	const winWidth=$derived(boardWidth*UI_LAYOUT.winPanel.widthRatio); const winX=$derived(board.x-winWidth/2); const winY=$derived(hudBottomY-UI_LAYOUT.winPanel.height);
	const rightX=$derived(Math.min(main.width-UI_LAYOUT.safeGap.edge-UI_LAYOUT.rightPanel.width-UI_LAYOUT.rightPanel.edgeReserve,frameRight+UI_LAYOUT.safeGap.side)); const rightBottomY=$derived(main.height-UI_LAYOUT.rightPanel.bottomOffset); const betControlsY=$derived(rightBottomY-UI_LAYOUT.rightPanel.betHeight); const spinY=$derived(betControlsY-UI_LAYOUT.rightPanel.sectionGap-UI_LAYOUT.rightPanel.spinHeight); const topControlsY=$derived(spinY-UI_LAYOUT.rightPanel.topButtonSize+UI_LAYOUT.rightPanel.topButtonOverlap); const bottomClearance=$derived(winY-frameBottom);
</script>
{#if showWideHud}
<Container>
	<LeftHudRail x={leftX} topY={leftTopY} bottomY={hudBottomY}/>
	<WinBar x={winX} y={winY} width={winWidth}/>
	<SpinPanel x={rightX} {topControlsY} {spinY} {betControlsY}/>
	<HudMenuOverlay/>
	{#if bottomClearance < UI_LAYOUT.safeGap.bottom}<!-- intentional no-op -->{/if}
</Container>
{/if}
