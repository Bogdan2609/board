<script lang="ts">
    import { onMount } from 'svelte';
    import { Text } from 'pixi-svelte';
    import { gameActor } from '../game/actor';
    import { getContext } from '../game/context';

    type Props = { debug?: boolean };
    const props: Props = $props();
    const context = getContext();

    // SAFE BY DEFAULT: old 6x5 RGS sessions do not match the new 6x6 visual board.
    // Re-enable only AFTER a matching server-side 6x6 math and RGS session are deployed.
    const allowRgs = import.meta.env.VITE_JCA_ENABLE_RGS === 'true';
    const blocked = () => console.warn(
        '[JCA] Paid spin/resume disabled in 6x6 visual integration. ' +
        'Use JCA/6x6 Engine in Storybook until the 6x6 RGS math is ready.',
    );

    onMount(() => {
        const { unsubscribe } = gameActor.subscribe((snapshot) => {
            context.stateXstate.value = snapshot.value;
        });
        gameActor.start();
        gameActor.send({ type: 'RENDERED' });
        return () => {
            unsubscribe();
            gameActor.stop();
        };
    });

    context.eventEmitter.subscribeOnMount({
        bet: () => allowRgs ? gameActor.send({ type: 'BET' }) : blocked(),
        autoBet: () => allowRgs ? gameActor.send({ type: 'AUTO_BET' }) : blocked(),
        resumeBet: () => allowRgs ? gameActor.send({ type: 'RESUME_BET' }) : blocked(),
    });
</script>

{#if props.debug}
    <Text
        x={context.stateLayoutDerived.canvasSizes().width}
        anchor={{ x: 1, y: 0 }}
        style={{ fill: 0xffffff }}
        text={JSON.stringify(context.stateXstate.value, undefined, 2)}
    />
{/if}
