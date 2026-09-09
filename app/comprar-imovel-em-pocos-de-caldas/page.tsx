import { SeoPage } from "@/components/SeoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprar imóvel em Poços de Caldas | Magnata Imóveis",
  description: "Encontre orientação para comprar imóvel em Poços de Caldas com a Magnata Imóveis, incluindo casas, apartamentos, terrenos e consultoria local.",
  alternates: { canonical: "/comprar-imovel-em-pocos-de-caldas" },
};

export default function Page() {
  return (
    <SeoPage
      eyebrow="Compra de imóveis"
      title="Comprar imóvel em Poços de Caldas"
      intro="Conte o que você procura e organize os próximos passos com atendimento personalizado para comprar imóvel na cidade."
      paragraphs={[
        "Comprar um imóvel em Poços de Caldas exige atenção à localização, ao orçamento e ao tipo de imóvel que realmente faz sentido para a rotina de cada cliente.",
        "A Magnata Imóveis atende clientes que desejam comprar casas, apartamentos, terrenos e outros imóveis com uma conversa inicial simples e objetiva. O objetivo é reduzir ruído e direcionar a busca para opções mais relevantes.",
        "Além da busca por imóveis, o atendimento também pode incluir orientação sobre empreendimentos e propriedades em diferentes perfis de necessidade."
      ]}
      points={["Compra de casas, apartamentos e terrenos", "Atendimento para clientes em Poços de Caldas", "Conversa sobre localização, orçamento e prioridades", "Contato direto pelo WhatsApp"]}
      related={[{ label: "Casas à venda", href: "/casas-a-venda-em-pocos-de-caldas" }, { label: "Apartamentos à venda", href: "/apartamentos-a-venda-em-pocos-de-caldas" }, { label: "Terrenos à venda", href: "/terrenos-a-venda-em-pocos-de-caldas" }, { label: "Empreendimentos", href: "/empreendimentos" }]}
      message="Olá! Encontrei a Magnata Imóveis pelo Google e estou procurando um imóvel para comprar em Poços de Caldas."
      breadcrumb={[{ label: "Comprar imóvel" }]}
      imageTone="gold"
      heroImage={{ src: "/images/construindo1.jpg", alt: "Imóvel em Poços de Caldas" }}
    />
  );
}
