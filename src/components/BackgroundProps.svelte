<script lang="ts">
	import { onMount } from 'svelte';
	import { Container, Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import {
		FREE_SPIN_REACTIVE_PROPS,
		IDLE_DOODLES,
		IDLE_PAPER_PROPS,
		IDLE_PHYSICAL_PROPS,
		IDLE_SUPPORT_PROPS,
		REACTIVE_DURATION_SECONDS,
		WIN_REACTIVE_PROPS,
		type BackgroundProp,
	} from '../game/backgroundPropsLayout';

	type Reaction = 'win' | 'freeSpins' | null;

	const context = getContext();

	let time = $state(0);
	let reaction = $state<Reaction>(null);
	let reactionStartedAt = $state(-100);

	const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

	const phaseFor = (prop: BackgroundProp) =>
		(time * Math.PI * 2) / prop.motion.period + prop.motion.phase;

	const xFor = (prop: BackgroundProp) =>
		prop.x + Math.sin(phaseFor(prop)) * prop.motion.x;

	const yFor = (prop: BackgroundProp) =>
		prop.y + Math.cos(phaseFor(prop) * 0.87) * prop.motion.y;

	const rotationFor = (prop: BackgroundProp) =>
		toRadians(
			prop.rotationDeg +
				Math.sin(phaseFor(prop) * 0.72) * prop.motion.rotationDeg,
		);

	const pulseFor = (prop: BackgroundProp) =>
		1 + Math.sin(phaseFor(prop) * 0.63) * prop.motion.scale;

	const smoothstep = (value: number) => {
		const t = Math.max(0, Math.min(1, value));
		return t * t * (3 - 2 * t);
	};

	const reactionProgress = $derived(
		Math.max(
			0,
			Math.min(
				1,
				(time - reactionStartedAt) / REACTIVE_DURATION_SECONDS,
			),
		),
	);

	const reactionAlpha = $derived.by(() => {
		if (!reaction) return 0;

		const p = reactionProgress;

		if (p < 0.14) return smoothstep(p / 0.14);
		if (p > 0.72) return smoothstep((1 - p) / 0.28);
		return 1;
	});

	const reactiveProps = $derived(
		reaction === 'freeSpins'
			? FREE_SPIN_REACTIVE_PROPS
			: reaction === 'win'
				? WIN_REACTIVE_PROPS
				: [],
	);

	const triggerReaction = (kind: Exclude<Reaction, null>) => {
		reaction = kind;
		reactionStartedAt = performance.now() / 1000;
	};

	context.eventEmitter.subscribeOnMount({
		winShow: () => triggerReaction('win'),
		winHide: () => {
			if (reaction === 'win') reaction = null;
		},
		freeSpinIntroShow: () => triggerReaction('freeSpins'),
	});

	onMount(() => {
		let raf = 0;
		let lastPaint = 0;

		const tick = (timestamp: number) => {
			if (timestamp - lastPaint >= 33) {
				time = timestamp / 1000;
				lastPaint = timestamp;

				if (
					reaction &&
					time - reactionStartedAt >= REACTIVE_DURATION_SECONDS
				) {
					reaction = null;
				}
			}

			raf = requestAnimationFrame(tick);
		};

		raf = requestAnimationFrame(tick);

		return () => cancelAnimationFrame(raf);
	});
</script>

<Container zIndex={-80}>
	<!-- Backings first: they tuck under HUD/notebook. -->
	{#each IDLE_SUPPORT_PROPS as prop (prop.id)}
		{@const pulse = pulseFor(prop)}
		<Sprite
			key={prop.key}
			x={xFor(prop)}
			y={yFor(prop)}
			anchor={0.5}
			width={prop.width * pulse}
			height={prop.height * pulse}
			rotation={rotationFor(prop)}
			alpha={prop.alpha}
		/>
	{/each}

	<!-- Outer physical frame props. -->
	{#each IDLE_PHYSICAL_PROPS as prop (prop.id)}
		{@const pulse = pulseFor(prop)}
		<Sprite
			key={prop.key}
			x={xFor(prop)}
			y={yFor(prop)}
			anchor={0.5}
			width={prop.width * pulse}
			height={prop.height * pulse}
			rotation={rotationFor(prop)}
			alpha={prop.alpha}
		/>
	{/each}

	<!-- Large paper anchors. -->
	{#each IDLE_PAPER_PROPS as prop (prop.id)}
		{@const pulse = pulseFor(prop)}
		<Sprite
			key={prop.key}
			x={xFor(prop)}
			y={yFor(prop)}
			anchor={0.5}
			width={prop.width * pulse}
			height={prop.height * pulse}
			rotation={rotationFor(prop)}
			alpha={prop.alpha}
		/>
	{/each}

	<!-- Small grouped doodles. Repeated asset keys are allowed via unique ids. -->
	{#each IDLE_DOODLES as prop (prop.id)}
		{@const pulse = pulseFor(prop)}
		<Sprite
			key={prop.key}
			x={xFor(prop)}
			y={yFor(prop)}
			anchor={0.5}
			width={prop.width * pulse}
			height={prop.height * pulse}
			rotation={rotationFor(prop)}
			alpha={prop.alpha}
		/>
	{/each}

	{#if reaction && reactionAlpha > 0}
		<Container alpha={reactionAlpha}>
			{#each reactiveProps as prop (prop.id)}
				{@const pulse = pulseFor(prop)}
				<Sprite
					key={prop.key}
					x={xFor(prop)}
					y={yFor(prop)}
					anchor={0.5}
					width={prop.width * pulse}
					height={prop.height * pulse}
					rotation={rotationFor(prop)}
					alpha={prop.alpha}
				/>
			{/each}
		</Container>
	{/if}
</Container>
