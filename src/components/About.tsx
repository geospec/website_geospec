import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { num: "0.3m", label: "Max Resolution GSD" },
  { num: "Sub-72h", label: "Data Turnaround" },
  { num: "Pan-AF", label: "Operational Coverage" },
  { num: "100%", label: "Custom-Built Solutions" },
  { num: "Day One", label: "Ready to Deploy", span: true },
];

export default function About() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      style={{
        background: "var(--moss)",
        padding: "6rem 3.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(184,242,60,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(184,242,60,0.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(184,242,60,0.06) 0%,transparent 70%)",
        }}
      />

      <div
        className="about-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div ref={leftRef} className="reveal">
          <div className="section-label" style={{ color: "var(--acid)" }}>
            Who We Are
          </div>
          <div className="accent-line" />
          <h2 className="section-title" style={{ color: "white" }}>
            Africa's Premier
            <br />
            Spatial Intelligence
            <br />
            <em style={{ color: "var(--acid)", fontStyle: "italic" }}>
              Partner
            </em>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              marginTop: "1.5rem",
              fontSize: "0.95rem",
            }}
          >
            Headquartered in Nairobi, Geo Spec Solutions was built by seasoned
            geospatial professionals with deep roots in remote sensing, land
            intelligence, and spatial analysis across the African continent.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              marginTop: "1rem",
              fontSize: "0.95rem",
            }}
          >
            We bring enterprise-grade tools and methodology to every engagement
            — whether you're a government agency, an agribusiness, or an NGO —
            delivering insights that are rigorous, actionable, and built for
            Africa's unique terrain.
          </p>
          <a
            href="#contact"
            className="btn-primary"
            style={{ marginTop: "2rem", display: "inline-block" }}
          >
            Work With Us →
          </a>
        </div>

        <div
          ref={rightRef}
          className="reveal delay-2 about-stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(184,242,60,0.12)",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "rgba(255,255,255,0.03)",
                padding: "2.5rem 2rem",
                gridColumn: s.span ? "span 2" : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  color: "var(--acid)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(244,241,235,0.6)",
                  marginTop: "0.4rem",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
