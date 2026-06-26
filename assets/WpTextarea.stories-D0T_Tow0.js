import{d as m,k as i,o as c,w as p,f,n as b}from"./iframe-CzbG0I58.js";import{W as g}from"./WpField-BU_UfhmI.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const y=["placeholder","value","disabled","rows"],o=m({__name:"WpTextarea",props:{modelValue:{},label:{},placeholder:{},hint:{},error:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rows:{default:3}},emits:["update:modelValue"],setup(e,{emit:n}){const d=n;return(x,t)=>(c(),i(g,{label:e.label,required:e.required,hint:e.hint,error:e.error},{default:p(()=>[f("textarea",{class:b(["wp-textarea",{"wp-textarea--error":e.error}]),placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,rows:e.rows,onInput:t[0]||(t[0]=u=>d("update:modelValue",u.target.value))},null,42,y)]),_:1},8,["label","required","hint","error"]))}}),q=h(o,[["__scopeId","data-v-9a52a53a"]]);o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"WpTextarea",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpTextarea/WpTextarea.vue"]});const k={title:"Components/WpTextarea",component:q,tags:["autodocs"]},a={args:{label:"Autres informations utiles",placeholder:"Nombre de vols, durée moyenne…"}},r={args:{label:"Notes",modelValue:"...",error:"Champ requis."}},s={args:{label:"Notes",modelValue:"Lecture seule",disabled:!0}},l={args:{label:"Autres informations utiles",placeholder:"Nombre de vols, durée moyenne…"},parameters:{backgrounds:{default:"dark"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    modelValue: 'Lecture seule',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Autres informations utiles',
    placeholder: 'Nombre de vols, durée moyenne…'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}};const W=["Default","WithError","Disabled","Dark"];export{l as Dark,a as Default,s as Disabled,r as WithError,W as __namedExportsOrder,k as default};
