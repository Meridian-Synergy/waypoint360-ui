import{d as T,e as r,t as x,i as s,g as t,F as w,m as z,n as S,p as P,h as y,o as n}from"./iframe-CyRvdfmr.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const R=["aria-label"],V={key:0},W={class:"wp-patch__art"},A=["d"],q={key:1,class:"wp-patch__pleat",cx:"50",cy:"50",r:"44"},M=["d"],Z={key:3,class:"wp-patch__emblem",transform:"translate(50 36)"},E={key:1,points:"-13,1 -4,11 14,-12",fill:"none","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round"},B={key:2,fill:"none","stroke-width":"2.2"},N={key:3,d:"M0,-16 L4.7,-4.9 16.5,-4.9 7,2.5 10.6,13.9 0,7 -10.6,13.9 -7,2.5 -16.5,-4.9 -4.7,-4.9 Z"},O={key:4,d:"M0,13 C-13,3 -16,-6 -8.5,-12 C-3.5,-15.5 0,-10.5 0,-7.5 C0,-10.5 3.5,-15.5 8.5,-12 C16,-6 13,3 0,13 Z"},I={key:5},G={key:4,class:"wp-patch__banner"},_={x:"50",y:"70","text-anchor":"middle","dominant-baseline":"central"},H={key:5,class:"wp-patch__pastille"},$={x:"74",y:"22","text-anchor":"middle","dominant-baseline":"central"},D=["aria-label"],b=T({__name:"WpPatch",props:{shape:{default:"circle"},tier:{default:"none"},icon:{},flag:{},bannerText:{},count:{},locked:{type:Boolean,default:!1},size:{default:96},name:{},description:{}},setup(e){const o=e,C=y(()=>{switch(o.shape){case"shield":return"M50 5 L91 17 V49 C91 73 73 89 50 95 C27 89 9 73 9 49 V17 Z";case"hexagon":return"M50 4 L90 27 V73 L50 96 L10 73 V27 Z";case"rocker":return"M8 24 Q50 12 92 24 L92 56 Q50 88 8 56 Z";default:return"M4 50 A46 46 0 1 1 96 50 A46 46 0 1 1 4 50 Z"}}),v=y(()=>{switch(o.shape){case"shield":return"M50 13 L84 23 V49 C84 68 70 81 50 87 C30 81 16 68 16 49 V23 Z";case"hexagon":return"M50 13 L82 31 V69 L50 87 L18 69 V31 Z";case"rocker":return"";default:return"M11 50 A39 39 0 1 1 89 50 A39 39 0 1 1 11 50 Z"}}),L=y(()=>o.name??o.bannerText??"Achievement patch");return(j,a)=>(n(),r("span",{class:S(["wp-patch",`wp-patch--${e.tier}`,{"wp-patch--locked":e.locked}]),style:P({width:`${e.size}px`,height:`${e.size}px`})},[(n(),r("svg",{class:"wp-patch__svg",viewBox:"0 0 100 100",role:"img","aria-label":L.value},[e.description||e.name?(n(),r("title",V,x(e.description??e.name),1)):s("",!0),t("g",W,[e.shape==="rosette"?(n(),r(w,{key:0},[a[0]||(a[0]=t("path",{class:"wp-patch__ribbon-tail",d:"M40 78 L32 99 L44 93 L48 84 Z"},null,-1)),a[1]||(a[1]=t("path",{class:"wp-patch__ribbon-tail",d:"M60 78 L68 99 L56 93 L52 84 Z"},null,-1))],64)):s("",!0),t("path",{class:"wp-patch__shape",d:C.value},null,8,A),e.shape==="rosette"?(n(),r("circle",q)):s("",!0),v.value?(n(),r("path",{key:2,class:"wp-patch__inner",d:v.value},null,8,M)):s("",!0),e.icon&&!e.flag?(n(),r("g",Z,[e.icon==="propeller"?(n(),r(w,{key:0},[a[2]||(a[2]=t("ellipse",{cx:"0",cy:"0",rx:"4",ry:"16"},null,-1)),a[3]||(a[3]=t("ellipse",{cx:"0",cy:"0",rx:"16",ry:"4"},null,-1)),a[4]||(a[4]=t("circle",{cx:"0",cy:"0",r:"4.5",class:"wp-patch__emblem-hub"},null,-1))],64)):e.icon==="check"?(n(),r("polyline",E)):e.icon==="globe"?(n(),r("g",B,[...a[5]||(a[5]=[z('<circle cx="0" cy="0" r="15" data-v-54b9cbab></circle><ellipse cx="0" cy="0" rx="6.5" ry="15" data-v-54b9cbab></ellipse><line x1="-15" y1="0" x2="15" y2="0" data-v-54b9cbab></line><line x1="-13" y1="-7.5" x2="13" y2="-7.5" data-v-54b9cbab></line><line x1="-13" y1="7.5" x2="13" y2="7.5" data-v-54b9cbab></line>',5)])])):e.icon==="star"?(n(),r("path",N)):e.icon==="heart"?(n(),r("path",O)):e.icon==="flag"?(n(),r("g",I,[...a[6]||(a[6]=[t("rect",{x:"-12",y:"-15",width:"3",height:"30",rx:"1"},null,-1),t("path",{d:"M-9,-14 L13,-9 L-9,-1 Z"},null,-1)])])):s("",!0)])):s("",!0),e.bannerText?(n(),r("g",G,[a[7]||(a[7]=t("rect",{x:"16",y:"62",width:"68",height:"15",rx:"3"},null,-1)),t("text",_,x(e.bannerText),1)])):s("",!0),e.count!=null?(n(),r("g",H,[a[8]||(a[8]=t("circle",{cx:"74",cy:"22",r:"11"},null,-1)),t("text",$,x(e.count),1)])):s("",!0)])],8,R)),e.flag?(n(),r("span",{key:0,class:S(["wp-patch__flag fi fis",`fi-${e.flag}`]),role:"img","aria-label":e.name??e.flag},null,10,D)):s("",!0)],6))}}),k=F(b,[["__scopeId","data-v-54b9cbab"]]);b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"WpPatch",description:"",tags:{},props:[{name:"shape",description:"Category silhouette",required:!1,type:{name:"WpPatchShape"},defaultValue:{func:!1,value:"'circle'"}},{name:"tier",description:"Threshold metal — drives the ring/accent color",required:!1,type:{name:"WpPatchTier"},defaultValue:{func:!1,value:"'none'"}},{name:"icon",description:"Central emblem from the starter icon registry (ignored when `flag` is set)",required:!1,type:{name:"WpPatchIcon"}},{name:"flag",description:"ISO 3166-1 alpha-2 country code (lowercase) — renders a flag medallion as the emblem",required:!1,type:{name:"string"}},{name:"bannerText",description:"Banner ribbon text (rendered uppercase)",required:!1,type:{name:"string"}},{name:"count",description:"Numbered pastille badge (e.g. a threshold count)",required:!1,type:{name:"number"}},{name:"locked",description:"Greyed silhouette — not unlocked, or lapsed recurring supporter",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Rendered size in px (1:1)",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"96"}},{name:"name",description:"Accessible name (English label of the badge)",required:!1,type:{name:"string"}},{name:"description",description:"Localized description, shown as a native tooltip",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPatch/WpPatch.vue"]});const K={title:"Community/WpPatch",component:k,tags:["autodocs"],argTypes:{shape:{control:"select",options:["circle","shield","rocker","rosette","hexagon"]},tier:{control:"select",options:["none","bronze","silver","gold","platinum"]},icon:{control:"select",options:[void 0,"propeller","check","globe","star","heart","flag"]},count:{control:"number"},size:{control:"number"},locked:{control:"boolean"}}},i={name:"Circle — flights",args:{shape:"circle",tier:"gold",icon:"propeller",bannerText:"Aviator",count:100,name:"Aviator",description:"100 vols enregistrés."}},c={name:"Shield — certification",args:{shape:"shield",tier:"silver",icon:"check",bannerText:"Certified",name:"Certified Pilot",description:"Au moins une certification UE."}},l={name:"Rocker — geography (country flag)",args:{shape:"rocker",tier:"bronze",flag:"fr",bannerText:"France",name:"France Explorer",description:"Au moins un vol en France."}},p={name:"Rocker — flag set (collectible)",render:e=>({components:{WpPatch:k},setup:()=>({args:e,countries:[{flag:"fr",label:"France"},{flag:"be",label:"Belgique"},{flag:"ch",label:"Suisse"},{flag:"es",label:"España"}]}),template:`
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <WpPatch v-for="c in countries" :key="c.flag" v-bind="args" :flag="c.flag" :banner-text="c.label" />
      </div>`}),args:{shape:"rocker",tier:"bronze",size:88}},d={name:"Rosette — community",args:{shape:"rosette",tier:"gold",icon:"heart",bannerText:"Supporter",name:"Supporter",description:"Soutien mensuel à la communauté."}},u={name:"Hexagon — event",args:{shape:"hexagon",tier:"platinum",icon:"flag",bannerText:"2026",name:"2026 Pioneer",description:"Inscrit en 2026."}},m={name:"Tiers — bronze → platinum",render:e=>({components:{WpPatch:k},setup:()=>({args:e,tiers:["none","bronze","silver","gold","platinum"]}),template:`
      <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
        <WpPatch v-for="t in tiers" :key="t" v-bind="args" :tier="t" :banner-text="t" />
      </div>`}),args:{shape:"circle",icon:"star",count:50}},g={name:"Locked — greyed",args:{shape:"rosette",tier:"gold",icon:"heart",bannerText:"Supporter",locked:!0,name:"Supporter (lapsed)"}},h={name:"Small — 40px",args:{shape:"circle",tier:"gold",icon:"propeller",size:40}},f={name:"On dark background",args:{shape:"shield",tier:"gold",icon:"check",bannerText:"Full Rating"},parameters:{backgrounds:{default:"dark"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Circle — flights',
  args: {
    shape: 'circle',
    tier: 'gold',
    icon: 'propeller',
    bannerText: 'Aviator',
    count: 100,
    name: 'Aviator',
    description: '100 vols enregistrés.'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Shield — certification',
  args: {
    shape: 'shield',
    tier: 'silver',
    icon: 'check',
    bannerText: 'Certified',
    name: 'Certified Pilot',
    description: 'Au moins une certification UE.'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Rocker — geography (country flag)',
  args: {
    shape: 'rocker',
    tier: 'bronze',
    flag: 'fr',
    bannerText: 'France',
    name: 'France Explorer',
    description: 'Au moins un vol en France.'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Rocker — flag set (collectible)',
  render: args => ({
    components: {
      WpPatch
    },
    setup: () => ({
      args,
      countries: [{
        flag: 'fr',
        label: 'France'
      }, {
        flag: 'be',
        label: 'Belgique'
      }, {
        flag: 'ch',
        label: 'Suisse'
      }, {
        flag: 'es',
        label: 'España'
      }]
    }),
    template: \`
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <WpPatch v-for="c in countries" :key="c.flag" v-bind="args" :flag="c.flag" :banner-text="c.label" />
      </div>\`
  }),
  args: {
    shape: 'rocker',
    tier: 'bronze',
    size: 88
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Rosette — community',
  args: {
    shape: 'rosette',
    tier: 'gold',
    icon: 'heart',
    bannerText: 'Supporter',
    name: 'Supporter',
    description: 'Soutien mensuel à la communauté.'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Hexagon — event',
  args: {
    shape: 'hexagon',
    tier: 'platinum',
    icon: 'flag',
    bannerText: '2026',
    name: '2026 Pioneer',
    description: 'Inscrit en 2026.'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Tiers — bronze → platinum',
  render: args => ({
    components: {
      WpPatch
    },
    setup: () => ({
      args,
      tiers: ['none', 'bronze', 'silver', 'gold', 'platinum'] as const
    }),
    template: \`
      <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
        <WpPatch v-for="t in tiers" :key="t" v-bind="args" :tier="t" :banner-text="t" />
      </div>\`
  }),
  args: {
    shape: 'circle',
    icon: 'star',
    count: 50
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Locked — greyed',
  args: {
    shape: 'rosette',
    tier: 'gold',
    icon: 'heart',
    bannerText: 'Supporter',
    locked: true,
    name: 'Supporter (lapsed)'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Small — 40px',
  args: {
    shape: 'circle',
    tier: 'gold',
    icon: 'propeller',
    size: 40
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'On dark background',
  args: {
    shape: 'shield',
    tier: 'gold',
    icon: 'check',
    bannerText: 'Full Rating'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...f.parameters?.docs?.source}}};const X=["FlightCircle","CertShield","GeoRocker","GeoRockerCountries","SocialRosette","EventHexagon","TierLadder","Locked","Small","OnDark"];export{c as CertShield,u as EventHexagon,i as FlightCircle,l as GeoRocker,p as GeoRockerCountries,g as Locked,f as OnDark,h as Small,d as SocialRosette,m as TierLadder,X as __namedExportsOrder,K as default};
