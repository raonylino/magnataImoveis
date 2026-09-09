import type { Empreendimento } from "@/lib/empreendimentos";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function EmpreendimentoCard({ empreendimento }: { empreendimento: Empreendimento }) {
  return <article className="empreendimento-card"><div className="empreendimento-card-image"><Image src={empreendimento.image} alt={`Placeholder para imagem autorizada do empreendimento ${empreendimento.name}`} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="empreendimento-card-content"><p className="eyebrow">Empreendimento Vital</p><h3>{empreendimento.name}</h3><p className="empreendimento-location"><MapPin size={16} aria-hidden="true" />Jardins de Florença · Poços de Caldas</p><p>{empreendimento.summary}</p><Link className="text-link" href={`/empreendimentos/${empreendimento.slug}`}>Conhecer {empreendimento.name} <ArrowUpRight size={16} aria-hidden="true" /></Link></div></article>;
}
