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
	reportCardUiWinBg: {
		type: 'sprite',
		src: new URL(
			'../../assets/sprites/reportCardUi/win_bg.png',
			import.meta.url,
		).href,
		preload: true,
	},
} as const;
