import { navItems, siteConfig } from "@/lib/site";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="brand brand-footer" aria-label="Magnata Imóveis, início"><Image src="/images/mi_logo.png" alt="Magnata Imóveis" width={128} height={128} /></Link><p className="footer-intro">Atendimento imobiliário para comprar, vender ou alugar em Poços de Caldas - MG.</p></div><div><p className="footer-label">Navegue</p><nav className="footer-nav" aria-label="Navegação do rodapé">{navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav></div><div><p className="footer-label">Fale conosco</p><address className="footer-contact"><span><MapPin size={16} aria-hidden="true" />{siteConfig.address.street}<br />{siteConfig.address.locality} - {siteConfig.address.region}, {siteConfig.address.postalCode}</span><a href={`tel:+${siteConfig.whatsappNumber}`}><Phone size={16} aria-hidden="true" />{siteConfig.phone}</a><a href={`https://wa.me/${siteConfig.whatsappNumber}`}><MessageCircle size={16} aria-hidden="true" />WhatsApp <ArrowUpRight size={14} aria-hidden="true" /></a></address></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Magnata Imóveis</span><span>Poços de Caldas · Minas Gerais</span></div></footer>;
}
