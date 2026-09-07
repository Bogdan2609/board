export const UI_LAYOUT = {
	// Gap between the notebook artwork and the side HUD rails.
	safeGap: {
		side: 24,
		bottom: 12,
		edge: 18,
	},

	leftPanel: {
		width: 220,
		buyHeight: 132,
		modeHeight: 102,
		gap: 16,
	},

	leftButtons: {
		buttonSize: 48,
		gap: 10,
		statsGap: 12,
	},

	// The production art has more visual detail than the old code rectangles,
	// so give BALANCE/BET enough room to read at desktop scale.
	leftStats: {
		width: 235,
		height: 68,
		gap: 8,
	},

	winPanel: {
		height: 76,
		widthRatio: 0.92,
		holdMs: 1800,
		fadeMs: 180,
	},

	rightPanel: {
		spinWidth: 220,
		spinHeight: 220,
		fastHeight: 56,
		gap: 12,
	},

	bottom: {
		// Common baseline for BET, WIN and FAST.
		bottomOffset: 14,
	},
} as const;
