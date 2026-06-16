import{d as l,e as n,g as t,t as p,F as d,j as m,o as a,n as u,i as h,f as _}from"./iframe-CkCqwiia.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const w={class:"wp-contact-banner"},g={class:"wp-contact-banner__inner"},f={class:"wp-contact-banner__text"},b={class:"wp-contact-banner__title"},v={class:"wp-contact-banner__desc"},C={class:"wp-contact-banner__actions"},B=["href","target","rel"],k={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},x={key:1,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},i=l({__name:"WpContactBanner",props:{title:{},desc:{},actions:{}},setup(c){return(A,o)=>(a(),n("section",w,[t("div",g,[t("div",f,[t("h2",b,p(c.title),1),t("p",v,p(c.desc),1)]),t("div",C,[(a(!0),n(d,null,m(c.actions,e=>(a(),n("a",{key:e.type,href:e.href,target:e.type==="whatsapp"?"_blank":void 0,rel:e.type==="whatsapp"?"noopener noreferrer":void 0,class:u(["wp-contact-btn",`wp-contact-btn--${e.type}`])},[e.type==="whatsapp"?(a(),n("svg",k,[...o[0]||(o[0]=[t("path",{d:"M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87 1.02 1.03-3.78-.24-.39A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.19-.24-.58-.48-.5-.67-.51H7.5c-.17 0-.45.06-.69.3C6.57 8.1 6 8.7 6 9.93c0 1.23.91 2.42 1.04 2.59.13.17 1.8 2.74 4.36 3.84.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.07-.1-.27-.17-.57-.32z"},null,-1)])])):e.type==="email"?(a(),n("svg",x,[...o[1]||(o[1]=[t("rect",{x:"2",y:"4",width:"20",height:"16",rx:"3",stroke:"currentColor","stroke-width":"1.75"},null,-1),t("path",{d:"M2 8l10 7 10-7",stroke:"currentColor","stroke-width":"1.75","stroke-linejoin":"round"},null,-1)])])):h("",!0),_(" "+p(e.label),1)],10,B))),128))])])]))}}),W=y(i,[["__scopeId","data-v-03987b11"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"WpContactBanner",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"desc",required:!0,type:{name:"string"}},{name:"actions",required:!0,type:{name:"Array",elements:[{name:"WpContactAction"}]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpContactBanner/WpContactBanner.vue"]});const j={title:"Components/WpContactBanner",component:W,tags:["autodocs"]},s={args:{title:"Parlons de votre projet",desc:"Réponse rapide, devis gratuit. Disponibles en Bourgogne et Nièvre.",actions:[{type:"whatsapp",href:"https://wa.me/33766974874",label:"WhatsApp"},{type:"email",href:"mailto:contact@waypoint360.eu",label:"Email"}]}},r={args:{title:"Une question ?",desc:"Contactez-nous par email, nous répondons sous 24h.",actions:[{type:"email",href:"mailto:contact@waypoint360.eu",label:"Envoyer un email"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Parlons de votre projet',
    desc: 'Réponse rapide, devis gratuit. Disponibles en Bourgogne et Nièvre.',
    actions: [{
      type: 'whatsapp',
      href: 'https://wa.me/33766974874',
      label: 'WhatsApp'
    }, {
      type: 'email',
      href: 'mailto:contact@waypoint360.eu',
      label: 'Email'
    }]
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Une question ?',
    desc: 'Contactez-nous par email, nous répondons sous 24h.',
    actions: [{
      type: 'email',
      href: 'mailto:contact@waypoint360.eu',
      label: 'Envoyer un email'
    }]
  }
}`,...r.parameters?.docs?.source}}};const q=["Default","EmailOnly"];export{s as Default,r as EmailOnly,q as __namedExportsOrder,j as default};
