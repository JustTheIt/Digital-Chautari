"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Video,
  Activity,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  BarChart3,
  Layers,
  Play,
  Film,
  UserCheck,
  HeartPulse,
} from "lucide-react";

interface ProductData {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  ctaText: string;
  ctaHref: string;
  previewType: "marketing" | "studio" | "healthtech";
}

const products: ProductData[] = [
  {
    id: "eco-creative",
    tabLabel: "Eco Creative Agency",
    category: "Performance & Growth Marketing",
    title: "Eco Creative Marketing Agency",
    tagline: "Data-driven growth with conscious storytelling",
    description:
      "Eco Creative combines rigorous analytical marketing with cultural storytelling tailored for Nepal and international audiences. We optimize performance ad funnels across Meta, Google, and TikTok, turning every marketing rupee into verified business revenue.",
    highlights: [
      "Omnichannel paid performance with continuous multivariate testing",
      "Full-funnel SEO and local Kathmandu search dominance",
      "High-converting landing page optimization and CRO audits",
      "Real-time transparent client dashboard & weekly KPI reviews",
    ],
    metrics: [
      { label: "Avg ROAS", value: "4.8×" },
      { label: "Active Campaigns", value: "65+" },
      { label: "Audience Reach", value: "2.4M" },
    ],
    ctaText: "Explore Eco Creative Services",
    ctaHref: "/contact",
    previewType: "marketing",
  },
  {
    id: "one-content",
    tabLabel: "One Content Studio",
    category: "Cinematic Media & Content Studio",
    title: "One Content Creation Studio",
    tagline: "Cinematic narratives that command attention",
    description:
      "Our in-house production studio in Kathmandu brings together directors, 3D animators, sound designers, and viral scriptwriters. From brand anthems and documentary-style founder stories to agile TikTok/Instagram short-form reels, we produce content that captivates.",
    highlights: [
      "End-to-end script-to-screen production pipeline",
      "State-of-the-art 4K cinema cameras & lighting rigs",
      "Full audio recording, podcast suite, and Foley mastering",
      "Social-first viral narrative formatting and trend hijacking",
    ],
    metrics: [
      { label: "Content Views", value: "1.2M+" },
      { label: "Studio Hours/Mo", value: "180+" },
      { label: "Video Retention", value: "86%" },
    ],
    ctaText: "Book a Studio Session",
    ctaHref: "/contact",
    previewType: "studio",
  },
  {
    id: "physio-at-home",
    tabLabel: "Physio@Home",
    category: "Health-Tech & Digital Care",
    title: "Physio@Home",
    tagline: "Empathetic physical rehabilitation at your doorstep",
    description:
      "Physio@Home connects certified, background-verified physiotherapists with patients across Kathmandu, Lalitpur, and Bhaktapur. Supported by our proprietary clinical app, patients receive personalized exercise regimens, tele-rehab tracking, and verified recovery metrics right in their living rooms.",
    highlights: [
      "On-demand certified therapist booking within Kathmandu Valley",
      "Custom video exercise prescription tailored per mobility profile",
      "Encrypted patient records adhering to medical confidentiality",
      "Automated progress metrics & family caregiver updates",
    ],
    metrics: [
      { label: "Home Sessions", value: "1,400+" },
      { label: "Patient Rating", value: "4.9★" },
      { label: "KTM Valley Coverage", value: "100%" },
    ],
    ctaText: "Explore Physio@Home Portal",
    ctaHref: "/contact",
    previewType: "healthtech",
  },
];

export default function ProductSwitcher() {
  const [activeTab, setActiveTab] = useState<string>("eco-creative");
  const currentProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <div style={{ width: "100%" }}>
      {/* Pill Tabs Switcher */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {products.map((product) => {
          const isActive = product.id === activeTab;
          return (
            <button
              key={product.id}
              type="button"
              onClick={() => setActiveTab(product.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 22px",
                borderRadius: "9999px",
                fontFamily: "var(--font-heading)",
                fontSize: "0.9375rem",
                fontWeight: isActive ? 700 : 500,
                backgroundColor: isActive
                  ? "var(--color-primary)"
                  : "var(--color-white)",
                color: isActive ? "#FFFFFF" : "var(--color-ink)",
                border: `1px solid ${isActive ? "var(--color-primary)" : "var(--color-line)"}`,
                boxShadow: isActive
                  ? "0 6px 18px rgba(15, 148, 136, 0.3)"
                  : "0 2px 8px rgba(0, 0, 0, 0.03)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {product.id === "eco-creative" && <TrendingUp size={16} />}
              {product.id === "one-content" && <Video size={16} />}
              {product.id === "physio-at-home" && <Activity size={16} />}
              <span>{product.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Two-Column Showcase Panel */}
      <div
        style={{
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-line)",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 10px 30px -10px rgba(16, 24, 38, 0.08)",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
        className="product-panel"
      >
        {/* Left Column: Product Information */}
        <div>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--color-primary-dark)",
              backgroundColor: "rgba(15, 148, 136, 0.1)",
              padding: "4px 12px",
              borderRadius: "9999px",
              marginBottom: "14px",
            }}
          >
            {currentProduct.category}
          </span>

          <h3
            style={{
              fontSize: "1.85rem",
              fontWeight: 800,
              color: "var(--color-ink)",
              marginBottom: "8px",
            }}
          >
            {currentProduct.title}
          </h3>

          <p
            style={{
              color: "var(--color-accent-gold)",
              fontWeight: 600,
              fontSize: "1rem",
              marginBottom: "16px",
            }}
          >
            {currentProduct.tagline}
          </p>

          <p
            style={{
              color: "var(--color-muted)",
              lineHeight: 1.65,
              marginBottom: "24px",
              fontSize: "0.975rem",
            }}
          >
            {currentProduct.description}
          </p>

          {/* Highlights checklist */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            {currentProduct.highlights.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "0.9rem",
                  color: "var(--color-ink)",
                }}
              >
                <CheckCircle2
                  size={18}
                  color="var(--color-primary)"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Key Metrics Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "14px",
              padding: "16px",
              borderRadius: "12px",
              backgroundColor: "var(--color-paper)",
              border: "1px solid var(--color-line)",
              marginBottom: "28px",
            }}
          >
            {currentProduct.metrics.map((m, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--color-primary-dark)",
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-muted)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link href={currentProduct.ctaHref} className="btn-primary">
            <span>{currentProduct.ctaText}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right Column: High-Fidelity Mock UI Preview Panel */}
        <div>
          {currentProduct.previewType === "marketing" && (
            <div
              style={{
                backgroundColor: "var(--color-navy-card)",
                borderRadius: "14px",
                border: "1px solid var(--color-navy-border)",
                padding: "24px",
                color: "#FFFFFF",
                boxShadow: "0 12px 36px rgba(11, 18, 32, 0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "14px",
                  borderBottom: "1px solid var(--color-navy-border)",
                  marginBottom: "18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#10B981",
                      boxShadow: "0 0 8px #10B981",
                    }}
                  />
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.04em" }}>
                    ECO ANALYTICS ENGINE • LIVE
                  </span>
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--color-accent-gold)", fontWeight: 600 }}>
                  Kathmandu Segment
                </span>
              </div>

              {/* KPI cards in preview */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                <div style={{ backgroundColor: "#172638", padding: "14px", borderRadius: "10px" }}>
                  <div style={{ fontSize: "0.75rem", color: "#94A3B8" }}>Total Conversions</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#FFFFFF" }}>12,840</div>
                  <div style={{ fontSize: "0.75rem", color: "#10B981", marginTop: "4px" }}>+34.2% vs last month</div>
                </div>
                <div style={{ backgroundColor: "#172638", padding: "14px", borderRadius: "10px" }}>
                  <div style={{ fontSize: "0.75rem", color: "#94A3B8" }}>Efficiency Index</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-accent-gold)" }}>9.4/10</div>
                  <div style={{ fontSize: "0.75rem", color: "#94A3B8", marginTop: "4px" }}>CPA reduced 22%</div>
                </div>
              </div>

              {/* Simulated Visual Graph Bars */}
              <div style={{ backgroundColor: "#172638", padding: "16px", borderRadius: "10px", marginBottom: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#94A3B8", marginBottom: "12px" }}>
                  <span>Weekly Funnel Velocity</span>
                  <span style={{ color: "var(--color-primary)" }}>Peak 4.8× ROAS</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", height: "90px", gap: "10px" }}>
                  {[45, 62, 55, 78, 92, 88, 100].map((height, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: `${height}%`,
                          borderRadius: "4px",
                          background:
                            idx === 6
                              ? "linear-gradient(180deg, #E0A930 0%, #0F9488 100%)"
                              : "linear-gradient(180deg, #0F9488 0%, #0B6F66 100%)",
                        }}
                      />
                      <span style={{ fontSize: "0.65rem", color: "#64748B", marginTop: "4px" }}>
                        {["M", "T", "W", "T", "F", "S", "S"][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.8125rem",
                  color: "#94A3B8",
                  paddingTop: "6px",
                }}
              >
                <span>Automated Meta/Google Bid Optimizer</span>
                <span style={{ color: "#10B981", fontWeight: 600 }}>Active</span>
              </div>
            </div>
          )}

          {currentProduct.previewType === "studio" && (
            <div
              style={{
                backgroundColor: "var(--color-navy-card)",
                borderRadius: "14px",
                border: "1px solid var(--color-navy-border)",
                padding: "24px",
                color: "#FFFFFF",
                boxShadow: "0 12px 36px rgba(11, 18, 32, 0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "14px",
                  borderBottom: "1px solid var(--color-navy-border)",
                  marginBottom: "18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Film size={16} color="var(--color-accent-gold)" />
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700 }}>
                    ONE STUDIO • TIMELINE MASTER
                  </span>
                </div>
                <span
                  style={{
                    backgroundColor: "rgba(224, 169, 48, 0.15)",
                    color: "var(--color-accent-gold)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                  }}
                >
                  4K PRORES
                </span>
              </div>

              {/* Video Player Mockup Frame */}
              <div
                style={{
                  position: "relative",
                  height: "140px",
                  borderRadius: "10px",
                  backgroundColor: "#060A12",
                  border: "1px solid var(--color-navy-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(45deg, rgba(15, 148, 136, 0.3) 0%, rgba(224, 169, 48, 0.2) 100%)",
                  }}
                />
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(15, 148, 136, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 2,
                    boxShadow: "0 0 20px rgba(15, 148, 136, 0.6)",
                  }}
                >
                  <Play size={20} color="#FFFFFF" style={{ marginLeft: "3px" }} />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "14px",
                    fontSize: "0.75rem",
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  Kathmandu Heritage Campaign // Master Cut 03
                </div>
              </div>

              {/* Multi-track Timeline */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "0.7rem", width: "40px", color: "#64748B" }}>V1 Vid</span>
                  <div style={{ flex: 1, height: "16px", borderRadius: "4px", backgroundColor: "#0F9488", opacity: 0.85 }} />
                  <div style={{ width: "45px", height: "16px", borderRadius: "4px", backgroundColor: "#0B6F66" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "0.7rem", width: "40px", color: "#64748B" }}>A1 Voice</span>
                  <div style={{ flex: 1, height: "16px", borderRadius: "4px", backgroundColor: "#E0A930", opacity: 0.85 }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "0.7rem", width: "40px", color: "#64748B" }}>A2 Score</span>
                  <div style={{ flex: 1, height: "16px", borderRadius: "4px", backgroundColor: "#7FAE3A", opacity: 0.8 }} />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#94A3B8" }}>
                <span>Color Grade: LUT Custom KTM Sunset</span>
                <span style={{ color: "#10B981" }}>Render Ready (100%)</span>
              </div>
            </div>
          )}

          {currentProduct.previewType === "healthtech" && (
            <div
              style={{
                backgroundColor: "var(--color-navy-card)",
                borderRadius: "14px",
                border: "1px solid var(--color-navy-border)",
                padding: "24px",
                color: "#FFFFFF",
                boxShadow: "0 12px 36px rgba(11, 18, 32, 0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "14px",
                  borderBottom: "1px solid var(--color-navy-border)",
                  marginBottom: "18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <HeartPulse size={18} color="#10B981" />
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700 }}>
                    PHYSIO@HOME • PATIENT PORTAL
                  </span>
                </div>
                <span
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#10B981",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                  }}
                >
                  SCHEDULED TODAY
                </span>
              </div>

              {/* Therapist Card Inside Preview */}
              <div
                style={{
                  backgroundColor: "#172638",
                  padding: "16px",
                  borderRadius: "10px",
                  marginBottom: "14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    AS
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Dr. Aarav Sharma, MPT</div>
                    <div style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                      Chief Orthopedic Rehabilitation Therapist
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                    fontSize: "0.75rem",
                    color: "#CBD5E1",
                    paddingTop: "8px",
                    borderTop: "1px solid var(--color-navy-border)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Calendar size={13} color="var(--color-accent-gold)" />
                    <span>Today, 4:30 PM</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <MapPin size={13} color="var(--color-primary)" />
                    <span>Jhamsikhel, Lalitpur</span>
                  </div>
                </div>
              </div>

              {/* Recovery Milestone Gauge */}
              <div style={{ backgroundColor: "#172638", padding: "14px", borderRadius: "10px", marginBottom: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "8px" }}>
                  <span style={{ color: "#94A3B8" }}>Knee Flexion Rehab Target</span>
                  <span style={{ color: "#10B981", fontWeight: 700 }}>78% Achieved</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor: "#0B1220",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "78%",
                      height: "100%",
                      background: "linear-gradient(90deg, #0F9488, #7FAE3A)",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.75rem",
                  color: "#94A3B8",
                }}
              >
                <span>Encrypted Clinical Notes</span>
                <span style={{ color: "#10B981" }}>Sync Complete</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
