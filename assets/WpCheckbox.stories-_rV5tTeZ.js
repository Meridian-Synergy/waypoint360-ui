import{d as m,e as p,f as n,t as i,n as b,o as f}from"./iframe-BV8YQoQV.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const g=["checked","disabled"],r=m({__name:"WpCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:d}){const c=d;return(h,t)=>(f(),p("label",{class:b(["wp-checkbox",{"wp-checkbox--disabled":e.disabled}])},[n("input",{type:"checkbox",checked:e.modelValue,disabled:e.disabled,onChange:t[0]||(t[0]=u=>c("update:modelValue",u.target.checked))},null,40,g),n("span",null,i(e.label),1)],2))}}),D=k(r,[["__scopeId","data-v-2139be71"]]);r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"WpCheckbox",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!0,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpCheckbox/WpCheckbox.vue"]});const y={title:"Components/WpCheckbox",component:D,tags:["autodocs"]},a={args:{label:"UAS-FR-597832 — DJI Avata 360",modelValue:!0}},s={args:{label:"UAS-FR-594654 — DJI Matrice 4TD",modelValue:!1}},o={args:{label:"UAS-FR-575351 — DJI Néo",disabled:!0}},l={args:{label:"UAS-FR-597832 — DJI Avata 360",modelValue:!0},parameters:{backgrounds:{default:"dark"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UAS-FR-597832 — DJI Avata 360',
    modelValue: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UAS-FR-594654 — DJI Matrice 4TD',
    modelValue: false
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UAS-FR-575351 — DJI Néo',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UAS-FR-597832 — DJI Avata 360',
    modelValue: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}};const A=["Default","Unchecked","Disabled","Dark"];export{l as Dark,a as Default,o as Disabled,s as Unchecked,A as __namedExportsOrder,y as default};
