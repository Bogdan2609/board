<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'COMPONENTS/<Game>',
	});
</script>

<script lang="ts">
	import {
		StoryLocale,
		StoryGameTemplate,
		type TemplateArgs,
		templateArgs,
	} from 'components-storybook';

	import { stateGame, stateGameDerived } from '../game/stateGame.svelte';
	import config from '../game/config';
	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';
	import { eventEmitter } from '../game/eventEmitter';
	import { runTestSpin } from './storyBoardUtils';

	setContext();
</script>

{#snippet template(args: TemplateArgs<any>)}
	<StoryGameTemplate
		skipLoadingScreen={args.skipLoadingScreen}
		action={async () => {
			await args.action?.(args.data);
		}}
	>
		<StoryLocale lang="en">
			<Game />
		</StoryLocale>
	</StoryGameTemplate>
{/snippet}

<Story name="component (loadingScreen)">
	<StoryLocale lang="en">
		<Game />
	</StoryLocale>
</Story>

<!--
	Low-level test: only makes the current board fall out.
	Use "spin" below for a complete action that always resolves back to a settled board.
-->
<Story
	name="preSpin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => {
			await stateGameDerived.enhancedBoard.preSpin({
				paddingBoard: config.paddingReels[stateGame.gameType],
			});
		},
	})}
	{template}
/>

<!-- Main visual test: complete 6x6 spin. Safe to click repeatedly. -->
<Story
	name="spin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => {
			await runTestSpin();
		},
	})}
	{template}
/>

<!-- Complete spin that also exercises the anticipation path on reel 4. -->
<Story
	name="spin: anticipation"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => {
			await runTestSpin({ anticipation: [0, 0, 0, 1, 0, 0] });
		},
	})}
	{template}
/>

<Story
	name="emitterEvent: boardHide"
	args={templateArgs({
		skipLoadingScreen: true,
		data: {},
		action: async () => {
			eventEmitter.broadcast({ type: 'boardHide' });
		},
	})}
	{template}
/>
