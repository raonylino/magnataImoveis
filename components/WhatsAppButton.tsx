import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return <a className="whatsapp-float" href={buildWhatsAppLink("Olá! Encontrei a Magnata Imóveis pelo Google e gostaria de falar sobre um imóvel em Poços de Caldas.")} aria-label="Falar com a Magnata Imóveis pelo WhatsApp"><MessageCircle size={20} aria-hidden="true" /><span>Falar pelo WhatsApp</span></a>;
}
