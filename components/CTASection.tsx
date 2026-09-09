import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

export function CTASection({ title = "Vamos conversar sobre o seu próximo imóvel?" }: { title?: string }) {
  return <section className="cta-band"><div className="container cta-band-inner"><h2>{title}</h2><a className="button" href={buildWhatsAppLink("Olá! Encontrei a Magnata Imóveis pelo Google e gostaria de conversar sobre um imóvel em Poços de Caldas.")}>Falar pelo WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>;
}
