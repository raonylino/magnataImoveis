import type { Empreendimento } from "@/lib/empreendimentos";
import Image from "next/image";

export function EmpreendimentoGallery({ empreendimento }: { empreendimento: Empreendimento }) {
  return <section className="section enterprise-gallery-section" aria-labelledby="gallery-title"><div className="container"><div className="gallery-heading"><p className="eyebrow">Galeria</p><h2 id="gallery-title">Imagens do {empreendimento.name}</h2><p>Imagens fornecidas pela Construtora Vital e utilizadas com autorização.</p></div><div className="enterprise-gallery">{empreendimento.gallery.map((image, index) => <figure className="enterprise-gallery-item" key={image}><Image src={image} alt={`Imagem ${index + 1} da galeria do empreendimento ${empreendimento.name}`} width={1600} height={1100} sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw" /></figure>)}</div></div></section>;
}
