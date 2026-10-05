import{d as J,e as r,t as u,g as d,f as l,F as c,l as v,j as g,o,n as w,A as Q,B as X}from"./iframe-Cm9sVU90.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const ee={class:"wp-certs"},te={key:0,class:"wp-certs__title"},ae={class:"wp-certs__grid"},ne={key:0,class:"wp-certs__title wp-certs__title--groupe"},le={class:"wp-certs__row"},se={class:"wp-certs__item"},ie=["checked","onChange"],re={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},oe={class:"wp-certs__label"},ue={key:0,class:"wp-certs__meta"},de={class:"wp-certs__meta-label"},ce=["value","onChange"],fe=["value"],pe={class:"wp-certs__meta-label"},me=["value","onChange"],he={class:"wp-certs__meta-label"},ye=["value","onChange"],_e={key:1,class:"wp-certs__validity"},be={class:"wp-certs__expiry"},ve={key:0,class:"wp-certs__title"},ge={class:"wp-certs__grid"},we={class:"wp-certs__item"},Ce=["checked","onChange"],Ve={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},xe={class:"wp-certs__label"},Le={key:0,class:"wp-certs__meta"},Se={class:"wp-certs__meta-label"},Te=["value","onChange"],Ae=["value"],De={class:"wp-certs__meta-label"},Oe=["value","onChange"],qe={class:"wp-certs__expiry"},Ee={key:2,class:"wp-certs__hint"},x=J({__name:"WpCertifications",props:{modelValue:{},euTitle:{},nationalTitle:{},labels:{},title:{default:void 0},hint:{default:void 0},additionalTitle:{default:void 0},additionalLabels:{default:void 0},otherLabels:{default:void 0},otherTitle:{default:void 0},withDates:{type:Boolean,default:!1},validityYears:{default:5},validityByKey:{default:void 0},dateLabels:{default:void 0},withCountry:{type:Boolean,default:!1},countryOptions:{default:()=>[]},countryLabel:{default:void 0},defaultCountry:{default:null}},emits:["update:modelValue"],setup(a,{emit:j}){const A=["a1_a3","a2_cofc","sts_01","sts_02"],D=["cats"],P=[...A,...D],N=["certibiocide","certiphyto"],s=a,k=j,L=g(()=>s.withDates||s.withCountry);function f(e){return typeof e=="boolean"?e:!!e?.held}function y(e){return typeof e=="object"&&e?e.obtained??null:null}function S(e){return typeof e=="object"&&e?e.expires??null:null}function p(e){return typeof e=="object"&&e?e.country??null:null}function U(e){const n=s.modelValue[e];return{held:f(n),obtained:y(n),expires:S(n),country:p(n)}}function _(e,n){const t={...U(e),...n},i=L.value?{held:t.held,obtained:t.obtained,expires:t.expires,country:t.country}:t.held;k("update:modelValue",{...s.modelValue,[e]:i})}function O(e){const n=!f(s.modelValue[e]),t=n?p(s.modelValue[e])??s.defaultCountry??null:p(s.modelValue[e]);_(e,{held:n,country:t})}function q(e,n){_(e,{obtained:n.target.value||null})}function M(e,n){_(e,{expires:n.target.value||null})}function E(e,n){_(e,{country:n.target.value||null})}function F(e){return s.validityByKey?.[e]??s.validityYears}function b(e){const n=S(s.modelValue[e]);if(n)return new Date(n);const t=y(s.modelValue[e]);if(!t)return null;const i=new Date(t);return i.setFullYear(i.getFullYear()+F(e)),i}function I(e){return s.dateLabels?.validityInfo?s.dateLabels.validityInfo.replace("{years}",String(F(e))):""}function $(e){return e.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit",year:"numeric"})}function T(e){const n=b(e);if(!n)return"unset";const t=Math.floor((n.getTime()-Date.now())/864e5);return t<0?"expired":t<=60?"soon":"valid"}function R(e){const n=b(e);return n&&s.dateLabels?s.dateLabels.expiresOn.replace("{date}",$(n)):""}function B(e){const n=T(e);return s.dateLabels&&n!=="unset"?s.dateLabels[n]:""}const H=g(()=>!!s.additionalLabels&&Object.keys(s.additionalLabels).length>0),Y=g(()=>Object.keys(s.otherLabels??{})),z=g(()=>[...P,...Y.value]);function W(e){return e===A[0]?s.euTitle??null:e===D[0]?s.nationalTitle??null:e===Y.value[0]?s.otherTitle??null:null}function G(e){return s.labels[e]??s.otherLabels?.[e]??e}return(e,n)=>(o(),r("div",ee,[a.title?(o(),r("p",te,u(a.title),1)):d("",!0),l("div",ae,[(o(!0),r(c,null,v(z.value,t=>(o(),r(c,{key:t},[W(t)?(o(),r("p",ne,u(W(t)),1)):d("",!0),l("div",le,[l("label",se,[l("input",{type:"checkbox",checked:f(a.modelValue[t]),class:"wp-certs__native",onChange:i=>O(t)},null,40,ie),l("span",{class:w(["wp-certs__check",{"wp-certs__check--on":f(a.modelValue[t])}])},[f(a.modelValue[t])?(o(),r("svg",re,[...n[0]||(n[0]=[l("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):d("",!0)],2),l("span",oe,u(G(t)),1)]),L.value&&f(a.modelValue[t])?(o(),r("div",ue,[a.withCountry?(o(),r(c,{key:0},[l("label",de,u(a.countryLabel),1),l("select",{class:"wp-certs__select",value:p(a.modelValue[t])??a.defaultCountry??"",onChange:i=>E(t,i)},[n[1]||(n[1]=l("option",{value:""},"—",-1)),(o(!0),r(c,null,v(a.countryOptions,i=>(o(),r("option",{key:i.value,value:i.value},u(i.label),9,fe))),128))],40,ce)],64)):d("",!0),a.withDates&&a.dateLabels?(o(),r(c,{key:1},[l("label",pe,u(a.dateLabels.obtained),1),l("input",{type:"date",class:"wp-certs__date-input",value:y(a.modelValue[t])??"",onChange:i=>q(t,i)},null,40,me),a.dateLabels.expiresInput?(o(),r(c,{key:0},[l("label",he,u(a.dateLabels.expiresInput),1),l("input",{type:"date",class:"wp-certs__date-input",value:S(a.modelValue[t])??"",onChange:i=>M(t,i)},null,40,ye)],64)):d("",!0),I(t)?(o(),r("span",_e,u(I(t)),1)):d("",!0),b(t)?(o(),r(c,{key:2},[l("span",be,u(R(t)),1),l("span",{class:w(["wp-certs__status",`wp-certs__status--${T(t)}`])},u(B(t)),3)],64)):d("",!0)],64)):d("",!0)])):d("",!0)])],64))),128))]),H.value?(o(),r(c,{key:1},[n[4]||(n[4]=l("div",{class:"wp-certs__divider"},null,-1)),a.additionalTitle?(o(),r("p",ve,u(a.additionalTitle),1)):d("",!0),l("div",ge,[(o(),r(c,null,v(N,t=>Q(l("div",{key:t,class:"wp-certs__row"},[l("label",we,[l("input",{type:"checkbox",checked:f(a.modelValue[t]),class:"wp-certs__native",onChange:i=>O(t)},null,40,Ce),l("span",{class:w(["wp-certs__check",{"wp-certs__check--on":f(a.modelValue[t])}])},[f(a.modelValue[t])?(o(),r("svg",Ve,[...n[2]||(n[2]=[l("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):d("",!0)],2),l("span",xe,u(a.additionalLabels[t]),1)]),L.value&&f(a.modelValue[t])?(o(),r("div",Le,[a.withCountry?(o(),r(c,{key:0},[l("label",Se,u(a.countryLabel),1),l("select",{class:"wp-certs__select",value:p(a.modelValue[t])??a.defaultCountry??"",onChange:i=>E(t,i)},[n[3]||(n[3]=l("option",{value:""},"—",-1)),(o(!0),r(c,null,v(a.countryOptions,i=>(o(),r("option",{key:i.value,value:i.value},u(i.label),9,Ae))),128))],40,Te)],64)):d("",!0),a.withDates&&a.dateLabels?(o(),r(c,{key:1},[l("label",De,u(a.dateLabels.obtained),1),l("input",{type:"date",class:"wp-certs__date-input",value:y(a.modelValue[t])??"",onChange:i=>q(t,i)},null,40,Oe),b(t)?(o(),r(c,{key:0},[l("span",qe,u(R(t)),1),l("span",{class:w(["wp-certs__status",`wp-certs__status--${T(t)}`])},u(B(t)),3)],64)):d("",!0)],64)):d("",!0)])):d("",!0)]),[[X,a.additionalLabels[t]!==void 0]])),64))])],64)):d("",!0),a.hint?(o(),r("p",Ee,u(a.hint),1)):d("",!0)]))}}),Fe=Z(x,[["__scopeId","data-v-324a2701"]]);x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:"default",displayName:"WpCertifications",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"WpCertificationsValue"}},{name:"euTitle",description:"Intitulé du groupe européen. Fourni, un titre s'insère avant la première.",required:!1,type:{name:"string"}},{name:"nationalTitle",description:"Intitulé du groupe national — celui du CATS.",required:!1,type:{name:"string"}},{name:"labels",required:!0,type:{name:"Record",elements:[{name:"DgacKey"},{name:"string"}]}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalTitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalLabels",required:!1,type:{name:"Partial",elements:[{name:"Record",elements:[{name:"AdditionalKey"},{name:"string"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"otherLabels",description:"Titres d'autres juridictions (Part 107, Transport Canada…), dans l'ordre d'affichage.",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]},defaultValue:{func:!1,value:"undefined"}},{name:"otherTitle",description:"Intitulé du groupe de `otherLabels`.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"withDates",description:"Show obtention date + computed expiry/status under each held cert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validityYears",description:"Validity period in years (EU drone competency certs = 5).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"validityByKey",description:"Per-cert validity in years; falls back to `validityYears` for any key not set.",required:!1,type:{name:"Partial",elements:[{name:"Record",elements:[{name:"CertKey"},{name:"number"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"dateLabels",description:"Translated strings for the date UI (required when withDates is true).",required:!1,type:{name:"WpCertificationsDateLabels"},defaultValue:{func:!1,value:"undefined"}},{name:"withCountry",description:"Show an issuing-country selector for each held cert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"countryOptions",description:"Country choices for the selector.",required:!1,type:{name:"Array",elements:[{name:"WpCertCountryOption"}]},defaultValue:{func:!1,value:"() => []"}},{name:"countryLabel",description:"Field label for the country selector.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"defaultCountry",description:"Country pre-selected when a cert is first marked as held.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue",type:{names:["WpCertificationsValue"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpCertifications/WpCertifications.vue"]});const K={a1_a3:"A1/A3 — Open subcategory",a2_cofc:"A2 CofC — Certificate of competency",cats:"CATS — Certified category",sts_01:"STS-01 — Standard scenario VLOS",sts_02:"STS-02 — Standard scenario BVLOS"},Ie={certibiocide:"Certibiocide",certiphyto:"Certiphyto"},Re={obtained:"Obtained on",expiresInput:"Valid until",expiresOn:"Expires on {date}",validityInfo:"Validity: {years} years",valid:"Valid",soon:"Expires soon",expired:"Expired"},je={title:"Components/WpCertifications",component:Fe,tags:["autodocs"]},C={args:{title:"Certifications",labels:K,additionalTitle:"Additional certifications",additionalLabels:Ie,modelValue:{a1_a3:!0,a2_cofc:!1,certiphyto:!0}}},Be=[{value:"FR",label:"France"},{value:"BE",label:"Belgique"},{value:"LU",label:"Luxembourg"},{value:"DE",label:"Allemagne"}],h={args:{title:"Certifications",labels:K,withDates:!0,validityYears:5,dateLabels:Re,withCountry:!0,countryOptions:Be,countryLabel:"Issued in",defaultCountry:"FR",modelValue:{a1_a3:{held:!0,obtained:"2022-03-15",country:"FR"},a2_cofc:{held:!0,obtained:null,expires:"2031-02-18",country:"BE"},cats:{held:!0,obtained:null,country:"FR"},sts_01:!1}}},V={args:{...h.args},parameters:{backgrounds:{default:"dark"}}},m={args:{modelValue:{a1_a3:!0,cats:{held:!0,obtained:"2026-03-01",country:"FR"}},labels:{a1_a3:"A1/A3 (formation de base)",a2_cofc:"A2 CofC",cats:"CATS",sts_01:"STS-01",sts_02:"STS-02"},euTitle:"Certifications européennes",nationalTitle:"Certifications nationales",withDates:!0}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithDates.args
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...V.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`⚠️ Deux portées, et c'est le point de l'histoire : A1/A3, A2 CofC, STS-01 et
STS-02 sont des titres EASA, identiques dans toute l'Union. Le CATS n'existe
qu'en France.

On les SÉPARE au lieu de masquer le CATS hors de France : un filtre reposerait
sur le pays de l'organisation, champ parfois faux, et priverait de sa case un
Français installé à l'étranger. Une étiquette ne coûte qu'une ligne ; un
filtre coûte un fait.`,...m.parameters?.docs?.description}}};const Pe=["Default","WithDates","Dark","ParPortee"];export{V as Dark,C as Default,m as ParPortee,h as WithDates,Pe as __namedExportsOrder,je as default};
