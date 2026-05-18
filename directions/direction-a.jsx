// Direction A — "Foundation Document"
// Civic institutional, warm paper, IBM Plex throughout. Blue wins, yellow is
// reserved for the verified-credential state. The bracket motif extends as
// a section-opener tab above headings.

const dirA = {
  name: 'A · Foundation Document',
  paper: '#F7F4ED',
  paperAlt: '#EFEBE0',
  ink: '#10100B',
  inkSoft: '#3D3A33',
  stone: '#8A847A',
  rule: '#D8D2C3',
  blue: '#0A55C7',
  blueDeep: '#063B92',
  blueTint: '#E3ECFA',
  yellow: '#E8B43A',
  yellowTint: '#F9EDC8',
  success: '#2D7A5A',
  error: '#B43A3A',
  // Type
  display: "'IBM Plex Serif', Georgia, serif",
  body: "'IBM Plex Sans', -apple-system, system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

function DirAPalette() {
  return (
    <Sheet bg={dirA.paper}>
      <ArtboardCaption bracketColor={dirA.blue}>Palette · primary surfaces</ArtboardCaption>
      <div style={{ display: 'flex', gap: 16, flex: 1 }}>
        <Swatch token="ink/100"    hex={dirA.ink}     name="Ink"        role="text default" />
        <Swatch token="ink/70"     hex={dirA.inkSoft} name="Ink soft"   role="secondary text" />
        <Swatch token="paper/100"  hex={dirA.paper}   name="Paper"      role="canvas" />
        <Swatch token="paper/200"  hex={dirA.paperAlt} name="Paper alt" role="raised surfaces" />
        <Swatch token="stone/500"  hex={dirA.stone}   name="Stone"      role="meta, captions" />
        <Swatch token="rule"       hex={dirA.rule}    name="Rule"       role="borders" />
        <Swatch token="signal/blue"   hex={dirA.blue}   name="Signal blue"   role="link, primary action" />
        <Swatch token="signal/yellow" hex={dirA.yellow} name="Verified"      role="credential state only" />
      </div>
    </Sheet>
  );
}

function DirAType() {
  return (
    <Sheet bg={dirA.paper}>
      <ArtboardCaption bracketColor={dirA.blue}>Type · IBM Plex Serif + Sans + Mono</ArtboardCaption>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, flex: 1, alignContent: 'start' }}>
        <div>
          <div style={{ fontFamily: dirA.mono, fontSize: 10, color: dirA.stone, letterSpacing: 1, textTransform: 'uppercase' }}>Plex Serif · Display 72/76</div>
          <div style={{ fontFamily: dirA.display, fontWeight: 400, fontSize: 72, lineHeight: 1.05, color: dirA.ink, letterSpacing: -1, marginTop: 8 }}>Verification<br/>without identity.</div>
        </div>
        <div>
          <div style={{ fontFamily: dirA.mono, fontSize: 10, color: dirA.stone, letterSpacing: 1, textTransform: 'uppercase' }}>Plex Sans · Body 17/26</div>
          <p style={{ fontFamily: dirA.body, fontSize: 17, lineHeight: 1.6, color: dirA.ink, margin: '8px 0 0', maxWidth: 380 }}>
            TARIDE is an open European protocol for verified digital communications. Pseudonymity is the default; identification is a choice you make on the call.
          </p>
          <div style={{ fontFamily: dirA.mono, fontSize: 10, color: dirA.stone, letterSpacing: 1, textTransform: 'uppercase', marginTop: 24 }}>Plex Mono · Code 14/22</div>
          <pre style={{ fontFamily: dirA.mono, fontSize: 14, lineHeight: 1.55, color: dirA.ink, margin: '6px 0 0', background: dirA.paperAlt, padding: '14px 16px', borderLeft: `2px solid ${dirA.blue}` }}>{`GET /resolve/+31201234567
↳ issuer:   kpn.nl
↳ verified: 2026-05-18T10:03Z
↳ scope:    pseudonymous`}</pre>
        </div>
        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 24, alignItems: 'baseline', borderTop: `1px solid ${dirA.rule}`, paddingTop: 20 }}>
          <span style={{ fontFamily: dirA.display, fontSize: 38, color: dirA.ink, fontWeight: 500 }}>H1 · 38</span>
          <span style={{ fontFamily: dirA.display, fontSize: 28, color: dirA.ink }}>H2 · 28</span>
          <span style={{ fontFamily: dirA.body, fontSize: 20, color: dirA.ink, fontWeight: 500 }}>H3 · 20</span>
          <span style={{ fontFamily: dirA.body, fontSize: 15, color: dirA.inkSoft }}>Body S · 15</span>
          <span style={{ fontFamily: dirA.mono, fontSize: 12, color: dirA.stone, letterSpacing: 0.8, textTransform: 'uppercase' }}>Caption · 12</span>
        </div>
      </div>
    </Sheet>
  );
}

function DirALogo() {
  return (
    <Sheet bg={dirA.paper}>
      <ArtboardCaption bracketColor={dirA.blue}>Logo · primary lockup is blue on paper</ArtboardCaption>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, flex: 1, border: `1px solid ${dirA.rule}` }}>
        <div style={{ background: dirA.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${dirA.rule}`, padding: 32 }}>
          <TarideLogo word={dirA.ink} bracket={dirA.blue} width={170} />
        </div>
        <div style={{ background: dirA.paperAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${dirA.rule}`, padding: 32 }}>
          <TarideLogo word={dirA.ink} bracket={dirA.blue} width={170} />
        </div>
        <div style={{ background: dirA.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${dirA.rule}`, padding: 32 }}>
          <TarideLogo word={dirA.paper} bracket={dirA.yellow} width={170} />
        </div>
        <div style={{ background: dirA.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <TarideLogo word={dirA.paper} bracket={dirA.yellow} width={170} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', fontFamily: dirA.mono, fontSize: 10, color: dirA.stone, marginTop: 10, letterSpacing: 0.8, textTransform: 'uppercase' }}>
        <span>Paper · primary</span>
        <span>Paper alt</span>
        <span>Blue · reverse</span>
        <span>Ink · reverse</span>
      </div>
    </Sheet>
  );
}

function DirAHero() {
  return (
    <Sheet bg={dirA.paper} style={{ padding: 0 }}>
      {/* Top utility bar with bracket-tab section marker */}
      <div style={{ borderBottom: `1px solid ${dirA.rule}`, padding: '20px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <TarideLogo word={dirA.ink} bracket={dirA.blue} width={110} />
        <div style={{ display: 'flex', gap: 28, fontFamily: dirA.body, fontSize: 14, color: dirA.inkSoft }}>
          <span>Protocol</span><span>Foundation</span><span>Briefs</span><span>Governance</span>
          <span style={{ color: dirA.blue, fontWeight: 500 }}>Read v0.51 ↗</span>
        </div>
      </div>
      <div style={{ padding: '72px 64px 64px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Bracket-tab section opener */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: dirA.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: dirA.blue, marginBottom: 28, borderTop: `1px solid ${dirA.blue}`, paddingTop: 10 }}>
            <span>Foundation document · v0.51</span>
            <span style={{ color: dirA.stone }}>·  registered 12 May 2026</span>
          </div>
          <h1 style={{ fontFamily: dirA.display, fontWeight: 400, fontSize: 84, lineHeight: 1.02, letterSpacing: -1.5, color: dirA.ink, margin: 0, maxWidth: 1000 }}>
            Verification is the default.<br/>
            <span style={{ color: dirA.blue }}>Identification is optional.</span>
          </h1>
          <p style={{ fontFamily: dirA.body, fontSize: 20, lineHeight: 1.55, color: dirA.inkSoft, marginTop: 28, maxWidth: 640 }}>
            An open European protocol that lets anyone verify a call, message, or email comes from a registered source — without revealing who is behind it.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 48 }}>
          <button style={{ fontFamily: dirA.body, fontSize: 16, fontWeight: 500, background: dirA.blue, color: dirA.paper, border: 0, padding: '14px 22px', borderRadius: 2, cursor: 'pointer' }}>Read the foundation document →</button>
          <button style={{ fontFamily: dirA.body, fontSize: 16, fontWeight: 500, background: 'transparent', color: dirA.ink, border: `1px solid ${dirA.ink}`, padding: '14px 22px', borderRadius: 2, cursor: 'pointer' }}>Open questions  ⌗ 24</button>
          {/* Verified credential badge — yellow lives here, and only here. */}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10, fontFamily: dirA.mono, fontSize: 12, color: dirA.ink, background: dirA.yellowTint, border: `1px solid ${dirA.yellow}`, padding: '8px 14px', borderRadius: 2 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: dirA.yellow, boxShadow: `0 0 0 3px ${dirA.yellowTint}` }} />
            VERIFIED CREDENTIAL · kpn.nl
          </div>
        </div>
      </div>
    </Sheet>
  );
}

function DirARationale() {
  return (
    <Sheet bg={dirA.paperAlt} style={{ padding: 36 }}>
      <ArtboardCaption bracketColor={dirA.blue}>Rationale</ArtboardCaption>
      <h2 style={{ fontFamily: dirA.display, fontSize: 30, fontWeight: 500, color: dirA.ink, margin: '0 0 16px', lineHeight: 1.15 }}>
        A foundation document that reads as the foundation.
      </h2>
      <p style={{ fontFamily: dirA.body, fontSize: 14.5, lineHeight: 1.6, color: dirA.inkSoft, margin: '0 0 14px' }}>
        Warm paper, near-black ink, and a single trusted blue. The IBM Plex family carries serif gravity, sans clarity, and mono honesty in one coherent voice — institutional without being bureaucratic.
      </p>
      <p style={{ fontFamily: dirA.body, fontSize: 14.5, lineHeight: 1.6, color: dirA.inkSoft, margin: '0 0 14px' }}>
        <b>Blue wins.</b> Yellow is held back for one purpose: the verified-credential badge. The asymmetry mirrors the protocol — verification is everywhere, identification is rare.
      </p>
      <p style={{ fontFamily: dirA.body, fontSize: 14.5, lineHeight: 1.6, color: dirA.inkSoft, margin: '0 0 14px' }}>
        <b>The brackets become section markers</b> — a small bottom-left bracket prefaces every label and a top-rule extends across section openers, echoing the logo's asymmetric frame.
      </p>
      <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, fontFamily: dirA.mono, fontSize: 11, color: dirA.inkSoft, letterSpacing: 0.4 }}>
        <div><b style={{ color: dirA.ink }}>Q1 ·</b> blue primary, yellow = verified only</div>
        <div><b style={{ color: dirA.ink }}>Q2 ·</b> section markers + rules</div>
        <div><b style={{ color: dirA.ink }}>Q3 ·</b> IBM Plex Serif/Sans/Mono</div>
        <div><b style={{ color: dirA.ink }}>Q4 ·</b> yellow capsule, mono label</div>
        <div><b style={{ color: dirA.ink }}>Q5 ·</b> light primary, dark equal</div>
      </div>
    </Sheet>
  );
}

window.DirectionA = { DirAPalette, DirAType, DirALogo, DirAHero, DirARationale, dirA };
