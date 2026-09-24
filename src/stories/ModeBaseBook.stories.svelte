<script lang="ts" module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    const { Story } = defineMeta({ title: 'MODE_BASE/book' });
</script>

<script lang="ts">
    import { StoryGameTemplate, StoryLocale, type TemplateArgs, templateArgs } from 'components-storybook';
    import { randomInteger } from 'utils-shared/random';
    import Game from '../components/Game.svelte';
    import { setContext } from '../game/context';
    import { playJcaModeQaBook, type JcaQaVariant } from './data/jcaModeQaBooks';

    setContext();
    const variants: JcaQaVariant[] = ['loss', 'win', 'cascade'];
</script>

{#snippet template(args: TemplateArgs<any>)}
    <StoryGameTemplate
        skipLoadingScreen={args.skipLoadingScreen}
        action={async () => await args.action?.(args.data)}
    >
        <StoryLocale lang="en"><Game storybookQa /></StoryLocale>
    </StoryGameTemplate>
{/snippet}

<Story name="random visual sequence" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => {
        const variant = variants[randomInteger({ min: 0, max: variants.length - 1 })];
        await playJcaModeQaBook('base', variant);
    },
})} {template} />

<Story name="no win" args={templateArgs({ skipLoadingScreen: true, data: {},
    action: async () => await playJcaModeQaBook('base', 'loss'),
})} {template} />

<Story name="LOW win" args={templateArgs({ skipLoadingScreen: true, data: {},
    action: async () => await playJcaModeQaBook('base', 'win'),
})} {template} />

<Story name="LOW win / tumble / x5" args={templateArgs({ skipLoadingScreen: true, data: {},
    action: async () => await playJcaModeQaBook('base', 'cascade'),
})} {template} />
