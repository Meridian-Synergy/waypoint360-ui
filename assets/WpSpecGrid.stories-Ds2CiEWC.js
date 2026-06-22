import{d,e,f as r,t as l,h as m,F as u,j as _,o as n}from"./iframe-DzI_atPv.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const v={class:"wp-spec-grid"},h={class:"wp-spec-grid__container"},k={key:0,class:"wp-spec-grid__label"},b={class:"wp-spec-grid__grid"},f=["innerHTML"],w={class:"wp-spec-grid__key"},I={class:"wp-spec-grid__val"},t=d({__name:"WpSpecGrid",props:{items:{},label:{default:""}},setup(c){return(M,S)=>(n(),e("section",v,[r("div",h,[c.label?(n(),e("p",k,l(c.label),1)):m("",!0),r("div",b,[(n(!0),e(u,null,_(c.items,a=>(n(),e("div",{key:a.label,class:"wp-spec-grid__card"},[(n(),e("svg",{class:"wp-spec-grid__icon",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",innerHTML:a.icon},null,8,f)),r("span",w,l(a.label),1),r("span",I,l(a.value),1)]))),128))])])]))}}),y=g(t,[["__scopeId","data-v-a6fe245a"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"WpSpecGrid",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"WpSpecItem"}]}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpSpecGrid/WpSpecGrid.vue"]});const C='<path d="M12 3a7 7 0 1 0 0 14A7 7 0 0 0 12 3zM8 12h8M12 8v8" stroke="currentColor" stroke-linecap="round"/>',i='<circle cx="12" cy="12" r="9" stroke="currentColor"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>',x='<rect x="2" y="7" width="15" height="11" rx="2" stroke="currentColor"/><path d="M17 11l5-3v8l-5-3v-2z" stroke="currentColor" stroke-linejoin="round"/>',p='<path d="M1.5 8.5a13 13 0 0 1 21 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5.5 5.5 0 0 1 7 0" stroke="currentColor" stroke-linecap="round"/><circle cx="12" cy="19" r="1" fill="currentColor"/>',q={title:"Components/WpSpecGrid",component:y,tags:["autodocs"]},o={args:{label:"Caractéristiques techniques",items:[{label:"Poids",value:"47,5 kg",icon:C},{label:"Temps de vol",value:"17 min",icon:i},{label:"Caméra",value:"4K RGB + IR",icon:x},{label:"Portée",value:"2 km",icon:p}]}},s={args:{items:[{label:"Temps de vol",value:"45 min",icon:i},{label:"Portée",value:"10 km",icon:p}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Caractéristiques techniques',
    items: [{
      label: 'Poids',
      value: '47,5 kg',
      icon: weightIcon
    }, {
      label: 'Temps de vol',
      value: '17 min',
      icon: timeIcon
    }, {
      label: 'Caméra',
      value: '4K RGB + IR',
      icon: cameraIcon
    }, {
      label: 'Portée',
      value: '2 km',
      icon: rangeIcon
    }]
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Temps de vol',
      value: '45 min',
      icon: timeIcon
    }, {
      label: 'Portée',
      value: '10 km',
      icon: rangeIcon
    }]
  }
}`,...s.parameters?.docs?.source}}};const B=["Default","TwoItems"];export{o as Default,s as TwoItems,B as __namedExportsOrder,q as default};
