<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { stateModal, stateSound, stateUi } from 'state-shared';

	import { getContext } from '../../game/context';
	import { HUD_COLORS } from './hudPalette';

	const context = getContext();
	const C = HUD_COLORS;
	const main = $derived(context.stateLayoutDerived.mainLayout());
	const soundMuted = $derived(stateSound.volumeValueMaster === 0);

	let hovered = $state<string | null>(null);
	let pressed = $state<string | null>(null);

	const panelWidth = 246;
	const rowHeight = 52;
	const gap = 8;
	const panelHeight = 62 + rowHeight * 5 + gap * 4 + 22;
	const panelX = 28;
	const panelY = $derived(Math.max(94, main.height / 2 - panelHeight / 2));

	const close = () => {
		hovered = null;
		pressed = null;
		stateUi.menuOpen = false;
	};

	const click = (key: 'paytable' | 'rules' | 'settings' | 'sound' | 'close') => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		if (key === 'sound') {
			stateSound.volumeValueMaster = soundMuted ? 50 : 0;
			return;
		}

		if (key === 'paytable') stateModal.modal = { name: 'payTable' };
		if (key === 'rules') stateModal.modal = { name: 'gameRules' };
		if (key === 'settings') stateModal.modal = { name: 'settings' };
		if (key !== 'sound') close();
	};

	const labels = $derived([
		{ key: 'paytable', label: '★  PAYTABLE', paper: C.BLUE },
		{ key: 'rules', label: 'i   GAME RULES', paper: C.PAPER_LIGHT },
		{ key: 'settings', label: '⚙  SETTINGS', paper: C.BLUE },
		{ key: 'sound', label: soundMuted ? '🔇  SOUND OFF' : '🔊  SOUND ON', paper: C.PAPER_LIGHT },
		{ key: 'close', label: '×   CLOSE', paper: 0xf7d7cf },
	] as const);
</script>

{#if stateUi.menuOpen}
	<Rectangle
		x={main.width / 2}
		y={main.height / 2}
		anchor={0.5}
		width={main.width}
		height={main.height}
		backgroundColor={0x000000}
		alpha={0.46}
		eventMode="static"
		cursor="pointer"
		onpointerup={close}
	/>

	<Container
		x={panelX}
		y={panelY}
		rotation={-0.008}
		eventMode="static"
		onpointerup={(event) => event.stopPropagation()}
	>
		<Rectangle
			x={9}
			y={10}
			width={panelWidth}
			height={panelHeight}
			backgroundColor={C.SHADOW}
			backgroundAlpha={0.3}
		/>
		<Rectangle
			width={panelWidth}
			height={panelHeight}
			backgroundColor={C.PAPER}
			borderColor={C.INK}
			borderWidth={4}
		/>
		<Rectangle
			x={5}
			y={5}
			width={panelWidth - 10}
			height={panelHeight - 10}
			backgroundColor={C.PAPER}
			backgroundAlpha={0}
			borderColor={C.INK_SOFT}
			borderWidth={1}
			alpha={0.35}
		/>

		<!-- Tape and thumb-tack doodles make the menu feel like a pinned note. -->
		<Rectangle
			x={28}
			y={-9}
			width={58}
			height={18}
			rotation={-0.08}
			backgroundColor={C.BLUE_TAPE}
			backgroundAlpha={0.9}
		/>
		<Rectangle
			x={panelWidth - 84}
			y={-7}
			width={56}
			height={18}
			rotation={0.07}
			backgroundColor={C.BLUE_TAPE}
			backgroundAlpha={0.9}
		/>

		<Text
			x={panelWidth / 2}
			y={15}
			anchor={{ x: 0.5, y: 0 }}
			text="REPORT CARD MENU"
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 20,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>
		<Text
			x={panelWidth / 2}
			y={40}
			anchor={{ x: 0.5, y: 0 }}
			text="— pick a note —"
			style={{ fontFamily: 'Comic Sans MS', fontSize: 11, fill: C.INK_SOFT }}
		/>

		{#each labels as item, index}
			{@const y = 66 + index * (rowHeight + gap)}
			<Container
				x={12}
				y={y + (pressed === item.key ? 3 : 0)}
				rotation={pressed === item.key ? 0 : index % 2 === 0 ? -0.006 : 0.005}
				eventMode="static"
				cursor="pointer"
				onpointerover={() => (hovered = item.key)}
				onpointerout={() => {
					hovered = null;
					pressed = null;
				}}
				onpointerdown={() => (pressed = item.key)}
				onpointerup={(event) => {
					event.stopPropagation();
					pressed = null;
					click(item.key);
				}}
				onpointerupoutside={() => (pressed = null)}
			>
				<Rectangle
					x={pressed === item.key ? 2 : 4}
					y={pressed === item.key ? 2 : 4}
					width={panelWidth - 24}
					height={rowHeight}
					backgroundColor={C.SHADOW}
					backgroundAlpha={pressed === item.key ? 0.07 : 0.13}
				/>
				<Rectangle
					width={panelWidth - 24}
					height={rowHeight}
					backgroundColor={
						pressed === item.key
							? C.YELLOW_PRESSED
							: hovered === item.key
								? item.key === 'close'
									? 0xf5c4bd
									: C.YELLOW_HOVER
								: item.paper
					}
					borderColor={hovered === item.key ? C.GOLD : C.INK}
					borderWidth={hovered === item.key ? 3 : 2}
				/>
				<Text
					x={14}
					y={rowHeight / 2}
					anchor={{ x: 0, y: 0.5 }}
					text={item.label}
					style={{
						fontFamily: 'Comic Sans MS',
						fontSize: 15,
						fontWeight: '700',
						fill: C.INK,
					}}
				/>
			</Container>
		{/each}
	</Container>
{/if}
