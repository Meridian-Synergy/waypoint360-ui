import{d as i,e as r,f as l,y as c,t as p,h as d,o}from"./iframe-Cy-AHN64.js";import{W as m}from"./WpSpinner-CC_y37zV.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const g={class:"wp-loading-state",role:"status"},f={class:"wp-loading-state__icon"},_={key:0,class:"wp-loading-state__label"},n=i({__name:"WpLoadingState",props:{label:{},size:{default:32}},setup(s){return(y,S)=>(o(),r("div",g,[l("div",f,[c(m,{size:s.size},null,8,["size"])]),s.label?(o(),r("p",_,p(s.label),1)):d("",!0)]))}}),b=u(n,[["__scopeId","data-v-18382247"]]);n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"WpLoadingState",description:"",tags:{},props:[{name:"label",description:"Localized loading text; omit for a spinner-only block",required:!1,type:{name:"string"}},{name:"size",description:"Spinner diameter in pixels",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"32"}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpLoadingState/WpLoadingState.vue"]});const z={title:"Components/WpLoadingState",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Canonical page/section loading block: WpSpinner + optional localized label, centered in a standard state container. Use it for a page or section that is loading; for a small inline/widget loader use WpSpinner directly. The label is passed by the consumer (the DS is i18n-agnostic)."}}},argTypes:{label:{control:{type:"text"}},size:{control:{type:"number"}}}},e={args:{label:"Chargement…"}},a={args:{}},t={args:{label:"Chargement…"},parameters:{backgrounds:{default:"dark"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Chargement…'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Chargement…'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...t.parameters?.docs?.source}}};const C=["Default","SpinnerOnly","Dark"];export{t as Dark,e as Default,a as SpinnerOnly,C as __namedExportsOrder,z as default};
