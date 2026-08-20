import{d as q,e as t,m as C,t as g,f as u,F as f,l as y,n as i,o as n,r as k,k as v}from"./iframe-DJei2uNv.js";import{W}from"./WpLoadingState-BbxfznZx.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./WpSpinner-BQSIpO9q.js";const N={key:1,class:"wp-data-table__empty"},_={key:2,class:"wp-data-table__scroll"},V={class:"wp-data-table"},m=q({__name:"WpDataTable",props:{columns:{},rows:{},rowKey:{default:"id"},loading:{type:Boolean,default:!1},loadingLabel:{default:""},emptyLabel:{default:""},rowClass:{},surface:{type:Boolean,default:!0}},setup(a){const S=a;function D(s,h){const e=s[S.rowKey];return typeof e=="string"||typeof e=="number"?e:h}function w(s){return{"wp-data-table__num":!!s.numeric,"wp-data-table__actions":!!s.actions,"wp-data-table__grow":!!s.grow}}return(s,h)=>(n(),t("div",{class:i(["wp-data-table-wrap",{"wp-data-table-wrap--surface":a.surface}])},[a.loading?(n(),C(W,{key:0,label:a.loadingLabel},null,8,["label"])):a.rows.length?(n(),t("div",_,[u("table",V,[u("thead",null,[u("tr",null,[(n(!0),t(f,null,y(a.columns,e=>(n(),t("th",{key:e.key,class:i(w(e)),scope:"col"},[k(s.$slots,`header-${e.key}`,{column:e},()=>[v(g(e.label),1)],!0)],2))),128))])]),u("tbody",null,[(n(!0),t(f,null,y(a.rows,(e,b)=>(n(),t("tr",{key:D(e,b),class:i(a.rowClass?.(e,b))},[(n(!0),t(f,null,y(a.columns,r=>(n(),t("td",{key:r.key,class:i(w(r))},[k(s.$slots,`cell-${r.key}`,{row:e,column:r,index:b},()=>[v(g(e[r.key]),1)],!0)],2))),128))],2))),128))])])])):(n(),t("p",N,g(a.emptyLabel),1))],2))}}),L=A(m,[["__scopeId","data-v-a586d3bf"]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"WpDataTable",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"WpColumn"}]}},{name:"rows",required:!0,type:{name:"Array",elements:[{name:"T"}]}},{name:"rowKey",description:"Champ servant de clé de ligne.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'id'"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"emptyLabel",description:"Message quand il n'y a rien à montrer — jamais un tableau vide et muet.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"rowClass",description:`Classe posée sur chaque ligne — un état qui teinte la LIGNE entière, comme
une fiche retirée de l'annuaire, ne s'exprime pas dans une cellule.

⚠️ Il n'y a volontairement PAS de \`@click\` de ligne. Une ligne cliquable
n'est atteignable qu'à la souris : ni tabulation, ni Entrée, rien d'annoncé
par un lecteur d'écran. Le lien va dans une cellule, où il est un vrai lien.`,required:!1,type:{name:"TSFunctionType"}},{name:"surface",description:"Dessine la carte. À passer à `false` quand le tableau partage déjà une\nsurface avec d'autres éléments : une carte dans une carte se voit.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"`header-${c.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"column",title:"binding"}]},{name:"`cell-${c.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"column",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpDataTable/WpDataTable.vue"]});const R={title:"Components/WpDataTable",component:L,tags:["autodocs"]},p=[{key:"name",label:"Nom",grow:!0},{key:"city",label:"Lieu"},{key:"flights",label:"Vols",numeric:!0},{key:"actions",actions:!0}],T=[{id:"1",name:"@DRONE",city:"Boulogne-Billancourt",flights:128},{id:"2",name:"AÉRO DRONE",city:"Toulouse",flights:42},{id:"3",name:"AIRLAB INNOVATIONS ET DRONES",city:"Budelière",flights:7}],c={args:{columns:p,rows:T,emptyLabel:"Aucun résultat"},render:a=>({components:{WpDataTable:L},setup:()=>({args:a}),template:`
      <WpDataTable v-bind="args">
        <template #cell-actions>
          <button type="button">Modifier</button>
        </template>
      </WpDataTable>`})},l={args:{columns:p,rows:T,surface:!1,emptyLabel:"Aucun résultat"}},o={args:{columns:p,rows:[],emptyLabel:"Aucun club ne correspond à cette recherche."}},d={args:{columns:p,rows:[],loading:!0,loadingLabel:"Chargement…"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Rien à montrer n'est pas la même chose qu'un tableau vide et muet.",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    rows: [],
    loading: true,
    loadingLabel: 'Chargement…'
  }
}`,...d.parameters?.docs?.source}}};const $=["Standard","SansSurface","Vide","Chargement"];export{d as Chargement,l as SansSurface,c as Standard,o as Vide,$ as __namedExportsOrder,R as default};
