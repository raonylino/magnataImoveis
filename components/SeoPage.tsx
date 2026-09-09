import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SeoPageProps = { eyebrow: string; title: string; intro: string; paragraphs: string[]; points: string[]; related: { label: string; href: string }[]; message: string; imageTone?: "green" | "sand" | "gold"; heroImage?: { src: string; alt: string }; breadcrumb: { label: string; href?: string }[] };

export function SeoPage({ eyebrow, title, intro, paragraphs, points, related, message, imageTone = "green", heroImage, breadcrumb }: SeoPageProps) {
  const breadcrumbItems = [{ label: "Início", href: "/" }, ...breadcrumb.map((item) => ({ label: item.label, href: item.href || "#" }))];
  return <><JsonLd data={breadcrumbJsonLd(breadcrumbItems)} /><section className={`inner-hero inner-hero-${imageTone} ${heroImage ? "inner-hero-image" : ""}`}>{heroImage ? <><Image className="inner-hero-background" src={heroImage.src} alt={heroImage.alt} fill priority sizes="100vw" /><div className="inner-hero-image-overlay" /></> : null}<div className="container inner-hero-content"><Breadcrumbs items={breadcrumb} /><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="inner-intro">{intro}</p></div></section><section className="section section-light"><div className="container content-layout"><article className="prose-content">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h2>Um atendimento que começa pela sua necessidade</h2><ul className="check-list">{points.map((point) => <li key={point}><Check size={18} aria-hidden="true" />{point}</li>)}</ul><a className="button button-dark" href={buildWhatsAppLink(message)}>Conversar pelo WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></a></article><aside className="related-panel"><SectionTitle eyebrow="Continue sua pesquisa" title="Outros caminhos" />{related.map((item) => <Link className="related-link" href={item.href} key={item.href}><span>{item.label}</span><ArrowUpRight size={17} aria-hidden="true" /></Link>)}</aside></div></section><CTASection title="Fale sobre o imóvel que você procura." /></>;
}
