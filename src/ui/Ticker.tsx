const items = [
  "SATELLITE IMAGERY",
  "ENVIRONMENTAL MONITORING",
  "GEOINT ANALYSIS",
  "SPATIAL PLANNING",
  "RESOURCE MAPPING",
  "LAND EVALUATION",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      className="ticker-wrap"
      style={{ background: "var(--moss)", padding: "0.75rem 0" }}
    >
      <div className="ticker">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                padding: "0 2rem",
                color: i % 2 === 0 ? "var(--acid)" : "rgba(255,255,255,0.6)",
              }}
            >
              {item}
            </span>
            <span
              style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
