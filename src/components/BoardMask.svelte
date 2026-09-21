<script lang="ts">
    import { Rectangle } from 'pixi-svelte';
    import { getContext } from '../game/context';

    type Props = { debug?: boolean };
    const props: Props = $props();
    const context = getContext();
    const layout = $derived(context.stateGameDerived.boardLayout());
</script>

{#if props.debug}
    <Rectangle alpha={0.5} backgroundColor={0xffffff} width={layout.width} height={layout.height} />
{/if}
<Rectangle isMask x={0} y={0} width={layout.width} height={layout.height} />
