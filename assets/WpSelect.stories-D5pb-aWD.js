import{d as b,k as f,w as h,o as l,f as v,n as S,e as m,t as c,h as y,F as V,j as q}from"./iframe-evp_nOLu.js";import{W as C}from"./WpField-DAXefBqx.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const W=["value","disabled"],R=["selected"],w=["value","disabled"],i=b({__name:"WpSelect",props:{modelValue:{},options:{},label:{},placeholder:{},hint:{},error:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:p}){const g=p;return(x,u)=>(l(),f(C,{label:e.label,required:e.required,hint:e.hint,error:e.error},{default:h(()=>[v("select",{class:S(["wp-select",{"wp-select--error":e.error}]),value:e.modelValue,disabled:e.disabled,onChange:u[0]||(u[0]=a=>g("update:modelValue",a.target.value))},[e.placeholder?(l(),m("option",{key:0,value:"",disabled:"",selected:!e.modelValue},c(e.placeholder),9,R)):y("",!0),(l(!0),m(V,null,q(e.options,a=>(l(),m("option",{key:a.value,value:a.value,disabled:a.disabled},c(a.label),9,w))),128))],42,W)]),_:1},8,["label","required","hint","error"]))}}),D=k(i,[["__scopeId","data-v-76ab6fe5"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"WpSelect",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"WpSelectOption"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpSelect/WpSelect.vue"]});const F={title:"Components/WpSelect",component:D,tags:["autodocs"]},r=[{value:"OUV",label:"Catégorie ouverte"},{value:"HSS",label:"HSS"},{value:"STSEM",label:"STS européen"}],o={args:{label:"Régime de vol",placeholder:"Choisir…",options:r}},s={args:{label:"Régime de vol",modelValue:"HSS",options:r}},t={args:{label:"Régime de vol",placeholder:"Choisir…",options:r,error:"Champ requis."}},n={args:{label:"Régime de vol",modelValue:"OUV",options:r,disabled:!0}},d={args:{label:"Régime de vol",placeholder:"Choisir…",options:r},parameters:{backgrounds:{default:"dark"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Régime de vol',
    placeholder: 'Choisir…',
    options
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Régime de vol',
    modelValue: 'HSS',
    options
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Régime de vol',
    placeholder: 'Choisir…',
    options,
    error: 'Champ requis.'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  }
}`,...d.parameters?.docs?.source}}};const H=["Default","Selected","WithError","Disabled","Dark"];export{d as Dark,o as Default,n as Disabled,s as Selected,t as WithError,H as __namedExportsOrder,F as default};
