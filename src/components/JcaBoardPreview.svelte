<script lang="ts">
    import { innerHeight, innerWidth } from 'svelte/reactivity/window';
    import { Rectangle, Sprite, SpineProvider, SpineTrack, Text } from 'pixi-svelte';

    // Visual QA board only. The existing 6x5 reel engine and RGS events are NOT
    // connected to this 6x6 preview; do not treat preview symbols as a paid spin.
    type ArtKey = 'H1' | 'H2' | 'H3' | 'H4' | 'H5'
        | 'L1' | 'L2' | 'L3' | 'L4' | 'S' | 'M5';

    const columns: ArtKey[][] = [
        ['L1', 'H5', 'L2', 'S',  'H4', 'L3'],
        ['H2', 'L4', 'L3', 'H1', 'L2', 'H2'],
        ['L3', 'H1', 'H3', 'L4', 'M5', 'L4'],
        ['H4', 'L2', 'L1', 'H2', 'H5', 'S' ],
        ['L2', 'M5', 'H4', 'L3', 'L1', 'H1'],
        ['S',  'L3', 'L4', 'L1', 'H3', 'L2'],
    ];

    const occupation: Record<ArtKey, number> = {
        H1: 0.93, H2: 0.93, H3: 0.91, H4: 0.85, H5: 0.86,
        L1: 0.78, L2: 0.78, L3: 0.78, L4: 0.78,
        S: 0.90, M5: 0.88,
    };

    const viewport = $derived({
        width: Math.max(innerWidth.current ?? 1200, 1),
        height: Math.max(innerHeight.current ?? 675, 1),
    });
    const portrait = $derived(viewport.width < viewport.height * 0.85);
    const hudHeight = $derived(Math.min(95, Math.max(55, viewport.height * 0.12)));
    const available = $derived(viewport.height - hudHeight - Math.min(42, viewport.height * 0.05));
    const side = $derived(Math.max(36, Math.min(
        viewport.width * (portrait ? 0.94 : 0.56),
        available * 0.94,
    )));
    const tile = $derived(side / 6);
    const frame = $derived(Math.max(5, Math.min(15, side * 0.025)));
    const boardX = $derived((viewport.width - side) / 2);
    const boardY = $derived(Math.max(frame + 2, (viewport.height - hudHeight - side) / 2));

    const bgLayout = $derived.by(() => {
        const scale = Math.max(viewport.width / 1672, viewport.height / 941);
        return {
            x: viewport.width / 2,
            y: viewport.height / 2,
            width: 1672 * scale,
            height: 941 * scale,
        };
    });

    const hudWidth = $derived(Math.min(viewport.width * 0.96, Math.max(side, 820)));
    const hudX = $derived((viewport.width - hudWidth) / 2);
    const hudTop = $derived(viewport.height - hudHeight + Math.min(3, hudHeight * 0.03));
    const hudFont = $derived(Math.max(10, Math.min(18, hudWidth / 32)));
    const portraitHudFont = $derived(Math.max(9, Math.min(15, hudWidth / 31)));
</script>

<!-- Independent production art layers; no visual distortion on resize. -->
<Rectangle width={viewport.width} height={viewport.height} backgroundColor={0x1b1917} />
<Sprite key="uncleShopBackground" anchor={0.5} {...bgLayout} />

<!-- Temporary art-direction FRAME, not an approved final frame texture. -->
<Rectangle
    x={boardX - frame}
    y={boardY - frame}
    width={side + frame * 2}
    height={side + frame * 2}
    borderRadius={Math.max(3, frame * 0.5)}
    backgroundColor={0x32201a}
    borderColor={0x17100f}
    borderWidth={Math.max(1, frame * 0.3)}
/>
<Rectangle
    x={boardX - frame * 0.42}
    y={boardY - frame * 0.42}
    width={side + frame * 0.84}
    height={side + frame * 0.84}
    backgroundColor={0x151518}
    borderColor={0x826340}
    borderWidth={Math.max(1, frame * 0.3)}
/>

<!-- Exactly six reels, six visible rows; LOW symbols share the game Spine assets. -->
{#each columns as reel, reelIndex}
    {#each reel as key, rowIndex}
        {@const left = boardX + reelIndex * tile}
        {@const top = boardY + rowIndex * tile}
        <Rectangle
            x={left + tile * 0.008}
            y={top + tile * 0.008}
            width={tile * 0.984}
            height={tile * 0.984}
            backgroundColor={(rowIndex + reelIndex) % 2 === 0 ? 0x242025 : 0x292327}
            borderColor={0x413539}
            borderWidth={Math.max(0.55, tile * 0.008)}
        />
        {#if key === 'L1' || key === 'L2' || key === 'L3' || key === 'L4'}
            <SpineProvider
                key={key}
                x={left + tile * 0.5}
                y={top + tile * 0.5}
                height={tile * occupation[key]}
            >
                <SpineTrack trackIndex={0} animationName="static" loop />
            </SpineProvider>
        {:else}
            <Sprite
                key={`jca${key}`}
                x={left + tile * 0.5}
                y={top + tile * 0.5}
                anchor={0.5}
                width={tile * occupation[key]}
                height={tile * occupation[key]}
            />
        {/if}
    {/each}
{/each}

<!-- HUD placeholder BELOW the reel, not painted into the background. -->
<Rectangle
    x={hudX}
    y={hudTop}
    width={hudWidth}
    height={hudHeight * 0.80}
    borderRadius={Math.min(12, hudHeight * 0.14)}
    backgroundColor={0x171517}
    backgroundAlpha={0.94}
    borderColor={0x745739}
    borderWidth={1.5}
/>
{#each ['BALANCE', 'WIN', 'BET'] as label, idx}
    <Text
        x={hudX + hudWidth * (idx + 0.5) / 3}
        y={hudTop + hudHeight * 0.22}
        text={label}
        anchor={0.5}
        style={{
            fontFamily: 'Arial, sans-serif',
            fill: 0xd8c6a5,
            fontSize: portrait ? portraitHudFont : hudFont,
            fontWeight: 'bold',
        }}
    />
    <Text
        x={hudX + hudWidth * (idx + 0.5) / 3}
        y={hudTop + hudHeight * 0.51}
        text={idx === 2 ? '$1.00' : '$0.00'}
        anchor={0.5}
        style={{
            fontFamily: 'Arial, sans-serif',
            fill: 0xf5eddf,
            fontSize: portrait ? portraitHudFont : hudFont,
        }}
    />
{/each}
