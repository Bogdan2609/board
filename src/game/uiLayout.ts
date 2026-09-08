export const UI_LAYOUT = {
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
		buttonSize: 56,
		gap: 10,
		statsGap: 12,
	},

	// НЕ ТРОГАЕМ.
	leftStats: {
		width: 235,
		height: 68,
		gap: 8,
	},

	winPanel: {
		height: 82,
		widthRatio: 0.82,
		holdMs: 1800,
		fadeMs: 180,
	},

	rightPanel: {
		width: 220,

		topButtonSize: 78,
		topButtonGap: 14,

		sectionGap: 12,

		spinWidth: 220,
		spinHeight: 220,

		betHeight: 66,
		betStepWidth: 54,
		betGap: 6,
	},

	bottom: {
		bottomOffset: 14,
	},
} as const;
