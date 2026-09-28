"use client";

import React, { useState } from "react";

const projectTypes = [
  "Digital Marketing",
  "Content Creation",
  "Software Development",
  "Physio@Home",
  "Consulting",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "Digital Marketing",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSuccessMessage(data.message);
      setFormData({
        name: "",
        email: "",
        subject: "",
        projectType: "Digital Marketing",
        message: "",
      });
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "An error occurred while sending your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-line)",
        borderRadius: "var(--radius-card)",
        padding: "26px 24px",
        boxShadow: "0 4px 20px -8px rgba(16, 24, 38, 0.06)",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.45rem",
          fontWeight: 700,
          color: "var(--color-ink)",
          marginBottom: "8px",
        }}
      >
        Send Us a Message
      </h3>
      <p
        style={{
          color: "var(--color-muted)",
          fontSize: "0.9375rem",
          marginBottom: "16px",
          lineHeight: 1.5,
        }}
      >
        Fill out the details below and our team in Kathmandu will review your project and get back to you promptly.
      </p>

      {successMessage && (
        <div
          style={{
            backgroundColor: "var(--chip-mint)",
            border: "1px solid #7FAE3A",
            borderRadius: "10px",
            padding: "16px 20px",
            marginBottom: "24px",
            color: "#0C6C42",
          }}
        >
          <div style={{ fontSize: "0.9375rem", lineHeight: 1.5, fontWeight: 500 }}>
            {successMessage}
          </div>
        </div>
      )}

      {errorMessage && (
        <div
          style={{
            backgroundColor: "var(--chip-pink)",
            border: "1px solid #E11D48",
            borderRadius: "10px",
            padding: "16px 20px",
            marginBottom: "24px",
            color: "#9E1C38",
          }}
        >
          <div style={{ fontSize: "0.9375rem", lineHeight: 1.5, fontWeight: 500 }}>
            {errorMessage}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Name and Email Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
          className="form-row-2"
        >
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-ink)",
                marginBottom: "6px",
              }}
            >
              Your Name <span style={{ color: "#E11D48" }}>*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="e.g. Bijay Adhikari"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-card)",
                border: "1px solid var(--color-line)",
                backgroundColor: "var(--color-paper)",
                color: "var(--color-ink)",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              className="dc-input"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-ink)",
                marginBottom: "6px",
              }}
            >
              Email Address <span style={{ color: "#E11D48" }}>*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="bijay@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-card)",
                border: "1px solid var(--color-line)",
                backgroundColor: "var(--color-paper)",
                color: "var(--color-ink)",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              className="dc-input"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              marginBottom: "6px",
            }}
          >
            Subject / Organization
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. New Brand Campaign / Physio Partner"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "var(--radius-card)",
              border: "1px solid var(--color-line)",
              backgroundColor: "var(--color-paper)",
              color: "var(--color-ink)",
              outline: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            className="dc-input"
          />
        </div>

        {/* Project Type as Clickable Pill Tags */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              marginBottom: "8px",
            }}
          >
            Project Type
          </label>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {projectTypes.map((type) => {
              const isSelected = formData.projectType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, projectType: type })}
                  style={{
                    padding: "7px 16px",
                    borderRadius: "9999px",
                    fontSize: "0.8125rem",
                    fontWeight: isSelected ? 700 : 500,
                    backgroundColor: isSelected
                      ? "var(--color-primary)"
                      : "var(--color-paper)",
                    color: isSelected ? "#FFFFFF" : "var(--color-ink)",
                    border: `1px solid ${isSelected ? "var(--color-primary)" : "var(--color-line)"}`,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              marginBottom: "6px",
            }}
          >
            Your Message <span style={{ color: "#E11D48" }}>*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Tell us about your project goals, timelines, or requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "var(--radius-card)",
              border: "1px solid var(--color-line)",
              backgroundColor: "var(--color-paper)",
              color: "var(--color-ink)",
              outline: "none",
              resize: "vertical",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            className="dc-input"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{
              width: "100%",
              padding: "14px 24px",
              fontSize: "1rem",
              fontWeight: 700,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
