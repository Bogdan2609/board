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
// Viewport-safe 16:9 composition
// -----------------------------------------------------------------------------
// Desktop/landscape logical stage = 1600 x 900.
//
// Important:
// - MainContainer already scales this complete design space to 1280x720,
//   1200x675, etc.
// - Props therefore must be composed against THIS stage, not against the
//   physical browser size.
// - Edge props may intentionally crop a little, but important visual content
//   stays inside the stage.
// -----------------------------------------------------------------------------

export const IDLE_SUPPORT_PROPS: BackgroundProp[] = [
	{
		id: 'shavings-top-right',
		key: 'reportCardBgPropShavings01',
		x: 1470,
		y: 200,
		width: 115,
		height: 86,
		rotationDeg: 8,
		alpha: 0.72,
		motion: motion(1.6, 1.5, 0.7, 0.003, 9.4, 2.8),
	},
];

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
		// Tucked behind the notebook/right rail instead of hanging outside
		// the logical stage.
		x: 1400,
		y: 400,
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
		// Still intentionally enters from the top/right edge, but no longer
		// loses a large part of the pencil at smaller 16:9 embeds.
		x: 1430,
		y: 60,
		width: 340,
		height: 113,
		rotationDeg: -19,
		alpha: 0.99,
		motion: motion(2.0, 1.5, 0.45, 0.0025, 10.6, 0.4),
	},
	{
		id: 'sharpener-top-right',
		key: 'reportCardBgPropSharpener',
		x: 1520,
		y: 210,
		width: 108,
		height: 108,
		rotationDeg: 9,
		alpha: 0.95,
		motion: motion(1.7, 1.6, 0.45, 0.0025, 10.0, 2.2),
	},
	{
		id: 'eraser-bottom-left',
		key: 'reportCardBgPropEraserPink',
		// Controlled edge crop instead of losing half the eraser.
		x: 70,
		y: 250,
		width: 148,
		height: 111,
		rotationDeg: -16,
		alpha: 0.95,
		motion: motion(1.8, 1.6, 0.45, 0.0025, 10.2, 3.4),
	},
	{
		id: 'paperclip-left',
		key: 'reportCardBgPropPaperClip',
		x: 335,
		y: 75,
		width: 82,
		height: 82,
		rotationDeg: 25,
		alpha: 0.9,
		motion: motion(1.6, 1.6, 0.45, 0.0025, 9.6, 1.1),
	},
	{
		id: 'pencil-bottom-left',
		key: 'reportCardBgPropPencilBottomLeft',
		// Keep the strong diagonal reference look, but make its rotated bounds
		// fit the 1600x900 scene much more predictably.
		x: 100,
		y: 700,
		width: 400,
		height: 134,
		rotationDeg: -70,
		alpha: 0.98,
		motion: motion(1.8, 1.0, 0.35, 0.002, 11.0, 1.8),
	},
	{
		id: 'ruler-bottom-right',
		key: 'reportCardBgPropRulerCorner',
		// Long ruler remains a framing prop, but its rotated right/bottom bounds
		// now stay almost completely inside the stage.
		x: 1300,
		y: 770,
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
