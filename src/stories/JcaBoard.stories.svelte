<script lang="ts" module>
    import { defineMeta } from '@storybook/addon-svelte-csf';

    const { Story } = defineMeta({ title: 'JCA/6x6 board' });
</script>

<script lang="ts">
    import { StoryPixiApp } from 'components-storybook';
    import gameAssets from '../game/assets';
    import JcaBoardPreview from '../components/JcaBoardPreview.svelte';

    // Use the same L1-L4 Spine assets as the playable board; other art remains static.
    const assets = {
        uncleShopBackground: gameAssets.uncleShopBackground,
        jcaH1: gameAssets.jcaH1,
        jcaH2: gameAssets.jcaH2,
        jcaH3: gameAssets.jcaH3,
        jcaH4: gameAssets.jcaH4,
        jcaH5: gameAssets.jcaH5,
        L1: gameAssets.L1,
        L2: gameAssets.L2,
        L3: gameAssets.L3,
        L4: gameAssets.L4,
        jcaS: gameAssets.jcaS,
        jcaM5: gameAssets.jcaM5,
    } as const;
</script>

<Story name="animated LOW art / responsive preview">
    <StoryPixiApp {assets}>
        <JcaBoardPreview />
    </StoryPixiApp>
</Story>
