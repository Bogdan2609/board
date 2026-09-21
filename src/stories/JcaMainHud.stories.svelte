<script lang="ts" module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    const { Story } = defineMeta({ title: 'JCA/Main HUD', parameters: { layout: 'fullscreen' } });
</script>

<script lang="ts">
    import { StoryGameTemplate, StoryLocale, type TemplateArgs, templateArgs } from 'components-storybook';
    import Game from '../components/Game.svelte';
    import { setContext } from '../game/context';
    setContext();
</script>

{#snippet template(args: TemplateArgs<any>)}
    <StoryGameTemplate skipLoadingScreen={true} action={async () => await args.action?.(args.data)}>
        <StoryLocale lang="en"><Game storybookQa={true} qaScenario={args.data?.qaScenario ?? 'loss'} /></StoryLocale>
    </StoryGameTemplate>
{/snippet}

<Story
    name="QA — SPIN / loss (no RGS)"
    args={templateArgs({ skipLoadingScreen: true, data: { qaScenario: 'loss' }, action: async () => {} })}
    {template}
/>

<Story
    name="QA — SPIN / win display (synthetic event)"
    args={templateArgs({ skipLoadingScreen: true, data: { qaScenario: 'win' }, action: async () => {} })}
    {template}
/>

<Story
    name="QA — SPIN / cascade (synthetic event)"
    args={templateArgs({ skipLoadingScreen: true, data: { qaScenario: 'cascade' }, action: async () => {} })}
    {template}
/>
