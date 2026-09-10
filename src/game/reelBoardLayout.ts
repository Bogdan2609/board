export const REEL_COLS = 6;
export const REEL_ROWS = 6;

// Reel geometry. Width/height are intentionally independent.
export const CELL_WIDTH = 132;
export const CELL_HEIGHT = 110;

// Visual symbol size. Does not affect reel spacing/physics.
export const SYMBOL_RENDER_SIZE = 86;

// -----------------------------------------------------------------------------
// New reel frame artwork
// -----------------------------------------------------------------------------
// Source images:
//   frame_bg.png   = 1448 x 1086
//   frame_edge.png = 1368 x 1149
//
// The two PNG canvases have different aspect ratios on purpose. Their visible
// artwork aligns when rendered at the widths below: the teal board surface
// bleeds under the inner lip of the wooden/navy frame.
export const FRAME_BG_SOURCE_WIDTH = 1448;
export const FRAME_BG_SOURCE_HEIGHT = 1086;
export const FRAME_EDGE_SOURCE_WIDTH = 1368;
export const FRAME_EDGE_SOURCE_HEIGHT = 1149;

export const FRAME_EDGE_WIDTH = 1040;
export const FRAME_EDGE_HEIGHT =
	FRAME_EDGE_WIDTH * (FRAME_EDGE_SOURCE_HEIGHT / FRAME_EDGE_SOURCE_WIDTH);

export const FRAME_BG_WIDTH = 1110;
export const FRAME_BG_HEIGHT =
	FRAME_BG_WIDTH * (FRAME_BG_SOURCE_HEIGHT / FRAME_BG_SOURCE_WIDTH);

// -----------------------------------------------------------------------------
// Legacy notebook artwork constants
// -----------------------------------------------------------------------------
// Kept temporarily because other work-in-progress code may still import them.
// BoardFrame no longer renders the notebook slices.
export const NOTEBOOK_SOURCE_WIDTH = 1469;
export const NOTEBOOK_SOURCE_HEIGHT = 1071;

export const NOTEBOOK_TOP_SOURCE_HEIGHT = 210;
export const NOTEBOOK_MIDDLE_SOURCE_HEIGHT = 690;
export const NOTEBOOK_BOTTOM_SOURCE_HEIGHT = 171;

export const NOTEBOOK_WIDTH = 1040;
export const NOTEBOOK_SCALE = NOTEBOOK_WIDTH / NOTEBOOK_SOURCE_WIDTH;

export const NOTEBOOK_BASE_HEIGHT = NOTEBOOK_SOURCE_HEIGHT * NOTEBOOK_SCALE;
export const NOTEBOOK_TOP_HEIGHT = NOTEBOOK_TOP_SOURCE_HEIGHT * NOTEBOOK_SCALE;
export const NOTEBOOK_MIDDLE_BASE_HEIGHT =
	NOTEBOOK_MIDDLE_SOURCE_HEIGHT * NOTEBOOK_SCALE;
export const NOTEBOOK_BOTTOM_HEIGHT =
	NOTEBOOK_BOTTOM_SOURCE_HEIGHT * NOTEBOOK_SCALE;

export const NOTEBOOK_BODY_STRETCH = 48;
export const NOTEBOOK_MIDDLE_HEIGHT =
	NOTEBOOK_MIDDLE_BASE_HEIGHT + NOTEBOOK_BODY_STRETCH;
export const NOTEBOOK_RENDER_HEIGHT =
	NOTEBOOK_TOP_HEIGHT + NOTEBOOK_MIDDLE_HEIGHT + NOTEBOOK_BOTTOM_HEIGHT;

// The new frame keeps the same stage placement as the previous reel shell.
export const FRAME_POSITION_X = 0.52;
export const FRAME_POSITION_Y = 0.425;

export const FRAME_OFFSET_X = 0;
export const FRAME_OFFSET_Y = 4;

// Backwards-compatible aliases for code that still refers to notebook position.
export const NOTEBOOK_POSITION_X = FRAME_POSITION_X;
export const NOTEBOOK_POSITION_Y = FRAME_POSITION_Y;
export const NOTEBOOK_OFFSET_X = FRAME_OFFSET_X;
export const NOTEBOOK_OFFSET_Y = FRAME_OFFSET_Y;

// Base reel-board position in the main layout.
export const BOARD_POSITION_X = FRAME_POSITION_X;
export const BOARD_POSITION_Y = FRAME_POSITION_Y;

// frame_edge's transparent opening is centered ~17.5 source pixels above the
// PNG canvas center. At FRAME_EDGE_WIDTH=1040 this is ~13.3 runtime pixels.
// Moving the 6x6 board by -14 px centers it inside the visible opening.
export const REEL_OFFSET_X = 0;
export const REEL_OFFSET_Y = -14;

// The new wooden/navy frame is frontal. Keep the playable area unskewed.
export const REEL_SKEW_X_DEG = 0;
export const REEL_SKEW_X = (REEL_SKEW_X_DEG * Math.PI) / 180;
