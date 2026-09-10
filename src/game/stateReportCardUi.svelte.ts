// App-specific modal state.
//
// The StakeEngine shared modal state already owns BUY FREE SPINS (`buyBonus`).
// MODE is a game-specific modal, so it is intentionally kept separate instead
// of overloading an unrelated shared modal such as `betAmountMenu`.
export const stateReportCardUi = $state({
	modeModalOpen: false,
});
