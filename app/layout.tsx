import type { Metadata, Viewport } from "next";
import "./globals.css";

const BASE_URL = "https://www.pmsglobalelites.in";

export const viewport: Viewport = {
  themeColor: "#C9A84C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "PMS Global Elites | Professional Accounting & Financial Services India",
    template: "%s | PMS Global Elites",
  },
  description:
    "PMS Global Elites is an India-based professional accounting and financial services firm. We offer bookkeeping, GST filing, bank reconciliation, MIS reporting, tax support, and financial consulting for SMEs, startups, and entrepreneurs — fully remote.",
  keywords: [
    "PMS Global Elites",
    "pmsglobalelites.in",
    "professional accounting firm India",
    "bookkeeping services India",
    "GST filing support India",
    "bank reconciliation service India",
    "MIS reporting India",
    "financial services SME India",
    "accounting for startups India",
    "remote accounting services India",
    "cash flow management India",
    "online accounting firm India",    
    "financial consulting India",
    "accounts outsourcing India",
    "tax accounting India",
  ],

  authors: [{ name: "PMS Global Elites", url: BASE_URL }],
  creator: "PMS Global Elites",
  publisher: "PMS Global Elites",
  category: "Accounting & Financial Services",

  alternates: { canonical: BASE_URL },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "PMS Global Elites",
    title: "PMS Global Elites | Professional Accounting & Financial Services India",
    description:
      "Expert bookkeeping, GST filing, MIS reporting & financial consulting for SMEs and startups across India. Reliable. Professional. Fully remote.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PMS Global Elites — Professional Accounting & Financial Services",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PMS Global Elites | Accounting & Financial Services India",
    description:
      "Bookkeeping, GST, bank reconciliation & MIS reporting for SMEs and startups. India-based, remote-first accounting firm.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "qZCeGfC2yUrCyaUOoMLDxJLHIi7t5qnPqrncsW_dY0w",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "AccountingService",
                  "@id": `${BASE_URL}/#organization`,
                  name: "PMS Global Elites",
                  alternateName: "PMS",
                  url: BASE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${BASE_URL}/NEW_LOGO.png`,
                    width: 400,
                    height: 200,
                  },
                  image: `${BASE_URL}/og-image.png`,
                  description:
                    "Professional accounting and financial services firm offering bookkeeping, GST filing, MIS reporting, bank reconciliation and financial consulting remotely across India.",
                  foundingDate: "2026-01-19",
                  areaServed: "IN",
                  email: "krishnasubash2004@gmail.com",
                  telephone: "+919790993541",
                  priceRange: "₹₹",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Accounting & Financial Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Bookkeeping Services",
                          description: "Day-to-day bookkeeping and ledger management for SMEs and startups.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "GST Filing & Support",
                          description: "GST data preparation, filing assistance and compliance support.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Bank Reconciliation",
                          description: "Accurate and timely bank reconciliation statements for businesses.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "MIS Reporting",
                          description: "Management information system reports for business decision-making.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Cash Flow Management",
                          description: "Cash flow forecasting and management for financial stability.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Financial Consulting",
                          description: "Strategic financial consulting for startups and growing businesses.",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: "PMS Global Elites",
                  publisher: { "@id": `${BASE_URL}/#organization` },
                },
                {
                  "@type": "WebPage",
                  "@id": `${BASE_URL}/#webpage`,
                  url: BASE_URL,
                  name: "PMS Global Elites | Professional Accounting & Financial Services India",
                  isPartOf: { "@id": `${BASE_URL}/#website` },
                  about: { "@id": `${BASE_URL}/#organization` },
                  description:
                    "India-based accounting firm offering bookkeeping, GST, MIS reporting and financial consulting remotely.",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}