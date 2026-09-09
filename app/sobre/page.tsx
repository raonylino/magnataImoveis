import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { localBusinessJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Sobre a Magnata Imóveis", description: "Conheça a Magnata Imóveis, estrutura de atendimento imobiliário em Poços de Caldas - MG.", alternates: { canonical: "/sobre" } };

export default function Page() {
  return <>
    <JsonLd data={localBusinessJsonLd()} />
    <section className="inner-hero inner-hero-green inner-hero-image">
      <Image className="inner-hero-background" src="/images/presencial1.jpg" alt="Atendimento presencial da Magnata Imóveis" fill priority sizes="100vw" />
      <div className="inner-hero-image-overlay" />
      <div className="container inner-hero-content">
        <p className="eyebrow">Sobre a Magnata</p>
        <h1>Atendimento imobiliário com presença local.</h1>
        <p className="inner-intro">Uma base profissional para conectar pessoas e oportunidades em Poços de Caldas.</p>
      </div>
    </section>
    <section className="section section-light"><div className="container about-page-grid">
      <div><SectionTitle eyebrow="Quem somos" title="A conversa vem antes da negociação." />
        <p className="body-copy">A Magnata Imóveis atende pessoas interessadas em comprar, vender ou alugar imóveis em Poços de Caldas - MG. O foco é oferecer um contato claro, direto e personalizado.</p>
        <p className="body-copy">Informações profissionais do corretor, como nome, foto, CRECI e trajetória, serão adicionadas assim que forem fornecidas pela empresa.</p>
      </div>
      <div className="info-block"><span className="eyebrow">Dados para completar</span>
        <div className="info-block-content">
          <p>Davi Meira Ribeiro</p>
          <p><strong> Experiência, confiança e dedicação para ajudar você a encontrar seu novo lar.</strong> <br />

            Davi Meira Ribeiro nasceu em Barcarena, no Pará, e vive em Minas Gerais desde os 12 anos. Hoje, atua como corretor de imóveis em Poços de Caldas, trabalhando na comercialização de empreendimentos da VITAL Empreendimentos.

            Ao longo de sua trajetória, já ajudou <strong>mais de 40 famílias a realizarem o sonho </strong> de conquistar seu próprio lar.

            Seu objetivo é entender o que cada cliente procura e oferecer um atendimento próximo, transparente e personalizado.

            Está procurando um imóvel em Poços de Caldas? Fale com o Davi.</p>
        </div>
      </div>
    </div>
    </section>
    <CTASection title="Quer conversar sobre uma decisão imobiliária?" />
  </>;
}
