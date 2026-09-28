import React from "react";
import HeroPattern from "@/components/HeroPattern";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import KathmanduMap from "@/components/KathmanduMap";
import IconChip from "@/components/IconChip";
import { getIconForTitle } from "@/lib/sectionIcons";

export const metadata = {
  title: "Contact Us | Digital Chautari Kathmandu",
  description:
    "Get in touch with our team in Kathmandu. Inquire about digital marketing, content studio productions, or software engineering partnerships.",
};

export default function ContactPage() {
  const contactInfoCards = [
    {
      chipColor: "teal" as const,
      title: "Our Headquarters",
      detail: "Kathmandu, Bagmati Province, Nepal",
      subDetail: "Baneshwor / Jhamsikhel Innovation Corridor",
    },
    {
      chipColor: "mint" as const,
      title: "Direct Email",
      detail: "contact@digitalchautari.com",
      subDetail: "hello@digitalchautari.com",
    },
    {
      chipColor: "gold" as const,
      title: "Direct Phone",
      detail: "+977 1-4422330",
      subDetail: "+977 9801234567 (WhatsApp / Cell)",
    },
    {
      chipColor: "lilac" as const,
      title: "Business Hours",
      detail: "Sunday – Friday: 9:00 AM – 6:00 PM NPT",
      subDetail: "Saturday: Dedicated Emergency Standby",
    },
  ];

  const departmentLines = [
    {
      title: "Marketing & Growth",
      email: "marketing@digitalchautari.com",
      chipColor: "teal" as const,
      desc: "Performance PPC ads, SEO audits, and omnichannel growth funnels.",
    },
    {
      title: "Content Studio",
      email: "studio@digitalchautari.com",
      chipColor: "gold" as const,
      desc: "Commercial video productions, brand films, and studio bookings.",
    },
    {
      title: "Software Development",
      email: "tech@digitalchautari.com",
      chipColor: "mint" as const,
      desc: "Web apps, health-tech architectures, and custom platform engineering.",
    },
    {
      title: "Business Development",
      email: "bizdev@digitalchautari.com",
      chipColor: "lilac" as const,
      desc: "Enterprise retainers, vendor alliances, and institutional healthcare partnerships.",
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <HeroPattern
        eyebrowText="Get in Touch"
        headingPrefix="Let's start a"
        gradientWord="conversation"
        headingSuffix="and build something real"
        lede="Whether you have an upcoming project, want to pilot Physio@Home, or need high-converting digital marketing, our team in Kathmandu is ready to listen, strategize, and execute."
      />

      {/* 2. Contact Info Cards: 4 Cards */}
      <section className="section-tight">
        <div className="container">
          <div className="grid-4">
            {contactInfoCards.map((info, idx) => (
              <div
                key={idx}
                className="dc-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "18px 16px",
                }}
              >
                <div>
                  <IconChip
                    icon={getIconForTitle(info.title)}
                    chipColor={info.chipColor}
                    style={{ marginBottom: "10px" }}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--color-primary-dark)",
                      backgroundColor: `var(--chip-${info.chipColor})`,
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      marginBottom: "10px",
                    }}
                  >
                    Channel 0{idx + 1}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--color-ink)",
                      marginBottom: "6px",
                    }}
                  >
                    {info.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--color-primary-dark)",
                      marginBottom: "4px",
                      wordBreak: "break-word",
                    }}
                  >
                    {info.detail}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {info.subDetail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Direct Lines: "Reach the right team" */}
      <section
        className="section-tight"
        style={{ backgroundColor: "rgba(231, 245, 234, 0.3)" }}
      >
        <div className="container">
          <SectionHeader
            eyebrow="Departmental Channels"
            titlePrefix="Reach the"
            gradientWord="Right Team Directly"
            subtitle="Connect straight to dedicated leads for faster turnarounds and domain-specific assistance."
            align="left"
          />

          <div className="grid-4">
            {departmentLines.map((dept, index) => (
              <div
                key={index}
                className="dc-card"
                style={{
                  padding: "16px 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <IconChip
                    icon={getIconForTitle(dept.title)}
                    chipColor={dept.chipColor}
                    size={40}
                    style={{ marginBottom: "10px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--color-primary-dark)",
                        backgroundColor: `var(--chip-${dept.chipColor})`,
                        padding: "3px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      Desk 0{index + 1}
                    </span>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--color-ink)",
                      }}
                    >
                      {dept.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      lineHeight: 1.5,
                      color: "var(--color-muted)",
                      marginBottom: "10px",
                    }}
                  >
                    {dept.desc}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: "8px",
                    borderTop: "1px solid var(--color-line)",
                  }}
                >
                  <a
                    href={`mailto:${dept.email}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      wordBreak: "break-all",
                    }}
                  >
                    <span>{dept.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-tight">
        <div className="container">
          <SectionHeader
            eyebrow="Quick Answers"
            titlePrefix="Frequently asked"
            gradientWord="questions"
            subtitle="Common questions about working with Digital Chautari. For pricing tiers, see our Services page."
            align="left"
          />
          <div className="grid-2">
            {[
              {
                q: "How do I start a project?",
                a: "Use the contact form below or email contact@digitalchautari.com with your goals, timeline, and budget range. We reply within 24 hours.",
              },
              {
                q: "Do you offer monthly retainers?",
                a: "Yes. Starter and Professional marketing retainers start at Rs 15,000 and Rs 45,000 per month. Enterprise scopes are quoted custom.",
              },
              {
                q: "Where is Physio@Home available?",
                a: "Doorstep physiotherapy is currently focused on Kathmandu Valley (Kathmandu, Lalitpur, and Bhaktapur) with tele-rehab support.",
              },
              {
                q: "What is your typical proposal timeline?",
                a: "After an initial call, detailed proposals usually arrive within 2–3 business days. Urgent escalations are handled same day when possible.",
              },
            ].map((item) => (
              <div key={item.q} className="dc-card" style={{ padding: "20px 22px" }}>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    marginBottom: "8px",
                    color: "var(--color-ink)",
                  }}
                >
                  {item.q}
                </h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "16px", fontSize: "0.875rem" }}>
            <a
              href="/services#pricing"
              style={{ color: "var(--color-primary)", fontWeight: 600 }}
            >
              View full pricing on Services →
            </a>
          </p>
        </div>
      </section>

      {/* 4. Two-Column Contact Block */}
      <section className="section-standard">
        <div className="container">
          <SectionHeader
            eyebrow="Initiate A Project"
            titlePrefix="Tell us about"
            gradientWord="your vision"
            subtitle="Send your requirements or drop by our studio in Kathmandu. We review and respond with comprehensive proposals."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.25fr 1fr",
              gap: "24px",
              alignItems: "flex-start",
            }}
            className="contact-two-column"
          >
            {/* Left: Interactive Contact Form */}
            <ContactForm />

            {/* Right: Map card, Dark FAQ callout, and Response Time list */}
            <KathmanduMap />
          </div>
        </div>
      </section>
    </>
  );
}
