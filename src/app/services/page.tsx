import React from "react";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import Card from "@/components/Card";
import DarkSection from "@/components/DarkSection";
import SectionHeader from "@/components/SectionHeader";
import ClosingCta from "@/components/ClosingCta";
import IconChip from "@/components/IconChip";
import { getIconForTitle } from "@/lib/sectionIcons";

export const metadata = {
  title: "Services | Digital Chautari Kathmandu",
  description:
    "Explore our full-spectrum digital marketing, content studio, and software engineering services tailored to drive measurable growth.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "marketing",
      title: "Digital Marketing",
      chipColor: "teal" as const,
      eyebrow: "Acquisition & Performance",
      description:
        "We turn marketing budgets into predictable customer revenue. Our data-driven strategies combine rigorous paid media optimization across Meta and Google with organic search dominance.",
      highlights: [
        "Measurable ROI and granular funnel analytics",
        "Targeted audience segmentation across Nepal & international markets",
        "Continuous multivariate A/B creative testing",
      ],
      subServices: [
        {
          title: "SEO & SEM",
          desc: "Target high-intent search queries to dominate Kathmandu & regional rankings.",
        },
        {
          title: "Social Media Marketing",
          desc: "Engaging community building, viral content pacing, and organic brand authority.",
        },
        {
          title: "Paid Advertising",
          desc: "High-converting PPC ads on Google, Meta, TikTok, and programmatic networks.",
        },
        {
          title: "Analytics & Reporting",
          desc: "Full attribution modeling, conversion rate tracking, and bi-weekly strategic reviews.",
        },
      ],
    },
    {
      id: "content",
      title: "Content Creation Studio",
      chipColor: "gold" as const,
      eyebrow: "Cinematic Media & Craft",
      description:
        "Through our One Content Creation Studio, we create visual narratives that stick. From high-production commercial films to engaging short-form TikTok & Reel formats, we elevate how your brand sounds and looks.",
      highlights: [
        "In-house Kathmandu studio equipped with 4K cinema cameras",
        "Full pre-production, screenwriting, and storyboarding pipeline",
        "Custom audio scoring, podcast recording, and sound design",
      ],
      subServices: [
        {
          title: "Brand Storytelling",
          desc: "Emotional founder narratives, mini-documentaries, and corporate vision videos.",
        },
        {
          title: "Video Production",
          desc: "4K commercial shoots, product reels, drone cinematography, and post-production.",
        },
        {
          title: "Graphic Design",
          desc: "Campaign visuals, billboards, packaging, and cohesive digital social assets.",
        },
        {
          title: "Copywriting & PR",
          desc: "Persuasive web copy, press releases, thought leadership, and newsletter funnels.",
        },
      ],
    },
    {
      id: "software",
      title: "Software Development",
      chipColor: "mint" as const,
      eyebrow: "Engineering & Architecture",
      description:
        "Modern digital infrastructure built for velocity, scalability, and airtight security. We architect responsive web applications, mobile platforms, and specialized health-tech clinical backends.",
      highlights: [
        "Modern stack leveraging Next.js, TypeScript, and serverless backends",
        "Strict adherence to health data security and HIPAA-ready architecture",
        "Agile two-week sprints with transparent code repositories",
      ],
      subServices: [
        {
          title: "Web & Mobile Apps",
          desc: "High-speed Single Page and Progressive Web Apps built with Next.js and React Native.",
        },
        {
          title: "Health-Tech Systems",
          desc: "Telehealth scheduling, patient record encryption, and home-care clinical workflows.",
        },
        {
          title: "Cloud & API Integration",
          desc: "Scalable cloud microservices, payment gateway integrations, and data synchronization.",
        },
        {
          title: "Maintenance & QA",
          desc: "24/7 uptime monitoring, security updates, latency optimization, and ongoing enhancements.",
        },
      ],
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <HeroPattern
        eyebrowText="Full-Spectrum Capabilities"
        headingPrefix="Services that"
        gradientWord="drive growth"
        headingSuffix="& lasting impact"
        lede="From strategic brand storytelling and hyper-targeted digital marketing to resilient full-stack web and health-tech systems engineered in Kathmandu."
      >
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#categories" className="btn-primary">
            <span>Explore Categories</span>
          </a>
          <a href="#pricing" className="btn-secondary">
            <span>View Pricing Tiers</span>
          </a>
        </div>
      </HeroPattern>

      {/* 2. Service Categories: 3 Rows */}
      <section id="categories" className="section-standard">
        <div className="container">
          <SectionHeader
            eyebrow="What We Build & Deliver"
            titlePrefix="Tailored solutions across"
            gradientWord="three core disciplines"
            subtitle="Every engagement is structured around measurable KPIs, transparent communication, and rapid turnaround."
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-line)",
                  borderRadius: "16px",
                  padding: "28px 30px",
                  display: "grid",
                  gridTemplateColumns: "1.05fr 1.2fr",
                  gap: "28px",
                  alignItems: "center",
                  boxShadow: "0 4px 20px -8px rgba(16, 24, 38, 0.05)",
                }}
                className="service-category-row"
              >
                {/* Left: Title, Description, Highlights */}
                <div>
                  <IconChip
                    icon={getIconForTitle(category.title)}
                    chipColor={category.chipColor}
                    style={{ marginBottom: "12px" }}
                  />
                  <div style={{ marginBottom: "10px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--color-primary-dark)",
                        backgroundColor: `var(--chip-${category.chipColor})`,
                        padding: "4px 12px",
                        borderRadius: "9999px",
                      }}
                    >
                      {category.eyebrow}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-ink)",
                      marginBottom: "8px",
                      lineHeight: 1.25,
                    }}
                  >
                    {category.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.975rem",
                      lineHeight: 1.65,
                      color: "var(--color-muted)",
                      marginBottom: "14px",
                    }}
                  >
                    {category.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginBottom: "18px",
                    }}
                  >
                    {category.highlights.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          color: "var(--color-ink)",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "var(--color-primary)",
                            flexShrink: 0,
                            marginTop: "8px",
                          }}
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn-secondary">
                    <span>Inquire About {category.title}</span>
                  </Link>
                </div>

                {/* Right: 2x2 Grid of Sub-services */}
                <div className="grid-2">
                  {category.subServices.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        backgroundColor: "var(--color-paper)",
                        border: "1px solid var(--color-line)",
                        borderRadius: "12px",
                        padding: "16px 14px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        transition: "transform 0.2s ease, border-color 0.2s ease",
                      }}
                      className="subservice-card"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <IconChip
                          icon={getIconForTitle(sub.title)}
                          chipColor={category.chipColor}
                          size={36}
                          style={{ marginBottom: 0, fontSize: "1rem" }}
                        />
                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "var(--color-ink)",
                          }}
                        >
                          {sub.title}
                        </h4>
                      </div>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          lineHeight: 1.5,
                          color: "var(--color-muted)",
                        }}
                      >
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pricing Section */}
      <section
        id="pricing"
        className="section-standard"
        style={{ backgroundColor: "rgba(231, 245, 234, 0.25)" }}
      >
        <div className="container">
          <SectionHeader
            eyebrow="Transparent Investment"
            titlePrefix="Simple,"
            gradientWord="Predictable Plans"
            subtitle="Transparent monthly retainer models designed to deliver outsized return without hidden surprises."
            align="center"
          />

          <div className="grid-3" style={{ alignItems: "stretch" }}>
            {/* Starter Tier */}
            <div
              className="dc-card"
              style={{
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--color-muted)",
                  }}
                >
                  Starter
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--color-ink)",
                    marginTop: "8px",
                    marginBottom: "4px",
                  }}
                >
                  Rs 15,000
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "var(--color-muted)",
                    }}
                  >
                    {" "}
                    / mo
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-muted)",
                    lineHeight: 1.5,
                    marginBottom: "16px",
                  }}
                >
                  Ideal for emerging startups, local retail brands, and independent clinics launching their digital presence.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {[
                    "Social media channel setup & calendar",
                    "8 custom branded graphics / month",
                    "Basic local SEO & Google Business optimization",
                    "Monthly progress dashboard & report",
                    "Email & WhatsApp business support",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.875rem",
                        color: "var(--color-ink)",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Get Started</span>
              </Link>
            </div>

            {/* Professional Tier (Dark Card, Most Popular) */}
            <div
              className="dc-card dc-card-navy"
              style={{
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                border: "2px solid var(--color-accent-gold)",
                boxShadow: "0 20px 40px -15px rgba(11, 18, 32, 0.4)",
              }}
            >
              {/* Most Popular Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--color-accent-gold)",
                  color: "var(--color-ink)",
                  padding: "4px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 12px rgba(224, 169, 48, 0.35)",
                }}
              >
                Most Popular
              </div>

              <div>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--color-accent-gold)",
                  }}
                >
                  Professional
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    marginTop: "8px",
                    marginBottom: "4px",
                  }}
                >
                  Rs 45,000
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "#94A3B8",
                    }}
                  >
                    {" "}
                    / mo
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#94A3B8",
                    lineHeight: 1.5,
                    marginBottom: "16px",
                  }}
                >
                  Comprehensive growth engine for ambitious scaling businesses seeking market leadership in Nepal.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {[
                    "Full content creation: 4 video reels + 16 graphics",
                    "Targeted PPC management on Meta & Google Ads",
                    "Programmatic SEO & high-intent search positioning",
                    "Landing page conversion optimization (CRO)",
                    "Dedicated Kathmandu project manager",
                    "Bi-weekly live strategy & attribution review",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.875rem",
                        color: "#FFFFFF",
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
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  backgroundColor: "var(--color-accent-gold)",
                  color: "var(--color-ink)",
                  fontWeight: 700,
                }}
              >
                <span>Select Professional</span>
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div
              className="dc-card"
              style={{
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--color-muted)",
                  }}
                >
                  Enterprise
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--color-ink)",
                    marginTop: "8px",
                    marginBottom: "4px",
                  }}
                >
                  Custom
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "var(--color-muted)",
                    }}
                  >
                    {" "}
                    / scope
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-muted)",
                    lineHeight: 1.5,
                    marginBottom: "16px",
                  }}
                >
                  Tailored solutions for healthcare groups, enterprise software platforms, and regional conglomerates.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {[
                    "Full squad: Senior engineer, designer & strategist",
                    "Custom full-stack web/app software development",
                    "Health-tech architecture & clinical compliance",
                    "Commercial 4K documentary & ad productions",
                    "24/7 priority SLA & security monitoring",
                    "Executive board presentations & analytics",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.875rem",
                        color: "var(--color-ink)",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Talk to Leadership</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industries: "Who we work with" */}
      <section className="section-tight">
        <div className="container">
          <SectionHeader
            eyebrow="Market Verticals"
            titlePrefix="Industries"
            gradientWord="Who We Work With"
            subtitle="Deep vertical understanding gives our clients an immediate strategic advantage."
            align="left"
          />

          <div className="grid-3">
            {[
              {
                chipColor: "mint" as const,
                title: "Healthcare",
                desc: "Hospitals, physiotherapy clinics, telecare startups, and wellness brands.",
              },
              {
                chipColor: "teal" as const,
                title: "E-Commerce",
                desc: "Direct-to-consumer lifestyle brands, specialty retailers, and marketplace sellers.",
              },
              {
                chipColor: "gold" as const,
                title: "Real Estate",
                desc: "Commercial developers, residential properties, and architectural design firms.",
              },
              {
                chipColor: "lilac" as const,
                title: "Education",
                desc: "Colleges, vocational training academies, and online ed-tech platforms.",
              },
              {
                chipColor: "pink" as const,
                title: "Tourism",
                desc: "Himalayan trekking outfits, boutique heritage resorts, and travel agencies.",
              },
              {
                chipColor: "teal" as const,
                title: "Media",
                desc: "Online publishers, content creators, podcast studios, and event organizers.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                chipColor={item.chipColor}
                title={item.title}
                description={item.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dark "Why work with us" */}
      <DarkSection
        eyebrow="The Digital Chautari Advantage"
        title="Why Work With Us"
        subtitle="We operate not merely as an agency or a dev shop, but as an embedded growth partner."
      >
        <div className="grid-3">
          {[
            {
              title: "Dedicated Project Manager",
              desc: "A single, responsive Kathmandu contact point who orchestrates engineers, designers, and media producers seamlessly.",
              chip: "chip-teal",
            },
            {
              title: "Agile Development Cycle",
              desc: "Rapid two-week sprint cycles with live demo staging, constant backlog prioritization, and no bureaucratic bloat.",
              chip: "chip-mint",
            },
            {
              title: "Transparent Pricing",
              desc: "Clear upfront proposals, zero hidden agency fees, and predictable monthly retainers tailored to your scope.",
              chip: "chip-gold",
            },
            {
              title: "Post-Launch Support",
              desc: "Proactive security patching, system health checks, continuous SEO reviews, and ongoing conversion optimization.",
              chip: "chip-lilac",
            },
            {
              title: "Scalable Architecture",
              desc: "Code and campaigns structured to seamlessly handle 10x traffic spikes, user growth, and geographic expansion.",
              chip: "chip-pink",
            },
            {
              title: "Cross-Platform Expertise",
              desc: "Holistic integration across web, mobile, social algorithms, analytics tracking, and specialized clinical software.",
              chip: "chip-teal",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="dc-card dc-card-navy"
              style={{ padding: "20px 18px" }}
            >
              <IconChip
                icon={getIconForTitle(item.title)}
                chipClass={item.chip}
                style={{ marginBottom: "10px" }}
              />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--color-accent-gold)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Pillar 0{index + 1}
              </span>
              <h3
                style={{
                  fontSize: "1.15rem",
                  color: "#FFFFFF",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "#94A3B8" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* 6. Closing CTA */}
      <ClosingCta
        title="Let's find the right service for you"
        description="Book a zero-obligation consultation with our leads in Kathmandu. We will assess your roadmap and craft a tailored strategic recommendation."
        primaryBtnText="Book a Consultation"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Flagship Products"
        secondaryBtnHref="/products"
      />
    </>
  );
}
