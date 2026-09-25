import React from "react";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import StatBar from "@/components/StatBar";
import Card from "@/components/Card";
import DarkSection from "@/components/DarkSection";
import SectionHeader from "@/components/SectionHeader";
import ClosingCta from "@/components/ClosingCta";
import {
  TrendingUp,
  Sparkles,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Package,
  Video,
  Activity,
  HeartPulse,
  ShoppingBag,
  Building2,
  GraduationCap,
  Palmtree,
  Newspaper,
  Compass,
  Palette,
  Code2,
  Rocket,
  Star,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroPattern
        eyebrowText="👋 Welcome to Digital Chautari"
        headingPrefix="We build"
        gradientWord="digital bridges"
        headingSuffix="between ideas and impact"
        lede="Empowering Himalayan innovation with world-class digital marketing, a cinematic content creation studio, and compassionate health-tech software tailored for sustainable growth."
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "12px",
          }}
        >
          <Link href="/services" className="btn-primary">
            <span>Explore Services</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="/products" className="btn-secondary">
            <span>View Products</span>
          </Link>
        </div>

        {/* Hero Stat Bar (3 Products / 6+ Team Members / 100% Commitment) */}
        <StatBar
          stats={[
            {
              number: "3",
              label: "Ventures & Products",
              icon: <Package size={22} />,
              chipClass: "chip-teal",
            },
            {
              number: "6+",
              label: "Team Members in KTM",
              icon: <HeartHandshake size={22} />,
              chipClass: "chip-mint",
            },
            {
              number: "100%",
              label: "Client Commitment",
              icon: <Sparkles size={22} />,
              chipClass: "chip-gold",
            },
          ]}
        />
      </HeroPattern>

      {/* 2. Feature Strip: 4 Cards */}
      <section className="section-tight">
        <div className="container">
          <div className="grid-4">
            <Card
              icon={<TrendingUp size={22} />}
              chipColor="mint"
              tag="ROI Focus"
              title="Growth-Driven"
              description="High-velocity performance marketing campaigns and full-funnel customer acquisition designed to scale revenue consistently."
            />
            <Card
              icon={<Sparkles size={22} />}
              chipColor="teal"
              tag="Craft & Media"
              title="Creative-First"
              description="Compelling brand narratives, cinematic 4K video storytelling, and design aesthetics that captivate modern audiences."
            />
            <Card
              icon={<Cpu size={22} />}
              chipColor="gold"
              tag="Engineering"
              title="Tech-Powered"
              description="Resilient full-stack web platforms, modern cloud architectures, and specialized health-tech clinical applications."
            />
            <Card
              icon={<HeartHandshake size={22} />}
              chipColor="lilac"
              tag="Collaboration"
              title="Client-Centric"
              description="Transparent sprint execution, dedicated Kathmandu project management, and empathetic long-term partnerships."
            />
          </div>
        </div>
      </section>

      {/* 3. Who We Are Section */}
      <section className="section-standard">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="who-we-are-grid"
          >
            {/* Left Narrative Block */}
            <div>
              <div className="eyebrow-pill">
                <span>Who We Are</span>
              </div>
              <h2
                style={{
                  fontSize: "2.35rem",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}
              >
                A <span className="gradient-text">Chautari</span> where ideas meet execution
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                  marginBottom: "16px",
                }}
              >
                In Nepali tradition, a <em>Chautari</em> is a tranquil stone platform shaded by sacred banyan trees where travelers, villagers, and storytellers rest, share perspectives, and find inspiration before embarking on the next leg of their journey.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                  marginBottom: "28px",
                }}
              >
                Digital Chautari breathes modern vitality into this timeless spirit. Headquartered in Kathmandu, we bring visionary founders, health practitioners, and creative storytellers under one digital canopy to turn bold concepts into market-defining digital reality.
              </p>

              {/* 2x2 Checklist */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                  marginBottom: "32px",
                }}
              >
                {[
                  "Creative Strategy",
                  "Brand Storytelling",
                  "Full-Stack Engineering",
                  "Health-Tech Expertise",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--color-ink)",
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      color="var(--color-primary)"
                      style={{ flexShrink: 0 }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary">
                <span>Meet the Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Side: 2x2 Grid of Service Teaser Cards */}
            <div className="grid-2">
              <Card
                icon={<TrendingUp size={20} />}
                chipColor="teal"
                tag="Growth"
                title="Digital Marketing"
                description="Targeted PPC, social media growth, programmatic SEO, and data analytics."
                href="/services"
                linkText="View Service"
              />
              <Card
                icon={<Video size={20} />}
                chipColor="gold"
                tag="Studio"
                title="Content Creation"
                description="Cinematic brand films, podcast series, social media reels, and graphics."
                href="/services"
                linkText="View Service"
              />
              <Card
                icon={<Code2 size={20} />}
                chipColor="mint"
                tag="Software"
                title="Software Dev"
                description="Scalable Next.js web applications, responsive portals, and API systems."
                href="/services"
                linkText="View Service"
              />
              <Card
                icon={<Palette size={20} />}
                chipColor="lilac"
                tag="Identity"
                title="Branding & Design"
                description="Distinctive visual identities, design systems, UX wireframes, and packaging."
                href="/services"
                linkText="View Service"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dark Stats Banner */}
      <DarkSection
        eyebrow="Proven Track Record"
        title="Impact Measured Across Nepal & Beyond"
        subtitle="Our multidisciplinary campaigns and software deployments continue to deliver measurable results for ambitious organizations."
        tight
      >
        <div className="grid-4">
          {[
            { number: "250+", label: "Projects Delivered", detail: "Across Web, Media & Ads" },
            { number: "40+", label: "Happy Clients", detail: "Startups & Established Brands" },
            { number: "1M+", label: "Content Views", detail: "Generated Across Media Channels" },
            { number: "98%", label: "Client Retention", detail: "Ongoing Long-term Retainers" },
          ].map((item, index) => (
            <div
              key={index}
              className="dc-card dc-card-navy"
              style={{ textAlign: "center", padding: "28px 20px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "var(--color-accent-gold)",
                  marginBottom: "8px",
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "6px",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "#94A3B8",
                }}
              >
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* 5. Products Teaser */}
      <section className="section-standard">
        <div className="container">
          <SectionHeader
            eyebrow="Innovation Lab"
            titlePrefix="Three ventures,"
            gradientWord="one vision"
            subtitle="Flagship ventures incubated and built by Digital Chautari to solve critical challenges in marketing, content, and healthcare."
            align="center"
          />

          <div className="grid-3">
            <Card
              icon={<TrendingUp size={22} />}
              chipColor="teal"
              tag="Performance Marketing"
              title="Eco Creative Marketing Agency"
              description="High-converting performance marketing, SEO dominance, and paid funnel optimization tailored for forward-thinking brands in Nepal and worldwide."
              href="/products"
              linkText="Learn more"
            />
            <Card
              icon={<Video size={22} />}
              chipColor="gold"
              tag="Creative Studio"
              title="One Content Creation Studio"
              description="A state-of-the-art production studio in Kathmandu producing cinematic commercials, viral social reels, and unforgettable brand storytelling."
              href="/products"
              linkText="Learn more"
            />
            <Card
              icon={<Activity size={22} />}
              chipColor="mint"
              tag="Health-Tech Venture"
              title="Physio@Home"
              description="On-demand certified physical rehabilitation delivered straight to patient homes across Kathmandu Valley, backed by our smart clinical recovery software."
              href="/products"
              linkText="Learn more"
            />
          </div>
        </div>
      </section>

      {/* 6. Sectors We Serve */}
      <section
        className="section-tight"
        style={{ backgroundColor: "rgba(231, 245, 234, 0.3)" }}
      >
        <div className="container">
          <SectionHeader
            eyebrow="Domains"
            titlePrefix="Sectors"
            gradientWord="We Serve"
            subtitle="Deep domain expertise tailored to meet the regulatory, cultural, and technological dynamics of diverse industries."
            align="left"
          />

          <div className="grid-3">
            {[
              {
                icon: <HeartPulse size={22} />,
                title: "Healthcare & Clinics",
                chip: "mint" as const,
                desc: "Telehealth portals, patient management systems, and specialized medical practice outreach campaigns.",
              },
              {
                icon: <ShoppingBag size={22} />,
                title: "E-Commerce & Retail",
                chip: "teal" as const,
                desc: "High-converting online storefronts, omnichannel catalog marketing, and automated conversion funnels.",
              },
              {
                icon: <Building2 size={22} />,
                title: "Real Estate & Architecture",
                chip: "gold" as const,
                desc: "Cinematic architectural walkthroughs, lead qualification pipelines, and interactive property listings.",
              },
              {
                icon: <GraduationCap size={22} />,
                title: "Education & EdTech",
                chip: "lilac" as const,
                desc: "Student enrollment funnels, university portal interfaces, and engaging visual learning media.",
              },
              {
                icon: <Palmtree size={22} />,
                title: "Tourism & Hospitality",
                chip: "pink" as const,
                desc: "Himalayan travel storytelling, luxury resort booking funnels, and international guest acquisition.",
              },
              {
                icon: <Newspaper size={22} />,
                title: "Media & Publishing",
                chip: "teal" as const,
                desc: "High-traffic editorial platforms, subscription gating, and dynamic multi-format digital publishing.",
              },
            ].map((sector, i) => (
              <Card
                key={i}
                icon={sector.icon}
                chipColor={sector.chip}
                title={sector.title}
                description={sector.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dark "Our 4-step process" */}
      <DarkSection
        eyebrow="How We Work"
        title="Our 4-Step Process"
        subtitle="A predictable, agile methodology built for velocity, craftsmanship, and transparent accountability."
      >
        <div className="grid-4">
          {[
            {
              step: "01",
              title: "Discover",
              desc: "Collaborative discovery workshops to unearth deep business objectives, competitor landscape, and user persona insights.",
              icon: <Compass size={22} />,
            },
            {
              step: "02",
              title: "Design",
              desc: "Wireframing user journeys, architecting aesthetic design systems, and rapid prototyping for intuitive interaction.",
              icon: <Palette size={22} />,
            },
            {
              step: "03",
              title: "Develop",
              desc: "Modern full-stack engineering with clean code, test-driven reliability, SEO optimization, and agile sprint cadence.",
              icon: <Code2 size={22} />,
            },
            {
              step: "04",
              title: "Deliver",
              desc: "Seamless cloud deployment, hands-on team training, continuous performance monitoring, and post-launch scaling.",
              icon: <Rocket size={22} />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="dc-card dc-card-navy"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "26px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(15, 148, 136, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--color-accent-gold)",
                    }}
                  >
                    {item.step}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "#94A3B8",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* 8. Testimonials Section */}
      <section className="section-standard">
        <div className="container">
          <SectionHeader
            eyebrow="Client Stories"
            titlePrefix="Loved by Founders &"
            gradientWord="Changemakers"
            subtitle="Hear how our collaborative approach in Kathmandu delivers tangible outcomes for growing businesses."
            align="center"
          />

          <div className="grid-3">
            {[
              {
                quote:
                  "Digital Chautari transformed our brand presence in Nepal. Their video production quality is unmatched, and our customer acquisition jumped by 140% within three months.",
                name: "Prabin Shrestha",
                title: "Managing Director",
                company: "Himalayan Organic Goods",
                initials: "PS",
                chip: "chip-mint",
              },
              {
                quote:
                  "Physio@Home changed how our patients access rehab care. The software is intuitive, secure, and our therapist response times have reached an all-time high.",
                name: "Dr. Sunita Karki",
                title: "Head of Physical Medicine",
                company: "Kathmandu Valley Care",
                initials: "SK",
                chip: "chip-teal",
              },
              {
                quote:
                  "The engineering precision and agile communication from the Digital Chautari team made our multi-platform software rollout effortless. A true partner in every sense.",
                name: "Rohan Manandhar",
                title: "Founder & CTO",
                company: "Aura Logistics Nepal",
                initials: "RM",
                chip: "chip-gold",
              },
            ].map((t, index) => (
              <div
                key={index}
                className="dc-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "26px",
                }}
              >
                <div>
                  {/* 5-star rating */}
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      marginBottom: "16px",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="var(--color-accent-gold)"
                        color="var(--color-accent-gold)"
                      />
                    ))}
                  </div>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "var(--color-ink)",
                      fontStyle: "italic",
                      marginBottom: "24px",
                    }}
                  >
                    "{t.quote}"
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--color-line)",
                  }}
                >
                  <div
                    className={`icon-chip ${t.chip}`}
                    style={{
                      width: "40px",
                      height: "40px",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "var(--color-ink)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-muted)",
                      }}
                    >
                      {t.title} • {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Blog Teaser */}
      <section
        className="section-tight"
        style={{ backgroundColor: "var(--color-paper)" }}
      >
        <div className="container">
          <SectionHeader
            eyebrow="Insights & Stories"
            titlePrefix="Latest from"
            gradientWord="Our Blog"
            subtitle="Articles, technical deep-dives, and creative essays from our team in Kathmandu."
            align="left"
          />

          <div className="grid-3">
            {[
              {
                category: "Marketing",
                tagColor: "var(--chip-teal)",
                textColor: "var(--color-primary-dark)",
                title: "How Hyper-Local Storytelling Converted 3x More Leads in Kathmandu",
                excerpt: "Analyzing customer behavior patterns across Kathmandu Valley and why authentic cultural hooks outperform generic corporate copy.",
                date: "Sep 18, 2026",
                readTime: "5 min read",
                bannerBg: "linear-gradient(135deg, #0F9488 0%, #0B6F66 100%)",
              },
              {
                category: "Health-Tech",
                tagColor: "var(--chip-mint)",
                textColor: "#0C6C42",
                title: "Bridging the Urban Healthcare Gap: The Architecture Behind Physio@Home",
                excerpt: "A deep dive into our HIPAA-compliant scheduling protocols, location routing, and patient privacy frameworks in Nepal.",
                date: "Aug 29, 2026",
                readTime: "7 min read",
                bannerBg: "linear-gradient(135deg, #7FAE3A 0%, #0F9488 100%)",
              },
              {
                category: "Creative Media",
                tagColor: "var(--chip-gold)",
                textColor: "#9A690B",
                title: "Cinematic Lighting on a Budget: Lessons from One Studio Kathmandu",
                excerpt: "Behind the scenes on how our studio team crafts commercial-grade visuals using practical fixtures and clever framing.",
                date: "Aug 14, 2026",
                readTime: "4 min read",
                bannerBg: "linear-gradient(135deg, #E0A930 0%, #0B1220 100%)",
              },
            ].map((post, idx) => (
              <div
                key={idx}
                className="dc-card"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Colored Placeholder Image Block */}
                <div
                  style={{
                    height: "170px",
                    background: post.bannerBg,
                    position: "relative",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "flex-start",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      backgroundColor: "rgba(255, 255, 255, 0.92)",
                      color: post.textColor,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {post.category}
                  </span>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      display: "flex",
                      gap: "12px",
                    }}
                  >
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div style={{ padding: "22px" }}>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      lineHeight: 1.35,
                      marginBottom: "10px",
                      color: "var(--color-ink)",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "var(--color-muted)",
                      marginBottom: "18px",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      cursor: "pointer",
                    }}
                  >
                    <span>Read more</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Closing CTA */}
      <ClosingCta
        title="Ready to build something extraordinary together?"
        description="Whether you want to launch a game-changing marketing campaign, produce unforgettable cinematic video, or engineer resilient software, we are ready."
        primaryBtnText="Start a Project"
        primaryBtnHref="/contact"
        secondaryBtnText="View Services"
        secondaryBtnHref="/services"
      />

    </>
  );
}
