<script lang="ts">
	import { Container, Rectangle, Sprite, Text } from 'pixi-svelte';
	import { stateModal, stateSound, stateUi } from 'state-shared';

	import { getContext } from '../../game/context';
	import { HUD_COLORS } from './hudPalette';

	const context = getContext();
	const C = HUD_COLORS;
	const main = $derived(context.stateLayoutDerived.mainLayout());
	const soundMuted = $derived(stateSound.volumeValueMaster === 0);

	let hovered = $state<string | null>(null);
	let pressed = $state<string | null>(null);

	const panelWidth = 300;
	const panelHeight = 375;
	const panelX = 24;
	const panelY = $derived(Math.max(60, main.height / 2 - panelHeight / 2));

	const rowHeight = 48;
	const rowGap = 7;
	const rowsStartY = 100;
	const rowX = 22;
	const rowWidth = panelWidth - 44;

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
		{ key: 'paytable', label: 'PAYTABLE' },
		{ key: 'rules', label: 'GAME RULES' },
		{ key: 'settings', label: 'SETTINGS' },
		{ key: 'sound', label: soundMuted ? 'SOUND OFF' : 'SOUND ON' },
		{ key: 'close', label: 'CLOSE' },
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
		rotation={-0.006}
		eventMode="static"
		onpointerup={(event) => event.stopPropagation()}
	>
		<Sprite
			key="reportCardUiMenuPanelBg"
			width={panelWidth}
			height={panelHeight}
		/>

		<Text
			x={panelWidth / 2}
			y={40}
			anchor={0.5}
			text="REPORT CARD MENU"
			style={{
				fontFamily: 'Comic Sans MS',
				fontSize: 18,
				fontWeight: '700',
				fill: C.INK,
			}}
		/>

		{#each labels as item, index}
			{@const y = rowsStartY + index * (rowHeight + rowGap)}
			<Container
				x={rowX}
				y={y + (pressed === item.key ? 2 : 0)}
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
					width={rowWidth}
					height={rowHeight}
					backgroundColor={item.key === 'close' ? 0xe85a4f : C.YELLOW}
					backgroundAlpha={
						pressed === item.key
							? 0.2
							: hovered === item.key
								? 0.12
								: 0.001
					}
					borderColor={item.key === 'close' ? C.RED : C.GOLD}
					borderWidth={hovered === item.key ? 2 : 0}
				/>
				<Text
					x={52}
					y={rowHeight / 2}
					anchor={{ x: 0, y: 0.5 }}
					text={item.label}
					style={{
						fontFamily: 'Comic Sans MS',
						fontSize: 15,
						fontWeight: '700',
						fill: item.key === 'close' ? C.RED : C.INK,
					}}
				/>
			</Container>
		{/each}
	</Container>
{/if}
