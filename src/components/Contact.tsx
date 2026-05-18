import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  "Customer Mapping",
  "Land Evaluation",
  "Environmental Monitoring",
  "Resource Mapping",
  "Spatial Planning",
  "High-Res Satellite Data",
  "Analysis Ready Data",
  "GEOINT",
];

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--acid)"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--acid)"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.34 2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--acid)"
      strokeWidth="2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: <LocationIcon />,
    label: "Location",
    value: (
      <>
        14th Floor, GTC Towers
        <br />
        Upper Hill, Nairobi 00100, Kenya
      </>
    ),
  },
  { icon: <PhoneIcon />, label: "Phone", value: "+254 700 123 456" },
  { icon: <EmailIcon />, label: "Email", value: "info@terrasightgis.com" },
];

export default function Contact() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--ink)",
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
            "linear-gradient(rgba(184,242,60,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(184,242,60,0.03) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(61,107,79,0.15) 0%,transparent 70%)",
        }}
      />

      <div
        className="contact-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left: info */}
        <div ref={leftRef} className="reveal">
          <div className="section-label" style={{ color: "var(--acid)" }}>
            Get In Touch
          </div>
          <div className="accent-line" />
          <h2 className="section-title" style={{ color: "white" }}>
            Let's Map
            <br />
            Your{" "}
            <em style={{ color: "var(--acid)", fontStyle: "italic" }}>
              Future
            </em>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              marginTop: "1.5rem",
              fontSize: "0.9rem",
            }}
          >
            Whether you need a bespoke GIS solution, satellite data procurement,
            or ongoing spatial analysis support — our team is ready to engage.
          </p>

          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            {contactInfo.map((info) => (
              <div
                key={info.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(184,242,60,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "0.62rem",
                      color: "var(--acid)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 3,
                    }}
                  >
                    {info.label}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div
          ref={rightRef}
          className="reveal delay-2"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(184,242,60,0.1)",
            padding: "2.5rem",
          }}
        >
          <h3
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "white",
              marginBottom: "2rem",
            }}
          >
            Send us a message
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div>
              <label
                className="form-label"
                style={{ color: "rgba(184,242,60,0.7)" }}
              >
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Dr. Jane Mwangi"
                className="form-field"
                value={form.name}
                onChange={handleChange}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "white",
                  borderColor: "rgba(184,242,60,0.15)",
                }}
              />
            </div>
            <div>
              <label
                className="form-label"
                style={{ color: "rgba(184,242,60,0.7)" }}
              >
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="jane@organization.org"
                className="form-field"
                value={form.email}
                onChange={handleChange}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "white",
                  borderColor: "rgba(184,242,60,0.15)",
                }}
              />
            </div>
            <div>
              <label
                className="form-label"
                style={{ color: "rgba(184,242,60,0.7)" }}
              >
                Service of Interest
              </label>
              <select
                name="service"
                className="form-field"
                value={form.service}
                onChange={handleChange}
                style={{
                  background: "#0a0f0d",
                  color: "rgba(255,255,255,0.7)",
                  borderColor: "rgba(184,242,60,0.15)",
                }}
              >
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="form-label"
                style={{ color: "rgba(184,242,60,0.7)" }}
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Describe your project or inquiry..."
                className="form-field"
                rows={4}
                value={form.message}
                onChange={handleChange}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "white",
                  borderColor: "rgba(184,242,60,0.15)",
                  resize: "vertical",
                }}
              />
            </div>
            <button
              onClick={() => setSubmitted(true)}
              className="btn-primary"
              style={{
                width: "100%",
                textAlign: "center",
                padding: "1rem",
                fontSize: "0.75rem",
              }}
            >
              Send Message →
            </button>
            {submitted && (
              <div
                style={{
                  color: "var(--acid)",
                  fontFamily: "Space Mono, monospace",
                  fontSize: "0.72rem",
                  textAlign: "center",
                  letterSpacing: "0.08em",
                }}
              >
                ✓ MESSAGE RECEIVED — WE'LL BE IN TOUCH SHORTLY
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
