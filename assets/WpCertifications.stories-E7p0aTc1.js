import{d as Z,e as i,t as u,g as c,f as l,F as f,l as L,j as g,o as r,n as A,H as ee,I as te,h as ae}from"./iframe-C4qhFSa9.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";function se(n,E,S){const k=n.filter(d=>!d.collapsed),b=n.filter(d=>d.collapsed),F=b.some(d=>Object.keys(d.labels).some(E)),s=S||F,y=[],m=d=>{const p=Object.keys(d.labels);if(p.length){d.title&&y.push({kind:"title",id:`title-${d.id}`,text:d.title,hint:d.hint});for(const h of p)y.push({kind:"row",id:`row-${h}`,key:h,label:d.labels[h]})}};return k.forEach(m),b.length&&(s?b.forEach(m):y.push({kind:"toggle",id:"toggle-others"})),y}const le={class:"wp-certs"},ie={key:0,class:"wp-certs__title"},re={class:"wp-certs__grid"},oe={class:"wp-certs__title wp-certs__title--groupe"},de={key:0,class:"wp-certs__group-hint"},ue={key:2,class:"wp-certs__row"},ce={class:"wp-certs__item"},fe=["checked","onChange"],pe={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},he={class:"wp-certs__label"},ye={key:0,class:"wp-certs__meta"},me={class:"wp-certs__meta-label"},be=["value","onChange"],_e=["value"],ge={class:"wp-certs__meta-label"},ve=["value","onChange"],Ce={class:"wp-certs__meta-label"},we=["value","onChange"],Se={key:1,class:"wp-certs__validity"},ke={class:"wp-certs__expiry"},Ve={key:0,class:"wp-certs__title"},Te={class:"wp-certs__grid"},Le={class:"wp-certs__item"},Ae=["checked","onChange"],xe={key:0,width:"10",height:"10",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true"},De={class:"wp-certs__label"},Oe={key:0,class:"wp-certs__meta"},Ee={class:"wp-certs__meta-label"},Fe=["value","onChange"],Ie=["value"],qe={class:"wp-certs__meta-label"},Be=["value","onChange"],Re={class:"wp-certs__expiry"},We={key:2,class:"wp-certs__hint"},O=Z({__name:"WpCertifications",props:{modelValue:{},euTitle:{},nationalTitle:{},labels:{},title:{default:void 0},hint:{default:void 0},additionalTitle:{default:void 0},additionalLabels:{default:void 0},otherLabels:{default:void 0},otherTitle:{default:void 0},withDates:{type:Boolean,default:!1},validityYears:{default:5},validityByKey:{default:void 0},dateLabels:{default:void 0},withCountry:{type:Boolean,default:!1},countryOptions:{default:()=>[]},countryLabel:{default:void 0},defaultCountry:{default:null},groups:{default:void 0},othersLabel:{default:void 0}},emits:["update:modelValue"],setup(n,{emit:E}){const S=["a1_a3","a2_cofc","sts_01","sts_02"],k=["cats"],b=[...S,...k],F=["certibiocide","certiphyto"],s=n,y=E,m=g(()=>s.withDates||s.withCountry);function d(e){return typeof e=="boolean"?e:!!e?.held}function p(e){return typeof e=="object"&&e?e.obtained??null:null}function h(e){return typeof e=="object"&&e?e.expires??null:null}function _(e){return typeof e=="object"&&e?e.country??null:null}function $(e){const a=s.modelValue[e];return{held:d(a),obtained:p(a),expires:h(a),country:_(a)}}function V(e,a){const t={...$(e),...a},o=m.value?{held:t.held,obtained:t.obtained,expires:t.expires,country:t.country}:t.held;y("update:modelValue",{...s.modelValue,[e]:o})}function q(e){const a=!d(s.modelValue[e]),t=a?_(s.modelValue[e])??s.defaultCountry??null:_(s.modelValue[e]);V(e,{held:a,country:t})}function B(e,a){V(e,{obtained:a.target.value||null})}function G(e,a){V(e,{expires:a.target.value||null})}function R(e,a){V(e,{country:a.target.value||null})}function W(e){return s.validityByKey?.[e]??s.validityYears}function T(e){const a=h(s.modelValue[e]);if(a)return new Date(a);const t=p(s.modelValue[e]);if(!t)return null;const o=new Date(t);return o.setFullYear(o.getFullYear()+W(e)),o}function Y(e){return s.dateLabels?.validityInfo?s.dateLabels.validityInfo.replace("{years}",String(W(e))):""}function H(e){return e.toLocaleDateString(void 0,{day:"2-digit",month:"2-digit",year:"numeric"})}function I(e){const a=T(e);if(!a)return"unset";const t=Math.floor((a.getTime()-Date.now())/864e5);return t<0?"expired":t<=60?"soon":"valid"}function j(e){const a=T(e);return a&&s.dateLabels?s.dateLabels.expiresOn.replace("{date}",H(a)):""}function K(e){const a=I(e);return s.dateLabels&&a!=="unset"?s.dateLabels[a]:""}const M=g(()=>!!s.additionalLabels&&Object.keys(s.additionalLabels).length>0),N=g(()=>Object.keys(s.otherLabels??{})),z=g(()=>[...b,...N.value]);function J(e){return e===S[0]?s.euTitle??null:e===k[0]?s.nationalTitle??null:e===N.value[0]?s.otherTitle??null:null}function Q(e){return s.labels[e]??s.otherLabels?.[e]??e}const P=ae(!1),X=g(()=>{if(s.groups?.length)return se(s.groups,a=>d(s.modelValue[a]),P.value);const e=[];for(const a of z.value){const t=J(a);t&&e.push({kind:"title",id:`title-${a}`,text:t}),e.push({kind:"row",id:`row-${a}`,key:a,label:Q(a)})}return e});return(e,a)=>(r(),i("div",le,[n.title?(r(),i("p",ie,u(n.title),1)):c("",!0),l("div",re,[(r(!0),i(f,null,L(X.value,t=>(r(),i(f,{key:t.id},[t.kind==="title"?(r(),i(f,{key:0},[l("p",oe,u(t.text),1),t.hint?(r(),i("p",de,u(t.hint),1)):c("",!0)],64)):t.kind==="toggle"?(r(),i("button",{key:1,type:"button",class:"wp-certs__toggle",onClick:a[0]||(a[0]=o=>P.value=!0)},u(n.othersLabel),1)):(r(),i("div",ue,[l("label",ce,[l("input",{type:"checkbox",checked:d(n.modelValue[t.key]),class:"wp-certs__native",onChange:o=>q(t.key)},null,40,fe),l("span",{class:A(["wp-certs__check",{"wp-certs__check--on":d(n.modelValue[t.key])}])},[d(n.modelValue[t.key])?(r(),i("svg",pe,[...a[1]||(a[1]=[l("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):c("",!0)],2),l("span",he,u(t.label),1)]),m.value&&d(n.modelValue[t.key])?(r(),i("div",ye,[n.withCountry?(r(),i(f,{key:0},[l("label",me,u(n.countryLabel),1),l("select",{class:"wp-certs__select",value:_(n.modelValue[t.key])??n.defaultCountry??"",onChange:o=>R(t.key,o)},[a[2]||(a[2]=l("option",{value:""},"—",-1)),(r(!0),i(f,null,L(n.countryOptions,o=>(r(),i("option",{key:o.value,value:o.value},u(o.label),9,_e))),128))],40,be)],64)):c("",!0),n.withDates&&n.dateLabels?(r(),i(f,{key:1},[l("label",ge,u(n.dateLabels.obtained),1),l("input",{type:"date",class:"wp-certs__date-input",value:p(n.modelValue[t.key])??"",onChange:o=>B(t.key,o)},null,40,ve),n.dateLabels.expiresInput?(r(),i(f,{key:0},[l("label",Ce,u(n.dateLabels.expiresInput),1),l("input",{type:"date",class:"wp-certs__date-input",value:h(n.modelValue[t.key])??"",onChange:o=>G(t.key,o)},null,40,we)],64)):c("",!0),Y(t.key)?(r(),i("span",Se,u(Y(t.key)),1)):c("",!0),T(t.key)?(r(),i(f,{key:2},[l("span",ke,u(j(t.key)),1),l("span",{class:A(["wp-certs__status",`wp-certs__status--${I(t.key)}`])},u(K(t.key)),3)],64)):c("",!0)],64)):c("",!0)])):c("",!0)]))],64))),128))]),M.value?(r(),i(f,{key:1},[a[5]||(a[5]=l("div",{class:"wp-certs__divider"},null,-1)),n.additionalTitle?(r(),i("p",Ve,u(n.additionalTitle),1)):c("",!0),l("div",Te,[(r(),i(f,null,L(F,t=>ee(l("div",{key:t,class:"wp-certs__row"},[l("label",Le,[l("input",{type:"checkbox",checked:d(n.modelValue[t]),class:"wp-certs__native",onChange:o=>q(t)},null,40,Ae),l("span",{class:A(["wp-certs__check",{"wp-certs__check--on":d(n.modelValue[t])}])},[d(n.modelValue[t])?(r(),i("svg",xe,[...a[3]||(a[3]=[l("path",{d:"M2 6l3 3 5-5",stroke:"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):c("",!0)],2),l("span",De,u(n.additionalLabels[t]),1)]),m.value&&d(n.modelValue[t])?(r(),i("div",Oe,[n.withCountry?(r(),i(f,{key:0},[l("label",Ee,u(n.countryLabel),1),l("select",{class:"wp-certs__select",value:_(n.modelValue[t])??n.defaultCountry??"",onChange:o=>R(t,o)},[a[4]||(a[4]=l("option",{value:""},"—",-1)),(r(!0),i(f,null,L(n.countryOptions,o=>(r(),i("option",{key:o.value,value:o.value},u(o.label),9,Ie))),128))],40,Fe)],64)):c("",!0),n.withDates&&n.dateLabels?(r(),i(f,{key:1},[l("label",qe,u(n.dateLabels.obtained),1),l("input",{type:"date",class:"wp-certs__date-input",value:p(n.modelValue[t])??"",onChange:o=>B(t,o)},null,40,Be),T(t)?(r(),i(f,{key:0},[l("span",Re,u(j(t)),1),l("span",{class:A(["wp-certs__status",`wp-certs__status--${I(t)}`])},u(K(t)),3)],64)):c("",!0)],64)):c("",!0)])):c("",!0)]),[[te,n.additionalLabels[t]!==void 0]])),64))])],64)):c("",!0),n.hint?(r(),i("p",We,u(n.hint),1)):c("",!0)]))}}),Ye=ne(O,[["__scopeId","data-v-a498c757"]]);O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{exportName:"default",displayName:"WpCertifications",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"WpCertificationsValue"}},{name:"euTitle",description:"Intitulé du groupe européen. Fourni, un titre s'insère avant la première.",required:!1,type:{name:"string"}},{name:"nationalTitle",description:"Intitulé du groupe national — celui du CATS.",required:!1,type:{name:"string"}},{name:"labels",required:!0,type:{name:"Record",elements:[{name:"DgacKey"},{name:"string"}]}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalTitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"additionalLabels",required:!1,type:{name:"Partial",elements:[{name:"Record",elements:[{name:"AdditionalKey"},{name:"string"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"otherLabels",description:"Titres d'autres juridictions (Part 107, Transport Canada…), dans l'ordre d'affichage.",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]},defaultValue:{func:!1,value:"undefined"}},{name:"otherTitle",description:"Intitulé du groupe de `otherLabels`.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"withDates",description:"Show obtention date + computed expiry/status under each held cert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validityYears",description:"Validity period in years (EU drone competency certs = 5).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"validityByKey",description:"Per-cert validity in years; falls back to `validityYears` for any key not set.",required:!1,type:{name:"Partial",elements:[{name:"Record",elements:[{name:"CertKey"},{name:"number"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"dateLabels",description:"Translated strings for the date UI (required when withDates is true).",required:!1,type:{name:"WpCertificationsDateLabels"},defaultValue:{func:!1,value:"undefined"}},{name:"withCountry",description:"Show an issuing-country selector for each held cert.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"countryOptions",description:"Country choices for the selector.",required:!1,type:{name:"Array",elements:[{name:"WpCertCountryOption"}]},defaultValue:{func:!1,value:"() => []"}},{name:"countryLabel",description:"Field label for the country selector.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"defaultCountry",description:"Country pre-selected when a cert is first marked as held.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"groups",description:"Titles grouped by issuing authority, in display order. When set, it replaces\nthe legacy layout (`labels`, `euTitle`, `nationalTitle`, `otherLabels`).",required:!1,type:{name:"Array",elements:[{name:"WpCertGroup"}]},defaultValue:{func:!1,value:"undefined"}},{name:"othersLabel",description:"Label of the button unfolding the `collapsed` groups (e.g. « Other countries »).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue",type:{names:["WpCertificationsValue"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpCertifications/WpCertifications.vue"]});const U={a1_a3:"A1/A3 — Open subcategory",a2_cofc:"A2 CofC — Certificate of competency",cats:"CATS — Certified category",sts_01:"STS-01 — Standard scenario VLOS",sts_02:"STS-02 — Standard scenario BVLOS"},je={certibiocide:"Certibiocide",certiphyto:"Certiphyto"},Ke={obtained:"Obtained on",expiresInput:"Valid until",expiresOn:"Expires on {date}",validityInfo:"Validity: {years} years",valid:"Valid",soon:"Expires soon",expired:"Expired"},Ge={title:"Components/WpCertifications",component:Ye,tags:["autodocs"]},x={args:{title:"Certifications",labels:U,additionalTitle:"Additional certifications",additionalLabels:je,modelValue:{a1_a3:!0,a2_cofc:!1,certiphyto:!0}}},Ne=[{value:"FR",label:"France"},{value:"BE",label:"Belgique"},{value:"LU",label:"Luxembourg"},{value:"DE",label:"Allemagne"}],w={args:{title:"Certifications",labels:U,withDates:!0,validityYears:5,dateLabels:Ke,withCountry:!0,countryOptions:Ne,countryLabel:"Issued in",defaultCountry:"FR",modelValue:{a1_a3:{held:!0,obtained:"2022-03-15",country:"FR"},a2_cofc:{held:!0,obtained:null,expires:"2031-02-18",country:"BE"},cats:{held:!0,obtained:null,country:"FR"},sts_01:!1}}},D={args:{...w.args},parameters:{backgrounds:{default:"dark"}}},v={args:{modelValue:{a1_a3:!0,cats:{held:!0,obtained:"2026-03-01",country:"FR"}},labels:{a1_a3:"A1/A3 (formation de base)",a2_cofc:"A2 CofC",cats:"CATS",sts_01:"STS-01",sts_02:"STS-02"},euTitle:"Certifications européennes",nationalTitle:"Certifications nationales",withDates:!0}},C={args:{modelValue:{a1_a3:!0,part_107:{held:!0,obtained:"2025-03-01",country:"US"}},labels:{a1_a3:"",a2_cofc:"",cats:"",sts_01:"",sts_02:""},groups:[{id:"easa",title:"Europe — EASA",hint:"Issued in France by the DGAC, valid in the EU, Switzerland, Norway, Iceland and Liechtenstein",labels:{a1_a3:"A1/A3: Open subcategories",a2_cofc:"A2 CofC: Certificate of competency",cats:"CATS: Theoretical knowledge, standard scenarios",sts_01:"STS-01: Standard scenario VLOS",sts_02:"STS-02: Standard scenario BVLOS"}},{id:"trade",title:"Trade permits (France)",labels:{certibiocide:"Certibiocide",certiphyto:"Certiphyto"}},{id:"faa",title:"United States — FAA",labels:{part_107:"Part 107: Remote pilot certificate"},collapsed:!0},{id:"tc",title:"Canada — Transport Canada",labels:{tc_basic:"Basic operations",tc_advanced:"Advanced operations"},collapsed:!0}],othersLabel:"Other countries",withDates:!0}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithDates.args
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Legacy layout (`euTitle` / `nationalTitle`), kept for backward compatibility.\n\n⛔ CORRECTED 2026-10-13: this story used to say the CATS « exists only in\nFrance ». It does not: the CATS is the EASA theoretical exam for standard\nscenarios (Reg. (EU) 2019/947, Annex 1 Appendix A), per the DGAC's STS guide.\nNew callers should use `groups` (see `ByAuthority`).",...v.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: {
      a1_a3: true,
      part_107: {
        held: true,
        obtained: '2025-03-01',
        country: 'US'
      }
    },
    labels: {
      a1_a3: '',
      a2_cofc: '',
      cats: '',
      sts_01: '',
      sts_02: ''
    },
    groups: [{
      id: 'easa',
      title: 'Europe — EASA',
      hint: 'Issued in France by the DGAC, valid in the EU, Switzerland, Norway, Iceland and Liechtenstein',
      labels: {
        a1_a3: 'A1/A3: Open subcategories',
        a2_cofc: 'A2 CofC: Certificate of competency',
        cats: 'CATS: Theoretical knowledge, standard scenarios',
        sts_01: 'STS-01: Standard scenario VLOS',
        sts_02: 'STS-02: Standard scenario BVLOS'
      }
    }, {
      id: 'trade',
      title: 'Trade permits (France)',
      labels: {
        certibiocide: 'Certibiocide',
        certiphyto: 'Certiphyto'
      }
    }, {
      id: 'faa',
      title: 'United States — FAA',
      labels: {
        part_107: 'Part 107: Remote pilot certificate'
      },
      collapsed: true
    }, {
      id: 'tc',
      title: 'Canada — Transport Canada',
      labels: {
        tc_basic: 'Basic operations',
        tc_advanced: 'Advanced operations'
      },
      collapsed: true
    }],
    othersLabel: 'Other countries',
    withDates: true
  }
}`,...C.parameters?.docs?.source},description:{story:`Titles grouped by issuing authority. The caller decides the order and which
groups fold under « Other countries »; a folded group unfolds by itself when
one of its titles is held (here the Part 107), so a held title is never hidden.`,...C.parameters?.docs?.description}}};const He=["Default","WithDates","Dark","ParPortee","ByAuthority"];export{C as ByAuthority,D as Dark,x as Default,v as ParPortee,w as WithDates,He as __namedExportsOrder,Ge as default};
