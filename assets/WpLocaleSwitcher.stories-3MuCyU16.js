import{d as j,p as z,x as Y,e as f,f as p,n as w,t as $,y as Z,F as G,k as J,g as P,h as g,B as Q,i as q,o as m,C as X}from"./iframe-B_pMTd2v.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const ae=["aria-expanded","aria-controls"],te={class:"wp-ls__name"},ne=["aria-label","aria-activedescendant"],oe=["id","aria-selected","onClick","onMousemove"],re={class:"wp-ls__option-name"},E=j({__name:"WpLocaleSwitcher",props:{locales:{},currentLocale:{},theme:{default:"dark"},listboxLabel:{default:"Select language"}},emits:["select"],setup(n,{emit:c}){const a=n,s=c,o=g(!1),i=g(null),R=g(null),L=g(null),t=g(-1),S=Q(),H=`${S}-listbox`,C=e=>`${S}-option-${e}`,I=q(()=>a.locales.find(e=>e.code===a.currentLocale)),F=q(()=>a.locales.findIndex(e=>e.code===a.currentLocale));async function O(){o.value=!0,t.value=F.value>=0?F.value:0,await X(),L.value?.focus(),y()}function v(e=!0){o.value&&(o.value=!1,t.value=-1,e&&R.value?.focus())}function K(){o.value?v():O()}function W(e){v(),s("select",e)}function y(){if(t.value<0)return;L.value?.children[t.value]?.scrollIntoView({block:"nearest"})}function N(e){const u=a.locales.length;u&&(t.value=(t.value+e+u)%u,y())}function U(e){(e.key==="ArrowDown"||e.key==="ArrowUp"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),O())}function M(e){switch(e.key){case"ArrowDown":e.preventDefault(),N(1);break;case"ArrowUp":e.preventDefault(),N(-1);break;case"Home":e.preventDefault(),t.value=0,y();break;case"End":e.preventDefault(),t.value=a.locales.length-1,y();break;case"Enter":case" ":e.preventDefault(),t.value>=0&&W(a.locales[t.value].code);break;case"Escape":e.preventDefault(),v();break;case"Tab":e.preventDefault(),v();break}}function T(e){i.value&&!i.value.contains(e.target)&&v(!1)}return z(()=>document.addEventListener("click",T,!0)),Y(()=>document.removeEventListener("click",T,!0)),(e,u)=>(m(),f("div",{ref_key:"containerRef",ref:i,class:w(["wp-ls",`wp-ls--${n.theme}`])},[p("button",{ref_key:"triggerRef",ref:R,type:"button",class:"wp-ls__trigger","aria-expanded":o.value,"aria-haspopup":"listbox","aria-controls":o.value?H:void 0,onClick:Z(K,["stop"]),onKeydown:U},[p("span",{class:w(["fi",`fi-${I.value?.flag}`]),"aria-hidden":"true"},null,2),p("span",te,$(I.value?.name),1),(m(),f("svg",{class:w(["wp-ls__chevron",{"wp-ls__chevron--open":o.value}]),width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor","aria-hidden":"true"},[...u[0]||(u[0]=[p("path",{d:"M6 8 L1 3 L11 3 Z"},null,-1)])],2))],40,ae),o.value?(m(),f("ul",{key:0,id:H,ref_key:"listboxRef",ref:L,class:"wp-ls__dropdown",role:"listbox",tabindex:"-1","aria-label":n.listboxLabel,"aria-activedescendant":t.value>=0?C(t.value):void 0,onKeydown:M},[(m(!0),f(G,null,J(n.locales,(d,B)=>(m(),f("li",{id:C(B),key:d.code,role:"option","aria-selected":d.code===n.currentLocale,class:w(["wp-ls__option",{"wp-ls__option--active":d.code===n.currentLocale,"wp-ls__option--focused":B===t.value}]),onClick:V=>W(d.code),onMousemove:V=>t.value=B},[p("span",{class:w(["fi",`fi-${d.flag}`]),"aria-hidden":"true"},null,2),p("span",re,$(d.name),1)],42,oe))),128))],40,ne)):P("",!0)],2))}}),se=ee(E,[["__scopeId","data-v-a216cf39"]]);E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:"default",displayName:"WpLocaleSwitcher",description:"",tags:{},props:[{name:"locales",required:!0,type:{name:"Array",elements:[{name:"LocaleOption"}]}},{name:"currentLocale",required:!0,type:{name:"string"}},{name:"theme",required:!1,type:{name:"union",elements:[{name:'"dark"'},{name:'"light"'}]},defaultValue:{func:!1,value:"'dark'"}},{name:"listboxLabel",description:`Nom de la liste pour les lecteurs d'écran. Anglais par défaut : le composant
 ne connaît pas la locale de l'application qui l'affiche.`,required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Select language'"}}],events:[{name:"select",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpLocaleSwitcher/WpLocaleSwitcher.vue"]});const{expect:r,userEvent:l,within:D}=__STORYBOOK_MODULE_TEST__,ue={title:"Components/WpLocaleSwitcher",component:se,tags:["autodocs"]},b=[{code:"fr",name:"Français",flag:"fr"},{code:"en",name:"English",flag:"gb"},{code:"de",name:"Deutsch",flag:"de"},{code:"es",name:"Español",flag:"es"}],k={args:{locales:b,currentLocale:"fr"},parameters:{backgrounds:{default:"dark"}}},x={args:{locales:b,currentLocale:"en",theme:"light"},parameters:{backgrounds:{default:"light"}}},h={args:{locales:b,currentLocale:"fr"},parameters:{backgrounds:{default:"dark"}},play:async({canvasElement:n,args:c})=>{const a=D(n),s=a.getByRole("button");s.focus(),await l.keyboard("{ArrowDown}");const o=a.getByRole("listbox");await r(o).toHaveFocus();const i=a.getAllByRole("option");await r(o).toHaveAttribute("aria-activedescendant",i[0].id),await l.keyboard("{ArrowDown}{ArrowDown}"),await r(o).toHaveAttribute("aria-activedescendant",i[2].id),await l.keyboard("{Enter}"),await r(c.onSelect).toHaveBeenCalledWith("de"),await r(s).toHaveFocus()}},_={args:{locales:b,currentLocale:"fr"},parameters:{backgrounds:{default:"dark"}},play:async({canvasElement:n,args:c})=>{const a=D(n),s=a.getByRole("button");s.focus(),await l.keyboard("{Enter}"),await r(a.getByRole("listbox")).toBeInTheDocument(),await l.keyboard("{ArrowDown}{Escape}"),await r(a.queryByRole("listbox")).toBeNull(),await r(c.onSelect).not.toHaveBeenCalled(),await r(s).toHaveFocus()}},A={args:{locales:b,currentLocale:"fr"},parameters:{backgrounds:{default:"dark"}},play:async({canvasElement:n})=>{const c=D(n);c.getByRole("button").focus(),await l.keyboard("{ArrowDown}");const a=c.getByRole("listbox"),s=c.getAllByRole("option");await l.keyboard("{End}"),await r(a).toHaveAttribute("aria-activedescendant",s[3].id),await l.keyboard("{ArrowDown}"),await r(a).toHaveAttribute("aria-activedescendant",s[0].id),await l.keyboard("{ArrowUp}"),await r(a).toHaveAttribute("aria-activedescendant",s[3].id)}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    locales,
    currentLocale: 'fr'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    locales,
    currentLocale: 'en',
    theme: 'light'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    locales,
    currentLocale: 'fr'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toHaveFocus();

    // On entre sur la langue COURANTE, pas en tête de liste : avec 29 langues,
    // repartir du haut coûte le trajet entier.
    const options = canvas.getAllByRole('option');
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[0].id);
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[2].id);
    await userEvent.keyboard('{Enter}');
    await expect(args.onSelect).toHaveBeenCalledWith('de');

    // Le focus revient au déclencheur : la liste vient de disparaître, le laisser
    // filer au \`<body>\` perdrait l'utilisateur au clavier.
    await expect(trigger).toHaveFocus();
  }
}`,...h.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    locales,
    currentLocale: 'fr'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button');
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('listbox')).toBeInTheDocument();
    await userEvent.keyboard('{ArrowDown}{Escape}');
    await expect(canvas.queryByRole('listbox')).toBeNull();
    await expect(args.onSelect).not.toHaveBeenCalled();
    await expect(trigger).toHaveFocus();
  }
}`,..._.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    locales,
    currentLocale: 'fr'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getByRole('button').focus();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = canvas.getByRole('listbox');
    const options = canvas.getAllByRole('option');
    await userEvent.keyboard('{End}');
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[3].id);
    await userEvent.keyboard('{ArrowDown}');
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[0].id);
    await userEvent.keyboard('{ArrowUp}');
    await expect(listbox).toHaveAttribute('aria-activedescendant', options[3].id);
  }
}`,...A.parameters?.docs?.source}}};const de=["Default","Light","KeyboardSelection","EscapeCancels","WrapsAround"];export{k as Default,_ as EscapeCancels,h as KeyboardSelection,x as Light,A as WrapsAround,de as __namedExportsOrder,ue as default};
