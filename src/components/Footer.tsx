const links = ["services", "about", "team", "contact"];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060a08",
        padding: "3rem 3.5rem",
        borderTop: "1px solid rgba(184,242,60,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Geo<span style={{ color: "var(--acid)" }}>Spec</span>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.875rem",
                color: "var(--clay)",
                marginLeft: 4,
              }}
            >
              Solutions
            </span>
          </div>
          <div
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
              marginTop: 4,
            }}
          >
            GEOSPATIAL SOLUTIONS · NAIROBI, KENYA
          </div>
        </div>

        <div style={{ display: "flex", gap: "2rem" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="nav-link"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </div>

        <div
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.06em",
          }}
        >
          © 2026 GeoSpec Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
