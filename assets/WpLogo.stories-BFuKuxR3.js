import{d as x,e as h,f as a,g as w,o as v}from"./iframe-2dIZ0qC1.js";import"./preload-helper-PPVm8Dsz.js";const F=["width"],k=["fill"],z=["width"],W=["fill"],A=["width"],r="#00AAEF",f="#1B2A4A",d=x({__name:"WpLogo",props:{variant:{default:"horizontal"},color:{default:"navy"},width:{}},setup(m){const p=m,g=w(()=>p.color==="white"?"#FFFFFF":"#1B2A4A"),y={horizontal:300,vertical:175,icon:40},u=w(()=>p.width??y[p.variant]);return(b,e)=>m.variant==="horizontal"?(v(),h("svg",{key:0,width:u.value,viewBox:"0 14 205 56",xmlns:"http://www.w3.org/2000/svg","aria-label":"Waypoint360",role:"img"},[a("g",{transform:"translate(-3.56, 16.65) scale(0.68)"},[a("path",{d:"M 41 70 C 23 53, 17 42, 17 31.5 A 24 24 0 1 1 65 31.5 C 65 42, 59 53, 41 70 Z",fill:r}),e[0]||(e[0]=a("circle",{cx:"41",cy:"31.5",r:"10.5",fill:"#FFFFFF"},null,-1)),a("circle",{cx:"41",cy:"31.5",r:"4",fill:f})]),a("text",{x:"58",y:"38","font-family":"'Barlow',Arial,sans-serif","font-weight":"800","font-size":"20.5",fill:g.value,"letter-spacing":"2.6"},"WAYPOINT",8,k),a("text",{x:"58",y:"63","font-family":"'Barlow',Arial,sans-serif","font-weight":"700","font-size":"20.5",fill:r,"letter-spacing":"5"},"360")],8,F)):m.variant==="vertical"?(v(),h("svg",{key:1,width:u.value,viewBox:"0 0 200 190",xmlns:"http://www.w3.org/2000/svg","aria-label":"Waypoint360",role:"img"},[a("g",{transform:"translate(48.75,2) scale(1.25)"},[a("path",{d:"M 41 70 C 23 53, 17 42, 17 31.5 A 24 24 0 1 1 65 31.5 C 65 42, 59 53, 41 70 Z",fill:r}),e[1]||(e[1]=a("circle",{cx:"41",cy:"31.5",r:"10.5",fill:"#FFFFFF"},null,-1)),a("circle",{cx:"41",cy:"31.5",r:"4",fill:f})]),a("text",{x:"100",y:"130","text-anchor":"middle","font-family":"'Barlow',Arial,sans-serif","font-weight":"800","font-size":"21",fill:g.value,"letter-spacing":"2.8"},"WAYPOINT",8,W),a("text",{x:"100",y:"158","text-anchor":"middle","font-family":"'Barlow',Arial,sans-serif","font-weight":"700","font-size":"21",fill:r,"letter-spacing":"7"},"360")],8,z)):(v(),h("svg",{key:2,width:u.value,viewBox:"0 0 82 82",xmlns:"http://www.w3.org/2000/svg","aria-label":"Waypoint360",role:"img"},[a("path",{d:"M 41 70 C 23 53, 17 42, 17 31.5 A 24 24 0 1 1 65 31.5 C 65 42, 59 53, 41 70 Z",fill:r}),e[2]||(e[2]=a("circle",{cx:"41",cy:"31.5",r:"10.5",fill:"#FFFFFF"},null,-1)),a("circle",{cx:"41",cy:"31.5",r:"4",fill:f})],8,A))}});d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"WpLogo",description:"",tags:{},props:[{name:"variant",description:"Layout variant",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'},{name:'"icon"'}]},defaultValue:{func:!1,value:"'horizontal'"}},{name:"color",description:"Wordmark color — use 'navy' on light backgrounds, 'white' on dark",required:!1,type:{name:"union",elements:[{name:'"navy"'},{name:'"white"'}]},defaultValue:{func:!1,value:"'navy'"}},{name:"width",description:"Explicit pixel width. Defaults: horizontal=300, vertical=175, icon=40",required:!1,type:{name:"number"}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpLogo/WpLogo.vue"]});const _={title:"Brand/WpLogo",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["horizontal","vertical","icon"]},color:{control:"select",options:["navy","white"]},width:{control:"number"}}},t={args:{variant:"horizontal",color:"navy",width:300}},o={args:{variant:"horizontal",color:"white",width:300},parameters:{backgrounds:{default:"dark"}}},n={args:{variant:"vertical",color:"navy",width:175}},i={args:{variant:"vertical",color:"white",width:175},parameters:{backgrounds:{default:"dark"}}},s={args:{variant:"icon",color:"navy",width:40}},l={args:{variant:"icon",color:"white",width:40},parameters:{backgrounds:{default:"dark"}}},c={name:"Icon — header size (28 px)",args:{variant:"icon",color:"navy",width:28}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'horizontal',
    color: 'navy',
    width: 300
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'horizontal',
    color: 'white',
    width: 300
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'vertical',
    color: 'navy',
    width: 175
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'vertical',
    color: 'white',
    width: 175
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    color: 'navy',
    width: 40
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    color: 'white',
    width: 40
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Icon — header size (28 px)',
  args: {
    variant: 'icon',
    color: 'navy',
    width: 28
  }
}`,...c.parameters?.docs?.source}}};const I=["HorizontalNavy","HorizontalWhite","VerticalNavy","VerticalWhite","IconNavy","IconWhite","IconSmall"];export{t as HorizontalNavy,o as HorizontalWhite,s as IconNavy,c as IconSmall,l as IconWhite,n as VerticalNavy,i as VerticalWhite,I as __namedExportsOrder,_ as default};
