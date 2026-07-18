import{W as e}from"./WpSpinner-Dhv3JEoj.js";import"./iframe-BV8YQoQV.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Components/WpSpinner",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"The single loading indicator for all Waypoint360 surfaces: a ring of brand-blue (sky) dots fading around the circle as it rotates. Theme-safe — the trail fades via opacity, not a fixed light/dark colour, so it reads the same on dark and light backgrounds. Self-contained (ships its own keyframes) and respects prefers-reduced-motion. Decorative by default — pass `label` to announce it as a live status."}}},argTypes:{size:{control:{type:"number"}},label:{control:{type:"text"}}}},r={args:{size:32}},n={args:{size:32,label:"Chargement…"}},a={render:()=>({components:{WpSpinner:e},template:`
      <div style="display:flex; align-items:center; gap:24px;">
        <WpSpinner :size="16" />
        <WpSpinner :size="24" />
        <WpSpinner :size="32" />
        <WpSpinner :size="48" />
      </div>
    `})},s={parameters:{backgrounds:{default:"light"}},render:()=>({components:{WpSpinner:e},template:'<WpSpinner :size="48" />'})},t={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{WpSpinner:e},template:'<WpSpinner :size="48" />'})},p={parameters:{backgrounds:{default:"navy"}},render:()=>({components:{WpSpinner:e},template:'<WpSpinner :size="48" />'})},o={render:()=>({components:{WpSpinner:e},template:`
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:56px 24px; text-align:center;">
        <WpSpinner :size="40" />
        <p style="font-size:0.9375rem; font-weight:700; margin:0;">Chargement…</p>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32,
    label: 'Chargement…'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpSpinner
    },
    template: \`
      <div style="display:flex; align-items:center; gap:24px;">
        <WpSpinner :size="16" />
        <WpSpinner :size="24" />
        <WpSpinner :size="32" />
        <WpSpinner :size="48" />
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  render: () => ({
    components: {
      WpSpinner
    },
    template: '<WpSpinner :size="48" />'
  })
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      WpSpinner
    },
    template: '<WpSpinner :size="48" />'
  })
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  },
  render: () => ({
    components: {
      WpSpinner
    },
    template: '<WpSpinner :size="48" />'
  })
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpSpinner
    },
    template: \`
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:56px 24px; text-align:center;">
        <WpSpinner :size="40" />
        <p style="font-size:0.9375rem; font-weight:700; margin:0;">Chargement…</p>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const g=["Default","WithLabel","Sizes","OnLight","OnDark","OnNavy","LoadingBlock"];export{r as Default,o as LoadingBlock,t as OnDark,s as OnLight,p as OnNavy,a as Sizes,n as WithLabel,g as __namedExportsOrder,l as default};
