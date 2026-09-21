<script lang="ts" module>
    import { defineMeta } from '@storybook/addon-svelte-csf';

    const { Story } = defineMeta({ title: 'JCA/6x6 board' });
</script>

<script lang="ts">
    import { StoryPixiApp } from 'components-storybook';
    import gameAssets from '../game/assets';
    import JcaBoardPreview from '../components/JcaBoardPreview.svelte';

    // Load only approved static assets for this visual test; avoid loading all
    // legacy Spine/FX assets and the old game mathematics into the art preview.
    const assets = {
        uncleShopBackground: gameAssets.uncleShopBackground,
        jcaH1: gameAssets.jcaH1,
        jcaH2: gameAssets.jcaH2,
        jcaH3: gameAssets.jcaH3,
        jcaH4: gameAssets.jcaH4,
        jcaH5: gameAssets.jcaH5,
        jcaL1: gameAssets.jcaL1,
        jcaL2: gameAssets.jcaL2,
        jcaL3: gameAssets.jcaL3,
        jcaL4: gameAssets.jcaL4,
        jcaS: gameAssets.jcaS,
        jcaM5: gameAssets.jcaM5,
    } as const;
</script>

<Story name="static art / responsive preview">
    <StoryPixiApp {assets}>
        <JcaBoardPreview />
    </StoryPixiApp>
</Story>
