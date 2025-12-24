import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  MapPinned,
  ShieldCheck,
  Clock3,
  Check,
  ArrowRight,
  FileText,
  Layers,
  BarChart3,
  MessageCircle,
  GraduationCap,
  BookOpen,
  ScrollText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// NexGeo – Landing Page (single-file)
// Sem preços no site: precificação caso a caso.
// Troque o número do WhatsApp conforme necessário.

const WHATSAPP_NUMBER = "5521996804710"; // ex: 5511999999999
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Oi! Quero um orçamento para mapas/análises do meu trabalho acadêmico."
)}`;

const BRAND = {
  name: "NexGeo",
  tagline: "Conectando dados ao território acadêmico.",
  sub: "Mapas e análises geográficas aplicadas a TCCs, artigos e projetos acadêmicos — com rigor técnico e comunicação clara.",
};

const ACCENT = {
  green: "#2CFF05",
  mint: "#38F561",
  deep: "#0D3B36",
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      {eyebrow ? (
        <div className="mb-3 flex items-center justify-center gap-2">
          <Badge className="bg-zinc-900 text-white hover:bg-zinc-900">{eyebrow}</Badge>
        </div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-pretty text-base text-zinc-600 sm:text-lg">{desc}</p>
      ) : null}
    </div>
  );
}

const DELIVERABLES = [
  {
    id: "loc",
    icon: MapPinned,
    title: "Mapa de Localização",
    desc: "Representação cartográfica da área de estudo com elementos essenciais para uso acadêmico.",
    bullets: [
      "escala, norte, legenda e fonte de dados",
      "layout limpo e pronto para inserir no trabalho",
      "ajustes finais para alinhamento",
    ],
  },
  {
    id: "thematic",
    icon: Layers,
    title: "Mapa Temático (índices e indicadores)",
    desc: "Mapas temáticos de indicadores sociodemográficos, ambientais ou territoriais.",
    bullets: [
      "definição de classes/legenda coerentes",
      "organização de variáveis e recortes",
      "apresentação clara para leitura acadêmica",
    ],
  },
  {
    id: "analysis",
    icon: Globe,
    title: "Análises Espaciais",
    desc: "Proximidade, influência, distribuição territorial e análises alinhadas ao método do seu trabalho.",
    bullets: [
      "parâmetros descritos e justificáveis",
      "mapa + síntese do resultado",
      "coerência entre dado, método e figura",
    ],
  },
  {
    id: "charts",
    icon: BarChart3,
    title: "Tabelas e Gráficos",
    desc: "Tabelas e visualizações estatísticas descritivas prontas para inserção em trabalhos.",
    bullets: [
      "gráficos claros e padronizados",
      "tabela editável (quando aplicável)",
      "texto curto de apoio (quando necessário)",
    ],
  },
];

const EXAMPLES = [
  {
    name: "Trabalhos de Graduação (TCC)",
    icon: GraduationCap,
    desc: "Contexto + figuras essenciais.",
    items: [
      "mapa de localização",
      "mapa temático de indicador",
      "gráfico/tabela descritiva",
      "padronização básica para inserir no texto",
    ],
  },
  {
    name: "Mestrado e Doutorado",
    icon: BookOpen,
    desc: "Maior detalhamento e coerência metodológica.",
    items: [
      "mapa temático com recorte e legenda refinados",
      "análise espacial alinhada ao método",
      "figura pronta para dissertação/artigo",
      "padronização visual consistente",
    ],
  },
  {
    name: "Artigos e Projetos",
    icon: ScrollText,
    desc: "Figuras para publicação e relatórios.",
    items: [
      "figuras cartográficas com padrão editorial",
      "tabelas e gráficos descritivos",
      "organização de fontes e metadados",
      "entrega pronta para submissão/relatório",
    ],
  },
];

const FAQ = [
  {
    q: "Vocês fazem o TCC inteiro?",
    a: "Não. Entregamos mapas, tabelas e análises simples (e, quando necessário, textos curtos de método/figura). Não criamos dados nem escrevemos o trabalho completo.",
  },
  {
    q: "Serve para banca?",
    a: "Nosso foco é padrão acadêmico: escala, legenda, norte, fonte de dados e layout limpo. A adequação final depende das exigências do seu curso/programa.",
  },
  {
    q: "Como funciona a revisão?",
    a: "Incluímos ajustes finais para alinhar o material ao objetivo do trabalho. Mudanças que alterem o escopo (novo indicador, novo recorte, nova base) são reavaliadas.",
  },
  {
    q: "Vocês entregam arquivos editáveis?",
    a: "Por padrão, entregamos arquivos finais. Arquivos editáveis podem ser disponibilizados conforme o caso e a demanda.",
  },
  {
    q: "Como é feita a precificação?",
    a: "A precificação é personalizada. Consideramos tipo de entregável, recorte/escala, disponibilidade e qualidade das bases, além do prazo.",
  },
];

const TESTIMONIALS = [
  {
    name: "Gabriella – TCC Ciências Sociais",
    text: "Eu precisava de um mapa de localização da minha área de estudo e um mapa temático com indicadores de saúde. A NexGeo organizou tudo com layout acadêmico e ficou pronto para eu inserir no TCC.",
  },
  {
    name: "Rafael (Mestrado – Urbanismo)",
    text: "Gostei do padrão acadêmico e da rapidez. A revisão foi objetiva e resolveu tudo.",
  },
  {
    name: "Camila (Artigo – Meio Ambiente)",
    text: "A tabela e os gráficos ficaram claros e consistentes com o texto do método.",
  },
];

export default function NexGeoLanding() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Accent gradients */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 15% 10%, rgba(44,255,5,0.14), transparent 55%), radial-gradient(900px 500px at 90% 0%, rgba(13,59,54,0.14), transparent 55%), radial-gradient(900px 500px at 50% 90%, rgba(56,245,97,0.10), transparent 60%)",
        }}
      />

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center rounded-2xl border border-zinc-200 bg-white shadow-sm"
              style={{ boxShadow: "0 10px 30px rgba(13,59,54,0.10)" }}
            >
              <Globe className="h-5 w-5" style={{ color: ACCENT.deep }} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                <span style={{ color: ACCENT.mint }}>Nex</span>
                <span style={{ color: ACCENT.deep }}>Geo</span>
              </div>
              <div className="text-xs text-zinc-500">Mapas e análise espacial</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a className="hover:text-zinc-900" href="#entregas">Entregas</a>
            <a className="hover:text-zinc-900" href="#como-funciona">Como funciona</a>
            <a className="hover:text-zinc-900" href="#exemplos">Exemplos</a>
            <a className="hover:text-zinc-900" href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar com a NexGeo
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Pill>
                <Clock3 className="h-3.5 w-3.5" style={{ color: ACCENT.mint }} />
                Prazos combinados
              </Pill>
              <Pill>
                <ShieldCheck className="h-3.5 w-3.5" style={{ color: ACCENT.deep }} />
                Padrão acadêmico
              </Pill>
              <Pill>
                <MessageCircle className="h-3.5 w-3.5" style={{ color: ACCENT.deep }} />
                Atendimento via WhatsApp
              </Pill>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
            >
              {BRAND.tagline}
            </motion.h1>
            <p className="mt-4 text-pretty text-base text-zinc-600 sm:text-lg">{BRAND.sub}</p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild className="rounded-2xl">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  Falar com a NexGeo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="#entregas">Ver exemplos de entregas</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section id="entregas" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            eyebrow="Entregas"
            title="O que a NexGeo entrega"
            desc="A NexGeo desenvolve mapas e análises espaciais sob demanda, adaptados ao objetivo do seu trabalho. Cada projeto é avaliado individualmente."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {DELIVERABLES.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.id} className="rounded-3xl border-zinc-200 bg-white/70 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3 text-base">
                      <span className="grid h-9 w-9 place-items-center rounded-2xl border border-zinc-200 bg-white">
                        <Icon className="h-4 w-4" style={{ color: ACCENT.deep }} />
                      </span>
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-zinc-600">{s.desc}</p>

                    <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                      {s.bullets.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4" style={{ color: ACCENT.mint }} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-xs text-zinc-500">
                        *Exemplos de entregas. Escopo e prazo são definidos após análise da demanda.
                      </div>
                      <Button asChild className="rounded-2xl">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                          Solicitar análise <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-200 bg-white/70 p-5 text-sm text-zinc-600 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="font-medium text-zinc-900">Precificação personalizada</div>
              <div className="text-sm text-zinc-600">
                Consideramos tipo de entregável, recorte/escala, bases disponíveis e prazo.
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="border-y border-zinc-200/70 bg-white/40">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <SectionTitle
              eyebrow="Processo"
              title="Como funciona"
              desc="Fluxo simples, com proposta personalizada para o seu caso."
            />

            <div className="grid gap-5 md:grid-cols-5">
              {[
                {
                  t: "1. Contato inicial",
                  d: "Você descreve tema, área de estudo e o tipo de material necessário.",
                  i: MessageCircle,
                },
                {
                  t: "2. Análise da demanda",
                  d: "Avaliamos escopo, complexidade e prazo adequado ao seu trabalho.",
                  i: ShieldCheck,
                },
                {
                  t: "3. Proposta personalizada",
                  d: "Enviamos proposta técnica e financeira alinhada ao seu objetivo.",
                  i: FileText,
                },
                {
                  t: "4. Produção e entrega",
                  d: "Produzimos mapas/análises com padrão acadêmico e arquivos finais.",
                  i: Layers,
                },
                {
                  t: "5. Ajustes finais",
                  d: "Realizamos ajustes para alinhar o material ao objetivo do trabalho.",
                  i: Check,
                },
              ].map((x) => {
                const Icon = x.i;
                return (
                  <Card key={x.t} className="rounded-3xl border-zinc-200 bg-white/70 shadow-sm">
                    <CardContent className="p-5">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-zinc-200 bg-white">
                        <Icon className="h-5 w-5" style={{ color: ACCENT.deep }} />
                      </div>
                      <div className="mt-3 text-sm font-semibold">{x.t}</div>
                      <div className="mt-1 text-sm text-zinc-600">{x.d}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="exemplos" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            eyebrow="Exemplos"
            title="Exemplos de aplicação"
            desc="Abaixo estão exemplos comuns de demandas, apenas para referência. Cada projeto é precificado caso a caso."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {EXAMPLES.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.name} className="rounded-3xl border-zinc-200 bg-white/70 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-zinc-200 bg-white">
                        <Icon className="h-5 w-5" style={{ color: ACCENT.deep }} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{p.name}</div>
                        <div className="mt-1 text-sm text-zinc-600">{p.desc}</div>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4" style={{ color: ACCENT.mint }} />
                          <span className="capitalize">{it}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="mt-6 w-full rounded-2xl">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                        Solicitar proposta <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>

                    <div className="mt-3 text-xs text-zinc-500">
                      *Exemplo ilustrativo. Escopo varia por tema, recorte e disponibilidade de dados.
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-y border-zinc-200/70 bg-white/40">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <SectionTitle eyebrow="Depoimentos" title="O que nossos clientes dizem" desc="" />
            <div className="grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <Card key={t.name} className="rounded-3xl border-zinc-200 bg-white/70 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-sm text-zinc-700">“{t.text}”</div>
                    <div className="mt-4 text-sm font-semibold" style={{ color: ACCENT.deep }}>
                      {t.name}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle
            eyebrow="FAQ"
            title="Perguntas frequentes"
            desc="Para reduzir dúvidas no direct e acelerar conversão."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {FAQ.map((f) => (
              <Card key={f.q} className="rounded-3xl border-zinc-200 bg-white/70 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-zinc-600">{f.a}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="rounded-[2rem] border border-zinc-200 bg-white/70 p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm font-semibold" style={{ color: ACCENT.deep }}>
                  Precisa de mapas ou análises para seu trabalho?
                </div>
                <h3 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Entre em contato e descreva sua demanda.
                </h3>
                <p className="mt-3 text-sm text-zinc-600">
                  A NexGeo analisa seu caso e propõe a melhor solução técnica para o seu projeto acadêmico.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button asChild className="rounded-2xl">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    Falar no WhatsApp <MessageCircle className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href="#entregas">Ver entregas</a>
                </Button>
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col items-center justify-between gap-3 text-center text-xs text-zinc-500 sm:flex-row sm:text-left">
            <div>
              © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4">
              <a className="hover:text-zinc-900" href="#faq">FAQ</a>
              <a className="hover:text-zinc-900" href="#exemplos">Exemplos</a>
              <a
                className="hover:text-zinc-900"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Contato
              </a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
