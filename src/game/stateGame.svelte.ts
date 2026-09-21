import _ from 'lodash';
import type { Tween } from 'svelte/motion';

import { stateBet } from 'state-shared';
import { createEnhanceBoard, createReelForCascading } from 'utils-slots';
import { createGetWinLevelDataByWinLevelAlias } from 'utils-shared/winLevel';

import type { GameType, RawSymbol, SymbolState } from './types';
import { stateLayoutDerived } from './stateLayout';
import { winLevelMap } from './winLevelMap';
import { eventEmitter } from './eventEmitter';
import {
    SYMBOL_SIZE,
    BOARD_SIZES,
    INITIAL_BOARD,
    BOARD_DIMENSIONS,
    SPIN_OPTIONS_DEFAULT,
    SPIN_OPTIONS_FAST,
    INITIAL_SYMBOL_STATE,
    SCATTER_LAND_SOUND_MAP,
} from './constants';
import { assertJcaBoard } from './boardContract';

assertJcaBoard(INITIAL_BOARD);

const onSymbolLand = ({ rawSymbol }: { rawSymbol: RawSymbol }) => {
    if (rawSymbol.name === 'S') {
        eventEmitter.broadcast({ type: 'soundScatterCounterIncrease' });
        eventEmitter.broadcast({ type: 'soundOnce', name: SCATTER_LAND_SOUND_MAP[scatterLandIndex()] });
    }
    if (rawSymbol.name === 'M') {
        eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_multiplier_landing' });
    }
};

const board = _.range(BOARD_DIMENSIONS.x).map((reelIndex) => {
    const reel = createReelForCascading({
        reelIndex,
        symbolHeight: SYMBOL_SIZE,
        initialSymbols: INITIAL_BOARD[reelIndex],
        initialSymbolState: INITIAL_SYMBOL_STATE,
        onReelStopping: () => {
            eventEmitter.broadcast({
                type: 'soundOnce',
                name: 'sfx_reel_stop_1',
                forcePlay: !stateBet.isTurbo,
            });
        },
        onSymbolLand,
    });
    reel.reelState.spinOptions = () =>
        reel.reelState.spinType === 'fast' ? SPIN_OPTIONS_FAST : SPIN_OPTIONS_DEFAULT;
    return reel;
});

export type Reel = (typeof board)[number];
export type ReelSymbol = Reel['reelState']['symbols'][number];

export type TumbleSymbol = {
    symbolY: Tween<number>;
    rawSymbol: RawSymbol;
    symbolState: SymbolState;
    oncomplete: () => void;
};

export type MultiplierSymbol = {
    initX: number;
    initY: number;
    symbolX: Tween<number>;
    symbolY: Tween<number>;
    rawSymbol: RawSymbol;
    symbolState: SymbolState;
    oncomplete: () => void;
};

export const stateGame = $state({
    board,
    gameType: 'basegame' as GameType,
    tumbleBoardAdding: [] as TumbleSymbol[][],
    tumbleBoardBase: [] as TumbleSymbol[][],
    multiplierBoard: [] as (MultiplierSymbol | undefined)[][],
    scatterCounter: 0,
});

// Keep ONE uniform board transform: reels, symbols, masks, cascades, reel
// background and the frame must grow together.  The artwork is square (6x6),
// so never stretch width and height independently.
const boardLayout = () => {
    const main = stateLayoutDerived.mainLayout();
    const canvas = stateLayoutDerived.canvasSizes();
    const layoutType = stateLayoutDerived.layoutType();
    const portrait = layoutType === 'portrait';
    const desktop = layoutType === 'desktop';
    const landscape = layoutType === 'landscape';
    // Same breakpoint as Game.svelte: only the roomy art-HUD layout changes.
    // The compact/mobile board retains the previous coordinates and scale.
    const artHudFits = (desktop || landscape) && canvas.width >= 1150 && canvas.height >= 600;
    // On desktop, grow from ~66.5% to 82% of the main scene height.  Offset the
    // board's centre downward by the matching half-height difference: this
    // holds the top near its original position and brings the *bottom border*
    // down beside the MENU / SETTINGS / INFO row (above WIN/BALANCE/BET).
    // Landscape uses the same 82% target and a proportional centre offset.
    const scale = Math.min(
        artHudFits ? (desktop ? 1.12 : 1.25) : (desktop ? 0.86 : 1.05),
        (main.width * (portrait ? 0.91 : desktop ? (artHudFits ? 0.78 : 0.64) : (artHudFits ? 0.78 : 0.58))) / BOARD_SIZES.width,
        (main.height * (portrait ? 0.53 : desktop ? (artHudFits ? 0.82 : 0.645) : (artHudFits ? 0.82 : 0.60))) / BOARD_SIZES.height,
    );
    return {
        x: main.width * 0.5,
        y: main.height * (portrait ? 0.43 : desktop ? (artHudFits ? 0.464 : 0.385) : (artHudFits ? 0.484 : 0.405)),
        anchor: { x: 0.5, y: 0.5 },
        pivot: { x: BOARD_SIZES.width / 2, y: BOARD_SIZES.height / 2 },
        scale,
        ...BOARD_SIZES,
    };
};

const boardRaw = () =>
    board.map((reel) => reel.reelState.symbols.map((reelSymbol) => reelSymbol.rawSymbol));

const tumbleBoardCombined = () =>
    stateGame.tumbleBoardBase.map((tumbleReelBase, reelIndex) => {
        const tumbleReelAdding = stateGame.tumbleBoardAdding[reelIndex] ?? [];
        return [...tumbleReelAdding, ...tumbleReelBase];
    });

const scatterLandIndex = () => {
    if (stateGame.scatterCounter > 5) return 5;
    if (stateGame.scatterCounter < 1) return 1;
    return stateGame.scatterCounter as 1 | 2 | 3 | 4 | 5;
};

const { enhanceBoard } = createEnhanceBoard();
const enhancedBoard = enhanceBoard({ board: stateGame.board });

export const { getWinLevelDataByWinLevelAlias } = createGetWinLevelDataByWinLevelAlias({
    winLevelMap,
});

export const stateGameDerived = {
    onSymbolLand,
    boardLayout,
    boardRaw,
    tumbleBoardCombined,
    scatterLandIndex,
    enhancedBoard,
    getWinLevelDataByWinLevelAlias,
};
