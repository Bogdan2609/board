export type BackgroundPropMotion = {
	x: number;
	y: number;
	rotationDeg: number;
	scale: number;
	period: number;
	phase: number;
};

export type BackgroundProp = {
	id: string;
	key: string;
	x: number;
	y: number;
	width: number;
	height: number;
	rotationDeg: number;
	alpha: number;
	motion: BackgroundPropMotion;
};

const motion = (
	x: number,
	y: number,
	rotationDeg: number,
	scale: number,
	period: number,
	phase: number,
): BackgroundPropMotion => ({
	x,
	y,
	rotationDeg,
	scale,
	period,
	phase,
});

// -----------------------------------------------------------------------------
// Composition pass #8 — selected assets only
// -----------------------------------------------------------------------------
// Left in scene:
// - today_goals_note
// - eraser_pink
// - pencil_bottom_left (small pencil)
// - pencil_top_right (big pencil)
// - a_plus_spins_sticky
// - ruler_corner
//
// Everything else is intentionally removed for now.
// -----------------------------------------------------------------------------

export const IDLE_SUPPORT_PROPS: BackgroundProp[] = [];

export const IDLE_PAPER_PROPS: BackgroundProp[] = [
	{
		id: 'today-goals-left',
		key: 'reportCardBgPropTodayGoalsNote',
		x: 170,
		y: 615,
		width: 215,
		height: 269,
		rotationDeg: -5,
		alpha: 0.96,
		motion: motion(1.4, 1.8, 0.45, 0.0025, 11.8, 0.5),
	},
	{
		id: 'a-plus-spins-right',
		key: 'reportCardBgPropAPlusSpinsSticky',
		x: 1498,
		y: 300,
		width: 354,
		height: 265.5,
		rotationDeg: -3,
		alpha: 0.96,
		motion: motion(1.4, 1.8, 0.45, 0.0025, 11.6, 3.9),
	},
];

export const IDLE_PHYSICAL_PROPS: BackgroundProp[] = [
	{
		id: 'hero-pencil-top-right',
		key: 'reportCardBgPropPencilTopRight',
		x: 1522,
		y: 56,
		width: 382,
		height: 127,
		rotationDeg: -19,
		alpha: 0.99,
		motion: motion(2.0, 1.5, 0.45, 0.0025, 10.6, 0.4),
	},
	{
		id: 'eraser-bottom-left',
		key: 'reportCardBgPropEraserPink',
		x: 1,
		y: 250,
		width: 148,
		height: 111,
		rotationDeg: -16,
		alpha: 0.95,
		motion: motion(1.8, 1.6, 0.45, 0.0025, 10.2, 3.4),
	},
	{
		id: 'pencil-bottom-left',
		key: 'reportCardBgPropPencilBottomLeft',
		x: -15,
		y: 862,
		width: 400,
		height: 134,
		rotationDeg: -70,
		alpha: 0.98,
		motion: motion(1.8, 1.0, 0.35, 0.002, 11.0, 1.8),
	},
	{
		id: 'ruler-bottom-right',
		key: 'reportCardBgPropRulerCorner',
		x: 1518,
		y: 850,
		width: 547.5,
		height: 183,
		rotationDeg: -7,
		alpha: 0.9,
		motion: motion(1.3, 0.8, 0.3, 0.0018, 11.4, 4.7),
	},
];

export const IDLE_DOODLES: BackgroundProp[] = [];
export const WIN_REACTIVE_PROPS: BackgroundProp[] = [];
export const FREE_SPIN_REACTIVE_PROPS: BackgroundProp[] = [];
export const REACTIVE_DURATION_SECONDS = 0;
