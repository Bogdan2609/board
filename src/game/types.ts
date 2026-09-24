import { type CascadingReelSymbolState } from 'utils-slots';
import type config from './config';

// H5 has approved JCA visual art but no verified paytable entry in legacy config.
// Type it for visual 6x6 playback; do not silently add payout values to config.
export type SymbolName = keyof typeof config.symbols | 'H5';
export type RawSymbol = { name: SymbolName; multiplier?: number; scatter?: boolean };
export type BetMode = keyof typeof config.betModes;
export type GameType = keyof typeof config.paddingReels;

export const SYMBOL_STATES = [
	'static',
	'spin',
	'land',
	'win',
	'postWinStatic',
	'explosion',
] as const;

export type SymbolState = CascadingReelSymbolState | (typeof SYMBOL_STATES)[number];

export type Position = {
	reel: number;
	row: number;
};
