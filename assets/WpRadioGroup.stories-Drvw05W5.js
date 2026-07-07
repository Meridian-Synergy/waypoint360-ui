import{d as c,k as f,w as g,B as b,o as t,f as n,e as i,F as h,j as V,n as v,C as y,t as k}from"./iframe-CZb0sTpj.js";import{W as q}from"./WpField-D8ZsMD3W.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const W={class:"wp-radio-group"},E=["name","value","checked","disabled","onChange"],s=c({__name:"WpRadioGroup",props:{modelValue:{},options:{},label:{},hint:{},error:{},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:u}){const m=u,p=b();return(w,R)=>(t(),f(q,{label:a.label,required:a.required,hint:a.hint,error:a.error},{default:g(()=>[n("div",W,[(t(!0),i(h,null,V(a.options,e=>(t(),i("label",{key:e.value,class:v(["wp-radio",{"wp-radio--disabled":e.disabled}])},[n("input",{type:"radio",name:y(p),value:e.value,checked:a.modelValue===e.value,disabled:e.disabled,onChange:x=>m("update:modelValue",e.value)},null,40,E),n("span",null,k(e.label),1)],2))),128))])]),_:1},8,["label","required","hint","error"]))}}),C=_(s,[["__scopeId","data-v-eb53608d"]]);s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"WpRadioGroup",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"WpRadioOption"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpRadioGroup/WpRadioGroup.vue"]});const F={title:"Components/WpRadioGroup",component:C,tags:["autodocs"]},d=[{value:"EV",label:"En vue du télépilote"},{value:"HV",label:"Hors vue du télépilote",disabled:!0}],r={args:{label:"Pilotage de l'aéronef",modelValue:"EV",options:d}},o={args:{label:"Pilotage de l'aéronef",options:d,error:"Champ requis."}},l={args:{label:"Pilotage de l'aéronef",modelValue:"EV",options:d},parameters:{backgrounds:{default:"dark"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pilotage de l'aéronef",
    modelValue: 'EV',
    options
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}};const N=["Default","WithError","Dark"];export{l as Dark,r as Default,o as WithError,N as __namedExportsOrder,F as default};
