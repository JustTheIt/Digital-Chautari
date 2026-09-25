import React from "react";

interface DarkSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tight?: boolean;
  id?: string;
}

export default function DarkSection({
  eyebrow,
  title,
  subtitle,
  children,
  tight = false,
  id,
}: DarkSectionProps) {
  return (
    <section
      id={id}
      className={`section-dark ${tight ? "section-tight" : "section-standard"}`}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative dark backdrop glows */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-50px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(15, 148, 136, 0.15) 0%, rgba(224, 169, 48, 0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {(eyebrow || title || subtitle) && (
          <div
            style={{
              maxWidth: "720px",
              marginBottom: "40px",
            }}
          >
            {eyebrow && (
              <div className="eyebrow-pill eyebrow-pill-gold">
                <span>{eyebrow}</span>
              </div>
            )}
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "2.15rem",
                marginBottom: subtitle ? "14px" : "0",
                lineHeight: 1.25,
              }}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "1.0625rem",
                  lineHeight: 1.6,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
