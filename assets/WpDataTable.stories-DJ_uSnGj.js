import{d as _,e as n,m as W,t as p,f as u,F as b,l as g,n as f,o as t,r as k,k as v}from"./iframe-BdsBXS_d.js";import{W as A}from"./WpLoadingState-CwOtI0WW.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./WpSpinner-Bs43AJS5.js";const V={key:1,class:"wp-data-table__empty"},q={key:2,class:"wp-data-table__scroll"},B={class:"wp-data-table"},d=_({__name:"WpDataTable",props:{columns:{},rows:{},rowKey:{default:"id"},loading:{type:Boolean,default:!1},loadingLabel:{default:""},emptyLabel:{default:""},surface:{type:Boolean,default:!0}},setup(a){const T=a;function S(r,w){const e=r[T.rowKey];return typeof e=="string"||typeof e=="number"?e:w}function y(r){return{"wp-data-table__num":!!r.numeric,"wp-data-table__actions":!!r.actions,"wp-data-table__grow":!!r.grow}}return(r,w)=>(t(),n("div",{class:f(["wp-data-table-wrap",{"wp-data-table-wrap--surface":a.surface}])},[a.loading?(t(),W(A,{key:0,label:a.loadingLabel},null,8,["label"])):a.rows.length?(t(),n("div",q,[u("table",B,[u("thead",null,[u("tr",null,[(t(!0),n(b,null,g(a.columns,e=>(t(),n("th",{key:e.key,class:f(y(e)),scope:"col"},[k(r.$slots,`header-${e.key}`,{column:e},()=>[v(p(e.label),1)],!0)],2))),128))])]),u("tbody",null,[(t(!0),n(b,null,g(a.rows,(e,h)=>(t(),n("tr",{key:S(e,h)},[(t(!0),n(b,null,g(a.columns,s=>(t(),n("td",{key:s.key,class:f(y(s))},[k(r.$slots,`cell-${s.key}`,{row:e,column:s,index:h},()=>[v(p(e[s.key]),1)],!0)],2))),128))]))),128))])])])):(t(),n("p",V,p(a.emptyLabel),1))],2))}}),L=N(d,[["__scopeId","data-v-10298de4"]]);d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"WpDataTable",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"WpColumn"}]}},{name:"rows",required:!0,type:{name:"Array",elements:[{name:"T"}]}},{name:"rowKey",description:"Champ servant de clé de ligne.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"emptyLabel",description:"Message quand il n'y a rien à montrer — jamais un tableau vide et muet.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"surface",description:"Dessine la carte. À passer à `false` quand le tableau partage déjà une\nsurface avec d'autres éléments : une carte dans une carte se voit.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"`header-${c.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"column",title:"binding"}]},{name:"`cell-${c.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"column",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpDataTable/WpDataTable.vue"]});const $={title:"Components/WpDataTable",component:L,tags:["autodocs"]},m=[{key:"name",label:"Nom",grow:!0},{key:"city",label:"Lieu"},{key:"flights",label:"Vols",numeric:!0},{key:"actions",actions:!0}],D=[{id:"1",name:"@DRONE",city:"Boulogne-Billancourt",flights:128},{id:"2",name:"AÉRO DRONE",city:"Toulouse",flights:42},{id:"3",name:"AIRLAB INNOVATIONS ET DRONES",city:"Budelière",flights:7}],c={args:{columns:m,rows:D,emptyLabel:"Aucun résultat"},render:a=>({components:{WpDataTable:L},setup:()=>({args:a}),template:`
      <WpDataTable v-bind="args">
        <template #cell-actions>
          <button type="button">Modifier</button>
        </template>
      </WpDataTable>`})},l={args:{columns:m,rows:D,surface:!1,emptyLabel:"Aucun résultat"}},o={args:{columns:m,rows:[],emptyLabel:"Aucun club ne correspond à cette recherche."}},i={args:{columns:m,rows:[],loading:!0,loadingLabel:"Chargement…"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    rows,
    emptyLabel: 'Aucun résultat'
  },
  render: args => ({
    components: {
      WpDataTable
    },
    setup: () => ({
      args
    }),
    template: \`
      <WpDataTable v-bind="args">
        <template #cell-actions>
          <button type="button">Modifier</button>
        </template>
      </WpDataTable>\`
  })
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    rows,
    surface: false,
    emptyLabel: 'Aucun résultat'
  }
}`,...l.parameters?.docs?.source},description:{story:"Quand le tableau partage déjà une carte : une carte dans une carte se voit.",...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    rows: [],
    emptyLabel: 'Aucun club ne correspond à cette recherche.'
  }
}`,...o.parameters?.docs?.source},description:{story:"Rien à montrer n'est pas la même chose qu'un tableau vide et muet.",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    rows: [],
    loading: true,
    loadingLabel: 'Chargement…'
  }
}`,...i.parameters?.docs?.source}}};const I=["Standard","SansSurface","Vide","Chargement"];export{i as Chargement,l as SansSurface,c as Standard,o as Vide,I as __namedExportsOrder,$ as default};
