import { faqJsonLd } from "@/lib/structured-data";
import { JsonLd } from "./JsonLd";
import { SectionTitle } from "./SectionTitle";

const questions = [
  ["Como encontrar um imóvel em Poços de Caldas?", "Converse com a Magnata Imóveis pelo WhatsApp e conte o que procura. O atendimento começa entendendo sua necessidade e o tipo de imóvel desejado."],
  ["Quais tipos de imóveis a Magnata Imóveis atende?", "O atendimento contempla casas, apartamentos, terrenos e outros imóveis residenciais para compra, venda ou aluguel."],
  ["Vocês trabalham com imóveis para aluguel?", "Sim. Você pode falar sobre sua busca por um imóvel para alugar em Poços de Caldas diretamente pelo WhatsApp."],
  ["Posso falar diretamente com o corretor?", "Sim. O WhatsApp é o canal principal para iniciar uma conversa direta sobre sua necessidade imobiliária."],
  ["Como faço para vender meu imóvel?", "Envie uma mensagem pelo WhatsApp para conversar sobre o imóvel e os próximos passos do atendimento."],
  ["Como faço para encontrar um imóvel para comprar?", "Conte a localização, o tipo de imóvel e o que é importante para você. A conversa ajuda a direcionar a busca."],
] as const;

export function FAQ() {
  return <section className="section section-light" aria-labelledby="faq-title"><JsonLd data={faqJsonLd(questions.map(([question, answer]) => ({ question, answer })))} /><div className="container"><SectionTitle eyebrow="Dúvidas comuns" title="Antes de dar o próximo passo." id="faq-title" /><div className="faq-list">{questions.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}
