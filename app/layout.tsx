// @ts-ignore -- Next.js handles global CSS imports at build time.
import "./globals.css";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";

const font = Outfit({ subsets: ["latin"] });
// import { Poppins } from "next/font/google";

// const inter = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// });
import { Toaster } from "@/components/ui/toaster";

import { cn } from "@/lib/utils";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const SITE_CONFIG = {
  name: "Solvex",
  company: "Solvex Inc. Electrical Services",
  url: "https://solvextext.vercel.app",
  twitterHandle: "@solvexelectric",
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - Professional Electrician & Electrical Services`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `Power your home or business safely with ${SITE_CONFIG.name}. Reliable, certified electrical solutions including emergency repairs, wiring installations, panel upgrades, and smart home lighting.`,
  keywords: [
    "electrician services",
    "electrical contractor",
    "emergency electrician",
    "residential electrician",
    "commercial electrical repairs",
    "panel upgrade",
    "home rewiring",
    "smart lighting installation",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.company,

  // Security setting: stops smartphones from wrapping plain text IDs or phone numbers as links
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} - Certified Electrician & Electrical Solutions`,
    description:
      "Expert electrical repairs, installations, and safety inspections for residential and commercial properties.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Professional Electrical Services Dashboard`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - Reliable Electrician & Electrical Services`,
    description:
      "24/7 fast-response electrical maintenance, smart home setups, and licensed contractor services.",
    images: ["/x.png"],
    creator: SITE_CONFIG.twitterHandle,
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
      { url: "/favicon.ico" },
      { url: "/icon16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "")}>
        {/* <body> */}
        <Toaster />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
