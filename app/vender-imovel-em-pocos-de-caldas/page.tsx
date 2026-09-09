import { SeoPage } from "@/components/SeoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vender imóvel em Poços de Caldas",
  description: "Converse com Davi Meira Ribeiro sobre a venda do seu imóvel em Poços de Caldas - MG, com atendimento próximo e transparente.",
  alternates: { canonical: "/vender-imovel-em-pocos-de-caldas" },
};

export default function Page() {
  return <SeoPage
    eyebrow="Venda de imóveis"
    title="Quer vender seu imóvel em Poços de Caldas?"
    intro="Converse com Davi Meira Ribeiro sobre a venda da sua casa, apartamento ou terreno."
    paragraphs={[
      "Vender um imóvel começa por uma boa conversa. Conte qual é o tipo de imóvel, em que momento está a decisão e o que você espera do atendimento.",
      "Davi Meira Ribeiro oferece um contato direto para proprietários que desejam conversar sobre a venda de casas, apartamentos ou terrenos em Poços de Caldas, com atenção às necessidades de cada caso.",
    ]}
    points={[
      "Conversa inicial sobre o imóvel e seus objetivos",
      "Atendimento para casas, apartamentos e terrenos",
      "Orientação transparente sobre os próximos passos",
      "Contato direto pelo WhatsApp",
    ]}
    related={[
      { label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" },
      { label: "Casas à venda", href: "/casas-a-venda-em-pocos-de-caldas" },
      { label: "Apartamentos à venda", href: "/apartamentos-a-venda-em-pocos-de-caldas" },
      { label: "Fale com Davi", href: "/contato" },
    ]}
    message="Olá! Encontrei a Magnata Imóveis pelo Google e gostaria de conversar sobre a venda do meu imóvel em Poços de Caldas."
    breadcrumb={[{ label: "Vender imóvel" }]}
    imageTone="green"
  />;
}
