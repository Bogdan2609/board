import { createLayout } from 'utils-layout';

export const { stateLayout, stateLayoutDerived } = createLayout({
	backgroundRatio: {
		normal: 1672 / 941,
		portrait: 1242 / 2208,
	},
	mainSizesMap: {
		// Keep desktop and landscape on the same 16:9 design space.
		// The extra logical room creates real left/right/bottom HUD rails around
		// the notebook instead of forcing UI to overlap the paper artwork.
		desktop: { width: 1600, height: 900 },
		tablet: { width: 1000, height: 1000 },
		landscape: { width: 1600, height: 900 },
		portrait: { width: 800, height: 1422 },
	},
});
