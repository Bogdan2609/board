import { getLoadableAssets } from 'utils-pixi';

import background from './background.png';
import frameBg from './frame_bg.png';
import frameEdge from './frame_edge.png';

export const rawAssets = {
	reportCardBackground: background,
	reportCardFrameBg: frameBg,
	reportCardFrameEdge: frameEdge,
};

export default getLoadableAssets(rawAssets);
