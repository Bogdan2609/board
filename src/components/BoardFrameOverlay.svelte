<script lang="ts">
    import { Container, Sprite } from 'pixi-svelte';
    import { getContext } from '../game/context';
    import { BOARD_SIZES } from '../game/constants';

    const context = getContext();
    const layout = $derived(context.stateGameDerived.boardLayout());

    // The fitted texture is 1254px square, with a 1144px transparent square opening.
    // Fitting that opening to the 600px gameplay board keeps all 36 cells unobstructed.
    const INNER_PX = 1199 - 55;
    const LEFT_PX = 55;
    const FRAME_WIDTH = BOARD_SIZES.width * 1254 / INNER_PX;
    const FRAME_HEIGHT = BOARD_SIZES.height * 1254 / INNER_PX;
    const FRAME_OFFSET_X = -BOARD_SIZES.width * LEFT_PX / INNER_PX;
    const FRAME_OFFSET_Y = -BOARD_SIZES.height * LEFT_PX / INNER_PX;
</script>

<!-- The wooden overlay is placed ABOVE the symbols but below the game HUD. -->
<Container x={layout.x} y={layout.y} pivot={layout.pivot} scale={layout.scale}>
    <Sprite key="jcaReelFrame" x={FRAME_OFFSET_X} y={FRAME_OFFSET_Y}
        width={FRAME_WIDTH} height={FRAME_HEIGHT} />
</Container>
