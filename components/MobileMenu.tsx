"use client";

import { navItems } from "@/lib/site";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return <div className="mobile-menu"><div className="mobile-menu-top"><span className="brand"><Image src="/images/mi_logo.png" alt="Magnata Imóveis" width={100} height={100} /></span><button type="button" onClick={onClose} aria-label="Fechar menu de navegação"><X size={22} aria-hidden="true" /></button></div><nav aria-label="Navegação mobile">{navItems.map((item) => <Link href={item.href} key={item.href} onClick={onClose}>{item.label}</Link>)}</nav></div>;
}
