export const UI_LAYOUT = {
	safeGap: {
		side: 24,
		bottom: 12,
		edge: 18,
	},

	leftPanel: {
		// Fits the 183 px of real free space to the left of the wooden frame.
		width: 180,
		buyHeight: 112,
		modeHeight: 54,
		gap: 10,
	},

	leftButtons: {
		// The utility row is now one full-width MENU control.
		buttonSize: 48,
		gap: 10,
		statsGap: 10,
	},

	leftStats: {
		width: 180,
		height: 58,
		gap: 10,
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
