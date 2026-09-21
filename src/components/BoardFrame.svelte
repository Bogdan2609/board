<script lang="ts" module>
    // Event contract remains intact: later FX can subscribe without changing game logic.
    export type EmitterEventBoardFrame =
        | { type: 'boardFrameGlowShow' }
        | { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
    import { Container, Rectangle, Sprite } from 'pixi-svelte';
    import { getContext } from '../game/context';
    import { BOARD_DIMENSIONS, BOARD_SIZES, SYMBOL_SIZE } from '../game/constants';

    const context = getContext();
    const layout = $derived(context.stateGameDerived.boardLayout());
</script>

<!-- Behind the symbols; all gameplay layers use exactly this same boardLayout transform. -->
<Container x={layout.x} y={layout.y} pivot={layout.pivot} scale={layout.scale}>
    <Sprite key="jcaReelBackground" x={0} y={0}
        width={BOARD_SIZES.width} height={BOARD_SIZES.height} />

    <!-- Precisely aligned 6x6 separators, not painted into the stone texture. -->
    {#each Array.from({ length: BOARD_DIMENSIONS.x - 1 }) as _, col}
        <Rectangle x={(col + 1) * SYMBOL_SIZE - 0.5} y={0}
            width={1} height={BOARD_SIZES.height}
            backgroundColor={0x141015} alpha={0.5} />
    {/each}
    {#each Array.from({ length: BOARD_DIMENSIONS.y - 1 }) as _, row}
        <Rectangle x={0} y={(row + 1) * SYMBOL_SIZE - 0.5}
            width={BOARD_SIZES.width} height={1}
            backgroundColor={0x141015} alpha={0.5} />
    {/each}
</Container>
