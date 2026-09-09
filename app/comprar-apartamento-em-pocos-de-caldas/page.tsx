import { SeoPage } from "@/components/SeoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprar apartamento em Poços de Caldas | Magnata Imóveis",
  description: "Converse com a Magnata Imóveis sobre a compra de apartamento em Poços de Caldas e encontre a melhor opção para sua rotina.",
  alternates: { canonical: "/comprar-apartamento-em-pocos-de-caldas" },
};

export default function Page() {
  return (
    <SeoPage
      eyebrow="Comprar apartamento"
      title="Comprar apartamento em Poços de Caldas"
      intro="Uma busca por apartamento em Poços de Caldas começa entendendo o que importa na sua rotina e no seu orçamento."
      paragraphs={[
        "Comprar um apartamento envolve avaliar localização, espaço, mobilidade e também o momento em que a pessoa está. Por isso, o primeiro passo é ouvir o que realmente faz sentido para cada cliente.",
        "A Magnata Imóveis orienta a busca por apartamentos em Poços de Caldas com foco em contexto, objetivos e conforto do cliente. A conversa ajuda a filtrar as melhores opções e organizar a próxima etapa com mais clareza."
      ]}
      points={[
        "Atendimento para apartamento em Poços de Caldas",
        "Conversa sobre localização e rotina",
        "Apoio para comparar opções relevantes",
        "Contato direto pelo WhatsApp"
      ]}
      related={[
        { label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" },
        { label: "Apartamentos à venda", href: "/apartamentos-a-venda-em-pocos-de-caldas" },
        { label: "Casas à venda", href: "/casas-a-venda-em-pocos-de-caldas" },
        { label: "Empreendimentos", href: "/empreendimentos" }
      ]}
      message="Olá! Encontrei a Magnata Imóveis pelo Google e quero conversar sobre a compra de um apartamento em Poços de Caldas."
      breadcrumb={[{ label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" }, { label: "Comprar apartamento" }]}
      imageTone="sand"
    />
  );
}
