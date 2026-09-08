const sprite = (src: string) => ({
	type: 'sprite' as const,
	src,
});

export default {
	reportCardBgPropAPlusDoodle: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/a_plus_doodle.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropAPlusSpinsSticky: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/a_plus_spins_sticky.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropCheckmarkDoodle01: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/checkmark_doodle_01.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropEraserPink: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/eraser_pink.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropGoodGradesNote: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/good_grades_great_prizes_note.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropGoodLuckSticky: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/good_luck_sticky.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropGreatJobDoodle: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/great_job_doodle.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropHeartDoodle01: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/heart_doodle_01.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropPaperClip: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/paper_clip.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropPencilBottomLeft: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/pencil_bottom_left.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropPencilTopRight: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/pencil_top_right.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropPlayBigSticky: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/play_big_sticky.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropRulerCorner: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/ruler_corner.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropScribbleBlue01: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/scribble_blue_01.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropScribbleRed01: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/scribble_red_01.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropSharpener: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/sharpener.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropShavings01: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/shavings_01.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropShavings03: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/shavings_03.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropSmallArrow: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/small_arrow_doodle.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropSmileyDoodle01: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/smiley_doodle_01.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropStarDoodle01: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/star_doodle_01.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropStarDoodle02: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/star_doodle_02.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropTapePiece01: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/tape_piece_01.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropTapePiece02: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/tape_piece_02.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropTodayGoalsNote: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/today_goals_note.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropTornPaper01: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/torn_paper_bit_01.png',
			import.meta.url,
		).href,
	),
	reportCardBgPropTornPaper02: sprite(
		new URL(
			'../../assets/sprites/reportCardBackgroundProps/torn_paper_bit_02.png',
			import.meta.url,
		).href,
	),
} as const;
