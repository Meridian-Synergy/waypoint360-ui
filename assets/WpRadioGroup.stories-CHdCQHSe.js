import{d as c,l as f,w as g,B as b,o as s,f as n,e as i,F as h,k as v,n as y,E as V,t as k}from"./iframe-CXOmRUnz.js";import{W as w}from"./WpField-BwdfSf25.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const _={class:"wp-radio-group"},E=["name","value","checked","disabled","onChange"],l=c({__name:"WpRadioGroup",props:{modelValue:{},options:{},label:{},hint:{},error:{},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:u}){const p=u,m=b();return(x,C)=>(s(),f(w,{label:a.label,required:a.required,hint:a.hint,error:a.error},{default:g(()=>[n("div",_,[(s(!0),i(h,null,v(a.options,e=>(s(),i("label",{key:e.value,class:y(["wp-radio",{"wp-radio--disabled":e.disabled}])},[n("input",{type:"radio",name:V(m),value:e.value,checked:a.modelValue===e.value,disabled:e.disabled,onChange:R=>p("update:modelValue",e.value)},null,40,E),n("span",null,k(e.label),1)],2))),128))])]),_:1},8,["label","required","hint","error"]))}}),W=q(l,[["__scopeId","data-v-9b523838"]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"WpRadioGroup",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"WpRadioOption"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpRadioGroup/WpRadioGroup.vue"]});const F={title:"Components/WpRadioGroup",component:W,tags:["autodocs"]},d=[{value:"EV",label:"En vue du télépilote"},{value:"HV",label:"Hors vue du télépilote",disabled:!0}],r={args:{label:"Pilotage de l'aéronef",modelValue:"EV",options:d}},o={args:{label:"Pilotage de l'aéronef",options:d,error:"Champ requis."}},t={args:{label:"Pilotage de l'aéronef",modelValue:"EV",options:d},parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div style="--wp-scheme: dark; --wp-color-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pilotage de l'aéronef",
    modelValue: 'EV',
    options
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pilotage de l'aéronef",
    options,
    error: 'Champ requis.'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pilotage de l'aéronef",
    modelValue: 'EV',
    options
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div style="--wp-scheme: dark; --wp-color-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'
  })]
}`,...t.parameters?.docs?.source}}};const N=["Default","WithError","Dark"];export{t as Dark,r as Default,o as WithError,N as __namedExportsOrder,F as default};
