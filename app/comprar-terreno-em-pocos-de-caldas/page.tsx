import { SeoPage } from "@/components/SeoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprar terreno em Poços de Caldas | Magnata Imóveis",
  description: "Saiba como a Magnata Imóveis pode orientar a busca por terrenos em Poços de Caldas para o seu próximo projeto ou investimento.",
  alternates: { canonical: "/comprar-terreno-em-pocos-de-caldas" },
};

export default function Page() {
  return (
    <SeoPage
      eyebrow="Comprar terreno"
      title="Comprar terreno em Poços de Caldas"
      intro="Se a ideia é construir, investir ou planejar o próximo passo, a busca por terras e terrenos exige atenção à localização e ao objetivo do projeto."
      paragraphs={[
        "Comprar terreno em Poços de Caldas pede uma análise cuidadosa da área, do bairro ou região de interesse e da finalidade do imóvel. Uma conversa inicial ajuda a entender o projeto, a necessidade de espaço e as prioridades reais do cliente.",
        "A Magnata Imóveis pode orientar a busca por terrenos em Poços de Caldas com informações úteis e uma abordagem focada em clareza para o cliente."
      ]}
      points={[
        "Pesquisa por terrenos em Poços de Caldas",
        "Conversa sobre objetivo do projeto",
        "Auxílio para comparar opções",
        "Contato direto pelo WhatsApp"
      ]}
      related={[
        { label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" },
        { label: "Terrenos à venda", href: "/terrenos-a-venda-em-pocos-de-caldas" },
        { label: "Casas à venda", href: "/casas-a-venda-em-pocos-de-caldas" },
        { label: "Empreendimentos", href: "/empreendimentos" }
      ]}
      message="Olá! Encontrei a Magnata Imóveis pelo Google e quero conversar sobre a compra de um terreno em Poços de Caldas."
      breadcrumb={[{ label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" }, { label: "Comprar terreno" }]}
      imageTone="green"
    />
  );
}
