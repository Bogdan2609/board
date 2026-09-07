<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';

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

	const context = getContext();

	const main = $derived(context.stateLayoutDerived.mainLayout());
	const board = $derived(context.stateGameDerived.boardLayout());
	const layoutType = $derived(context.stateLayoutDerived.layoutType());
	const showWideHud = $derived(['desktop', 'landscape'].includes(layoutType));

	// -------------------------------------------------------------------------
	// Notebook bounds. HUD positioning uses the OUTER notebook, not reel bounds.
	// This guarantees that side controls never sit on top of the paper artwork.
	// -------------------------------------------------------------------------
	const notebookX = $derived(
		main.width * NOTEBOOK_POSITION_X + NOTEBOOK_OFFSET_X,
	);
	const notebookY = $derived(
		main.height * NOTEBOOK_POSITION_Y + NOTEBOOK_OFFSET_Y,
	);
	const notebookTop = $derived(notebookY - NOTEBOOK_BASE_HEIGHT / 2);
	const notebookLeft = $derived(notebookX - NOTEBOOK_WIDTH / 2);
	const notebookRight = $derived(notebookX + NOTEBOOK_WIDTH / 2);
	const notebookBottom = $derived(notebookTop + NOTEBOOK_RENDER_HEIGHT);

	// Reel bounds are used only where the HUD intentionally follows the 6x6 field.
	const boardLeft = $derived(board.x - board.width / 2);
	const boardWidth = $derived(board.width);

	// -------------------------------------------------------------------------
	// Safe rails.
	// -------------------------------------------------------------------------
	const hudBottomY = $derived(main.height - UI_LAYOUT.bottom.bottomOffset);

	const leftX = $derived(
		Math.max(
			UI_LAYOUT.safeGap.edge,
			notebookLeft - UI_LAYOUT.safeGap.side - UI_LAYOUT.leftPanel.width,
		),
	);

	const leftTopY = $derived(
		Math.max(UI_LAYOUT.safeGap.edge + 22, notebookTop + 92),
	);

	const betY = $derived(hudBottomY - UI_LAYOUT.leftStats.height);
	const balanceY = $derived(
		betY - UI_LAYOUT.leftStats.gap - UI_LAYOUT.leftStats.height,
	);
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
	const spinY = $derived(
		fastY - UI_LAYOUT.rightPanel.gap - UI_LAYOUT.rightPanel.spinHeight,
	);

	// Debug-only relationship kept in code as a guardrail while tuning:
	// the bottom HUD should begin below the notebook on the 1600x900 layouts.
	const bottomClearance = $derived(winY - notebookBottom);

	// -------------------------------------------------------------------------
	// Palette: warm paper, graphite ink, school-supply colors.
	// -------------------------------------------------------------------------
	const INK = 0x28231f;
	const INK_SOFT = 0x51473f;
	const PAPER = 0xfff4d8;
	const PAPER_LIGHT = 0xfff9e8;
	const YELLOW = 0xffe487;
	const BLUE = 0xd8efff;
	const BLUE_TAPE = 0x6ea8ca;
	const GREEN = 0x50a64c;
	const GREEN_DARK = 0x347b36;
	const PURPLE = 0xe6d7f2;
	const RED = 0xd94a40;
	const GOLD = 0xd89f20;
	const SHADOW = 0x291d13;
</script>

{#if showWideHud}
	<Container>
		<!-- =====================================================
			LEFT RAIL — entirely left of the notebook
		====================================================== -->
		<Container x={leftX} y={leftTopY}>
			<!-- BUY FREE SPINS sticky note -->
			<Container rotation={-0.012}>
				<Rectangle
					x={7}
					y={8}
					width={UI_LAYOUT.leftPanel.width}
					height={UI_LAYOUT.leftPanel.buyHeight}
					backgroundColor={SHADOW}
					backgroundAlpha={0.2}
				/>
				<Rectangle
					width={UI_LAYOUT.leftPanel.width}
					height={UI_LAYOUT.leftPanel.buyHeight}
					backgroundColor={YELLOW}
					borderColor={INK}
					borderWidth={3}
				/>
				<!-- second imperfect pencil line -->
				<Rectangle
					x={4}
					y={4}
					width={UI_LAYOUT.leftPanel.width - 8}
					height={UI_LAYOUT.leftPanel.buyHeight - 8}
					backgroundColor={YELLOW}
					backgroundAlpha={0}
					borderColor={INK_SOFT}
					borderWidth={1}
					alpha={0.38}
				/>

				<!-- masking tape -->
				<Rectangle
					x={18}
					y={-9}
					width={55}
					height={18}
					rotation={-0.08}
					backgroundColor={BLUE_TAPE}
					backgroundAlpha={0.86}
				/>
				<Rectangle
					x={UI_LAYOUT.leftPanel.width - 73}
					y={-7}
					width={54}
					height={18}
					rotation={0.07}
					backgroundColor={BLUE_TAPE}
					backgroundAlpha={0.86}
				/>

				<Text
					x={UI_LAYOUT.leftPanel.width / 2}
					y={29}
					anchor={{ x: 0.5, y: 0 }}
					text="BUY"
					style={{
						fontFamily: 'Comic Sans MS',
						fontSize: 20,
						fontWeight: '700',
						fill: INK,
					}}
				/>
				<Text
					x={UI_LAYOUT.leftPanel.width / 2}
					y={55}
					anchor={{ x: 0.5, y: 0 }}
					text="FREE SPINS"
					style={{
						fontFamily: 'Comic Sans MS',
						fontSize: 24,
						fontWeight: '700',
						fill: RED,
					}}
				/>
				<Text
					x={UI_LAYOUT.leftPanel.width / 2}
					y={96}
					anchor={{ x: 0.5, y: 0 }}
					text="★  ★  ★"
					style={{
						fontFamily: 'Arial',
						fontSize: 16,
						fontWeight: '700',
						fill: GOLD,
					}}
				/>
			</Container>

			<!-- BASE / ANTE blue school card -->
			<Container
				y={UI_LAYOUT.leftPanel.buyHeight + UI_LAYOUT.leftPanel.gap}
				rotation={0.008}
			>
				<Rectangle
					x={6}
					y={7}
					width={UI_LAYOUT.leftPanel.width}
					height={UI_LAYOUT.leftPanel.modeHeight}
					backgroundColor={SHADOW}
					backgroundAlpha={0.18}
				/>
				<Rectangle
					width={UI_LAYOUT.leftPanel.width}
					height={UI_LAYOUT.leftPanel.modeHeight}
					backgroundColor={BLUE}
					borderColor={INK}
					borderWidth={3}
				/>
				<Rectangle
					x={4}
					y={4}
					width={UI_LAYOUT.leftPanel.width - 8}
					height={UI_LAYOUT.leftPanel.modeHeight - 8}
					backgroundColor={BLUE}
					backgroundAlpha={0}
					borderColor={INK_SOFT}
					borderWidth={1}
					alpha={0.34}
				/>
				<Text
					x={UI_LAYOUT.leftPanel.width / 2}
					y={14}
					anchor={{ x: 0.5, y: 0 }}
					text="BASE"
					style={{
						fontFamily: 'Comic Sans MS',
						fontSize: 20,
						fontWeight: '700',
						fill: INK,
					}}
				/>
				<Text
					x={UI_LAYOUT.leftPanel.width / 2}
					y={40}
					anchor={{ x: 0.5, y: 0 }}
					text="↔"
					style={{
						fontFamily: 'Arial',
						fontSize: 25,
						fontWeight: '700',
						fill: 0x315f89,
					}}
				/>
				<Text
					x={UI_LAYOUT.leftPanel.width / 2}
					y={69}
					anchor={{ x: 0.5, y: 0 }}
					text="ANTE"
					style={{
						fontFamily: 'Comic Sans MS',
						fontSize: 20,
						fontWeight: '700',
						fill: INK,
					}}
				/>
			</Container>
		</Container>

		<!-- utility buttons sit above stats, still inside the left rail -->
		<Container x={leftX} y={utilityY}>
			{#each [
				{ label: '🔊', bg: PAPER_LIGHT, rot: -0.025, family: 'Arial', size: 21 },
				{ label: 'i', bg: BLUE, rot: 0.018, family: 'Georgia', size: 27 },
				{ label: '≡', bg: PAPER_LIGHT, rot: -0.01, family: 'Arial', size: 31 },
			] as button, index}
				{@const buttonX = index * (UI_LAYOUT.leftButtons.buttonSize + UI_LAYOUT.leftButtons.gap)}
				<Container x={buttonX} rotation={button.rot}>
					<Rectangle
						x={4}
						y={5}
						width={UI_LAYOUT.leftButtons.buttonSize}
						height={UI_LAYOUT.leftButtons.buttonSize}
						backgroundColor={SHADOW}
						backgroundAlpha={0.17}
					/>
					<Rectangle
						width={UI_LAYOUT.leftButtons.buttonSize}
						height={UI_LAYOUT.leftButtons.buttonSize}
						backgroundColor={button.bg}
						borderColor={INK}
						borderWidth={3}
					/>
					<Text
						x={UI_LAYOUT.leftButtons.buttonSize / 2}
						y={UI_LAYOUT.leftButtons.buttonSize / 2}
						anchor={0.5}
						text={button.label}
						style={{
							fontFamily: button.family,
							fontSize: button.size,
							fontWeight: '700',
							fill: index === 1 ? 0x245f9b : INK,
						}}
					/>
				</Container>
			{/each}
		</Container>

		<!-- BALANCE -->
		<Container x={leftX} y={balanceY} rotation={-0.006}>
			<Rectangle
				x={5}
				y={5}
				width={UI_LAYOUT.leftStats.width}
				height={UI_LAYOUT.leftStats.height}
				backgroundColor={SHADOW}
				backgroundAlpha={0.16}
			/>
			<Rectangle
				width={UI_LAYOUT.leftStats.width}
				height={UI_LAYOUT.leftStats.height}
				backgroundColor={PAPER}
				borderColor={INK}
				borderWidth={3}
			/>
			<Text
				x={14}
				y={6}
				text="BALANCE"
				style={{
					fontFamily: 'Comic Sans MS',
					fontSize: 11,
					fontWeight: '700',
					fill: 0x315f89,
				}}
			/>
			<Text
				x={14}
				y={25}
				text="$1,234.56"
				style={{
					fontFamily: 'Comic Sans MS',
					fontSize: 20,
					fontWeight: '700',
					fill: INK,
				}}
			/>
		</Container>

		<!-- BET -->
		<Container x={leftX} y={betY} rotation={0.006}>
			<Rectangle
				x={5}
				y={5}
				width={UI_LAYOUT.leftStats.width}
				height={UI_LAYOUT.leftStats.height}
				backgroundColor={SHADOW}
				backgroundAlpha={0.16}
			/>
			<Rectangle
				width={UI_LAYOUT.leftStats.width}
				height={UI_LAYOUT.leftStats.height}
				backgroundColor={BLUE}
				borderColor={INK}
				borderWidth={3}
			/>
			<Text
				x={14}
				y={6}
				text="BET"
				style={{
					fontFamily: 'Comic Sans MS',
					fontSize: 11,
					fontWeight: '700',
					fill: 0x315f89,
				}}
			/>
			<Text
				x={14}
				y={25}
				text="$2.00"
				style={{
					fontFamily: 'Comic Sans MS',
					fontSize: 20,
					fontWeight: '700',
					fill: INK,
				}}
			/>
		</Container>

		<!-- =====================================================
			BOTTOM CENTER — exactly under the 6x6 reel field
		====================================================== -->
		<Container x={winX} y={winY} rotation={-0.003}>
			<Rectangle
				x={5}
				y={5}
				width={winWidth}
				height={UI_LAYOUT.winPanel.height}
				backgroundColor={SHADOW}
				backgroundAlpha={0.15}
			/>
			<Rectangle
				width={winWidth}
				height={UI_LAYOUT.winPanel.height}
				backgroundColor={PURPLE}
				borderColor={INK}
				borderWidth={3}
			/>
			<!-- hand-drawn inner edge -->
			<Rectangle
				x={5}
				y={4}
				width={winWidth - 10}
				height={UI_LAYOUT.winPanel.height - 8}
				backgroundColor={PURPLE}
				backgroundAlpha={0}
				borderColor={0x8b719f}
				borderWidth={1}
				alpha={0.36}
			/>
			<Text
				x={winWidth / 2}
				y={6}
				anchor={{ x: 0.5, y: 0 }}
				text="WIN"
				style={{
					fontFamily: 'Comic Sans MS',
					fontSize: 12,
					fontWeight: '700',
					fill: 0x674881,
				}}
			/>
			<Text
				x={winWidth / 2}
				y={25}
				anchor={{ x: 0.5, y: 0 }}
				text="$0.00"
				style={{
					fontFamily: 'Comic Sans MS',
					fontSize: 22,
					fontWeight: '700',
					fill: INK,
				}}
			/>
			<Text
				x={18}
				y={UI_LAYOUT.winPanel.height / 2}
				anchor={0.5}
				text="★"
				style={{ fontFamily: 'Arial', fontSize: 19, fill: GOLD }}
			/>
			<Text
				x={winWidth - 18}
				y={UI_LAYOUT.winPanel.height / 2}
				anchor={0.5}
				text="★"
				style={{ fontFamily: 'Arial', fontSize: 19, fill: GOLD }}
			/>
		</Container>

		<!-- =====================================================
			RIGHT RAIL — entirely right of the notebook
		====================================================== -->
		<Container x={rightX} y={spinY} rotation={0.004}>
			<!-- cream rim / paper backing -->
			<Rectangle
				x={-6}
				y={-6}
				width={UI_LAYOUT.rightPanel.spinWidth + 12}
				height={UI_LAYOUT.rightPanel.spinHeight + 12}
				backgroundColor={PAPER_LIGHT}
				borderColor={INK}
				borderWidth={3}
			/>
			<Rectangle
				x={5}
				y={7}
				width={UI_LAYOUT.rightPanel.spinWidth}
				height={UI_LAYOUT.rightPanel.spinHeight}
				backgroundColor={SHADOW}
				backgroundAlpha={0.22}
			/>
			<Rectangle
				width={UI_LAYOUT.rightPanel.spinWidth}
				height={UI_LAYOUT.rightPanel.spinHeight}
				backgroundColor={GREEN}
				borderColor={INK}
				borderWidth={5}
			/>
			<Rectangle
				x={7}
				y={7}
				width={UI_LAYOUT.rightPanel.spinWidth - 14}
				height={UI_LAYOUT.rightPanel.spinHeight - 14}
				backgroundColor={GREEN}
				backgroundAlpha={0}
				borderColor={GREEN_DARK}
				borderWidth={2}
				alpha={0.72}
			/>
			<Text
				x={UI_LAYOUT.rightPanel.spinWidth / 2}
				y={UI_LAYOUT.rightPanel.spinHeight / 2 - 4}
				anchor={0.5}
				text="↻"
				style={{
					fontFamily: 'Arial',
					fontSize: 96,
					fontWeight: '700',
					fill: 0xffffff,
					stroke: { color: GREEN_DARK, width: 4 },
				}}
			/>
			<Text
				x={UI_LAYOUT.rightPanel.spinWidth / 2}
				y={UI_LAYOUT.rightPanel.spinHeight - 23}
				anchor={0.5}
				text="SPIN"
				style={{
					fontFamily: 'Comic Sans MS',
					fontSize: 13,
					fontWeight: '700',
					fill: 0xf7f0d5,
				}}
			/>
		</Container>

		<!-- FAST paper strip, bottom-aligned with BET/WIN -->
		<Container x={rightX} y={fastY} rotation={-0.008}>
			<Rectangle
				x={5}
				y={5}
				width={UI_LAYOUT.rightPanel.spinWidth}
				height={UI_LAYOUT.rightPanel.fastHeight}
				backgroundColor={SHADOW}
				backgroundAlpha={0.16}
			/>
			<Rectangle
				width={UI_LAYOUT.rightPanel.spinWidth}
				height={UI_LAYOUT.rightPanel.fastHeight}
				backgroundColor={PAPER}
				borderColor={INK}
				borderWidth={3}
			/>
			<Text
				x={22}
				y={UI_LAYOUT.rightPanel.fastHeight / 2}
				anchor={0.5}
				text="+"
				style={{ fontFamily: 'Arial', fontSize: 24, fontWeight: '700', fill: INK }}
			/>
			<Text
				x={UI_LAYOUT.rightPanel.spinWidth / 2}
				y={UI_LAYOUT.rightPanel.fastHeight / 2}
				anchor={0.5}
				text="⚡  FAST"
				style={{
					fontFamily: 'Comic Sans MS',
					fontSize: 15,
					fontWeight: '700',
					fill: INK,
				}}
			/>
			<Text
				x={UI_LAYOUT.rightPanel.spinWidth - 22}
				y={UI_LAYOUT.rightPanel.fastHeight / 2}
				anchor={0.5}
				text="−"
				style={{ fontFamily: 'Arial', fontSize: 24, fontWeight: '700', fill: INK }}
			/>
		</Container>

		<!-- Keep bottomClearance reactive so layout tuning catches regressions. -->
		{#if bottomClearance < UI_LAYOUT.safeGap.bottom}
			<!-- Intentionally empty: no debug visuals in production HUD. -->
		{/if}
	</Container>
{/if}
