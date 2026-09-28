"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled
          ? "rgba(251, 251, 249, 0.94)"
          : "rgba(251, 251, 249, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "rgba(231, 229, 223, 0.9)" : "var(--color-line)"}`,
        transition: "all 0.3s ease",
      }}
    >
      <div className="container header-inner">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="header-brand"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
          aria-label="Digital Chautari Home"
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #0F9488 0%, #0B6F66 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(15, 148, 136, 0.25)",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "#FFFFFF",
                letterSpacing: "-0.04em",
              }}
            >
              DC
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "var(--color-ink)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Digital Chautari
            </span>
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 500,
                color: "var(--color-muted)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Creative Technology • Kathmandu
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav header-nav-center"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--color-primary)" : "var(--color-ink)",
                  position: "relative",
                  padding: "6px 2px",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      width: "100%",
                      height: "2px",
                      borderRadius: "2px",
                      backgroundColor: "var(--color-primary)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="desktop-cta header-actions">
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              padding: "10px 20px",
              fontSize: "0.875rem",
              borderRadius: "8px",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--color-line)",
            borderRadius: "8px",
            padding: "8px 14px",
            color: "var(--color-ink)",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "0.875rem",
          }}
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--color-paper)",
            borderBottom: "1px solid var(--color-line)",
            padding: "20px 24px 28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
          className="mobile-drawer"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.05rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--color-primary)" : "var(--color-ink)",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  backgroundColor: isActive
                    ? "rgba(15, 148, 136, 0.08)"
                    : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary)",
                    }}
                  />
                )}
              </Link>
            );
          })}
          <div style={{ paddingTop: "12px", borderTop: "1px solid var(--color-line)" }}>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "12px 20px",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
