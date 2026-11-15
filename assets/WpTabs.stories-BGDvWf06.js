import{d as T,q as x,H as L,e as d,f,F as B,l as S,h as E,o as u,m as O,w as C,t as g,g as w,u as R,p as A,n as W,y as q}from"./iframe-BymfltZ6.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const P=["aria-label"],M={class:"wp-tabs__label"},N={key:0,class:"wp-tabs__count"},V=["aria-current","data-tab","onClick"],D={class:"wp-tabs__label"},G={key:0,class:"wp-tabs__count"},h=T({__name:"WpTabs",props:{items:{},current:{default:""},ariaLabel:{default:"Tabs"},as:{default:"a"}},emits:["select"],setup(t,{emit:r}){const o=t,a=r,s=E(null);function i(){const c=s.value?.querySelector('[aria-current="page"]'),l=s.value;if(!c||!l)return;const e=c.offsetLeft-l.offsetLeft;(e<l.scrollLeft||e+c.offsetWidth>l.scrollLeft+l.clientWidth)&&(l.scrollLeft=Math.max(0,e-16))}x(i),L(()=>o.current,()=>q(i));const y=c=>o.as==="a"?{href:c.to}:{to:c.to};return(c,l)=>(u(),d("nav",{class:"wp-tabs","aria-label":t.ariaLabel},[f("ul",{ref_key:"bar",ref:s,class:"wp-tabs__bar"},[(u(!0),d(B,null,S(t.items,e=>(u(),d("li",{key:e.key,class:"wp-tabs__item"},[e.to?(u(),O(A(t.as),R({key:0,ref_for:!0},y(e),{class:["wp-tabs__tab",{"wp-tabs__tab--current":e.key===t.current}],"aria-current":e.key===t.current?"page":void 0,"data-tab":e.key}),{default:C(()=>[f("span",M,g(e.label),1),e.count!==void 0&&e.count!==""?(u(),d("span",N,g(e.count),1)):w("",!0)]),_:2},1040,["class","aria-current","data-tab"])):(u(),d("button",{key:1,type:"button",class:W(["wp-tabs__tab",{"wp-tabs__tab--current":e.key===t.current}]),"aria-current":e.key===t.current?"page":void 0,"data-tab":e.key,onClick:K=>a("select",e.key)},[f("span",D,g(e.label),1),e.count!==void 0&&e.count!==""?(u(),d("span",G,g(e.count),1)):w("",!0)],10,V))]))),128))],512)],8,P))}}),_=H(h,[["__scopeId","data-v-c45f085b"]]);h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:"default",displayName:"WpTabs",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"WpTabItem"}]}},{name:"current",description:"Key of the current tab.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Accessible name of the navigation landmark.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Tabs'"}},{name:"as",description:"Link component for tabs with `to` (e.g. NuxtLink). Plain `a` with `href` by default.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'a'"}}],events:[{name:"select",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpTabs/WpTabs.vue"]});const{expect:n,fn:F,userEvent:I,within:v}=__STORYBOOK_MODULE_TEST__,Y={title:"Components/WpTabs",component:_,tags:["autodocs"]},k=[{key:"overview",label:"Vue d’ensemble",to:"#overview"},{key:"analysis",label:"Analyse",to:"#analysis",count:"3/11"},{key:"demonstration",label:"Démonstration",to:"#demonstration",count:"12/48"},{key:"filing",label:"Dépôt METEOR",to:"#filing",count:"1/4"}],p={args:{items:k,current:"demonstration",ariaLabel:"Parties de la SORA"},play:async({canvasElement:t})=>{const o=v(t).getByRole("navigation",{name:"Parties de la SORA"}),a=v(o).getAllByRole("link");await n(a).toHaveLength(4);const s=a.filter(i=>i.getAttribute("aria-current")==="page");await n(s).toHaveLength(1),await n(s[0]).toHaveTextContent("Démonstration"),await n(s[0]).toHaveTextContent("12/48"),await n(a[0]).toHaveAttribute("href","#overview")}},b={args:{items:[{key:"a",label:"Liste"},{key:"b",label:"Carte"}],current:"a",ariaLabel:"Vues",onSelect:F()},play:async({canvasElement:t,args:r})=>{const o=v(t);await I.click(o.getByRole("button",{name:"Carte"})),await n(r.onSelect).toHaveBeenCalledWith("b")}},m={args:{items:k,current:"filing",ariaLabel:"Parties de la SORA"},render:t=>({components:{WpTabs:_},setup:()=>({args:t}),template:'<div data-testid="phone" style="width: 342px"><WpTabs v-bind="args" /></div>'}),play:async({canvasElement:t})=>{const r=t.querySelector('[data-testid="phone"]'),o=r.querySelector(".wp-tabs"),a=r.querySelector(".wp-tabs__bar");await n(o.getBoundingClientRect().width).toBeLessThanOrEqual(r.clientWidth+.5),await n(a.scrollWidth).toBeGreaterThan(a.clientWidth);const s=a.querySelector('[aria-current="page"]'),i=a.getBoundingClientRect(),y=s.getBoundingClientRect();await n(y.right).toBeLessThanOrEqual(i.right+.5),await n(y.left).toBeGreaterThanOrEqual(i.left-.5)}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: SORA_TABS,
    current: 'demonstration',
    ariaLabel: 'Parties de la SORA'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const nav = c.getByRole('navigation', {
      name: 'Parties de la SORA'
    });
    const links = within(nav).getAllByRole('link');
    await expect(links).toHaveLength(4);
    const current = links.filter(l => l.getAttribute('aria-current') === 'page');
    await expect(current).toHaveLength(1);
    await expect(current[0]).toHaveTextContent('Démonstration');
    await expect(current[0]).toHaveTextContent('12/48');
    await expect(links[0]).toHaveAttribute('href', '#overview');
  }
}`,...p.parameters?.docs?.source},description:{story:'Each tab is a link; the current one is announced with `aria-current="page"`.',...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'a',
      label: 'Liste'
    }, {
      key: 'b',
      label: 'Carte'
    }],
    current: 'a',
    ariaLabel: 'Vues',
    onSelect: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Carte'
    }));
    await expect(args.onSelect).toHaveBeenCalledWith('b');
  }
}`,...b.parameters?.docs?.source},description:{story:"Without `to`, a tab is a button and emits `select`.",...b.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: SORA_TABS,
    current: 'filing',
    ariaLabel: 'Parties de la SORA'
  },
  render: args => ({
    components: {
      WpTabs
    },
    setup: () => ({
      args
    }),
    template: '<div data-testid="phone" style="width: 342px"><WpTabs v-bind="args" /></div>'
  }),
  play: async ({
    canvasElement
  }) => {
    const box = canvasElement.querySelector<HTMLElement>('[data-testid="phone"]')!;
    const nav = box.querySelector<HTMLElement>('.wp-tabs')!;
    const bar = box.querySelector<HTMLElement>('.wp-tabs__bar')!;
    await expect(nav.getBoundingClientRect().width).toBeLessThanOrEqual(box.clientWidth + 0.5);
    await expect(bar.scrollWidth).toBeGreaterThan(bar.clientWidth);
    const current = bar.querySelector<HTMLElement>('[aria-current="page"]')!;
    const b = bar.getBoundingClientRect();
    const r = current.getBoundingClientRect();
    await expect(r.right).toBeLessThanOrEqual(b.right + 0.5);
    await expect(r.left).toBeGreaterThanOrEqual(b.left - 0.5);
  }
}`,...m.parameters?.docs?.source},description:{story:`⚠️ ON A PHONE THE BAR SCROLLS, NOT THE PAGE. Measured, not assumed: inside a 342 px
box (390 minus two 24 px gutters), the navigation must stay within the box, and the
current tab, the last one here, must be scrolled into view.`,...m.parameters?.docs?.description}}};const $=["Links","Buttons","OnPhone"];export{b as Buttons,p as Links,m as OnPhone,$ as __namedExportsOrder,Y as default};
