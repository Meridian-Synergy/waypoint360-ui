import{d as T,h as g,D as y,l as I,s as W,o as $}from"./iframe-axVENdpB.js";import{W as S}from"./WpInput-CrlxjkcZ.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w=/^0[1-9]\d{8}$/;function v(a){const e=String(a??"").replace(/[^\d+]/g,"");if(!e)return null;if(e.startsWith("+33")){const s=e.slice(3).replace(/^0/,"");return/^[1-9]\d{8}$/.test(s)?`+33${s}`:null}return e.startsWith("+")?/^\+\d{8,15}$/.test(e)?e:null:w.test(e)?`+33${e.slice(1)}`:/^[1-9]\d{8}$/.test(e)?`+33${e}`:null}function f(a){const e=String(a??"").trim();return!e.startsWith("+33")||e.length!==12?e:`0${e.slice(3)}`.replace(/(\d{2})(?=\d)/g,"$1 ").trim()}const c=T({inheritAttrs:!1,__name:"WpPhoneInput",props:{modelValue:{default:null},label:{},placeholder:{},hint:{},disabled:{type:Boolean,default:!1},invalidMessage:{default:"This number does not look valid."}},emits:["update:modelValue"],setup(a,{emit:e}){const s=a,h=e,n=g(f(s.modelValue)),r=g(!1);y(()=>s.modelValue,l=>{v(n.value)!==l&&(n.value=f(l),r.value=!1)});function b(l){n.value=l,r.value&&(r.value=!1)}function V(){const l=n.value.trim();if(!l){r.value=!1,h("update:modelValue",null);return}const t=v(l);r.value=!t,t&&(n.value=f(t),h("update:modelValue",t))}return(l,t)=>($(),I(S,W({"model-value":n.value,type:"tel",inputmode:"tel",autocomplete:"tel",label:a.label,hint:a.hint,disabled:a.disabled,placeholder:a.placeholder||"06 12 34 56 78",error:r.value?a.invalidMessage:void 0},l.$attrs,{"onUpdate:modelValue":b,onBlur:V}),null,16,["model-value","label","hint","disabled","placeholder","error"]))}});c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"WpPhoneInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalidMessage",description:"Shown when the value cannot be read as a number. Already translated.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'This number does not look valid.'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"null"}]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPhoneInput/WpPhoneInput.vue"]});const k={title:"Components/WpPhoneInput",component:c,tags:["autodocs"]},o={args:{label:"Téléphone"}},u={args:{label:"Téléphone",modelValue:"+33612345678"}},d={args:{label:"Téléphone fixe",modelValue:"+33120182536"}},i={args:{label:"Téléphone",modelValue:"+41791234567"}},m={args:{label:"Téléphone",modelValue:null,invalidMessage:"Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78"}},p={args:{label:"Téléphone",modelValue:"+33612345678",disabled:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone'
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+33612345678'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone fixe',
    modelValue: '+33120182536'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+41791234567'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: null,
    invalidMessage: 'Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+33612345678',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};const D=["Default","Filled","Landline","Foreign","Invalid","Disabled"];export{o as Default,p as Disabled,u as Filled,i as Foreign,m as Invalid,d as Landline,D as __namedExportsOrder,k as default};
