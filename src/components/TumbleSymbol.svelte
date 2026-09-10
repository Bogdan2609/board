<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { Container } from 'pixi-svelte';

	import Symbol from './Symbol.svelte';
	import SymbolWrap from './SymbolWrap.svelte';
	import ChalkLandImpact from './ChalkLandImpact.svelte';
	import { getSymbolX, getSymbolInfo } from '../game/utils';
	import type { TumbleSymbol } from '../game/stateGame.svelte';

	type Props = {
		reelIndex: number;
		tumbleSymbol: TumbleSymbol;
	};

	const props: Props = $props();
	const symbolInfo = $derived(
		getSymbolInfo({
			rawSymbol: props.tumbleSymbol.rawSymbol,
			state: props.tumbleSymbol.symbolState,
		}),
	);

	const scaleX = new Tween(1);
	const scaleY = new Tween(1);
	let wasLanding = false;

	const playImpactSquash = async () => {
		await Promise.all([
			scaleX.set(1.035, { duration: 38, easing: cubicOut }),
			scaleY.set(0.94, { duration: 38, easing: cubicOut }),
		]);

		await Promise.all([
			scaleX.set(1, { duration: 68, easing: cubicOut }),
			scaleY.set(1, { duration: 68, easing: cubicOut }),
		]);
	};

	$effect(() => {
		const isLanding = props.tumbleSymbol.symbolState === 'land';

		if (isLanding && !wasLanding) {
			wasLanding = true;
			void playImpactSquash();
		}

		if (!isLanding) {
			wasLanding = false;
		}
	});
</script>

<SymbolWrap
	x={getSymbolX(props.reelIndex)}
	y={props.tumbleSymbol.symbolY.current}
	animating={symbolInfo.type === 'spine'}
>
	{#if props.tumbleSymbol.symbolState === 'land'}
		<ChalkLandImpact />
	{/if}

	<Container
		scale={{
			x: scaleX.current,
			y: scaleY.current,
		}}
	>
		<Symbol
			state={props.tumbleSymbol.symbolState}
			rawSymbol={props.tumbleSymbol.rawSymbol}
			oncomplete={props.tumbleSymbol.oncomplete}
		/>
	</Container>
</SymbolWrap>
