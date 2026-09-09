import { SeoPage } from "@/components/SeoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imobiliária em Poços de Caldas | Magnata Imóveis",
  description: "A Magnata Imóveis atua em Poços de Caldas com compra, venda, aluguel e atendimento para casas, apartamentos, terrenos e empreendimentos.",
  alternates: { canonical: "/imobiliaria-em-pocos-de-caldas" },
};

export default function Page() {
  return (
    <SeoPage
      eyebrow="Imobiliária em Poços de Caldas"
      title="Imobiliária em Poços de Caldas"
      intro="A Magnata Imóveis oferece atendimento imobiliário para pessoas que querem comprar, vender ou alugar imóveis na cidade."
      paragraphs={[
        "A imobiliária em Poços de Caldas precisa ser clara, próxima e orientada ao que o cliente de fato busca. A Magnata Imóveis atua com esse foco, entendendo a rotina de cada cliente e a melhor forma de apresentar opções relevantes.",
        "Os serviços incluem compra, venda e locação de imóveis, além do acompanhamento de oportunidades em empreendimentos e terrenos. Em uma cidade como Poços de Caldas, a proximidade com o cliente e a boa comunicação ajudam a tornar a decisão mais simples e segura.",
        "Se você busca imóveis em Poços de Caldas, a conversa inicial pode ser o ponto de partida para uma escolha mais ajustada ao seu momento e à sua rotina."
      ]}
      points={[
        "Compra de imóveis em Poços de Caldas",
        "Venda de imóveis com atendimento direto",
        "Aluguel e locação residencial",
        "Casas, apartamentos, terrenos e empreendimentos",
        "Contato rápido pelo WhatsApp"
      ]}
      related={[
        { label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" },
        { label: "Imóveis para alugar", href: "/imoveis-para-alugar-em-pocos-de-caldas" },
        { label: "Empreendimentos", href: "/empreendimentos" },
        { label: "Corretor de imóveis", href: "/corretor-de-imoveis-em-pocos-de-caldas" },
        { label: "Contato", href: "/contato" }
      ]}
      message="Olá! Encontrei a Magnata Imóveis e gostaria de conversar sobre imóveis em Poços de Caldas."
      breadcrumb={[{ label: "Imobiliária" }]}
      imageTone="gold"
      heroImage={{ src: "/images/presencial1.jpg", alt: "Atendimento da Magnata Imóveis em Poços de Caldas" }}
    />
  );
}
