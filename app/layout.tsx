import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getGlobalSeoSettings } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const globalSeo = await getGlobalSeoSettings();

  const defaultTitle = globalSeo?.siteTitle ?? "Teddy NGBANDA | Pasteur, Auteur & Entrepreneur";
  const defaultDescription =
    globalSeo?.siteDescription ??
    "Pasteur principal d'ICC Cotonou, Auteur et Entrepreneur. Restaurer les familles, inspirer la jeunesse et guider vers la destinée en Christ.";
  const siteUrl = globalSeo?.siteUrl ?? "https://teddy-ngbanda.com";
  const ogImageUrl = globalSeo?.defaultOgImage
    ? urlForImage(globalSeo.defaultOgImage).width(1200).height(630).url()
    : "/og-image.jpg";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${defaultTitle}`,
    },
    description: defaultDescription,
    keywords: globalSeo?.keywords ?? [
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
      url: siteUrl,
      siteName: "Teddy NGBANDA",
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Teddy NGBANDA - Pasteur, Auteur & Entrepreneur",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [ogImageUrl],
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
}

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
