import { createAsset } from 'pixi-svelte';

import img from './symbols.webp';
import rawAtlas from './symbols.atlas?raw';
import H1 from './h1.json';
import H2 from './h2.json';
import H3 from './h3.json';
import H4 from './h4.json';
import H5 from './h5.json';

// L1-L4 use separate atlases (l1.atlas ... l4.atlas) via src/game/assets.ts.
// Registering them against symbols.atlas makes their attachments invisible.
export default createAsset({
	img,
	rawAtlas,
	spines: {
		H1,
		H2,
		H3,
		H4,
		H5,
	},
});