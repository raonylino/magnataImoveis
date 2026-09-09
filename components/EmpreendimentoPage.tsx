import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { EmpreendimentoGallery } from "@/components/EmpreendimentoGallery";
import { JsonLd } from "@/components/JsonLd";
import type { Empreendimento } from "@/lib/empreendimentos";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight, Building2, Check, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function EmpreendimentoPage({ empreendimento }: { empreendimento: Empreendimento }) {
  const href = `/empreendimentos/${empreendimento.slug}`;
  const breadcrumb = [
    { label: "Início", href: "/" },
    { label: "Empreendimentos", href: "/empreendimentos" },
    { label: empreendimento.name, href },
  ];

  return <>
    <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
    <section className="enterprise-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: "Empreendimentos", href: "/empreendimentos" }, { label: empreendimento.name }]} />
        <div className="enterprise-hero-grid">
          <div>
            <p className="eyebrow">Empreendimento da Construtora Vital</p>
            <h1>{empreendimento.headline}</h1>
            <p className="enterprise-summary">{empreendimento.summary}</p>
            <p className="enterprise-status">{empreendimento.status}</p>
            <div className="enterprise-actions">
              <a className="button button-primary" href={buildWhatsAppLink(empreendimento.whatsappMessage)}>Quero saber mais sobre o {empreendimento.name} <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="button button-quiet-dark" href={empreendimento.officialUrl} target="_blank" rel="noopener noreferrer">Ver empreendimento na Vital <ExternalLink size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="enterprise-hero-image">
            <Image src={empreendimento.image} alt={`Imagem autorizada do empreendimento ${empreendimento.name}`} fill priority sizes="(max-width: 760px) 100vw, 46vw" />
          </div>
        </div>
      </div>
    </section>
    <section className="section section-light">
      <div className="container enterprise-details">
        <article className="prose-content">
          <p className="enterprise-address"><MapPin size={18} aria-hidden="true" />{empreendimento.address}</p>
          {empreendimento.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="vital-note"><Building2 size={18} aria-hidden="true" />Atualmente, o corretor também atua na comercialização de empreendimentos da Construtora Vital em Poços de Caldas.</p>
          {empreendimento.commercialNotice ? <p className="commercial-notice">{empreendimento.commercialNotice}</p> : null}
        </article>
        <aside className="enterprise-highlights">
          <p className="eyebrow">Características informadas</p>
          <h2>Detalhes do empreendimento</h2>
          <ul className="check-list">{empreendimento.highlights.map((highlight) => <li key={highlight}><Check size={18} aria-hidden="true" />{highlight}</li>)}</ul>
          <Link className="text-link" href="/contato">Falar com a Magnata Imóveis <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </aside>
      </div>
    </section>
    <EmpreendimentoGallery empreendimento={empreendimento} />
    <CTASection title={`Quer informações atuais sobre o ${empreendimento.name}?`} />
  </>;
}
