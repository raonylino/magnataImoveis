import { SeoPage } from "@/components/SeoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corretor de Imóveis em Poços de Caldas | Magnata Imóveis",
  description: "Atendimento de compra, venda e aluguel de imóveis em Poços de Caldas com a Magnata Imóveis.",
  alternates: { canonical: "/corretor-de-imoveis-em-pocos-de-caldas" },
};

export default function Page() {
  return (
    <SeoPage
      eyebrow="Corretor em Poços de Caldas"
      title="Corretor de Imóveis em Poços de Caldas"
      intro="Atendimento personalizado para quem quer comprar, vender ou alugar imóveis em Poços de Caldas com clareza e proximidade."
      paragraphs={[
        "A Magnata Imóveis atua com um atendimento focado em entender a necessidade real de cada cliente antes de indicar opções de imóveis em Poços de Caldas.",
        "Na rotina da cidade, a compra de imóveis, a venda de propriedades e a locação exigem atenção à localização, ao orçamento e ao momento de cada pessoa. Por isso, o trabalho começa por uma conversa clara sobre o que cada cliente precisa encontrar e quais critérios fazem sentido para a decisão.",
        "A atuação inclui casas, apartamentos, terrenos e oportunidades em empreendimentos, sempre com orientação para a etapa mais adequada ao perfil do cliente."
      ]}
      points={[
        "Atendimento para compra de imóveis em Poços de Caldas",
        "Orientação para venda de casas, apartamentos e terrenos",
        "Consultas para aluguel e locação residencial",
        "Contato direto pelo WhatsApp para um atendimento mais ágil",
        "Acompanhamento em casas, apartamentos, terrenos e empreendimentos"
      ]}
      related={[
        { label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" },
        { label: "Alugar imóvel", href: "/alugar-imovel-em-pocos-de-caldas" },
        { label: "Empreendimentos", href: "/empreendimentos" },
        { label: "Sobre a Magnata", href: "/sobre" },
        { label: "Contato", href: "/contato" }
      ]}
      message="Olá! Encontrei a Magnata Imóveis pelo Google e quero conversar sobre compra, venda ou aluguel de imóveis em Poços de Caldas."
      breadcrumb={[{ label: "Corretor de imóveis" }]}
      imageTone="green"
      heroImage={{ src: "/images/davimagnata.png", alt: "Corretor de imóveis da Magnata Imóveis em Poços de Caldas" }}
    />
  );
}
