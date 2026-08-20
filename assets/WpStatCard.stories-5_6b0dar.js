import{d as S,e as a,t,g as f,f as y,r as b,n as v,o as s,k as g}from"./iframe-DJei2uNv.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const C={key:0,class:"wp-stat-card__label"},w={key:1,class:"wp-stat-card__sub"},x={key:2,class:"wp-stat-card__link"},m=S({__name:"WpStatCard",props:{label:{default:""},value:{default:""},sub:{default:""},link:{default:""},tone:{default:"neutral"},loading:{type:Boolean,default:!1},interactive:{type:Boolean,default:!0}},emits:["click"],setup(e){return(p,W)=>(s(),a("div",{class:v(["wp-stat-card",`wp-stat-card--${e.tone}`,{"wp-stat-card--interactive":e.interactive}])},[e.label?(s(),a("span",C,t(e.label),1)):f("",!0),y("span",{class:v(["wp-stat-card__value",{"wp-stat-card__value--loading":e.loading}])},[b(p.$slots,"value",{},()=>[g(t(e.value),1)],!0)],2),e.sub||p.$slots.sub?(s(),a("span",w,[b(p.$slots,"sub",{},()=>[g(t(e.sub),1)],!0)])):f("",!0),e.link?(s(),a("span",x,t(e.link),1)):f("",!0)],2))}}),k=V(m,[["__scopeId","data-v-e74c1345"]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"WpStatCard",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"''"}},{name:"sub",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tone",required:!1,type:{name:"WpStatTone"},defaultValue:{func:!1,value:"'neutral'"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"interactive",description:`Affordance VISUELLE seulement — curseur et relief au survol. La tuile n'est
 jamais l'élément interactif : un consommateur qui veut la rendre cliquable
 l'enveloppe dans un lien, comme le font tous les tableaux de bord.`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"value"},{name:"sub"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpStatCard/WpStatCard.vue"]});const j={title:"Components/WpStatCard",component:k,tags:["autodocs"],parameters:{backgrounds:{default:"dark"}},argTypes:{tone:{control:"select",options:["neutral","sky","gold","warn","ok"]}}},n={args:{label:"Missions",value:42,sub:"128 au total",link:"Voir tout →",tone:"neutral"}},r={args:{label:"Heures de vol",value:"128 h",sub:"+12 % ce mois",link:"Voir tout →",tone:"gold"}},o={args:{label:"Utilisateurs",value:12,sub:"8 certifiés",link:"Voir tout →",tone:"sky"}},l={args:{label:"Certifications",value:3,sub:"expirent sous 30 jours",link:"Voir tout →",tone:"warn"}},u={args:{label:"Conformité",value:"100 %",sub:"tous les drones à jour",tone:"ok"}},i={args:{label:"Missions",value:"–",sub:"chargement…",loading:!0,tone:"neutral"}},c={args:{label:"Drones",value:6,sub:"4 actifs",tone:"neutral",interactive:!1}},d={render:e=>({components:{WpStatCard:k},setup:()=>({args:e}),template:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;max-width:780px">
        <WpStatCard label="Heures de vol" :value="'128 h'" sub="+12 % ce mois" link="Voir tout →" tone="gold" />
        <WpStatCard label="Utilisateurs" :value="12" sub="8 certifiés" link="Voir tout →" tone="sky" />
        <WpStatCard label="Missions" :value="42" sub="128 au total" link="Voir tout →" tone="neutral" />
        <WpStatCard label="Certifications" :value="3" sub="expirent sous 30 jours" link="Voir tout →" tone="warn" />
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Missions',
    value: 42,
    sub: '128 au total',
    link: 'Voir tout →',
    tone: 'neutral'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Heures de vol',
    value: '128 h',
    sub: '+12 % ce mois',
    link: 'Voir tout →',
    tone: 'gold'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Utilisateurs',
    value: 12,
    sub: '8 certifiés',
    link: 'Voir tout →',
    tone: 'sky'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Certifications',
    value: 3,
    sub: 'expirent sous 30 jours',
    link: 'Voir tout →',
    tone: 'warn'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Conformité',
    value: '100 %',
    sub: 'tous les drones à jour',
    tone: 'ok'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Missions',
    value: '–',
    sub: 'chargement…',
    loading: true,
    tone: 'neutral'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Drones',
    value: 6,
    sub: '4 actifs',
    tone: 'neutral',
    interactive: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const N=["Neutral","Gold","Sky","Warn","Ok","Loading","Static","Grid"];export{r as Gold,d as Grid,i as Loading,n as Neutral,u as Ok,o as Sky,c as Static,l as Warn,N as __namedExportsOrder,j as default};
