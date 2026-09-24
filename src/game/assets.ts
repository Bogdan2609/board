export default {
	// Board art: independent opaque stone texture and transparent wooden overlay.
	jcaReelBackground: {
		type: 'sprite',
		src: '/assets/jca/reels/reel_background_static_v1.png',
	},
	jcaReelFrame: {
		type: 'sprite',
		src: '/assets/jca/reels/reel_frame_static_v1_fitted.png',
	},
	// Approved static environment; served directly from SvelteKit's static/ directory.
	uncleShopBackground: {
		type: 'sprite',
		src: '/assets/backgrounds/uncle_shop_static_v1.png',
		preload: true,
	},
	jcaH1: {
		type: 'sprite',
		src: '/assets/jca/symbols/H1.webp',
	},
	jcaH2: {
		type: 'sprite',
		src: '/assets/jca/symbols/H2.webp',
	},
	jcaH3: {
		type: 'sprite',
		src: '/assets/jca/symbols/H3.webp',
	},
	jcaH4: {
		type: 'sprite',
		src: '/assets/jca/symbols/H4.webp',
	},
	jcaH5: {
		type: 'sprite',
		src: '/assets/jca/symbols/H5.webp',
	},
	jcaL1: {
		type: 'sprite',
		src: '/assets/jca/symbols/L1.webp',
	},
	jcaL2: {
		type: 'sprite',
		src: '/assets/jca/symbols/L2.webp',
	},
	jcaL3: {
		type: 'sprite',
		src: '/assets/jca/symbols/L3.webp',
	},
	jcaL4: {
		type: 'sprite',
		src: '/assets/jca/symbols/L4.webp',
	},
	jcaS: {
		type: 'sprite',
		src: '/assets/jca/symbols/S.webp',
	},
	jcaM5: {
		type: 'sprite',
		src: '/assets/jca/symbols/M5.webp',
	},
	loader: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/loader/loader.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/loader/loader.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	pressToContinueText: {
		type: 'sprites',
		src: new URL('../../assets/sprites/pressToContinueText/MM_pressanywhere.json', import.meta.url).href,
		preload: true,
	},
	H1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h1.json', import.meta.url).href,
			scale: 2,
		},
	},
	H2: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h2.json', import.meta.url).href,
			scale: 2,
		},
	},
	H3: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h3.json', import.meta.url).href,
			scale: 2,
		},
	},
	H4: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h4.json', import.meta.url).href,
			scale: 2,
		},
	},
	H5: {
  	type: 'spine',
  	src: {
  		atlas: '/assets/spines/symbols/h5.atlas',
  		skeleton: '/assets/spines/symbols/h5.json',
  		scale: 0.09,
	},
	},
	L1: {
		type: 'spine',
		src: {
			atlas: '/assets/spines/symbols/l1.atlas',
			skeleton: '/assets/spines/symbols/l1.json',
			scale: 0.09,
		},
	},
	L2: {
		type: 'spine',
		src: {
			atlas: '/assets/spines/symbols/l2.atlas',
			skeleton: '/assets/spines/symbols/l2.json',
			scale: 0.09,
		},
	},
	L3: {
		type: 'spine',
		src: {
			atlas: '/assets/spines/symbols/l3.atlas',
			skeleton: '/assets/spines/symbols/l3.json',
			scale: 0.09,
		},
	},
	L4: {
		type: 'spine',
		src: {
			atlas: '/assets/spines/symbols/l4.atlas',
			skeleton: '/assets/spines/symbols/l4.json',
			scale: 0.09,
		},
	},
	M: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols2/symbols2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/M.json', import.meta.url).href,
			scale: 2,
		},
	},
	S: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols2/symbols2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/S.json', import.meta.url).href,
			scale: 2,
		},
	},
	explosion: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols3/symbols3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols3/explosion.json', import.meta.url).href,
			scale: 2,
		},
	},
	W: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols3/symbols3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols3/W.json', import.meta.url).href,
			scale: 2,
		},
	},
	reelsFrame: {
		type: 'sprites',
		src: new URL('../../assets/sprites/reelsFrame/reels_frame.json', import.meta.url).href,
	},
	payFrame: {
		type: 'sprite',
		src: new URL('../../assets/sprites/payFrame/payFrame.png', import.meta.url).href,
	},
	anticipation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/anticipation/anticipation.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/anticipation/anticipation.json', import.meta.url).href,
			scale: 2,
		},
	},
	goldFont: {
		type: 'font',
		src: new URL('../../assets/fonts/goldFont/mm_gold.xml', import.meta.url).href,
	},
	goldBlur: {
		type: 'font',
		src: new URL('../../assets/fonts/goldBlur/miningfont_gold_blur.xml', import.meta.url).href,
	},
	silverFont: {
		type: 'font',
		src: new URL('../../assets/fonts/silverFont/mm_silver.xml', import.meta.url).href,
	},
	purpleFont: {
		type: 'font',
		src: new URL('../../assets/fonts/purpleFont/mm_purple.xml', import.meta.url).href,
	},
	bigwin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/bigwin/big_wins.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/bigwin/mm_bigwin.json', import.meta.url).href,
			scale: 2,
		},
	},
	globalMultiplier: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/globalMultiplier/multiframe.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/globalMultiplier/multiframe.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsIntro: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsIntroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen_number.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsOutroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_total_number.json', import.meta.url).href,
			scale: 2,
		},
	},
	foregroundAnimation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/foregroundAnimation/mm_bg.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/foregroundAnimation/mm_bg.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	foregroundFeatureAnimation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/foregroundFeatureAnimation/mm_bg_feature.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/foregroundFeatureAnimation/mm_bg_feature.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	tumble_multiplier: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/tumbleWin/tumble_win.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/tumbleWin/tumble_multiplier.json', import.meta.url).href,
			scale: 2,
		},
	},
	tumble_win: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/tumbleWin/tumble_win.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/tumbleWin/tumble_win.json', import.meta.url).href,
			scale: 2,
		},
	},
	reelhouse: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/reelhouse/reelhouse_glow.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/reelhouse/reelhouse_glow.json', import.meta.url).href,
			scale: 2,
		},
	},
	progressBar: {
		type: 'sprites',
		src: new URL('../../assets/sprites/progressBar/progressBar.json', import.meta.url).href,
		preload: true,
	},
	freeSpins: {
		type: 'sprites',
		src: new URL('../../assets/sprites/freeSpins/freeSpins.json', import.meta.url).href,
	},
	winSmall: {
		type: 'sprites',
		src: new URL('../../assets/sprites/winSmall/MM_Localisation_winsmall.json', import.meta.url).href,
	},
	clusterWin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/clusterWin/clusterpay.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/clusterWin/clusterpay.json', import.meta.url).href,
			scale: 2,
		},
	},
	transition: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/transition/transition.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/transition/transition.json', import.meta.url).href,
			scale: 2,
		},
	},
	symbolsStatic: {
		type: 'sprites',
		src: new URL('../../assets/sprites/symbolsStatic/symbolsStatic.json', import.meta.url).href,
	},
	coins: {
		type: 'spriteSheet',
		src: new URL('../../assets/sprites/coin/SD2_Coin.json', import.meta.url).href,
	},
	sound: {
		type: 'audio',
		src: new URL('../../assets/audio/sounds.json', import.meta.url).href,
		preload: true,
	},
} as const;
