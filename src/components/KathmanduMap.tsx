import React from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Send,
  HelpCircle,
  ArrowRight,
  Shield,
  Compass,
} from "lucide-react";

export default function KathmanduMap() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Map Placeholder Card */}
      <div
        style={{
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-line)",
          borderRadius: "var(--radius-card)",
          overflow: "hidden",
          boxShadow: "0 4px 20px -8px rgba(16, 24, 38, 0.06)",
        }}
      >
        {/* Visual Map Representation */}
        <div
          style={{
            position: "relative",
            height: "210px",
            backgroundColor: "#E2E8F0",
            background:
              "radial-gradient(circle at 50% 50%, #E7F2F4 0%, #D4E6EB 100%)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Subtle Grid / Roads simulation */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(15, 148, 136, 0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(15, 148, 136, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Topographic Bagmati river curve simulation */}
          <div
            style={{
              position: "absolute",
              width: "140%",
              height: "26px",
              backgroundColor: "rgba(15, 148, 136, 0.22)",
              transform: "rotate(-18deg)",
              filter: "blur(4px)",
            }}
          />

          {/* Valley Landmarks chips */}
          <div
            style={{
              position: "absolute",
              top: "22px",
              left: "24px",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--color-muted)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
            }}
          >
            Kathmandu Valley
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "22px",
              right: "24px",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--color-muted)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
            }}
          >
            Bagmati Province
          </div>

          {/* Pin Marker at Digital Chautari HQ */}
          <div
            style={{
              position: "relative",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                boxShadow: "0 8px 20px rgba(15, 148, 136, 0.4)",
                animation: "pulse 2s infinite ease-in-out",
              }}
            >
              <MapPin size={24} />
            </div>
            <div
              style={{
                marginTop: "8px",
                backgroundColor: "var(--color-ink)",
                color: "#FFFFFF",
                padding: "4px 12px",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              DC HQ • Kathmandu
            </div>
          </div>
        </div>

        <div style={{ padding: "20px 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <h4
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--color-ink)",
              }}
            >
              Kathmandu Headquarters
            </h4>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                backgroundColor: "var(--chip-mint)",
                padding: "3px 8px",
                borderRadius: "6px",
              }}
            >
              Open for Visits
            </span>
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-muted)",
              lineHeight: 1.5,
              marginBottom: "14px",
            }}
          >
            Baneshwor / Jhamsikhel Innovation Corridor, Kathmandu, Nepal. Our studio is open Sunday through Friday for scheduled client meetings and consultations.
          </p>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-muted)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Compass size={15} color="var(--color-accent-gold)" />
            <span>27.6915° N, 85.3206° E</span>
          </div>
        </div>
      </div>

      {/* Dark "Need quick answers? Visit FAQ page" Callout */}
      <div
        style={{
          backgroundColor: "var(--color-navy)",
          borderRadius: "var(--radius-card)",
          padding: "24px",
          color: "#FFFFFF",
          border: "1px solid var(--color-navy-border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--color-accent-gold)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "10px",
          }}
        >
          <HelpCircle size={16} />
          <span>Need Quick Answers?</span>
        </div>
        <h4
          style={{
            color: "#FFFFFF",
            fontSize: "1.15rem",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Frequently Asked Questions
        </h4>
        <p
          style={{
            color: "#94A3B8",
            fontSize: "0.875rem",
            lineHeight: 1.5,
            marginBottom: "16px",
          }}
        >
          Learn more about our pricing models, retainer agreements, project onboarding steps, and Physio@Home coverage.
        </p>
        <Link
          href="/services#pricing"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--color-accent-gold)",
            fontSize: "0.875rem",
            fontWeight: 700,
          }}
        >
          <span>Visit FAQ & Pricing Section</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Response Time List Card */}
      <div
        style={{
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-line)",
          borderRadius: "var(--radius-card)",
          padding: "24px",
          boxShadow: "0 4px 20px -8px rgba(16, 24, 38, 0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          <Clock size={18} color="var(--color-primary)" />
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-ink)",
            }}
          >
            Guaranteed Response Times
          </h4>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            fontSize: "0.875rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid var(--color-line)",
            }}
          >
            <span style={{ color: "var(--color-ink)", fontWeight: 500 }}>
              General Email Inquiries
            </span>
            <span
              style={{
                fontWeight: 700,
                color: "var(--color-primary-dark)",
                backgroundColor: "var(--chip-teal)",
                padding: "2px 8px",
                borderRadius: "4px",
                fontSize: "0.8rem",
              }}
            >
              Within 24 Hours
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
              borderBottom: "1px solid var(--color-line)",
            }}
          >
            <span style={{ color: "var(--color-ink)", fontWeight: 500 }}>
              Detailed Project Proposals
            </span>
            <span
              style={{
                fontWeight: 700,
                color: "#9A690B",
                backgroundColor: "var(--chip-gold)",
                padding: "2px 8px",
                borderRadius: "4px",
                fontSize: "0.8rem",
              }}
            >
              2–3 Business Days
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "var(--color-ink)", fontWeight: 500 }}>
              Urgent Client Escalations
            </span>
            <span
              style={{
                fontWeight: 700,
                color: "#0C6C42",
                backgroundColor: "var(--chip-mint)",
                padding: "2px 8px",
                borderRadius: "4px",
                fontSize: "0.8rem",
              }}
            >
              Same Day Response
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
