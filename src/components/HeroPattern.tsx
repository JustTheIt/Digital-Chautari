import React from "react";

interface HeroPatternProps {
  eyebrowText?: string;
  headingPrefix?: string;
  gradientWord?: string;
  headingSuffix?: string;
  lede?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export default function HeroPattern({
  eyebrowText = "Welcome to Digital Chautari",
  headingPrefix = "We build",
  gradientWord = "digital bridges",
  headingSuffix = "between ideas and impact",
  lede = "A creative technology powerhouse in Kathmandu, Nepal. We craft high-impact digital marketing campaigns, cinematic content studio productions, and human-first health-tech software.",
  align = "left",
  children,
}: HeroPatternProps) {
  const isCenter = align === "center";

  return (
    <section className="section-hero">
      {/* Decorative Radial Glows */}
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow-alt" aria-hidden="true" />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: isCenter ? "center" : "flex-start",
          textAlign: isCenter ? "center" : "left",
        }}
      >
        {/* Eyebrow Pill */}
        {eyebrowText && (
          <div className="eyebrow-pill">
            <span>{eyebrowText}</span>
          </div>
        )}

        {/* H1 Headline with 90° Gradient Word */}
        <h1
          style={{
            maxWidth: "760px",
            marginBottom: "20px",
            lineHeight: 1.15,
          }}
        >
          {headingPrefix && <span>{headingPrefix} </span>}
          {gradientWord && (
            <span className="gradient-text">{gradientWord}</span>
          )}
          {headingSuffix && <span> {headingSuffix}</span>}
        </h1>

        {/* Lede Paragraph */}
        {lede && (
          <p
            style={{
              maxWidth: "680px",
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: "var(--color-muted)",
              marginBottom: children ? "32px" : "0",
            }}
          >
            {lede}
          </p>
        )}

        {/* Children: Action buttons, stat bar, etc. */}
        {children && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: isCenter ? "center" : "flex-start",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
