<script lang="ts" module>
    import { defineMeta } from '@storybook/addon-svelte-csf';
    const { Story } = defineMeta({ title: 'JCA/Game mode modal', parameters: { layout: 'fullscreen' } });
</script>

<script lang="ts">
    import JcaGameModeModalPreview from '../components/JcaGameModeModalPreview.svelte';
</script>

<Story name="interactive / responsive">
    <JcaGameModeModalPreview />
</Story>
