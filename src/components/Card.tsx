import React from "react";
import Link from "next/link";

export type ChipColor = "mint" | "teal" | "gold" | "lilac" | "pink";

interface CardProps {
  chipColor?: ChipColor;
  tag?: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  isDark?: boolean;
  extraContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({
  chipColor = "mint",
  tag,
  title,
  description,
  href,
  linkText,
  isDark = false,
  extraContent,
  className = "",
  style,
}: CardProps) {
  return (
    <div
      className={`dc-card ${isDark ? "dc-card-navy" : ""} ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...style,
      }}
    >
      <div>
        {/* Optional Tag */}
        {tag && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding: "4px 10px",
                borderRadius: "9999px",
                backgroundColor: isDark
                  ? "rgba(224, 169, 48, 0.15)"
                  : `var(--chip-${chipColor})`,
                color: isDark
                  ? "var(--color-accent-gold)"
                  : "var(--color-primary-dark)",
              }}
            >
              {tag}
            </span>
          </div>
        )}

        {/* Card Title */}
        <h3
          style={{
            marginBottom: "10px",
            color: isDark ? "var(--color-white)" : "var(--color-ink)",
            fontSize: "1.2rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        {/* Body Description */}
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            color: isDark ? "#94A3B8" : "var(--color-muted)",
            marginBottom: extraContent || (href && linkText) ? "16px" : "0",
          }}
        >
          {description}
        </p>

        {extraContent}
      </div>

      {/* Optional Link */}
      {href && linkText && (
        <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: `1px solid ${isDark ? "var(--color-navy-border)" : "var(--color-line)"}` }}>
          <Link
            href={href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-heading)",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: isDark
                ? "var(--color-accent-gold)"
                : "var(--color-primary)",
            }}
          >
            <span>{linkText}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
