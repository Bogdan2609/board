import type { BookEvent } from '../../game/typesBookEvent';

// Storybook-only deterministic VISUAL TEST. These are NOT real rounds, bets, payouts or RGS math.
// Reels are column-major. Each has a hidden symbol above and below 6 visible rows.
const initialNames = [
    ['L1', 'H1', 'L2', 'H2', 'L3', 'S',  'L4', 'H5'],
    ['H4', 'L3', 'H3', 'L4', 'L1', 'H5', 'H2', 'L2'],
    ['H3', 'H2', 'L1', 'H1', 'M', 'L2', 'H5', 'L3'],
    ['L2', 'H5', 'H4', 'L3', 'H3', 'L1', 'L4', 'H1'],
    ['L1', 'L2', 'L4', 'H5', 'H2', 'H4', 'L3', 'H3'],
    ['H4', 'S',  'H2', 'L4', 'L1', 'H3', 'H5', 'L2'],
] as const;

const toSymbol = (name: string) => ({
    name,
    ...(name === 'S' ? { scatter: true } : {}),
    ...(name === 'M' ? { multiplier: 5 } : {}),
});
const board = initialNames.map((column) => column.map(toSymbol));

export const jcaReveal = {
    index: 0,
    type: 'reveal',
    board,
    paddingPositions: [0, 0, 0, 0, 0, 0],
    anticipation: [0, 0, 0, 0, 0, 0],
    gameType: 'basegame',
} as BookEvent;

export const jcaTumble = {
    index: 1,
    type: 'tumbleBoard',
    explodingSymbols: [
        { reel: 0, row: 3 },
        { reel: 1, row: 2 },
        { reel: 2, row: 5 },
        { reel: 3, row: 4 },
        { reel: 4, row: 1 },
        { reel: 5, row: 6 },
    ],
    newSymbols: [
        [{ name: 'L4' }],
        [{ name: 'H2' }],
        [{ name: 'H5' }],
        [{ name: 'L2' }],
        [{ name: 'H4' }],
        [{ name: 'L1' }],
    ],
} as BookEvent;
