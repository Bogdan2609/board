<script lang="ts">
    import { Rectangle, Text } from 'pixi-svelte';
    type Props = {
        x: number;
        y: number;
        label: string;
        value: string;
        width?: number;
        height?: number;
        compact?: boolean;
        onpress?: () => void;
    };
    const props: Props = $props();
    const boxWidth = $derived(props.width ?? 146);
    const boxHeight = $derived(props.height ?? 63);
</script>

<Rectangle
    x={props.x} y={props.y} anchor={0.5} width={boxWidth} height={boxHeight}
    borderRadius={7} backgroundColor={0x201b1b} borderColor={0x665136} borderWidth={1.2}
    eventMode={props.onpress ? 'static' : 'none'}
    cursor={props.onpress ? 'pointer' : 'default'}
    onpointerup={() => props.onpress?.()}
/>
<Text
    x={props.x} y={props.y - (props.compact ? 12 : 13)} anchor={0.5}
    text={props.label} eventMode="none"
    style={{ fontFamily: 'proxima-nova', fontSize: props.compact ? 10 : 12, fontWeight: '600', fill: 0xbda681 }}
/>
<Text
    x={props.x} y={props.y + (props.compact ? 8 : 10)} anchor={0.5}
    text={props.value} eventMode="none"
    style={{ fontFamily: 'proxima-nova', fontSize: props.compact ? 16 : 21, fontWeight: '600', fill: 0xfff1d8 }}
/>
