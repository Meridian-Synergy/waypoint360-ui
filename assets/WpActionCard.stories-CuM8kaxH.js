import{W as i}from"./WpActionCard-Bhk38_TS.js";import"./iframe-Bf3qrSCG.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const s={title:"Components/WpActionCard",component:i,tags:["autodocs"],argTypes:{tone:{control:"select",options:["neutral","warning","danger"]}}},e={args:{title:"Renvoyer l'invitation",description:"Renvoyer un email d'invitation à cet utilisateur.",tone:"neutral",actionLabel:"Renvoyer l'invitation"}},r={args:{title:"Désactiver le compte",description:"L'utilisateur ne pourra plus se connecter. Son siège sera libéré. Réversible.",tone:"warning",actionLabel:"Désactiver",confirm:!0,confirmPrompt:"Désactiver cet utilisateur ?",confirmLabel:"Confirmer",cancelLabel:"Annuler"}},t={args:{title:"Supprimer le compte",description:"Cette action est irréversible. Le compte sera définitivement supprimé.",tone:"danger",actionLabel:"Supprimer",confirm:!0,confirmPrompt:"Supprimer définitivement ?",confirmLabel:"Confirmer",cancelLabel:"Annuler"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Renvoyer l'invitation",
    description: "Renvoyer un email d'invitation à cet utilisateur.",
    tone: 'neutral',
    actionLabel: "Renvoyer l'invitation"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Désactiver le compte',
    description: "L'utilisateur ne pourra plus se connecter. Son siège sera libéré. Réversible.",
    tone: 'warning',
    actionLabel: 'Désactiver',
    confirm: true,
    confirmPrompt: 'Désactiver cet utilisateur ?',
    confirmLabel: 'Confirmer',
    cancelLabel: 'Annuler'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Supprimer le compte',
    description: 'Cette action est irréversible. Le compte sera définitivement supprimé.',
    tone: 'danger',
    actionLabel: 'Supprimer',
    confirm: true,
    confirmPrompt: 'Supprimer définitivement ?',
    confirmLabel: 'Confirmer',
    cancelLabel: 'Annuler'
  }
}`,...t.parameters?.docs?.source}}};const m=["Neutral","WarningWithConfirm","DangerWithConfirm"];export{t as DangerWithConfirm,e as Neutral,r as WarningWithConfirm,m as __namedExportsOrder,s as default};
