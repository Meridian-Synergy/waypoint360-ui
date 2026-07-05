import{d as v,m as S,e as w,f as r,i as f,q as _,o as T}from"./iframe-CNf4Bg54.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const L=["aria-label"],A=["aria-label","title","disabled"],N=["aria-label","title","aria-pressed"],D=["aria-label","title","disabled"],o=1,u=v({__name:"WpTextSizeToggle",props:{decreaseLabel:{default:"Decrease text size"},resetLabel:{default:"Reset text size"},increaseLabel:{default:"Increase text size"},storageKey:{default:"wp-font-scale"}},emits:["change"],setup(a,{emit:b}){const m=a,x=b,n=[.9,1,1.15,1.3],t=_(o);function l(s){t.value=s;const e=n[s];document.documentElement.style.setProperty("--wp-font-scale",String(e));try{localStorage.setItem(m.storageKey,String(e))}catch{}x("change",e)}function y(){t.value>0&&l(t.value-1)}function h(){t.value<n.length-1&&l(t.value+1)}function z(){l(o)}return S(()=>{let s=null;try{s=localStorage.getItem(m.storageKey)}catch{}const e=s?n.indexOf(Number(s)):-1;l(e>=0?e:o)}),(s,e)=>(T(),w("div",{class:"wp-text-size",role:"group","aria-label":a.resetLabel},[r("button",{type:"button",class:"wp-text-size__btn","aria-label":a.decreaseLabel,title:a.decreaseLabel,disabled:t.value===0,onClick:y},[...e[0]||(e[0]=[f(" A",-1),r("span",{class:"wp-text-size__sign","aria-hidden":"true"},"−",-1)])],8,A),r("button",{type:"button",class:"wp-text-size__btn wp-text-size__btn--reset","aria-label":a.resetLabel,title:a.resetLabel,"aria-pressed":t.value===o,onClick:z},"A",8,N),r("button",{type:"button",class:"wp-text-size__btn","aria-label":a.increaseLabel,title:a.increaseLabel,disabled:t.value===n.length-1,onClick:h},[...e[1]||(e[1]=[f(" A",-1),r("span",{class:"wp-text-size__sign","aria-hidden":"true"},"+",-1)])],8,D)],8,L))}}),g=k(u,[["__scopeId","data-v-dbd83f3a"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"WpTextSizeToggle",description:"",tags:{},props:[{name:"decreaseLabel",description:"Accessible labels — pass localized strings; English fallbacks provided.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Decrease text size'"}},{name:"resetLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Reset text size'"}},{name:"increaseLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Increase text size'"}},{name:"storageKey",description:"localStorage key holding the chosen scale (shared across pages).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'wp-font-scale'"}}],events:[{name:"change",type:{names:["number"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpTextSizeToggle/WpTextSizeToggle.vue"]});const q={title:"Components/WpTextSizeToggle",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"Accessible text-size control (A− / A / A+). Writes `--wp-font-scale` on <html> and persists it in localStorage; base.css multiplies the root font-size by it, so anything sized in rem scales. Use the paragraph below each story to see the effect."}}}},p=(a="")=>({components:{WpTextSizeToggle:g},template:`
    <div style="display:flex; flex-direction:column; gap:16px; ${a}">
      <WpTextSizeToggle />
      <p style="font-size:1rem; margin:0; max-width:38ch;">
        Texte de démonstration en rem — cliquez A+ / A− pour voir la taille suivre le réglage.
      </p>
    </div>
  `}),i={render:()=>p()},c={render:()=>p("color:#fff;"),parameters:{backgrounds:{default:"navy"}}},d={render:()=>p("color:#fff;"),parameters:{backgrounds:{default:"dark"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => withSample()
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => withSample('color:#fff;'),
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => withSample('color:#fff;'),
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...d.parameters?.docs?.source}}};const V=["Default","Navy","Dark"];export{d as Dark,i as Default,c as Navy,V as __namedExportsOrder,q as default};
