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
        <StoryLocale lang="en"><Game /></StoryLocale>
    </StoryGameTemplate>
{/snippet}

<Story
    name="main screen — approved art / QA"
    args={templateArgs({ skipLoadingScreen: true, data: {}, action: async () => {} })}
    {template}
/>
