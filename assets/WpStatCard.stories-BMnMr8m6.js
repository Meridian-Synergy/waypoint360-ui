import{d as C,e as t,t as s,h as f,f as V,r as g,n as v,o as n,i as k}from"./iframe-CZb0sTpj.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const W={key:0,class:"wp-stat-card__label"},x={key:1,class:"wp-stat-card__sub"},h={key:2,class:"wp-stat-card__link"},m=C({__name:"WpStatCard",props:{label:{default:""},value:{default:""},sub:{default:""},link:{default:""},tone:{default:"neutral"},loading:{type:Boolean,default:!1},interactive:{type:Boolean,default:!0}},emits:["click"],setup(e){return(a,b)=>(n(),t("div",{class:v(["wp-stat-card",`wp-stat-card--${e.tone}`,{"wp-stat-card--interactive":e.interactive}]),onClick:b[0]||(b[0]=S=>a.$emit("click",S))},[e.label?(n(),t("span",W,s(e.label),1)):f("",!0),V("span",{class:v(["wp-stat-card__value",{"wp-stat-card__value--loading":e.loading}])},[g(a.$slots,"value",{},()=>[k(s(e.value),1)],!0)],2),e.sub||a.$slots.sub?(n(),t("span",x,[g(a.$slots,"sub",{},()=>[k(s(e.sub),1)],!0)])):f("",!0),e.link?(n(),t("span",h,s(e.link),1)):f("",!0)],2))}}),y=w(m,[["__scopeId","data-v-f6644c8a"]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"WpStatCard",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"''"}},{name:"sub",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tone",required:!1,type:{name:"WpStatTone"},defaultValue:{func:!1,value:"'neutral'"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"interactive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"value"},{name:"sub"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpStatCard/WpStatCard.vue"]});const q={title:"Components/WpStatCard",component:y,tags:["autodocs"],parameters:{backgrounds:{default:"dark"}},argTypes:{tone:{control:"select",options:["neutral","sky","gold","warn","ok"]}}},r={args:{label:"Missions",value:42,sub:"128 au total",link:"Voir tout →",tone:"neutral"}},o={args:{label:"Heures de vol",value:"128 h",sub:"+12 % ce mois",link:"Voir tout →",tone:"gold"}},l={args:{label:"Utilisateurs",value:12,sub:"8 certifiés",link:"Voir tout →",tone:"sky"}},u={args:{label:"Certifications",value:3,sub:"expirent sous 30 jours",link:"Voir tout →",tone:"warn"}},i={args:{label:"Conformité",value:"100 %",sub:"tous les drones à jour",tone:"ok"}},c={args:{label:"Missions",value:"–",sub:"chargement…",loading:!0,tone:"neutral"}},d={args:{label:"Drones",value:6,sub:"4 actifs",tone:"neutral",interactive:!1}},p={render:e=>({components:{WpStatCard:y},setup:()=>({args:e}),template:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;max-width:780px">
        <WpStatCard label="Heures de vol" :value="'128 h'" sub="+12 % ce mois" link="Voir tout →" tone="gold" />
        <WpStatCard label="Utilisateurs" :value="12" sub="8 certifiés" link="Voir tout →" tone="sky" />
        <WpStatCard label="Missions" :value="42" sub="128 au total" link="Voir tout →" tone="neutral" />
        <WpStatCard label="Certifications" :value="3" sub="expirent sous 30 jours" link="Voir tout →" tone="warn" />
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Missions',
    value: 42,
    sub: '128 au total',
    link: 'Voir tout →',
    tone: 'neutral'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Heures de vol',
    value: '128 h',
    sub: '+12 % ce mois',
    link: 'Voir tout →',
    tone: 'gold'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Utilisateurs',
    value: 12,
    sub: '8 certifiés',
    link: 'Voir tout →',
    tone: 'sky'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Certifications',
    value: 3,
    sub: 'expirent sous 30 jours',
    link: 'Voir tout →',
    tone: 'warn'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Conformité',
    value: '100 %',
    sub: 'tous les drones à jour',
    tone: 'ok'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Missions',
    value: '–',
    sub: 'chargement…',
    loading: true,
    tone: 'neutral'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Drones',
    value: 6,
    sub: '4 actifs',
    tone: 'neutral',
    interactive: false
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WpStatCard
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;max-width:780px">
        <WpStatCard label="Heures de vol" :value="'128 h'" sub="+12 % ce mois" link="Voir tout →" tone="gold" />
        <WpStatCard label="Utilisateurs" :value="12" sub="8 certifiés" link="Voir tout →" tone="sky" />
        <WpStatCard label="Missions" :value="42" sub="128 au total" link="Voir tout →" tone="neutral" />
        <WpStatCard label="Certifications" :value="3" sub="expirent sous 30 jours" link="Voir tout →" tone="warn" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};const M=["Neutral","Gold","Sky","Warn","Ok","Loading","Static","Grid"];export{o as Gold,p as Grid,c as Loading,r as Neutral,i as Ok,l as Sky,d as Static,u as Warn,M as __namedExportsOrder,q as default};
