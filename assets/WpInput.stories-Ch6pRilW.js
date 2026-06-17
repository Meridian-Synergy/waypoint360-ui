import{d as g,e as a,t as d,h as c,f as b,n as h,o as r}from"./iframe-Va5KqThp.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const A={class:"wp-field"},I={key:0,class:"wp-field__label"},E=["type","placeholder","value","disabled"],V={key:1,class:"wp-field__error"},N={key:2,class:"wp-field__hint"},i=g({__name:"WpInput",props:{modelValue:{},label:{},placeholder:{},hint:{},error:{},disabled:{type:Boolean,default:!1},type:{default:"text"}},emits:["update:modelValue"],setup(e,{emit:u}){const p=u;return(v,m)=>(r(),a("div",A,[e.label?(r(),a("label",I,d(e.label),1)):c("",!0),b("input",{class:h(["wp-input",{"wp-input--error":e.error}]),type:e.type,placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,onInput:m[0]||(m[0]=f=>p("update:modelValue",f.target.value))},null,42,E),e.error?(r(),a("span",V,d(e.error),1)):e.hint?(r(),a("span",N,d(e.hint),1)):c("",!0)]))}}),x=y(i,[["__scopeId","data-v-51f33dde"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"WpInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpInput/WpInput.vue"]});const w={title:"Components/WpInput",component:x,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number"]}}},t={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"}},l={args:{label:"Zone de vol",placeholder:"48.8566° N, 2.3522° E",hint:"Format: latitude° N/S, longitude° E/W"}},s={args:{label:"Référence client",modelValue:"REF-INVALID",error:"Format invalide — utilisez REF-AAAA-XXXXX."}},n={args:{label:"Altitude maximale",modelValue:"120 m (limité par SORA)",disabled:!0}},o={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"},parameters:{backgrounds:{default:"dark"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Zone de vol',
    placeholder: '48.8566° N, 2.3522° E',
    hint: 'Format: latitude° N/S, longitude° E/W'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Référence client',
    modelValue: 'REF-INVALID',
    error: 'Format invalide — utilisez REF-AAAA-XXXXX.'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Altitude maximale',
    modelValue: '120 m (limité par SORA)',
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...o.parameters?.docs?.source}}};const S=["Default","WithHint","WithError","Disabled","Dark"];export{o as Dark,t as Default,n as Disabled,s as WithError,l as WithHint,S as __namedExportsOrder,w as default};
