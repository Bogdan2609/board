<script lang="ts">
	import { Container, Rectangle, Text } from 'pixi-svelte';
	import { stateModal, stateSound, stateUi } from 'state-shared';
	import { getContext } from '../../game/context';
	import { UI_LAYOUT } from '../../game/uiLayout';
	import { HUD_COLORS } from './hudPalette';
	type Props={x:number;y:number}; type ButtonKey='menu'|'mute'|'sound';
	const props:Props=$props(); const context=getContext(); const C=HUD_COLORS;
	let hovered=$state<ButtonKey|null>(null); let pressed=$state<ButtonKey|null>(null);
	const soundMuted=$derived(stateSound.volumeValueMaster===0); const menuDisabled=$derived(Boolean(stateModal.modal));
	const buttons=[{key:'menu',width:80},{key:'mute',width:44},{key:'sound',width:44}] as const;
	const labelFor=(key:ButtonKey)=>key==='menu'?(stateUi.menuOpen?'CLOSE':'☰ MENU'):key==='mute'?'MUTE':'SOUND';
	const buttonX=(index:number)=>{let x=0;for(let i=0;i<index;i++)x+=buttons[i].width+UI_LAYOUT.leftUtility.buttonGap;return x;};
	const disabledFor=(key:ButtonKey)=>key==='menu'&&menuDisabled;
	const activate=(key:ButtonKey)=>{if(disabledFor(key))return;context.eventEmitter.broadcast({type:'soundPressGeneral'});if(key==='menu'){stateUi.menuOpen=!stateUi.menuOpen;return;}if(key==='mute'){stateSound.volumeValueMaster=0;return;}stateSound.volumeValueMaster=50;};
	const bg=(key:ButtonKey)=>pressed===key?C.YELLOW_PRESSED:hovered===key?C.YELLOW_HOVER:key==='mute'&&soundMuted?C.YELLOW:key==='sound'&&!soundMuted?C.YELLOW:C.PAPER;
</script>
<Container x={props.x} y={props.y} rotation={-0.003}>
{#each buttons as button,index}
	<Container x={buttonX(index)} y={pressed===button.key?2:0} eventMode="static" cursor={disabledFor(button.key)?'not-allowed':'pointer'} onpointerover={()=>{if(!disabledFor(button.key))hovered=button.key}} onpointerout={()=>{hovered=null;pressed=null}} onpointerdown={()=>{if(!disabledFor(button.key))pressed=button.key}} onpointerup={()=>{pressed=null;activate(button.key)}} onpointerupoutside={()=>(pressed=null)} alpha={disabledFor(button.key)?0.45:1}>
		<Rectangle width={button.width} height={UI_LAYOUT.leftUtility.height} backgroundColor={bg(button.key)} backgroundAlpha={0.97} borderColor={C.GOLD} borderWidth={1}/>
		<Text x={button.width/2} y={UI_LAYOUT.leftUtility.height/2} anchor={0.5} text={labelFor(button.key)} style={{fontFamily:'Comic Sans MS',fontSize:button.key==='menu'?10:9,fontWeight:'700',fill:C.INK}}/>
	</Container>
{/each}
</Container>
