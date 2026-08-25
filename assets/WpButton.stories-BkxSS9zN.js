import{W as u}from"./WpButton--1yZ0g5j.js";import"./iframe-BL0Aj-cL.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Components/WpButton",component:u,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","cta","critical","accent","danger","ghost","soft","outline"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{label:"Démarrer",variant:"primary"}},e={args:{label:"En savoir plus",variant:"secondary"}},n={args:{label:"Créer un compte",variant:"cta"}},t={args:{label:"Supprimer",variant:"critical"}},s={args:{label:"Indisponible",disabled:!0}},o={args:{label:"Démarrer",variant:"primary",dark:!0},parameters:{backgrounds:{default:"navy"}}},i={args:{label:"Créer un compte",variant:"cta"},parameters:{backgrounds:{default:"dark"}}},c={args:{label:"Parrainage",variant:"outline"}},l={args:{label:"Parrainage",variant:"outline",dark:!0},parameters:{backgrounds:{default:"navy"}}},p={args:{label:"Aller au parrainage",variant:"outline",as:"a"},render:d=>({components:{WpButton:u},setup:()=>({args:d}),template:'<WpButton v-bind="args" href="#" />'})},r={render:()=>({components:{WpButton:u},template:`
      <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center">
        <WpButton label="Enregistrer" variant="accent" />
        <WpButton label="Supprimer"   variant="danger" />
        <WpButton label="Annuler"     variant="ghost" />
        <WpButton label="Retour"      variant="soft" />
        <WpButton label="Enregistrer" variant="accent" size="sm" />
      </div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Démarrer',
    variant: 'primary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'En savoir plus',
    variant: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Créer un compte',
    variant: 'cta'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Supprimer',
    variant: 'critical'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indisponible',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Créer un compte',
    variant: 'cta'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Parrainage',
    variant: 'outline'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpButton
    },
    template: \`
      <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center">
        <WpButton label="Enregistrer" variant="accent" />
        <WpButton label="Supprimer"   variant="danger" />
        <WpButton label="Annuler"     variant="ghost" />
        <WpButton label="Retour"      variant="soft" />
        <WpButton label="Enregistrer" variant="accent" size="sm" />
      </div>\`
  })
}`,...r.parameters?.docs?.source},description:{story:"Les variantes reprises de l'application : `accent` (bleu de marque, constant),\n`danger` (destructif discret, contour) et `ghost` (neutre en retrait).\n\n⚠️ À REGARDER DANS LES DEUX THÈMES. `danger` et `ghost` tirent leur couleur des\njetons du consommateur : ce sont exactement les variantes qui disparaissent\nquand on ne les vérifie que sur fond clair.",...r.parameters?.docs?.description}}};const f=["Primary","Secondary","CTA","Critical","Disabled","Dark","CTADark","Outline","OutlineDark","AsLink","VariantesApplication"];export{p as AsLink,n as CTA,i as CTADark,t as Critical,o as Dark,s as Disabled,c as Outline,l as OutlineDark,a as Primary,e as Secondary,r as VariantesApplication,f as __namedExportsOrder,y as default};
