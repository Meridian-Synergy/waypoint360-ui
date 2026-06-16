import{d as W,e as n,t as w,i as o,g as t,F as C,m as R,p as T,n as L,h as c,o as r}from"./iframe-BRIWuOAv.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const q=["aria-label"],E={key:0},M={class:"wp-patch__art"},Z=["d"],B={key:1,class:"wp-patch__pleat",cx:"50",cy:"50",r:"44"},N=["d"],O=["transform"],_={key:1,points:"-13,1 -4,11 14,-12",fill:"none","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round"},I={key:2,fill:"none","stroke-width":"2.2"},D={key:3,d:"M0,-16 L4.7,-4.9 16.5,-4.9 7,2.5 10.6,13.9 0,7 -10.6,13.9 -7,2.5 -16.5,-4.9 -4.7,-4.9 Z"},G={key:4,d:"M0,13 C-13,3 -16,-6 -8.5,-12 C-3.5,-15.5 0,-10.5 0,-7.5 C0,-10.5 3.5,-15.5 8.5,-12 C16,-6 13,3 0,13 Z"},$={key:5},H={key:4,class:"wp-patch__banner"},j={x:"50",y:"70","text-anchor":"middle","dominant-baseline":"central"},Q={key:5,class:"wp-patch__pastille"},U={x:"74",y:"22","text-anchor":"middle","dominant-baseline":"central"},Y=["aria-label"],y=W({__name:"WpPatch",props:{shape:{default:"circle"},tier:{default:"none"},accent:{},icon:{},flag:{},bannerText:{},count:{},locked:{type:Boolean,default:!1},size:{default:96},name:{},description:{}},setup(e){const s=e,P=c(()=>{switch(s.shape){case"shield":return"M50 5 L91 17 V49 C91 73 73 89 50 95 C27 89 9 73 9 49 V17 Z";case"hexagon":return"M50 4 L90 27 V73 L50 96 L10 73 V27 Z";case"rocker":return"M8 24 Q50 12 92 24 L92 56 Q50 88 8 56 Z";default:return"M4 50 A46 46 0 1 1 96 50 A46 46 0 1 1 4 50 Z"}}),S=c(()=>{switch(s.shape){case"shield":return"M50 13 L84 23 V49 C84 68 70 81 50 87 C30 81 16 68 16 49 V23 Z";case"hexagon":return"M50 13 L82 31 V69 L50 87 L18 69 V31 Z";case"rocker":return"";default:return"M11 50 A39 39 0 1 1 89 50 A39 39 0 1 1 11 50 Z"}}),z=c(()=>s.name??s.bannerText??"Achievement patch"),A=c(()=>s.bannerText?36:50),F=c(()=>{const v={width:`${s.size}px`,height:`${s.size}px`};return s.accent&&(v["--patch-ring"]=s.accent),v});return(v,a)=>(r(),n("span",{class:L(["wp-patch",`wp-patch--${e.tier}`,{"wp-patch--locked":e.locked}]),style:T(F.value)},[(r(),n("svg",{class:"wp-patch__svg",viewBox:"0 0 100 100",role:"img","aria-label":z.value},[e.description||e.name?(r(),n("title",E,w(e.description??e.name),1)):o("",!0),t("g",M,[e.shape==="rosette"?(r(),n(C,{key:0},[a[0]||(a[0]=t("path",{class:"wp-patch__ribbon-tail",d:"M40 78 L32 99 L44 93 L48 84 Z"},null,-1)),a[1]||(a[1]=t("path",{class:"wp-patch__ribbon-tail",d:"M60 78 L68 99 L56 93 L52 84 Z"},null,-1))],64)):o("",!0),t("path",{class:"wp-patch__shape",d:P.value},null,8,Z),e.shape==="rosette"?(r(),n("circle",B)):o("",!0),S.value?(r(),n("path",{key:2,class:"wp-patch__inner",d:S.value},null,8,N)):o("",!0),e.icon&&!e.flag?(r(),n("g",{key:3,class:"wp-patch__emblem",transform:`translate(50 ${A.value})`},[e.icon==="propeller"?(r(),n(C,{key:0},[a[2]||(a[2]=t("ellipse",{cx:"0",cy:"0",rx:"4",ry:"16"},null,-1)),a[3]||(a[3]=t("ellipse",{cx:"0",cy:"0",rx:"16",ry:"4"},null,-1)),a[4]||(a[4]=t("circle",{cx:"0",cy:"0",r:"4.5",class:"wp-patch__emblem-hub"},null,-1))],64)):e.icon==="check"?(r(),n("polyline",_)):e.icon==="globe"?(r(),n("g",I,[...a[5]||(a[5]=[R('<circle cx="0" cy="0" r="15" data-v-3787f553></circle><ellipse cx="0" cy="0" rx="6.5" ry="15" data-v-3787f553></ellipse><line x1="-15" y1="0" x2="15" y2="0" data-v-3787f553></line><line x1="-13" y1="-7.5" x2="13" y2="-7.5" data-v-3787f553></line><line x1="-13" y1="7.5" x2="13" y2="7.5" data-v-3787f553></line>',5)])])):e.icon==="star"?(r(),n("path",D)):e.icon==="heart"?(r(),n("path",G)):e.icon==="flag"?(r(),n("g",$,[...a[6]||(a[6]=[t("rect",{x:"-12",y:"-15",width:"3",height:"30",rx:"1"},null,-1),t("path",{d:"M-9,-14 L13,-9 L-9,-1 Z"},null,-1)])])):o("",!0)],8,O)):o("",!0),e.bannerText?(r(),n("g",H,[a[7]||(a[7]=t("rect",{x:"16",y:"62",width:"68",height:"15",rx:"3"},null,-1)),t("text",j,w(e.bannerText),1)])):o("",!0),e.count!=null?(r(),n("g",Q,[a[8]||(a[8]=t("circle",{cx:"74",cy:"22",r:"11"},null,-1)),t("text",U,w(e.count),1)])):o("",!0)])],8,q)),e.flag?(r(),n("span",{key:0,class:L(["wp-patch__flag fi fis",`fi-${e.flag}`]),style:T({top:e.bannerText?"36%":"50%"}),role:"img","aria-label":e.name??e.flag},null,14,Y)):o("",!0)],6))}}),k=V(y,[["__scopeId","data-v-3787f553"]]);y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:"default",displayName:"WpPatch",description:"",tags:{},props:[{name:"shape",description:"Category silhouette",required:!1,type:{name:"WpPatchShape"},defaultValue:{func:!1,value:"'circle'"}},{name:"tier",description:"Threshold metal — drives the ring/accent color",required:!1,type:{name:"WpPatchTier"},defaultValue:{func:!1,value:"'none'"}},{name:"accent",description:"CSS color overriding the ring/banner/pastille color (e.g. a category accent)",required:!1,type:{name:"string"}},{name:"icon",description:"Central emblem from the starter icon registry (ignored when `flag` is set)",required:!1,type:{name:"WpPatchIcon"}},{name:"flag",description:"ISO 3166-1 alpha-2 country code (lowercase) — renders a flag medallion as the emblem",required:!1,type:{name:"string"}},{name:"bannerText",description:"Banner ribbon text (rendered uppercase)",required:!1,type:{name:"string"}},{name:"count",description:"Numbered pastille badge (e.g. a threshold count)",required:!1,type:{name:"number"}},{name:"locked",description:"Greyed silhouette — not unlocked, or lapsed recurring supporter",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Rendered size in px (1:1)",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"96"}},{name:"name",description:"Accessible name (English label of the badge)",required:!1,type:{name:"string"}},{name:"description",description:"Localized description, shown as a native tooltip",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPatch/WpPatch.vue"]});const ee={title:"Community/WpPatch",component:k,tags:["autodocs"],argTypes:{shape:{control:"select",options:["circle","shield","rocker","rosette","hexagon"]},tier:{control:"select",options:["none","bronze","silver","gold","platinum"]},accent:{control:"color"},icon:{control:"select",options:[void 0,"propeller","check","globe","star","heart","flag"]},count:{control:"number"},size:{control:"number"},locked:{control:"boolean"}}},i={name:"Circle — flights",args:{shape:"circle",tier:"gold",icon:"propeller",bannerText:"Aviator",count:100,name:"Aviator",description:"100 vols enregistrés."}},l={name:"Shield — certification",args:{shape:"shield",tier:"silver",icon:"check",bannerText:"Certified",name:"Certified Pilot",description:"Au moins une certification UE."}},p={name:"Rocker — geography (country flag)",args:{shape:"rocker",tier:"bronze",flag:"fr",bannerText:"France",name:"France Explorer",description:"Au moins un vol en France."}},d={name:"Rocker — flag set (collectible)",render:e=>({components:{WpPatch:k},setup:()=>({args:e,countries:[{flag:"fr",label:"France"},{flag:"be",label:"Belgique"},{flag:"ch",label:"Suisse"},{flag:"es",label:"España"}]}),template:`
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <WpPatch v-for="c in countries" :key="c.flag" v-bind="args" :flag="c.flag" :banner-text="c.label" />
      </div>`}),args:{shape:"rocker",tier:"bronze",size:88}},m={name:"Rosette — community",args:{shape:"rosette",tier:"gold",icon:"heart",bannerText:"Supporter",name:"Supporter",description:"Soutien mensuel à la communauté."}},u={name:"Hexagon — event",args:{shape:"hexagon",tier:"platinum",icon:"flag",bannerText:"2026",name:"2026 Pioneer",description:"Inscrit en 2026."}},g={name:"Tiers — bronze → platinum",render:e=>({components:{WpPatch:k},setup:()=>({args:e,tiers:["none","bronze","silver","gold","platinum"]}),template:`
      <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
        <WpPatch v-for="t in tiers" :key="t" v-bind="args" :tier="t" :banner-text="t" />
      </div>`}),args:{shape:"circle",icon:"star",count:50}},h={name:"Locked — greyed",args:{shape:"rosette",tier:"gold",icon:"heart",bannerText:"Supporter",locked:!0,name:"Supporter (lapsed)"}},f={name:"Small — 40px",args:{shape:"circle",tier:"gold",icon:"propeller",size:40}},b={name:"Category accents",render:e=>({components:{WpPatch:k},setup:()=>({args:e,cats:[{shape:"circle",icon:"propeller",accent:"#D4AF37"},{shape:"rocker",icon:"globe",accent:"#00AAEF"},{shape:"shield",icon:"check",accent:"#22c55e"},{shape:"rosette",icon:"star",accent:"#8b5cf6"},{shape:"hexagon",icon:"flag",accent:"#f59e0b"}]}),template:`
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <WpPatch v-for="(c, i) in cats" :key="i" v-bind="args" :shape="c.shape" :icon="c.icon" :accent="c.accent" />
      </div>`}),args:{tier:"none"}},x={name:"On dark background",args:{shape:"shield",tier:"gold",icon:"check",bannerText:"Full Rating"},parameters:{backgrounds:{default:"dark"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Shield — certification',
  args: {
    shape: 'shield',
    tier: 'silver',
    icon: 'check',
    bannerText: 'Certified',
    name: 'Certified Pilot',
    description: 'Au moins une certification UE.'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Rocker — geography (country flag)',
  args: {
    shape: 'rocker',
    tier: 'bronze',
    flag: 'fr',
    bannerText: 'France',
    name: 'France Explorer',
    description: 'Au moins un vol en France.'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Rosette — community',
  args: {
    shape: 'rosette',
    tier: 'gold',
    icon: 'heart',
    bannerText: 'Supporter',
    name: 'Supporter',
    description: 'Soutien mensuel à la communauté.'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Hexagon — event',
  args: {
    shape: 'hexagon',
    tier: 'platinum',
    icon: 'flag',
    bannerText: '2026',
    name: '2026 Pioneer',
    description: 'Inscrit en 2026.'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Locked — greyed',
  args: {
    shape: 'rosette',
    tier: 'gold',
    icon: 'heart',
    bannerText: 'Supporter',
    locked: true,
    name: 'Supporter (lapsed)'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Small — 40px',
  args: {
    shape: 'circle',
    tier: 'gold',
    icon: 'propeller',
    size: 40
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Category accents',
  render: args => ({
    components: {
      WpPatch
    },
    setup: () => ({
      args,
      cats: [{
        shape: 'circle',
        icon: 'propeller',
        accent: '#D4AF37'
      }, {
        shape: 'rocker',
        icon: 'globe',
        accent: '#00AAEF'
      }, {
        shape: 'shield',
        icon: 'check',
        accent: '#22c55e'
      }, {
        shape: 'rosette',
        icon: 'star',
        accent: '#8b5cf6'
      }, {
        shape: 'hexagon',
        icon: 'flag',
        accent: '#f59e0b'
      }]
    }),
    template: \`
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <WpPatch v-for="(c, i) in cats" :key="i" v-bind="args" :shape="c.shape" :icon="c.icon" :accent="c.accent" />
      </div>\`
  }),
  args: {
    tier: 'none'
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const ae=["FlightCircle","CertShield","GeoRocker","GeoRockerCountries","SocialRosette","EventHexagon","TierLadder","Locked","Small","CategoryAccents","OnDark"];export{b as CategoryAccents,l as CertShield,u as EventHexagon,i as FlightCircle,p as GeoRocker,d as GeoRockerCountries,h as Locked,x as OnDark,f as Small,m as SocialRosette,g as TierLadder,ae as __namedExportsOrder,ee as default};
