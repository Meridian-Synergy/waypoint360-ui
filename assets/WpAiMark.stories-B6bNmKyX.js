import{d as f,e as d,f as a,t as u,g,r as k,n as b,o as c}from"./iframe-CvePbnE_.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const x=["title","tabindex"],h={class:"wp-ai-mark__label"},y={key:0,class:"wp-ai-mark__sr"},s=f({__name:"WpAiMark",props:{label:{default:"WP360 AI"},hint:{default:""},variant:{default:"badge"}},setup(e){return(m,p)=>(c(),d("span",{class:b(["wp-ai-mark",`wp-ai-mark--${e.variant}`]),title:e.hint||void 0,tabindex:e.variant==="badge"&&e.hint?0:void 0},[p[0]||(p[0]=a("svg",{class:"wp-ai-mark__spark",viewBox:"0 0 16 16","aria-hidden":"true",focusable:"false"},[a("path",{d:"M8 1.5l1.6 4.9 4.9 1.6-4.9 1.6L8 14.5l-1.6-4.9L1.5 8l4.9-1.6z",fill:"currentColor"}),a("path",{d:"M13 1l.5 1.5L15 3l-1.5.5L13 5l-.5-1.5L11 3l1.5-.5z",fill:"currentColor"})],-1)),a("span",h,u(e.label),1),e.hint?(c(),d("span",y,u(e.hint),1)):g("",!0),k(m.$slots,"default",{},void 0,!0)],10,x))}}),o=v(s,[["__scopeId","data-v-8f995fe7"]]);s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"WpAiMark",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'WP360 AI'"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"badge"'},{name:'"inline"'}]},defaultValue:{func:!1,value:"'badge'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpAiMark/WpAiMark.vue"]});const T={title:"Components/WpAiMark",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["badge","inline"]}}},l="Texte rédigé par WP360 AI : relisez-le avant de l'utiliser.",n={args:{hint:l}},t={args:{variant:"inline",label:"Traduit par WP360 AI depuis : ukrainien",hint:"Traduction automatique par WP360 AI."}},r={render:()=>({components:{WpAiMark:o},setup:()=>({HINT:l}),template:`
      <div style="max-width: 560px; font-family: var(--wp-font-body, Barlow, sans-serif)">
        <p style="display: flex; align-items: center; gap: 10px; margin: 0; font-weight: 600">
          2.3 Organisation de l'exploitant <WpAiMark :hint="HINT" />
        </p>
        <p style="line-height: 1.55">L'exploitant Drones Exemple SAS désigne un responsable des opérations, joignable pendant toute la durée du vol.</p>
        <WpAiMark variant="inline" label="Traduit par WP360 AI depuis : ukrainien">
          <button type="button" style="background: none; border: 0; padding: 0; font: inherit; color: inherit; text-decoration: underline">Voir l'original</button>
        </WpAiMark>
      </div>`})},i={render:()=>({components:{WpAiMark:o},setup:()=>({HINT:l}),template:`
      <div data-theme="dark" style="display: flex; gap: 16px; align-items: center; padding: 12px; --wp-color-surface: #1B2B56; --wp-color-text-sub: #f2f2f7">
        <WpAiMark :hint="HINT" />
        <WpAiMark variant="inline" label="Traduit par WP360 AI" />
      </div>`}),parameters:{backgrounds:{default:"navy"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    hint: HINT
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'inline',
    label: 'Traduit par WP360 AI depuis : ukrainien',
    hint: 'Traduction automatique par WP360 AI.'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpAiMark
    },
    setup: () => ({
      HINT
    }),
    template: \`
      <div style="max-width: 560px; font-family: var(--wp-font-body, Barlow, sans-serif)">
        <p style="display: flex; align-items: center; gap: 10px; margin: 0; font-weight: 600">
          2.3 Organisation de l'exploitant <WpAiMark :hint="HINT" />
        </p>
        <p style="line-height: 1.55">L'exploitant Drones Exemple SAS désigne un responsable des opérations, joignable pendant toute la durée du vol.</p>
        <WpAiMark variant="inline" label="Traduit par WP360 AI depuis : ukrainien">
          <button type="button" style="background: none; border: 0; padding: 0; font: inherit; color: inherit; text-decoration: underline">Voir l'original</button>
        </WpAiMark>
      </div>\`
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpAiMark
    },
    setup: () => ({
      HINT
    }),
    template: \`
      <div data-theme="dark" style="display: flex; gap: 16px; align-items: center; padding: 12px; --wp-color-surface: #1B2B56; --wp-color-text-sub: #f2f2f7">
        <WpAiMark :hint="HINT" />
        <WpAiMark variant="inline" label="Traduit par WP360 AI" />
      </div>\`
  }),
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}`,...i.parameters?.docs?.source}}};const w=["Badge","Inline","NextToText","Dark"];export{n as Badge,i as Dark,t as Inline,r as NextToText,w as __namedExportsOrder,T as default};
