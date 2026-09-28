/** Emoji icons mapped to card/section titles per assignment spec semantics */

const iconsByTitle: Record<string, string> = {
  // Home — feature strip
  "Growth-Driven": "📈",
  "Creative-First": "🎨",
  "Tech-Powered": "⚡",
  "Client-Centric": "🤝",

  // Home — service teasers
  "Digital Marketing": "📣",
  "Content Creation": "🎬",
  "Software Dev": "💻",
  "Software Development": "💻",
  "Branding & Design": "✨",

  // Home — products
  "Eco Creative Marketing Agency": "🌱",
  "One Content Creation Studio": "🎬",
  "Physio@Home": "🏥",

  // Sectors & industries
  "Healthcare & Clinics": "🏥",
  Healthcare: "🏥",
  "E-Commerce & Retail": "🛒",
  "E-Commerce": "🛒",
  "Real Estate & Architecture": "🏢",
  "Real Estate": "🏢",
  "Education & EdTech": "📚",
  Education: "📚",
  "Tourism & Hospitality": "🏔️",
  Tourism: "🏔️",
  "Media & Publishing": "📰",
  Media: "📰",

  // About — values
  Passion: "❤️",
  Creativity: "💡",
  Excellence: "⭐",
  Collaboration: "🤝",

  // About — trust
  "ISO 9001 Ready": "✅",
  "Data Protection": "🔒",
  "Global Delivery": "🌍",
  "Pan-Nepal Network": "🇳🇵",

  // Services — why work with us
  "Dedicated Project Manager": "👤",
  "Agile Development Cycle": "🔄",
  "Transparent Pricing": "💰",
  "Post-Launch Support": "🛟",
  "Scalable Architecture": "📐",
  "Cross-Platform Expertise": "🔗",

  // Services — sub-services
  "SEO & SEM": "🔍",
  "Social Media Marketing": "📱",
  "Paid Advertising": "💸",
  "Analytics & Reporting": "📊",
  "Brand Storytelling": "📖",
  "Video Production": "🎥",
  "Graphic Design": "🎨",
  "Copywriting & PR": "✍️",
  "Web & Mobile Apps": "📱",
  "Health-Tech Systems": "🏥",
  "Cloud & API Integration": "☁️",
  "Maintenance & QA": "🛡️",

  // Contact
  "Our Headquarters": "📍",
  "Direct Email": "✉️",
  "Direct Phone": "📞",
  "Business Hours": "🕐",
  "Marketing & Growth": "📣",
  "Content Studio": "🎬",
  "Business Development": "🤝",

  // About — mission & vision cards
  "Our Mission": "🎯",
  "Our Vision": "🔭",

  // Service categories
  "Content Creation Studio": "🎬",
};

const iconsByStatLabel: Record<string, string> = {
  "Ventures & Products": "📦",
  "3 Products": "📦",
  Products: "📦",
  "Team Members in KTM": "👥",
  "6+ Team Members": "👥",
  "Client Commitment": "💯",
  "100% Commitment": "💯",
  "Projects Delivered": "🚀",
  "Happy Clients": "😊",
  "Content Views": "👁️",
  "Client Retention": "🤝",
};

export function getIconForTitle(title: string): string {
  return iconsByTitle[title] ?? "◆";
}

export function getIconForStatLabel(label: string): string {
  for (const [key, icon] of Object.entries(iconsByStatLabel)) {
    if (label.includes(key) || key.includes(label)) {
      return icon;
    }
  }
  if (label.toLowerCase().includes("product")) return "📦";
  if (label.toLowerCase().includes("team")) return "👥";
  if (label.toLowerCase().includes("commitment")) return "💯";
  return "◆";
}
