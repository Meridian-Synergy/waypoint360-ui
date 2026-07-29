import{d as m,l as i,o as c,w as p,f,n as b}from"./iframe-Dwvl0xcH.js";import{W as g}from"./WpField-Dl2Qu0S2.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const h=["placeholder","value","disabled","rows"],s=m({__name:"WpTextarea",props:{modelValue:{},label:{},placeholder:{},hint:{},error:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rows:{default:3}},emits:["update:modelValue"],setup(e,{emit:n}){const d=n;return(x,l)=>(c(),i(g,{label:e.label,required:e.required,hint:e.hint,error:e.error},{default:p(()=>[f("textarea",{class:b(["wp-textarea",{"wp-textarea--error":e.error}]),placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,rows:e.rows,onInput:l[0]||(l[0]=u=>d("update:modelValue",u.target.value))},null,42,h)]),_:1},8,["label","required","hint","error"]))}}),w=y(s,[["__scopeId","data-v-0c8f6f8b"]]);s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"WpTextarea",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpTextarea/WpTextarea.vue"]});const k={title:"Components/WpTextarea",component:w,tags:["autodocs"]},a={args:{label:"Autres informations utiles",placeholder:"Nombre de vols, durée moyenne…"}},r={args:{label:"Notes",modelValue:"...",error:"Champ requis."}},o={args:{label:"Notes",modelValue:"Lecture seule",disabled:!0}},t={args:{label:"Autres informations utiles",placeholder:"Nombre de vols, durée moyenne…"},parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Autres informations utiles',
    placeholder: 'Nombre de vols, durée moyenne…'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    modelValue: '...',
    error: 'Champ requis.'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    modelValue: 'Lecture seule',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Autres informations utiles',
    placeholder: 'Nombre de vols, durée moyenne…'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'
  })]
}`,...t.parameters?.docs?.source}}};const W=["Default","WithError","Disabled","Dark"];export{t as Dark,a as Default,o as Disabled,r as WithError,W as __namedExportsOrder,k as default};
