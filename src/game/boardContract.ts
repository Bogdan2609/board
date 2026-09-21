import type { RawSymbol, Position } from './types';

// Server-facing board contract: six REELS, eight symbols/reel (hidden top + 6 visible + hidden bottom).
// No silent conversion of old 6x5 RGS events into a different paid outcome.
export const JCA_REELS = 6;
export const JCA_VISIBLE_ROWS = 6;
export const JCA_PADDED_ROWS = JCA_VISIBLE_ROWS + 2;

const SYMBOL_NAMES = new Set(['H1', 'H2', 'H3', 'H4', 'H5', 'L1', 'L2', 'L3', 'L4', 'S', 'M']);

export function assertJcaSymbol(symbol: RawSymbol, label: string): void {
    if (!symbol || !SYMBOL_NAMES.has(symbol.name)) {
        throw new Error(`${label}: unsupported symbol ${symbol?.name ?? '(missing)'}. Legacy W not enabled in JCA.`);
    }
    if (symbol.name === 'M' && symbol.multiplier !== 5) {
        throw new Error(`${label}: multiplier x${symbol.multiplier} has no approved art yet; only x5 is enabled.`);
    }
}

export function assertJcaBoard(board: RawSymbol[][]): void {
    if (!Array.isArray(board) || board.length !== JCA_REELS) {
        throw new Error(`JCA 6x6 requires 6 reels; received ${board?.length ?? 'none'}.`);
    }
    board.forEach((reel, index) => {
        if (!Array.isArray(reel) || reel.length !== JCA_PADDED_ROWS) {
            throw new Error(`JCA reel ${index}: expected ${JCA_PADDED_ROWS} padded rows (6 visible + 2 hidden); received ${reel?.length ?? 'none'}. Old 6x5 events are incompatible.`);
        }
        reel.forEach((symbol, row) => assertJcaSymbol(symbol, `reel ${index} row ${row}`));
    });
}

export function assertJcaVisiblePosition(position: Position): void {
    if (!Number.isInteger(position?.reel) || position.reel < 0 || position.reel >= JCA_REELS ||
        !Number.isInteger(position?.row) || position.row < 1 || position.row > JCA_VISIBLE_ROWS) {
        throw new Error(`JCA event position must use reels 0..5 and VISIBLE rows 1..6; got ${JSON.stringify(position)}.`);
    }
}

export function assertJcaTumble(
    newSymbols: RawSymbol[][],
    explodingSymbols: Position[],
): void {
    if (!Array.isArray(newSymbols) || newSymbols.length !== JCA_REELS) {
        throw new Error('JCA tumble must contain six newSymbols reels.');
    }
    const perReel = new Array<number>(JCA_REELS).fill(0);
    const seen = new Set<string>();
    explodingSymbols.forEach((position) => {
        assertJcaVisiblePosition(position);
        const id = `${position.reel}/${position.row}`;
        if (seen.has(id)) throw new Error(`JCA tumble repeats exploding position ${id}.`);
        seen.add(id);
        perReel[position.reel]++;
    });
    newSymbols.forEach((reel, index) => {
        if (!Array.isArray(reel) || reel.length !== perReel[index]) {
            throw new Error(`JCA tumble reel ${index}: expected ${perReel[index]} replacements, got ${reel?.length ?? 'none'}.`);
        }
        reel.forEach((symbol, row) => assertJcaSymbol(symbol, `tumble reel ${index} row ${row}`));
    });
}

// Check the complete event stream before any visual playback. This does not authorize
// real-money bets; RGS is separately disabled by default in EnableGameActor.
import type { BookEvent } from './typesBookEvent';

export function assertJcaBookEvents(events: BookEvent[]): void {
    if (!Array.isArray(events)) throw new Error('JCA round must contain bookEvents.');
    let hasReveal = false;
    events.forEach((event) => {
        switch (event.type) {
            case 'reveal':
                assertJcaBoard(event.board);
                hasReveal = true;
                break;
            case 'winInfo':
                event.wins.forEach((win) => {
                    win.positions.forEach(assertJcaVisiblePosition);
                    assertJcaVisiblePosition(win.meta.overlay);
                });
                break;
            case 'freeSpinTrigger':
                event.positions.forEach(assertJcaVisiblePosition);
                break;
            case 'boardMultiplierInfo':
                event.multInfo.positions.forEach(({ multiplier, ...position }) => {
                    assertJcaVisiblePosition(position);
                    if (multiplier !== 5) {
                        throw new Error(`JCA multiplier x${multiplier} art has not been approved.`);
                    }
                });
                break;
            case 'tumbleBoard':
                assertJcaTumble(event.newSymbols, event.explodingSymbols);
                break;
            default:
                break;
        }
    });
    if (!hasReveal) throw new Error('JCA round is missing a 6x6 reveal event.');
}
