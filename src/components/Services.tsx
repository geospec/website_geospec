import { useScrollReveal } from "../hooks/useScrollReveal";
import { useNavigate } from "react-router-dom";

interface Service {
  id: string;
  num: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "customer-mapping",
    num: "01",
    name: "Customer Mapping",
    desc: "Visualise your customer base geographically to identify demand hotspots, optimise territory allocation, and uncover market opportunities with precision spatial analytics.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "land-evaluation",
    num: "02",
    name: "Land Evaluation",
    desc: "Comprehensive land suitability assessment integrating soil composition, topography, hydrology, and cadastral data to support investment, agriculture, and urban planning decisions.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="2"
      >
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    id: "environmental-monitoring",
    num: "03",
    name: "Environmental Monitoring",
    desc: "Real-time and temporal tracking of vegetation cover, deforestation, water bodies, and climate indicators using multi-spectral and SAR satellite data.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="2"
      >
        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
        <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
        <path d="M8.65 22c.21-.66.45-1.32.57-2" />
        <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
        <path d="M2 16h.01" />
        <path d="M21.8 16c.2-2 .131-5.354 0-6" />
        <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
      </svg>
    ),
  },
  {
    id: "resource-mapping",
    num: "04",
    name: "Resource Mapping",
    desc: "Geospatial delineation of natural resources including minerals, water, forests, and agricultural zones to support strategic planning and sustainable extraction.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.93 4.93 2.12 2.12" />
        <path d="m16.95 16.95 2.12 2.12" />
        <path d="m4.93 19.07 2.12-2.12" />
        <path d="m16.95 7.05 2.12-2.12" />
      </svg>
    ),
  },
  {
    id: "spatial-planning",
    num: "05",
    name: "Spatial Planning",
    desc: "Evidence-based urban and regional planning support using zoning analysis, infrastructure modelling, population distribution mapping, and land-use change detection.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "satellite-data",
    num: "06",
    name: "High-Res Satellite Data",
    desc: "Access to sub-meter resolution satellite imagery from leading providers. We supply tasked, archival, and time-series imagery with rapid turnaround and processing pipelines.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="2"
      >
        <path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
        <rect x="9" y="11" width="13" height="10" rx="2" />
        <path d="M16 11V7" />
      </svg>
    ),
  },
  {
    id: "analysis-ready-data",
    num: "07",
    name: "Analysis Ready Data",
    desc: "Pre-processed, radiometrically corrected, and atmospherically calibrated datasets ready for immediate analytical workflows — saving time and reducing pipeline complexity.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="2"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    id: "geoint",
    num: "08",
    name: "GEOINT",
    desc: "Geospatial intelligence solutions for defence, security, and strategic operations — integrating imagery, signals, and human-geography data into actionable intelligence products.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

function ServiceCard({ service, delay }: { service: Service; delay: string }) {
  const ref = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();
  return (
    <div ref={ref} className={`service-card reveal ${delay}`}>
      <span
        style={{
          fontFamily: "Space Mono, monospace",
          fontSize: "0.6rem",
          color: "rgba(61,107,79,0.4)",
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          letterSpacing: "0.1em",
        }}
      >
        {service.num}
      </span>
      <div
        style={{
          width: 48,
          height: 48,
          background: "var(--mist)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
          borderRadius: 2,
        }}
      >
        {service.icon}
      </div>
      <div
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--moss)",
          marginBottom: "0.6rem",
        }}
      >
        {service.name}
      </div>
      <div style={{ fontSize: "0.88rem", color: "#6b7d74", lineHeight: 1.65 }}>
        {service.desc}
      </div>
      <button
        onClick={() => navigate(`/services/${service.id}`)}
        style={{
          marginTop: "1.5rem",
          fontFamily: "Space Mono, monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          background: "transparent",
          color: "var(--moss)",
          border: "1px solid rgba(61,107,79,0.25)",
          padding: "0.6rem 1rem",
          cursor: "pointer",
          transition: "all 0.2s",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        onMouseEnter={(e) => {
          const b = e.currentTarget;
          b.style.background = "var(--moss)";
          b.style.color = "var(--acid)";
          b.style.borderColor = "var(--moss)";
        }}
        onMouseLeave={(e) => {
          const b = e.currentTarget;
          b.style.background = "transparent";
          b.style.color = "var(--moss)";
          b.style.borderColor = "rgba(61,107,79,0.25)";
        }}
      >
        Learn More <span>→</span>
      </button>
    </div>
  );
}

const delays = [
  "delay-1",
  "delay-2",
  "delay-3",
  "delay-1",
  "delay-2",
  "delay-3",
  "delay-1",
  "delay-2",
];

export default function Services() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      className="topo-bg"
      style={{ padding: "6rem 3.5rem" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div ref={headerRef} className="reveal">
          <div className="section-label">What We Do</div>
          <div className="accent-line" />
          <h2 className="section-title">
            Spatial Services
            <br />
            Built for{" "}
            <em style={{ color: "var(--clay)", fontStyle: "italic" }}>
              Impact
            </em>
          </h2>
          <p
            style={{
              color: "#6b7d74",
              maxWidth: 520,
              lineHeight: 1.7,
              marginTop: "1.25rem",
              fontSize: "0.95rem",
            }}
          >
            From raw satellite data to actionable intelligence, we provide
            end-to-end geospatial solutions tailored to Africa's unique
            landscapes and challenges.
          </p>
        </div>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "3.5rem",
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} delay={delays[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
