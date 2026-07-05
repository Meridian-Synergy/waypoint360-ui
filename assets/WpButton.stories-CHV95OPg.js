import{W as p}from"./WpButton-CzbkrrHc.js";import"./iframe-DCNAOP_8.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Components/WpButton",component:p,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","cta","critical","outline"]},size:{control:"select",options:["sm","md","lg"]}}},r={args:{label:"Démarrer",variant:"primary"}},a={args:{label:"En savoir plus",variant:"secondary"}},e={args:{label:"Créer un compte",variant:"cta"}},s={args:{label:"Supprimer",variant:"critical"}},n={args:{label:"Indisponible",disabled:!0}},t={args:{label:"Démarrer",variant:"primary",dark:!0},parameters:{backgrounds:{default:"navy"}}},o={args:{label:"Créer un compte",variant:"cta"},parameters:{backgrounds:{default:"dark"}}},c={args:{label:"Parrainage",variant:"outline"}},i={args:{label:"Parrainage",variant:"outline",dark:!0},parameters:{backgrounds:{default:"navy"}}},l={args:{label:"Aller au parrainage",variant:"outline",as:"a"},render:m=>({components:{WpButton:p},setup:()=>({args:m}),template:'<WpButton v-bind="args" href="#" />'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Démarrer',
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'En savoir plus',
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Créer un compte',
    variant: 'cta'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Supprimer',
    variant: 'critical'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indisponible',
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Démarrer',
    variant: 'primary',
    dark: true
  },
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Créer un compte',
    variant: 'cta'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Parrainage',
    variant: 'outline'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Parrainage',
    variant: 'outline',
    dark: true
  },
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Aller au parrainage',
    variant: 'outline',
    as: 'a'
  },
  render: args => ({
    components: {
      WpButton
    },
    setup: () => ({
      args
    }),
    template: '<WpButton v-bind="args" href="#" />'
  })
}`,...l.parameters?.docs?.source}}};const k=["Primary","Secondary","CTA","Critical","Disabled","Dark","CTADark","Outline","OutlineDark","AsLink"];export{l as AsLink,e as CTA,o as CTADark,s as Critical,t as Dark,n as Disabled,c as Outline,i as OutlineDark,r as Primary,a as Secondary,k as __namedExportsOrder,v as default};
