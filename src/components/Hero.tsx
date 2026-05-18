import Globe from "../ui/Globe";

const stats = [
  { value: "0.3m", label: "GSD Resolution" },
  { value: "Pan-AF", label: "Coverage" },
  { value: "72hr", label: "Turnaround" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="topo-bg hero-section"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left */}
      <div
        className="hero-left"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "7rem 3rem 5rem 3.5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="fade-up"
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--sage)",
            border: "1px solid var(--sage)",
            display: "inline-block",
            padding: "0.3rem 0.8rem",
            marginBottom: "2rem",
          }}
        >
          Est. 2026 · Nairobi, Kenya
        </div>

        <h1
          className="fade-up delay-1"
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(3rem, 6vw, 6rem)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "var(--moss)",
          }}
        >
          From Orbit to{" "}
          <em style={{ fontStyle: "italic", color: "var(--clay)" }}>
            Ground Truth
          </em>
        </h1>

        <p
          className="fade-up delay-2"
          style={{
            fontSize: "1.05rem",
            color: "#4a5e53",
            lineHeight: 1.7,
            maxWidth: 480,
            marginTop: "1.75rem",
          }}
        >
          Geo Spec Solutions delivers cutting-edge geospatial intelligence from
          high-resolution satellite imagery to environmental monitoring
          empowering governments, enterprises, and communities to make decisions
          grounded in geography.
        </p>

        <div
          className="fade-up delay-3"
          style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}
        >
          <a href="#services" className="btn-primary">
            Explore Services
          </a>
          <a href="#contact" className="btn-outline">
            Talk to Us
          </a>
        </div>

        <div
          className="fade-up delay-4"
          style={{ marginTop: "3.5rem", display: "flex", gap: "2.5rem" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
            >
              {i > 0 && (
                <div
                  style={{
                    width: 1,
                    background: "rgba(61,107,79,0.2)",
                    alignSelf: "stretch",
                  }}
                />
              )}
              <div>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.875rem",
                    color: "var(--moss)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--sage)",
                    marginTop: 2,
                  }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Globe */}
      <div
        className="hero-right-panel"
        style={{
          background: "var(--moss)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          isolation: "isolate",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 60% 40%,rgba(184,242,60,0.08) 0%,transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(184,242,60,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(184,242,60,0.05) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <Globe />
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "2rem",
            color: "rgba(184,242,60,0.6)",
            fontFamily: "Space Mono, monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
          }}
        >
          <div>LAT: -1.2921° S</div>
          <div>LNG: 36.8219° E</div>
          <div style={{ marginTop: 4, color: "rgba(184,242,60,0.35)" }}>
            NAIROBI, KENYA
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "2rem",
            right: "2rem",
            color: "rgba(184,242,60,0.4)",
            fontFamily: "Space Mono, monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.08em",
            textAlign: "right",
          }}
        >
          <div>RES: 0.3m GSD</div>
          <div>SAT: ACTIVE ●</div>
        </div>
      </div>
    </section>
  );
}
