import{d as _,x as W,q as k,y as q,s as M,e as N,f as a,r as S,v as I,g as V,j as $,h as m,o as j,C as B,z as O,F as z}from"./iframe-B_exDk1F.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const P=["aria-label"],R={class:"wp-carousel__controls","aria-hidden":"true"},D=["disabled","aria-label"],E=["disabled","aria-label"],g=2,d=_({__name:"WpCarousel",props:{ariaLabel:{},prevLabel:{default:"Previous"},nextLabel:{default:"Next"},itemMinWidth:{default:"260px"}},setup(r){const u=W();function n(t){return t?t.some(e=>e.type===B?!1:e.type===O?String(e.children??"").trim().length>0:e.type===z?n(e.children):!0):!1}const C=$(()=>!n(u.default?.())),s=m(null),v=m(!0),b=m(!0);function c(){const t=s.value;t&&(v.value=t.scrollLeft<=g,b.value=t.scrollLeft+t.clientWidth>=t.scrollWidth-g)}function w(){return typeof matchMedia!="function"?"smooth":matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}function h(t){const e=s.value;e&&e.scrollBy({left:t*Math.max(e.clientWidth-80,120),behavior:w()})}let p=null;return k(async()=>{await q(),c(),typeof ResizeObserver<"u"&&s.value&&(p=new ResizeObserver(c),p.observe(s.value))}),M(()=>p?.disconnect()),(t,e)=>C.value?V("",!0):(j(),N("section",{key:0,class:"wp-carousel","aria-label":r.ariaLabel},[a("div",{ref_key:"rail",ref:s,class:"wp-carousel__rail",tabindex:"0",style:I({"--wp-carousel-item":r.itemMinWidth}),onScroll:c},[S(t.$slots,"default",{},void 0,!0)],36),a("div",R,[a("button",{type:"button",class:"wp-carousel__nav",tabindex:"-1",disabled:v.value,"aria-label":r.prevLabel,onClick:e[0]||(e[0]=L=>h(-1))},[...e[2]||(e[2]=[a("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},[a("path",{d:"M10 3L5 8l5 5",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],8,D),a("button",{type:"button",class:"wp-carousel__nav",tabindex:"-1",disabled:b.value,"aria-label":r.nextLabel,onClick:e[1]||(e[1]=L=>h(1))},[...e[3]||(e[3]=[a("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},[a("path",{d:"M6 3l5 5-5 5",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],8,E)])],8,P))}}),f=A(d,[["__scopeId","data-v-88605f61"]]);d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"WpCarousel",description:"",tags:{},props:[{name:"ariaLabel",description:"Nom accessible du rail. Obligatoire en pratique : « carrousel » ne dit rien.",required:!0,type:{name:"string"}},{name:"prevLabel",description:"Nom accessible du bouton précédent.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Previous'"}},{name:"nextLabel",description:"Nom accessible du bouton suivant.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Next'"}},{name:"itemMinWidth",description:"Largeur minimale d'une carte. Le rail en place autant que la place permet.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'260px'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpCarousel/WpCarousel.vue"]});const Q={title:"Components/WpCarousel",component:f,tags:["autodocs"]},y={ariaLabel:"Drones d’occasion",prevLabel:"Précédent",nextLabel:"Suivant"},F=(r,u)=>`
  <article style="border:1px solid var(--wp-color-border,#d5dced);border-radius:10px;
                  background:var(--wp-color-surface,#fff);padding:16px;height:100%">
    <h3 style="margin:0 0 8px;font-size:1rem">${r}</h3>
    <p style="margin:0;font-weight:700">${u}</p>
  </article>`;function x(r){return{components:{WpCarousel:f},setup:()=>({labels:y}),template:`<WpCarousel v-bind="labels">
      ${Array.from({length:r},(u,n)=>F(`Mavic 3 — nº ${n+1}`,`${1200+n*150} €`)).join("")}
    </WpCarousel>`}}const o={render:()=>x(8)},i={render:()=>x(2)},l={render:()=>({components:{WpCarousel:f},setup:()=>({labels:y}),template:`<div>
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
n'ait à s'en souvenir.`,...l.parameters?.docs?.description}}};const Z=["Plein","Court","Vide"];export{i as Court,o as Plein,l as Vide,Z as __namedExportsOrder,Q as default};
