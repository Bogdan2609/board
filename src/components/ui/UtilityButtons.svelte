<script lang="ts">
	import { Container, Sprite } from 'pixi-svelte';
	import { stateModal, stateSound, stateUi } from 'state-shared';

	import { getContext } from '../../game/context';
	import { UI_LAYOUT } from '../../game/uiLayout';

	type Props = {
		x: number;
		y: number;
	};

	type ButtonKey = 'sound' | 'info' | 'menu';

	const props: Props = $props();
	const context = getContext();

	let hovered = $state<ButtonKey | null>(null);
	let pressed = $state<ButtonKey | null>(null);

	const soundMuted = $derived(stateSound.volumeValueMaster === 0);
	const rulesOpen = $derived(stateModal.modal?.name === 'gameRules');

	const toggleSound = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateSound.volumeValueMaster = soundMuted ? 50 : 0;
	};

	const openInfo = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = false;
		stateModal.modal = { name: 'gameRules' };
	};

	const openMenu = () => {
		if (stateModal.modal) return;
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateUi.menuOpen = !stateUi.menuOpen;
	};

	const activate = (key: ButtonKey) => {
		if (key === 'sound') toggleSound();
		if (key === 'info') openInfo();
		if (key === 'menu') openMenu();
	};

	const buttonX = (index: number) =>
		index * (UI_LAYOUT.leftButtons.buttonSize + UI_LAYOUT.leftButtons.gap);

	const spriteKey = (key: ButtonKey) => {
		if (key === 'sound') return soundMuted ? 'reportCardUiSoundOff' : 'reportCardUiSoundOn';
		if (key === 'info') return 'reportCardUiInfo';
		return stateUi.menuOpen ? 'reportCardUiMenuClose' : 'reportCardUiMenu';
	};

	const iconSize = UI_LAYOUT.leftButtons.buttonSize + 6;
	const iconOffset = -3;

	const buttonAlpha = (key: ButtonKey) => {
		if (key === 'menu' && stateModal.modal) return 0.45;
		if (pressed === key) return 0.9;
		if (hovered === key) return 1;
		if (key === 'info' && rulesOpen) return 1;
		if (key === 'menu' && stateUi.menuOpen) return 1;
		return 0.96;
	};
</script>

<Container x={props.x} y={props.y}>
	{#each ['sound', 'info', 'menu'] as key, index}
		<Container
			x={buttonX(index)}
			y={pressed === key ? 3 : 0}
			rotation={
				key === 'sound'
					? pressed === key
						? -0.006
						: -0.018
					: key === 'info'
						? pressed === key
							? 0.004
							: 0.014
						: pressed === key
							? 0
							: -0.008
			}
			eventMode="static"
			cursor={key === 'menu' && stateModal.modal ? 'not-allowed' : 'pointer'}
			onpointerover={() => {
				if (key === 'menu' && stateModal.modal) return;
				hovered = key as ButtonKey;
			}}
			onpointerout={() => {
				hovered = null;
				pressed = null;
			}}
			onpointerdown={() => {
				if (key === 'menu' && stateModal.modal) return;
				pressed = key as ButtonKey;
			}}
			onpointerup={() => {
				pressed = null;
				activate(key as ButtonKey);
			}}
			onpointerupoutside={() => (pressed = null)}
			alpha={buttonAlpha(key as ButtonKey)}
		>
			<Sprite
				key={spriteKey(key as ButtonKey)}
				x={iconOffset}
				y={iconOffset}
				width={iconSize}
				height={iconSize}
			/>
		</Container>
	{/each}
</Container>
