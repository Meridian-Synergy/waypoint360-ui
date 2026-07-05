import{d as r,k as i,w as d,l as p,o as l,r as c}from"./iframe-CNhceRN4.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const t=r({__name:"WpContainer",props:{as:{default:"div"}},setup(a){return(s,f)=>(l(),i(p(a.as),{class:"wp-container"},{default:d(()=>[c(s.$slots,"default",{},void 0,!0)]),_:3}))}}),o=m(t,[["__scopeId","data-v-29218b27"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"WpContainer",description:"",tags:{},props:[{name:"as",description:"Rendered element. `div` (default) for body sections, `section` for landmarks.",required:!1,type:{name:"union",elements:[{name:'"div"'},{name:'"section"'}]},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/waypoint360-ui/waypoint360-ui/src/components/WpContainer/WpContainer.vue"]});const h={title:"Layout/WpContainer",component:o,tags:["autodocs"],argTypes:{as:{control:"select",options:["div","section"]}}},n={render:a=>({components:{WpContainer:o},setup:()=>({args:a}),template:`
      <WpContainer v-bind="args">
        <div style="background: #dbe4ff; border: 1px dashed #1B2B56; padding: 16px;">
          Content sits inside the shared rail (max-width + inline padding).
          The dashed box edges mark the rail's left and right boundaries.
        </div>
      </WpContainer>
    `})},e={render:()=>({components:{WpContainer:o},template:`
      <div>
        <section style="background: #1B2B56; padding: 32px 0;">
          <WpContainer>
            <h1 style="color: #fff; margin: 0; font-family: sans-serif;">Page title (hero)</h1>
          </WpContainer>
        </section>
        <WpContainer style="display: block; padding-top: 24px;">
          <p style="margin: 0; font-family: sans-serif;">
            Body text — its left edge falls exactly under the hero title.
          </p>
        </WpContainer>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WpContainer
    },
    setup: () => ({
      args
    }),
    template: \`
      <WpContainer v-bind="args">
        <div style="background: #dbe4ff; border: 1px dashed #1B2B56; padding: 16px;">
          Content sits inside the shared rail (max-width + inline padding).
          The dashed box edges mark the rail's left and right boundaries.
        </div>
      </WpContainer>
    \`
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WpContainer
    },
    template: \`
      <div>
        <section style="background: #1B2B56; padding: 32px 0;">
          <WpContainer>
            <h1 style="color: #fff; margin: 0; font-family: sans-serif;">Page title (hero)</h1>
          </WpContainer>
        </section>
        <WpContainer style="display: block; padding-top: 24px;">
          <p style="margin: 0; font-family: sans-serif;">
            Body text — its left edge falls exactly under the hero title.
          </p>
        </WpContainer>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source},description:{story:"Two stacked containers — left edges align perfectly (hero + body pattern).",...e.parameters?.docs?.description}}};const C=["Default","VerticalAlignment"];export{n as Default,e as VerticalAlignment,C as __namedExportsOrder,h as default};
