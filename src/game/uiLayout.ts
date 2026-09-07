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

	leftStats: {
		width: 205,
		height: 54,
		gap: 7,
	},

	winPanel: {
		height: 58,
	},

	rightPanel: {
		spinWidth: 168,
		spinHeight: 168,
		fastHeight: 50,
		gap: 12,
	},

	bottom: {
		// Common baseline for BET, WIN and FAST.
		bottomOffset: 14,
	},
} as const;
