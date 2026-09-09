"use client";

import { MobileMenu } from "@/components/MobileMenu";
import { navItems, siteConfig } from "@/lib/site";
import { Menu, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Magnata Imóveis, início"><Image src="/images/mi_logo.png" alt="Magnata Imóveis" width={94} height={94} priority /></Link><nav className="desktop-nav" aria-label="Navegação principal">{navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><div className="header-actions"><a className="header-whatsapp" href={`https://wa.me/${siteConfig.whatsappNumber}`} aria-label="Falar com a Magnata Imóveis pelo WhatsApp"><MessageCircle size={16} aria-hidden="true" /> WhatsApp</a><button className="mobile-menu-button" type="button" aria-label="Abrir menu de navegação" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={22} aria-hidden="true" /></button></div></div>{menuOpen ? <MobileMenu onClose={() => setMenuOpen(false)} /> : null}</header>;
}
