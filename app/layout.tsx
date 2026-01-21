import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";

const siteUrl = "https://damienchristian.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Damien Christian",
  url: siteUrl,
  jobTitle: "Front-end  Engineer",
  sameAs: ["https://www.linkedin.com/in/damienchristian"],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damien Christian | Front-end Engineer",
  description:
    "Front-end engineer crafting performant, accessible experiences with React, Next.js, and applied AI.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Damien Christian",
    "Front-end Engineer",
    "React",
    "Next.js",
    "AI Engineer",
    "UI Developer",
  ],
  authors: [{ name: "Damien Christian" }],
  openGraph: {
    title: "Damien Christian | Front-end & Applied AI Engineer",
    description:
      "Front-end engineer crafting performant, accessible experiences with React, Next.js, and applied AI.",
    url: "https://damienchristian.com",
    siteName: "Damien Christian Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damien Christian | Front-end & Applied AI Engineer",
    description:
      "Front-end engineer crafting performant, accessible experiences with React, Next.js, and applied AI.",
  },
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon_io/favicon.ico"],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased text-foreground`}>
        <Script
          id="person-ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
