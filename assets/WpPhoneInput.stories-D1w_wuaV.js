import{d as V,h as g,D as T,m as I,u as w,o as F}from"./iframe-BL0Aj-cL.js";import{W as S}from"./WpInput-CAU2ts9-.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const W=/^0[1-9]\d{8}$/;function b(a,l="FR"){const e=String(a??"").replace(/[^\d+]/g,"");if(!e)return null;if(e.startsWith("+33")){const s=e.slice(3).replace(/^0/,"");return/^[1-9]\d{8}$/.test(s)?`+33${s}`:null}return e.startsWith("+")?/^\+\d{8,15}$/.test(e)?e:null:l.toUpperCase()!=="FR"?null:W.test(e)?`+33${e.slice(1)}`:/^[1-9]\d{8}$/.test(e)?`+33${e}`:null}function h(a){const l=String(a??"").trim();return!l.startsWith("+33")||l.length!==12?l:`0${l.slice(3)}`.replace(/(\d{2})(?=\d)/g,"$1 ").trim()}const f=V({inheritAttrs:!1,__name:"WpPhoneInput",props:{modelValue:{default:null},label:{},placeholder:{},hint:{},disabled:{type:Boolean,default:!1},invalidMessage:{default:"This number does not look valid."},country:{default:"FR"}},emits:["update:modelValue"],setup(a,{emit:l}){const e=a,s=l,r=g(h(e.modelValue)),t=g(!1);T(()=>e.modelValue,n=>{b(r.value,e.country)!==n&&(r.value=h(n),t.value=!1)});function v(n){r.value=n,t.value&&(t.value=!1)}function y(){const n=r.value.trim();if(!n){t.value=!1,s("update:modelValue",null);return}const o=b(n,e.country);t.value=!o,o&&(r.value=h(o),s("update:modelValue",o))}return(n,o)=>(F(),I(S,w({"model-value":r.value,type:"tel",inputmode:"tel",autocomplete:"tel",label:a.label,hint:a.hint,disabled:a.disabled,placeholder:a.placeholder||"06 12 34 56 78",error:t.value?a.invalidMessage:void 0},n.$attrs,{"onUpdate:modelValue":v,onBlur:y}),null,16,["model-value","label","hint","disabled","placeholder","error"]))}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"WpPhoneInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalidMessage",description:"Shown when the value cannot be read as a number. Already translated.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'This number does not look valid.'"}},{name:"country",description:`ISO-2 country the number is expected to belong to — the record's country,
or the person's.

⚠️ NOT A CONSTRAINT. An international number is accepted whatever this says:
a Swiss company near the border may publish a French number. It only tells
the parser how to read a LOCAL form, which carries no dialling code. Without
it, \`079 123 45 67\` was read as French and became someone else's number.`,required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'FR'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"null"}]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPhoneInput/WpPhoneInput.vue"]});const N={title:"Components/WpPhoneInput",component:f,tags:["autodocs"]},u={args:{label:"Téléphone"}},i={args:{label:"Téléphone",modelValue:"+33612345678"}},d={args:{label:"Téléphone fixe",modelValue:"+33120182536"}},m={args:{label:"Téléphone",modelValue:"+41791234567"}},c={args:{label:"Téléphone",modelValue:null,invalidMessage:"Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78"}},p={args:{label:"Téléphone",modelValue:"+33612345678",disabled:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+33612345678'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone fixe',
    modelValue: '+33120182536'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+41791234567'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: null,
    invalidMessage: 'Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+33612345678',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};const P=["Default","Filled","Landline","Foreign","Invalid","Disabled"];export{u as Default,p as Disabled,i as Filled,m as Foreign,c as Invalid,d as Landline,P as __namedExportsOrder,N as default};
