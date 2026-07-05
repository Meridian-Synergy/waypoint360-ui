import{W as n}from"./WpField-CrKCqj-B.js";import"./iframe-CNhceRN4.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/WpField",component:n,tags:["autodocs"]},s=o=>({components:{WpField:n},setup:()=>({args:o}),template:'<WpField v-bind="args"><input style="width:100%;padding:8px 16px;border:1.5px solid #D5D9E4;border-radius:8px" placeholder="Contrôle personnalisé" /></WpField>'}),r={render:s,args:{label:"Champ personnalisé",hint:"Wrapper réutilisable (label + hint/erreur)."}},e={render:s,args:{label:"Champ requis",required:!0}},a={render:s,args:{label:"Champ",error:"Valeur invalide."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    label: 'Champ personnalisé',
    hint: 'Wrapper réutilisable (label + hint/erreur).'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    label: 'Champ requis',
    required: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    label: 'Champ',
    error: 'Valeur invalide.'
  }
}`,...a.parameters?.docs?.source}}};const u=["Default","Required","WithError"];export{r as Default,e as Required,a as WithError,u as __namedExportsOrder,d as default};
