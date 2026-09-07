<script lang="ts">
	import { SpineProvider, SpineTrack, type SpineTrackProps } from 'pixi-svelte';
	import { stateBetDerived } from 'state-shared';

	import { getSymbolInfo } from '../game/utils';
	import { SYMBOL_RENDER_SIZE } from '../game/reelBoardLayout';

	type Props = {
		symbolInfo: ReturnType<typeof getSymbolInfo>;
		x?: number;
		y?: number;
		listener: SpineTrackProps['listener'];
		loop?: boolean;
	};

	const props: Props = $props();
</script>

<SpineProvider
	x={props.x}
	y={props.y}
	key={props.symbolInfo.assetKey}
	height={SYMBOL_RENDER_SIZE * props.symbolInfo.sizeRatios.height}
>
	<SpineTrack
		loop={props.loop}
		trackIndex={0}
		animationName={props.symbolInfo.animationName}
		timeScale={stateBetDerived.timeScale()}
		listener={props.listener}
	/>
</SpineProvider>
