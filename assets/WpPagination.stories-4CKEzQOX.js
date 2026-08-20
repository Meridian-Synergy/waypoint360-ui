import{d as M,e as o,f,t as P,F as S,l as V,g as $,j as L,o as i,n as W}from"./iframe-CEmcJ4xw.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const A=["aria-label"],B=["disabled"],D={class:"wp-pagination__summary","aria-hidden":"true"},E={class:"wp-pagination__list"},U={key:0,class:"wp-pagination__gap","aria-hidden":"true"},j=["aria-label","aria-current","onClick"],z=["disabled"],_="…",y=M({__name:"WpPagination",props:{page:{},totalPages:{},siblings:{default:1},prevLabel:{default:"Previous"},nextLabel:{default:"Next"},pageLabel:{default:"Page {page}"},ariaLabel:{default:"Pagination"},compactLabel:{default:""}},emits:["update:page"],setup(t,{emit:x}){const n=t,q=x,k=L(()=>{const e=Math.max(1,Math.floor(n.totalPages)),s=Math.min(Math.max(1,Math.floor(n.page)),e),a=Math.max(0,Math.floor(n.siblings));if(e<=a*2+5)return Array.from({length:e},(b,C)=>C+1);const m=Math.max(2,s-a),h=Math.min(e-1,s+a),r=[1];m>2&&r.push(_);for(let b=m;b<=h;b++)r.push(b);return h<e-1&&r.push(_),r.push(e),r}),w=L(()=>n.compactLabel||`${Math.min(n.page,n.totalPages)} / ${n.totalPages}`);function v(e){e<1||e>n.totalPages||e===n.page||q("update:page",e)}function N(e){return n.pageLabel.replace("{page}",String(e))}return(e,s)=>t.totalPages>1?(i(),o("nav",{key:0,class:"wp-pagination","aria-label":t.ariaLabel},[f("button",{type:"button",class:"wp-pagination__step",disabled:t.page<=1,onClick:s[0]||(s[0]=a=>v(t.page-1))},P(t.prevLabel),9,B),f("span",D,P(w.value),1),f("ol",E,[(i(!0),o(S,null,V(k.value,(a,m)=>(i(),o("li",{key:`${a}-${m}`},[a==="…"?(i(),o("span",U,"…")):(i(),o("button",{key:1,type:"button",class:W(["wp-pagination__page",{"wp-pagination__page--current":a===t.page}]),"aria-label":N(a),"aria-current":a===t.page?"page":void 0,onClick:h=>v(a)},P(a),11,j))]))),128))]),f("button",{type:"button",class:"wp-pagination__step",disabled:t.page>=t.totalPages,onClick:s[1]||(s[1]=a=>v(t.page+1))},P(t.nextLabel),9,z)],8,A)):$("",!0)}}),I=F(y,[["__scopeId","data-v-6f4285ad"]]);y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:"default",displayName:"WpPagination",description:"",tags:{},props:[{name:"page",description:"Page courante, à partir de 1.",required:!0,type:{name:"number"}},{name:"totalPages",description:"Nombre total de pages. En dessous de 2, le composant ne rend rien.",required:!0,type:{name:"number"}},{name:"siblings",description:"Numéros affichés de part et d'autre de la page courante.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"prevLabel",description:"Libellé du bouton précédent.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Previous'"}},{name:"nextLabel",description:"Libellé du bouton suivant.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Next'"}},{name:"pageLabel",description:"Nom accessible d'un numéro. `{page}` est remplacé — « page 7 » plutôt que\n« 7 », qu'un lecteur d'écran annonce sans contexte.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Page {page}'"}},{name:"ariaLabel",description:"Nom accessible de la navigation elle-même.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Pagination'"}},{name:"compactLabel",description:"Résumé affiché sur petit écran, où les numéros ne tiennent pas.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:page",type:{names:["number"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpPagination/WpPagination.vue"]});const T={title:"Components/WpPagination",component:I,tags:["autodocs"],argTypes:{page:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},siblings:{control:{type:"number",min:0,max:3}}}},d={prevLabel:"Précédent",nextLabel:"Suivant",pageLabel:"Page {page}",ariaLabel:"Pagination"},l={args:{page:6,totalPages:43,...d}},p={args:{page:1,totalPages:43,...d}},u={args:{page:43,totalPages:43,...d}},c={args:{page:2,totalPages:5,...d}},g={args:{page:1,totalPages:1,...d}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    page: 6,
    totalPages: 43,
    ...labels
  }
}`,...l.parameters?.docs?.source},description:{story:"Le cas qui a motivé le composant : 1 053 organisations, 43 pages.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 43,
    ...labels
  }
}`,...p.parameters?.docs?.source},description:{story:"Au début, l'ellipse de gauche n'a pas lieu d'être.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    page: 43,
    totalPages: 43,
    ...labels
  }
}`,...u.parameters?.docs?.source},description:{story:"À la fin non plus, de l'autre côté.",...u.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    page: 2,
    totalPages: 5,
    ...labels
  }
}`,...c.parameters?.docs?.source},description:{story:"Assez court pour tout montrer : aucune ellipse ne remplace un seul numéro.",...c.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 1,
    ...labels
  }
}`,...g.parameters?.docs?.source},description:{story:"Une seule page : le composant ne rend rien, il ne montre pas « 1 / 1 ».",...g.parameters?.docs?.description}}};const H=["Longue","Debut","Fin","Courte","PageUnique"];export{c as Courte,p as Debut,u as Fin,l as Longue,g as PageUnique,H as __namedExportsOrder,T as default};
