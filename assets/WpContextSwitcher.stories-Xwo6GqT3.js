import{d as M,q as V,D as W,e as t,f as u,t as d,g as k,n as x,E as R,F as O,l as S,h as L,j as I,o as a}from"./iframe-0Gw1LY5E.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const X=["aria-expanded"],$={class:"wp-cs__trigger-text"},F={class:"wp-cs__name"},j={key:0,class:"wp-cs__universe"},z={key:0,class:"wp-cs__dropdown",role:"listbox"},G={key:0,class:"wp-cs__group-label"},Q=["aria-selected","onClick"],v=M({__name:"WpContextSwitcher",props:{contexts:{},activeOrgId:{},activeIntention:{default:null},theme:{default:"dark"}},emits:["select"],setup(w,{emit:E}){const o=w,D=E,r=L(!1),_=L(null);function f(e){return e.orgId!==o.activeOrgId?!1:e.intention===void 0||e.intention===o.activeIntention}const l=I(()=>o.contexts.find(f));function T(e){return`${e.orgId}::${e.intention??""}`}const h=I(()=>new Set(o.contexts.map(e=>e.orgId)).size<=1);function y(e){return h.value?e.universeLabel:e.name}const A=["individual","pro_operator","public_service","client"],U=I(()=>{const e=new Map;for(const n of o.contexts){const s=e.get(n.universe)??[];s.push(n),e.set(n.universe,s)}return A.filter(n=>e.has(n)).map(n=>({universe:n,label:e.get(n)[0].universeLabel,contexts:e.get(n)}))});function N(){r.value=!r.value}function q(e){r.value=!1,D("select",e.orgId,e.intention)}function C(e){_.value&&!_.value.contains(e.target)&&(r.value=!1)}return V(()=>document.addEventListener("click",C,!0)),W(()=>document.removeEventListener("click",C,!0)),(e,n)=>(a(),t("div",{ref_key:"containerRef",ref:_,class:x(["wp-cs",`wp-cs--${w.theme}`])},[u("button",{class:"wp-cs__trigger","aria-expanded":r.value,"aria-haspopup":"listbox",onClick:R(N,["stop"])},[u("span",$,[u("span",F,d(l.value?y(l.value):""),1),l.value&&!h.value?(a(),t("span",j,d(l.value.universeLabel),1)):k("",!0)]),(a(),t("svg",{class:x(["wp-cs__chevron",{"wp-cs__chevron--open":r.value}]),width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor","aria-hidden":"true"},[...n[0]||(n[0]=[u("path",{d:"M6 8 L1 3 L11 3 Z"},null,-1)])],2))],8,X),r.value?(a(),t("div",z,[(a(!0),t(O,null,S(U.value,s=>(a(),t("div",{key:s.universe,class:"wp-cs__group"},[h.value?k("",!0):(a(),t("p",G,d(s.label),1)),(a(!0),t(O,null,S(s.contexts,i=>(a(),t("button",{key:T(i),role:"option","aria-selected":f(i),class:x(["wp-cs__option",{"wp-cs__option--active":f(i)}]),onClick:H=>q(i)},d(y(i)),11,Q))),128))]))),128))])):k("",!0)],2))}}),Z=B(v,[["__scopeId","data-v-7cb201d7"]]);v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"WpContextSwitcher",description:"",tags:{},props:[{name:"contexts",required:!0,type:{name:"Array",elements:[{name:"ContextOption"}]}},{name:"activeOrgId",required:!0,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"activeIntention",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"theme",required:!1,type:{name:"union",elements:[{name:'"dark"'},{name:'"light"'}]},defaultValue:{func:!1,value:"'dark'"}}],events:[{name:"select",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpContextSwitcher/WpContextSwitcher.vue"]});const Y={title:"App/WpContextSwitcher",component:Z,tags:["autodocs"],argTypes:{theme:{control:"select",options:["dark","light"]}}},b=[{orgId:"org-ind",name:"Mon espace",universe:"individual",universeLabel:"Individuel"},{orgId:"org-op",name:"AgriDrone",universe:"client",universeLabel:"Client"}],p={args:{contexts:b,activeOrgId:"org-ind",theme:"dark"},parameters:{backgrounds:{default:"navy"}}},g={args:{contexts:b,activeOrgId:"org-op",theme:"light"},parameters:{backgrounds:{default:"light"}}},m={name:"Single context",args:{contexts:[b[0]],activeOrgId:"org-ind",theme:"dark"},parameters:{backgrounds:{default:"navy"}}},c={name:"Un pro qui achète aussi",args:{contexts:[{orgId:"org-op",name:"AgriDrone",universe:"pro_operator",universeLabel:"Télépilote",intention:"droniste"},{orgId:"org-op",name:"AgriDrone",universe:"client",universeLabel:"Client",intention:"client"}],activeOrgId:"org-op",activeIntention:"droniste",theme:"dark"},parameters:{backgrounds:{default:"navy"}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Un pro qui achète aussi',
  args: {
    contexts: [{
      orgId: 'org-op',
      name: 'AgriDrone',
      universe: 'pro_operator' as const,
      universeLabel: 'Télépilote',
      intention: 'droniste'
    }, {
      orgId: 'org-op',
      name: 'AgriDrone',
      universe: 'client' as const,
      universeLabel: 'Client',
      intention: 'client'
    }],
    activeOrgId: 'org-op',
    activeIntention: 'droniste',
    theme: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'navy'
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`⚠️ LE CAS QUI A MOTIVÉ L'USAGE : une seule organisation, deux casquettes. Le
nom n'y distingue rien et disparaît ; ce sont les usages qui portent les
lignes, et la bascule se fait sans changer d'organisation.`,...c.parameters?.docs?.description}}};const ee=["Dark","Light","SingleContext","DeuxUsagesUneOrganisation"];export{p as Dark,c as DeuxUsagesUneOrganisation,g as Light,m as SingleContext,ee as __namedExportsOrder,Y as default};
