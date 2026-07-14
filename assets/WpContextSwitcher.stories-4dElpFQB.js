import{d as T,m as W,u as D,e as n,f as c,t as l,h as k,n as h,x as M,F as w,j as C,q as I,g as b,o as a}from"./iframe-Cm7RSU9_.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const q=["aria-expanded"],B={class:"wp-cs__trigger-text"},V={class:"wp-cs__name"},X={key:0,class:"wp-cs__universe"},A={key:0,class:"wp-cs__dropdown",role:"listbox"},F={class:"wp-cs__group-label"},U=["aria-selected","onClick"],m=T({__name:"WpContextSwitcher",props:{contexts:{},activeOrgId:{},theme:{default:"dark"}},emits:["select"],setup(i,{emit:y}){const g=i,O=y,s=I(!1),v=I(null),_=b(()=>g.contexts.find(e=>e.orgId===g.activeOrgId)),S=["individual","pro_operator","public_service","client"],E=b(()=>{const e=new Map;for(const t of g.contexts){const r=e.get(t.universe)??[];r.push(t),e.set(t.universe,r)}return S.filter(t=>e.has(t)).map(t=>({universe:t,label:e.get(t)[0].universeLabel,contexts:e.get(t)}))});function L(){s.value=!s.value}function N(e){s.value=!1,O("select",e)}function x(e){v.value&&!v.value.contains(e.target)&&(s.value=!1)}return W(()=>document.addEventListener("click",x,!0)),D(()=>document.removeEventListener("click",x,!0)),(e,t)=>(a(),n("div",{ref_key:"containerRef",ref:v,class:h(["wp-cs",`wp-cs--${i.theme}`])},[c("button",{class:"wp-cs__trigger","aria-expanded":s.value,"aria-haspopup":"listbox",onClick:M(L,["stop"])},[c("span",B,[c("span",V,l(_.value?.name),1),_.value?(a(),n("span",X,l(_.value.universeLabel),1)):k("",!0)]),(a(),n("svg",{class:h(["wp-cs__chevron",{"wp-cs__chevron--open":s.value}]),width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor","aria-hidden":"true"},[...t[0]||(t[0]=[c("path",{d:"M6 8 L1 3 L11 3 Z"},null,-1)])],2))],8,q),s.value?(a(),n("div",A,[(a(!0),n(w,null,C(E.value,r=>(a(),n("div",{key:r.universe,class:"wp-cs__group"},[c("p",F,l(r.label),1),(a(!0),n(w,null,C(r.contexts,o=>(a(),n("button",{key:o.orgId,role:"option","aria-selected":o.orgId===i.activeOrgId,class:h(["wp-cs__option",{"wp-cs__option--active":o.orgId===i.activeOrgId}]),onClick:$=>N(o.orgId)},l(o.name),11,U))),128))]))),128))])):k("",!0)],2))}}),j=R(m,[["__scopeId","data-v-cd77cbda"]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"WpContextSwitcher",description:"",tags:{},props:[{name:"contexts",required:!0,type:{name:"Array",elements:[{name:"ContextOption"}]}},{name:"activeOrgId",required:!0,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"theme",required:!1,type:{name:"union",elements:[{name:'"dark"'},{name:'"light"'}]},defaultValue:{func:!1,value:"'dark'"}}],events:[{name:"select",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpContextSwitcher/WpContextSwitcher.vue"]});const H={title:"App/WpContextSwitcher",component:j,tags:["autodocs"],argTypes:{theme:{control:"select",options:["dark","light"]}}},f=[{orgId:"org-ind",name:"Mon espace",universe:"individual",universeLabel:"Individuel"},{orgId:"org-op",name:"AgriDrone",universe:"client",universeLabel:"Client"}],d={args:{contexts:f,activeOrgId:"org-ind",theme:"dark"},parameters:{backgrounds:{default:"navy"}}},u={args:{contexts:f,activeOrgId:"org-op",theme:"light"},parameters:{backgrounds:{default:"light"}}},p={name:"Single context",args:{contexts:[f[0]],activeOrgId:"org-ind",theme:"dark"},parameters:{backgrounds:{default:"navy"}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    contexts: CONTEXTS,
    activeOrgId: 'org-ind',
    theme: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    contexts: CONTEXTS,
    activeOrgId: 'org-op',
    theme: 'light'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Single context',
  args: {
    contexts: [CONTEXTS[0]],
    activeOrgId: 'org-ind',
    theme: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}`,...p.parameters?.docs?.source}}};const J=["Dark","Light","SingleContext"];export{d as Dark,u as Light,p as SingleContext,J as __namedExportsOrder,H as default};
