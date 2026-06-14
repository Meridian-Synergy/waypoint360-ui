import{d as u,e as i,g as c,l,i as o,n as m,t as d,o as a}from"./iframe-Dop0n4cD.js";import{W as p}from"./WpBadge-rRTfvhnc.js";import{W as g}from"./WpBreadcrumb-CB8Ad01y.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const f={class:"wp-page-hero"},y={class:"wp-page-hero__container"},h={key:2,class:"wp-page-hero__desc"},t=u({__name:"WpPageHero",props:{title:{},desc:{},badge:{},badgeVariant:{default:"sky"},crumbs:{},size:{default:"lg"}},setup(e){return(_,q)=>(a(),i("section",f,[c("div",y,[e.crumbs?.length?(a(),l(g,{key:0,crumbs:e.crumbs},null,8,["crumbs"])):o("",!0),e.badge?(a(),l(p,{key:1,label:e.badge,variant:e.badgeVariant},null,8,["label","variant"])):o("",!0),c("h1",{class:m(["wp-page-hero__title",`wp-page-hero__title--${e.size}`])},d(e.title),3),e.desc?(a(),i("p",h,d(e.desc),1)):o("",!0)])]))}}),v=b(t,[["__scopeId","data-v-f98d13af"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"WpPageHero",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"desc",required:!1,type:{name:"string"}},{name:"badge",required:!1,type:{name:"string"}},{name:"badgeVariant",required:!1,type:{name:"union",elements:[{name:'"sky"'},{name:'"navy"'},{name:'"orange"'}]},defaultValue:{func:!1,value:"'sky'"}},{name:"crumbs",required:!1,type:{name:"Array",elements:[{name:"BreadcrumbItem"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"lg"'},{name:'"md"'}]},defaultValue:{func:!1,value:"'lg'"}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPageHero/WpPageHero.vue"]});const N={title:"Components/WpPageHero",component:v,tags:["autodocs"],argTypes:{badgeVariant:{control:"select",options:["sky","navy","orange"]},size:{control:"select",options:["lg","md"]}}},r={args:{title:"Audit thermique par drone",desc:"Détection des ponts thermiques, anomalies sur panneaux solaires et points chauds sur pylônes grâce à la caméra infrarouge embarquée.",badge:"Service",crumbs:[{label:"Accueil",href:"/"},{label:"Services",href:"/services"},{label:"Audit thermique"}]}},s={args:{title:"Nos services drone professionnels",desc:"Six domaines d'expertise pour répondre aux besoins des professionnels en Bourgogne et Nièvre.",badge:"Services",size:"lg",crumbs:[{label:"Accueil",href:"/"},{label:"Services"}]}},n={args:{title:"À propos de Waypoint360",badge:"À propos",badgeVariant:"navy"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'À propos de Waypoint360',
    badge: 'À propos',
    badgeVariant: 'navy'
  }
}`,...n.parameters?.docs?.source}}};const V=["Default","Large","NoBreadcrumb"];export{r as Default,s as Large,n as NoBreadcrumb,V as __namedExportsOrder,N as default};
