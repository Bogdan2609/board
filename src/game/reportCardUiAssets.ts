export default {
	reportCardUiBalanceBg: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/balance_bg.png',
			import.meta.url,
		).href,
		preload: true,
	},
	reportCardUiBetBg: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/bet_bg.png',
			import.meta.url,
		).href,
		preload: true,
	},
	reportCardUiBuyFreeSpinsBg: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/buy_free_spins_bg.png',
			import.meta.url,
		).href,
		preload: true,
	},

	// Legacy FAST assets stay registered for compatibility with older HUD code.
	reportCardUiFastOff: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/fast_off.png',
			import.meta.url,
		).href,
		preload: true,
	},
	reportCardUiFastOn: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/fast_on.png',
			import.meta.url,
		).href,
		preload: true,
	},

	// Main SPIN button.
	reportCardUiSpinIdle: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/spin_idle.png',
			import.meta.url,
		).href,
		preload: true,
	},
	reportCardUiSpinPressed: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/spin_pressed.png',
			import.meta.url,
		).href,
		preload: true,
	},

	// Main STOP button.
	reportCardUiStopIdle: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/stop_idle.png',
			import.meta.url,
		).href,
		preload: true,
	},
	reportCardUiStopPressed: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/stop_pressed.png',
			import.meta.url,
		).href,
		preload: true,
	},

	// Small TURBO button above SPIN.
	reportCardUiTurboOff: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/turbo_off.png',
			import.meta.url,
		).href,
		preload: true,
	},
	reportCardUiTurboOn: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/turbo_on.png',
			import.meta.url,
		).href,
		preload: true,
	},

	// Small AUTO-SPIN button above SPIN.
	reportCardUiAutoOff: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/auto_off.png',
			import.meta.url,
		).href,
		preload: true,
	},
	reportCardUiAutoOn: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/auto_on.png',
			import.meta.url,
		).href,
		preload: true,
	},

	// Bottom right bet controls.
	reportCardUiBetMinus: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/bet_minus.png',
			import.meta.url,
		).href,
		preload: true,
	},
	reportCardUiBetPlus: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/bet_plus.png',
			import.meta.url,
		).href,
		preload: true,
	},
	reportCardUiRightBetBg: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/right_bet_bg.png',
			import.meta.url,
		).href,
		preload: true,
	},

	reportCardUiWinBg: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/win_bg.png',
			import.meta.url,
		).href,
		preload: true,
	},
} as const;
