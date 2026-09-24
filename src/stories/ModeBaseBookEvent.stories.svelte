<script lang="ts" module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    const { Story } = defineMeta({ title: 'MODE_BASE/bookEvent' });
</script>

<script lang="ts">
    import { StoryGameTemplate, StoryLocale, type TemplateArgs, templateArgs } from 'components-storybook';
    import Game from '../components/Game.svelte';
    import { setContext } from '../game/context';
    import { playJcaModeQaThroughEvent } from './data/jcaModeQaBooks';

    setContext();
</script>

{#snippet template(args: TemplateArgs<any>)}
    <StoryGameTemplate skipLoadingScreen={args.skipLoadingScreen} action={async () => await args.action?.(args.data)}>
        <StoryLocale lang="en"><Game storybookQa /></StoryLocale>
    </StoryGameTemplate>
{/snippet}

<!-- Each event replays its own prerequisites from a valid 6x6 reveal. -->

<Story name="reveal" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'reveal'),
})} {template} />

<Story name="setTotalWin" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'setTotalWin'),
})} {template} />

<Story name="freeSpinTrigger" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'freeSpinTrigger'),
})} {template} />

<Story name="updateFreeSpin" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'updateFreeSpin'),
})} {template} />

<Story name="winInfo" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'winInfo'),
})} {template} />

<Story name="updateTumbleWin" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'updateTumbleWin'),
})} {template} />

<Story name="tumbleBoard" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'tumbleBoard'),
})} {template} />

<Story name="updateGlobalMult" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'updateGlobalMult'),
})} {template} />

<Story name="boardMultiplierInfo" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'boardMultiplierInfo'),
})} {template} />

<Story name="setWin" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'setWin'),
})} {template} />

<Story name="freeSpinEnd" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'freeSpinEnd'),
})} {template} />

<Story name="finalWin" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => await playJcaModeQaThroughEvent('base', 'finalWin'),
})} {template} />
