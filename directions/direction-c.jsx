// Direction C — "Open Spec"
// Monospace-forward technical README/RFC. Plex Sans for body text only; mono
// everywhere else. Single blue accent; yellow is reserved for syntax + the
// verified-credential token. Dark mode is first-class equal to light.

const dirC = {
  // Light
  paper:    '#FBFAF6',
  paperAlt: '#F1EFE7',
  ink:      '#0B0B0B',
  inkSoft:  '#3A3A3A',
  gray:     '#8C8A84',
  rule:     '#D8D5CB',
  blue:     '#1860D8',
  blueTint: '#E0EAFB',
  yellow:   '#E3B23A',
  green:    '#2E8B5E',
  red:      '#C7493E',
  // Dark
  dPaper:   '#0E1014',
  dPaperAlt:'#171A20',
  dInk:     '#E8E6DF',
  dInkSoft: '#B5B2A8',
  dRule:    '#262A33',
  dBlue:    '#5C9CFF',
  dYellow:  '#F5C84F',
  // Type
  display: "'JetBrains Mono', ui-monospace, monospace",
  body:    "'IBM Plex Sans', -apple-system, system-ui, sans-serif",
  mono:    "'JetBrains Mono', ui-monospace, monospace",
};

function DirCPalette() {
  return (
    <Sheet bg={dirC.paper}>
      <ArtboardCaption bracketColor={dirC.blue}>Palette · light primary, dark equal</ArtboardCaption>
      <div style={{ display: 'flex', gap: 16, flex: 1, marginBottom: 18 }}>
        <Swatch token="ink"        hex={dirC.ink}     name="Ink"      role="text" />
        <Swatch token="paper"      hex={dirC.paper}   name="Paper"    role="canvas" />
        <Swatch token="paper.alt"  hex={dirC.paperAlt} name="Paper alt" role="code blocks" />
        <Swatch token="gray.500"   hex={dirC.gray}    name="Gray"     role="comments" />
        <Swatch token="accent"     hex={dirC.blue}    name="Accent"   role="links, keywords" />
        <Swatch token="syntax.y"   hex={dirC.yellow}  name="Syntax/V" role="strings · verified" />
        <Swatch token="signal.ok"  hex={dirC.green}   name="OK"       role="success state" />
        <Swatch token="signal.err" hex={dirC.red}     name="Err"      role="error state" />
      </div>
      <ArtboardCaption bracketColor={dirC.dBlue} color={dirC.dInkSoft}>Dark mode</ArtboardCaption>
      <div style={{ display: 'flex', gap: 16, background: dirC.dPaper, padding: 16, marginLeft: -16, marginRight: -16, marginBottom: -16 }}>
        <Swatch dark token="ink"        hex={dirC.dInk}    name="Ink" />
        <Swatch dark token="paper"      hex={dirC.dPaper}  name="Paper" />
        <Swatch dark token="paper.alt"  hex={dirC.dPaperAlt} name="Paper alt" />
        <Swatch dark token="gray.500"   hex={dirC.dInkSoft} name="Gray" />
        <Swatch dark token="accent"     hex={dirC.dBlue}   name="Accent" />
        <Swatch dark token="syntax.y"   hex={dirC.dYellow} name="Syntax/V" />
        <Swatch dark token="signal.ok"  hex="#5EC990"      name="OK" />
        <Swatch dark token="signal.err" hex="#FF7A6D"      name="Err" />
      </div>
    </Sheet>
  );
}

function DirCType() {
  return (
    <Sheet bg={dirC.paper}>
      <ArtboardCaption bracketColor={dirC.blue}>Type · JetBrains Mono leads; Plex Sans for body</ArtboardCaption>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, flex: 1, alignContent: 'start' }}>
        <div>
          <div style={{ fontFamily: dirC.mono, fontSize: 10, color: dirC.gray, letterSpacing: 0.6 }}>{/* */}// JetBrains Mono · Display 60/68</div>
          <div style={{ fontFamily: dirC.display, fontSize: 60, lineHeight: 1.08, color: dirC.ink, letterSpacing: -1.5, marginTop: 10, fontWeight: 500 }}>
            <span style={{ color: dirC.blue }}>verify</span>(call)<br/>
            <span style={{ color: dirC.gray }}>&nbsp;&nbsp;→</span> <span style={{ color: dirC.yellow }}>"ok"</span>
          </div>
          <div style={{ fontFamily: dirC.mono, fontSize: 10, color: dirC.gray, marginTop: 26 }}>{/* */}// Code block · 14/22</div>
          <pre style={{ fontFamily: dirC.mono, fontSize: 14, lineHeight: 1.6, color: dirC.ink, margin: '6px 0 0', background: dirC.paperAlt, padding: 16, borderLeft: `2px solid ${dirC.blue}` }}>
<span style={{ color: dirC.gray }}>{`# resolve +31 20 123 4567`}</span>{`\n`}
<span style={{ color: dirC.blue }}>{`taride`}</span>{` resolve `}<span style={{ color: dirC.yellow }}>+31201234567</span>{`\n`}
<span style={{ color: dirC.gray }}>{`↳ issuer    `}</span><span style={{ color: dirC.yellow }}>{`"kpn.nl"`}</span>{`\n`}
<span style={{ color: dirC.gray }}>{`↳ verified  `}</span><span style={{ color: dirC.green }}>{`true`}</span>{`\n`}
<span style={{ color: dirC.gray }}>{`↳ scope     `}</span><span style={{ color: dirC.yellow }}>{`"pseudonymous"`}</span>
          </pre>
        </div>
        <div>
          <div style={{ fontFamily: dirC.mono, fontSize: 10, color: dirC.gray }}>{/* */}// Plex Sans · Body 16/26 — used sparingly for prose</div>
          <p style={{ fontFamily: dirC.body, fontSize: 16, lineHeight: 1.65, color: dirC.ink, margin: '8px 0 0', maxWidth: 360 }}>
            TARIDE is a protocol. The website reads like documentation because the protocol is what's being introduced.
          </p>
          <div style={{ fontFamily: dirC.mono, fontSize: 10, color: dirC.gray, marginTop: 24 }}>{/* */}// Type scale (all mono unless noted)</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
            <span style={{ fontFamily: dirC.mono, fontSize: 42, color: dirC.ink, fontWeight: 500 }}>H1·42</span>
            <span style={{ fontFamily: dirC.mono, fontSize: 26, color: dirC.ink, fontWeight: 500 }}>H2·26</span>
            <span style={{ fontFamily: dirC.mono, fontSize: 18, color: dirC.ink, fontWeight: 500 }}>H3·18</span>
            <span style={{ fontFamily: dirC.body, fontSize: 15, color: dirC.ink }}>Body·15 (Plex Sans)</span>
            <span style={{ fontFamily: dirC.mono, fontSize: 12, color: dirC.gray }}>caption·12</span>
          </div>
        </div>
      </div>
    </Sheet>
  );
}

function DirCLogo() {
  return (
    <Sheet bg={dirC.paper}>
      <ArtboardCaption bracketColor={dirC.blue}>Logo · monochrome on light, blue on dark, yellow reserved</ArtboardCaption>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', flex: 1, border: `1px solid ${dirC.rule}` }}>
        <div style={{ background: dirC.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${dirC.rule}`, padding: 32 }}>
          <TarideLogo word={dirC.ink} bracket={dirC.ink} width={170} />
        </div>
        <div style={{ background: dirC.paperAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${dirC.rule}`, padding: 32 }}>
          <TarideLogo word={dirC.ink} bracket={dirC.blue} width={170} />
        </div>
        <div style={{ background: dirC.dPaper, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: `1px solid ${dirC.dRule}`, padding: 32 }}>
          <TarideLogo word={dirC.dInk} bracket={dirC.dBlue} width={170} />
        </div>
        <div style={{ background: dirC.dPaperAlt, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <TarideLogo word={dirC.dInk} bracket={dirC.dYellow} width={170} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', fontFamily: dirC.mono, fontSize: 10, color: dirC.gray, marginTop: 10, letterSpacing: 0.4 }}>
        <span>{/* */}// light · mono</span>
        <span>{/* */}// light · accent</span>
        <span>{/* */}// dark · accent</span>
        <span>{/* */}// dark · verified</span>
      </div>
    </Sheet>
  );
}

function DirCHero() {
  // Split hero — left half light, right half dark, to demonstrate parity.
  const PromptBrackets = ({ color }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color, fontFamily: dirC.mono, fontWeight: 500 }}>
      <BracketBottomLeft color={color} size={14} />
    </span>
  );
  return (
    <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {/* Light half */}
      <div style={{ background: dirC.paper, color: dirC.ink, padding: '48px 44px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <TarideLogo word={dirC.ink} bracket={dirC.ink} width={100} />
          <span style={{ fontFamily: dirC.mono, fontSize: 12, color: dirC.gray }}>{/* */}// /</span>
        </div>
        <div style={{ marginTop: 64, fontFamily: dirC.mono, fontSize: 11, color: dirC.gray, letterSpacing: 0.6 }}>{/* */}// foundation/v0.51.md</div>
        <h1 style={{ fontFamily: dirC.display, fontSize: 56, lineHeight: 1.05, letterSpacing: -1.4, fontWeight: 500, margin: '14px 0 0', color: dirC.ink }}>
          <span style={{ color: dirC.blue }}>$</span> taride<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: dirC.gray }}>--default</span><span style={{ color: dirC.ink }}> verify</span>
        </h1>
        <p style={{ fontFamily: dirC.body, fontSize: 17, lineHeight: 1.6, color: dirC.inkSoft, marginTop: 28, maxWidth: 360 }}>
          An open European protocol. Verify a sender's registration without learning who they are.
        </p>
        <div style={{ marginTop: 'auto', display: 'flex', gap: 10 }}>
          <button style={{ fontFamily: dirC.mono, fontSize: 14, fontWeight: 500, background: dirC.ink, color: dirC.paper, border: 0, padding: '12px 18px', cursor: 'pointer' }}>$ read v0.51</button>
          <button style={{ fontFamily: dirC.mono, fontSize: 14, fontWeight: 500, background: 'transparent', color: dirC.ink, border: `1px solid ${dirC.ink}`, padding: '12px 18px', cursor: 'pointer' }}>$ github →</button>
        </div>
      </div>
      {/* Dark half */}
      <div style={{ background: dirC.dPaper, color: dirC.dInk, padding: '48px 44px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <TarideLogo word={dirC.dInk} bracket={dirC.dBlue} width={100} />
          <span style={{ fontFamily: dirC.mono, fontSize: 12, color: dirC.dInkSoft }}>{/* */}// dark</span>
        </div>
        <div style={{ marginTop: 64, padding: 18, background: dirC.dPaperAlt, fontFamily: dirC.mono, fontSize: 13, lineHeight: 1.7 }}>
          <div style={{ color: dirC.dInkSoft }}>{/* */}// resolve a caller</div>
          <div><span style={{ color: dirC.dBlue }}>$</span> taride resolve <span style={{ color: dirC.dYellow }}>+31201234567</span></div>
          <div style={{ color: dirC.dInkSoft, marginTop: 6 }}>↳ issuer&nbsp;&nbsp;<span style={{ color: dirC.dYellow }}>"kpn.nl"</span></div>
          <div style={{ color: dirC.dInkSoft }}>↳ scope&nbsp;&nbsp;&nbsp;<span style={{ color: dirC.dYellow }}>"pseudonymous"</span></div>
          <div style={{ color: dirC.dInkSoft }}>↳ status&nbsp;&nbsp;<span style={{ color: '#5EC990' }}>verified</span></div>
        </div>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10, fontFamily: dirC.mono, fontSize: 12, color: dirC.dYellow, border: `1px solid ${dirC.dYellow}`, padding: '8px 12px', alignSelf: 'flex-start' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: dirC.dYellow }} />
          verified · kpn.nl
        </div>
      </div>
    </div>
  );
}

function DirCRationale() {
  return (
    <Sheet bg={dirC.paperAlt} style={{ padding: 36 }}>
      <ArtboardCaption bracketColor={dirC.blue}>Rationale</ArtboardCaption>
      <h2 style={{ fontFamily: dirC.display, fontSize: 28, fontWeight: 500, color: dirC.ink, margin: '0 0 16px', lineHeight: 1.2 }}>
        The site reads like the protocol.
      </h2>
      <p style={{ fontFamily: dirC.body, fontSize: 14.5, lineHeight: 1.6, color: dirC.inkSoft, margin: '0 0 14px' }}>
        JetBrains Mono carries the headings, navigation, and labels. Plex Sans only appears for genuine prose. The result is a site that reads like the protocol it describes — terminal-honest, never decorative.
      </p>
      <p style={{ fontFamily: dirC.body, fontSize: 14.5, lineHeight: 1.6, color: dirC.inkSoft, margin: '0 0 14px' }}>
        <b>Blue wins.</b> Yellow is purely a syntax token: it colors strings in code, the "verified" state, and nothing else.
      </p>
      <p style={{ fontFamily: dirC.body, fontSize: 14.5, lineHeight: 1.6, color: dirC.inkSoft, margin: '0 0 14px' }}>
        <b>The brackets become CLI prompt characters and column rules</b> — `[`, `]`, and short vertical bars that mark code blocks and key statements. Dark mode is first-class equal: it's the protocol's home.
      </p>
      <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, fontFamily: dirC.mono, fontSize: 11, color: dirC.inkSoft }}>
        <div><b style={{ color: dirC.ink }}>Q1 ·</b> blue wins, yellow = syntax</div>
        <div><b style={{ color: dirC.ink }}>Q2 ·</b> CLI prompts + column rules</div>
        <div><b style={{ color: dirC.ink }}>Q3 ·</b> JetBrains Mono + Plex Sans</div>
        <div><b style={{ color: dirC.ink }}>Q4 ·</b> mono token, yellow border</div>
        <div><b style={{ color: dirC.ink }}>Q5 ·</b> both, equal</div>
      </div>
    </Sheet>
  );
}

window.DirectionC = { DirCPalette, DirCType, DirCLogo, DirCHero, DirCRationale, dirC };
