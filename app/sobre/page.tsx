import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { localBusinessJsonLd } from "@/lib/structured-data";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre a Magnata Imóveis",
  description: "Conheça a Magnata Imóveis em Poços de Caldas e o atendimento de compra, venda, aluguel e empreendimentos. ",
  alternates: { canonical: "/sobre" },
};

export default function Page() {
  return <>
    <JsonLd data={localBusinessJsonLd()} />
    <section className="inner-hero inner-hero-green inner-hero-image">
      <Image className="inner-hero-background" src="/images/presencial1.jpg" alt="Atendimento presencial da Magnata Imóveis em Poços de Caldas" fill priority sizes="100vw" />
      <div className="inner-hero-image-overlay" />
      <div className="container inner-hero-content">
        <p className="eyebrow">Sobre a Magnata</p>
        <h1>Sobre a Magnata Imóveis</h1>
        <p className="inner-intro">Atendimento imobiliário com presença local em Poços de Caldas.</p>
      </div>
    </section>
    <section className="section section-light"><div className="container about-page-grid">
      <div>
        <SectionTitle eyebrow="Sobre o corretor" title="A conversa vem antes da negociação." />
        <p className="body-copy">Davi Meira Ribeiro atua com foco em atendimento próximo, transparente e personalizado para clientes que buscam comprar, vender ou alugar imóveis em Poços de Caldas.</p>
        <p className="body-copy">O trabalho da Magnata Imóveis é orientado pela necessidade real de cada cliente, olhando para localização, momento e objetivos de quem busca uma mudança ou uma oportunidade imobiliária.</p>
      </div>
      <div className="info-block"><span className="eyebrow">Atuação em Poços de Caldas</span>
        <div className="info-block-content">
          <p>Magnata Imóveis</p>
          <p>O atendimento contempla casas, apartamentos, terrenos e empreendimentos, com conversa direta e orientação para as etapas mais importantes da decisão.</p>
          <p>Para quem procura uma solução imobiliária em Poços de Caldas, a ideia é simplificar o processo e tornar a busca mais clara.</p>
        </div>
      </div>
    </div>
    </section>
    <section className="section section-light">
      <div className="container">
        <SectionTitle eyebrow="Como podemos ajudar" title="Atendimento para quem busca uma solução imobiliária clara." />
        <div className="service-grid">
          <article className="service-card">
            <span className="service-number">01</span>
            <h3>Compra</h3>
            <p>Orientação para clientes que desejam conhecer opções disponíveis em Poços de Caldas.</p>
          </article>
          <article className="service-card">
            <span className="service-number">02</span>
            <h3>Venda</h3>
            <p>Atendimento para proprietários que querem conversar sobre a venda do seu imóvel.</p>
          </article>
          <article className="service-card">
            <span className="service-number">03</span>
            <h3>Aluguel</h3>
            <p>Auxílio para quem busca um imóvel para morar ou investir em Poços de Caldas.</p>
          </article>
        </div>
        <div className="home-enterprise-cta">
          <a className="button button-dark" href="/contato">Falar com a Magnata Imóveis</a>
          <a className="text-link" href="/comprar-imovel-em-pocos-de-caldas">Comprar imóvel</a>
        </div>
      </div>
    </section>
    <CTASection title="Quer conversar sobre uma decisão imobiliária em Poços de Caldas?" />
  </>;
}
