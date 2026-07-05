import{d as B,e as a,t as L,h as n,f as s,F,j as V,x as M,n as Z,g as o,o as t,k as R,y as Q,l as q}from"./iframe-DCNAOP_8.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const I=["aria-label"],O={key:0},j={class:"wp-patch__art"},N=["d"],D={key:0,class:"wp-patch__pleat",cx:"50",cy:"50",r:"44"},H=["d"],G=["transform"],$={key:3,class:"wp-patch__banner"},U={x:"50",y:"69","text-anchor":"middle","dominant-baseline":"central"},Y={key:4,class:"wp-patch__pastille"},J={x:"74",y:"22","text-anchor":"middle","dominant-baseline":"central"},K=["aria-label"],w=B({__name:"WpPatch",props:{shape:{default:"circle"},tier:{default:"none"},accent:{},icon:{},flag:{},bannerText:{},count:{},locked:{type:Boolean,default:!1},size:{default:96},name:{},description:{}},setup(e){const r=e,P=o(()=>{switch(r.shape){case"shield":return"M50 5 L91 17 V49 C91 73 73 89 50 95 C27 89 9 73 9 49 V17 Z";case"hexagon":return"M50 4 L90 27 V73 L50 96 L10 73 V27 Z";case"rocker":return"M8 24 Q50 12 92 24 L92 56 Q50 88 8 56 Z";default:return"M4 50 A46 46 0 1 1 96 50 A46 46 0 1 1 4 50 Z"}}),C=o(()=>{switch(r.shape){case"shield":return"M50 13 L84 23 V49 C84 68 70 81 50 87 C30 81 16 68 16 49 V23 Z";case"hexagon":return"M50 13 L82 31 V69 L50 87 L18 69 V31 Z";case"rocker":return"";default:return"M11 50 A39 39 0 1 1 89 50 A39 39 0 1 1 11 50 Z"}}),T={propeller:[{tag:"ellipse",attrs:{rx:5.5,ry:17}},{tag:"ellipse",attrs:{rx:17,ry:5.5}},{tag:"circle",attrs:{r:6,fill:"#1B2B56"}}],takeoff:[{tag:"path",attrs:{d:"M-16,8 L15,-12 L3,11 L-1,3 Z"}},{tag:"path",attrs:{d:"M-15,14 H9",fill:"none","stroke-width":2.6,"stroke-linecap":"round"}}],medal:[{tag:"path",attrs:{d:"M-7,-7 L-11,-16 L-3,-12 M7,-7 L11,-16 L3,-12",fill:"none","stroke-width":2.6,"stroke-linejoin":"round"}},{tag:"circle",attrs:{cy:4,r:11}},{tag:"circle",attrs:{cy:4,r:5,fill:"#1B2B56"}}],compass:[{tag:"circle",attrs:{r:15,fill:"none","stroke-width":2.4}},{tag:"path",attrs:{d:"M0,-9 L4.5,0 L0,9 L-4.5,0 Z"}}],globe:[{tag:"circle",attrs:{r:15,fill:"none","stroke-width":2.2}},{tag:"ellipse",attrs:{rx:6.5,ry:15,fill:"none","stroke-width":2.2}},{tag:"line",attrs:{x1:-15,y1:0,x2:15,y2:0,"stroke-width":2.2}},{tag:"line",attrs:{x1:-13,y1:-7.5,x2:13,y2:-7.5,"stroke-width":2.2}},{tag:"line",attrs:{x1:-13,y1:7.5,x2:13,y2:7.5,"stroke-width":2.2}}],route:[{tag:"path",attrs:{d:"M-11,13 Q-11,0 0,0 Q11,0 11,-13",fill:"none","stroke-width":2.8,"stroke-linecap":"round"}},{tag:"circle",attrs:{cx:-11,cy:13,r:3.6}},{tag:"circle",attrs:{cx:11,cy:-13,r:3.6}}],stopwatch:[{tag:"line",attrs:{x1:-5,y1:-16,x2:5,y2:-16,"stroke-width":2.6,"stroke-linecap":"round"}},{tag:"line",attrs:{x1:0,y1:-16,x2:0,y2:-12,"stroke-width":2.6}},{tag:"circle",attrs:{cy:2,r:12,fill:"none","stroke-width":2.4}},{tag:"line",attrs:{x1:0,y1:2,x2:0,y2:-5,"stroke-width":2.4,"stroke-linecap":"round"}}],mountain:[{tag:"path",attrs:{d:"M-16,12 L-5,-9 L1,0 L7,-13 L16,12 Z"}}],flame:[{tag:"path",attrs:{d:"M0,-16 C8,-6 11,-1 6,7 C4,12 -4,12 -6,7 C-9,1 -2,-1 0,-16 Z"}},{tag:"path",attrs:{d:"M1,-5 C5,0 6,4 3.5,7.5 C2,10 -3,9.5 -3,5.5 C-3,2 0.5,0.5 1,-5 Z",fill:"#1B2B56"}}],check:[{tag:"polyline",attrs:{points:"-13,1 -4,11 14,-12",fill:"none","stroke-width":5,"stroke-linecap":"round","stroke-linejoin":"round"}}],double_check:[{tag:"polyline",attrs:{points:"-15,1 -7,9 5,-12",fill:"none","stroke-width":3.6,"stroke-linecap":"round","stroke-linejoin":"round"}},{tag:"polyline",attrs:{points:"0,9 13,-12",fill:"none","stroke-width":3.6,"stroke-linecap":"round","stroke-linejoin":"round"}}],clock:[{tag:"circle",attrs:{r:14,fill:"none","stroke-width":2.6}},{tag:"line",attrs:{x1:0,y1:0,x2:0,y2:-8,"stroke-width":2.6,"stroke-linecap":"round"}},{tag:"line",attrs:{x1:0,y1:0,x2:6,y2:3,"stroke-width":2.6,"stroke-linecap":"round"}}],user_plus:[{tag:"circle",attrs:{cx:-4,cy:-6,r:6}},{tag:"path",attrs:{d:"M-16,14 C-16,3 8,3 8,14 Z"}},{tag:"line",attrs:{x1:12,y1:-9,x2:12,y2:-1,"stroke-width":2.8,"stroke-linecap":"round"}},{tag:"line",attrs:{x1:8,y1:-5,x2:16,y2:-5,"stroke-width":2.8,"stroke-linecap":"round"}}],users:[{tag:"circle",attrs:{cx:-7,cy:-6,r:5.5}},{tag:"circle",attrs:{cx:8,cy:-4,r:4.5}},{tag:"path",attrs:{d:"M-17,14 C-17,4 3,4 3,14 Z"}},{tag:"path",attrs:{d:"M5,14 C5,7 18,6 18,14 Z"}}],podium:[{tag:"rect",attrs:{x:-16.5,y:0,width:10,height:13}},{tag:"rect",attrs:{x:-5,y:-10,width:10,height:23}},{tag:"rect",attrs:{x:6.5,y:5,width:10,height:8}}],verified:[{tag:"circle",attrs:{r:14,fill:"none","stroke-width":2.6}},{tag:"polyline",attrs:{points:"-7,0 -2,6 8,-6",fill:"none","stroke-width":3.2,"stroke-linecap":"round","stroke-linejoin":"round"}}],heart:[{tag:"path",attrs:{d:"M0,13 C-13,3 -16,-6 -8.5,-12 C-3.5,-15.5 0,-10.5 0,-7.5 C0,-10.5 3.5,-15.5 8.5,-12 C16,-6 13,3 0,13 Z"}}],crown:[{tag:"path",attrs:{d:"M-15,9 L-15,-7 L-6,1 L0,-12 L6,1 L15,-7 L15,9 Z"}}],wings:[{tag:"path",attrs:{d:"M0,-11 L3.6,-8 V3 L0,9 -3.6,3 V-8 Z"}},{tag:"circle",attrs:{cy:-4,r:1.6,fill:"#1B2B56"}},{tag:"path",attrs:{d:"M-4,-6 Q-13,-9 -21,-6 Q-16,-4 -13,-3 Q-16,-2 -11,-1 Q-14,0 -9,0.8 Q-11,2 -5,2.5 Z"}},{tag:"path",attrs:{d:"M4,-6 Q13,-9 21,-6 Q16,-4 13,-3 Q16,-2 11,-1 Q14,0 9,0.8 Q11,2 5,2.5 Z"}}],wingman:[{tag:"path",attrs:{d:"M-11,-3 L0,-12 L11,-3 L11,2 L0,-7 L-11,2 Z"}},{tag:"path",attrs:{d:"M-11,6 L0,-3 L11,6 L11,11 L0,2 L-11,11 Z"}}],star:[{tag:"path",attrs:{d:"M0,-16 L4.7,-4.9 16.5,-4.9 7,2.5 10.6,13.9 0,7 -10.6,13.9 -7,2.5 -16.5,-4.9 -4.7,-4.9 Z"}}],sunrise:[{tag:"path",attrs:{d:"M-10,11 A10 10 0 0 1 10,11 Z"}},{tag:"line",attrs:{x1:-16,y1:11,x2:16,y2:11,"stroke-width":2.8,"stroke-linecap":"round"}},{tag:"line",attrs:{x1:0,y1:-15,x2:0,y2:-9,"stroke-width":2.4,"stroke-linecap":"round"}},{tag:"line",attrs:{x1:-13,y1:-4,x2:-9,y2:0,"stroke-width":2.4,"stroke-linecap":"round"}},{tag:"line",attrs:{x1:13,y1:-4,x2:9,y2:0,"stroke-width":2.4,"stroke-linecap":"round"}}],moon:[{tag:"path",attrs:{d:"M3,-13 A14 14 0 1 0 3,13 A10 10 0 1 1 3,-13 Z"}}],flag:[{tag:"rect",attrs:{x:-12,y:-15,width:3,height:30,rx:1}},{tag:"path",attrs:{d:"M-9,-14 L13,-9 L-9,-1 Z"}}],rocket:[{tag:"path",attrs:{d:"M0,-16 C7,-9 7,1 4,8 L-4,8 C-7,1 -7,-9 0,-16 Z"}},{tag:"circle",attrs:{cy:-4,r:3,fill:"#1B2B56"}},{tag:"path",attrs:{d:"M-4,7 L-10,15 L-3,12 Z M4,7 L10,15 L3,12 Z"}}],trophy:[{tag:"path",attrs:{d:"M-9,-13 H9 V-7 C9,-1 -9,-1 -9,-7 Z"}},{tag:"path",attrs:{d:"M-9,-11 C-16,-11 -15,-3 -8,-4 M9,-11 C16,-11 15,-3 8,-4",fill:"none","stroke-width":2.4}},{tag:"rect",attrs:{x:-2.5,y:-2,width:5,height:9}},{tag:"rect",attrs:{x:-8,y:9,width:16,height:4,rx:1}}],calendar:[{tag:"rect",attrs:{x:-13,y:-11,width:26,height:24,rx:3,fill:"none","stroke-width":2.6}},{tag:"line",attrs:{x1:-13,y1:-4,x2:13,y2:-4,"stroke-width":2.6}},{tag:"line",attrs:{x1:-7,y1:-15,x2:-7,y2:-8,"stroke-width":2.6,"stroke-linecap":"round"}},{tag:"line",attrs:{x1:7,y1:-15,x2:7,y2:-8,"stroke-width":2.6,"stroke-linecap":"round"}}]},_=o(()=>r.name??r.bannerText??"Achievement patch"),A=o(()=>r.bannerText?36:50),z=o(()=>{const v={width:`${r.size}px`,height:`${r.size}px`};return r.accent&&(v["--patch-ring"]=r.accent),v});return(v,i)=>(t(),a("span",{class:Z(["wp-patch",`wp-patch--${e.tier}`,{"wp-patch--locked":e.locked}]),style:M(z.value)},[(t(),a("svg",{class:"wp-patch__svg",viewBox:"0 0 100 100",role:"img","aria-label":_.value},[e.description||e.name?(t(),a("title",O,L(e.description??e.name),1)):n("",!0),s("g",j,[s("path",{class:"wp-patch__shape",d:P.value},null,8,N),e.shape==="rosette"?(t(),a("circle",D)):n("",!0),C.value?(t(),a("path",{key:1,class:"wp-patch__inner",d:C.value},null,8,H)):n("",!0),e.icon&&!e.flag?(t(),a("g",{key:2,class:"wp-patch__emblem",transform:`translate(50 ${A.value}) scale(1.3)`},[(t(!0),a(F,null,V(T[e.icon],(S,W)=>(t(),R(q(S.tag),Q({key:W},{ref_for:!0},S.attrs),null,16))),128))],8,G)):n("",!0),e.bannerText?(t(),a("g",$,[i[0]||(i[0]=s("rect",{x:"14",y:"60",width:"72",height:"17",rx:"3"},null,-1)),s("text",U,L(e.bannerText),1)])):n("",!0),e.count!=null?(t(),a("g",Y,[i[1]||(i[1]=s("circle",{cx:"74",cy:"22",r:"11"},null,-1)),s("text",J,L(e.count),1)])):n("",!0)])],8,I)),e.flag?(t(),a("span",{key:0,class:Z(["wp-patch__flag fi fis",`fi-${e.flag}`]),style:M({top:e.bannerText?"36%":"50%"}),role:"img","aria-label":e.name??e.flag},null,14,K)):n("",!0)],6))}}),c=E(w,[["__scopeId","data-v-34e11053"]]);w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:"default",displayName:"WpPatch",description:"",tags:{},props:[{name:"shape",description:"Category silhouette",required:!1,type:{name:"WpPatchShape"},defaultValue:{func:!1,value:"'circle'"}},{name:"tier",description:"Threshold metal — drives the ring/accent color",required:!1,type:{name:"WpPatchTier"},defaultValue:{func:!1,value:"'none'"}},{name:"accent",description:"CSS color overriding the ring/banner/pastille color (e.g. a category accent)",required:!1,type:{name:"string"}},{name:"icon",description:"Central emblem from the starter icon registry (ignored when `flag` is set)",required:!1,type:{name:"WpPatchIcon"}},{name:"flag",description:"ISO 3166-1 alpha-2 country code (lowercase) — renders a flag medallion as the emblem",required:!1,type:{name:"string"}},{name:"bannerText",description:"Banner ribbon text (rendered uppercase)",required:!1,type:{name:"string"}},{name:"count",description:"Numbered pastille badge (e.g. a threshold count)",required:!1,type:{name:"number"}},{name:"locked",description:"Greyed silhouette — not unlocked, or lapsed recurring supporter",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Rendered size in px (1:1)",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"96"}},{name:"name",description:"Accessible name (English label of the badge)",required:!1,type:{name:"string"}},{name:"description",description:"Localized description, shown as a native tooltip",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPatch/WpPatch.vue"]});const ae={title:"Community/WpPatch",component:c,tags:["autodocs"],argTypes:{shape:{control:"select",options:["circle","shield","rocker","rosette","hexagon"]},tier:{control:"select",options:["none","bronze","silver","gold","platinum"]},accent:{control:"color"},icon:{control:"select",options:[void 0,"propeller","takeoff","medal","compass","globe","route","stopwatch","mountain","flame","check","double_check","clock","user_plus","users","podium","verified","heart","crown","wings","wingman","star","sunrise","moon","flag","rocket","trophy","calendar"]},count:{control:"number"},size:{control:"number"},locked:{control:"boolean"}}},l={name:"Circle — flights",args:{shape:"circle",tier:"gold",icon:"wings",bannerText:"Aviator",count:100,name:"Aviator",description:"100 vols enregistrés."}},p={name:"Shield — certification",args:{shape:"shield",tier:"silver",icon:"check",bannerText:"Certified",name:"Certified Pilot",description:"Au moins une certification UE."}},d={name:"Rocker — geography (country flag)",args:{shape:"rocker",tier:"bronze",flag:"fr",bannerText:"France",name:"France Explorer",description:"Au moins un vol en France."}},g={name:"Rocker — flag set (collectible)",render:e=>({components:{WpPatch:c},setup:()=>({args:e,countries:[{flag:"fr",label:"France"},{flag:"be",label:"Belgique"},{flag:"ch",label:"Suisse"},{flag:"es",label:"España"}]}),template:`
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <WpPatch v-for="c in countries" :key="c.flag" v-bind="args" :flag="c.flag" :banner-text="c.label" />
      </div>`}),args:{shape:"rocker",tier:"bronze",size:88}},h={name:"Rosette — community",args:{shape:"rosette",tier:"gold",icon:"heart",bannerText:"Supporter",name:"Supporter",description:"Soutien mensuel à la communauté."}},u={name:"Hexagon — event",args:{shape:"hexagon",tier:"platinum",icon:"flag",bannerText:"2026",name:"2026 Pioneer",description:"Inscrit en 2026."}},m={name:"Tiers — bronze → platinum",render:e=>({components:{WpPatch:c},setup:()=>({args:e,tiers:["none","bronze","silver","gold","platinum"]}),template:`
      <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
        <WpPatch v-for="t in tiers" :key="t" v-bind="args" :tier="t" :banner-text="t" />
      </div>`}),args:{shape:"circle",icon:"star",count:50}},f={name:"Locked — greyed",args:{shape:"rosette",tier:"gold",icon:"heart",bannerText:"Supporter",locked:!0,name:"Supporter (lapsed)"}},y={name:"Small — 40px",args:{shape:"circle",tier:"gold",icon:"propeller",size:40}},x={name:"Category accents",render:e=>({components:{WpPatch:c},setup:()=>({args:e,cats:[{shape:"circle",icon:"propeller",accent:"#D4AF37"},{shape:"rocker",icon:"globe",accent:"#00AAEF"},{shape:"shield",icon:"check",accent:"#22c55e"},{shape:"rosette",icon:"star",accent:"#8b5cf6"},{shape:"hexagon",icon:"flag",accent:"#f59e0b"}]}),template:`
      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <WpPatch v-for="(c, i) in cats" :key="i" v-bind="args" :shape="c.shape" :icon="c.icon" :accent="c.accent" />
      </div>`}),args:{tier:"none"}},k={name:"Icon library",render:e=>({components:{WpPatch:c},setup:()=>({args:e,icons:["propeller","takeoff","medal","compass","globe","route","stopwatch","mountain","flame","check","double_check","clock","user_plus","users","podium","verified","heart","crown","wings","wingman","star","sunrise","moon","flag","rocket","trophy","calendar"]}),template:`
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <div v-for="ic in icons" :key="ic" style="text-align:center; width:88px;">
          <WpPatch v-bind="args" :icon="ic" :size="72" />
          <div style="font:11px monospace; margin-top:4px;">{{ ic }}</div>
        </div>
      </div>`}),args:{shape:"circle",tier:"none"}},b={name:"On dark background",args:{shape:"shield",tier:"gold",icon:"check",bannerText:"Full Rating"},parameters:{backgrounds:{default:"dark"}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Circle — flights',
  args: {
    shape: 'circle',
    tier: 'gold',
    icon: 'wings',
    bannerText: 'Aviator',
    count: 100,
    name: 'Aviator',
    description: '100 vols enregistrés.'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Shield — certification',
  args: {
    shape: 'shield',
    tier: 'silver',
    icon: 'check',
    bannerText: 'Certified',
    name: 'Certified Pilot',
    description: 'Au moins une certification UE.'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Rocker — geography (country flag)',
  args: {
    shape: 'rocker',
    tier: 'bronze',
    flag: 'fr',
    bannerText: 'France',
    name: 'France Explorer',
    description: 'Au moins un vol en France.'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Rosette — community',
  args: {
    shape: 'rosette',
    tier: 'gold',
    icon: 'heart',
    bannerText: 'Supporter',
    name: 'Supporter',
    description: 'Soutien mensuel à la communauté.'
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Locked — greyed',
  args: {
    shape: 'rosette',
    tier: 'gold',
    icon: 'heart',
    bannerText: 'Supporter',
    locked: true,
    name: 'Supporter (lapsed)'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Small — 40px',
  args: {
    shape: 'circle',
    tier: 'gold',
    icon: 'propeller',
    size: 40
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Icon library',
  render: args => ({
    components: {
      WpPatch
    },
    setup: () => ({
      args,
      icons: ['propeller', 'takeoff', 'medal', 'compass', 'globe', 'route', 'stopwatch', 'mountain', 'flame', 'check', 'double_check', 'clock', 'user_plus', 'users', 'podium', 'verified', 'heart', 'crown', 'wings', 'wingman', 'star', 'sunrise', 'moon', 'flag', 'rocket', 'trophy', 'calendar']
    }),
    template: \`
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <div v-for="ic in icons" :key="ic" style="text-align:center; width:88px;">
          <WpPatch v-bind="args" :icon="ic" :size="72" />
          <div style="font:11px monospace; margin-top:4px;">{{ ic }}</div>
        </div>
      </div>\`
  }),
  args: {
    shape: 'circle',
    tier: 'none'
  }
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const re=["FlightCircle","CertShield","GeoRocker","GeoRockerCountries","SocialRosette","EventHexagon","TierLadder","Locked","Small","CategoryAccents","IconLibrary","OnDark"];export{x as CategoryAccents,p as CertShield,u as EventHexagon,l as FlightCircle,d as GeoRocker,g as GeoRockerCountries,k as IconLibrary,f as Locked,b as OnDark,y as Small,h as SocialRosette,m as TierLadder,re as __namedExportsOrder,ae as default};
