import React from "react";
import Link from "next/link";

interface ClosingCtaProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function ClosingCta({
  title = "Ready to build something extraordinary together?",
  description = "Connect with our Kathmandu team today. Whether you need a full digital marketing engine, cinematic content, or resilient software, we are ready to partner with you.",
  primaryBtnText = "Start a Project",
  primaryBtnHref = "/contact",
  secondaryBtnText = "View Services",
  secondaryBtnHref = "/services",
}: ClosingCtaProps) {
  return (
    <section className="section-standard">
      <div className="container">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, #0F9488 0%, #0B6F66 45%, #0B1220 100%)",
            color: "#FFFFFF",
            padding: "56px 48px",
            boxShadow: "0 20px 40px -15px rgba(11, 111, 102, 0.4)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          className="cta-panel"
        >
          {/* Subtle decorative glow circles */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(224, 169, 48, 0.25) 0%, transparent 70%)",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-50px",
              left: "-50px",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(127, 174, 58, 0.2) 0%, transparent 70%)",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />

          {/* Eyebrow Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              color: "#FFFFFF",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "18px",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <span>Digital Chautari • Kathmandu</span>
          </div>

          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "2.4rem",
              fontWeight: 800,
              maxWidth: "760px",
              marginBottom: "18px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>

          <p
            style={{
              color: "rgba(255, 255, 255, 0.88)",
              fontSize: "1.125rem",
              maxWidth: "620px",
              marginBottom: "36px",
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Link
              href={primaryBtnHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                color: "var(--color-ink)",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                transition: "all 0.2s ease",
              }}
              className="cta-white-btn"
            >
              <span>{primaryBtnText}</span>
            </Link>

            {secondaryBtnText && (
              <Link
                href={secondaryBtnHref}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  transition: "all 0.2s ease",
                }}
                className="cta-ghost-btn"
              >
                <span>{secondaryBtnText}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
