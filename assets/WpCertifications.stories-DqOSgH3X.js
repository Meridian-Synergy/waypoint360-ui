import{d as z,e as i,t as u,g as d,f as l,F as c,l as v,j as T,o as r,n as g,x as G,y as J}from"./iframe-B8mFQc1u.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const X={class:"wp-certs"},Z={key:0,class:"wp-certs__title"},ee={class:"wp-certs__grid"},te={key:0,class:"wp-certs__title wp-certs__title--groupe"},ae={class:"wp-certs__row"},ne={class:"wp-certs__item"},le=["checked","onChange"],se={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},ie={class:"wp-certs__label"},re={key:0,class:"wp-certs__meta"},oe={class:"wp-certs__meta-label"},ue=["value","onChange"],de=["value"],ce={class:"wp-certs__meta-label"},fe=["value","onChange"],me={class:"wp-certs__meta-label"},pe=["value","onChange"],he={key:1,class:"wp-certs__validity"},ye={class:"wp-certs__expiry"},_e={key:0,class:"wp-certs__title"},be={class:"wp-certs__grid"},ve={class:"wp-certs__item"},ge=["checked","onChange"],we={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},Ce={class:"wp-certs__label"},Ve={key:0,class:"wp-certs__meta"},xe={class:"wp-certs__meta-label"},Se=["value","onChange"],Le=["value"],Te={class:"wp-certs__meta-label"},Ae=["value","onChange"],De={class:"wp-certs__expiry"},qe={key:2,class:"wp-certs__hint"},V=z({__name:"WpCertifications",props:{modelValue:{},euTitle:{},nationalTitle:{},labels:{},title:{default:void 0},hint:{default:void 0},additionalTitle:{default:void 0},additionalLabels:{default:void 0},withDates:{type:Boolean,default:!1},validityYears:{default:5},validityByKey:{default:void 0},dateLabels:{default:void 0},withCountry:{type:Boolean,default:!1},countryOptions:{default:()=>[]},countryLabel:{default:void 0},defaultCountry:{default:null}},emits:["update:modelValue"],setup(a,{emit:K}){const A=["a1_a3","a2_cofc","sts_01","sts_02"],D=["cats"],N=[...A,...D],P=["certibiocide","certiphyto"],o=a,j=K,x=T(()=>o.withDates||o.withCountry);function f(t){return typeof t=="boolean"?t:!!t?.held}function y(t){return typeof t=="object"&&t?t.obtained??null:null}function S(t){return typeof t=="object"&&t?t.expires??null:null}function m(t){return typeof t=="object"&&t?t.country??null:null}function k(t){const n=o.modelValue[t];return{held:f(n),obtained:y(n),expires:S(n),country:m(n)}}function _(t,n){const e={...k(t),...n},s=x.value?{held:e.held,obtained:e.obtained,expires:e.expires,country:e.country}:e.held;j("update:modelValue",{...o.modelValue,[t]:s})}function q(t){const n=!f(o.modelValue[t]),e=n?m(o.modelValue[t])??o.defaultCountry??null:m(o.modelValue[t]);_(t,{held:n,country:e})}function O(t,n){_(t,{obtained:n.target.value||null})}function U(t,n){_(t,{expires:n.target.value||null})}function E(t,n){_(t,{country:n.target.value||null})}function F(t){return o.validityByKey?.[t]??o.validityYears}function b(t){const n=S(o.modelValue[t]);if(n)return new Date(n);const e=y(o.modelValue[t]);if(!e)return null;const s=new Date(e);return s.setFullYear(s.getFullYear()+F(t)),s}function I(t){return o.dateLabels?.validityInfo?o.dateLabels.validityInfo.replace("{years}",String(F(t))):""}function M(t){return t.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit",year:"numeric"})}function L(t){const n=b(t);if(!n)return"unset";const e=Math.floor((n.getTime()-Date.now())/864e5);return e<0?"expired":e<=60?"soon":"valid"}function B(t){const n=b(t);return n&&o.dateLabels?o.dateLabels.expiresOn.replace("{date}",M(n)):""}function R(t){const n=L(t);return o.dateLabels&&n!=="unset"?o.dateLabels[n]:""}const $=T(()=>!!o.additionalLabels&&Object.keys(o.additionalLabels).length>0),H=T(()=>[...N]);function Y(t){return t===A[0]?o.euTitle??null:t===D[0]?o.nationalTitle??null:null}return(t,n)=>(r(),i("div",X,[a.title?(r(),i("p",Z,u(a.title),1)):d("",!0),l("div",ee,[(r(!0),i(c,null,v(H.value,e=>(r(),i(c,{key:e},[Y(e)?(r(),i("p",te,u(Y(e)),1)):d("",!0),l("div",ae,[l("label",ne,[l("input",{type:"checkbox",checked:f(a.modelValue[e]),class:"wp-certs__native",onChange:s=>q(e)},null,40,le),l("span",{class:g(["wp-certs__check",{"wp-certs__check--on":f(a.modelValue[e])}])},[f(a.modelValue[e])?(r(),i("svg",se,[...n[0]||(n[0]=[l("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):d("",!0)],2),l("span",ie,u(a.labels[e]),1)]),x.value&&f(a.modelValue[e])?(r(),i("div",re,[a.withCountry?(r(),i(c,{key:0},[l("label",oe,u(a.countryLabel),1),l("select",{class:"wp-certs__select",value:m(a.modelValue[e])??a.defaultCountry??"",onChange:s=>E(e,s)},[n[1]||(n[1]=l("option",{value:""},"—",-1)),(r(!0),i(c,null,v(a.countryOptions,s=>(r(),i("option",{key:s.value,value:s.value},u(s.label),9,de))),128))],40,ue)],64)):d("",!0),a.withDates&&a.dateLabels?(r(),i(c,{key:1},[l("label",ce,u(a.dateLabels.obtained),1),l("input",{type:"date",class:"wp-certs__date-input",value:y(a.modelValue[e])??"",onChange:s=>O(e,s)},null,40,fe),a.dateLabels.expiresInput?(r(),i(c,{key:0},[l("label",me,u(a.dateLabels.expiresInput),1),l("input",{type:"date",class:"wp-certs__date-input",value:S(a.modelValue[e])??"",onChange:s=>U(e,s)},null,40,pe)],64)):d("",!0),I(e)?(r(),i("span",he,u(I(e)),1)):d("",!0),b(e)?(r(),i(c,{key:2},[l("span",ye,u(B(e)),1),l("span",{class:g(["wp-certs__status",`wp-certs__status--${L(e)}`])},u(R(e)),3)],64)):d("",!0)],64)):d("",!0)])):d("",!0)])],64))),128))]),$.value?(r(),i(c,{key:1},[n[4]||(n[4]=l("div",{class:"wp-certs__divider"},null,-1)),a.additionalTitle?(r(),i("p",_e,u(a.additionalTitle),1)):d("",!0),l("div",be,[(r(),i(c,null,v(P,e=>G(l("div",{key:e,class:"wp-certs__row"},[l("label",ve,[l("input",{type:"checkbox",checked:f(a.modelValue[e]),class:"wp-certs__native",onChange:s=>q(e)},null,40,ge),l("span",{class:g(["wp-certs__check",{"wp-certs__check--on":f(a.modelValue[e])}])},[f(a.modelValue[e])?(r(),i("svg",we,[...n[2]||(n[2]=[l("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):d("",!0)],2),l("span",Ce,u(a.additionalLabels[e]),1)]),x.value&&f(a.modelValue[e])?(r(),i("div",Ve,[a.withCountry?(r(),i(c,{key:0},[l("label",xe,u(a.countryLabel),1),l("select",{class:"wp-certs__select",value:m(a.modelValue[e])??a.defaultCountry??"",onChange:s=>E(e,s)},[n[3]||(n[3]=l("option",{value:""},"—",-1)),(r(!0),i(c,null,v(a.countryOptions,s=>(r(),i("option",{key:s.value,value:s.value},u(s.label),9,Le))),128))],40,Se)],64)):d("",!0),a.withDates&&a.dateLabels?(r(),i(c,{key:1},[l("label",Te,u(a.dateLabels.obtained),1),l("input",{type:"date",class:"wp-certs__date-input",value:y(a.modelValue[e])??"",onChange:s=>O(e,s)},null,40,Ae),b(e)?(r(),i(c,{key:0},[l("span",De,u(B(e)),1),l("span",{class:g(["wp-certs__status",`wp-certs__status--${L(e)}`])},u(R(e)),3)],64)):d("",!0)],64)):d("",!0)])):d("",!0)]),[[J,a.additionalLabels[e]!==void 0]])),64))])],64)):d("",!0),a.hint?(r(),i("p",qe,u(a.hint),1)):d("",!0)]))}}),Oe=Q(V,[["__scopeId","data-v-0e45aced"]]);V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:"default",displayName:"WpCertifications",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"WpCertificationsValue"}},{name:"euTitle",description:"Intitulé du groupe européen. Fourni, un titre s'insère avant la première.",required:!1,type:{name:"string"}},{name:"nationalTitle",description:"Intitulé du groupe national — celui du CATS.",required:!1,type:{name:"string"}},{name:"labels",required:!0,type:{name:"Record",elements:[{name:"DgacKey"},{name:"string"}]}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalTitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalLabels",required:!1,type:{name:"Partial",elements:[{name:"Record",elements:[{name:"AdditionalKey"},{name:"string"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"withDates",description:"Show obtention date + computed expiry/status under each held cert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validityYears",description:"Validity period in years (EU drone competency certs = 5).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"validityByKey",description:"Per-cert validity in years; falls back to `validityYears` for any key not set.",required:!1,type:{name:"Partial",elements:[{name:"Record",elements:[{name:"CertKey"},{name:"number"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"dateLabels",description:"Translated strings for the date UI (required when withDates is true).",required:!1,type:{name:"WpCertificationsDateLabels"},defaultValue:{func:!1,value:"undefined"}},{name:"withCountry",description:"Show an issuing-country selector for each held cert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"countryOptions",description:"Country choices for the selector.",required:!1,type:{name:"Array",elements:[{name:"WpCertCountryOption"}]},defaultValue:{func:!1,value:"() => []"}},{name:"countryLabel",description:"Field label for the country selector.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"defaultCountry",description:"Country pre-selected when a cert is first marked as held.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue",type:{names:["WpCertificationsValue"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpCertifications/WpCertifications.vue"]});const W={a1_a3:"A1/A3 — Open subcategory",a2_cofc:"A2 CofC — Certificate of competency",cats:"CATS — Certified category",sts_01:"STS-01 — Standard scenario VLOS",sts_02:"STS-02 — Standard scenario BVLOS"},Ee={certibiocide:"Certibiocide",certiphyto:"Certiphyto"},Fe={obtained:"Obtained on",expiresInput:"Valid until",expiresOn:"Expires on {date}",validityInfo:"Validity: {years} years",valid:"Valid",soon:"Expires soon",expired:"Expired"},We={title:"Components/WpCertifications",component:Oe,tags:["autodocs"]},w={args:{title:"Certifications",labels:W,additionalTitle:"Additional certifications",additionalLabels:Ee,modelValue:{a1_a3:!0,a2_cofc:!1,certiphyto:!0}}},Ie=[{value:"FR",label:"France"},{value:"BE",label:"Belgique"},{value:"LU",label:"Luxembourg"},{value:"DE",label:"Allemagne"}],h={args:{title:"Certifications",labels:W,withDates:!0,validityYears:5,dateLabels:Fe,withCountry:!0,countryOptions:Ie,countryLabel:"Issued in",defaultCountry:"FR",modelValue:{a1_a3:{held:!0,obtained:"2022-03-15",country:"FR"},a2_cofc:{held:!0,obtained:null,expires:"2031-02-18",country:"BE"},cats:{held:!0,obtained:null,country:"FR"},sts_01:!1}}},C={args:{...h.args},parameters:{backgrounds:{default:"dark"}}},p={args:{modelValue:{a1_a3:!0,cats:{held:!0,obtained:"2026-03-01",country:"FR"}},labels:{a1_a3:"A1/A3 (formation de base)",a2_cofc:"A2 CofC",cats:"CATS",sts_01:"STS-01",sts_02:"STS-02"},euTitle:"Certifications européennes",nationalTitle:"Certifications nationales",withDates:!0}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Certifications',
    labels,
    additionalTitle: 'Additional certifications',
    additionalLabels,
    modelValue: {
      a1_a3: true,
      a2_cofc: false,
      certiphyto: true
    }
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Certifications',
    labels,
    withDates: true,
    validityYears: 5,
    dateLabels,
    withCountry: true,
    countryOptions,
    countryLabel: 'Issued in',
    defaultCountry: 'FR',
    modelValue: {
      a1_a3: {
        held: true,
        obtained: '2022-03-15',
        country: 'FR'
      },
      // expiry derived from obtention
      a2_cofc: {
        held: true,
        obtained: null,
        expires: '2031-02-18',
        country: 'BE'
      },
      // explicit expiry from the certificate
      cats: {
        held: true,
        obtained: null,
        country: 'FR'
      },
      // held, no date yet
      sts_01: false
    }
  }
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithDates.args
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...C.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      a1_a3: true,
      cats: {
        held: true,
        obtained: '2026-03-01',
        country: 'FR'
      }
    },
    labels: {
      a1_a3: 'A1/A3 (formation de base)',
      a2_cofc: 'A2 CofC',
      cats: 'CATS',
      sts_01: 'STS-01',
      sts_02: 'STS-02'
    },
    euTitle: 'Certifications européennes',
    nationalTitle: 'Certifications nationales',
    withDates: true
  }
}`,...p.parameters?.docs?.source},description:{story:`⚠️ Deux portées, et c'est le point de l'histoire : A1/A3, A2 CofC, STS-01 et
STS-02 sont des titres EASA, identiques dans toute l'Union. Le CATS n'existe
qu'en France.

On les SÉPARE au lieu de masquer le CATS hors de France : un filtre reposerait
sur le pays de l'organisation, champ parfois faux, et priverait de sa case un
Français installé à l'étranger. Une étiquette ne coûte qu'une ligne ; un
filtre coûte un fait.`,...p.parameters?.docs?.description}}};const Ke=["Default","WithDates","Dark","ParPortee"];export{C as Dark,w as Default,p as ParPortee,h as WithDates,Ke as __namedExportsOrder,We as default};
