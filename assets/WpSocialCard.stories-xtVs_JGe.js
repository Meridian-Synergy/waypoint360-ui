import{d as w,e as o,g as e,i as u,t as c,o as n}from"./iframe-zW4CPUyb.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const p=["href"],k={class:"wp-social-card__icon"},m={key:0,width:"22",height:"22",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},g={key:1,width:"22",height:"22",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},y={key:2,width:"22",height:"22",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},f={key:3,width:"22",height:"22",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},b={key:4,width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},C={key:5,width:"22",height:"22",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},v={class:"wp-social-card__info"},x={class:"wp-social-card__label"},_={class:"wp-social-card__handle"},d=w({__name:"WpSocialCard",props:{network:{},href:{},label:{},handle:{}},setup(r){return(S,t)=>(n(),o("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",class:"wp-social-card"},[e("div",k,[r.network==="instagram"?(n(),o("svg",m,[...t[0]||(t[0]=[e("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5.5",stroke:"currentColor","stroke-width":"1.75"},null,-1),e("circle",{cx:"12",cy:"12",r:"4.5",stroke:"currentColor","stroke-width":"1.75"},null,-1),e("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor"},null,-1)])])):r.network==="linkedin"?(n(),o("svg",g,[...t[1]||(t[1]=[e("rect",{x:"2",y:"2",width:"20",height:"20",rx:"4",stroke:"currentColor","stroke-width":"1.75"},null,-1),e("path",{d:"M7 10v7M7 7.5v.5",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round"},null,-1),e("path",{d:"M11 17v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round"},null,-1),e("path",{d:"M11 10v7",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round"},null,-1)])])):r.network==="tiktok"?(n(),o("svg",y,[...t[2]||(t[2]=[e("path",{d:"M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):r.network==="youtube"?(n(),o("svg",f,[...t[3]||(t[3]=[e("rect",{x:"2",y:"5",width:"20",height:"14",rx:"4",stroke:"currentColor","stroke-width":"1.75"},null,-1),e("path",{d:"M10 9.5l5 2.5-5 2.5V9.5z",fill:"currentColor"},null,-1)])])):r.network==="whatsapp"?(n(),o("svg",b,[...t[4]||(t[4]=[e("path",{d:"M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52z"},null,-1)])])):r.network==="email"?(n(),o("svg",C,[...t[5]||(t[5]=[e("rect",{x:"2",y:"4",width:"20",height:"16",rx:"3",stroke:"currentColor","stroke-width":"1.75"},null,-1),e("path",{d:"M2 8l10 7 10-7",stroke:"currentColor","stroke-width":"1.75","stroke-linejoin":"round"},null,-1)])])):u("",!0)]),e("div",v,[e("span",x,c(r.label),1),e("span",_,c(r.handle),1)])],8,p))}}),T=h(d,[["__scopeId","data-v-5219c7e3"]]);d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"WpSocialCard",description:"",tags:{},props:[{name:"network",required:!0,type:{name:"SocialNetwork"}},{name:"href",required:!0,type:{name:"string"}},{name:"label",required:!0,type:{name:"string"}},{name:"handle",required:!0,type:{name:"string"}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpSocialCard/WpSocialCard.vue"]});const N={title:"Components/WpSocialCard",component:T,tags:["autodocs"],argTypes:{network:{control:"select",options:["instagram","linkedin","tiktok","youtube","whatsapp","email"]}}},a={args:{network:"instagram",href:"https://www.instagram.com/waypoint360",label:"Instagram",handle:"@waypoint360"}},i={args:{network:"linkedin",href:"https://www.linkedin.com/company/waypoint360/",label:"LinkedIn",handle:"waypoint360"}},s={args:{network:"tiktok",href:"https://www.tiktok.com/@waypoint360",label:"TikTok",handle:"@waypoint360"}},l={args:{network:"youtube",href:"https://www.youtube.com/@waypoint360",label:"YouTube",handle:"@waypoint360"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    network: 'instagram',
    href: 'https://www.instagram.com/waypoint360',
    label: 'Instagram',
    handle: '@waypoint360'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    network: 'linkedin',
    href: 'https://www.linkedin.com/company/waypoint360/',
    label: 'LinkedIn',
    handle: 'waypoint360'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    network: 'tiktok',
    href: 'https://www.tiktok.com/@waypoint360',
    label: 'TikTok',
    handle: '@waypoint360'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    network: 'youtube',
    href: 'https://www.youtube.com/@waypoint360',
    label: 'YouTube',
    handle: '@waypoint360'
  }
}`,...l.parameters?.docs?.source}}};const W=["Instagram","LinkedIn","TikTok","YouTube"];export{a as Instagram,i as LinkedIn,s as TikTok,l as YouTube,W as __namedExportsOrder,N as default};
