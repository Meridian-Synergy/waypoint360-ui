import{d as V,e as r,t as f,h,f as s,z as x,q as I,g,o as t}from"./iframe-Cy-AHN64.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const S={class:"wp-field"},N={key:0,class:"wp-field__label"},W={class:"wp-input-wrap"},q=["type","placeholder","value","disabled"],L=["aria-label","aria-pressed","title"],X={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},D={key:1,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},F={key:1,class:"wp-field__error"},R={key:2,class:"wp-field__hint"},m=V({inheritAttrs:!1,__name:"WpInput",props:{modelValue:{},label:{},placeholder:{},hint:{},error:{},disabled:{type:Boolean,default:!1},type:{default:"text"},revealable:{type:Boolean,default:!0},revealLabel:{default:"Show password"},hideLabel:{default:"Hide password"}},emits:["update:modelValue"],setup(e,{emit:y}){const n=e,w=y,l=I(!1),b=g(()=>n.type==="password"&&n.revealable&&!n.disabled),k=g(()=>n.type==="password"&&l.value?"text":n.type);return(A,a)=>(t(),r("div",S,[e.label?(t(),r("label",N,f(e.label),1)):h("",!0),s("div",W,[s("input",x(A.$attrs,{class:["wp-input",{"wp-input--error":e.error,"wp-input--revealable":b.value}],type:k.value,placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,onInput:a[0]||(a[0]=v=>w("update:modelValue",v.target.value))}),null,16,q),b.value?(t(),r("button",{key:0,type:"button",class:"wp-input__reveal","aria-label":l.value?e.hideLabel:e.revealLabel,"aria-pressed":l.value,title:l.value?e.hideLabel:e.revealLabel,onClick:a[1]||(a[1]=v=>l.value=!l.value)},[l.value?(t(),r("svg",X,[...a[2]||(a[2]=[s("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),s("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(t(),r("svg",D,[...a[3]||(a[3]=[s("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),s("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))],8,L)):h("",!0)]),e.error?(t(),r("span",F,f(e.error),1)):e.hint?(t(),r("span",R,f(e.hint),1)):h("",!0)]))}}),B=E(m,[["__scopeId","data-v-370fb917"]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"WpInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"revealable",description:"Show the reveal (eye) toggle on password fields.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"revealLabel",description:"Accessible label for the reveal button when the value is hidden.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Show password'"}},{name:"hideLabel",description:"Accessible label for the reveal button when the value is shown.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Hide password'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpInput/WpInput.vue"]});const z={title:"Components/WpInput",component:B,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number"]}}},o={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"}},i={args:{label:"Zone de vol",placeholder:"48.8566° N, 2.3522° E",hint:"Format: latitude° N/S, longitude° E/W"}},d={args:{label:"Référence client",modelValue:"REF-INVALID",error:"Format invalide — utilisez REF-AAAA-XXXXX."}},u={args:{label:"Altitude maximale",modelValue:"120 m (limité par SORA)",disabled:!0}},p={args:{label:"Mot de passe",type:"password",modelValue:"S3cr3t!",placeholder:"••••••••"}},c={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"},parameters:{backgrounds:{default:"dark"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Zone de vol',
    placeholder: '48.8566° N, 2.3522° E',
    hint: 'Format: latitude° N/S, longitude° E/W'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Référence client',
    modelValue: 'REF-INVALID',
    error: 'Format invalide — utilisez REF-AAAA-XXXXX.'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Altitude maximale',
    modelValue: '120 m (limité par SORA)',
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mot de passe',
    type: 'password',
    modelValue: 'S3cr3t!',
    placeholder: '••••••••'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}};const H=["Default","WithHint","WithError","Disabled","Password","Dark"];export{c as Dark,o as Default,u as Disabled,p as Password,d as WithError,i as WithHint,H as __namedExportsOrder,z as default};
