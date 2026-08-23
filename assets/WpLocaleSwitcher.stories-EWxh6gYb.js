import{d as z,q as J,z as Y,e as g,f as p,n as v,t as M,A as Z,F as G,l as P,g as Q,h as w,B as X,j as $,o as b,C as ee}from"./iframe-34ht2r-x.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const te=["aria-expanded","aria-controls"],ne=["aria-label","aria-activedescendant"],oe=["id","aria-selected","onClick","onMousemove"],re={class:"wp-ls__option-name"},_=z({__name:"WpLocaleSwitcher",props:{locales:{},currentLocale:{},theme:{default:"dark"},listboxLabel:{default:"Select language"},compact:{type:Boolean,default:!1}},emits:["select"],setup(n,{emit:c}){const a=n,s=c,o=w(!1),i=w(null),S=w(null),B=w(null),t=w(-1),H=X(),C=`${H}-listbox`,q=e=>`${H}-option-${e}`,I=$(()=>a.locales.find(e=>e.code===a.currentLocale)),O=$(()=>a.locales.findIndex(e=>e.code===a.currentLocale));async function F(){o.value=!0,t.value=O.value>=0?O.value:0,await ee(),B.value?.focus(),k()}function f(e=!0){o.value&&(o.value=!1,t.value=-1,e&&S.value?.focus())}function K(){o.value?f():F()}function T(e){f(),s("select",e)}function k(){if(t.value<0)return;B.value?.children[t.value]?.scrollIntoView({block:"nearest"})}function W(e){const u=a.locales.length;u&&(t.value=(t.value+e+u)%u,k())}function U(e){(e.key==="ArrowDown"||e.key==="ArrowUp"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),F())}function V(e){switch(e.key){case"ArrowDown":e.preventDefault(),W(1);break;case"ArrowUp":e.preventDefault(),W(-1);break;case"Home":e.preventDefault(),t.value=0,k();break;case"End":e.preventDefault(),t.value=a.locales.length-1,k();break;case"Enter":case" ":e.preventDefault(),t.value>=0&&T(a.locales[t.value].code);break;case"Escape":e.preventDefault(),f();break;case"Tab":e.preventDefault(),f();break}}function N(e){i.value&&!i.value.contains(e.target)&&f(!1)}return J(()=>document.addEventListener("click",N,!0)),Y(()=>document.removeEventListener("click",N,!0)),(e,u)=>(b(),g("div",{ref_key:"containerRef",ref:i,class:v(["wp-ls",`wp-ls--${n.theme}`])},[p("button",{ref_key:"triggerRef",ref:S,type:"button",class:"wp-ls__trigger","aria-expanded":o.value,"aria-haspopup":"listbox","aria-controls":o.value?C:void 0,onClick:Z(K,["stop"]),onKeydown:U},[p("span",{class:v(["fi",`fi-${I.value?.flag}`]),"aria-hidden":"true"},null,2),p("span",{class:v(["wp-ls__name",{"wp-ls__name--sr":n.compact}])},M(I.value?.name),3),(b(),g("svg",{class:v(["wp-ls__chevron",{"wp-ls__chevron--open":o.value}]),width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor","aria-hidden":"true"},[...u[0]||(u[0]=[p("path",{d:"M6 8 L1 3 L11 3 Z"},null,-1)])],2))],40,te),o.value?(b(),g("ul",{key:0,id:C,ref_key:"listboxRef",ref:B,class:"wp-ls__dropdown",role:"listbox",tabindex:"-1","aria-label":n.listboxLabel,"aria-activedescendant":t.value>=0?q(t.value):void 0,onKeydown:V},[(b(!0),g(G,null,P(n.locales,(d,D)=>(b(),g("li",{id:q(D),key:d.code,role:"option","aria-selected":d.code===n.currentLocale,class:v(["wp-ls__option",{"wp-ls__option--active":d.code===n.currentLocale,"wp-ls__option--focused":D===t.value}]),onClick:j=>T(d.code),onMousemove:j=>t.value=D},[p("span",{class:v(["fi",`fi-${d.flag}`]),"aria-hidden":"true"},null,2),p("span",re,M(d.name),1)],42,oe))),128))],40,ne)):Q("",!0)],2))}}),se=ae(_,[["__scopeId","data-v-54222f42"]]);_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:"default",displayName:"WpLocaleSwitcher",description:"",tags:{},props:[{name:"locales",required:!0,type:{name:"Array",elements:[{name:"LocaleOption"}]}},{name:"currentLocale",required:!0,type:{name:"string"}},{name:"theme",required:!1,type:{name:"union",elements:[{name:'"dark"'},{name:'"light"'}]},defaultValue:{func:!1,value:"'dark'"}},{name:"listboxLabel",description:`Nom de la liste pour les lecteurs d'écran. Anglais par défaut : le composant
 ne connaît pas la locale de l'application qui l'affiche.`,required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Select language'"}},{name:"compact",description:`Réduit le déclencheur au drapeau seul. Le nom de la langue reste dans la
 LISTE, où le choix se fait réellement — un drapeau ne nomme pas une langue
 (« gb » pour l'anglais, « es-ct » pour le catalan), il ne peut donc pas
 porter seul le choix. Sur le déclencheur en revanche, il rappelle une
 langue DÉJÀ choisie, ce que le drapeau suffit à faire.

 ⚠️ Le nom n'est pas retiré du DOM, il est masqué visuellement : c'est le
 seul texte du bouton, le drapeau étant décoratif. Le supprimer laisserait
 un bouton sans nom accessible — un lecteur d'écran annoncerait « bouton »,
 sans dire lequel ni dans quelle langue on se trouve.`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"select",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpLocaleSwitcher/WpLocaleSwitcher.vue"]});const{expect:r,userEvent:l,within:R}=__STORYBOOK_MODULE_TEST__,ue={title:"Components/WpLocaleSwitcher",component:se,tags:["autodocs"]},m=[{code:"fr",name:"Français",flag:"fr"},{code:"en",name:"English",flag:"gb"},{code:"de",name:"Deutsch",flag:"de"},{code:"es",name:"Español",flag:"es"}],h={args:{locales:m,currentLocale:"fr"},parameters:{backgrounds:{default:"dark"}}},x={args:{locales:m,currentLocale:"en",theme:"light"},parameters:{backgrounds:{default:"light"}}},L={args:{locales:m,currentLocale:"fr"},parameters:{backgrounds:{default:"dark"}},play:async({canvasElement:n,args:c})=>{const a=R(n),s=a.getByRole("button");s.focus(),await l.keyboard("{ArrowDown}");const o=a.getByRole("listbox");await r(o).toHaveFocus();const i=a.getAllByRole("option");await r(o).toHaveAttribute("aria-activedescendant",i[0].id),await l.keyboard("{ArrowDown}{ArrowDown}"),await r(o).toHaveAttribute("aria-activedescendant",i[2].id),await l.keyboard("{Enter}"),await r(c.onSelect).toHaveBeenCalledWith("de"),await r(s).toHaveFocus()}},A={args:{locales:m,currentLocale:"fr"},parameters:{backgrounds:{default:"dark"}},play:async({canvasElement:n,args:c})=>{const a=R(n),s=a.getByRole("button");s.focus(),await l.keyboard("{Enter}"),await r(a.getByRole("listbox")).toBeInTheDocument(),await l.keyboard("{ArrowDown}{Escape}"),await r(a.queryByRole("listbox")).toBeNull(),await r(c.onSelect).not.toHaveBeenCalled(),await r(s).toHaveFocus()}},E={args:{locales:m,currentLocale:"fr"},parameters:{backgrounds:{default:"dark"}},play:async({canvasElement:n})=>{const c=R(n);c.getByRole("button").focus(),await l.keyboard("{ArrowDown}");const a=c.getByRole("listbox"),s=c.getAllByRole("option");await l.keyboard("{End}"),await r(a).toHaveAttribute("aria-activedescendant",s[3].id),await l.keyboard("{ArrowDown}"),await r(a).toHaveAttribute("aria-activedescendant",s[0].id),await l.keyboard("{ArrowUp}"),await r(a).toHaveAttribute("aria-activedescendant",s[3].id)}},y={args:{locales:m,currentLocale:"fr",theme:"light",compact:!0}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    locales,
    currentLocale: 'fr'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    locales,
    currentLocale: 'fr',
    theme: 'light',
    compact: true
  }
}`,...y.parameters?.docs?.source},description:{story:`Drapeau seul. Sert quand la barre de navigation manque de place : le nom de la
langue coûte une place que le drapeau n'occupe pas.

⚠️ Le nom reste dans le DOM, masqué visuellement. Le drapeau est décoratif
(\`aria-hidden\`) : sans ce texte, le bouton n'aurait aucun nom accessible.
À vérifier avec un lecteur d'écran, pas à l'œil — c'est précisément ce qui ne
se voit pas.`,...y.parameters?.docs?.description}}};const de=["Default","Light","KeyboardSelection","EscapeCancels","WrapsAround","Compact"];export{y as Compact,h as Default,A as EscapeCancels,L as KeyboardSelection,x as Light,E as WrapsAround,de as __namedExportsOrder,ue as default};
