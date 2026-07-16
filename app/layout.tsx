import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://mehtabsinghsidhu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Applied AI & Decision Intelligence Researcher`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Mehtab Singh Sidhu",
    "Applied AI",
    "Machine Learning",
    "Data Analytics",
    "Decision Intelligence",
    "Data Engineering",
    "Undergraduate Researcher",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Applied AI & Decision Intelligence Researcher`,
    description: profile.tagline,
    siteName: profile.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Applied AI & Decision Intelligence Researcher`,
    description: profile.tagline,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable} dark`}>
      <body className="min-h-screen bg-background font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: "Undergraduate Researcher — Applied AI & Decision Intelligence",
              url: siteUrl,
              sameAs: [profile.social.github, profile.social.linkedin, profile.social.scholar],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
