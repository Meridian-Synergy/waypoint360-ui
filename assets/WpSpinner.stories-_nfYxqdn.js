import{W as s}from"./WpSpinner-C1Z3gyfl.js";import"./iframe-Bf3qrSCG.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"Components/WpSpinner",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The single loading indicator for all Waypoint360 surfaces. Self-contained (ships its own keyframes), inherits `currentColor`, and respects prefers-reduced-motion. Decorative by default — pass `label` to announce it as a live status. Use it inside the canonical `.empty-state` loading block."}}},argTypes:{size:{control:{type:"number"}},label:{control:{type:"text"}}}},e={args:{size:32}},n={args:{size:32,label:"Chargement…"}},r={render:()=>({components:{WpSpinner:s},template:`
      <div style="display:flex; align-items:center; gap:24px;">
        <WpSpinner :size="16" />
        <WpSpinner :size="24" />
        <WpSpinner :size="32" />
        <WpSpinner :size="48" />
      </div>
    `})},t={render:()=>({components:{WpSpinner:s},template:`
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:56px 24px; text-align:center;">
        <div style="opacity:0.5;"><WpSpinner /></div>
        <p style="font-size:0.9375rem; font-weight:700; margin:0;">Chargement…</p>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32,
    label: 'Chargement…'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpSpinner
    },
    template: \`
      <div style="display:flex; flex-direction:column; align-items:center; gap:12px; padding:56px 24px; text-align:center;">
        <div style="opacity:0.5;"><WpSpinner /></div>
        <p style="font-size:0.9375rem; font-weight:700; margin:0;">Chargement…</p>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};const l=["Default","WithLabel","Sizes","LoadingBlock"];export{e as Default,t as LoadingBlock,r as Sizes,n as WithLabel,l as __namedExportsOrder,c as default};
