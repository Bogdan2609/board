<script lang="ts">
    import { Rectangle, Text } from 'pixi-svelte';

    type Props = {
        x: number;
        y: number;
        label: string;
        onpress: () => void;
        width?: number;
        height?: number;
        fontSize?: number;
        disabled?: boolean;
        active?: boolean;
        primary?: boolean;
    };
    const props: Props = $props();
</script>

<Rectangle
    x={props.x} y={props.y} anchor={0.5}
    width={props.width ?? 65} height={props.height ?? 62}
    borderRadius={props.primary ? 12 : 9}
    backgroundColor={props.disabled ? 0x413b37 : props.primary ? 0x766039 : props.active ? 0x4b5739 : 0x332820}
    borderColor={props.disabled ? 0x665d53 : props.primary ? 0xd3b47a : props.active ? 0xa3aa75 : 0x796141}
    borderWidth={props.primary ? 2.5 : 1.4}
    eventMode={props.disabled ? 'none' : 'static'}
    cursor={props.disabled ? 'default' : 'pointer'}
    onpointerup={() => { if (!props.disabled) props.onpress(); }}
/>
<Text
    x={props.x} y={props.y} anchor={0.5}
    text={props.label}
    eventMode="none"
    style={{
        fontFamily: 'proxima-nova',
        fontSize: props.fontSize ?? (props.primary ? 18 : 14),
        fontWeight: '600',
        fill: props.disabled ? 0xa89d8e : props.primary ? 0xffedc4 : 0xf3e5c9,
        align: 'center',
    }}
/>
