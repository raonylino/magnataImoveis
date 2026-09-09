import { CTASection } from "@/components/CTASection";
import { EmpreendimentoCard } from "@/components/EmpreendimentoCard";
import { FAQ } from "@/components/FAQ";
import { SectionTitle } from "@/components/SectionTitle";
import { empreendimentos } from "@/lib/empreendimentos";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight, Building2, KeyRound, MapPinned, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const needs = [
  { icon: KeyRound, title: "Comprar um imóvel", text: "Encontre o caminho para comprar com mais clareza.", href: "/comprar-imovel-em-pocos-de-caldas" },
  { icon: Building2, title: "Alugar um imóvel", text: "Converse sobre sua próxima moradia em Poços de Caldas.", href: "/alugar-imovel-em-pocos-de-caldas" },
  { icon: Sparkles, title: "Vender meu imóvel", text: "Apresente seu imóvel para uma negociação bem conduzida.", href: "/contato" },
  { icon: MapPinned, title: "Encontrar um terreno", text: "Fale sobre a área que você procura para o seu projeto.", href: "/terrenos-a-venda-em-pocos-de-caldas" },
];

const services = [
  { number: "01", title: "Compra", text: "Ajuda para encontrar um imóvel de acordo com localização, orçamento e necessidades do cliente.", href: "/comprar-imovel-em-pocos-de-caldas" },
  { number: "02", title: "Venda", text: "Atendimento para proprietários que desejam conversar sobre a venda do seu imóvel.", href: "/contato" },
  { number: "03", title: "Aluguel", text: "Orientação para pessoas procurando imóveis para locação em Poços de Caldas.", href: "/alugar-imovel-em-pocos-de-caldas" },
  { number: "04", title: "Terrenos", text: "Conversa inicial para quem procura terrenos e áreas para o próximo projeto.", href: "/terrenos-a-venda-em-pocos-de-caldas" },
];

export default function Home() {
  return <>
    <section className="hero-shell">
      <div className="hero-grid" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Atendimento local · Poços de Caldas - MG</p>
          <h1>Encontre seu imóvel em Poços de Caldas</h1>
          <p className="hero-lead">Compra, venda e aluguel de imóveis em Poços de Caldas com atendimento personalizado.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={buildWhatsAppLink("Olá! Encontrei a Magnata Imóveis pelo Google e quero encontrar um imóvel em Poços de Caldas.")}>
              <MessageCircle size={18} aria-hidden="true" /> Falar com um corretor</a>
            <a className="button button-quiet" href={buildWhatsAppLink("Olá! Encontrei a Magnata Imóveis pelo Google e quero encontrar um imóvel em Poços de Caldas.")}>Quero encontrar um imóvel <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-proof"><ShieldCheck size={17} aria-hidden="true" />
            <span>Orientação clara para uma decisão imobiliária mais tranquila.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-collage">
            <div className="hero-frame">
              <video className="hero-frame-video" autoPlay loop muted playsInline preload="metadata" aria-hidden="true"><source src="/videos/video2.mp4" type="video/mp4" /></video></div>
            <span className="hero-slice hero-slice-top" />
            <span className="hero-slice hero-slice-bottom" />
            <div className="hero-stamp">
              <span>Magnata</span><strong>Imóveis</strong><small>Poços de Caldas</small>
            </div>
          </div>
          <div className="hero-visual-label">IMÓVEIS<br /><strong>COM PROPÓSITO</strong></div>
        </div></div>
    </section>
    <section className="section section-light" aria-labelledby="necessidade-title">
      <div className="container">
        <SectionTitle eyebrow="Por onde começamos?" title="Seu próximo passo pode ser simples." description="Conte o que você precisa. A Magnata Imóveis ajuda a organizar a busca, a venda ou a locação com atendimento direto pelo WhatsApp." id="necessidade-title" />
        <div className="need-grid">{needs.map((item) => {
          const Icon = item.icon; return <Link className="need-card" href={item.href} key={item.title}>
            <span className="icon-box"><Icon size={20} aria-hidden="true" /></span>
            <span>
              <strong>{item.title}</strong>
              <small>{item.text}</small>
            </span><ArrowUpRight size={18} aria-hidden="true" /></Link>;
        })}
        </div>
      </div>
    </section>
    <section className="section section-ink" aria-labelledby="local-title">
      <div className="container two-column">
        <div>
          <p className="eyebrow eyebrow-gold">Conhecimento local</p>
          <h2 id="local-title">Imóveis em Poços de Caldas para diferentes momentos.</h2>
        </div>
        <div className="body-copy">
          <p>Comprar, vender ou alugar um imóvel envolve escolhas importantes. Por isso, o atendimento começa entendendo sua necessidade, sua localização de interesse e o momento da negociação.</p><p>A Magnata Imóveis atende pessoas que procuram casas, apartamentos, terrenos e imóveis residenciais em Poços de Caldas, com conversa objetiva e acompanhamento próximo.</p>
          <Link className="text-link text-link-light" href="/imoveis-em-pocos-de-caldas">Conheça nosso atendimento em Poços de Caldas <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
    <section className="section section-light" aria-labelledby="services-title">
      <div className="container"><SectionTitle eyebrow="Como podemos ajudar" title="Atendimento para o que você precisa agora." id="services-title" />
        <div className="service-grid">{services.map((item) =>
          <article className="service-card" key={item.number}>
            <span className="service-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link className="text-link" href={item.href}>Saiba mais <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </article>)}
        </div>
      </div>
    </section>
    <section className="section section-ink" aria-labelledby="empreendimentos-title">
      <div className="container">
        <SectionTitle eyebrow="Empreendimentos em destaque" title="Projetos que você pode conhecer agora." description="Conheça alguns dos empreendimentos que estão sendo comercializados pelo nosso atendimento em Poços de Caldas." id="empreendimentos-title" />
        <div className="enterprise-grid">{empreendimentos.map((empreendimento) => <EmpreendimentoCard empreendimento={empreendimento} key={empreendimento.slug} />)}</div>
        <div className="home-enterprise-cta"><Link className="button button-primary" href="/empreendimentos">Conhecer empreendimentos <ArrowUpRight size={17} aria-hidden="true" /></Link><a className="text-link text-link-light" href={buildWhatsAppLink("Olá! Encontrei os empreendimentos da Magnata Imóveis e gostaria de falar com o corretor.")}>Falar com o corretor <MessageCircle size={17} aria-hidden="true" /></a></div>
      </div>
    </section>
    <section className="section section-sand" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="portrait-frame"><Image src="/images/davimagnata.png" alt="Placeholder editável para foto do corretor" fill sizes="(max-width: 768px) 100vw, 40vw" />
        </div>
        <div>
          <p className="eyebrow">Atendimento próximo</p>
          <h2 id="about-title">Uma conversa honesta antes de qualquer decisão.</h2>
          <p className="body-large">A Magnata Imóveis é uma estrutura preparada para conectar pessoas e oportunidades imobiliárias em Poços de Caldas.</p>
          <p className="body-copy">A apresentação do corretor, sua foto, nome, CRECI e trajetória serão adicionados aqui quando essas informações forem fornecidas.</p>
          <div className="placeholder-note">[ NOME E DESCRIÇÃO DO CORRETOR A ADICIONAR ]</div>
          <Link className="button button-dark" href="/sobre">Conheça a Magnata Imóveis <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
    <FAQ />
    <CTASection />
  </>;
}
