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
    default: "Teddy NGBANDA | Pasteur, Auteur & Entrepreneur",
    template: "%s | Teddy NGBANDA",
  },
  description:
    "Pasteur principal d'ICC Cotonou, Auteur et Entrepreneur. Restaurer les familles, inspirer la jeunesse et guider vers la destinée en Christ.",
  keywords: [
    "pasteur",
    "auteur chrétien",
    "entrepreneur",
    "foi",
    "famille",
    "jeunesse",
    "destinée",
    "ICC Cotonou",
  ],
  authors: [{ name: "Teddy NGBANDA" }],
  creator: "Teddy NGBANDA",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://teddy-ngbanda.com",
    siteName: "Teddy NGBANDA",
    title: "Teddy NGBANDA | Pasteur, Auteur & Entrepreneur",
    description:
      "Restaurer les familles, inspirer la jeunesse. Une voix dédiée à votre destinée en Christ.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teddy NGBANDA - Pasteur, Auteur & Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teddy NGBANDA | Pasteur, Auteur & Entrepreneur",
    description:
      "Restaurer les familles, inspirer la jeunesse. Une voix dédiée à votre destinée en Christ.",
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
