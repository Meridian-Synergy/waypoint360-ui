import{d as w,h as V,G as S,m as A,u as F,o as L}from"./iframe-BwD7gIQG.js";import{W as P}from"./WpInput-DwCkmCGj.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const W=/^0[1-9]\d{8}$/;function T(n,a="FR"){const e=String(n??"").replace(/[^\d+]/g,"");if(!e)return null;if(e.startsWith("+33")){const l=e.slice(3).replace(/^0/,"");return/^[1-9]\d{8}$/.test(l)?`+33${l}`:null}return e.startsWith("+")?/^\+\d{8,15}$/.test(e)?e:null:a.toUpperCase()!=="FR"?null:W.test(e)?`+33${e.slice(1)}`:/^[1-9]\d{8}$/.test(e)?`+33${e}`:null}function y(n){const a=String(n??"").trim();return!a.startsWith("+33")||a.length!==12?a:`0${a.slice(3)}`.replace(/(\d{2})(?=\d)/g,"$1 ").trim()}function E(n){let a=!1,e=[],l=!1;function s(){if(!e.length)return;const r=e;e=[];for(const i of r)i()}const o=400;function b(){if(l)return;l=!0;const r=()=>{l&&(l=!1,a=!1,n.removeEventListener("click",r,!0),clearTimeout(i),setTimeout(s,0))},i=setTimeout(r,o);n.addEventListener("click",r,!0)}n.addEventListener("pointerdown",()=>{s(),a=!0},!0);const u=()=>b();return n.addEventListener("pointerup",u,!0),n.addEventListener("pointercancel",u,!0),{runAfterPointerRelease(r){if(!a){r();return}e.push(r)},isGestureActive:()=>a}}const I=typeof document>"u"?null:E(document);function R(n){if(!I){n();return}I.runAfterPointerRelease(n)}const v=w({inheritAttrs:!1,__name:"WpPhoneInput",props:{modelValue:{default:null},label:{},placeholder:{},hint:{},disabled:{type:Boolean,default:!1},invalidMessage:{default:"This number does not look valid."},country:{default:"FR"}},emits:["update:modelValue"],setup(n,{emit:a}){const e=n,l=a,s=V(y(e.modelValue)),o=V(!1);S(()=>e.modelValue,t=>{T(s.value,e.country)!==t&&(s.value=y(t),o.value=!1)});function b(t){s.value=t,o.value&&r(!1)}let u=!1;function r(t){u=t,R(()=>{o.value=u})}function i(){const t=s.value.trim();if(!t){r(!1),l("update:modelValue",null);return}const d=T(t,e.country);r(!d),d&&(s.value=y(d),l("update:modelValue",d))}return(t,d)=>(L(),A(P,F({"model-value":s.value,type:"tel",inputmode:"tel",autocomplete:"tel",label:n.label,hint:n.hint,disabled:n.disabled,placeholder:n.placeholder||"06 12 34 56 78",error:o.value?n.invalidMessage:void 0},t.$attrs,{"onUpdate:modelValue":b,onBlur:i}),null,16,["model-value","label","hint","disabled","placeholder","error"]))}});v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"WpPhoneInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalidMessage",description:"Shown when the value cannot be read as a number. Already translated.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'This number does not look valid.'"}},{name:"country",description:`ISO-2 country the number is expected to belong to — the record's country,
or the person's.

⚠️ NOT A CONSTRAINT. An international number is accepted whatever this says:
a Swiss company near the border may publish a French number. It only tells
the parser how to read a LOCAL form, which carries no dialling code. Without
it, \`079 123 45 67\` was read as French and became someone else's number.`,required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'FR'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"null"}]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPhoneInput/WpPhoneInput.vue"]});const k={title:"Components/WpPhoneInput",component:v,tags:["autodocs"]},c={args:{label:"Téléphone"}},m={args:{label:"Téléphone",modelValue:"+33612345678"}},p={args:{label:"Téléphone fixe",modelValue:"+33120182536"}},f={args:{label:"Téléphone",modelValue:"+41791234567"}},h={args:{label:"Téléphone",modelValue:null,invalidMessage:"Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78"}},g={args:{label:"Téléphone",modelValue:"+33612345678",disabled:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+33612345678'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone fixe',
    modelValue: '+33120182536'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+41791234567'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: null,
    invalidMessage: 'Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Téléphone',
    modelValue: '+33612345678',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};const q=["Default","Filled","Landline","Foreign","Invalid","Disabled"];export{c as Default,g as Disabled,m as Filled,f as Foreign,h as Invalid,p as Landline,q as __namedExportsOrder,k as default};
