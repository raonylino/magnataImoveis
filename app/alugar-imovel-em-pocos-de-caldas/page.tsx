import { SeoPage } from "@/components/SeoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alugar imóvel em Poços de Caldas | Magnata Imóveis",
  description: "Consulta de imóveis para alugar em Poços de Caldas com atendimento da Magnata Imóveis para casas, apartamentos e locação residencial.",
  alternates: { canonical: "/alugar-imovel-em-pocos-de-caldas" },
};

export default function Page() {
  return (
    <SeoPage
      eyebrow="Aluguel de imóveis"
      title="Alugar imóvel em Poços de Caldas"
      intro="Uma busca mais objetiva começa quando você explica o que precisa para morar bem em Poços de Caldas."
      paragraphs={[
        "A locação de um imóvel envolve rotina, localização e expectativas práticas. A Magnata Imóveis atende pessoas que procuram casas e apartamentos para alugar em Poços de Caldas.",
        "Fale sobre o tipo de imóvel, a região de interesse e o momento da sua mudança. O atendimento ajuda a entender as opções disponíveis e a focar nas alternativas que fazem sentido para você."
      ]}
      points={["Atendimento para casas e apartamentos", "Consulta de opções disponíveis", "Conversa sobre localização e rotina", "Contato rápido pelo WhatsApp"]}
      related={[{ label: "Imóveis em Poços de Caldas", href: "/imoveis-em-pocos-de-caldas" }, { label: "Comprar imóvel", href: "/comprar-imovel-em-pocos-de-caldas" }, { label: "Imóveis para alugar", href: "/imoveis-para-alugar-em-pocos-de-caldas" }, { label: "Contato", href: "/contato" }]}
      message="Olá! Encontrei a Magnata Imóveis pelo Google e estou procurando um imóvel para alugar em Poços de Caldas."
      breadcrumb={[{ label: "Alugar imóvel" }]}
      imageTone="sand"
      heroImage={{ src: "/images/apresentar1.jpg", alt: "Apresentação de imóvel para locação em Poços de Caldas" }}
    />
  );
}
