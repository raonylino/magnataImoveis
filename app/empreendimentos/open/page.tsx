import { EmpreendimentoPage } from "@/components/EmpreendimentoPage";
import { getEmpreendimento } from "@/lib/empreendimentos";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "OPEN Poços de Caldas | Apartamentos no Jardins de Florença", description: "Conheça o OPEN da Vital em Poços de Caldas. Apartamentos de 2 dormitórios com varanda gourmet, rooftop, piscina e opções de financiamento.", alternates: { canonical: "/empreendimentos/open" } };
export default function Page() { return <EmpreendimentoPage empreendimento={getEmpreendimento("open")} />; }
