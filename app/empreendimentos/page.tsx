import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { EmpreendimentoCard } from "@/components/EmpreendimentoCard";
import { empreendimentos } from "@/lib/empreendimentos";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Empreendimentos em Poços de Caldas", description: "Conheça empreendimentos da Construtora Vital comercializados pelo atendimento da Magnata Imóveis em Poços de Caldas.", alternates: { canonical: "/empreendimentos" } };

export default function Page() {
  return <>
    <section className="inner-hero inner-hero-gold inner-hero-video">
      <video className="enterprise-background-video" autoPlay loop muted playsInline preload="metadata" poster="/images/empreendimentos/open/gallery/gallery-01.jpg" aria-hidden="true">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="inner-hero-video-overlay" />
      <div className="container inner-hero-content"><Breadcrumbs items={[{ label: "Empreendimentos" }]} />
        <p className="eyebrow">Empreendimentos em destaque</p>
        <h1>Projetos para conhecer em Poços de Caldas.</h1>
        <p className="inner-intro">Conheça alguns dos empreendimentos da Vital atualmente comercializados pelo corretor.</p>
      </div>
    </section><section className="section section-light"><div className="container">
      <div className="enterprise-grid">{empreendimentos.map((empreendimento) => <EmpreendimentoCard empreendimento={empreendimento} key={empreendimento.slug} />)}</div>
      <div className="enterprise-contact">
        <p>Consulte disponibilidade e condições atuais com o corretor.</p>
        <a className="button button-dark" href={buildWhatsAppLink("Olá! Encontrei os empreendimentos da Magnata Imóveis e gostaria de saber mais.")}>
          <MessageCircle size={18} aria-hidden="true" /> Falar com o corretor <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </div>
    </section><CTASection title="Quer receber informações sobre os empreendimentos?" />
  </>;
}
