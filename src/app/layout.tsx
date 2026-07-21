import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Campus Microgreens & Nutrition Initiative (CMNI) | MicroBloom",
  description: "Building India's First University-Based Nutrition, Research & Innovation Ecosystem. Founded by Kanchan N, Pilot Campus: Manipur University.",
  manifest: "/manifest.json",
  keywords: ["CMNI", "Microgreens", "Campus Nutrition", "Manipur University", "MicroBloom Enterprises", "Kanchan N", "AgTech India", "Sustainable Agriculture", "Student Wellness"],
  authors: [{ name: "Kanchan N", url: "https://microbloom.in" }],
  openGraph: {
    type: "website",
    title: "Campus Microgreens & Nutrition Initiative (CMNI)",
    description: "Building India's First University-Based Nutrition, Research & Innovation Ecosystem.",
    siteName: "CMNI",
    images: [{ url: "https://cmni-orcin.vercel.app/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Microgreens & Nutrition Initiative",
    description: "India's First University-Based Nutrition & AgTech Ecosystem.",
    images: ["https://cmni-orcin.vercel.app/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f3d2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Campus Microgreens & Nutrition Initiative (CMNI)",
              "alternateName": "CMNI",
              "founder": {
                "@type": "Person",
                "name": "Kanchan N"
              },
              "parentOrganization": {
                "@type": "Organization",
                "name": "MicroBloom Enterprises"
              },
              "location": {
                "@type": "Place",
                "name": "Manipur University"
              },
              "description": "Building India's First University-Based Nutrition, Research & Innovation Ecosystem",
              "url": "https://cmni-orcin.vercel.app"
            })
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-mint/30 selection:text-forest-dark overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
