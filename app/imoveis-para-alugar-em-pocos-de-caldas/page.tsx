import { SeoPage } from "@/components/SeoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imóveis para alugar em Poços de Caldas | Magnata Imóveis",
  description: "Consulte a Magnata Imóveis para encontrar imóveis para alugar em Poços de Caldas com atendimento personalizado.",
  alternates: { canonical: "/imoveis-para-alugar-em-pocos-de-caldas" },
};

export default function Page() {
  return (
    <SeoPage
      eyebrow="Imóveis para alugar"
      title="Imóveis para alugar em Poços de Caldas"
      intro="A busca por um imóvel para alugar em Poços de Caldas fica mais clara quando a conversa parte de suas necessidades reais."
      paragraphs={[
        "Alugar um imóvel envolve considerar rotina, preferências de localização e as condições que fazem sentido para cada pessoa. A Magnata Imóveis atende clientes que querem conhecer opções para locação em Poços de Caldas com mais organização e clareza.",
        "Se você está procurando casa ou apartamento para alugar, a conversa inicial ajuda a remontar o perfil da busca e a separar as opções mais adequadas antes de avançar em visitas ou negociações."
      ]}
      points={[
        "Atendimento para imóveis para alugar",
        "Orientação sobre localização e rotina",
        "Apoio para comparar opções",
        "Contato direto pelo WhatsApp"
      ]}
      related={[
        { label: "Alugar imóvel", href: "/alugar-imovel-em-pocos-de-caldas" },
        { label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" },
        { label: "Empreendimentos", href: "/empreendimentos" },
        { label: "Contato", href: "/contato" }
      ]}
      message="Olá! Encontrei a Magnata Imóveis pelo Google e quero conversar sobre imóveis para alugar em Poços de Caldas."
      breadcrumb={[{ label: "Imóveis para alugar" }]}
      imageTone="sand"
    />
  );
}
