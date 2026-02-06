import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teddy-ngbanda.com"),
  title: {
    default: "Teddy NGBANDA | Pasteur, Auteur & Conférencier",
    template: "%s | Teddy NGBANDA",
  },
  description:
    "Pasteur, Auteur et Conférencier international. Accompagnant les leaders, les familles et les communautés vers leur plein potentiel en Christ.",
  keywords: [
    "pasteur",
    "auteur chrétien",
    "conférencier",
    "leadership",
    "spiritualité",
    "Afrique",
    "diaspora",
    "enseignements bibliques",
  ],
  authors: [{ name: "Teddy NGBANDA" }],
  creator: "Teddy NGBANDA",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://teddy-ngbanda.com",
    siteName: "Teddy NGBANDA",
    title: "Teddy NGBANDA | Pasteur, Auteur & Conférencier",
    description:
      "Inspirer les cœurs, transformer les nations. Une voix prophétique pour cette génération.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teddy NGBANDA - Pasteur, Auteur & Conférencier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teddy NGBANDA | Pasteur, Auteur & Conférencier",
    description:
      "Inspirer les cœurs, transformer les nations. Une voix prophétique pour cette génération.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
