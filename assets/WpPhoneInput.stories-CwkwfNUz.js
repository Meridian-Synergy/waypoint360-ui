import{d as $,h as V,J as I,m as w,u as A,o as L}from"./iframe-BIuP3aia.js";import{W as k}from"./WpInput-BQ3KHxE9.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E=/^0[1-9]\d{8}$/,F={ES:{code:"34",trunk:!1,nsn:/^[6-9]\d{8}$/},BE:{code:"32",trunk:!0,nsn:/^(4[5-9]\d{7}|[1-9]\d{7})$/},CH:{code:"41",trunk:!0,nsn:/^[1-9]\d{8}$/},NL:{code:"31",trunk:!0,nsn:/^[1-9]\d{8}$/},DE:{code:"49",trunk:!0,nsn:/^[1-9]\d{5,12}$/}};function T(n,t="FR"){const e=String(n??"").replace(/[^\d+]/g,"");if(!e)return null;if(e.startsWith("+33")){const a=e.slice(3).replace(/^0/,"");return/^[1-9]\d{8}$/.test(a)?`+33${a}`:null}if(e.startsWith("+"))return/^\+\d{8,15}$/.test(e)?e:null;const s=t.toUpperCase();if(s!=="FR"){const a=F[s];if(!a)return null;const o=a.trunk?e.startsWith("0")?e.slice(1):null:e;return o&&a.nsn.test(o)?`+${a.code}${o}`:null}return E.test(e)?`+33${e.slice(1)}`:/^[1-9]\d{8}$/.test(e)?`+33${e}`:null}function y(n){const t=String(n??"").trim();return!t.startsWith("+33")||t.length!==12?t:`0${t.slice(3)}`.replace(/(\d{2})(?=\d)/g,"$1 ").trim()}function P(n){let t=!1,e=[],s=!1;function a(){if(!e.length)return;const r=e;e=[];for(const i of r)i()}const o=400;function b(){if(s)return;s=!0;const r=()=>{s&&(s=!1,t=!1,n.removeEventListener("click",r,!0),clearTimeout(i),setTimeout(a,0))},i=setTimeout(r,o);n.addEventListener("click",r,!0)}n.addEventListener("pointerdown",()=>{a(),t=!0},!0);const u=()=>b();return n.addEventListener("pointerup",u,!0),n.addEventListener("pointercancel",u,!0),{runAfterPointerRelease(r){if(!t){r();return}e.push(r)},isGestureActive:()=>t}}const S=typeof document>"u"?null:P(document);function W(n){if(!S){n();return}S.runAfterPointerRelease(n)}const v=$({inheritAttrs:!1,__name:"WpPhoneInput",props:{modelValue:{default:null},label:{},placeholder:{},hint:{},disabled:{type:Boolean,default:!1},invalidMessage:{default:"This number does not look valid."},country:{default:"FR"}},emits:["update:modelValue"],setup(n,{emit:t}){const e=n,s=t,a=V(y(e.modelValue)),o=V(!1);I(()=>e.modelValue,l=>{T(a.value,e.country)!==l&&(a.value=y(l),o.value=!1)});function b(l){a.value=l,o.value&&r(!1)}let u=!1;function r(l){u=l,W(()=>{o.value=u})}function i(){const l=a.value.trim();if(!l){r(!1),s("update:modelValue",null);return}const d=T(l,e.country);r(!d),d&&(a.value=y(d),s("update:modelValue",d))}return(l,d)=>(L(),w(k,A({"model-value":a.value,type:"tel",inputmode:"tel",autocomplete:"tel",label:n.label,hint:n.hint,disabled:n.disabled,placeholder:n.placeholder||"06 12 34 56 78",error:o.value?n.invalidMessage:void 0},l.$attrs,{"onUpdate:modelValue":b,onBlur:i}),null,16,["model-value","label","hint","disabled","placeholder","error"]))}});v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"WpPhoneInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalidMessage",description:"Shown when the value cannot be read as a number. Already translated.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'This number does not look valid.'"}},{name:"country",description:`ISO-2 country the number is expected to belong to — the record's country,
or the person's.

⚠️ NOT A CONSTRAINT. An international number is accepted whatever this says:
a Swiss company near the border may publish a French number. It only tells
the parser how to read a LOCAL form, which carries no dialling code. Without
it, \`079 123 45 67\` was read as French and became someone else's number.`,required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'FR'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"null"}]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPhoneInput/WpPhoneInput.vue"]});const q={title:"Components/WpPhoneInput",component:v,tags:["autodocs"]},c={args:{label:"Téléphone"}},m={args:{label:"Téléphone",modelValue:"+33612345678"}},p={args:{label:"Téléphone fixe",modelValue:"+33120182536"}},f={args:{label:"Téléphone",modelValue:"+41791234567"}},h={args:{label:"Téléphone",modelValue:null,invalidMessage:"Ce numéro ne semble pas valide. Exemple : 06 12 34 56 78"}},g={args:{label:"Téléphone",modelValue:"+33612345678",disabled:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const O=["Default","Filled","Landline","Foreign","Invalid","Disabled"];export{c as Default,g as Disabled,m as Filled,f as Foreign,h as Invalid,p as Landline,O as __namedExportsOrder,q as default};
