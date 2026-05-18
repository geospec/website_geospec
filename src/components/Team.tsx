import { useScrollReveal } from "../hooks/useScrollReveal";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  gradientFrom: string;
  gradientTo: string;
}

const team: TeamMember[] = [
  {
    name: "Hillary Kibiwot",
    role: "CEO & Co-Founder",
    bio: "Remote sensing Msc, 4 years in African geospatial development.",
    gradientFrom: "var(--moss)",
    gradientTo: "var(--sage)",
  },
  {
    name: "John Ngugi",
    role: "CTO",
    bio: "Cloud GIS architect, former Google Earth Engine specialist.",
    gradientFrom: "#2d4a35",
    gradientTo: "var(--moss)",
  },
  {
    name: "Brian Mwangi",
    role: "Head of GEOINT",
    bio: "10+ years defence intelligence, specialising in multi-source fusion.",
    gradientFrom: "var(--sage)",
    gradientTo: "#4a8060",
  },
  {
    name: "Viola Kemunto",
    role: "Head of Data Science",
    bio: "ML/GeoAI researcher with expertise in ARD pipelines and time-series analysis.",
    gradientFrom: "#1a3326",
    gradientTo: "var(--sage)",
  },
  {
    name: "Justus Kiptoo",
    role: "GIS Solutions Engineer",
    bio: "Spatial data engineer specialising in web mapping, API integrations, and client-facing geospatial platforms.",
    gradientFrom: "#2a4a3a",
    gradientTo: "#5a8a6a",
  },
];

const delays = ["delay-1", "delay-2", "delay-3", "delay-4", "delay-4"];

function PersonIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(184,242,60,0.4)"
      strokeWidth="1"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function TeamCard({ member, delay }: { member: TeamMember; delay: string }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`team-card reveal ${delay}`}>
      <div
        style={{
          background: `linear-gradient(135deg, ${member.gradientFrom} 0%, ${member.gradientTo} 100%)`,
          aspectRatio: "3/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PersonIcon />
      </div>
      <div style={{ padding: "1.25rem" }}>
        <div
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            color: "var(--moss)",
          }}
        >
          {member.name}
        </div>
        <div
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "0.65rem",
            color: "var(--sage)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginTop: 2,
          }}
        >
          {member.role}
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            color: "#6b7d74",
            marginTop: "0.6rem",
            lineHeight: 1.6,
          }}
        >
          {member.bio}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="team"
      style={{ padding: "6rem 3.5rem", background: "var(--mist)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={headerRef}
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div className="section-label">Our People</div>
            <div className="accent-line" />
            <h2 className="section-title">
              The Minds Behind
              <br />
              the{" "}
              <em style={{ color: "var(--clay)", fontStyle: "italic" }}>
                Maps
              </em>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-outline"
            style={{ whiteSpace: "nowrap" }}
          >
            Join the Team →
          </a>
        </div>

        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1.5rem",
          }}
        >
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={delays[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
