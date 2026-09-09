export const siteConfig = {
  name: "Magnata Imóveis",
  shortName: "Magnata",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://magnata-imoveis.vercel.app",
  phone: "+55 35 9129-6207",
  whatsappNumber: "553591296207",
  logo: "/images/mi_logo.png",
  image: "/images/davimagnata.png",
  description: "Imobiliária em Poços de Caldas com atendimento para compra, venda, aluguel e empreendimentos.",
  address: {
    street: "R. Cap. Afonso Junqueira, 290 - Centro",
    locality: "Poços de Caldas",
    region: "MG",
    postalCode: "37701-042",
    country: "BR",
  },
} as const;

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Comprar", href: "/comprar-imovel-em-pocos-de-caldas" },
  { label: "Alugar", href: "/alugar-imovel-em-pocos-de-caldas" },
  { label: "Empreendimentos", href: "/empreendimentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];
