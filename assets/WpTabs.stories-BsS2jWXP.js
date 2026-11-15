import{d as B,q as k,H as E,e as d,f as v,F as L,l as R,h as x,o as u,m as O,w as C,t as y,g as S,u as A,p as q,n as W,y as H}from"./iframe-CFd5o6ma.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const M=["aria-label"],N={class:"wp-tabs__label"},V={key:0,class:"wp-tabs__count"},D=["aria-current","data-tab","onClick"],G={class:"wp-tabs__label"},I={key:0,class:"wp-tabs__count"},w=B({__name:"WpTabs",props:{items:{},current:{default:""},ariaLabel:{default:"Tabs"},as:{default:"a"}},emits:["select"],setup(t,{emit:a}){const s=t,n=a,o=x(null);function i(){const c=o.value?.querySelector('[aria-current="page"]'),l=o.value;if(!c||!l)return;const e=c.offsetLeft-l.offsetLeft;(e<l.scrollLeft||e+c.offsetWidth>l.scrollLeft+l.clientWidth)&&(l.scrollLeft=Math.max(0,e-16))}k(i),E([()=>s.current,()=>s.items],()=>H(i),{deep:!0});const h=c=>s.as==="a"?{href:c.to}:{to:c.to};return(c,l)=>(u(),d("nav",{class:"wp-tabs","aria-label":t.ariaLabel},[v("ul",{ref_key:"bar",ref:o,class:"wp-tabs__bar"},[(u(!0),d(L,null,R(t.items,e=>(u(),d("li",{key:e.key,class:"wp-tabs__item"},[e.to?(u(),O(q(t.as),A({key:0,ref_for:!0},h(e),{class:["wp-tabs__tab",{"wp-tabs__tab--current":e.key===t.current}],"aria-current":e.key===t.current?"page":void 0,"data-tab":e.key}),{default:C(()=>[v("span",N,y(e.label),1),e.count!==void 0&&e.count!==""?(u(),d("span",V,y(e.count),1)):S("",!0)]),_:2},1040,["class","aria-current","data-tab"])):(u(),d("button",{key:1,type:"button",class:W(["wp-tabs__tab",{"wp-tabs__tab--current":e.key===t.current}]),"aria-current":e.key===t.current?"page":void 0,"data-tab":e.key,onClick:U=>n("select",e.key)},[v("span",G,y(e.label),1),e.count!==void 0&&e.count!==""?(u(),d("span",I,y(e.count),1)):S("",!0)],10,D))]))),128))],512)],8,M))}}),_=P(w,[["__scopeId","data-v-e2116d4d"]]);w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:"default",displayName:"WpTabs",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"WpTabItem"}]}},{name:"current",description:"Key of the current tab.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"ariaLabel",description:"Accessible name of the navigation landmark.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Tabs'"}},{name:"as",description:"Link component for tabs with `to` (e.g. NuxtLink). Plain `a` with `href` by default.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Component"}]},defaultValue:{func:!1,value:"'a'"}}],events:[{name:"select",type:{names:["string"]}}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpTabs/WpTabs.vue"]});const{expect:r,fn:F,userEvent:K,within:T}=__STORYBOOK_MODULE_TEST__,$={title:"Components/WpTabs",component:_,tags:["autodocs"]},f=[{key:"overview",label:"Vue d’ensemble",to:"#overview"},{key:"analysis",label:"Analyse",to:"#analysis",count:"3/11"},{key:"demonstration",label:"Démonstration",to:"#demonstration",count:"12/48"},{key:"filing",label:"Dépôt METEOR",to:"#filing",count:"1/4"}],p={args:{items:f,current:"demonstration",ariaLabel:"Parties de la SORA"},play:async({canvasElement:t})=>{const s=T(t).getByRole("navigation",{name:"Parties de la SORA"}),n=T(s).getAllByRole("link");await r(n).toHaveLength(4);const o=n.filter(i=>i.getAttribute("aria-current")==="page");await r(o).toHaveLength(1),await r(o[0]).toHaveTextContent("Démonstration"),await r(o[0]).toHaveTextContent("12/48"),await r(n[0]).toHaveAttribute("href","#overview")}},m={args:{items:[{key:"a",label:"Liste"},{key:"b",label:"Carte"}],current:"a",ariaLabel:"Vues",onSelect:F()},play:async({canvasElement:t,args:a})=>{const s=T(t);await K.click(s.getByRole("button",{name:"Carte"})),await r(a.onSelect).toHaveBeenCalledWith("b")}},b={args:{items:f,current:"filing",ariaLabel:"Parties de la SORA"},render:t=>({components:{WpTabs:_},setup:()=>({args:t}),template:'<div data-testid="phone" style="width: 342px"><WpTabs v-bind="args" /></div>'}),play:async({canvasElement:t})=>{const a=t.querySelector('[data-testid="phone"]'),s=a.querySelector(".wp-tabs"),n=a.querySelector(".wp-tabs__bar");await r(s.getBoundingClientRect().width).toBeLessThanOrEqual(a.clientWidth+.5),await r(n.scrollWidth).toBeGreaterThan(n.clientWidth);const o=n.querySelector('[aria-current="page"]'),i=n.getBoundingClientRect(),h=o.getBoundingClientRect();await r(h.right).toBeLessThanOrEqual(i.right+.5),await r(h.left).toBeGreaterThanOrEqual(i.left-.5)}},g={render:()=>({components:{WpTabs:_},setup(){const t=x(f.map(a=>({...a,count:void 0})));return k(()=>setTimeout(()=>{t.value=f.map(a=>({...a,count:a.count}))},50)),{items:t}},template:'<div data-testid="phone" style="width: 342px"><WpTabs :items="items" current="demonstration" aria-label="Parties de la SORA" /></div>'}),play:async({canvasElement:t})=>{const a=t.querySelector(".wp-tabs__bar");await new Promise(i=>setTimeout(i,200));const s=a.querySelector('[aria-current="page"]');await r(s).toHaveTextContent("12/48");const n=a.getBoundingClientRect(),o=s.getBoundingClientRect();await r(o.right).toBeLessThanOrEqual(n.right+.5),await r(o.left).toBeGreaterThanOrEqual(n.left-.5)}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:'Each tab is a link; the current one is announced with `aria-current="page"`.',...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Without `to`, a tab is a button and emits `select`.",...m.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`⚠️ ON A PHONE THE BAR SCROLLS, NOT THE PAGE. Measured, not assumed: inside a 342 px
box (390 minus two 24 px gutters), the navigation must stay within the box, and the
current tab, the last one here, must be scrolled into view.`,...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpTabs
    },
    setup() {
      const items = ref(SORA_TABS.map(t => ({
        ...t,
        count: undefined as string | undefined
      })));
      onMounted(() => setTimeout(() => {
        items.value = SORA_TABS.map(t => ({
          ...t,
          count: t.count
        }));
      }, 50));
      return {
        items
      };
    },
    template: '<div data-testid="phone" style="width: 342px"><WpTabs :items="items" current="demonstration" aria-label="Parties de la SORA" /></div>'
  }),
  play: async ({
    canvasElement
  }) => {
    const bar = canvasElement.querySelector<HTMLElement>('.wp-tabs__bar')!;
    await new Promise(r => setTimeout(r, 200));
    const current = bar.querySelector<HTMLElement>('[aria-current="page"]')!;
    await expect(current).toHaveTextContent('12/48');
    const b = bar.getBoundingClientRect();
    const r = current.getBoundingClientRect();
    await expect(r.right).toBeLessThanOrEqual(b.right + 0.5);
    await expect(r.left).toBeGreaterThanOrEqual(b.left - 0.5);
  }
}`,...g.parameters?.docs?.source},description:{story:`⚠️ COUNTERS ARRIVING AFTER THE FIRST RENDER. Measured in waypoint360-app on 2026-11-15: the
counters come from a second request, widen every tab, and the current tab, revealed at
mount, ended up cut at the right edge of a phone screen.`,...g.parameters?.docs?.description}}};const J=["Links","Buttons","OnPhone","OnPhoneWithLateCounts"];export{m as Buttons,p as Links,b as OnPhone,g as OnPhoneWithLateCounts,J as __namedExportsOrder,$ as default};
