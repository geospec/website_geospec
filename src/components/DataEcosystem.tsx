import { useScrollReveal } from "../hooks/useScrollReveal";

const techCols = [
  {
    label: "Satellite Platforms",
    items: [
      "Sentinel-2",
      "Landsat 8/9",
      "WorldView-3",
      "Planet Labs",
      "SPOT-7",
    ],
  },
  {
    label: "Processing Stack",
    items: [
      "QGIS / ArcGIS Pro",
      "Google Earth Engine",
      "SNAP Toolbox",
      "ENVI / ERDAS",
      "Python / R",
    ],
  },
  {
    label: "Data Standards",
    items: [
      "STAC Catalogue",
      "OGC WMS/WFS",
      "GeoTIFF / COG",
      "GeoJSON / KML",
      "ISO 19115",
    ],
  },
  {
    label: "Delivery Methods",
    items: [
      "Cloud API",
      "Secure FTP",
      "Web Dashboard",
      "ArcGIS Online",
      "On-Premise",
    ],
  },
];

export default function DataEcosystem() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="data" style={{ padding: "6rem 3.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={headerRef}
          className="reveal data-header-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div>
            <div className="section-label">Technology</div>
            <div className="accent-line" />
            <h2 className="section-title">
              Our Data
              <br />
              Ecosystem
            </h2>
          </div>
          <div>
            <p
              style={{
                color: "#6b7d74",
                lineHeight: 1.75,
                fontSize: "0.95rem",
              }}
            >
              We integrate data from the world's leading satellite
              constellations, ground sensors, and open-data platforms — all
              processed through our cloud-based geospatial pipeline to deliver
              analysis-ready products at scale.
            </p>
          </div>
        </div>

        <div
          ref={gridRef}
          className="reveal delay-2 data-tech-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(61,107,79,0.12)",
            marginTop: "3.5rem",
          }}
        >
          {techCols.map((col) => (
            <div
              key={col.label}
              style={{
                background: "var(--paper)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.65rem",
                  color: "var(--sage)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {col.label}
              </div>
              <div
                style={{
                  color: "var(--moss)",
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                }}
              >
                {col.items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < col.items.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
