import{W as c}from"./WpBreadcrumb-CCb8SIEM.js";import"./iframe-C4qhFSa9.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Components/WpBreadcrumb",component:c,tags:["autodocs"]},n={args:{crumbs:[{label:"Accueil",href:"/"},{label:"Services"}]}},t={args:{crumbs:[{label:"Accueil",href:"/"},{label:"Services",href:"/services"},{label:"Audit thermique"}]}},e={args:{crumbs:[{label:"Accueil",href:"/"},{label:"Articles",href:"/articles"},{label:"Inspection thermique par drone : toitures, panneaux solaires et réseaux industriels"}]},render:s=>({components:{WpBreadcrumb:c},setup:()=>({args:s}),template:'<div data-testid="phone" style="width: 342px; overflow: visible"><WpBreadcrumb v-bind="args" /></div>'}),play:async({canvasElement:s})=>{const r=s.querySelector('[data-testid="phone"]'),o=r.querySelector(".wp-breadcrumb"),a=r.getBoundingClientRect().right;for(const i of o.querySelectorAll("a, span")){const l=i.getBoundingClientRect().right;if(l>a+.5)throw new Error(`« ${i.textContent} » dépasse de ${Math.round(l-a)} px`)}if(o.scrollWidth>r.clientWidth)throw new Error(`le fil fait ${o.scrollWidth} px pour une boîte de ${r.clientWidth}`)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Accueil',
      href: '/'
    }, {
      label: 'Services'
    }]
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Accueil',
      href: '/'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'Audit thermique'
    }]
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    crumbs: [{
      label: 'Accueil',
      href: '/'
    }, {
      label: 'Articles',
      href: '/articles'
    }, {
      label: 'Inspection thermique par drone : toitures, panneaux solaires et réseaux industriels'
    }]
  },
  render: args => ({
    components: {
      WpBreadcrumb
    },
    setup: () => ({
      args
    }),
    template: '<div data-testid="phone" style="width: 342px; overflow: visible"><WpBreadcrumb v-bind="args" /></div>'
  }),
  play: async ({
    canvasElement
  }) => {
    const boite = canvasElement.querySelector<HTMLElement>('[data-testid="phone"]')!;
    const fil = boite.querySelector<HTMLElement>('.wp-breadcrumb')!;
    const droite = boite.getBoundingClientRect().right;
    for (const maillon of fil.querySelectorAll<HTMLElement>('a, span')) {
      const r = maillon.getBoundingClientRect().right;
      if (r > droite + 0.5) {
        throw new Error(\`« \${maillon.textContent} » dépasse de \${Math.round(r - droite)} px\`);
      }
    }
    if (fil.scrollWidth > boite.clientWidth) {
      throw new Error(\`le fil fait \${fil.scrollWidth} px pour une boîte de \${boite.clientWidth}\`);
    }
  }
}`,...e.parameters?.docs?.source},description:{story:`⛔ UN TITRE LONG SUR UN ÉCRAN DE TÉLÉPHONE. Mesuré le 2026-10-17 sur
waypoint360.eu à 390 px : 10 guides sur 29 débordaient horizontalement, la
page entière défilant de côté jusqu'à 485 px. La cause était ici : le libellé
de la page courante ne pouvait pas passer à la ligne (\`white-space: nowrap\`),
et c'est justement le titre de l'article, le plus long des maillons.

⚠️ LA MESURE, PAS LA PRÉSENCE D'UNE RÈGLE CSS. Le fil se rend dans une boîte
de 342 px (390 moins deux marges de 24) ; il doit y tenir.`,...e.parameters?.docs?.description}}};const h=["TwoLevels","ThreeLevels","LongCurrentOnPhone"];export{e as LongCurrentOnPhone,t as ThreeLevels,n as TwoLevels,h as __namedExportsOrder,b as default};
