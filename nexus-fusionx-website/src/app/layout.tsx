import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus FusionX - Digital Agency | Website Development & Marketing",
  description: "Nexus FusionX is your digital transformation partner, offering comprehensive website development, SEO management, ad management, and social media management services. We shape the future of digital, one project at a time.",
  keywords: ["digital agency", "website development", "WordPress", "Shopify", "SEO", "social media management", "Meta ads", "Google ads"],
  authors: [{ name: "Nexus FusionX" }],
  openGraph: {
    title: "Nexus FusionX - Digital Agency",
    description: "Your digital transformation partner for website development and marketing services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
