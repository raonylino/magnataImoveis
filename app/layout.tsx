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
  title: { default: "Magnata Imóveis | Imóveis em Poços de Caldas", template: "%s | Magnata Imóveis" },
  description: "Compra, venda e aluguel de imóveis em Poços de Caldas - MG com atendimento personalizado da Magnata Imóveis.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", url: siteConfig.url, siteName: siteConfig.name, title: "Magnata Imóveis | Imóveis em Poços de Caldas", description: "Atendimento imobiliário para comprar, vender ou alugar em Poços de Caldas.", images: [{ url: "/images/og-placeholder.svg", width: 1200, height: 630, alt: "Magnata Imóveis" }] },
  twitter: { card: "summary_large_image", title: "Magnata Imóveis | Imóveis em Poços de Caldas", description: "Compra, venda e aluguel com atendimento local.", images: ["/images/og-placeholder.svg"] },
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
