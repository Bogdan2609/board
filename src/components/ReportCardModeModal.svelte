<script lang="ts">
	import { Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateBet } from 'state-shared';

	import { stateReportCardUi } from '../game/stateReportCardUi.svelte';

	const activeMode = $derived(stateBet.activeBetModeKey.toUpperCase());

	const close = () => {
		stateReportCardUi.modeModalOpen = false;
	};

	const selectMode = (mode: 'BASE' | 'ANTE') => {
		stateBet.activeBetModeKey = mode;
		close();
	};
</script>

{#if stateReportCardUi.modeModalOpen}
	<Popup zIndex={zIndex.modal} onclose={close}>
		<div class="mode-modal" role="dialog" aria-modal="true" aria-label="Game mode">
			<div class="mode-modal__eyebrow">SELECT MODE</div>
			<h2>MODE</h2>

			<div class="mode-modal__options">
				<button
					type="button"
					class:active={activeMode === 'BASE'}
					onclick={() => selectMode('BASE')}
				>
					<span class="mode-modal__check">
						{activeMode === 'BASE' ? '✓' : ''}
					</span>
					<span>
						<strong>BASE</strong>
						<small>Standard game</small>
					</span>
				</button>

				<button
					type="button"
					class:active={activeMode === 'ANTE'}
					onclick={() => selectMode('ANTE')}
				>
					<span class="mode-modal__check">
						{activeMode === 'ANTE' ? '✓' : ''}
					</span>
					<span>
						<strong>ANTE 1.2×</strong>
						<small>Enhanced mode</small>
					</span>
				</button>
			</div>

			<button
				type="button"
				class="mode-modal__close"
				onclick={close}
			>
				CLOSE
			</button>
		</div>
	</Popup>
{/if}

<style>
	.mode-modal {
		box-sizing: border-box;
		width: min(30rem, calc(100vw - 2rem));
		padding: 1.5rem;
		border: 0.2rem solid #173a63;
		border-radius: 1rem;
		background:
			repeating-linear-gradient(
				to bottom,
				rgba(92, 166, 210, 0.14) 0,
				rgba(92, 166, 210, 0.14) 1px,
				transparent 1px,
				transparent 2rem
			),
			#f3e6bf;
		box-shadow: 0 1rem 3rem rgba(8, 24, 42, 0.34);
		color: #102f55;
		font-family: "Comic Sans MS", "Trebuchet MS", sans-serif;
	}

	.mode-modal__eyebrow {
		margin-bottom: 0.25rem;
		color: #4779a7;
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-align: center;
	}

	h2 {
		margin: 0 0 1.25rem;
		font-size: 2rem;
		line-height: 1;
		text-align: center;
	}

	.mode-modal__options {
		display: grid;
		gap: 0.75rem;
	}

	.mode-modal__options button {
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.9rem 1rem;
		border: 0.15rem solid #26699d;
		border-radius: 0.75rem;
		background: rgba(255, 250, 230, 0.82);
		color: #102f55;
		cursor: pointer;
		text-align: left;
	}

	.mode-modal__options button:hover {
		transform: translateY(-1px);
		background: #fff7d9;
	}

	.mode-modal__options button.active {
		border-color: #d3a22d;
		box-shadow: inset 0 0 0 0.12rem rgba(245, 203, 71, 0.45);
		background: #fff3bd;
	}

	.mode-modal__check {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border: 0.12rem solid #173a63;
		border-radius: 0.25rem;
		background: #fffaf0;
		color: #2f8f57;
		font-size: 1.35rem;
		font-weight: 900;
	}

	.mode-modal strong,
	.mode-modal small {
		display: block;
	}

	.mode-modal strong {
		font-size: 1.15rem;
	}

	.mode-modal small {
		margin-top: 0.15rem;
		color: #5b6c7d;
		font-size: 0.75rem;
		font-weight: 700;
	}

	.mode-modal__close {
		display: block;
		margin: 1rem auto 0;
		padding: 0.55rem 1.25rem;
		border: 0;
		border-radius: 999px;
		background: #173a63;
		color: #fff6dd;
		cursor: pointer;
		font: inherit;
		font-size: 0.8rem;
		font-weight: 900;
		letter-spacing: 0.08em;
	}
</style>
