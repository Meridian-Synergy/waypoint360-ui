import{d as b,l as f,w as h,o as l,f as v,n as S,e as c,t as u,g as y,F as V,k as w}from"./iframe-Dwvl0xcH.js";import{W as k}from"./WpField-Dl2Qu0S2.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const C=["value","disabled"],W=["selected"],x=["value","disabled"],i=b({__name:"WpSelect",props:{modelValue:{},options:{},label:{},placeholder:{},hint:{},error:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:p}){const g=p;return(D,m)=>(l(),f(k,{label:e.label,required:e.required,hint:e.hint,error:e.error},{default:h(()=>[v("select",{class:S(["wp-select",{"wp-select--error":e.error}]),value:e.modelValue,disabled:e.disabled,onChange:m[0]||(m[0]=a=>g("update:modelValue",a.target.value))},[e.placeholder?(l(),c("option",{key:0,value:"",disabled:"",selected:!e.modelValue},u(e.placeholder),9,W)):y("",!0),(l(!0),c(V,null,w(e.options,a=>(l(),c("option",{key:a.value,value:a.value,disabled:a.disabled},u(a.label),9,x))),128))],42,C)]),_:1},8,["label","required","hint","error"]))}}),R=q(i,[["__scopeId","data-v-df0b51ae"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"WpSelect",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"WpSelectOption"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpSelect/WpSelect.vue"]});const F={title:"Components/WpSelect",component:R,tags:["autodocs"]},r=[{value:"OUV",label:"Catégorie ouverte"},{value:"HSS",label:"HSS"},{value:"STSEM",label:"STS européen"}],o={args:{label:"Régime de vol",placeholder:"Choisir…",options:r}},t={args:{label:"Régime de vol",modelValue:"HSS",options:r}},s={args:{label:"Régime de vol",placeholder:"Choisir…",options:r,error:"Champ requis."}},n={args:{label:"Régime de vol",modelValue:"OUV",options:r,disabled:!0}},d={args:{label:"Régime de vol",placeholder:"Choisir…",options:r},parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Régime de vol',
    placeholder: 'Choisir…',
    options
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Régime de vol',
    modelValue: 'HSS',
    options
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Régime de vol',
    placeholder: 'Choisir…',
    options,
    error: 'Champ requis.'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Régime de vol',
    modelValue: 'OUV',
    options,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Régime de vol',
    placeholder: 'Choisir…',
    options
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'
  })]
}`,...d.parameters?.docs?.source}}};const H=["Default","Selected","WithError","Disabled","Dark"];export{d as Dark,o as Default,n as Disabled,t as Selected,s as WithError,H as __namedExportsOrder,F as default};
