import _ from 'lodash';

import {
	CELL_WIDTH,
	CELL_HEIGHT,
	SYMBOL_RENDER_SIZE,
} from './reelBoardLayout';

import type { RawSymbol, SymbolState } from './types';

// Temporary backwards-compatible alias for legacy UI components.
// Reel geometry itself uses CELL_WIDTH / CELL_HEIGHT from reelBoardLayout.ts.
export const SYMBOL_SIZE = SYMBOL_RENDER_SIZE;

export const REEL_PADDING = 0.5;

// initial board (padded top and bottom)
export const INITIAL_BOARD: RawSymbol[][] = [
	[
		{ name: 'L3' }, // padding
		{ name: 'L1' }, // A
		{ name: 'L4' }, // D
		{ name: 'S', scatter: true }, // Graduation Cap
		{ name: 'L2' }, // B
		{ name: 'L4' }, // D
		{ name: 'L1' }, // A
		{ name: 'H1' }, // padding
	],
	[
		{ name: 'L4' }, // padding
		{ name: 'L2' }, // B
		{ name: 'H2' }, // Jacket
		{ name: 'L3' }, // C
		{ name: 'W' }, // temporary F
		{ name: 'H1' }, // Bus
		{ name: 'S', scatter: true }, // Graduation Cap
		{ name: 'L2' }, // padding
	],
	[
		{ name: 'H4' }, // padding
		{ name: 'H1' }, // Bus
		{ name: 'W' }, // temporary F

		// пока используем существующий multiplier,
		// наш Extra Credit x3 подключим отдельно
		{ name: 'M', multiplier: 2 },

		{ name: 'H2' }, // Jacket
		{ name: 'L2' }, // B
		{ name: 'L3' }, // C
		{ name: 'H3' }, // padding
	],
	[
		{ name: 'L1' }, // padding
		{ name: 'H3' }, // Trophy
		{ name: 'L2' }, // B
		{ name: 'H4' }, // Backpack
		{ name: 'L1' }, // A
		{ name: 'H3' }, // Trophy
		{ name: 'H4' }, // Backpack
		{ name: 'L4' }, // padding
	],
	[
		{ name: 'H2' }, // padding
		{ name: 'L3' }, // C
		{ name: 'L1' }, // A
		{ name: 'H3' }, // Trophy
		{ name: 'S', scatter: true }, // Graduation Cap
		{ name: 'W' }, // temporary F
		{ name: 'L4' }, // D
		{ name: 'L3' }, // padding
	],
	[
		{ name: 'L2' }, // padding
		{ name: 'H4' }, // Backpack
		{ name: 'L3' }, // C
		{ name: 'L4' }, // D
		{ name: 'L3' }, // C
		{ name: 'L1' }, // A
		{ name: 'W' }, // temporary F
		{ name: 'H1' }, // padding
	],
];

export const BOARD_DIMENSIONS = {
	x: INITIAL_BOARD.length,
	y: INITIAL_BOARD[0].length - 2,
};

export const BOARD_SIZES = {
	width: CELL_WIDTH * BOARD_DIMENSIONS.x,
	height: CELL_HEIGHT * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4', 'H5'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const M_SIZE = 0.3;
const HIGH_SYMBOL_SIZE = 0.9;
const LOW_SYMBOL_SIZE = 0.9;
const SPECIAL_SYMBOL_SIZE = 1;

const SPIN_OPTIONS_SHARED = {
	reelFallInDelay: 80,
	reelPaddingMultiplierNormal: 1.25,
	reelPaddingMultiplierAnticipated: 18,
	reelFallOutDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 3.5,
	symbolFallInInterval: 30,
	symbolFallInBounceSpeed: 0.15,
	symbolFallInBounceSizeMulti: 0.5,
	symbolFallOutSpeed: 3.5,
	symbolFallOutInterval: 20,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 7,
	symbolFallInInterval: 0,
	symbolFallInBounceSpeed: 0.3,
	symbolFallInBounceSizeMulti: 0.25,
	symbolFallOutSpeed: 7,
	symbolFallOutInterval: 0,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

const explosion = {
	type: 'spine',
	assetKey: 'explosion',
	animationName: 'explosion',
	sizeRatios: { width: 1, height: 1 },
};

const h1Static = { type: 'sprite', assetKey: 'h1.webp', sizeRatios: { width: 1, height: 1 } };
const h2Static = { type: 'sprite', assetKey: 'h2.webp', sizeRatios: { width: 1, height: 1 } };
const h3Static = { type: 'sprite', assetKey: 'h3.webp', sizeRatios: { width: 1, height: 1 } };
const h4Static = { type: 'sprite', assetKey: 'h4.webp', sizeRatios: { width: 1, height: 1 } };
const h5Static = { type: 'sprite', assetKey: 'h5.webp', sizeRatios: { width: 1, height: 1 } };

const l1Static = { type: 'sprite', assetKey: 'l1.webp', sizeRatios: { width: 1, height: 1 } };
const l2Static = { type: 'sprite', assetKey: 'l2.webp', sizeRatios: { width: 1, height: 1 } };
const l3Static = { type: 'sprite', assetKey: 'l3.webp', sizeRatios: { width: 1, height: 1 } };
const l4Static = { type: 'sprite', assetKey: 'l4.webp', sizeRatios: { width: 1, height: 1 } };

const sStatic = { type: 'sprite', assetKey: 's.png', sizeRatios: { width: 1.243, height: 1.243 } };
const wStatic = { type: 'sprite', assetKey: 'w.png', sizeRatios: { width: 1.12, height: 1.12 } };

const m2Static = {
	type: 'sprite',
	assetKey: 'm1_2x.png',
	sizeRatios: { width: 0.88, height: 0.88 },
};
const m4Static = {
	type: 'sprite',
	assetKey: 'm1_4x.png',
	sizeRatios: { width: 0.88, height: 0.88 },
};
const m5Static = { type: 'sprite', assetKey: 'm2_5x.png', sizeRatios: { width: 1, height: 1 } };
const m7Static = { type: 'sprite', assetKey: 'm2_7x.png', sizeRatios: { width: 1, height: 1 } };
const m10Static = { type: 'sprite', assetKey: 'm3_10x.png', sizeRatios: { width: 1, height: 1 } };

const wSizeRatios = { width: 1.5 * 0.9, height: SPECIAL_SYMBOL_SIZE * 1.15 };
const sSizeRatios = { width: 2.5, height: SPECIAL_SYMBOL_SIZE * 2.3 };

const backgroundLowStatic = {
	type: 'spine',
	assetKey: 'M',
	animationName: 'low_multiplier_static',
	sizeRatios: { width: M_SIZE, height: M_SIZE },
};
const backgroundMidStatic = {
	type: 'spine',
	assetKey: 'M',
	animationName: 'mid_multiplier_static',
	sizeRatios: { width: M_SIZE, height: M_SIZE },
};
const backgroundHighStatic = {
	type: 'spine',
	assetKey: 'M',
	animationName: 'high_multiplier_static',
	sizeRatios: { width: M_SIZE, height: M_SIZE },
};

const backgroundLow = {
	explosion,
	win: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'low_multiplier_pay',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	postWinStatic: backgroundLowStatic,
	static: backgroundLowStatic,
	spin: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'low_multiplier_static',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	land: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'low_multiplier_land',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
};

const backgroundMid = {
	explosion,
	win: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'mid_multiplier_pay',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	postWinStatic: backgroundMidStatic,
	static: backgroundMidStatic,
	spin: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'mid_multiplier_static',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	land: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'mid_multiplier_land',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
};

const backgroundHigh = {
	explosion,
	win: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'high_multiplier_pay',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	postWinStatic: backgroundHighStatic,
	static: backgroundHighStatic,
	spin: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'high_multiplier_static',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	land: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'high_multiplier_land',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
};


const HIGH_SYMBOL_WIDTH = 0.5 * 1.15;

const createSpineState = <
	const AssetKey extends string,
	const AnimationName extends string,
>(
	assetKey: AssetKey,
	animationName: AnimationName,
	heightFactor: number,
) => ({
	type: 'spine' as const,
	assetKey,
	animationName,
	sizeRatios: {
		width: HIGH_SYMBOL_WIDTH,
		height: HIGH_SYMBOL_SIZE * heightFactor,
	},
});

const createStandardSymbol = <const AssetKey extends string>(
	assetKey: AssetKey,
	heightFactor: number,
	landHeightFactor = heightFactor,
) => ({
	explosion: createSpineState(
		assetKey,
		'explosion',
		heightFactor,
	),

	win: createSpineState(
		assetKey,
		'win',
		heightFactor,
	),

	postWinStatic: createSpineState(
		assetKey,
		'postWinStatic',
		heightFactor,
	),

	static: createSpineState(
		assetKey,
		'static',
		heightFactor,
	),

	spin: createSpineState(
		assetKey,
		'spin',
		heightFactor,
	),

	land: createSpineState(
		assetKey,
		'land',
		landHeightFactor,
	),
});


export const SYMBOL_INFO_MAP = {
	H1: createStandardSymbol('H1', 0.57),
	H2: createStandardSymbol('H2', 0.57),
	H3: createStandardSymbol('H3', 0.57),
	H4: createStandardSymbol('H4', 0.57),

	H5: createStandardSymbol('H5', 0.53),

	L1: createStandardSymbol('L1', 0.53),
	L2: createStandardSymbol('L2', 0.53),
	L3: createStandardSymbol('L3', 0.53),

	// Сохраняем текущее особое поведение:
	// normal = 0.53, land = 0.43
	L4: createStandardSymbol('L4', 0.53, 0.43),

	// ...
	W: {
		explosion,
		postWinStatic: {
			type: 'sprite',
			assetKey: 'explodedW.png',
			sizeRatios: { width: 0.85, height: 0.85 },
		},
		static: wStatic,
		spin: wStatic,
		win: { type: 'spine', assetKey: 'W', animationName: 'wild_dynamite', sizeRatios: wSizeRatios },
		land: {
			type: 'spine',
			assetKey: 'W',
			animationName: 'wild_dynamite_land',
			sizeRatios: wSizeRatios,
		},
	},
	S: {
		explosion,
		postWinStatic: sStatic,
		static: sStatic,
		spin: {
			type: 'spine',
			assetKey: 'S',
			animationName: 'scatter_spin',
			sizeRatios: sSizeRatios,
		},
		win: { type: 'spine', assetKey: 'S', animationName: 'scatter_win', sizeRatios: sSizeRatios },
		land: {
			type: 'spine',
			assetKey: 'S',
			animationName: 'scatter_land',
			sizeRatios: sSizeRatios,
		},
	},
	M_2: {
		explosion,
		postWinStatic: m2Static,
		static: m2Static,
		spin: m2Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '2x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '2x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_4: {
		explosion,
		postWinStatic: m4Static,
		static: m4Static,
		spin: m4Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '4x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '4x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_5: {
		explosion,
		postWinStatic: m5Static,
		static: m5Static,
		spin: m5Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '5x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '5x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_7: {
		explosion,
		postWinStatic: m7Static,
		static: m7Static,
		spin: m7Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '7x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '7x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_10: {
		explosion,
		postWinStatic: m10Static,
		static: m10Static,
		spin: m10Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '10x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '10x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_TAKEN_2: backgroundLow,
	M_TAKEN_4: backgroundLow,
	M_TAKEN_5: backgroundMid,
	M_TAKEN_7: backgroundMid,
	M_TAKEN_10: backgroundHigh,
} as const;

export const MULTIPLIER_BACKGROUND_INFO_MAP = {
	M_2: backgroundLow,
	M_4: backgroundLow,
	M_5: backgroundMid,
	M_7: backgroundMid,
	M_10: backgroundHigh,
};

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
