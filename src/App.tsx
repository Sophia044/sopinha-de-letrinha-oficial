import { useEffect, useState } from "react"

import FilmsPage from "./pages/FilmsPage"
import MusicPage from "./pages/MusicPage"

const topics = [
  {
    number: "01 (porque isso é uma sopa, aí tem saBOR kkkkkk)",
    slug: "filmes-series",
    title: "Filmes & séries",
    description: "A Sophia leva isso muito a sério, e ela entende muito sobre cinematografia. Para você ser uma pessoa um pouco melhor, clique aqui.",
    detail: "Um cantinho para falar dos filmes e das séries que a Sophia ama rever (e daqueles que ainda estão na lista).",
    picks: ["The Office", "BoJack Horseman", "Steven Universe"],
    accent: "bg-[#B8D8FF]",
    letter: "F",
    rotation: "-rotate-2",
  },
  {
    number: "02",
    slug: "musicas",
    title: "Músicas",
    description: "A Sopinha tem 87 horas de playlist e sente um apreço incondicional pela Melanie Martinez, então veio espalhar a palavra.",
    detail: "Músicas para cada humor, playlists longas e um apreço especial pela Melanie Martinez.",
    picks: ["Melanie Martinez", "Para cantar junto", "Trilha do momento"],
    accent: "bg-[#FFD36E]",
    letter: "M",
    rotation: "rotate-2",
  },
  {
    number: "03",
    slug: "comidas",
    title: "Comidas",
    description: "que gosto de CU             kie.",
    detail: "Um espaço para comidas favoritas, doces e combinações que talvez precisem de explicação.",
    picks: ["Cookies", "Pratos favoritos", "Doces"],
    accent: "bg-[#FF9A8B]",
    letter: "C",
    rotation: "-rotate-1",
  },
  {
    number: "04",
    slug: "animais",
    title: "Animais",
    description: "teve aquela fase lá com os golfinhos.",
    detail: "Bichinhos fofos que a Sophia adotaria sem pensar duas vezes — especialmente focas e golfinhos.",
    picks: ["Focas", "Golfinhos", "Animais imaginários"],
    accent: "bg-[#B6DF89]",
    letter: "A",
    rotation: "rotate-1",
  },
]

function TopicPage({ topic }: { topic: (typeof topics)[number] }) {
  return (
    <main className="min-h-screen bg-[#F8ECDD] px-5 py-8 text-[#281B1D] md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <a href="#cardapio" className="inline-flex items-center gap-2 rounded-full border-2 border-[#281B1D] bg-white px-5 py-3 font-bold shadow-[3px_3px_0_#281B1D] transition hover:-translate-y-0.5">
          <span aria-hidden="true">←</span> Voltar ao cardápio
        </a>
        <section className={`mt-10 min-h-[440px] rounded-[2rem] border-2 border-[#281B1D] p-7 shadow-[8px_8px_0_#281B1D] md:p-12 ${topic.accent}`}>
          <p className="font-mono text-sm font-bold">SABOR {topic.number}</p>
          <h1 className="mt-10 max-w-4xl font-display text-5xl font-black uppercase leading-[.95] tracking-[-.05em] md:text-8xl">{topic.title}</h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed">{topic.detail}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {topic.picks.map((pick) => (
              <span key={pick} className="rounded-full border-2 border-[#281B1D] bg-[#F8ECDD] px-4 py-2 font-bold">{pick}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}





const facts = [
  ["01", "Churros Grátis", "Ela sabe exatamente CADA palavra do monólogo de BoJack Horseman sobre churros grátis."],
  ["02", "Steven Universo", "É o melhor desenho do mundo, e ela sabe todas as músicas (algumas em inglês)."],
  ["03", "Meu lugar feliz", "Isso não existe de verdade. As pessoas deveriam começar a aceitar o próprio sofrimento e a melancolia."],
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={className} fill="none">
      <path d="M20 2c.7 11.7 6.3 17.3 18 18-11.7.7-17.3 6.3-18 18C19.3 26.3 13.7 20.7 2 20 13.7 19.3 19.3 13.7 20 2Z" fill="currentColor" />
    </svg>
  )
}

function SoupBowl() {
  return (
    <div className="soup-stage" aria-label="Uma tigela vermelha cheia de letrinhas coloridas">
      <div className="letter letter-a">A</div>
      <div className="letter letter-s">S</div>
      <div className="letter letter-o">O</div>
      <div className="letter letter-p">P</div>
      <div className="letter letter-i">I</div>
      <div className="letter letter-h">H</div>
      <Spark className="absolute right-[12%] top-[8%] size-8 text-[#C81634] md:size-11" />
      <svg viewBox="0 0 520 360" className="relative z-10 w-full" fill="none">
        <path d="M79 140h362c-8 88-73 154-181 154S87 228 79 140Z" fill="#C81634" stroke="#281B1D" strokeWidth="6" strokeLinejoin="round" />
        <path d="M63 137c0-17 14-31 31-31h332c17 0 31 14 31 31 0 13-11 24-24 24H87c-13 0-24-11-24-24Z" fill="#F7D8C9" stroke="#281B1D" strokeWidth="6" />
        <path d="M91 140h338" stroke="#C81634" strokeWidth="8" strokeLinecap="round" />
        <path d="M146 199c27 40 63 60 113 61" stroke="#F9EBDD" strokeWidth="7" strokeLinecap="round" opacity=".7" />
        <text
          x="260"
          y="335"
          textAnchor="middle"
          fontFamily="Montserrat, sans-serif"
          fontSize="26"
          fontWeight="900"
          fill="#281B1D"
          letterSpacing="1"
        >DANGO BALANGO</text>
      </svg>
    </div>
  )
}

export default function App() {
  const [activeSlug, setActiveSlug] = useState(() => window.location.hash.slice(1))

  useEffect(() => {
    const syncHash = () => setActiveSlug(window.location.hash.slice(1))
    window.addEventListener("hashchange", syncHash)
    return () => window.removeEventListener("hashchange", syncHash)
  }, [])

  const activeTopic = topics.find((topic) => topic.slug === activeSlug)

  useEffect(() => {
    if (!activeTopic && activeSlug) {
      document.getElementById(activeSlug)?.scrollIntoView()
    }
  }, [activeSlug, activeTopic])

  if (activeTopic?.slug === "filmes-series") return <FilmsPage />
  if (activeTopic?.slug === "musicas") return <MusicPage />
  if (activeTopic) return <TopicPage topic={activeTopic} />

  return (
    <main className="overflow-hidden bg-[#F8ECDD] text-[#281B1D]">
      <nav className="relative z-50 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 lg:px-16">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Sopinha de Letrinhas — início">
          <span className="grid size-10 -rotate-3 place-items-center rounded-lg border-2 border-[#281B1D] bg-[#C81634] font-display text-xl text-white shadow-[3px_3px_0_#281B1D] transition-transform group-hover:rotate-3">S</span>
          <span className="font-display text-sm font-black uppercase leading-[.85] tracking-tight">
            Sopinha de
            <br />
            Letrinhas
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-bold md:flex">
          <a className="nav-link" href="#cardapio">Cardápio</a>
          <a className="nav-link" href="#sobre">Sobre mim</a>
          <a className="nav-link" href="#curiosidades">Curiosidades</a>
        </div>
        <a href="#cardapio" className="rounded-full border-2 border-[#281B1D] bg-[#FFD36E] px-4 py-2 text-xs font-black uppercase tracking-wide shadow-[3px_3px_0_#281B1D] transition hover:-translate-y-0.5 hover:shadow-[4px_5px_0_#281B1D] md:px-5 md:text-sm">
          Explorar
        </a>
      </nav>

      <section id="inicio" className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-[1440px] items-center gap-4 px-5 pb-16 pt-10 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-16 lg:pb-24 lg:pt-8">
        <div className="relative z-20">
          <div className="mb-7 inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-[#281B1D] bg-white px-4 py-2 text-xs font-black uppercase tracking-[.16em] shadow-[3px_3px_0_#281B1D]">
            <span className="size-2 rounded-full bg-[#C81634]" />
            isso é um episódio crossover?
          </div>
          <h1 className="max-w-[760px] font-display text-[clamp(4.1rem,10vw,9rem)] font-black uppercase leading-[.73] tracking-[-.075em] text-[#C81634]">
            Sopinha
            <span className="ml-[.08em] inline-block -rotate-2 text-[#281B1D]">de</span>
            <br />
            <span className="text-outline">letrinhas</span>
          </h1>
          <div className="mt-8 flex max-w-xl items-start gap-4 md:ml-2">
            <span className="mt-1 hidden h-px w-16 bg-[#281B1D] sm:block" />
            <p className="text-base font-semibold leading-relaxed md:text-lg">
              "Everyone said to Vincent van Gogh,
              'You can't be a great painter, you only
              have one ear.' And you know what he
              said? 'I can't hear you.'"
              {" "}<span className="block mt-2 font-mono text-sm">— Michael Scott, The Office</span>
            </p>
          </div>
          <a href="#cardapio" className="hero-button mt-8 inline-flex items-center gap-3 rounded-full bg-[#C81634] px-6 py-4 font-black text-white transition hover:gap-5">
            Ver o cardápio <ArrowIcon />
          </a>
        </div>
        <div className="relative mt-4 min-h-[400px] pb-12 lg:mt-0 lg:min-h-[600px] lg:pb-16">
          <div className="absolute left-[10%] top-[6%] size-[78%] rounded-full bg-[#FFD36E] blur-[1px]" />
          <SoupBowl />
        </div>
      </section>

      <div className="marquee border-y-2 border-[#281B1D] bg-[#C81634] py-3 text-white">
        <div className="marquee-track font-display text-lg font-black uppercase tracking-wider">
          <span>Melanie Martinez</span><b>✦</b><span>The Office</span><b>✦</b><span>Kento Nanami</span><b>✦</b><span>Freud</span><b>✦</b><span>67676767</span><b>✦</b>
          <span>Melanie Martinez</span><b>✦</b><span>The Office</span><b>✦</b><span>Kento Nanami</span><b>✦</b><span>Freud</span><b>✦</b><span>67676767</span><b>✦</b>
        </div>
      </div>

      <section id="cardapio" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Tipo, nada a ver</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none tracking-[-.045em] md:text-7xl">Tem isso no site</h2>
          </div>
            <p className="max-w-sm text-base font-semibold leading-relaxed md:text-right">Aí também tem essas opções para você clicar.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <a key={topic.title} href={`#${topic.slug}`} aria-label={`Abrir ${topic.title}`} className={`topic-card group relative block min-h-[320px] overflow-hidden rounded-[2rem] border-2 border-[#281B1D] p-7 md:p-9 ${topic.accent} ${topic.rotation}`}>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm font-bold">SABOR {topic.number}</span>
                  <span className="grid size-12 place-items-center rounded-full border-2 border-[#281B1D] bg-[#F8ECDD] transition-transform duration-300 group-hover:rotate-[-35deg] group-hover:bg-white"><ArrowIcon /></span>
                </div>
                <div>
                  <h3 className="font-display text-4xl font-black uppercase tracking-[-.04em] md:text-5xl">{topic.title}</h3>
                  <p className="mt-3 max-w-sm font-semibold leading-relaxed">{topic.description}</p>
                </div>
              </div>
              <span className="absolute -bottom-14 -right-3 font-display text-[14rem] font-black leading-none text-white/45 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">{topic.letter}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="sobre" className="relative border-y-2 border-[#281B1D] bg-[#281B1D] text-[#F8ECDD]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[480px] overflow-hidden bg-[#C81634] p-8 md:p-14 lg:min-h-[650px]">
            <p className="section-kicker text-[#FFD36E]">A dona da cozinha</p>
            <h2 className="mt-4 max-w-xl font-display text-6xl font-black uppercase leading-[.86] tracking-[-.055em] md:text-8xl">
              Oi, essa é a <span className="text-3xl md:text-4xl tracking-normal align-middle">(sim, em 3ª pessoa)</span>
              <span className="block font-serif font-normal italic text-[#FFD36E]">Sophia!</span>
            </h2>

            {/* Cartão da ilustração — troca o "S" pela foto */}
            <div className="about-photo absolute -bottom-10 left-[75%] aspect-square w-[52%] max-w-[24rem] -translate-x-1/2 rotate-6 rounded-[4rem] border-4 border-[#281B1D] shadow-[-14px_-14px_0_#FFD36E] md:-bottom-14">
              <img
                src="/sophia.jpg"
                alt="Ilustração de um coelho feliz montado em um unicórnio com arco-íris"
                className="h-full w-full rounded-[3.75rem] object-cover object-top"
              />
              <svg
                viewBox="0 0 140 160"
                className="absolute -left-[130px] top-[24px] hidden h-[160px] w-[140px] md:block"
                fill="none"
                aria-hidden="true"
              >
                <path d="M130 5C75 5 20 28 20 55c0 34 0 55 0 84" stroke="#FFD36E" strokeWidth="3" strokeLinecap="round" />
                <path d="m36 125-16 14-16-16" stroke="#FFD36E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Anotação + seta curva no canto inferior esquerdo */}
            <div className="about-note absolute bottom-[12%] left-[7%] hidden md:flex">
              <div className="flex items-start gap-[5rem]">
                <Spark className="mt-1 size-5 shrink-0 text-[#FFD36E]" />
                <p className="font-hand text-base leading-snug text-[#F8ECDD]">
                  ela é meio idiota e<br />
                  passa por fases de<br />
                  alegria psicótica
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20">
            <p className="text-2xl font-bold leading-snug md:text-4xl">
              A Sophia tem se recusado a fazer suas sessões de terapia, então ela alimenta sua personalidade problemática com distrações temporárias.
            </p>
            <div className="my-10 h-px bg-[#F8ECDD]/25" />
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.18em] text-[#FFD36E]">Ela gosta de:</p>
                <p className="mt-3 text-lg font-semibold leading-relaxed">dopamina barata, cookies, focas, Rodrigo Santoro, atrapalhar a vida alheia, infelicidade (dos outros)</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[.18em] text-[#FF9A8B]">Ela não gosta de:</p>
                <p className="mt-3 text-lg font-semibold leading-relaxed">capitalismo, abóbora, Sydney Sweeney.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="curiosidades" className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="absolute right-[8%] top-16 hidden rotate-12 rounded-full border-2 border-[#281B1D] bg-[#FFD36E] px-5 py-2 font-hand text-xl lg:block">todos os commits aqui são "batata"</div>
        <p className="section-kicker">Porções extras (porque isso é uma sopa kkkkkk)</p>
        <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none tracking-[-.045em] md:text-7xl">Curiosidades</h2>
        <div className="mt-14 divide-y-2 divide-[#281B1D] border-y-2 border-[#281B1D]">
          {facts.map(([number, title, text]) => (
            <article key={number} className="fact-row group grid gap-4 py-7 md:grid-cols-[80px_1fr_1fr] md:items-center md:py-9">
              <span className="font-mono text-sm font-bold text-[#C81634]">{number}</span>
              <h3 className="font-display text-2xl font-black uppercase md:text-3xl">{title}</h3>
              <div className="flex items-center justify-between gap-4">
                <p className="max-w-md font-semibold leading-relaxed">{text}</p>
                <span className="hidden size-3 rounded-full bg-[#C81634] transition-transform group-hover:scale-[2] sm:block" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#FFD36E] px-5 pb-8 pt-20 text-center">
        <p className="mx-auto max-w-xl font-serif text-3xl italic md:text-5xl">“Tá, eu, o Uber e a Gabriela...”</p>
        <div className="mx-auto my-12 h-px max-w-5xl bg-[#281B1D]/30" />
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-xs font-bold uppercase tracking-[.14em] sm:flex-row">
          <p>Sopinha de Letrinhas © 2025</p>
          <a href="#inicio" className="rounded-full border-2 border-[#281B1D] px-4 py-2 transition hover:bg-[#281B1D] hover:text-white">Voltar ao topo ↑</a>
          <p>gjashtë shtatë</p>
        </div>
      </footer>
    </main>
  )
}
