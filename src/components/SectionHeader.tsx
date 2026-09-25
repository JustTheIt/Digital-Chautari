import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  titlePrefix?: string;
  gradientWord?: string;
  titleSuffix?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  titlePrefix,
  gradientWord,
  titleSuffix,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      style={{
        maxWidth: isCenter ? "760px" : "700px",
        margin: isCenter ? "0 auto 40px auto" : "0 0 40px 0",
        textAlign: isCenter ? "center" : "left",
      }}
    >
      {eyebrow && (
        <div
          className="eyebrow-pill"
          style={{
            margin: isCenter ? "0 auto 16px auto" : "0 0 16px 0",
          }}
        >
          {eyebrow}
        </div>
      )}

      {(titlePrefix || gradientWord || titleSuffix) && (
        <h2
          style={{
            fontSize: "2.15rem",
            marginBottom: subtitle ? "14px" : "0",
            lineHeight: 1.25,
            color: "var(--color-ink)",
          }}
        >
          {titlePrefix && <span>{titlePrefix} </span>}
          {gradientWord && (
            <span className="gradient-text">{gradientWord}</span>
          )}
          {titleSuffix && <span> {titleSuffix}</span>}
        </h2>
      )}

      {subtitle && (
        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-muted)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
