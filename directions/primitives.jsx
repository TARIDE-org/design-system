// Shared primitives across all three directions.
// Logo SVG inlined as a component so we can color it independently and avoid
// loading 4 separate logo files per artboard. Path data is from the supplied
// `Taride_logo_400x200_blue.svg` — wordmark = `b` class, brackets = `c` class.
function TarideLogo({ word = '#10100B', bracket = '#0077DA', width = 220, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 354.52 302.96" width={width} style={style} aria-label="TARIDE">
      <path fill={bracket} d="M348.53,107.32h-18.2v-6.52h24.19v97.19h-24.19v-5.87h18.2v-84.8Z" />
      <g fill={word}>
        <path d="M52.5,133.61h-13.64v-8.06h35.77v8.06h-13.64v41.43h-8.48v-41.43Z" />
        <path d="M100.9,125.55h8.62l19.23,49.48h-8.55l-4.52-11.73h-20.93l-4.52,11.73h-8.55l19.23-49.48ZM97.79,155.53h14.85l-7.42-19.3-7.42,19.3Z" />
        <path d="M142.65,125.55h16.26c9.83,0,16.4,6.36,16.4,15.41,0,7.42-3.96,13.08-11.03,14.84l12.37,19.23h-9.9l-11.73-18.66h-3.89v18.66h-8.48v-49.48ZM166.68,140.96c0-4.88-3.39-7.35-8.84-7.35h-6.72v14.7h6.72c5.44,0,8.84-2.47,8.84-7.35Z" />
        <path d="M196.04,125.55h8.48v49.48h-8.48v-49.48Z" />
        <path d="M267.6,150.3c0,14.28-10.04,24.74-24.46,24.74h-15.97v-49.48h15.97c14.42,0,24.46,10.46,24.46,24.74ZM258.97,150.3c0-9.05-6.08-16.68-15.69-16.68h-7.64v33.37h7.64c9.61,0,15.69-7.71,15.69-16.68Z" />
        <path d="M291.96,145.63h19.79v8.06h-19.79v13.29h21.91v8.06h-30.4v-49.48h29.97v8.06h-21.49v12.02Z" />
      </g>
      <path fill={bracket} d="M5.99,191.31h18.2v6.52H0v-97.19h24.19v5.87H5.99v84.8Z" />
    </svg>
  );
}

// Just the brackets — for use as section markers, decoration, etc.
function BracketTopRight({ color = 'currentColor', size = 32, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.19 97.19" width={size * 0.249} height={size} style={style}>
      <path fill={color} d="M18.2,6.52h-18.2v-6.52h24.19v97.19h-24.19v-5.87h18.2v-84.8Z" />
    </svg>
  );
}
function BracketBottomLeft({ color = 'currentColor', size = 32, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.19 97.19" width={size * 0.249} height={size} style={style}>
      <g transform="translate(0,-90.51)">
        <path fill={color} d="M5.99,191.31h18.2v6.52H0v-97.19h24.19v5.87H5.99v84.8Z" />
      </g>
    </svg>
  );
}

// Generic swatch row.
function Swatch({ token, hex, name, role, dark }) {
  const isLight = dark ? false : (parseInt(hex.slice(1, 3), 16) + parseInt(hex.slice(3, 5), 16) + parseInt(hex.slice(5, 7), 16)) > 400;
  return (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ background: hex, height: 110, borderRadius: 2, border: isLight ? '1px solid rgba(0,0,0,0.08)' : 'none' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: 0.4, color: dark ? '#cfcdc6' : '#5a5650', textTransform: 'uppercase' }}>{token}</div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: dark ? '#fff' : '#1a1814' }}>{hex}</div>
        <div style={{ fontSize: 12, color: dark ? '#cfcdc6' : '#5a5650', marginTop: 4 }}>{name}</div>
        {role && <div style={{ fontSize: 11, color: dark ? '#9c988e' : '#7c7770', fontStyle: 'italic' }}>{role}</div>}
      </div>
    </div>
  );
}

// Artboard frame: standard padding + background.
function Sheet({ children, bg = '#f7f5ef', ink = '#1a1814', style }) {
  return (
    <div style={{ width: '100%', height: '100%', background: bg, color: ink, padding: 48, display: 'flex', flexDirection: 'column', ...style }}>
      {children}
    </div>
  );
}

// Section title used inside artboards (very small, monospace, prefixed with a bracket).
function ArtboardCaption({ children, bracketColor, color = '#5a5650' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, letterSpacing: 1.2, textTransform: 'uppercase', color, marginBottom: 24 }}>
      <BracketBottomLeft color={bracketColor || color} size={14} />
      <span>{children}</span>
    </div>
  );
}

Object.assign(window, {
  TarideLogo, BracketTopRight, BracketBottomLeft, Swatch, Sheet, ArtboardCaption,
});
