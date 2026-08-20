import{d as m,e as p,f as d,t as i,n as b,o as f}from"./iframe-ailNjHbu.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const g=["checked","disabled"],t=m({__name:"WpCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:c}){const n=c;return(x,l)=>(f(),p("label",{class:b(["wp-checkbox",{"wp-checkbox--disabled":e.disabled}])},[d("input",{type:"checkbox",checked:e.modelValue,disabled:e.disabled,onChange:l[0]||(l[0]=u=>n("update:modelValue",u.target.checked))},null,40,g),d("span",null,i(e.label),1)],2))}}),h=k(t,[["__scopeId","data-v-97a3d4a7"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"WpCheckbox",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!0,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpCheckbox/WpCheckbox.vue"]});const v={title:"Components/WpCheckbox",component:h,tags:["autodocs"]},a={args:{label:"UAS-FR-597832 — DJI Avata 360",modelValue:!0}},o={args:{label:"UAS-FR-594654 — DJI Matrice 4TD",modelValue:!1}},r={args:{label:"UAS-FR-575351 — DJI Néo",disabled:!0}},s={args:{label:"UAS-FR-597832 — DJI Avata 360",modelValue:!0},parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div style="--wp-scheme: dark; --wp-color-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UAS-FR-597832 — DJI Avata 360',
    modelValue: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UAS-FR-594654 — DJI Matrice 4TD',
    modelValue: false
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UAS-FR-575351 — DJI Néo',
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'UAS-FR-597832 — DJI Avata 360',
    modelValue: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div style="--wp-scheme: dark; --wp-color-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'
  })]
}`,...s.parameters?.docs?.source}}};const w=["Default","Unchecked","Disabled","Dark"];export{s as Dark,a as Default,r as Disabled,o as Unchecked,w as __namedExportsOrder,v as default};
