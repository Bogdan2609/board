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
		// Wider only for the bottom BET strip. The 220px SPIN remains centered.
		width: 250,

		// Smaller top controls. Turbo is centered over SPIN; Auto curls to the right.
		topButtonSize: 66,
		topButtonOverlap: 10,
		autoOffsetX: 90,
		autoOffsetY: 0,
		autoRotation: 0.5,

		// Keep SPIN close to the right BET row so the whole rail sits lower.
		sectionGap: 4,
		bottomOffset: 0,

		spinWidth: 220,
		spinHeight: 220,

		// Slightly larger right-side BET asset while keeping +/- compact.
		betHeight: 70,
		betStepWidth: 60,
		betGap: 10,
	},

	bottom: {
		bottomOffset: 14,
	},
} as const;
