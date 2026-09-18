<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';
	type Props = { x:number; y:number; height:number; title:string; value:string; meta:string; disabled?:boolean; active?:boolean; onpress:()=>void; };
	const props: Props = $props();
	const C = HUD_COLORS;
	let hovered = $state(false);
	let pressed = $state(false);
	const backgroundColor = $derived(pressed ? C.YELLOW_PRESSED : hovered ? C.YELLOW_HOVER : props.active ? C.PAPER_LIGHT : C.PAPER);
	const borderColor = $derived(props.active || hovered ? C.GOLD_LIGHT : C.GOLD);
	const onPress = () => { if (!props.disabled) props.onpress(); };
</script>
<Container x={props.x} y={props.y + (pressed ? 3 : hovered ? -1 : 0)} rotation={pressed ? 0 : hovered ? -0.002 : -0.005} eventMode="static" cursor={props.disabled ? 'not-allowed' : 'pointer'} onpointerover={() => !props.disabled && (hovered = true)} onpointerout={() => { hovered = false; pressed = false; }} onpointerdown={() => !props.disabled && (pressed = true)} onpointerup={() => { pressed = false; onPress(); }} onpointerupoutside={() => (pressed = false)} alpha={props.disabled ? 0.55 : 1}>
	<Rectangle width={UI_LAYOUT.leftPanel.width} height={props.height} backgroundColor={backgroundColor} backgroundAlpha={0.97} borderColor={borderColor} borderWidth={2}/>
	<Text x={14} y={13} text={props.title} style={{fontFamily:'Comic Sans MS',fontSize:10,fontWeight:'700',fill:0x315f89,letterSpacing:0.5}}/>
	<Text x={14} y={props.height/2-2} anchor={{x:0,y:0.5}} text={props.value} style={{fontFamily:'Comic Sans MS',fontSize:props.value.length>15?14:17,fontWeight:'700',fill:C.INK}}/>
	<Text x={14} y={props.height-15} anchor={{x:0,y:0.5}} text={props.meta} style={{fontFamily:'Comic Sans MS',fontSize:9,fontWeight:'700',fill:C.INK_SOFT}}/>
	<Text x={UI_LAYOUT.leftPanel.width-17} y={props.height/2} anchor={0.5} text="›" style={{fontFamily:'Comic Sans MS',fontSize:27,fontWeight:'700',fill:0x315f89}}/>
</Container>
