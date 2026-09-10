export const UI_LAYOUT = {
	safeGap: {
		side: 24,
		bottom: 12,
		edge: 18,
	},

	leftPanel: {
		// Compact approved left rail from the reference sheet.
		width: 240,
		buyHeight: 126,
		modeHeight: 77,
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
		// Logical layout width. SpinPanel currently contains some hand-tuned
		// artwork offsets that extend past this width, so ReportCardUi reserves
		// extra right-edge space with edgeReserve below.
		width: 250,
		edgeReserve: 50,

		// Smaller top controls. Turbo is centered over SPIN; Auto curls to the right.
		topButtonSize: 66,
		topButtonOverlap: 10,
		autoOffsetX: 90,
		autoOffsetY: 0,
		autoRotation: 0.5,

		// The enlarged BET paper extends below betControlsY.
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
