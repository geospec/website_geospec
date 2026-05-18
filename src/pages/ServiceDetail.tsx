import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SERVICES } from "../data/services";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--paper)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Space Mono, monospace",
              color: "var(--sage)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              marginBottom: "1rem",
            }}
          >
            404
          </div>
          <div
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "2rem",
              fontWeight: 800,
              color: "var(--moss)",
              marginBottom: "1.5rem",
            }}
          >
            Service not found
          </div>
          <button onClick={() => navigate("/")} className="btn-primary">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      {/* ── Nav bar ───────────────────────────────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(244,241,235,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(61,107,79,0.12)",
          padding: "1.1rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "Space Mono, monospace",
            fontSize: "0.7rem",
            color: "var(--sage)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: 0,
          }}
        >
          ← Back
        </button>
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "1.1rem",
            fontWeight: 800,
            color: "var(--moss)",
            letterSpacing: "-0.02em",
          }}
        >
          Geo<span style={{ color: "var(--acid)" }}>Spec</span>
          <span
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.7rem",
              color: "var(--clay)",
              marginLeft: 4,
            }}
          >
            Solutions
          </span>
        </span>
        <a
          href="/#contact"
          className="btn-primary"
          style={{ fontSize: "0.65rem", padding: "0.6rem 1.2rem" }}
        >
          Get Started →
        </a>
      </nav>

      {/* ── Hero ─────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--moss)",
          position: "relative",
          overflow: "hidden",
          padding: "5rem 3.5rem 4rem",
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
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(184,242,60,0.07) 0%,transparent 70%)",
          }}
        />
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.65rem",
                color: "rgba(184,242,60,0.5)",
                letterSpacing: "0.15em",
              }}
            >
              SERVICE {service.num}
            </span>
            <span
              style={{
                width: 32,
                height: 1,
                background: "rgba(184,242,60,0.3)",
              }}
            />
            <a
              href="/#services"
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.65rem",
                color: "rgba(184,242,60,0.5)",
                letterSpacing: "0.1em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              All Services
            </a>
          </div>
          <h1
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            {service.name}
          </h1>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.9rem",
              color: "var(--acid)",
              letterSpacing: "0.04em",
              marginBottom: "1.5rem",
            }}
          >
            {service.tagline}
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75,
              maxWidth: 640,
              fontSize: "1rem",
            }}
          >
            {service.desc}
          </p>
        </div>
      </div>

      {/* ── Overview ─────────────────────────────────────── */}
      <div
        style={{
          padding: "5rem 3.5rem",
          borderBottom: "1px solid rgba(61,107,79,0.1)",
        }}
      >
        <div
          className="overview-grid"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div>
            <div className="section-label">Overview</div>
            <div className="accent-line" />
            <div
              style={{
                width: 56,
                height: 56,
                background: "var(--mist)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
              }}
            >
              {service.icon}
            </div>
          </div>
          <div>
            {service.overview.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{
                  color: "#4a5e53",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ── What We Deliver ───────────────────────────────── */}
      <div
        style={{
          padding: "5rem 3.5rem",
          background: "var(--mist)",
          borderBottom: "1px solid rgba(61,107,79,0.1)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-label">What We Deliver</div>
          <div className="accent-line" />
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>
            Capabilities
          </h2>
          <div
            className="deliverables-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {service.whatWeDeliver.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "1px solid rgba(61,107,79,0.12)",
                  padding: "1.75rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.55rem",
                    color: "rgba(61,107,79,0.3)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  style={{
                    width: 3,
                    height: 24,
                    background: "var(--acid)",
                    marginBottom: "1rem",
                  }}
                />
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    color: "var(--moss)",
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    color: "#6b7d74",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How We Work ──────────────────────────────────── */}
      <div
        style={{
          padding: "5rem 3.5rem",
          borderBottom: "1px solid rgba(61,107,79,0.1)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-label">Methodology</div>
          <div className="accent-line" />
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>
            How We Work
          </h2>

          {/* 4-step process */}
          <div
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: "1px solid rgba(61,107,79,0.12)",
            }}
          >
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We start with a structured brief to understand your decision environment, area of interest, timeline, and output requirements — no assumptions made.",
              },
              {
                num: "02",
                title: "Data Strategy",
                desc: "We select the optimal sensors, archives, and processing pipelines for your specific question — nothing generic, nothing wasted.",
              },
              {
                num: "03",
                title: "Analysis",
                desc: "Rigorous geospatial workflows run by domain experts, with quality checks at every stage and iterative client review built in.",
              },
              {
                num: "04",
                title: "Delivery",
                desc: "Outputs in your preferred format — GIS files, interactive dashboards, or presentation-ready reports — with full handover support included.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                style={{
                  padding: "2rem 1.75rem",
                  borderLeft:
                    i > 0 ? "1px solid rgba(61,107,79,0.12)" : "none",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.55rem",
                    color: "var(--acid)",
                    letterSpacing: "0.15em",
                    marginBottom: "1.5rem",
                  }}
                >
                  {step.num} ——
                </div>
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    color: "var(--moss)",
                    fontSize: "1rem",
                    marginBottom: "0.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#6b7d74",
                    lineHeight: 1.75,
                  }}
                >
                  {step.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Metrics strip */}
          <div
            className="metrics-grid"
            style={{
              marginTop: "1px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "rgba(61,107,79,0.12)",
            }}
          >
            {[
              {
                stat: "72hr",
                label: "Standard Turnaround",
                sub: "for most analytical outputs",
              },
              {
                stat: "Pan-AF",
                label: "Operational Coverage",
                sub: "across all 54 African states",
              },
              {
                stat: "0.3m",
                label: "Max Image Resolution",
                sub: "sub-metre satellite imagery",
              },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  background: "var(--ink)",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "2.25rem",
                    color: "var(--acid)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tools & Outputs ───────────────────────────────── */}
      <div style={{ padding: "5rem 3.5rem", background: "var(--moss)" }}>
        <div
          className="tools-outputs-grid"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
          }}
        >
          <div>
            <div className="section-label" style={{ color: "var(--acid)" }}>
              Technology
            </div>
            <div className="accent-line" />
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Tools & Platforms
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "0.65rem",
                    color: "var(--acid)",
                    border: "1px solid rgba(184,242,60,0.25)",
                    padding: "0.35rem 0.75rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="section-label" style={{ color: "var(--acid)" }}>
              Deliverables
            </div>
            <div className="accent-line" />
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              What You Receive
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {service.outputs.map((out) => (
                <div
                  key={out}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      color: "var(--acid)",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  >
                    ◆
                  </span>
                  <span
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {out}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <div
        style={{
          padding: "5rem 3.5rem",
          background: "var(--ink)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(184,242,60,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(184,242,60,0.03) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "0.65rem",
                color: "var(--acid)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Ready to Start?
            </div>
            <h2
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                color: "white",
                lineHeight: 1.1,
              }}
            >
              Let's discuss your
              <br />
              <em style={{ color: "var(--acid)", fontStyle: "italic" }}>
                {service.name.toLowerCase()}
              </em>{" "}
              project.
            </h2>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/#contact" className="btn-primary">
              Get In Touch →
            </a>
            <button
              onClick={() => navigate("/")}
              className="btn-outline"
              style={{
                color: "rgba(255,255,255,0.6)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
            >
              ← All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
