import config from '../game/config';
import { INITIAL_BOARD } from '../game/constants';
import { stateGame, stateGameDerived } from '../game/stateGame.svelte';
import type { RawSymbol } from '../game/types';
import type { BookEventOfType } from '../game/typesBookEvent';

const TEST_SYMBOL_POOL: RawSymbol[] = [
	{ name: 'H1' },
	{ name: 'H2' },
	{ name: 'H3' },
	{ name: 'H4' },
	{ name: 'H5' },
	{ name: 'L1' },
	{ name: 'L2' },
	{ name: 'L3' },
	{ name: 'L4' },
];

let testSpinIndex = 0;

const cloneSymbol = (symbol: RawSymbol): RawSymbol => ({ ...symbol });

const getPaddingBoard = () => config.paddingReels[stateGame.gameType];

const getPaddingPositions = () =>
	getPaddingBoard().map((reel, reelIndex) => (testSpinIndex * 17 + reelIndex * 31) % reel.length);

/**
 * Creates a deterministic 6x6 test result while preserving one hidden
 * padding symbol above and below each reel (8 symbols per reel total).
 */
export const createTestRevealEvent = ({
	anticipation = [0, 0, 0, 0, 0, 0],
}: {
	anticipation?: number[];
} = {}): BookEventOfType<'reveal'> => {
	testSpinIndex += 1;

	const board = INITIAL_BOARD.map((initialReel, reelIndex) => {
		const topPadding = cloneSymbol(initialReel[0]);
		const bottomPadding = cloneSymbol(initialReel[initialReel.length - 1]);

		const visibleSymbols = Array.from({ length: 6 }, (_, rowIndex) => {
			const poolIndex = (testSpinIndex + reelIndex * 2 + rowIndex) % TEST_SYMBOL_POOL.length;
			return cloneSymbol(TEST_SYMBOL_POOL[poolIndex]);
		});

		return [topPadding, ...visibleSymbols, bottomPadding];
	});

	return {
		index: 0,
		type: 'reveal',
		board,
		paddingPositions: getPaddingPositions(),
		anticipation,
		gameType: stateGame.gameType,
	};
};

/** Full Storybook spin: fall current symbols out, then land a valid 6x6 result. */
export const runTestSpin = async ({
	anticipation = [0, 0, 0, 0, 0, 0],
}: {
	anticipation?: number[];
} = {}) => {
	const paddingBoard = getPaddingBoard();
	const revealEvent = createTestRevealEvent({ anticipation });

	await stateGameDerived.enhancedBoard.preSpin({ paddingBoard });
	await stateGameDerived.enhancedBoard.spin({
		revealEvent,
		paddingBoard,
	});
};

/**
 * Old Scatter story fixtures are 5 visible rows + top/bottom padding (7 symbols).
 * Our board is 6 visible rows + top/bottom padding (8 symbols).
 * Insert the extra visible row immediately before the bottom padding so all
 * existing row indices remain valid.
 */
type StoryFixtureSymbol = { name: string; multiplier?: number; scatter?: boolean };
type StoryFixtureEvent = { type: string; board?: StoryFixtureSymbol[][]; [key: string]: unknown };

export const normalizeRevealEventForSixRows = <T extends StoryFixtureEvent>(event: T): T => {
	if (event.type !== 'reveal' || !event.board) return event;

	const board = event.board.map((reel, reelIndex) => {
		if (reel.length === 8) return reel.map((symbol) => ({ ...symbol }));
		if (reel.length !== 7) {
			throw new Error(
				`Story reveal reel ${reelIndex} has ${reel.length} symbols; expected 7 (legacy) or 8 (6x6).`,
			);
		}

		const bottomPadding = reel[reel.length - 1];
		const extraVisibleSymbol = TEST_SYMBOL_POOL[(reelIndex + testSpinIndex) % TEST_SYMBOL_POOL.length];

		return [
			...reel.slice(0, -1).map((symbol) => ({ ...symbol })),
			{ ...extraVisibleSymbol },
			{ ...bottomPadding },
		];
	});

	return { ...event, board };
};

export const normalizeBookForSixRows = <T extends { events: StoryFixtureEvent[] }>(book: T): T =>
	({
		...book,
		events: book.events.map((event) => normalizeRevealEventForSixRows(event)),
	}) as T;
