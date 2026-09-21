import type { BookEvent } from '../../game/typesBookEvent';
import { jcaReveal, jcaTumble } from './jca6x6_events';

// Synthetic, deterministic VISUAL playback ONLY. Not sourced from Math SDK/RGS;
// no asserted paytable, probabilities, RTP or player wallet implications.
export type JcaQaScenario = 'loss' | 'win' | 'cascade';

export function getJcaQaBook(scenario: JcaQaScenario): BookEvent[] {
    const reveal = structuredClone(jcaReveal);
    if (scenario === 'loss') {
        return [reveal, { index: 1, type: 'setTotalWin', amount: 0 }, { index: 2, type: 'finalWin', amount: 0 }];
    }
    if (scenario === 'win') {
        return [reveal, { index: 1, type: 'setTotalWin', amount: 125 }, { index: 2, type: 'finalWin', amount: 125 }];
    }
    return [
        reveal,
        structuredClone(jcaTumble),
        { index: 2, type: 'setTotalWin', amount: 125 },
        { index: 3, type: 'setTotalWin', amount: 250 },
        { index: 4, type: 'finalWin', amount: 250 },
    ];
}
