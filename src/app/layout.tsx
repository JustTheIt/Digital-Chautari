import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Digital Chautari | Creative Technology in Kathmandu, Nepal",
  description:
    "Digital Chautari is a premier creative technology company in Kathmandu, Nepal, offering high-impact digital marketing, cinematic content creation, and health-tech software.",
  keywords: [
    "Digital Chautari",
    "Digital Marketing Nepal",
    "Content Creation Kathmandu",
    "Health-Tech Nepal",
    "Physio@Home",
    "Creative Technology Agency",
  ],
  authors: [{ name: "Digital Chautari Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
          <ScrollReveal />
        </main>
        <Footer />
      </body>
    </html>
  );
}
