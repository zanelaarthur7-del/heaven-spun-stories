import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  BookOpen,
  Heart,
  Sparkles,
  Users,
  Music,
  Moon,
  Sun,
  TreePine,
  Star,
  Gift,
  ShieldCheck,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Palette,
  BookMarked,
} from "lucide-react";

import heroProduct from "@/assets/hero-product.jpg";
import cloudImg from "@/assets/cloud.png";
import parable1 from "@/assets/parable-1.jpg.asset.json";
import parable2 from "@/assets/parable-2.jpg.asset.json";
import parable3 from "@/assets/parable-3.jpg.asset.json";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const CHECKOUT_URL = "https://pay.wiapy.com/QgxtBvH_AVqs";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ---------- Design primitives ---------- */

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CTAButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${className}`}
    >
      <Heart className="h-5 w-5" fill="currentColor" />
      {children}
    </a>
  );
}

function TinyStar({ className = "" }: { className?: string }) {
  return (
    <Star
      className={`text-[color:var(--color-sunshine-deep)] ${className}`}
      style={{ animation: "var(--animate-twinkle)" }}
      fill="currentColor"
    />
  );
}

function SectionDivider({ flip = false, color = "white" }: { flip?: boolean; color?: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none -mt-px w-full"
      style={{ transform: flip ? "rotate(180deg)" : "none" }}
    >
      <svg viewBox="0 0 1440 120" className="block h-16 w-full sm:h-24" preserveAspectRatio="none">
        <path
          d="M0,64 C240,128 480,0 720,48 C960,96 1200,32 1440,72 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function FloatingCloud({
  className = "",
  size = 180,
  duration = 60,
  delay = 0,
  reverse = false,
  opacity = 0.9,
}: {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  reverse?: boolean;
  opacity?: number;
}) {
  return (
    <img
      src={cloudImg}
      alt=""
      aria-hidden
      loading="lazy"
      width={size}
      height={size}
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        width: size,
        opacity,
        animation: `${reverse ? "drift-reverse" : "drift"} ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #DFF4FF 0%, #EEF9FF 55%, #FDFCF3 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-16 top-10 -z-10 h-56 w-56 rounded-full opacity-70 blur-2xl sm:h-72 sm:w-72"
        style={{ background: "radial-gradient(circle, #FFE28A 0%, transparent 70%)" }}
      />
      <TinyStar className="absolute left-[10%] top-24 h-4 w-4" />
      <TinyStar className="absolute right-[18%] top-16 h-3 w-3" />
      <TinyStar className="absolute left-[45%] top-8 h-5 w-5" />
      <FloatingCloud className="top-16 left-0" size={140} duration={80} delay={0} opacity={0.85} />
      <FloatingCloud className="top-40 left-0" size={110} duration={110} delay={20} reverse opacity={0.7} />
      <FloatingCloud className="top-4 left-0" size={90} duration={140} delay={40} opacity={0.6} />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-10 pt-10 sm:pt-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-[color:var(--color-ink-soft)] shadow-[var(--shadow-card)] backdrop-blur">
              <Sparkles className="h-4 w-4 text-[color:var(--color-sunshine-deep)]" />
              365 parábolas para semear a fé
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-[color:var(--color-ink)] sm:text-5xl lg:text-6xl">
              Transforme apenas 3 minutos antes de dormir no momento mais importante do dia do seu filho.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-soft)] lg:mx-0">
              Jardim de Fé Kids reúne 365 histórias bíblicas ilustradas, versículos, músicas e atividades para ajudar sua família a ensinar a Palavra de Deus de forma leve e inesquecível.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-[color:var(--color-ink-soft)] lg:justify-start">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[color:var(--color-meadow-deep)]" />
                Conteúdo 100% cristão
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="h-4 w-4 text-[color:var(--color-primary)]" fill="currentColor" />
                Feito para toda a família
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[3rem]"
              style={{ background: "radial-gradient(circle at 50% 40%, #FFE28A55, transparent 65%)" }}
            />
            <img
              src={heroProduct}
              alt="Acesso imediato à plataforma online + livro digital ilustrado + atividades para imprimir + músicas cristãs infantis. Tudo pelo celular, tablet ou computador."
              width={1600}
              height={900}
              className="mx-auto w-full max-w-xl rounded-[1.5rem] drop-shadow-[0_20px_40px_rgba(60,110,180,0.25)]"
              style={{ animation: "var(--animate-float-slow)" }}
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto flex max-w-3xl justify-center px-6 pb-16">
        <CTAButton>Começar a jornada de fé</CTAButton>
      </div>


      <SectionDivider color="white" />
    </section>
  );
}

function Urgency() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[color:var(--color-sky-soft)] px-4 py-1.5 text-sm font-semibold text-[color:var(--color-primary)] shadow-[var(--shadow-card)]">
            <Sun className="h-4 w-4 text-[color:var(--color-sunshine-deep)]" />
            Enquanto ainda são pequenos
          </div>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            A infância passa depressa. A fé plantada agora floresce a vida inteira.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[color:var(--color-ink-soft)]">
            Cada noite conta. Cada história ouvida vira memória. Cada oração feita em família se
            transforma em um alicerce eterno no coração do seu pequeno.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    {
      icon: BookOpen,
      title: "1. Abra a parábola do dia",
      text: "Uma nova história ilustrada aparece automaticamente todos os dias, pronta para ler.",
    },
    {
      icon: Heart,
      title: "2. Leia junto por 3 minutos",
      text: "Linguagem simples, ilustrações lindas — atenção e carinho em um único momento.",
    },
    {
      icon: Sparkles,
      title: "3. Faça a mini-oração final",
      text: "Uma frase curta que a criança repete, transformando a lição em memória do coração.",
    },
  ];
  return (
    <section className="relative overflow-hidden py-20" style={{ background: "#DFF4FF" }}>
      <FloatingCloud className="top-6 left-0" size={110} duration={110} opacity={0.6} />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-[color:var(--color-primary)] shadow-[var(--shadow-card)]">
              <Clock className="h-4 w-4" />
              Método 3 Minutos™
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Fé em família em apenas 3 minutos por dia
            </h2>
            <p className="mt-4 text-lg text-[color:var(--color-ink-soft)]">
              Um passo a passo simples, para pais ocupados que querem semear grandes valores no
              coração de seus filhos — sem complicação.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div className="soft-card h-full text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--color-sunshine)]">
                    <Icon className="h-8 w-8 text-[color:var(--color-sunshine-deep)]" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-[color:var(--color-ink-soft)]">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton>Começar meus 3 minutos por dia</CTAButton>
        </div>
      </div>
    </section>
  );
}

const PARABLES = [
  {
    image: parable1.url,
    title: "O Cordeirinho que Confiou no Pastor",
    verse: "Salmo 23:1",
    lesson: "Quando confiamos em Deus, estamos sempre protegidos.",
  },
  {
    image: parable2.url,
    title: "Amostra do livro digital",
    verse: "Palavra de Deus",
    lesson: "Cada parábola vem com história, versículo e lição do dia.",
  },
  {
    image: parable3.url,
    title: "Uma nova história todo dia",
    verse: "365 dias do ano",
    lesson: "Ilustrações fofas para encantar os pequenos.",
  },
];

function Sample() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + PARABLES.length) % PARABLES.length);
  const next = () => setIdx((i) => (i + 1) % PARABLES.length);
  return (
    <section id="amostra" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--color-primary)]">
              Amostra do material
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Veja por dentro do 365 Parábolas Kids
            </h2>
            <p className="mt-4 text-lg text-[color:var(--color-ink-soft)]">
              Deslize entre as páginas e veja o carinho por trás de cada história.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-12">
            <div
              className="absolute -inset-8 -z-10 rounded-[3rem]"
              style={{
                background: "linear-gradient(140deg, #DFF4FF 0%, #FFE28A55 60%, #CDECCB 100%)",
              }}
            />
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              <button
                aria-label="Parábola anterior"
                onClick={prev}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[color:var(--color-primary)] shadow-[var(--shadow-card)] transition hover:scale-105"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-3">
                {[0, 1, 2].map((offset) => {
                  const i = (idx + offset) % PARABLES.length;
                  const p = PARABLES[i];
                  return (
                    <div
                      key={i}
                      className={`soft-card overflow-hidden p-0 ${
                        offset === 1 ? "sm:scale-105" : "hidden sm:block"
                      }`}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="aspect-[3/4] w-full object-cover"
                      />
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-[color:var(--color-primary)]">
                          <BookMarked className="h-4 w-4" />
                          <span className="text-xs font-bold uppercase tracking-widest">
                            {p.verse}
                          </span>
                        </div>
                        <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                        <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
                          {p.lesson}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                aria-label="Próxima parábola"
                onClick={next}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[color:var(--color-primary)] shadow-[var(--shadow-card)] transition hover:scale-105"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {PARABLES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir para parábola ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === idx
                      ? "w-8 bg-[color:var(--color-primary)]"
                      : "w-2.5 bg-[color:var(--color-primary)]/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const BENEFITS = [
  {
    icon: BookOpen,
    color: "var(--color-primary)",
    title: "365 parábolas ilustradas",
    text: "Uma nova história bíblica todos os dias, em linguagem simples e encantadora.",
  },
  {
    icon: Music,
    color: "var(--color-meadow-deep)",
    title: "Músicas e louvores suaves",
    text: "Canções carinhosas para acalmar, adorar e criar memórias em família.",
  },
  {
    icon: Moon,
    color: "var(--color-sunshine-deep)",
    title: "Devocional da hora de dormir",
    text: "Uma oração, uma passagem e um sorriso para fechar bem o dia.",
  },
  {
    icon: Heart,
    color: "var(--color-primary)",
    title: "Atividades para colorir",
    text: "Momentos criativos que ajudam a fixar valores e ensinamentos.",
  },
  {
    icon: Users,
    color: "var(--color-meadow-deep)",
    title: "Momentos em família",
    text: "Roteiros prontos para pais, avós e professores viverem juntos a fé.",
  },
  {
    icon: Sparkles,
    color: "var(--color-sunshine-deep)",
    title: "Ambiente 100% seguro",
    text: "Nenhum anúncio, nenhum conteúdo estranho — só carinho e fé.",
  },
];

function Benefits() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <TinyStar className="absolute right-10 top-10 h-4 w-4" />
      <TinyStar className="absolute left-12 bottom-12 h-3 w-3" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Tudo o que você recebe no Jardim de Fé Kids
            </h2>
            <p className="mt-4 text-lg text-[color:var(--color-ink-soft)]">
              Assim que o pagamento for aprovado, sua família recebe acesso imediato a todo o conteúdo abaixo:
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 60}>
                <div className="soft-card h-full">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-2xl"
                    style={{ background: `color-mix(in oklab, ${b.color} 15%, white)` }}
                  >
                    <Icon className="h-7 w-7" style={{ color: b.color }} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-[color:var(--color-ink-soft)]">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton>Quero para minha família</CTAButton>
        </div>
      </div>
      <SectionDivider color="#DFF4FF" />
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Camila R.",
    role: "Mãe do Théo, 4 anos",
    text: "Virou o momento mais esperado do dia. Meu filho dorme sorrindo e pedindo bênção.",
    avatar: avatar1,
  },
  {
    name: "Dona Zilda",
    role: "Avó de 3 netinhos",
    text: "Encontrei aqui o que eu sonhava para dividir com meus netos. É lindo demais.",
    avatar: avatar2,
  },
  {
    name: "Prof. Márcia",
    role: "Escola dominical",
    text: "As ilustrações e as músicas encantam as crianças. Uma verdadeira bênção.",
    avatar: avatar3,
  },
];

function Social() {
  return (
    <section className="bg-[color:var(--color-sky-soft)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Famílias contando o que aconteceu em casa
            </h2>
            <p className="mt-3 text-[color:var(--color-ink-soft)]">
              Milhares de pais, avós e professores já plantaram esse jardim.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="soft-card h-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, k) => (
                    <Star
                      key={k}
                      className="h-4 w-4 text-[color:var(--color-sunshine-deep)]"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="mt-3 text-[color:var(--color-ink)]">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover shadow-[var(--shadow-card)]"
                  />
                  <div>
                    <div className="font-display font-bold">{t.name}</div>
                    <div className="text-sm text-[color:var(--color-ink-soft)]">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


const BONUSES = [
  {
    icon: Palette,
    title: "Coleção de Desenhos pra Colorir",
    text: "Um desenho bíblico pra cada semana, pra fixar a lição brincando.",
  },
  {
    icon: BookMarked,
    title: "30 Versículos Explicados pra Criança",
    text: "Versículos-chave da Bíblia, traduzidos em linguagem que os pequenos entendem.",
  },
  {
    icon: Music,
    title: "Playlist de Louvor Infantil",
    text: "Uma seleção de músicas cristãs leves pra tocar durante o momento de leitura.",
  },
];

function Bonuses() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: "#CDECCB" }}>
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background: "linear-gradient(180deg, #FBF9F0 0%, transparent 100%)",
        }}
      />
      <TinyStar className="absolute left-10 top-12 h-4 w-4" />
      <TinyStar className="absolute right-14 bottom-10 h-3 w-3" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[color:var(--color-primary)] shadow-[var(--shadow-card)]">
              <Gift className="h-4 w-4" />
              Bônus exclusivos inclusos hoje
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Presentes que enchem o jardim de flores
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 80}>
                <div className="soft-card h-full">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--color-sunshine)]">
                    <Icon className="h-7 w-7 text-[color:var(--color-sunshine-deep)]" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{b.title}</h3>
                  <p className="mt-2 text-[color:var(--color-ink-soft)]">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton>Quero garantir meus bônus</CTAButton>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="relative overflow-hidden py-20" style={{ background: "#DFF4FF" }}>
      <FloatingCloud className="top-8 left-0" size={130} duration={100} opacity={0.7} />
      <FloatingCloud className="top-32 left-0" size={90} duration={140} reverse opacity={0.6} />
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "#FFE28A88" }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[var(--shadow-soft)] sm:p-12">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full"
              style={{ background: "#FFE28A55" }}
            />
            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-meadow)] px-4 py-1.5 text-sm font-bold text-[color:var(--color-meadow-deep)]">
                <Sparkles className="h-4 w-4" />
                Oferta especial de lançamento
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
                Acesso completo ao Jardim de Fé Kids
              </h2>
              <p className="mt-3 text-[color:var(--color-ink-soft)]">
                Um pagamento único. Toda a biblioteca, todos os bônus e todas as futuras atualizações para sua família.
              </p>

              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left">
                <div className="flex items-center gap-3 rounded-2xl bg-[color:var(--color-sky-soft)] px-5 py-3">
                  <Check className="h-5 w-5 shrink-0 text-[color:var(--color-meadow-deep)]" />
                  <span className="font-semibold text-[color:var(--color-ink)]">Acesso vitalício</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-[color:var(--color-sky-soft)] px-5 py-3">
                  <Check className="h-5 w-5 shrink-0 text-[color:var(--color-meadow-deep)]" />
                  <span className="font-semibold text-[color:var(--color-ink)]">Todos os bônus inclusos</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-[color:var(--color-sky-soft)] px-5 py-3">
                  <Check className="h-5 w-5 shrink-0 text-[color:var(--color-meadow-deep)]" />
                  <span className="font-semibold text-[color:var(--color-ink)]">Acesso imediato</span>
                </div>
              </div>


              <div className="mt-8 flex flex-col items-center gap-1">
                <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--color-primary)]">
                  Hoje por apenas
                </span>
                <div className="mt-1 flex items-end gap-2">
                  <span className="font-display text-2xl font-bold text-[color:var(--color-ink)]">R$</span>
                  <span className="font-display text-7xl font-extrabold text-[color:var(--color-primary)]">
                    10
                  </span>
                  <span className="font-display text-2xl font-bold text-[color:var(--color-ink)]">,00</span>
                </div>
                <span className="text-sm text-[color:var(--color-ink-soft)]">
                  Pagamento único • Acesso imediato
                </span>
              </div>

              <div className="mt-8 flex flex-col items-center gap-3">
                <CTAButton>Quero o meu Jardim de Fé</CTAButton>
                <span className="flex items-center gap-2 text-sm text-[color:var(--color-ink-soft)]">
                  <ShieldCheck className="h-4 w-4 text-[color:var(--color-meadow-deep)]" />
                  7 dias de garantia incondicional
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EmotionalBeforeGuarantee() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-display text-2xl font-bold leading-relaxed text-[color:var(--color-ink)] sm:text-3xl">
            Os brinquedos passam. As roupas ficam pequenas. Mas os momentos vividos ao lado dos pais permanecem para sempre no coração de uma criança.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[color:var(--color-ink-soft)]">
            Reserve apenas 3 minutos por dia para plantar sementes de fé que podem acompanhar seu filho por toda a vida.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative flex flex-col items-center gap-8 rounded-[2.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-sky-soft)] p-8 text-center shadow-[var(--shadow-card)] sm:p-12 md:flex-row md:text-left">
            <div className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-white shadow-[var(--shadow-card)]">
              <ShieldCheck className="h-14 w-14 text-[color:var(--color-meadow-deep)]" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[color:var(--color-primary)]">
                Garantia incondicional
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                7 dias para experimentar com a família — sem risco
              </h2>
              <p className="mt-3 text-[color:var(--color-ink-soft)]">
                Se você não sentir que o Jardim de Fé Kids transformou o momento em família, basta
                nos enviar um e-mail em até 7 dias e devolvemos 100% do seu investimento. O risco
                é todo nosso.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Meu filho não gosta de ler. Mesmo assim funciona?",
    a: "Sim! As histórias são curtas, ilustradas e feitas para prender a atenção das crianças. Além disso, você pode ler junto com seu filho em apenas 3 minutos por dia, tornando esse momento leve, divertido e especial.",
  },
  {
    q: "Sou católico. Posso usar?",
    a: "Sim. O Jardim de Fé Kids foi criado para todas as famílias cristãs que desejam ensinar a Palavra de Deus às crianças com amor, respeito e linguagem simples.",
  },
  {
    q: "Recebo o acesso imediatamente?",
    a: "Sim! Assim que o pagamento for aprovado, você recebe o acesso automaticamente por e-mail e já pode começar a usar o Jardim de Fé Kids no celular, tablet ou computador.",
  },
  {
    q: "Funciona no celular? Preciso instalar algum aplicativo?",
    a: "Sim. Você pode acessar todo o conteúdo pelo celular, tablet ou computador. Não é necessário instalar nada: basta entrar na plataforma e começar a viver esse momento especial com sua família.",
  },
];


function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="soft-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-bold text-[color:var(--color-ink)]">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[color:var(--color-primary)] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-all duration-300"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
          marginTop: open ? "0.75rem" : 0,
        }}
      >
        <div className="overflow-hidden text-[color:var(--color-ink-soft)]">{a}</div>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section className="py-20" style={{ background: "#FBF9F0" }}>
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Perguntas frequentes
            </h2>
            <p className="mt-3 text-[color:var(--color-ink-soft)]">
              Feitas por outras famílias que também queriam começar essa jornada.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <FAQItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CTAButton>Quero começar agora</CTAButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white pb-10 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-sky-soft)]">
              <TreePine className="h-5 w-5 text-[color:var(--color-meadow-deep)]" />
            </div>
            <span className="font-display text-xl font-bold">
              Jardim de Fé <span className="text-[color:var(--color-primary)]">Kids</span>
            </span>
          </div>
          <p className="max-w-md text-sm text-[color:var(--color-ink-soft)]">
            "Instrui o menino no caminho em que deve andar, e mesmo quando envelhecer não se
            desviará dele." — Provérbios 22:6
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[color:var(--color-ink-soft)]">
            <a href="#" className="hover:text-[color:var(--color-primary)]">Termos</a>
            <a href="#" className="hover:text-[color:var(--color-primary)]">Privacidade</a>
            <a href="#" className="hover:text-[color:var(--color-primary)]">Contato</a>
          </div>
          <div className="mt-6 text-xs text-[color:var(--color-ink-soft)]">
            © {new Date().getFullYear()} Jardim de Fé Kids — Feito com muito amor 🌿
          </div>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Urgency />
      <Method />
      <Sample />
      <Benefits />
      <Social />
      <EmotionalBeforeGuarantee />
      <Offer />
      <Guarantee />
      <FAQ />
      <Footer />

    </main>
  );
}

