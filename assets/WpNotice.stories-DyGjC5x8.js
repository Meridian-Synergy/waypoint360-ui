import{d as f,e as d,f as o,h as g,r as _,n as w,o as l}from"./iframe-CNf4Bg54.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const k={key:0,class:"wp-notice__icon",width:"16",height:"16",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true"},h={class:"wp-notice__text"},i=f({__name:"WpNotice",props:{tone:{default:"info"},icon:{type:Boolean,default:!0}},setup(e){return(m,p)=>(l(),d("div",{class:w(["wp-notice",`wp-notice--${e.tone}`])},[e.icon?(l(),d("svg",k,[...p[0]||(p[0]=[o("circle",{cx:"10",cy:"10",r:"8",stroke:"currentColor","stroke-width":"1.5"},null,-1),o("path",{d:"M10 9v5",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round"},null,-1),o("circle",{cx:"10",cy:"6.5",r:"0.75",fill:"currentColor"},null,-1)])])):g("",!0),o("span",h,[_(m.$slots,"default",{},void 0,!0)])],2))}}),u=b(i,[["__scopeId","data-v-da70f163"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"WpNotice",description:"",tags:{},props:[{name:"tone",description:"Visual tone. `info` and `beta` share the sky accent.",required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"beta"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'info'"}},{name:"icon",description:"Show the leading icon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpNotice/WpNotice.vue"]});const W={title:"Components/WpNotice",component:u,tags:["autodocs"],argTypes:{tone:{control:"select",options:["info","beta","warning","danger"]},icon:{control:"boolean"}},render:e=>({components:{WpNotice:u},setup:()=>({args:e}),template:'<WpNotice v-bind="args">This feature is in beta — outputs must be reviewed before operational use.</WpNotice>'})},a={args:{tone:"info"}},n={args:{tone:"beta"}},r={args:{tone:"warning"}},t={args:{tone:"danger"}},s={args:{tone:"info",icon:!1}},c={args:{tone:"beta"},parameters:{backgrounds:{default:"dark"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'beta'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'danger'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    icon: false
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'beta'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...c.parameters?.docs?.source}}};const x=["Info","Beta","Warning","Danger","NoIcon","Dark"];export{n as Beta,t as Danger,c as Dark,a as Info,s as NoIcon,r as Warning,x as __namedExportsOrder,W as default};
