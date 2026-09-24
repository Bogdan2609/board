<script lang="ts" module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    const { Story } = defineMeta({ title: 'MODE_BASE/book' });
</script>

<script lang="ts">
    import { StoryGameTemplate, StoryLocale, type TemplateArgs, templateArgs } from 'components-storybook';
    import { randomInteger } from 'utils-shared/random';
    import Game from '../components/Game.svelte';
    import { setContext } from '../game/context';
    import { playBet } from '../game/utils';
    import type { Bet } from '../game/typesBookEvent';
    import books from './data/base_books';
    import { playJcaModeQaBook } from './data/jcaModeQaBooks';

    setContext();
</script>

{#snippet template(args: TemplateArgs<any>)}
    <StoryGameTemplate skipLoadingScreen={args.skipLoadingScreen} action={async () => await args.action?.(args.data)}>
        <StoryLocale lang="en"><Game storybookQa /></StoryLocale>
    </StoryGameTemplate>
{/snippet}

<!-- Random selects one of ALL 50 coherent, authored 6x6 visual books, no legacy 6x5 adapter. -->
<Story name="random" args={templateArgs({
    skipLoadingScreen: true,
    data: {},
    action: async () => {
        const index = randomInteger({ min: 0, max: books.length - 1 });
        const book = books[index];
        console.log('[JCA Storybook] MODE_BASE 6x6 random', { index, id: book.id, events: book.events.length });
        await playBet({ ...book, state: book.events } as unknown as Bet);
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
