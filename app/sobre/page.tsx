import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { localBusinessJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Davi Meira Ribeiro | Corretor de imóveis em Poços de Caldas", description: "Conheça Davi Meira Ribeiro, corretor de imóveis em Poços de Caldas - MG, e seu atendimento próximo e personalizado.", alternates: { canonical: "/sobre" } };

export default function Page() {
  return <>
    <JsonLd data={localBusinessJsonLd()} />
    <section className="inner-hero inner-hero-green inner-hero-image">
      <Image className="inner-hero-background" src="/images/presencial1.jpg" alt="Atendimento presencial da Magnata Imóveis" fill priority sizes="100vw" />
      <div className="inner-hero-image-overlay" />
      <div className="container inner-hero-content">
        <p className="eyebrow">Sobre a Magnata</p>
        <h1>Atendimento imobiliário com presença local.</h1>
        <p className="inner-intro">Conheça Davi Meira Ribeiro e seu atendimento imobiliário em Poços de Caldas.</p>
      </div>
    </section>
    <section className="section section-light"><div className="container about-page-grid">
      <div><SectionTitle eyebrow="Sobre Davi Meira Ribeiro" title="A conversa vem antes da negociação." />
        <p className="body-copy">Davi Meira Ribeiro nasceu em Barcarena, no Pará, em 1979. Filho caçula de uma família de dez irmãos, mudou-se para Minas Gerais aos 12 anos, onde construiu sua trajetória pessoal e profissional.</p>
        <p className="body-copy">Hoje, atua como corretor de imóveis em Poços de Caldas, trabalhando na comercialização de empreendimentos da VITAL Empreendimentos.</p>
      </div>
      <div className="info-block"><span className="eyebrow">Atendimento personalizado</span>
        <div className="info-block-content">
          <p>Davi Meira Ribeiro</p>
          <p>Ao longo de sua trajetória, já ajudou mais de 40 famílias a realizarem o sonho de conquistar seu próprio lar.</p>
          <p>Seu objetivo é oferecer um atendimento próximo, transparente e personalizado, entendendo as necessidades de cada cliente para encontrar uma opção adequada.</p>
        </div>
      </div>
    </div>
    </section>
    <CTASection title="Quer conversar sobre uma decisão imobiliária?" />
  </>;
}
