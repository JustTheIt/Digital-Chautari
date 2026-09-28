import React from "react";
import HeroPattern from "@/components/HeroPattern";
import Card from "@/components/Card";
import DarkSection from "@/components/DarkSection";
import SectionHeader from "@/components/SectionHeader";
import ClosingCta from "@/components/ClosingCta";

export const metadata = {
  title: "About Us | Digital Chautari Kathmandu",
  description:
    "Learn about our team, founding story, mission, core values, and roadmap at Digital Chautari in Kathmandu, Nepal.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "xyz",
      role: "Founder & CEO",
      bio: "Visionary product architect leading Digital Chautari's venture roadmap and strategic engineering in Kathmandu.",
      strengths: "Product Strategy • Venture Building • Systems Architecture",
      initials: "BS",
      chip: "chip-teal",
    },
    {
      name: "xyz",
      role: "Co-Founder & COO",
      bio: "Operations spearhead overseeing agency delivery pipelines, team performance, and strategic enterprise client alliances.",
      strengths: "Operational Scaling • Client Success • Resource Governance",
      initials: "AM",
      chip: "chip-mint",
    },
    {
      name: "xyz",
      role: "Front-End Developer",
      bio: "Design-minded engineer obsessed with UI micro-interactions, Next.js optimization, and accessible responsive web systems.",
      strengths: "Next.js • TypeScript • Design Systems • CWV Performance",
      initials: "SS",
      chip: "chip-gold",
    },
    {
      name: "xyz",
      role: "Back-End Developer",
      bio: "Specializes in secure API microservices, distributed data schemas, and HIPAA-compliant health telemetry for Physio@Home.",
      strengths: "Node.js • Cloud Architecture • SQL/NoSQL • Security",
      initials: "PK",
      chip: "chip-lilac",
    },
    {
      name: "xyz",
      role: "Marketing Lead",
      bio: "Performance growth strategist leading Eco Creative's omnichannel campaigns, paid ads attribution, and search dominance.",
      strengths: "PPC Growth • SEO • Attribution Analytics • Creative Direction",
      initials: "RT",
      chip: "chip-pink",
    },
    {
      name: "xyz",
      role: "Sales Executive",
      bio: "Customer-first advocate partnering with businesses across Nepal to identify tailored technology and marketing solutions.",
      strengths: "B2B Solutions • Deal Structuring • Consultative Discovery",
      initials: "KB",
      chip: "chip-teal",
    },
    {
      name: "xyz",
      role: "Business Development Officer",
      bio: "Cultivates health-tech institutional partnerships, clinic associations, and strategic regional expansion throughout the Valley.",
      strengths: "Strategic Partnerships • Health-Tech Alliances • Regional Scale",
      initials: "SA",
      chip: "chip-mint",
    },
  ];

  const roadmapMilestones = [
    {
      year: "2025",
      title: "The Idea",
      desc: "Conceived in Kathmandu: the vision of bringing traditional community trust (Chautari) into a high-octane creative technology house.",
      side: "left",
    },
    {
      year: "2025",
      title: "First Products",
      desc: "Successful launch of Eco Creative Marketing Agency and One Content Creation Studio, serving initial enterprise and D2C clients.",
      side: "right",
    },
    {
      year: "2026",
      title: "Health-Tech Entry",
      desc: "Inception and pilot clinical deployment of Physio@Home across Kathmandu, Lalitpur, and Bhaktapur, delivering doorstep rehab.",
      side: "left",
    },
    {
      year: "2026",
      title: "Company Registration & Scaling",
      desc: "Formal enterprise scaling, institutional hospital partnerships, expansion into broader South Asian and global client networks.",
      side: "right",
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <HeroPattern
        eyebrowText="Who We Are"
        headingPrefix="The people behind"
        gradientWord="Digital Chautari"
        headingSuffix="in Kathmandu"
        lede="A collective of creative storytellers, full-stack engineers, and health-tech thinkers bound by a shared desire to uplift Nepal's digital craftsmanship."
      />

      {/* 2. Story Block: "From a chautari to a digital powerhouse" + 2x2 Alternating Tiles */}
      <section className="section-standard">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "32px",
              alignItems: "center",
            }}
            className="story-block-grid"
          >
            {/* Left Narrative */}
            <div>
              <div className="eyebrow-pill">
                <span>Our Heritage</span>
              </div>
              <h2
                style={{
                  fontSize: "2.25rem",
                  marginBottom: "12px",
                  lineHeight: 1.25,
                }}
              >
                From a <span className="gradient-text">chautari</span> to a digital powerhouse
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                  marginBottom: "12px",
                }}
              >
                In the hills and valleys of Nepal, a <em>Chautari</em> has served for centuries as an open-air community gathering platform. Under the cool canopy of peepal and banyan trees, weary wayfarers set down their loads, elders exchange wisdom, and community decisions take shape.
              </p>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                  marginBottom: "16px",
                }}
              >
                We established Digital Chautari in Kathmandu with that exact ethos: creating a sanctuary where technology is not cold or transactional, but deeply human, collaborative, and empowering. Today, we unite performance marketing, cinematic filmmaking, and life-changing health-tech under one visionary roof.
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    backgroundColor: "var(--color-primary)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "var(--color-ink)",
                  }}
                >
                  Crafted with purpose in Kathmandu, Nepal
                </span>
              </div>
            </div>

            {/* Right: 2x2 Stat/Info Tiles in Alternating Colors */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
              className="stat-tiles-grid"
            >
              {/* Tile 1: Teal */}
              <div
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "#FFFFFF",
                  borderRadius: "14px",
                  padding: "20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 10px 24px rgba(15, 148, 136, 0.25)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  2025
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  Founded
                </div>
                <div style={{ fontSize: "0.8125rem", opacity: 0.85, marginTop: "4px" }}>
                  Kathmandu Genesis
                </div>
              </div>

              {/* Tile 2: Navy */}
              <div
                style={{
                  backgroundColor: "var(--color-navy)",
                  color: "#FFFFFF",
                  borderRadius: "14px",
                  padding: "20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid var(--color-navy-border)",
                  boxShadow: "0 10px 24px rgba(11, 18, 32, 0.3)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    color: "var(--color-accent-gold)",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  3
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  Products
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#94A3B8", marginTop: "4px" }}>
                  Active Flagship Ventures
                </div>
              </div>

              {/* Tile 3: White with Border */}
              <div
                style={{
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-ink)",
                  borderRadius: "14px",
                  padding: "20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid var(--color-line)",
                  boxShadow: "0 6px 18px rgba(16, 24, 38, 0.05)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    color: "var(--color-primary)",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  KTM
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  Kathmandu
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-muted)", marginTop: "4px" }}>
                  Headquarters
                </div>
              </div>

              {/* Tile 4: Gold */}
              <div
                style={{
                  backgroundColor: "var(--color-accent-gold)",
                  color: "var(--color-ink)",
                  borderRadius: "14px",
                  padding: "20px 18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 10px 24px rgba(224, 169, 48, 0.3)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  7+
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  Team Members
                </div>
                <div style={{ fontSize: "0.8125rem", opacity: 0.85, marginTop: "4px" }}>
                  Multidisciplinary Squad
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision: Two Side-by-Side Cards */}
      <section
        className="section-tight"
        style={{ backgroundColor: "rgba(231, 245, 234, 0.3)" }}
      >
        <div className="container">
          <SectionHeader
            eyebrow="Our Guiding Compass"
            titlePrefix="Purpose &"
            gradientWord="Future Direction"
            align="center"
          />

          <div className="grid-2">
            {/* Mission Card */}
            <div
              className="dc-card"
              style={{
                padding: "24px 22px",
                borderLeft: "4px solid var(--color-primary)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--color-primary-dark)",
                  backgroundColor: "var(--chip-teal)",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  marginBottom: "8px",
                }}
              >
                Mission
              </span>
              <h3
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  marginBottom: "8px",
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--color-ink)",
                }}
              >
                To democratize high-caliber digital technology, storytelling, and healthcare accessibility across Nepal and emerging markets through authentic, community-centric innovation.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className="dc-card"
              style={{
                padding: "24px 22px",
                borderLeft: "4px solid var(--color-accent-gold)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#9A690B",
                  backgroundColor: "var(--chip-gold)",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  marginBottom: "8px",
                }}
              >
                Vision
              </span>
              <h3
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  marginBottom: "8px",
                }}
              >
                Our Vision
              </h3>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--color-ink)",
                }}
              >
                To be the Himalayan hub for world-class digital craftsmanship, proving that groundbreaking software and compelling media can thrive from the heart of Kathmandu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Values: 4 Cards */}
      <section className="section-standard">
        <div className="container">
          <SectionHeader
            eyebrow="What Drives Us"
            titlePrefix="Core Values That"
            gradientWord="Define Our Work"
            subtitle="The principles every Digital Chautari member practices every single day."
            align="left"
          />

          <div className="grid-4">
            <Card
              chipColor="mint"
              tag="Belief"
              title="Passion"
              description="An unwavering devotion to creative expression, technological elegance, and community upliftment in everything we ship."
            />
            <Card
              chipColor="teal"
              tag="Originality"
              title="Creativity"
              description="Rejecting cookie-cutter formulas to discover bold, authentic solutions that stand out on global screens."
            />
            <Card
              chipColor="gold"
              tag="Standard"
              title="Excellence"
              description="Meticulous attention to craft, from pixel alignments and load times to compassionate patient clinical care."
            />
            <Card
              chipColor="lilac"
              tag="Synergy"
              title="Collaboration"
              description="Working shoulder-to-shoulder with clients and founders as transparent, aligned co-builders of their vision."
            />
          </div>
        </div>
      </section>

      {/* 5. Dark "Committed to quality & trust": 4 Cards */}
      <DarkSection
        eyebrow="Integrity & Reliability"
        title="Committed to Quality & Trust"
        subtitle="We build products and manage client campaigns under strict operational rigor and international best practices."
      >
        <div className="grid-4">
          {[
            {
              title: "ISO 9001 Ready",
              desc: "Structured quality management systems, standardized operational checklists, and continuous process optimization.",
            },
            {
              title: "Data Protection",
              desc: "HIPAA-ready clinical data encryption, GDPR-aligned patient confidentiality, and secure cloud tokenization.",
            },
            {
              title: "Global Delivery",
              desc: "World-class engineering standards capable of delivering high-traffic platforms for international and regional clients.",
            },
            {
              title: "Pan-Nepal Network",
              desc: "Deep roots across Nepal with certified partner networks, local language fluency, and boots-on-the-ground support.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="dc-card dc-card-navy"
              style={{ padding: "18px 16px" }}
            >
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
                Standard 0{index + 1}
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

      {/* 6. Team Roles: 7 Cards */}
      <section id="team" className="section-standard">
        <div className="container">
          <SectionHeader
            eyebrow="Our Kathmandu Squad"
            titlePrefix="Meet the"
            gradientWord="Multidisciplinary Team"
            subtitle="Strategists, coders, storytellers, and business leads driving Nepal's creative tech renaissance."
            align="center"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
              gap: "20px",
            }}
          >
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="dc-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "20px 18px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      className={`icon-chip ${member.chip}`}
                      style={{
                        width: "48px",
                        height: "48px",
                        fontSize: "1.05rem",
                        fontWeight: 800,
                      }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "var(--color-ink)",
                          lineHeight: 1.2,
                        }}
                      >
                        {member.name}
                      </h3>
                      <div
                        style={{
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "var(--color-primary-dark)",
                          marginTop: "2px",
                        }}
                      >
                        {member.role}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "var(--color-muted)",
                      marginBottom: "12px",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: "10px",
                    borderTop: "1px solid var(--color-line)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-ink)",
                  }}
                >
                  <span>{member.strengths}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dark Roadmap: Alternating Left/Right Timeline */}
      <DarkSection
        id="roadmap"
        eyebrow="Our Trajectory"
        title="The Digital Chautari Roadmap"
        subtitle="From our founding spark in Kathmandu to a multi-product ecosystem transforming creative technology in Nepal."
      >
        <div
          style={{
            position: "relative",
            maxWidth: "860px",
            margin: "0 auto",
            padding: "10px 0",
          }}
          className="timeline-container"
        >
          {/* Centered Vertical Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              width: "2px",
              backgroundColor: "var(--color-navy-border)",
              transform: "translateX(-50%)",
            }}
            className="timeline-vertical-line"
          />

          {/* Timeline Nodes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {roadmapMilestones.map((node, index) => {
              const isLeft = node.side === "left";
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isLeft ? "flex-start" : "flex-end",
                    position: "relative",
                    width: "100%",
                  }}
                  className={`timeline-row ${isLeft ? "timeline-left" : "timeline-right"}`}
                >
                  {/* Center Green Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-leaf-green)",
                      border: "3px solid var(--color-navy)",
                      boxShadow: "0 0 10px rgba(127, 174, 58, 0.8)",
                      zIndex: 3,
                    }}
                    className="timeline-dot"
                  />

                  {/* Content Card */}
                  <div
                    style={{
                      width: "44%",
                      backgroundColor: "var(--color-navy-card)",
                      border: "1px solid var(--color-navy-border)",
                      borderRadius: "14px",
                      padding: "18px 20px",
                      boxShadow: "0 10px 24px rgba(0, 0, 0, 0.4)",
                    }}
                    className="timeline-card"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      {/* Gold Year Pill */}
                      <span
                        style={{
                          backgroundColor: "var(--color-accent-gold)",
                          color: "var(--color-ink)",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          padding: "3px 12px",
                          borderRadius: "9999px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {node.year}
                      </span>
                      <h4
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#FFFFFF",
                        }}
                      >
                        {node.title}
                      </h4>
                    </div>

                    <p
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        color: "#94A3B8",
                      }}
                    >
                      {node.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </DarkSection>

      {/* 8. Closing CTA */}
      <ClosingCta
        title="Want to join our journey?"
        description="Whether you are an ambitious engineer, a creative visionary, or a business looking to innovate with us in Kathmandu, we would love to talk."
        primaryBtnText="Get in Touch"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Our Products"
        secondaryBtnHref="/products"
      />
    </>
  );
}
