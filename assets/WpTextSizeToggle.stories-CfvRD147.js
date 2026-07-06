import{d as w,m as _,e as b,f as o,i as x,h as k,q as A,o as y}from"./iframe-evp_nOLu.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const W=["aria-label"],N=["aria-label","title","disabled"],C=["aria-label","title","aria-pressed"],D=["aria-label","title","disabled"],l=1,m=w({__name:"WpTextSizeToggle",props:{decreaseLabel:{default:"Decrease text size"},resetLabel:{default:"Reset text size"},increaseLabel:{default:"Increase text size"},storageKey:{default:"wp-font-scale"},compact:{type:Boolean,default:!1}},emits:["change"],setup(e,{emit:h}){const g=e,z=h,r=[.9,1,1.15,1.3],a=A(l);function n(s){a.value=s;const t=r[s];document.documentElement.style.setProperty("--wp-font-scale",String(t));try{localStorage.setItem(g.storageKey,String(t))}catch{}z("change",t)}function v(){a.value>0&&n(a.value-1)}function S(){a.value<r.length-1&&n(a.value+1)}function T(){n(l)}return _(()=>{let s=null;try{s=localStorage.getItem(g.storageKey)}catch{}const t=s?r.indexOf(Number(s)):-1;n(t>=0?t:l)}),(s,t)=>(y(),b("div",{class:"wp-text-size",role:"group","aria-label":e.resetLabel},[o("button",{type:"button",class:"wp-text-size__btn","aria-label":e.decreaseLabel,title:e.decreaseLabel,disabled:a.value===0,onClick:v},[...t[0]||(t[0]=[x(" A",-1),o("span",{class:"wp-text-size__sign","aria-hidden":"true"},"−",-1)])],8,N),e.compact?k("",!0):(y(),b("button",{key:0,type:"button",class:"wp-text-size__btn wp-text-size__btn--reset","aria-label":e.resetLabel,title:e.resetLabel,"aria-pressed":a.value===l,onClick:T},"A",8,C)),o("button",{type:"button",class:"wp-text-size__btn","aria-label":e.increaseLabel,title:e.increaseLabel,disabled:a.value===r.length-1,onClick:S},[...t[1]||(t[1]=[x(" A",-1),o("span",{class:"wp-text-size__sign","aria-hidden":"true"},"+",-1)])],8,D)],8,W))}}),u=L(m,[["__scopeId","data-v-a8154d5f"]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"WpTextSizeToggle",description:"",tags:{},props:[{name:"decreaseLabel",description:"Accessible labels — pass localized strings; English fallbacks provided.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Decrease text size'"}},{name:"resetLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Reset text size'"}},{name:"increaseLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Increase text size'"}},{name:"storageKey",description:"localStorage key holding the chosen scale (shared across pages).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'wp-font-scale'"}},{name:"compact",description:"Compact form: hide the middle reset button (A- / A+ only). For tight bars.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"change",type:{names:["number"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpTextSizeToggle/WpTextSizeToggle.vue"]});const I={title:"Components/WpTextSizeToggle",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"Accessible text-size control (A− / A / A+). Writes `--wp-font-scale` on <html> and persists it in localStorage; base.css multiplies the root font-size by it, so anything sized in rem scales. Use the paragraph below each story to see the effect."}}}},f=(e="")=>({components:{WpTextSizeToggle:u},template:`
    <div style="display:flex; flex-direction:column; gap:16px; ${e}">
      <WpTextSizeToggle />
      <p style="font-size:1rem; margin:0; max-width:38ch;">
        Texte de démonstration en rem — cliquez A+ / A− pour voir la taille suivre le réglage.
      </p>
    </div>
  `}),i={render:()=>f()},c={render:()=>({components:{WpTextSizeToggle:u},template:`
      <div style="display:flex; flex-direction:column; gap:16px;">
        <WpTextSizeToggle compact />
        <p style="font-size:1rem; margin:0; max-width:38ch;">
          Forme compacte (A− / A+ sans bouton reset) — pour les barres étroites (mobile).
        </p>
      </div>
    `})},d={render:()=>f("color:#fff;"),parameters:{backgrounds:{default:"navy"}}},p={render:()=>f("color:#fff;"),parameters:{backgrounds:{default:"dark"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => withSample()
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpTextSizeToggle
    },
    template: \`
      <div style="display:flex; flex-direction:column; gap:16px;">
        <WpTextSizeToggle compact />
        <p style="font-size:1rem; margin:0; max-width:38ch;">
          Forme compacte (A− / A+ sans bouton reset) — pour les barres étroites (mobile).
        </p>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => withSample('color:#fff;'),
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => withSample('color:#fff;'),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...p.parameters?.docs?.source}}};const F=["Default","Compact","Navy","Dark"];export{c as Compact,p as Dark,i as Default,d as Navy,F as __namedExportsOrder,I as default};
