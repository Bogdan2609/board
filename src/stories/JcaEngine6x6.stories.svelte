<script lang="ts" module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    const { Story } = defineMeta({ title: 'JCA/6x6 Engine' });
</script>

<script lang="ts">
    import { StoryGameTemplate, StoryLocale, type TemplateArgs, templateArgs } from 'components-storybook';
    import Game from '../components/Game.svelte';
    import { setContext } from '../game/context';
    import { playBookEvents } from '../game/utils';
    import { jcaReveal, jcaTumble } from './data/jca6x6_events';
    setContext();
</script>

{#snippet template(args: TemplateArgs<any>)}
    <StoryGameTemplate skipLoadingScreen={true} action={async () => await args.action?.(args.data)}>
        <StoryLocale lang="en"><Game /></StoryLocale>
    </StoryGameTemplate>
{/snippet}

<Story
    name="reveal — 6 visible rows"
    args={templateArgs({
        skipLoadingScreen: true,
        data: {},
        action: async () => await playBookEvents([jcaReveal]),
    })}
    {template}
/>

<Story
    name="reveal and tumble — visual QA, zero payout"
    args={templateArgs({
        skipLoadingScreen: true,
        data: {},
        action: async () => await playBookEvents([jcaReveal, jcaTumble]),
    })}
    {template}
/>
