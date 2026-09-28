import React from "react";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import ProductSwitcher from "@/components/ProductSwitcher";
import DarkSection from "@/components/DarkSection";
import SectionHeader from "@/components/SectionHeader";
import ClosingCta from "@/components/ClosingCta";

export const metadata = {
  title: "Products & Ventures | Digital Chautari Kathmandu",
  description:
    "Explore our flagship ventures: Eco Creative Marketing Agency, One Content Creation Studio, and Physio@Home health-tech software.",
};

export default function ProductsPage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroPattern
        eyebrowText="Flagship Ventures"
        headingPrefix="Three ventures,"
        gradientWord="one vision"
        headingSuffix="for sustainable impact"
        lede="Purpose-built digital products and specialized creative studios incubated right here at Digital Chautari to solve real-world challenges in marketing, cinematic media, and healthcare accessibility across Nepal."
      />

      {/* 2. Tabbed Product Switcher */}
      <section className="section-standard">
        <div className="container">
          <SectionHeader
            eyebrow="Interactive Showcase"
            titlePrefix="Explore our"
            gradientWord="Dedicated Ventures"
            subtitle="Click through each tab below to view full specifications, core metrics, and live UI consoles."
            align="center"
          />

          <ProductSwitcher />
        </div>
      </section>

      {/* 3. Dark Spotlight Banner: "Physio@Home — Healthcare Reimagined" */}
      <DarkSection
        eyebrow="Health-Tech Spotlight"
        title="Physio@Home — Healthcare Reimagined"
        subtitle="Bringing compassionate, certified physical therapy directly to doorstep living rooms across Kathmandu Valley, powered by digital health telemetry."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "40px",
            alignItems: "center",
            marginTop: "16px",
          }}
          className="spotlight-grid"
        >
          {/* Left Narrative & Feature Badges */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                color: "#FFFFFF",
                marginBottom: "16px",
                lineHeight: 1.3,
              }}
            >
              Dignified, Patient-Centered Rehabilitation in the Comfort of Your Home
            </h3>

            <p
              style={{
                color: "#94A3B8",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Navigating Kathmandu traffic for daily physiotherapy after surgery, stroke, or sports trauma can be painful and exhausting. Physio@Home solves this urban bottleneck by combining certified on-site clinical therapists with smart mobile recovery protocols.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                marginBottom: "32px",
              }}
              className="spotlight-features"
            >
              {[
                { title: "Doorstep Visits", desc: "Certified KTM therapists" },
                { title: "Digital Tele-Rehab", desc: "Interactive video routines" },
                { title: "Encrypted Records", desc: "Strict medical privacy" },
                { title: "Recovery Tracking", desc: "Clear milestone graphs" },
              ].map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--color-navy-card)",
                    border: "1px solid var(--color-navy-border)",
                    borderRadius: "10px",
                    padding: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--color-accent-gold)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-accent-gold)",
                        flexShrink: 0,
                      }}
                    />
                    <span>{feat.title}</span>
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "#94A3B8" }}>
                    {feat.desc}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{
                  backgroundColor: "var(--color-primary)",
                  padding: "14px 26px",
                }}
              >
                <span>Request Early Access</span>
              </Link>
              <Link
                href="/contact"
                className="btn-navy-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "14px 26px",
                  borderRadius: "8px",
                  fontWeight: 600,
                }}
              >
                <span>Partner with Physio@Home</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Clinical Telehealth Card */}
          <div
            style={{
              backgroundColor: "var(--color-navy-card)",
              border: "1px solid var(--color-navy-border)",
              borderRadius: "16px",
              padding: "28px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--color-navy-border)",
                marginBottom: "20px",
              }}
            >
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#FFFFFF" }}>
                  Kathmandu Valley Clinical Dispatch
                </div>
                <div style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                  Real-time therapist geo-routing
                </div>
              </div>

              <span
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: "#10B981",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "3px 8px",
                  borderRadius: "4px",
                }}
              >
                ● 14 Active Visits
              </span>
            </div>

            {/* Simulated Live Locations */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              {[
                { zone: "Baneshwor, Kathmandu", therapist: "Sushil Adhikari, BPT", status: "Session in Progress (35m)" },
                { zone: "Jhamsikhel, Lalitpur", therapist: "Alina Shrestha, MPT", status: "En Route • ETA 12 min" },
                { zone: "Suryabinayak, Bhaktapur", therapist: "Bibek Poudel, BPT", status: "Initial Assessment Completed" },
              ].map((loc, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#172638",
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid #22354a",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "4px" }}>
                    <span>{loc.zone}</span>
                    <span style={{ color: "var(--color-accent-gold)", fontSize: "0.75rem" }}>Live</span>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#CBD5E1", marginBottom: "4px" }}>
                    {loc.therapist}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#10B981" }}>
                    {loc.status}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: "rgba(15, 148, 136, 0.12)",
                border: "1px solid rgba(15, 148, 136, 0.3)",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "0.8125rem",
                color: "#E2E8F0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>Full compliance with Nepal Health Professional Council (NHPC) accreditation.</span>
            </div>
          </div>
        </div>
      </DarkSection>

      {/* Closing CTA */}
      <ClosingCta
        title="Interested in collaborating on a venture?"
        description="Whether you are looking to scale with Eco Creative, commission our One Content studio, or pilot Physio@Home, our doors in Kathmandu are always open."
        primaryBtnText="Contact Venture Team"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Services"
        secondaryBtnHref="/services"
      />
    </>
  );
}
