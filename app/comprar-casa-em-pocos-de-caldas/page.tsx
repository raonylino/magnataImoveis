import { SeoPage } from "@/components/SeoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprar casa em Poços de Caldas | Magnata Imóveis",
  description: "Descubra como a Magnata Imóveis ajuda na busca por casas à venda em Poços de Caldas com atendimento personalizado.",
  alternates: { canonical: "/comprar-casa-em-pocos-de-caldas" },
};

export default function Page() {
  return (
    <SeoPage
      eyebrow="Comprar casa"
      title="Comprar casa em Poços de Caldas"
      intro="Se a opção ideal é uma casa, a busca precisa considerar espaço, conforto e a rotina de quem vai morar no imóvel."
      paragraphs={[
        "Para quem quer comprar uma casa em Poços de Caldas, é importante entender quais critérios realmente importam: número de quartos, área, localização, necessidade de garagem, quintal ou proximidade com serviços e rotina.",
        "A Magnata Imóveis conversa com o cliente antes de orientar a busca, ajudando a organizar as opções e a decidir o próximo passo com mais clareza. A abordagem é prática, direta e pensada para a realidade imobiliária local."
      ]}
      points={[
        "Busca por casas em Poços de Caldas",
        "Orientação por perfil e orçamento",
        "Acompanhamento de opções relevantes",
        "Contato rápido pelo WhatsApp"
      ]}
      related={[
        { label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" },
        { label: "Casas à venda", href: "/casas-a-venda-em-pocos-de-caldas" },
        { label: "Terrenos à venda", href: "/terrenos-a-venda-em-pocos-de-caldas" },
        { label: "Contato", href: "/contato" }
      ]}
      message="Olá! Encontrei a Magnata Imóveis pelo Google e quero conversar sobre a compra de uma casa em Poços de Caldas."
      breadcrumb={[{ label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" }, { label: "Comprar casa" }]}
      imageTone="gold"
    />
  );
}
