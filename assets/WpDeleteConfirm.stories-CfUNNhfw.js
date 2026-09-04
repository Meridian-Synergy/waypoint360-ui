import{d as g,e as u,f as o,t as l,i as m,g as q,o as p}from"./iframe-BwD7gIQG.js";import{W as d}from"./WpButton-nRK1ajg7.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const C=["aria-label"],S={class:"wp-delete-confirm__title"},v={class:"wp-delete-confirm__consequence"},L={class:"wp-delete-confirm__actions"},D={key:0,class:"wp-delete-confirm__error",role:"alert"},i=g({__name:"WpDeleteConfirm",props:{title:{},consequence:{},confirmLabel:{},cancelLabel:{},busyLabel:{default:""},busy:{type:Boolean,default:!1},error:{default:""}},emits:["confirm","cancel"],setup(e,{emit:f}){const c=f;return(h,s)=>(p(),u("div",{class:"wp-delete-confirm",role:"group","aria-label":e.title},[o("p",S,l(e.title),1),o("p",v,l(e.consequence),1),o("div",L,[m(d,{variant:"danger",size:"sm",disabled:e.busy,label:e.busy&&e.busyLabel?e.busyLabel:e.confirmLabel,onClick:s[0]||(s[0]=b=>c("confirm"))},null,8,["disabled","label"]),m(d,{variant:"soft",size:"sm",label:e.cancelLabel,onClick:s[1]||(s[1]=b=>c("cancel"))},null,8,["label"])]),e.error?(p(),u("p",D,l(e.error),1)):q("",!0)],8,C))}}),_=y(i,[["__scopeId","data-v-eeb56206"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"WpDeleteConfirm",description:"",tags:{},props:[{name:"title",description:"« Supprimer Denis Gosset ? » — nommer la cible, jamais « cet élément ».",required:!0,type:{name:"string"}},{name:"consequence",description:"Ce que la suppression entraîne, et ce qui peut l'empêcher.",required:!0,type:{name:"string"}},{name:"confirmLabel",required:!0,type:{name:"string"}},{name:"cancelLabel",required:!0,type:{name:"string"}},{name:"busyLabel",description:"Affiché pendant l'appel : le bouton reste, son libellé change.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"busy",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",description:"Le refus de l'API, affiché SOUS les boutons plutôt qu'en remplacement.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"confirm"},{name:"cancel"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpDeleteConfirm/WpDeleteConfirm.vue"]});const N={title:"Feedback/WpDeleteConfirm",component:_,tags:["autodocs"],args:{confirmLabel:"Confirmer la suppression",cancelLabel:"Annuler",busyLabel:"Suppression…"}},r={args:{title:"Supprimer Denis Gosset ?",consequence:"Cette action est irréversible. Uniquement possible si la société n'a aucun utilisateur."}},t={name:"Conséquence détaillée",args:{title:"Supprimer le drone DJI Mini 5 Pro ?",consequence:"Ses vols restent dans le carnet mais ne seront plus rattachés à un appareil. Le QR de retour en cas de perte cessera de fonctionner immédiatement."}},n={name:"Suppression en cours",args:{title:"Supprimer Denis Gosset ?",consequence:"Cette action est irréversible.",busy:!0}},a={name:"Refus de l’API",args:{title:"Supprimer Meridian Synergy ?",consequence:"Cette action est irréversible. Uniquement possible si la société n'a aucun utilisateur.",error:"Cette société compte encore 3 utilisateurs."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Supprimer Denis Gosset ?',
    consequence: "Cette action est irréversible. Uniquement possible si la société n'a aucun utilisateur."
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Conséquence détaillée',
  args: {
    title: 'Supprimer le drone DJI Mini 5 Pro ?',
    consequence: "Ses vols restent dans le carnet mais ne seront plus rattachés à un appareil. Le QR de retour en cas de perte cessera de fonctionner immédiatement."
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Suppression en cours',
  args: {
    title: 'Supprimer Denis Gosset ?',
    consequence: 'Cette action est irréversible.',
    busy: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Refus de l’API',
  args: {
    title: 'Supprimer Meridian Synergy ?',
    consequence: "Cette action est irréversible. Uniquement possible si la société n'a aucun utilisateur.",
    error: 'Cette société compte encore 3 utilisateurs.'
  }
}`,...a.parameters?.docs?.source}}};const R=["Standard","ConsequenceLongue","EnCours","Refus"];export{t as ConsequenceLongue,n as EnCours,a as Refus,r as Standard,R as __namedExportsOrder,N as default};
