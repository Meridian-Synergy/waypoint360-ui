import{d as I,h as y,G as F,m as P,u as S,o as W}from"./iframe-DtFcQHRh.js";import{W as R}from"./WpInput-AFCyZQtb.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const $=/^0[1-9]\d{8}$/;function V(n,a="FR"){const e=String(n??"").replace(/[^\d+]/g,"");if(!e)return null;if(e.startsWith("+33")){const s=e.slice(3).replace(/^0/,"");return/^[1-9]\d{8}$/.test(s)?`+33${s}`:null}return e.startsWith("+")?/^\+\d{8,15}$/.test(e)?e:null:a.toUpperCase()!=="FR"?null:$.test(e)?`+33${e.slice(1)}`:/^[1-9]\d{8}$/.test(e)?`+33${e}`:null}function b(n){const a=String(n??"").trim();return!a.startsWith("+33")||a.length!==12?a:`0${a.slice(3)}`.replace(/(\d{2})(?=\d)/g,"$1 ").trim()}function A(n){let a=!1,e=[];function s(){if(!e.length)return;const t=e;e=[],setTimeout(()=>{for(const h of t)h()},0)}n.addEventListener("pointerdown",()=>{s(),a=!0},!0);const r=()=>{a=!1,s()};return n.addEventListener("pointerup",r,!0),n.addEventListener("pointercancel",r,!0),{runAfterPointerRelease(t){if(!a){t();return}e.push(t)},isPointerDown:()=>a}}let T=null;function x(n){if(typeof document>"u"){n();return}T??=A(document),T.runAfterPointerRelease(n)}const f=I({inheritAttrs:!1,__name:"WpPhoneInput",props:{modelValue:{default:null},label:{},placeholder:{},hint:{},disabled:{type:Boolean,default:!1},invalidMessage:{default:"This number does not look valid."},country:{default:"FR"}},emits:["update:modelValue"],setup(n,{emit:a}){const e=n,s=a,r=y(b(e.modelValue)),t=y(!1);F(()=>e.modelValue,l=>{V(r.value,e.country)!==l&&(r.value=b(l),t.value=!1)});function h(l){r.value=l,t.value&&g(!1)}let v=!1;function g(l){v=l,x(()=>{t.value=v})}function w(){const l=r.value.trim();if(!l){g(!1),s("update:modelValue",null);return}const o=V(l,e.country);g(!o),o&&(r.value=b(o),s("update:modelValue",o))}return(l,o)=>(W(),P(R,S({"model-value":r.value,type:"tel",inputmode:"tel",autocomplete:"tel",label:n.label,hint:n.hint,disabled:n.disabled,placeholder:n.placeholder||"06 12 34 56 78",error:t.value?n.invalidMessage:void 0},l.$attrs,{"onUpdate:modelValue":h,onBlur:w}),null,16,["model-value","label","hint","disabled","placeholder","error"]))}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"WpPhoneInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalidMessage",description:"Shown when the value cannot be read as a number. Already translated.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'This number does not look valid.'"}},{name:"country",description:`ISO-2 country the number is expected to belong to — the record's country,
or the person's.

⚠️ NOT A CONSTRAINT. An international number is accepted whatever this says:
a Swiss company near the border may publish a French number. It only tells
the parser how to read a LOCAL form, which carries no dialling code. Without
it, \`079 123 45 67\` was read as French and became someone else's number.`,required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'FR'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"null"}]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPhoneInput/WpPhoneInput.vue"]});const N={title:"Components/WpPhoneInput",component:f,tags:["autodocs"]},u={args:{label:"Téléphone"}},i={args:{label:"Téléphone",modelValue:"+33612345678"}},d={args:{label:"Téléphone fixe",modelValue:"+33120182536"}},c={args:{label:"Téléphone",modelValue:"+41791234567"}},m={args:{label:"Téléphone",modelValue:null,invalidMessage:"Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78"}},p={args:{label:"Téléphone",modelValue:"+33612345678",disabled:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+41791234567'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const D=["Default","Filled","Landline","Foreign","Invalid","Disabled"];export{u as Default,p as Disabled,i as Filled,c as Foreign,m as Invalid,d as Landline,D as __namedExportsOrder,N as default};
