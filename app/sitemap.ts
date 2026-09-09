import { siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

const routes = ["/", "/imoveis-em-pocos-de-caldas", "/comprar-imovel-em-pocos-de-caldas", "/alugar-imovel-em-pocos-de-caldas", "/casas-a-venda-em-pocos-de-caldas", "/apartamentos-a-venda-em-pocos-de-caldas", "/terrenos-a-venda-em-pocos-de-caldas", "/vender-imovel-em-pocos-de-caldas", "/empreendimentos", "/empreendimentos/parque-1453", "/empreendimentos/open", "/sobre", "/contato"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "/" ? 1 : .7 })); }
