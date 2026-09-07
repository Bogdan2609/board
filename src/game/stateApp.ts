import { createApp } from 'pixi-svelte';

import assets from './assets';
import reportCardUiAssets from './reportCardUiAssets';

export const { stateApp } = createApp({
	assets: {
		...assets,
		...reportCardUiAssets,
	},
});
