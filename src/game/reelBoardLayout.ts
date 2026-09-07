export const REEL_COLS = 6;
export const REEL_ROWS = 6;

// Reel geometry. Width/height are intentionally independent.
export const CELL_WIDTH = 132;
export const CELL_HEIGHT = 92.5;

// Visual symbol size. Does not affect reel spacing/physics.
export const SYMBOL_RENDER_SIZE = 86;

// -----------------------------------------------------------------------------
// Notebook artwork
// -----------------------------------------------------------------------------
// notebook_master.png was cut into three full-width PNGs without resizing:
//   notebook_top.png    = 1469 x 210
//   notebook_middle.png = 1469 x 690
//   notebook_bottom.png = 1469 x 171
//
// Only the middle section is allowed to grow vertically. This keeps the spiral
// and top page edge untouched while creating extra paper below the sixth row.
export const NOTEBOOK_SOURCE_WIDTH = 1469;
export const NOTEBOOK_SOURCE_HEIGHT = 1071;

export const NOTEBOOK_TOP_SOURCE_HEIGHT = 210;
export const NOTEBOOK_MIDDLE_SOURCE_HEIGHT = 690;
export const NOTEBOOK_BOTTOM_SOURCE_HEIGHT = 171;

// Runtime width of all three notebook slices.
export const NOTEBOOK_WIDTH = 1040;
export const NOTEBOOK_SCALE = NOTEBOOK_WIDTH / NOTEBOOK_SOURCE_WIDTH;

// Natural, undistorted heights at NOTEBOOK_WIDTH.
export const NOTEBOOK_BASE_HEIGHT = NOTEBOOK_SOURCE_HEIGHT * NOTEBOOK_SCALE;
export const NOTEBOOK_TOP_HEIGHT = NOTEBOOK_TOP_SOURCE_HEIGHT * NOTEBOOK_SCALE;
export const NOTEBOOK_MIDDLE_BASE_HEIGHT =
	NOTEBOOK_MIDDLE_SOURCE_HEIGHT * NOTEBOOK_SCALE;
export const NOTEBOOK_BOTTOM_HEIGHT =
	NOTEBOOK_BOTTOM_SOURCE_HEIGHT * NOTEBOOK_SCALE;

// Extra paper height added ONLY to notebook_middle.png.
export const NOTEBOOK_BODY_STRETCH = 48;
export const NOTEBOOK_MIDDLE_HEIGHT =
	NOTEBOOK_MIDDLE_BASE_HEIGHT + NOTEBOOK_BODY_STRETCH;
export const NOTEBOOK_RENDER_HEIGHT =
	NOTEBOOK_TOP_HEIGHT + NOTEBOOK_MIDDLE_HEIGHT + NOTEBOOK_BOTTOM_HEIGHT;

// Notebook position in the main layout. This is independent from reel position.
export const NOTEBOOK_POSITION_X = 0.52;
export const NOTEBOOK_POSITION_Y = 0.425;

// Pixel fine tuning for notebook artwork only.
export const NOTEBOOK_OFFSET_X = 0;
export const NOTEBOOK_OFFSET_Y = 4;

// Base reel-board position in the main layout.
export const BOARD_POSITION_X = NOTEBOOK_POSITION_X;
export const BOARD_POSITION_Y = NOTEBOOK_POSITION_Y;

// Reel field offset relative to the notebook center.
// Positive Y moves only the 6x6 reel field down, leaving the notebook fixed.
export const REEL_OFFSET_X = 0;
export const REEL_OFFSET_Y = 38;

// Perspective of the notebook's red margin line. Pixi skew is in radians.
export const REEL_SKEW_X_DEG = -1.9;
export const REEL_SKEW_X = (REEL_SKEW_X_DEG * Math.PI) / 180;
