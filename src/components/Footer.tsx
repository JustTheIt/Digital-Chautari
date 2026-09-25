import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Heart,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-navy)",
        color: "var(--color-white)",
        paddingTop: "64px",
        paddingBottom: "36px",
        borderTop: "1px solid var(--color-navy-border)",
      }}
    >
      <div className="container">
        {/* 4-Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr",
            gap: "40px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand Blurb */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, #0F9488 0%, #0B6F66 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(15, 148, 136, 0.3)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    color: "#FFFFFF",
                  }}
                >
                  DC
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#FFFFFF",
                }}
              >
                Digital Chautari
              </span>
            </div>

            <p
              style={{
                color: "#94A3B8",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                marginBottom: "20px",
              }}
            >
              A creative technology powerhouse in Kathmandu, Nepal. Uniting
              high-growth digital marketing, cinematic content studio
              craftsmanship, and compassionate health-tech software.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "0.875rem",
                color: "#CBD5E1",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={16} color="var(--color-accent-gold)" />
                <span>Kathmandu, Bagmati Province, Nepal</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Mail size={16} color="var(--color-primary)" />
                <span>contact@digitalchautari.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={16} color="var(--color-leaf-green)" />
                <span>+977 1-4422330 / 9801234567</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "0.9rem",
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{ color: "#94A3B8", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  Home Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={{ color: "#94A3B8", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  About Digital Chautari
                </Link>
              </li>
              <li>
                <Link
                  href="/about#team"
                  style={{ color: "#94A3B8", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  Our Kathmandu Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about#roadmap"
                  style={{ color: "#94A3B8", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  Company Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  style={{ color: "#94A3B8", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Ventures */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              Services & Products
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "0.9rem",
              }}
            >
              <li>
                <Link
                  href="/services"
                  style={{ color: "#94A3B8", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  style={{ color: "#94A3B8", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  Content Creation Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  style={{ color: "#94A3B8", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  style={{
                    color: "var(--color-accent-gold)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontWeight: 600,
                  }}
                  className="footer-link"
                >
                  Physio@Home
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  style={{ color: "#94A3B8", transition: "color 0.2s" }}
                  className="footer-link"
                >
                  Eco Creative Agency
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Standards */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              Trust & Standards
            </h4>
            <div
              style={{
                backgroundColor: "var(--color-navy-card)",
                border: "1px solid var(--color-navy-border)",
                borderRadius: "10px",
                padding: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--color-accent-gold)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  marginBottom: "6px",
                }}
              >
                <ShieldCheck size={16} />
                <span>ISO 9001 Aligned</span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#94A3B8", lineHeight: 1.5 }}>
                Strict patient data privacy standards, HIPAA-ready architecture, and Pan-Nepal reliability.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                fontSize: "0.8125rem",
                color: "#64748B",
              }}
            >
              <Link href="/contact" className="footer-link" style={{ color: "#94A3B8" }}>
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/contact" className="footer-link" style={{ color: "#94A3B8" }}>
                Terms of Use
              </Link>
              <span>•</span>
              <Link href="/contact" className="footer-link" style={{ color: "#94A3B8" }}>
                Nepal Office
              </Link>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--color-navy-border)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom Bar: Centered Copyright */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.875rem",
            color: "#64748B",
          }}
          className="footer-bottom"
        >
          <div>
            © 2026 Digital Chautari. All rights reserved. Crafted with care in
            Kathmandu, Nepal.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.8125rem",
            }}
          >
            <span>Bridging ideas & impact</span>
            <span style={{ color: "var(--color-accent-gold)" }}>★</span>
            <span>Kathmandu Tech Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
