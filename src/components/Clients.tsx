const pillars = [
  {
    icon: "⬡",
    title: "Enterprise Methodology",
    desc: "We apply the same rigorous standards used by top-tier global GIS firms — tailored for African landscapes.",
  },
  {
    icon: "◎",
    title: "Built for Africa",
    desc: "Local expertise, on-the-ground knowledge, and continent-wide coverage from day one.",
  },
  {
    icon: "⟁",
    title: "End-to-End Delivery",
    desc: "From raw imagery acquisition to analysis-ready dashboards — we own the full pipeline.",
  },
];

export default function Clients() {
  return (
    <section
      style={{
        padding: "4rem 3.5rem",
        borderTop: "1px solid rgba(61,107,79,0.1)",
        background: "var(--paper)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "0.65rem",
            color: "var(--sage)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          Why Work With Us
        </div>
        <div
          className="clients-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.title}
              style={{
                padding: "2rem",
                border: "1px solid rgba(61,107,79,0.12)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1.75rem",
                  marginBottom: "1rem",
                  color: "var(--acid)",
                  fontFamily: "Space Mono, monospace",
                }}
              >
                {p.icon}
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--moss)",
                  marginBottom: "0.5rem",
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#6b7d74",
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
