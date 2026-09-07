<script lang="ts">
	import type { Snippet } from 'svelte';

	import { Container } from 'pixi-svelte';
	import { getContextBoard } from 'components-shared';

	type Props = {
		x: number;
		y: number;
		animating: boolean;
		children: Snippet;
	};

	const props: Props = $props();
	const boardContext = getContextBoard();

	const show = $derived(
		(boardContext.animate && props.animating) ||
		(!boardContext.animate && !props.animating),
	);
</script>

{#if show}
	<Container
		x={props.x}
		y={props.y}
	>
		{@render props.children()}
	</Container>
{/if}
