import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Magnata Imóveis | Imobiliária em Poços de Caldas", template: "%s | Magnata Imóveis" },
  description: "Magnata Imóveis em Poços de Caldas atende compra, venda e aluguel de imóveis com foco em casas, apartamentos, terrenos e empreendimentos.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Magnata Imóveis | Imobiliária em Poços de Caldas",
    description: "Compra, venda, aluguel e atendimento imobiliário em Poços de Caldas - MG.",
    images: [{ url: "/images/davimagnata.png", width: 1200, height: 630, alt: "Corretor de imóveis da Magnata Imóveis em Poços de Caldas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnata Imóveis | Imobiliária em Poços de Caldas",
    description: "Compra, venda e aluguel de imóveis em Poços de Caldas com atendimento local.",
    images: ["/images/davimagnata.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
