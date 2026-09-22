import{d as S,x as q,q as A,y as I,s as N,e as y,f as a,r as B,v as V,g,j as $,h as d,o as x,C as j,z,F as O}from"./iframe-0Gw1LY5E.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const R=["aria-label"],E={key:0,class:"wp-carousel__controls","aria-hidden":"true"},F=["disabled","aria-label"],T=["disabled","aria-label"],f=2,c=S({__name:"WpCarousel",props:{ariaLabel:{},prevLabel:{default:"Previous"},nextLabel:{default:"Next"},itemMinWidth:{default:"260px"}},setup(r){const u=q();function s(t){return t?t.some(e=>e.type===j?!1:e.type===z?String(e.children??"").trim().length>0:e.type===O?s(e.children):!0):!1}const W=$(()=>!s(u.default?.())),n=d(null),L=d(!0),k=d(!0),b=d(!1);function p(){const t=n.value;t&&(b.value=t.scrollWidth>t.clientWidth+f,L.value=t.scrollLeft<=f,k.value=t.scrollLeft+t.clientWidth>=t.scrollWidth-f)}function _(){return typeof matchMedia!="function"?"smooth":matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}function h(t){const e=n.value;e&&e.scrollBy({left:t*Math.max(e.clientWidth-80,120),behavior:_()})}let m=null;return A(async()=>{await I(),p(),typeof ResizeObserver<"u"&&n.value&&(m=new ResizeObserver(p),m.observe(n.value))}),N(()=>m?.disconnect()),(t,e)=>W.value?g("",!0):(x(),y("section",{key:0,class:"wp-carousel","aria-label":r.ariaLabel},[a("div",{ref_key:"rail",ref:n,class:"wp-carousel__rail",tabindex:"0",style:V({"--wp-carousel-item":r.itemMinWidth}),onScroll:p},[B(t.$slots,"default",{},void 0,!0)],36),b.value?(x(),y("div",E,[a("button",{type:"button",class:"wp-carousel__nav",tabindex:"-1",disabled:t.auDebut,"aria-label":r.prevLabel,onClick:e[0]||(e[0]=M=>h(-1))},[...e[2]||(e[2]=[a("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},[a("path",{d:"M10 3L5 8l5 5",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],8,F),a("button",{type:"button",class:"wp-carousel__nav",tabindex:"-1",disabled:t.aLaFin,"aria-label":r.nextLabel,onClick:e[1]||(e[1]=M=>h(1))},[...e[3]||(e[3]=[a("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},[a("path",{d:"M6 3l5 5-5 5",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],8,T)])):g("",!0)],8,R))}}),v=P(c,[["__scopeId","data-v-0e7c86a8"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"WpCarousel",description:"",tags:{},props:[{name:"ariaLabel",description:'Accessible name of the rail. Required in practice: "carousel" says nothing.',required:!0,type:{name:"string"}},{name:"prevLabel",description:"Accessible name of the previous button.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Previous'"}},{name:"nextLabel",description:"Accessible name of the next button.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Next'"}},{name:"itemMinWidth",description:"Minimum card width. The rail fits as many as the space allows.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'260px'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpCarousel/WpCarousel.vue"]});const Z={title:"Components/WpCarousel",component:v,tags:["autodocs"]},C={ariaLabel:"Drones d’occasion",prevLabel:"Précédent",nextLabel:"Suivant"},D=(r,u)=>`
  <article style="border:1px solid var(--wp-color-border,#d5dced);border-radius:10px;
                  background:var(--wp-color-surface,#fff);padding:16px;height:100%">
    <h3 style="margin:0 0 8px;font-size:1rem">${r}</h3>
    <p style="margin:0;font-weight:700">${u}</p>
  </article>`;function w(r){return{components:{WpCarousel:v},setup:()=>({labels:C}),template:`<WpCarousel v-bind="labels">
      ${Array.from({length:r},(u,s)=>D(`Mavic 3 — nº ${s+1}`,`${1200+s*150} €`)).join("")}
    </WpCarousel>`}}const o={render:()=>w(8)},i={render:()=>w(2)},l={render:()=>({components:{WpCarousel:v},setup:()=>({labels:C}),template:`<div>
      <p style="color:var(--wp-color-text-sub,#5b6684)">Rien ne doit s’afficher sous cette ligne.</p>
      <WpCarousel v-bind="labels"><template v-if="false"><span>jamais</span></template></WpCarousel>
    </div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => rail(8)
}`,...o.parameters?.docs?.source},description:{story:"Le cas nominal : plus de cartes que de place, les deux boutons servent.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => rail(2)
}`,...i.parameters?.docs?.source},description:{story:"Assez peu pour tout montrer : les deux boutons restent éteints.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpCarousel
    },
    setup: () => ({
      labels
    }),
    template: \`<div>
      <p style="color:var(--wp-color-text-sub,#5b6684)">Rien ne doit s’afficher sous cette ligne.</p>
      <WpCarousel v-bind="labels"><template v-if="false"><span>jamais</span></template></WpCarousel>
    </div>\`
  })
}`,...l.parameters?.docs?.source},description:{story:`⛔ LE CAS QUI A MOTIVÉ LA DÉCISION. Zéro carte : le composant se retire
entièrement plutôt que de rendre un rail vide. Une vitrine qui montre un rail
vide dit qu'elle est morte, et le \`v-if\` vit ICI pour qu'aucune page appelante
n'ait à s'en souvenir.`,...l.parameters?.docs?.description}}};const H=["Plein","Court","Vide"];export{i as Court,o as Plein,l as Vide,H as __namedExportsOrder,Z as default};
