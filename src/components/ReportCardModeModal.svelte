<script lang="ts">
	import { Popup } from 'components-shared';
	import { zIndex } from 'constants-shared/zIndex';
	import { stateBet } from 'state-shared';
	import config from '../game/config';
	import { stateReportCardUi } from '../game/stateReportCardUi.svelte';
	type ModeEntry = [string,{cost:number;feature:boolean;buyBonus:boolean;rtp:number;max_win:number;description:string;}];
	const modeOptions = (Object.entries(config.betModes) as ModeEntry[]).filter(([,mode]) => !mode.buyBonus);
	const activeMode = $derived(stateBet.activeBetModeKey.toLowerCase());
	const fmt = (v:number) => Number.isInteger(v) ? String(v) : v.toFixed(2).replace(/0+$/,'').replace(/\.$/,'');
	const titleFor = (key:string,cost:number) => { const n=key.toLowerCase(); if(n==='base') return 'BASE'; if(n.startsWith('ante')) { const suffix=n.slice(4).replace(/^[_-]+/,'').replace(/[_-]+/g,' ').trim().toUpperCase(); return `${suffix?`ANTE ${suffix}`:'ANTE'} · ${fmt(cost)}×`; } return key.replace(/[_-]+/g,' ').toUpperCase(); };
	const close = () => { stateReportCardUi.modeModalOpen = false; };
	const selectMode = (modeKey:string) => { stateBet.activeBetModeKey = modeKey.toUpperCase() as typeof stateBet.activeBetModeKey; close(); };
</script>
{#if stateReportCardUi.modeModalOpen}
	<Popup zIndex={zIndex.modal} onclose={close}>
		<div class="mode-modal" role="dialog" aria-modal="true" aria-label="Bet mode">
			<div class="eyebrow">BET MODE</div><h2>SELECT OPTION</h2>
			<div class="options">
				{#each modeOptions as [key, mode]}
					<button type="button" class:active={activeMode===key.toLowerCase()} onclick={() => selectMode(key)}>
						<span class="check">{activeMode===key.toLowerCase()?'✓':''}</span>
						<span class="copy"><strong>{titleFor(key,mode.cost)}</strong><small>{mode.description || 'Game mode'}</small></span>
						<span class="cost">{fmt(mode.cost)}×</span>
					</button>
				{/each}
			</div>
			<button type="button" class="close" onclick={close}>CLOSE</button>
		</div>
	</Popup>
{/if}
<style>
.mode-modal{box-sizing:border-box;width:min(32rem,calc(100vw - 2rem));max-height:min(42rem,calc(100vh - 2rem));overflow:auto;padding:1.5rem;border:.2rem solid #173a63;border-radius:1rem;background:repeating-linear-gradient(to bottom,rgba(92,166,210,.14) 0,rgba(92,166,210,.14) 1px,transparent 1px,transparent 2rem),#f3e6bf;box-shadow:0 1rem 3rem rgba(8,24,42,.34);color:#102f55;font-family:"Comic Sans MS","Trebuchet MS",sans-serif}.eyebrow{margin-bottom:.25rem;color:#4779a7;font-size:.75rem;font-weight:800;letter-spacing:.14em;text-align:center}h2{margin:0 0 1.25rem;font-size:1.8rem;line-height:1;text-align:center}.options{display:grid;gap:.65rem}.options button{display:grid;grid-template-columns:2.5rem minmax(0,1fr) auto;align-items:center;gap:.75rem;width:100%;padding:.85rem .9rem;border:.15rem solid #26699d;border-radius:.75rem;background:rgba(255,250,230,.82);color:#102f55;cursor:pointer;text-align:left}.options button:hover{transform:translateY(-1px);background:#fff7d9}.options button.active{border-color:#d3a22d;box-shadow:inset 0 0 0 .12rem rgba(245,203,71,.45);background:#fff3bd}.check{display:grid;place-items:center;width:2rem;height:2rem;border:.12rem solid #173a63;border-radius:.25rem;background:#fffaf0;color:#2f8f57;font-size:1.35rem;font-weight:900}.copy{min-width:0}.copy strong,.copy small{display:block}.copy strong{font-size:1.05rem}.copy small{margin-top:.15rem;color:#5b6c7d;font-size:.72rem;font-weight:700}.cost{color:#4779a7;font-size:.85rem;font-weight:900;white-space:nowrap}.close{display:block;margin:1rem auto 0;padding:.55rem 1.25rem;border:0;border-radius:999px;background:#173a63;color:#fff6dd;cursor:pointer;font:inherit;font-size:.8rem;font-weight:900;letter-spacing:.08em}
</style>
