import{W as n}from"./WpInput-AFCyZQtb.js";import"./iframe-DtFcQHRh.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/WpInput",component:n,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number"]}}},e={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"}},r={args:{label:"Zone de vol",placeholder:"48.8566° N, 2.3522° E",hint:"Format: latitude° N/S, longitude° E/W"}},a={args:{label:"Référence client",modelValue:"REF-INVALID",error:"Format invalide — utilisez REF-AAAA-XXXXX."}},o={args:{label:"Altitude maximale",modelValue:"120 m (limité par SORA)",disabled:!0}},s={args:{label:"Mot de passe",type:"password",modelValue:"S3cr3t!",placeholder:"••••••••"}},t={args:{label:"Nom de la mission",placeholder:"Ex: Inspection A47"},parameters:{backgrounds:{default:"dark"}}},l={args:{label:"Mot de passe",type:"password",modelValue:"S3cr3t!"},parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Zone de vol',
    placeholder: '48.8566° N, 2.3522° E',
    hint: 'Format: latitude° N/S, longitude° E/W'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Référence client',
    modelValue: 'REF-INVALID',
    error: 'Format invalide — utilisez REF-AAAA-XXXXX.'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Altitude maximale',
    modelValue: '120 m (limité par SORA)',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mot de passe',
    type: 'password',
    modelValue: 'S3cr3t!',
    placeholder: '••••••••'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nom de la mission',
    placeholder: 'Ex: Inspection A47'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mot de passe',
    type: 'password',
    modelValue: 'S3cr3t!'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div style="--wp-scheme: dark; --wp-color-input-bg: rgba(255,255,255,0.04); --wp-color-input-text: #fff; --wp-color-text-sub: #f2f2f7; --wp-color-border: rgba(255,255,255,0.08);"><story /></div>'
  })]
}`,...l.parameters?.docs?.source}}};const u=["Default","WithHint","WithError","Disabled","Password","Dark","PasswordOnDark"];export{t as Dark,e as Default,o as Disabled,s as Password,l as PasswordOnDark,a as WithError,r as WithHint,u as __namedExportsOrder,m as default};
