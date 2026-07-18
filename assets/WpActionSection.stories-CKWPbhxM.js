import{d as m,e as a,r as s,g as d,f as u,o as c,j as f,t as A}from"./iframe-BV8YQoQV.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{W as p}from"./WpActionCard-BfnP5hS4.js";import"./preload-helper-PPVm8Dsz.js";const v={class:"wp-action-section"},S={key:0,class:"wp-action-section__title"},W={class:"wp-action-section__list"},n=m({__name:"WpActionSection",props:{title:{default:""}},setup(r){return(o,g)=>(c(),a("section",v,[r.title||o.$slots.title?(c(),a("h2",S,[s(o.$slots,"title",{},()=>[f(A(r.title),1)],!0)])):d("",!0),u("div",W,[s(o.$slots,"default",{},void 0,!0)])]))}}),i=_(n,[["__scopeId","data-v-3cc22e6e"]]);n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"WpActionSection",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpActionSection/WpActionSection.vue"]});const w={title:"Components/WpActionSection",component:i,tags:["autodocs"]},l=`
  <WpActionSection title="Actions">
    <WpActionCard
      title="Renvoyer l'invitation"
      description="Renvoyer un email d'invitation à cet utilisateur."
      action-label="Renvoyer l'invitation"
    />
    <WpActionCard
      tone="warning"
      title="Désactiver le compte"
      description="L'utilisateur ne pourra plus se connecter. Son siège sera libéré. Réversible."
      action-label="Désactiver"
      confirm confirm-prompt="Désactiver cet utilisateur ?" confirm-label="Confirmer" cancel-label="Annuler"
    />
    <WpActionCard
      tone="danger"
      title="Supprimer le compte"
      description="Cette action est irréversible. Le compte sera définitivement supprimé."
      action-label="Supprimer"
      confirm confirm-prompt="Supprimer définitivement ?" confirm-label="Confirmer" cancel-label="Annuler"
    />
  </WpActionSection>
`,e={render:()=>({components:{WpActionSection:i,WpActionCard:p},template:l})},t={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{WpActionSection:i,WpActionCard:p},template:l})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpActionSection,
      WpActionCard
    },
    template: actionsTemplate
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      WpActionSection,
      WpActionCard
    },
    template: actionsTemplate
  })
}`,...t.parameters?.docs?.source}}};const h=["UserActions","UserActionsDark"];export{e as UserActions,t as UserActionsDark,h as __namedExportsOrder,w as default};
