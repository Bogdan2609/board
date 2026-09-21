<script lang="ts">
    import type { Snippet } from 'svelte';
    import { Container } from 'pixi-svelte';
    import { getContext } from '../game/context';

    type Props = { children: Snippet };
    const props: Props = $props();
    const context = getContext();
    const layout = $derived(context.stateGameDerived.boardLayout());
</script>

<Container x={layout.x} y={layout.y} pivot={layout.pivot} scale={layout.scale}>
    {@render props.children()}
</Container>
