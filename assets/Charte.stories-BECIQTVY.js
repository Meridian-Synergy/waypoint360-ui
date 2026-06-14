const i={title:"Foundations/Charte",parameters:{layout:"fullscreen",a11y:{disable:!0}}},a=[{name:"navy",token:"--wp-color-navy",note:"Primaire — navbar, titres, boutons primary"},{name:"sky",token:"--wp-color-sky",note:"Accent énergie — liens, états actifs"},{name:"gold",token:"--wp-color-gold",note:"CTA — conversion, invitation à agir"},{name:"orange",token:"--wp-color-orange",note:"Actions critiques — destructif, danger"},{name:"silver",token:"--wp-color-silver",note:"Secondaire — textes, bordures"},{name:"dark-bg",token:"--wp-color-dark-bg",note:"Fond dark mode (portail communauté)"},{name:"bg",token:"--wp-color-bg",note:"Fond page light mode"},{name:"border",token:"--wp-color-border",note:"Bordures standard"},{name:"muted",token:"--wp-color-muted",note:"Méta-texte (sur fond sombre)"},{name:"success",token:"--wp-color-success",note:"Statut — succès"},{name:"warning",token:"--wp-color-warning",note:"Statut — avertissement"},{name:"error",token:"--wp-color-error",note:"Statut — erreur"}],r=["xs","sm","md","lg","xl","2xl"],n=["sm","md","lg","xl","full"],e={render:()=>({setup(){return{COLORS:a}},template:`
      <div style="font-family: var(--wp-font-body); padding: 32px; color: var(--wp-color-navy);">
        <h2 style="font-family: var(--wp-font-display); font-weight:700;">Palette</h2>
        <p style="color: var(--wp-color-muted-strong); max-width: 60ch;">
          Valeurs actuelles à iso-charte Meridian. Une charte propre à Waypoint360
          remplacera ces tokens lors de la revue dédiée.
        </p>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap:16px; margin-top:24px;">
          <div v-for="c in COLORS" :key="c.token"
               style="border:1px solid var(--wp-color-border); border-radius: var(--wp-radius-md); overflow:hidden;">
            <div :style="{ background: 'var(' + c.token + ')', height: '64px' }"></div>
            <div style="padding:10px;">
              <div style="font-family: var(--wp-font-data); font-size:12px;">{{ c.token }}</div>
              <div style="font-weight:600;">{{ c.name }}</div>
              <div style="font-size:12px; color: var(--wp-color-muted-strong);">{{ c.note }}</div>
            </div>
          </div>
        </div>
      </div>
    `})},t={render:()=>({template:`
      <div style="padding: 32px; color: var(--wp-color-navy);">
        <h2 style="font-family: var(--wp-font-display); font-weight:700;">Typographie</h2>
        <div style="font-family: var(--wp-font-display); font-weight:700; font-size:36px; margin-top:16px;">Display — Barlow 700</div>
        <div style="font-family: var(--wp-font-body); font-weight:400; font-size:18px; margin-top:12px;">Body — Barlow 400 : texte courant, boutons, labels.</div>
        <div style="font-family: var(--wp-font-condensed); text-transform:uppercase; letter-spacing:2px; margin-top:12px;">Condensed — Barlow Condensed (section labels)</div>
        <div style="font-family: var(--wp-font-data); margin-top:12px;">Data — Space Mono : 48.8566° N, 2.3522° E</div>
      </div>
    `})},o={name:"Spacing & Radius",render:()=>({setup(){return{SPACES:r,RADII:n}},template:`
      <div style="padding: 32px; color: var(--wp-color-navy); font-family: var(--wp-font-body);">
        <h2 style="font-family: var(--wp-font-display); font-weight:700;">Spacing</h2>
        <div v-for="s in SPACES" :key="s" style="display:flex; align-items:center; gap:12px; margin:6px 0;">
          <code style="font-family: var(--wp-font-data); width:120px;">--wp-space-{{ s }}</code>
          <div :style="{ height:'16px', width:'var(--wp-space-' + s + ')', background:'var(--wp-color-sky)' }"></div>
        </div>
        <h2 style="font-family: var(--wp-font-display); font-weight:700; margin-top:24px;">Border radius</h2>
        <div style="display:flex; gap:16px; margin-top:8px;">
          <div v-for="r in RADII" :key="r" style="text-align:center;">
            <div :style="{ width:'64px', height:'64px', background:'var(--wp-color-navy)', borderRadius:'var(--wp-radius-' + r + ')' }"></div>
            <code style="font-family: var(--wp-font-data); font-size:11px;">{{ r }}</code>
          </div>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      return {
        COLORS
      };
    },
    template: \`
      <div style="font-family: var(--wp-font-body); padding: 32px; color: var(--wp-color-navy);">
        <h2 style="font-family: var(--wp-font-display); font-weight:700;">Palette</h2>
        <p style="color: var(--wp-color-muted-strong); max-width: 60ch;">
          Valeurs actuelles à iso-charte Meridian. Une charte propre à Waypoint360
          remplacera ces tokens lors de la revue dédiée.
        </p>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px,1fr)); gap:16px; margin-top:24px;">
          <div v-for="c in COLORS" :key="c.token"
               style="border:1px solid var(--wp-color-border); border-radius: var(--wp-radius-md); overflow:hidden;">
            <div :style="{ background: 'var(' + c.token + ')', height: '64px' }"></div>
            <div style="padding:10px;">
              <div style="font-family: var(--wp-font-data); font-size:12px;">{{ c.token }}</div>
              <div style="font-weight:600;">{{ c.name }}</div>
              <div style="font-size:12px; color: var(--wp-color-muted-strong);">{{ c.note }}</div>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="padding: 32px; color: var(--wp-color-navy);">
        <h2 style="font-family: var(--wp-font-display); font-weight:700;">Typographie</h2>
        <div style="font-family: var(--wp-font-display); font-weight:700; font-size:36px; margin-top:16px;">Display — Barlow 700</div>
        <div style="font-family: var(--wp-font-body); font-weight:400; font-size:18px; margin-top:12px;">Body — Barlow 400 : texte courant, boutons, labels.</div>
        <div style="font-family: var(--wp-font-condensed); text-transform:uppercase; letter-spacing:2px; margin-top:12px;">Condensed — Barlow Condensed (section labels)</div>
        <div style="font-family: var(--wp-font-data); margin-top:12px;">Data — Space Mono : 48.8566° N, 2.3522° E</div>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Spacing & Radius',
  render: () => ({
    setup() {
      return {
        SPACES,
        RADII
      };
    },
    template: \`
      <div style="padding: 32px; color: var(--wp-color-navy); font-family: var(--wp-font-body);">
        <h2 style="font-family: var(--wp-font-display); font-weight:700;">Spacing</h2>
        <div v-for="s in SPACES" :key="s" style="display:flex; align-items:center; gap:12px; margin:6px 0;">
          <code style="font-family: var(--wp-font-data); width:120px;">--wp-space-{{ s }}</code>
          <div :style="{ height:'16px', width:'var(--wp-space-' + s + ')', background:'var(--wp-color-sky)' }"></div>
        </div>
        <h2 style="font-family: var(--wp-font-display); font-weight:700; margin-top:24px;">Border radius</h2>
        <div style="display:flex; gap:16px; margin-top:8px;">
          <div v-for="r in RADII" :key="r" style="text-align:center;">
            <div :style="{ width:'64px', height:'64px', background:'var(--wp-color-navy)', borderRadius:'var(--wp-radius-' + r + ')' }"></div>
            <code style="font-family: var(--wp-font-data); font-size:11px;">{{ r }}</code>
          </div>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const d=["Palette","Typography","SpacingAndRadius"];export{e as Palette,o as SpacingAndRadius,t as Typography,d as __namedExportsOrder,i as default};
