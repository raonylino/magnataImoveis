import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/structured-data";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Contato | Magnata Imóveis", description: "Fale com a Magnata Imóveis pelo WhatsApp ou telefone. Atendimento para compra, venda e aluguel em Poços de Caldas - MG.", alternates: { canonical: "/contato" } };

export default function Page() { return <><JsonLd data={localBusinessJsonLd()} /><section className="inner-hero inner-hero-gold inner-hero-image"><Image className="inner-hero-background" src="/images/contato.jpg" alt="Atendimento da Magnata Imóveis" fill priority sizes="100vw" /><div className="inner-hero-image-overlay" /><div className="container inner-hero-content"><p className="eyebrow">Contato</p><h1>Vamos conversar sobre o que você procura?</h1><p className="inner-intro">Escolha o canal mais simples para falar com a Magnata Imóveis.</p></div></section><section className="section section-light"><div className="container contact-grid"><div><p className="eyebrow">Atendimento direto</p><h2>Uma mensagem pode ser o começo.</h2><p className="body-copy">Não é necessário preencher um formulário longo. Envie uma mensagem contando se você quer comprar, vender ou alugar um imóvel.</p><a className="button button-dark" href={`https://wa.me/${siteConfig.whatsappNumber}`}><MessageCircle size={18} aria-hidden="true" /> Falar pelo WhatsApp</a></div><div className="contact-details"><a href={`tel:+${siteConfig.whatsappNumber}`}><Phone size={21} aria-hidden="true" /><span><strong>Telefone / WhatsApp</strong><small>{siteConfig.phone}</small></span></a><div><MapPin size={21} aria-hidden="true" /><span><strong>Endereço</strong><small>{siteConfig.address.street}<br />{siteConfig.address.locality} - {siteConfig.address.region}<br />{siteConfig.address.postalCode}</small></span></div></div></div></section><CTASection title="Conte o que você precisa encontrar." /></>; }
