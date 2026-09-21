<script lang="ts">
    import { onMount } from 'svelte';
    import { Text } from 'pixi-svelte';
    import { gameActor } from '../game/actor';
    import { getContext } from '../game/context';

    type Props = { debug?: boolean; storybookQa?: boolean };
    let { debug = false, storybookQa = false }: Props = $props();
    const context = getContext();

    // Storybook explicitly prevents real play, even with a locally misconfigured env.
    // Real rounds require both a verified 6x6 math build AND an explicit RGS flag.
    const allowRgs = !storybookQa &&
        import.meta.env.VITE_JCA_ENABLE_RGS === 'true' &&
        import.meta.env.VITE_JCA_6X6_MATH_VERIFIED === 'true';
    const blocked = () => console.warn('[JCA] RGS action blocked: 6x6 math/RGS not verified or Storybook QA is active.');

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

{#if debug}
    <Text
        x={context.stateLayoutDerived.canvasSizes().width}
        anchor={{ x: 1, y: 0 }}
        style={{ fill: 0xffffff }}
        text={JSON.stringify(context.stateXstate.value, undefined, 2)}
    />
{/if}
