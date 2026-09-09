import { siteConfig } from "./site";

export function localBusinessJsonLd() {
  return { "@context": "https://schema.org", "@type": ["Organization", "RealEstateAgent", "LocalBusiness"], name: siteConfig.name, url: siteConfig.url, telephone: siteConfig.phone, address: { "@type": "PostalAddress", streetAddress: siteConfig.address.street, addressLocality: siteConfig.address.locality, addressRegion: siteConfig.address.region, postalCode: siteConfig.address.postalCode, addressCountry: siteConfig.address.country }, areaServed: { "@type": "City", name: "Poços de Caldas" } };
}

export function websiteJsonLd() {
  return { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, inLanguage: "pt-BR", publisher: { "@type": "Organization", name: siteConfig.name } };
}

export function breadcrumbJsonLd(items: { label: string; href: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: `${siteConfig.url}${item.href}` })) };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
}
