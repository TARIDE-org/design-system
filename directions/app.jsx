// Top-level: stitches the three directions onto the canvas.
const { DirAPalette, DirAType, DirALogo, DirAHero, DirARationale } = window.DirectionA;
const { DirBPalette, DirBType, DirBLogo, DirBHero, DirBRationale } = window.DirectionB;
const { DirCPalette, DirCType, DirCLogo, DirCHero, DirCRationale } = window.DirectionC;

function App() {
  return (
    <DesignCanvas>
      <DCSection id="a" title="Direction A · Foundation Document"
        subtitle="Warm paper, IBM Plex, blue wins, yellow = verified-only">
        <DCArtboard id="a-rationale" label="rationale"        width={620}  height={560}>{<DirARationale />}</DCArtboard>
        <DCArtboard id="a-palette"   label="palette"          width={1100} height={300}>{<DirAPalette />}</DCArtboard>
        <DCArtboard id="a-type"      label="type specimen"    width={1100} height={520}>{<DirAType />}</DCArtboard>
        <DCArtboard id="a-logo"      label="logo · 4 surfaces" width={1100} height={320}>{<DirALogo />}</DCArtboard>
        <DCArtboard id="a-hero"      label="hero block"       width={1280} height={700}>{<DirAHero />}</DCArtboard>
      </DCSection>

      <DCSection id="b" title="Direction B · Field Manual"
        subtitle="Newsreader display, both accents equal (blue=system, yellow=annotation)">
        <DCArtboard id="b-rationale" label="rationale"        width={620}  height={560}>{<DirBRationale />}</DCArtboard>
        <DCArtboard id="b-palette"   label="palette"          width={1100} height={300}>{<DirBPalette />}</DCArtboard>
        <DCArtboard id="b-type"      label="type specimen"    width={1100} height={520}>{<DirBType />}</DCArtboard>
        <DCArtboard id="b-logo"      label="logo · 4 surfaces" width={1100} height={320}>{<DirBLogo />}</DCArtboard>
        <DCArtboard id="b-hero"      label="hero block"       width={1280} height={700}>{<DirBHero />}</DCArtboard>
      </DCSection>

      <DCSection id="c" title="Direction C · Open Spec"
        subtitle="Monospace-forward, dark mode equal, yellow as syntax + verified token">
        <DCArtboard id="c-rationale" label="rationale"        width={620}  height={560}>{<DirCRationale />}</DCArtboard>
        <DCArtboard id="c-palette"   label="palette · light + dark" width={1100} height={520}>{<DirCPalette />}</DCArtboard>
        <DCArtboard id="c-type"      label="type specimen"    width={1100} height={520}>{<DirCType />}</DCArtboard>
        <DCArtboard id="c-logo"      label="logo · light + dark" width={1100} height={320}>{<DirCLogo />}</DCArtboard>
        <DCArtboard id="c-hero"      label="hero block · split light/dark" width={1280} height={620}>{<DirCHero />}</DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
