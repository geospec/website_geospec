import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transform: "translateZ(0)",
        padding: "1.25rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled ? "rgba(244,241,235,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0.01px)",
        borderBottom: scrolled ? "1px solid rgba(61,107,79,0.12)" : "none",
      }}
    >
      <a href="#hero" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "var(--moss)",
            letterSpacing: "-0.02em",
          }}
        >
          Geo<span style={{ color: "var(--acid)" }}>Spec</span>
          <span
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.75rem",
              color: "var(--clay)",
              marginLeft: 4,
            }}
          >
            Solutions
          </span>
        </span>
      </a>

      <div
        style={{ display: "flex", gap: "2rem" }}
        className="nav-links hidden-mobile"
      >
        {["services", "about", "data", "team", "contact"].map((section) => (
          <a key={section} href={`#${section}`} className="nav-link">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="btn-primary"
        style={{ fontSize: "0.65rem", padding: "0.65rem 1.4rem" }}
      >
        Get Started →
      </a>
    </nav>
  );
}
