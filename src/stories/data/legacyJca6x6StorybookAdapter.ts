import type { BookEvent } from '../../game/typesBookEvent';
import type { RawSymbol } from '../../game/types';
import { assertJcaBookEvents } from '../../game/boardContract';

/**
 * Visual compatibility adapter for ORIGINAL Storybook 6x5 book fixtures.
 * Never use it for RGS/wagers: adding a row changes the mathematical game.
 * Original event ordering, winnings, cluster positions and cascades are preserved;
 * the sixth visible row is decorative and has no win positions from the old book.
 * The only approved multiplier image is M x5, so old x2/x4/x7/x10 symbols and
 * multiplier-board animation positions use x5 ART while source win amounts stay
 * unchanged. This is intentionally not a calculation of a new 6x6 outcome.
 */
const LEGACY_PADDED_ROWS = 7;
const JCA_PADDED_ROWS = 8;

const symbolForArtwork = (symbol: RawSymbol): RawSymbol =>
    symbol.name === 'M' ? { ...symbol, multiplier: 5 } : { ...symbol };

function expandRevealBoard(board: RawSymbol[][], revealIndex: number): RawSymbol[][] {
    if (board.length !== 6 || board.some((reel) => reel.length !== LEGACY_PADDED_ROWS)) {
        throw new Error('Legacy Storybook book must contain six reels of seven padded symbols.');
    }
    return board.map((reel, reelIndex) => {
        // Legacy rows: 0 hidden, 1..5 visible, 6 hidden.
        // JCA rows:    0 hidden, 1..6 visible, 7 hidden.
        // Inserting at 6 keeps EVERY legacy win/tumble/scatter coordinate intact.
        const decorative: RawSymbol = {
            name: (reelIndex + revealIndex) % 2 === 0 ? 'H5' : 'L4',
        };
        const expanded = [
            ...reel.slice(0, 6).map(symbolForArtwork),
            decorative,
            symbolForArtwork(reel[6]),
        ];
        if (expanded.length !== JCA_PADDED_ROWS) throw new Error('Bad 6x6 reveal conversion.');
        return expanded;
    });
}

export function adaptLegacyBookForJcaStorybook(events: unknown): BookEvent[] {
    if (!Array.isArray(events) || events.length === 0) throw new Error('Empty legacy Storybook book.');
    // Legacy exports are untyped JavaScript fixtures: validate after conversion.
    const legacyEvents = events as BookEvent[];
    let reveals = 0;
    const adapted: BookEvent[] = legacyEvents.map((event) => {
        switch (event.type) {
            case 'reveal': {
                const board = expandRevealBoard(event.board, reveals++);
                const gameType = String(event.gameType) === 'freegame' ? 'freeSpins' : event.gameType;
                return { ...event, board, gameType };
            }
            case 'tumbleBoard':
                return { ...event, newSymbols: event.newSymbols.map((reel) => reel.map(symbolForArtwork)) };
            case 'boardMultiplierInfo':
                return {
                    ...event,
                    multInfo: {
                        ...event.multInfo,
                        positions: event.multInfo.positions.map((position) => ({ ...position, multiplier: 5 })),
                    },
                };
            default:
                return { ...event };
        }
    });
    assertJcaBookEvents(adapted);
    return adapted;
}
