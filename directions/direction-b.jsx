// Direction B — "Field Manual"
// Editorial/book-like. Newsreader display + Plex Sans body + Plex Mono code.
// Both blue and yellow held equal but semantically split: blue is system /
// protocol speech, yellow is human-authored annotation. Brackets become
// corner registration marks at the corners of content blocks.

const dirB = {
  paper: '#EFEDE6',
  paperAlt: '#E5E2D8',
  card: '#FAF8F2',
  ink: '#0E1014',
  inkSoft: '#3A3D45',
  slate: '#6F7382',
  rule: '#CFCCBF',
  blue: '#143E7A',
  blueAlt: '#2A66B8',
  yellow: '#D9A82A',
  yellowDeep: '#A87B0E',
  display: "'Newsreader', Georgia, serif",
  body: "'IBM Plex Sans', -apple-system, system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

function CornerMark({ color, position }) {
  // Tiny registration mark — bracket cropped to one corner.
  const styles = {
    tl: { top: 0, left: 0, transform: 'rotate(0deg)' },
    tr: { top: 0, right: 0, transform: 'rotate(90deg)' },
    bl: { bottom: 0, left: 0, transform: 'rotate(-90deg)' },
    br: { bottom: 0, right: 0, transform: 'rotate(180deg)' },
  }[position];
  return (
    <span style={{ position: 'absolute', width: 14, height: 14, ...styles }}>
      <span style={{ position: 'absolute', top: 0, left: 0, width: 14, height: 2, background: color }} />
      <span style={{ position: 'absolute', top: 0, left: 0, width: 2, height: 14, background: color }} />
    </span>
  );
}

function Framed({ children, color, style }) {
  return (
    <div style={{ position: 'relative', padding: 24, ...style }}>
      <CornerMark color={color} position="tl" />
      <CornerMark color={color} position="tr" />
      <CornerMark color={color} position="bl" />
      <CornerMark color={color} position="br" />
      {children}
    </div>
  );
}

function DirBPalette() {
  return (
    <Sheet bg={dirB.paper}>
      <ArtboardCaption bracketColor={dirB.blue}>Palette · two equal accents, split by speaker</ArtboardCaption>
      <div style={{ display: 'flex', gap: 16, flex: 1 }}>
        <Swatch token="ink/100"      hex={dirB.ink}      name="Ink" role="text default" />
        <Swatch token="ink/70"       hex={dirB.inkSoft}  name="Ink soft" role="secondary text" />
        <Swatch token="paper/100"    hex={dirB.paper}    name="Paper" role="canvas" />
        <Swatch token="card/100"     hex={dirB.card}     name="Card" role="raised content" />
        <Swatch token="slate/500"    hex={dirB.slate}    name="Slate" role="meta + marginalia" />
        <Swatch token="signal/blue"  hex={dirB.blue}     name="Oxford blue" role="protocol speech" />
        <Swatch token="signal/yellow" hex={dirB.yellow}  name="Marginalia"  role="annotations, attestation" />
        <Swatch token="signal/yellow-deep" hex={dirB.yellowDeep} name="Yellow deep" role="links on yellow" />
      </div>
    </Sheet>
  );
}

function DirBType() {
  return (
    <Sheet bg={dirB.paper}>
      <ArtboardCaption bracketColor={dirB.blue}>Type · Newsreader + Plex Sans + Plex Mono</ArtboardCaption>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, flex: 1, alignContent: 'start' }}>
        <div>
          <div style={{ fontFamily: dirB.mono, fontSize: 10, color: dirB.slate, letterSpacing: 1, textTransform: 'uppercase' }}>Newsreader · Display 78/80</div>
          <div style={{ fontFamily: dirB.display, fontSize: 78, lineHeight: 1.04, color: dirB.ink, letterSpacing: -1.8, marginTop: 8, fontWeight: 400 }}>
            <i>Trust</i>, framed.
          </div>
          <div style={{ fontFamily: dirB.mono, fontSize: 10, color: dirB.slate, letterSpacing: 1, textTransform: 'uppercase', marginTop: 28 }}>Newsreader Italic · used like a quotation</div>
          <div style={{ fontFamily: dirB.display, fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, color: dirB.inkSoft, marginTop: 6, maxWidth: 460 }}>
            "Pseudonymity by default. Identification by choice."
          </div>
        </div>
        <div>
          <div style={{ fontFamily: dirB.mono, fontSize: 10, color: dirB.slate, letterSpacing: 1, textTransform: 'uppercase' }}>Plex Sans · Body 16/26</div>
          <p style={{ fontFamily: dirB.body, fontSize: 16, lineHeight: 1.65, color: dirB.ink, margin: '6px 0 0', maxWidth: 380 }}>
            Five layers, governed by a foundation rather than a company. The protocol is the product; the foundation is the warranty.
          </p>
          <div style={{ fontFamily: dirB.mono, fontSize: 10, color: dirB.slate, letterSpacing: 1, textTransform: 'uppercase', marginTop: 24 }}>Plex Mono · Annotation 12/18</div>
          <div style={{ marginTop: 8, padding: '10px 12px', borderLeft: `2px solid ${dirB.yellow}`, background: 'rgba(217,168,42,0.10)', fontFamily: dirB.mono, fontSize: 12, lineHeight: 1.55, color: dirB.ink }}>
            <b>marginal note</b><br/>
            EBSI alignment is asserted but not yet ratified. See §4.2 of v0.51.
          </div>
        </div>
        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 24, alignItems: 'baseline', borderTop: `1px solid ${dirB.rule}`, paddingTop: 18 }}>
          <span style={{ fontFamily: dirB.display, fontSize: 36, color: dirB.ink }}>H1 · 36</span>
          <span style={{ fontFamily: dirB.display, fontSize: 26, color: dirB.ink, fontStyle: 'italic' }}>H2 · 26 italic</span>
          <span style={{ fontFamily: dirB.body, fontSize: 18, color: dirB.ink, fontWeight: 600 }}>H3 · 18 sans</span>
          <span style={{ fontFamily: dirB.body, fontSize: 14, color: dirB.inkSoft }}>Body S · 14</span>
          <span style={{ fontFamily: dirB.mono, fontSize: 11, color: dirB.slate, letterSpacing: 0.8, textTransform: 'uppercase' }}>Caption · 11</span>
        </div>
      </div>
    </Sheet>
  );
}

function DirBLogo() {
  return (
    <Sheet bg={dirB.paper}>
      <ArtboardCaption bracketColor={dirB.blue}>Logo · yellow brackets are equally canonical in this direction</ArtboardCaption>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', flex: 1, border: `1px solid ${dirB.rule}` }}>
        <div style={{ background: dirB.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${dirB.rule}`, padding: 32 }}>
          <TarideLogo word={dirB.ink} bracket={dirB.blue} width={170} />
        </div>
        <div style={{ background: dirB.card, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${dirB.rule}`, padding: 32 }}>
          <TarideLogo word={dirB.ink} bracket={dirB.yellow} width={170} />
        </div>
        <div style={{ background: dirB.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${dirB.rule}`, padding: 32 }}>
          <TarideLogo word={dirB.card} bracket={dirB.yellow} width={170} />
        </div>
        <div style={{ background: dirB.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <TarideLogo word={dirB.card} bracket={dirB.yellow} width={170} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', fontFamily: dirB.mono, fontSize: 10, color: dirB.slate, marginTop: 10, letterSpacing: 0.8, textTransform: 'uppercase' }}>
        <span>Paper · blue brackets</span>
        <span>Card · yellow brackets</span>
        <span>Oxford reverse</span>
        <span>Ink reverse</span>
      </div>
    </Sheet>
  );
}

function DirBHero() {
  return (
    <Sheet bg={dirB.paper} style={{ padding: 0 }}>
      <div style={{ borderBottom: `1px solid ${dirB.rule}`, padding: '20px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <TarideLogo word={dirB.ink} bracket={dirB.blue} width={110} />
        <div style={{ display: 'flex', gap: 28, fontFamily: dirB.body, fontSize: 14, color: dirB.inkSoft }}>
          <span>Protocol</span><span>Foundation</span><span>Briefs</span><span>Governance</span>
          <span style={{ color: dirB.blue, fontWeight: 600 }}>v0.51 ↗</span>
        </div>
      </div>
      <div style={{ padding: '60px 64px 56px', flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56 }}>
        <div>
          <div style={{ fontFamily: dirB.mono, fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: dirB.slate, marginBottom: 28 }}>
            §0 · foreword
          </div>
          <h1 style={{ fontFamily: dirB.display, fontWeight: 400, fontSize: 88, lineHeight: 1.0, letterSpacing: -2, color: dirB.ink, margin: 0 }}>
            Trust, <i>framed.</i><br/>
            <span style={{ color: dirB.blue }}>Not surveilled.</span>
          </h1>
          <p style={{ fontFamily: dirB.body, fontSize: 19, lineHeight: 1.6, color: dirB.inkSoft, marginTop: 28, maxWidth: 520 }}>
            An open protocol for verified communication across phone, email, and message — built and governed as European infrastructure, not a product.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 14 }}>
            <button style={{ fontFamily: dirB.body, fontSize: 15, fontWeight: 500, background: dirB.ink, color: dirB.card, border: 0, padding: '14px 22px', cursor: 'pointer' }}>Read v0.51</button>
            <button style={{ fontFamily: dirB.body, fontSize: 15, fontWeight: 500, background: 'transparent', color: dirB.ink, border: `1px solid ${dirB.ink}`, padding: '14px 22px', cursor: 'pointer' }}>Briefs by audience</button>
          </div>
        </div>
        {/* Right side: a framed marginalia card showing the yellow-as-annotation pattern */}
        <Framed color={dirB.yellow} style={{ background: dirB.card, alignSelf: 'start' }}>
          <div style={{ fontFamily: dirB.mono, fontSize: 11, color: dirB.yellowDeep, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>Verified credential</div>
          <div style={{ fontFamily: dirB.display, fontSize: 26, lineHeight: 1.25, color: dirB.ink, fontStyle: 'italic', marginBottom: 14 }}>
            kpn.nl asserts: this call originates from a registered operator.
          </div>
          <div style={{ fontFamily: dirB.mono, fontSize: 11, color: dirB.slate, lineHeight: 1.55 }}>
            issued&nbsp;&nbsp;2026-05-18 10:03Z<br/>
            scope&nbsp;&nbsp;&nbsp;pseudonymous<br/>
            chain&nbsp;&nbsp;&nbsp;eIDAS L3 → KPN
          </div>
        </Framed>
      </div>
    </Sheet>
  );
}

function DirBRationale() {
  return (
    <Sheet bg={dirB.card} style={{ padding: 36 }}>
      <ArtboardCaption bracketColor={dirB.blue}>Rationale</ArtboardCaption>
      <h2 style={{ fontFamily: dirB.display, fontSize: 30, fontWeight: 400, color: dirB.ink, margin: '0 0 16px', lineHeight: 1.15, fontStyle: 'italic' }}>
        A field manual, not a product brochure.
      </h2>
      <p style={{ fontFamily: dirB.body, fontSize: 14.5, lineHeight: 1.6, color: dirB.inkSoft, margin: '0 0 14px' }}>
        Newsreader's transitional serif gives the site the weight of a research document; Plex Sans keeps the body legible and modern; Plex Mono carries protocol detail and marginalia.
      </p>
      <p style={{ fontFamily: dirB.body, fontSize: 14.5, lineHeight: 1.6, color: dirB.inkSoft, margin: '0 0 14px' }}>
        <b>Blue and yellow are equal but split by speaker.</b> Oxford blue is protocol speech (system, link, primary action); yellow is human annotation (margin notes, attestations, verified credentials). The two never compete because they never speak about the same thing.
      </p>
      <p style={{ fontFamily: dirB.body, fontSize: 14.5, lineHeight: 1.6, color: dirB.inkSoft, margin: '0 0 14px' }}>
        <b>The brackets become corner registration marks</b> around content blocks — the asymmetric framing of the logo, generalised.
      </p>
      <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, fontFamily: dirB.mono, fontSize: 11, color: dirB.inkSoft }}>
        <div><b style={{ color: dirB.ink }}>Q1 ·</b> both, split by speaker</div>
        <div><b style={{ color: dirB.ink }}>Q2 ·</b> corner registration marks</div>
        <div><b style={{ color: dirB.ink }}>Q3 ·</b> Newsreader / Plex Sans / Plex Mono</div>
        <div><b style={{ color: dirB.ink }}>Q4 ·</b> yellow-framed annotation card</div>
        <div><b style={{ color: dirB.ink }}>Q5 ·</b> light primary, dark equal</div>
      </div>
    </Sheet>
  );
}

window.DirectionB = { DirBPalette, DirBType, DirBLogo, DirBHero, DirBRationale, dirB };
