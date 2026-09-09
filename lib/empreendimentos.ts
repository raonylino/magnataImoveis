export type Empreendimento = {
  slug: "parque-1453" | "open";
  name: string;
  headline: string;
  address: string;
  summary: string;
  status: string;
  image: string;
  gallery: string[];
  officialUrl: string;
  whatsappMessage: string;
  highlights: string[];
  description: string[];
  commercialNotice?: string;
};

function galleryPaths(slug: Empreendimento["slug"], count: number) {
  return Array.from({ length: count }, (_, index) => `/images/empreendimentos/${slug}/gallery/gallery-${String(index + 1).padStart(2, "0")}.jpg`);
}

export const empreendimentos: Empreendimento[] = [
  {
    slug: "parque-1453",
    name: "Parque 1453",
    headline: "Parque 1453 em Poços de Caldas",
    address: "Avenida Roma, 1453 - Jardins de Florença - Poços de Caldas - MG",
    summary: "2 dormitórios, varanda gourmet e lazer de clube no Jardins de Florença.",
    status: "Em construção · previsão de entrega em 2029",
    image: "/images/empreendimentos/parque-1453/gallery/gallery-01.jpg",
    gallery: galleryPaths("parque-1453", 14),
    officialUrl: "https://construtoravital.com/imoveis/parque-1453/",
    whatsappMessage: "Olá! Encontrei o Parque 1453 no site da Magnata Imóveis e gostaria de saber mais sobre o empreendimento.",
    highlights: ["248 apartamentos", "2 dormitórios", "Aproximadamente 42 m²", "Varanda gourmet", "Lazer de clube", "Piscina, academia, espaço gourmet e playground/brinquedoteca", "Pet place e quadra"],
    description: ["O Parque 1453 é um empreendimento da Construtora Vital no Jardins de Florença, em Poços de Caldas.", "O projeto reúne apartamentos de 2 dormitórios com varanda gourmet e estrutura de lazer. As informações apresentadas nesta página são baseadas no conteúdo oficial disponível pela Construtora Vital e devem ser confirmadas com o corretor."],
  },
  {
    slug: "open",
    name: "OPEN",
    headline: "OPEN em Poços de Caldas",
    address: "Rua Salvador Vasques Ruiz, 191 - Jardins de Florença - Poços de Caldas - MG",
    summary: "2 dormitórios, varanda gourmet e rooftop com piscina no Jardins de Florença.",
    status: "Obras previstas para o segundo semestre de 2026",
    image: "/images/empreendimentos/open/gallery/gallery-01.jpg",
    gallery: galleryPaths("open", 12),
    officialUrl: "https://construtoravital.com/imoveis/open/",
    whatsappMessage: "Olá! Encontrei o OPEN no site da Magnata Imóveis e gostaria de saber mais sobre as unidades.",
    highlights: ["Apartamentos de 2 dormitórios", "Varanda gourmet", "Uma vaga por apartamento", "Rooftop com piscina", "Academia, brinquedoteca, lounge e espaços gourmet", "Minha Casa Minha Vida", "FGTS na entrada e financiamento pela Caixa"],
    description: ["O OPEN é um empreendimento da Construtora Vital no Jardins de Florença, em Poços de Caldas, com apartamentos de 2 dormitórios e áreas de lazer no rooftop.", "A página oficial informa início das obras previsto para o segundo semestre de 2026 e prazo máximo de obra de 36 meses. Unidades a partir de R$ 235.000,00, conforme a informação disponível no momento da consulta."],
    commercialNotice: "Valores sujeitos a alteração e às condições comerciais vigentes. Consulte disponibilidade e condições atuais com o corretor.",
  },
];

export function getEmpreendimento(slug: Empreendimento["slug"]) {
  return empreendimentos.find((empreendimento) => empreendimento.slug === slug)!;
}
