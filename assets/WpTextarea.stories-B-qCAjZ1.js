import{d as q,m as L,o as m,w as k,f as C,n as b,e as h,k as x,t as d,F as D,g as y,j as v}from"./iframe-BwD7gIQG.js";import{W as N}from"./WpField-wP6CusbF.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const A=.8;function T(e,a){return a<=0?"ok":e>=a?"max":e/a>=A?"warn":"ok"}const S=["placeholder","value","disabled","rows","maxlength"],u=q({__name:"WpTextarea",props:{modelValue:{},label:{},placeholder:{},hint:{},error:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rows:{default:3},maxlength:{},limitLabel:{}},emits:["update:modelValue"],setup(e,{emit:a}){const c=e,w=a,p=v(()=>(c.modelValue??"").length),g=v(()=>T(p.value,c.maxlength??0));return(E,f)=>(m(),L(N,{label:e.label,required:e.required,hint:e.hint,error:e.error},{default:k(()=>[C("textarea",{class:b(["wp-textarea",{"wp-textarea--error":e.error}]),placeholder:e.placeholder,value:e.modelValue,disabled:e.disabled,rows:e.rows,maxlength:e.maxlength,onInput:f[0]||(f[0]=V=>w("update:modelValue",V.target.value))},null,42,S),e.maxlength?(m(),h("span",{key:0,class:b(["wp-textarea__count",`wp-textarea__count--${g.value}`]),"aria-live":"polite"},[x(d(p.value)+"/"+d(e.maxlength),1),g.value==="max"&&e.limitLabel?(m(),h(D,{key:0},[x(" — "+d(e.limitLabel),1)],64)):y("",!0)],2)):y("",!0)]),_:1},8,["label","required","hint","error"]))}}),B=W(u,[["__scopeId","data-v-d72ca25c"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"WpTextarea",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"maxlength",description:"Pose la limite de saisie ET affiche le compteur.",required:!1,type:{name:"number"}},{name:"limitLabel",description:`Texte du palier haut, dans la langue du consommateur — « limite atteinte ».

⚠️ Sans lui, il ne reste que la couleur : elle échoue au critère WCAG 1.4.1
et n'existe pas pour un lecteur d'écran. Le composant ne peut pas traduire
à la place de l'application, mais il peut refuser de faire semblant.`,required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpTextarea/WpTextarea.vue"]});const R={title:"Components/WpTextarea",component:B,tags:["autodocs"]},r={args:{label:"Autres informations utiles",placeholder:"Nombre de vols, durée moyenne…"}},t={args:{label:"Notes",modelValue:"...",error:"Champ requis."}},l={args:{label:"Notes",modelValue:"Lecture seule",disabled:!0}},o={args:{label:"Description",maxlength:500,modelValue:"Trois lignes de présentation."}},s={args:{label:"Description",maxlength:100,modelValue:"x".repeat(85)}},n={args:{label:"Description",maxlength:100,modelValue:"x".repeat(100),limitLabel:"limite atteinte"}},i={args:{label:"Autres informations utiles",placeholder:"Nombre de vols, durée moyenne…"},parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Autres informations utiles',
    placeholder: 'Nombre de vols, durée moyenne…'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    modelValue: '...',
    error: 'Champ requis.'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    modelValue: 'Lecture seule',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    maxlength: 500,
    modelValue: 'Trois lignes de présentation.'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    maxlength: 100,
    modelValue: 'x'.repeat(85)
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // ⚠️ Le texte accompagne la couleur : elle seule ne dit rien à un lecteur
  // d'écran, ni à qui ne distingue pas le rouge de l'orange.
  args: {
    label: 'Description',
    maxlength: 100,
    modelValue: 'x'.repeat(100),
    limitLabel: 'limite atteinte'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Autres informations utiles',
    placeholder: 'Nombre de vols, durée moyenne…'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'
  })]
}`,...i.parameters?.docs?.source}}};const j=["Default","WithError","Disabled","AvecCompteur","CompteurProcheDeLaLimite","CompteurALaLimite","Dark"];export{o as AvecCompteur,n as CompteurALaLimite,s as CompteurProcheDeLaLimite,i as Dark,r as Default,l as Disabled,t as WithError,j as __namedExportsOrder,R as default};
