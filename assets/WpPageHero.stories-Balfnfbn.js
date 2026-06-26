import{d as h,e as l,f as m,k as u,h as t,n as p,t as g,r as f,o as a}from"./iframe-DVy-Zv_b.js";import{W as v}from"./WpBadge-CB5-Of2s.js";import{W as y}from"./WpBreadcrumb-4JhmOHn7.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{W as S}from"./WpButton-C83Pu81c.js";import"./preload-helper-PPVm8Dsz.js";const q={class:"wp-page-hero__container"},x={key:2,class:"wp-page-hero__desc"},V={key:3,class:"wp-page-hero__actions"},c=h({__name:"WpPageHero",props:{title:{},desc:{},badge:{},badgeVariant:{default:"sky"},crumbs:{},size:{default:"lg"},tone:{default:"navy"}},setup(e){return(d,k)=>(a(),l("section",{class:p(["wp-page-hero",`wp-page-hero--${e.tone}`])},[m("div",q,[e.crumbs?.length?(a(),u(y,{key:0,crumbs:e.crumbs},null,8,["crumbs"])):t("",!0),e.badge?(a(),u(v,{key:1,label:e.badge,variant:e.badgeVariant,class:"wp-page-hero__badge"},null,8,["label","variant"])):t("",!0),m("h1",{class:p(["wp-page-hero__title",`wp-page-hero__title--${e.size}`])},g(e.title),3),e.desc?(a(),l("p",x,g(e.desc),1)):t("",!0),d.$slots.actions?(a(),l("div",V,[f(d.$slots,"actions",{},void 0,!0)])):t("",!0)])],2))}}),b=W(c,[["__scopeId","data-v-c388b143"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"WpPageHero",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"desc",required:!1,type:{name:"string"}},{name:"badge",required:!1,type:{name:"string"}},{name:"badgeVariant",required:!1,type:{name:"union",elements:[{name:'"sky"'},{name:'"navy"'},{name:'"orange"'}]},defaultValue:{func:!1,value:"'sky'"}},{name:"crumbs",required:!1,type:{name:"Array",elements:[{name:"BreadcrumbItem"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"lg"'},{name:'"md"'}]},defaultValue:{func:!1,value:"'lg'"}},{name:"tone",description:"Visual surface of the hero band.\n`navy` (default) = dark band with light text — the canonical vitrine hero.\n`light` = light surface with navy text (legacy look).",required:!1,type:{name:"union",elements:[{name:'"navy"'},{name:'"light"'}]},defaultValue:{func:!1,value:"'navy'"}}],slots:[{name:"actions"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPageHero/WpPageHero.vue"]});const N={title:"Components/WpPageHero",component:b,tags:["autodocs"],argTypes:{badgeVariant:{control:"select",options:["sky","navy","orange"]},size:{control:"select",options:["lg","md"]},tone:{control:"select",options:["navy","light"]}}},n={args:{title:"Audit thermique par drone",desc:"Détection des ponts thermiques, anomalies sur panneaux solaires et points chauds sur pylônes grâce à la caméra infrarouge embarquée.",badge:"Service",crumbs:[{label:"Accueil",href:"/"},{label:"Services",href:"/services"},{label:"Audit thermique"}]}},o={args:{title:"Nos services drone professionnels",desc:"Six domaines d'expertise pour répondre aux besoins des professionnels en Bourgogne et Nièvre.",badge:"Services",size:"lg",crumbs:[{label:"Accueil",href:"/"},{label:"Services"}]}},i={args:{title:"À propos de Waypoint360",badge:"À propos",badgeVariant:"navy"}},r={args:{title:"Rejoignez la communauté Waypoint360",desc:"Suivez vos vols, débloquez des badges et grimpez dans les classements.",badge:"Communauté"},render:e=>({components:{WpPageHero:b,WpButton:S},setup:()=>({args:e}),template:`
      <WpPageHero v-bind="args">
        <template #actions>
          <WpButton label="Créer un compte" variant="cta" />
        </template>
      </WpPageHero>
    `})},s={args:{title:"Hero en thème clair",desc:"Variante claire conservée pour compatibilité ascendante.",badge:"Variante",tone:"light",crumbs:[{label:"Accueil",href:"/"},{label:"Exemple"}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Audit thermique par drone',
    desc: 'Détection des ponts thermiques, anomalies sur panneaux solaires et points chauds sur pylônes grâce à la caméra infrarouge embarquée.',
    badge: 'Service',
    crumbs: [{
      label: 'Accueil',
      href: '/'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'Audit thermique'
    }]
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Nos services drone professionnels',
    desc: "Six domaines d'expertise pour répondre aux besoins des professionnels en Bourgogne et Nièvre.",
    badge: 'Services',
    size: 'lg',
    crumbs: [{
      label: 'Accueil',
      href: '/'
    }, {
      label: 'Services'
    }]
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'À propos de Waypoint360',
    badge: 'À propos',
    badgeVariant: 'navy'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Rejoignez la communauté Waypoint360',
    desc: 'Suivez vos vols, débloquez des badges et grimpez dans les classements.',
    badge: 'Communauté'
  },
  render: args => ({
    components: {
      WpPageHero,
      WpButton
    },
    setup: () => ({
      args
    }),
    template: \`
      <WpPageHero v-bind="args">
        <template #actions>
          <WpButton label="Créer un compte" variant="cta" />
        </template>
      </WpPageHero>
    \`
  })
}`,...r.parameters?.docs?.source},description:{story:"Hero with a call-to-action via the `#actions` slot (e.g. landing pages).",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hero en thème clair',
    desc: 'Variante claire conservée pour compatibilité ascendante.',
    badge: 'Variante',
    tone: 'light',
    crumbs: [{
      label: 'Accueil',
      href: '/'
    }, {
      label: 'Exemple'
    }]
  }
}`,...s.parameters?.docs?.source},description:{story:"Light tone — legacy surface (navy text on a light band).",...s.parameters?.docs?.description}}};const P=["Default","Large","NoBreadcrumb","WithActions","Light"];export{n as Default,o as Large,s as Light,i as NoBreadcrumb,r as WithActions,P as __namedExportsOrder,N as default};
