import{d as L,m as q,p as W,e as n,t as o,h as v,f as l,z as _,q as b,g as k,o as s}from"./iframe-Cm7RSU9_.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const X={class:"wp-field"},D={key:0,class:"wp-field__label"},F={class:"wp-input-wrap"},B=["type","placeholder","value","disabled"],C=["aria-label","title"],M={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},z={key:1,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},H={class:"wp-sr-only",role:"status","aria-live":"polite"},O={key:1,class:"wp-field__error"},Y={key:2,class:"wp-field__hint"},f=L({inheritAttrs:!1,__name:"WpInput",props:{modelValue:{},label:{},placeholder:{},hint:{},error:{},disabled:{type:Boolean,default:!1},type:{default:"text"},revealable:{type:Boolean,default:!0},revealLabel:{default:"Show password"},hideLabel:{default:"Hide password"},shownAnnouncement:{default:"Your password is visible"},hiddenAnnouncement:{default:"Your password is hidden"}},emits:["update:modelValue"],setup(e,{emit:V}){const t=e,E=V,g=b(),a=b(!1),w=b(""),y=k(()=>t.type==="password"&&t.revealable&&!t.disabled),x=k(()=>t.type==="password"&&a.value?"text":t.type);function I(){a.value=!a.value,w.value=a.value?t.shownAnnouncement:t.hiddenAnnouncement}function A(){a.value=!1}let h=null;return q(()=>{h=g.value?.form??null,h?.addEventListener("submit",A)}),W(()=>h?.removeEventListener("submit",A)),(S,r)=>(s(),n("div",X,[e.label?(s(),n("label",D,o(e.label),1)):v("",!0),l("div",F,[l("input",_({ref_key:"inputEl",ref:g},S.$attrs,{class:["wp-input",{"wp-input--error":e.error,"wp-input--revealable":y.value}],type:x.value,placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,onInput:r[0]||(r[0]=N=>E("update:modelValue",N.target.value))}),null,16,B),y.value?(s(),n("button",{key:0,type:"button",class:"wp-input__reveal","aria-label":a.value?e.hideLabel:e.revealLabel,title:a.value?e.hideLabel:e.revealLabel,onClick:I},[a.value?(s(),n("svg",M,[...r[1]||(r[1]=[l("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},null,-1),l("line",{x1:"1",y1:"1",x2:"23",y2:"23"},null,-1)])])):(s(),n("svg",z,[...r[2]||(r[2]=[l("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},null,-1),l("circle",{cx:"12",cy:"12",r:"3"},null,-1)])]))],8,C)):v("",!0)]),l("span",H,o(w.value),1),e.error?(s(),n("span",O,o(e.error),1)):e.hint?(s(),n("span",Y,o(e.hint),1)):v("",!0)]))}}),j=R(f,[["__scopeId","data-v-57097bcd"]]);f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"WpInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"revealable",description:"Show the reveal (eye) toggle on password fields.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"revealLabel",description:"Accessible name of the reveal button while the value is hidden.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Show password'"}},{name:"hideLabel",description:"Accessible name of the reveal button while the value is shown.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Hide password'"}},{name:"shownAnnouncement",description:"Live-region announcement when the value becomes visible.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Your password is visible'"}},{name:"hiddenAnnouncement",description:"Live-region announcement when the value becomes hidden.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Your password is hidden'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpInput/WpInput.vue"]});const U={title:"Components/WpInput",component:j,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number"]}}},i={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"}},d={args:{label:"Zone de vol",placeholder:"48.8566° N, 2.3522° E",hint:"Format: latitude° N/S, longitude° E/W"}},u={args:{label:"Référence client",modelValue:"REF-INVALID",error:"Format invalide — utilisez REF-AAAA-XXXXX."}},c={args:{label:"Altitude maximale",modelValue:"120 m (limité par SORA)",disabled:!0}},p={args:{label:"Mot de passe",type:"password",modelValue:"S3cr3t!",placeholder:"••••••••"}},m={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"},parameters:{backgrounds:{default:"dark"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Zone de vol',
    placeholder: '48.8566° N, 2.3522° E',
    hint: 'Format: latitude° N/S, longitude° E/W'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Référence client',
    modelValue: 'REF-INVALID',
    error: 'Format invalide — utilisez REF-AAAA-XXXXX.'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Altitude maximale',
    modelValue: '120 m (limité par SORA)',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mot de passe',
    type: 'password',
    modelValue: 'S3cr3t!',
    placeholder: '••••••••'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...m.parameters?.docs?.source}}};const $=["Default","WithHint","WithError","Disabled","Password","Dark"];export{m as Dark,i as Default,c as Disabled,p as Password,u as WithError,d as WithHint,$ as __namedExportsOrder,U as default};
