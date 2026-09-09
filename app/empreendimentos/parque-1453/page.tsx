import { EmpreendimentoPage } from "@/components/EmpreendimentoPage";
import { getEmpreendimento } from "@/lib/empreendimentos";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Parque 1453 em Poços de Caldas", description: "Conheça o Parque 1453, empreendimento da Vital no Jardins de Florença, em Poços de Caldas. Apartamentos de 2 dormitórios com varanda gourmet e lazer completo.", alternates: { canonical: "/empreendimentos/parque-1453" } };
export default function Page() { return <EmpreendimentoPage empreendimento={getEmpreendimento("parque-1453")} />; }
