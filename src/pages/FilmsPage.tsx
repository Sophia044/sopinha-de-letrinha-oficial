import { useEffect, useRef, useState, type CSSProperties, type DragEvent } from "react"
import eternalSunshinePoster from "../../Imagens/filmes favoritos/brilho eterdo de uma mente sem lembranças.jpg"
import silenceOfTheLambsPoster from "../../Imagens/filmes favoritos/silencio dos inocentes.jpg"
import theShiningPoster from "../../Imagens/filmes favoritos/o iluminado.jpg"
import littleWomenPoster from "../../Imagens/filmes favoritos/adoraveis mulheres.jpg"
import carandiruPoster from "../../Imagens/filmes favoritos/carandiru.jpg"
import prideAndPrejudicePoster from "../../Imagens/filmes favoritos/orgulho e preconceito.jpg"
import whiplashPoster from "../../Imagens/filmes favoritos/wiplash.jpg"
import ponyoPoster from "../../Imagens/filmes favoritos/ponyo.jpg"
import theOfficeImage from "../../Imagens/series favoritas/the-office.jpg"
import bojackHorsemanImage from "../../Imagens/series favoritas/bojack horseman.jpg"
import anneImage from "../../Imagens/series favoritas/anne.jpg"
import hungerGamesImage from "../../Imagens/series favoritas/jogos vorazes.jpg"
import stevenUniverseImage from "../../Imagens/series favoritas/steven universo.jpg"
import invisibleAdvantagesPoster from "../../Imagens/filmes ruins/as vantagens de ser invisivel.jpg"
import kissingBoothPoster from "../../Imagens/filmes ruins/barraca do beijo.jpg"
import beeMoviePoster from "../../Imagens/filmes ruins/bee movie.jpg"
import carsPoster from "../../Imagens/filmes ruins/carros.jpg"
import fightClubPoster from "../../Imagens/filmes ruins/clube da luta.jpg"
import justGoWithItPoster from "../../Imagens/filmes ruins/esposa de mentira.jpg"
import laLaLandPoster from "../../Imagens/filmes ruins/lalaland.jpg"
import theDramaPoster from "../../Imagens/filmes ruins/o drama.jpg"
import reaction1 from "../../Imagens/filmes ruins/reações/reação 1.jpg"
import reaction2 from "../../Imagens/filmes ruins/reações/reãção 2.jpg"
import reaction3 from "../../Imagens/filmes ruins/reações/reação 3.jpg"
import reaction4 from "../../Imagens/filmes ruins/reações/reação 4.jpg"
import reaction5 from "../../Imagens/filmes ruins/reações/reação 5.jpg"
import reaction6 from "../../Imagens/filmes ruins/reações/reação 6.jpg"
import reaction7 from "../../Imagens/filmes ruins/reações/reação 7.jpg"
import reaction8 from "../../Imagens/filmes ruins/reações/reação 8.jpg"
import actorArt from "../../Imagens/homens bonitos/art.jpg"
import actorChris from "../../Imagens/homens bonitos/chirs.jpg"
import actorFinnick from "../../Imagens/homens bonitos/finnik.jpg"
import actorGoong from "../../Imagens/homens bonitos/goong.jpg"
import actorHannibal from "../../Imagens/homens bonitos/hannibal.jpg"
import actorHeath from "../../Imagens/homens bonitos/heath.jpg"
import actorJeffrey from "../../Imagens/homens bonitos/heffrey.jpg"
import actorHenry from "../../Imagens/homens bonitos/henry.jpg"
import actorJake from "../../Imagens/homens bonitos/jake.jpg"
import actorJosephGordon from "../../Imagens/homens bonitos/joseph gordon.jpg"
import actorJimCarrey from "../../Imagens/homens bonitos/jim carrey.jpg"
import actorJim from "../../Imagens/homens bonitos/jim.jpg"
import actorJohnny from "../../Imagens/homens bonitos/johnny.jpg"
import actorJon from "../../Imagens/homens bonitos/jon.jpg"
import actorLoki from "../../Imagens/homens bonitos/loki.jpg"
import actorMark from "../../Imagens/homens bonitos/mark.jpg"
import actorMichael from "../../Imagens/homens bonitos/micheal.jpg"
import actorPedro from "../../Imagens/homens bonitos/pedro.jpg"
import actorPeeta from "../../Imagens/homens bonitos/peeta.jpg"
import actorPeter from "../../Imagens/homens bonitos/peter.jpg"
import actorRobertDowney from "../../Imagens/homens bonitos/robert d.jpg"
import actorRobert from "../../Imagens/homens bonitos/robert.jpg"
import actorRodrigo from "../../Imagens/homens bonitos/rodrigo santoro.jpg"
import actorDarcy from "../../Imagens/homens bonitos/senhor darcy.jpg"

const favoritePosters = [
  { id: "01", title: "Brilho Eterno", src: eternalSunshinePoster, tone: "#5A243F", reviewColor: "#d77f42", review: "Eu sou uma idiota. Estou encarando essa página já faz alguns bons minutos e não consigo descrever o quanto amo esse filme, mas, se por acaso eu tivesse atividade cerebral suficiente para fazer isso, diria que esse filme é a coisa mais sincera que sinto e em que penso ao menos uma vez por semana. Eu amo o amor desse filme e amo que o Joel ame a Clementine no fim de tudo. Amo muito que não exista nada que afaste os dois. Amo, principalmente, me lembrar do que eu gostaria que tivesse acontecido entre eles.", favoriteQuote: "Clementine: Não sou um conceito, Joel. Eu sou uma garota perturbada em busca da própria paz de espírito, não sou perfeita. \n Joel: Mas eu não vejo nada que não goste em você. \n Clementine: Mas vai ver. Sabe como é, você vai falar suas coisas e eu vou ficar entediada com o que você diz, é assim que acontece comigo. \n Joel: Tudo bem." },
  { id: "02", title: "Silêncio dos Inocentes", src: silenceOfTheLambsPoster, tone: "#26415A", reviewColor: "#452828", review: "Eu me sinto em uma síndrome de Estocolmo enquanto vejo o Anthony Hopkins atuar, e isso não é um pleonasmo. Tudo nesse filme me deixa tensa do início ao fim, e é tudo por causa das performances excepcionais dos protagonistas. Eu, sinceramente, não dou a mínima para o vilão principal desse filme; apenas consigo sentir na pele cada tensão da Clarice. A relação dela e do Hannibal ainda me perturba.", favoriteQuote: "Adeus, Clarice." },
  { id: "03", title: "O Iluminado", src: theShiningPoster, tone: "#59401F", reviewColor: "#a7cae6", review: "Eu estava enlouquecendo. Tenho certeza de que perdi alguns neurônios importantes enquanto via esse filme, porque acompanhava de perto cada instante em que o Jack Nicholson ia se desvinculando da própria imagem e alma para se tornar aquilo que até mesmo o telespectador duvidava. Eu injetaria essa interpretação nas minhas veias e viveria o resto da minha vida deixando aquela cena no bar circular pelo meu sangue.", favoriteQuote: "Eu lamento discordar, senhor. Mas o senhor é o zelador. O senhor sempre foi o zelador." },
  { id: "04", title: "Adoráveis Mulheres", src: littleWomenPoster, tone: "#354A43", reviewColor: "#b0766d", review: "Esse filme funcionou de uma forma muito única dentro do meu cérebro e acho que não funcionaria para todo mundo, especialmente para os homens. É meu império romano. Penso nisso tantas vezes que às vezes me tira o sono e, ainda assim, sinto que não consigo sentir perfeitamente esse filme.", favoriteQuote: "Jô: Eu acho que, se ele me perguntasse de novo, eu diria sim. Você acha que ele perguntaria de novo?\nLaura: Você o ama?\nJô: Eu me preocupo mais com ser amada. Eu quero ser amada.\nLaura: Isso não é a mesma coisa que amar.\nJô: ... Eu sei.\nJô: Eu só sinto que... mulheres têm mente e têm almas, além de corações. E elas têm ambições e talento, além da beleza. E eu estou cansada das pessoas dizendo que o amor é a única coisa para que servem as mulheres. Eu estou cansada disso... Mas eu estou tão sozinha." },
  { id: "05", title: "Carandiru", src: carandiruPoster, tone: "#43366B", reviewColor: "#4e3626", review: "Acho que é o filme nacional mais visceral que já assisti. É aquele tipo de coisa que a gente sabe que aconteceu, mas nunca imaginou, entende? Esse filme quebra essa barreira e faz isso muito bem: obriga você a encarar verdades que, mesmo quando já conhecemos, ainda embrulham o estômago. Essa é a descrição exata: de embrulhar o estômago.", favoriteQuote: "— E culpa tem remédio, doutor?\n— Se tivesse, todo mundo ia querer." },
  { id: "06", title: "Orgulho & Preconceito", src: prideAndPrejudicePoster, tone: "#6A332A", reviewColor: "#f3edc6", review: "Cara, escuta aqui: ele a ama ARDENTEMENTE. Puta que pariu, eu nunca tive tanto tesão em ver um filme que não tem NENHUMA cena de beijo sequer. NADA. Tudo nesse filme é pura e unicamente desenvolvimento romântico, sem nenhuma porra de toque.", favoriteQuote: "Luto contra meu bom senso, as expectativas da minha família, a inferioridade de seu nascimento e minha posição, mas estou disposto a colocá-las de lado para que você dê um fim à minha agonia." },
  { id: "07", title: "Whiplash", src: whiplashPoster, tone: "#31576A", reviewColor: "#e1bb62", review: "Eu meio que curto pessoas obsessivas. Se o Bokuto não existisse, o Oikawa com certeza seria meu favorito.", favoriteQuote: "Not quite my tempo." },
  { id: "08", title: "Ponyo", src: ponyoPoster, tone: "#446640", reviewColor: "#a0af7c", review: "Acho que é a primeira animação que eu vi, e guardo uma memória afetiva muito forte dessa garota/peixe bizarra.", favoriteQuote: "Como pode um peixe vivo viver fora da água fria?" },
]

const featuredSeries = [
  { id: "01", title: "The Office", description: "A Sophia ama The Office. Ama tanto essa série que seu coração passou a bater no ritmo da música de abertura. Desde então, sente saudade do Michael. \n — That’s what she said.", image: theOfficeImage, color: "#6a587f" },
  { id: "02", title: "BoJack Horseman", description: "A Sophia tem uma estranha tendência à autodegradação. Por isso, assiste a essa série quando está feliz, porque, com toda a certeza do mundo, vai sentir vontade de cortar os próprios pulsos quando o BoJack abrir a boca.", image: bojackHorsemanImage, color: "#547185" },
  { id: "03", title: "Anne with an E", description: "É muito fofa, confortável e divertida, segundo a Sophia. Mas ela se recusa a assistir novamente porque sofre até hoje com o cancelamento dessa merda.", image: anneImage, color: "#8a654e" },
  { id: "04", title: "Jogos Vorazes", description: "A Sopinha não se importa que Jogos Vorazes não seja uma série: como é uma série de filmes, ela se deu a liberdade de colocá-la aqui. #PeetaEuTeAmo #FinnickVoltaPeloAmorDeDeus", image: hungerGamesImage, color: "#586d5e" },
  { id: "05", title: "Steven Universo", description: "A dona do site leva isso muito a sério. Ela sabe todas as músicas desse desenho (todas mesmo) e o usa como escapismo para não encarar seus problemas reais.", image: stevenUniverseImage, color: "#6c617e" },
]

const dislikedTitles = [
  { id: "01", title: "As Vantagens de Ser Invisível", poster: invisibleAdvantagesPoster, reaction: reaction5, explanation: "Não aguento as pessoas tratando esse filme como se fosse um milagre na Terra. Esse negócio se apoia demais na identificação do espectador com o protagonista para retratar um problema e um romance que nem são bem articulados." },
  { id: "02", title: "A Barraca do Beijo", poster: kissingBoothPoster, reaction: reaction6, explanation: "Olha, se eu quisesse ver gente feia se apaixonando, eu ia para a escola. Essa merda derreteu tantos neurônios importantes que parece que desenvolvi algum transtorno pós-traumático. Sempre que vejo o rosto assustador dessa protagonista, sinto vontade de vomitar." },
  { id: "03", title: "Bee Movie", poster: beeMoviePoster, reaction: reaction1, explanation: "Eu espero que a mente maligna que fez um filme sobre uma abelha imunda formar um casal com uma humana seja punida no mármore do inferno. Essa MULHER ESTÚPIDA ainda tem a coragem de olhar para o próprio marido e perguntar: 'por que você acha que a vida de uma abelha tem menos valor do que a sua?', vadia, não fode porra." },
  { id: "04", title: "Carros", poster: carsPoster, reaction: reaction7, explanation: "Gente, olha que divertido: um filme sobre um carro obviamente red pill que vai competir em uma corrida e, aí, do nada, outros carros viram espiões para salvar aquele merdinha. Onde acharam que carros espiões seriam uma boa ideia?" },
  { id: "05", title: "Clube da Luta", poster: fightClubPoster, reaction: reaction3, explanation: "Todo mundo já pode parar de fingir que isso é o suprassumo do cinema. Ok, eu entendo que, há alguns anos, isso parecia revolucionário, mas já está na hora de superar essa ideologia que trata os homens literalmente como animais raivosos. Todas as pessoas com três neurônios já tinham entendido o plot na metade do filme, e não existe nada de incrível em fazer um filme sobre relações homossexuais. Talvez até exista alguma crítica à masculinidade agressiva e tóxica, mas ela é tão rasa que parece um incentivo. A primeira regra do clube da luta é o meu piru." },
  { id: "06", title: "Esposa de Mentira", poster: justGoWithItPoster, reaction: reaction8, explanation: "Nem para ser engraçado esse filme serve. O Adam Sandler tem o poder de transformar todos os seus romances na mesma cópia um do outro, é literalmente uma sessão da tarde ruim." },
  { id: "07", title: "La La Land", poster: laLaLandPoster, reaction: reaction2, explanation: "NÃO. ESSA MERDA NÃO É BOA, VOCÊ SÓ ESTÁ COM O SEU CÉREBRO ESTÚPIDO E LIMITADO ENCANTADO COM A IDEIA DE QUE: 'OLHA SÓ, ÀS VEZES NÃO É PARA SER'. PORRA, todo mundo sabe disso, vê se cresce. Às vezes, as pessoas não ficam juntas, mas esse filme não é bom nem para retratar isso. Não tem UMA música marcante (é a merda de um musical) e não existe NADA nos protagonistas que faça o telespectador se interessar por eles. Você passa literalmente duas horas encarando arquétipos ruins e se apaixonando apenas pela 'ideia' de um romance." },
  { id: "08", title: "O Drama", poster: theDramaPoster, reaction: reaction4, explanation: "Que drama, meu Deus. Se meu marido me traísse por causa disso, eu juro que cortava o pau dele fora." },
]

const tierCategories = [
  { id: "top", label: "Puta que pariu", color: "#ff777d" },
  { id: "wow", label: "Meu Deus", color: "#ffb66e" },
  { id: "hear-me-out", label: "Hear me out", color: "#ffdb7c" },
  { id: "handsome", label: "Lindo", color: "#fff17b" },
  { id: "cute", label: "Bonito", color: "#b8f381" },
] as const

const tierListActors = [
  { id: "loki", name: "Loki", image: actorLoki, baseTier: "top" },
  { id: "peter", name: "Peter", image: actorPeter, baseTier: "hear-me-out" },
  { id: "jake", name: "Jake", image: actorJake, baseTier: "handsome" },
  { id: "jeffrey", name: "Jeffrey", image: actorJeffrey, baseTier: "hear-me-out" },
  { id: "art", name: "Art", image: actorArt, baseTier: "wow" },
  { id: "pedro", name: "Pedro", image: actorPedro, baseTier: "cute" },
  { id: "jim-carrey", name: "Jim Carrey", image: actorJimCarrey, baseTier: "wow" },
  { id: "finnik", name: "Finnick", image: actorFinnick, baseTier: "wow" },
  { id: "chris", name: "Chris", image: actorChris, baseTier: "handsome" },
  { id: "mark", name: "Mark", image: actorMark, baseTier: "top" },
  { id: "rodrigo", name: "Rodrigo", image: actorRodrigo, baseTier: "top" },
  { id: "hannibal", name: "Hannibal", image: actorHannibal, baseTier: "hear-me-out" },
  { id: "henry", name: "Henry", image: actorHenry, baseTier: "top" },
  { id: "joseph-gordon", name: "Joseph Gordon-Levitt", image: actorJosephGordon, baseTier: "top" },
  { id: "robert-downey", name: "Robert Downey Jr.", image: actorRobertDowney, baseTier: "cute" },
  { id: "goong", name: "Goong", image: actorGoong, baseTier: "hear-me-out" },
  { id: "peeta", name: "Peeta", image: actorPeeta, baseTier: "wow" },
  { id: "heath", name: "Heath", image: actorHeath, baseTier: "wow" },
  { id: "jim", name: "Jim", image: actorJim, baseTier: "top" },
  { id: "robert", name: "Robert", image: actorRobert, baseTier: "wow" },
  { id: "michael", name: "Michael", image: actorMichael, baseTier: "wow" },
  { id: "johnny", name: "Johnny", image: actorJohnny, baseTier: "wow" },
  { id: "darcy", name: "Senhor Darcy", image: actorDarcy, baseTier: "wow" },
  { id: "jon", name: "Jon", image: actorJon, baseTier: "top" },
]

function FilmsPage() {
  const [activeSeriesIndex, setActiveSeriesIndex] = useState(1)
  const [seriesTransition, setSeriesTransition] = useState(true)
  const [activeDislikedId, setActiveDislikedId] = useState<string | null>(null)
  const [tierPlacements, setTierPlacements] = useState<Record<string, string | null>>({})
  const [selectedActorId, setSelectedActorId] = useState<string | null>(null)
  const [tierChecked, setTierChecked] = useState(false)
  const [tierMessage, setTierMessage] = useState("")
  const dislikedDetailRef = useRef<HTMLElement | null>(null)
  const seriesSlides = [featuredSeries[featuredSeries.length - 1], ...featuredSeries, featuredSeries[0]]
  const activeSeriesDot = activeSeriesIndex === 0
    ? featuredSeries.length - 1
    : activeSeriesIndex === seriesSlides.length - 1
      ? 0
      : activeSeriesIndex - 1

  useEffect(() => {
    const isClone = activeSeriesIndex === 0 || activeSeriesIndex === seriesSlides.length - 1
    if (isClone) {
      const snapTimer = window.setTimeout(() => {
        setSeriesTransition(false)
        setActiveSeriesIndex(activeSeriesIndex === 0 ? featuredSeries.length : 1)
        window.requestAnimationFrame(() => setSeriesTransition(true))
      }, 720)
      return () => window.clearTimeout(snapTimer)
    }

    const timer = window.setInterval(() => setActiveSeriesIndex((index) => index + 1), 10000)
    return () => window.clearInterval(timer)
  }, [activeSeriesIndex, seriesSlides.length])

  function goToReview(poster: (typeof favoritePosters)[number]) {
    const reviewCard = document.getElementById(`review-${poster.id}`)
    if (!reviewCard) return

    reviewCard.scrollIntoView({ behavior: "smooth", block: "center" })
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    reviewCard.animate(
      [
        { transform: "translateY(0) scale(1)", boxShadow: "0 15px 38px rgba(0, 0, 0, 0.16)", borderColor: `${poster.reviewColor}48` },
        { transform: "translateY(-5px) scale(1.012)", boxShadow: `0 0 0 4px ${poster.reviewColor}55, 0 0 42px ${poster.reviewColor}66`, borderColor: poster.reviewColor },
        { transform: "translateY(0) scale(1)", boxShadow: "0 15px 38px rgba(0, 0, 0, 0.16)", borderColor: `${poster.reviewColor}48` },
      ],
      { duration: 1250, delay: 250, easing: "cubic-bezier(0.2, 0.75, 0.25, 1)" },
    )
  }

  function moveSeries(direction: -1 | 1) {
    setActiveSeriesIndex((index) => {
      if (index === 0 || index === seriesSlides.length - 1) return index
      return index + direction
    })
  }

  function toggleDislikedTitle(id: string) {
    const nextId = activeDislikedId === id ? null : id
    setActiveDislikedId(nextId)
    if (nextId) {
      window.requestAnimationFrame(() => {
        dislikedDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      })
    }
  }

  function placeActor(actorId: string, tierId: string | null) {
    setTierPlacements((current) => ({ ...current, [actorId]: tierId }))
    setTierChecked(false)
    setTierMessage("")
  }

  function handleTierDrop(event: DragEvent<HTMLDivElement>, tierId: string | null) {
    event.preventDefault()
    const actorId = event.dataTransfer.getData("text/plain")
    if (tierListActors.some((actor) => actor.id === actorId)) {
      placeActor(actorId, tierId)
      setSelectedActorId(null)
    }
  }

  const tierPlacedCount = tierListActors.filter((actor) => tierPlacements[actor.id]).length
  const tierCorrectCount = tierListActors.filter((actor) => tierPlacements[actor.id] === actor.baseTier).length
  const tierRank = tierCorrectCount >= 21
    ? "Telepatia de sopinha"
    : tierCorrectCount >= 16
      ? "Conhece a dona da página"
      : tierCorrectCount >= 10
        ? "meio merda"
        : tierCorrectCount >= 5
          ? "falta muito pra ficar bom"
          : "mano???"

  function checkTierAnswers() {
    if (tierPlacedCount < tierListActors.length) {
      setTierMessage(`Ainda faltam ${tierListActors.length - tierPlacedCount} foto(s) para classificar.`)
      return
    }
    setTierMessage("")
    setTierChecked(true)
  }

  function resetTierGame() {
    setTierPlacements({})
    setSelectedActorId(null)
    setTierChecked(false)
    setTierMessage("")
  }

  return (
    <main className="film-page relative min-h-screen overflow-hidden px-5 pb-20 pt-6 text-white md:px-10 md:pt-9 lg:px-16">
      <div aria-hidden="true" className="film-orb film-orb-one" />
      <div aria-hidden="true" className="film-orb film-orb-two" />
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <a href="#cardapio" className="film-back inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[.06] px-5 py-3 text-sm font-bold text-white/85 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10">
          <span aria-hidden="true">←</span> Voltar ao cardápio
        </a>

        <header className="film-header relative mb-12 mt-14 overflow-hidden rounded-[2rem] border border-white/10 px-6 py-9 md:mb-16 md:mt-20 md:px-12 md:py-14">
          <div className="relative z-10 max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-[#B8D8FF]">
              <span className="film-reel-mark grid size-9 place-items-center rounded-xl border border-white/20 bg-white/10 text-lg text-white">✦</span>
              <span>O cinema da Sophia <span className="mx-2 text-white/35">/</span> favoritos</span>
            </div>
            <h1 className="font-display text-5xl font-black uppercase leading-[.9] tracking-[-.075em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              Filmes <span className="film-title-accent">&amp;</span>
              <br />Séries<span className="text-[#B8D8FF]">.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-white/65 md:text-lg">
              A Sophia sabe do que está falando, então preste atenção porque, a seguir, você terá bons filmes, boas séries e bons atores.
            </p>
          </div>
          <span aria-hidden="true" className="film-header-number absolute -bottom-12 right-0 hidden font-display text-[19rem] font-black leading-none text-white/[.035] md:block">F</span>
        </header>

        <section aria-labelledby="favorites-title">
          <div className="mb-7 flex items-end justify-between gap-4 border-b border-white/15 pb-4">
            <div>
              <p className="font-mono text-[.68rem] uppercase tracking-[.2em] text-white/40">Arquivo pessoal · 08 pôsteres</p>
              <h2 id="favorites-title" className="mt-2 font-display text-2xl font-black uppercase tracking-[-.04em] md:text-3xl">Favoritos (a Sophia ama muito esses filmes)</h2>
            </div>
            <span className="hidden text-sm font-medium text-white/40 sm:block">Não leve a ordem da lista muito a sério <span className="text-[#B8D8FF]">✦</span></span>
          </div>

          <div className="poster-rail flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-5 sm:gap-5">
            {favoritePosters.map((poster, index) => (
              <div key={poster.id} className="poster-card group relative aspect-[.76] w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/15 bg-[#1B2029] shadow-[0_18px_45px_rgba(0,0,0,.28)] sm:rounded-[1.35rem]" style={{ animationDelay: `${index * 90}ms` }}>
                {poster.src ? (
                  <img src={poster.src} alt={`Pôster de ${poster.title}`} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.045]" />
                ) : (
                  <div className="poster-placeholder absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 text-center" style={{ background: `radial-gradient(ellipse at 50% 38%, ${poster.tone} 0%, #20232e 68%, #171a21 100%)` }}>
                  <span aria-hidden="true" className="poster-star text-3xl text-white/65">✦</span>
                    <span className="font-mono text-[.62rem] uppercase tracking-[.22em] text-white/55">Pôster {poster.id}</span>
                  </div>
                )}
                <div aria-hidden="true" className="poster-shine pointer-events-none absolute inset-0" />
                <span className="absolute bottom-3 left-3 z-10 max-w-[calc(100%-3.5rem)] truncate rounded-full border border-white/20 bg-black/55 px-2.5 py-1 font-mono text-[.58rem] font-bold tracking-[.04em] text-white shadow-sm backdrop-blur-md">{poster.title}</span>
                <button type="button" aria-label={`Ir para a review de ${poster.title}`} onClick={() => goToReview(poster)} className="poster-add absolute bottom-3 right-3 z-10 grid size-8 place-items-center rounded-full border border-white/35 bg-black/45 text-lg text-white/90 opacity-70 backdrop-blur-md transition">+</button>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="reviews-title" className="reviews-section mt-16 md:mt-24">
          <div className="mb-7 flex flex-col gap-3 border-b border-white/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[.68rem] uppercase tracking-[.2em] text-[#B8D8FF]/65">Depois da sessão</p>
              <h2 id="reviews-title" className="mt-2 font-display text-3xl font-black uppercase tracking-[-.05em] md:text-5xl">Meu caderno de reviews</h2>
            </div>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-white/45">Segura na minha mão e assiste, nem questiona</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {favoritePosters.map((poster, index) => (
              <article id={`review-${poster.id}`} key={poster.id} className="review-card group relative min-h-36 scroll-mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 p-5 md:p-6" style={{ animationDelay: `${index * 70}ms`, background: `radial-gradient(ellipse at 100% 0%, ${poster.reviewColor}28, transparent 19rem), linear-gradient(130deg, ${poster.reviewColor}17, rgba(255,255,255,0.025) 60%)`, borderColor: `${poster.reviewColor}48` }}>
                <div className="relative z-10 flex items-start gap-4">
                  <span className="review-quote shrink-0 font-display text-5xl font-black leading-[.75]" style={{ color: poster.reviewColor }}>“</span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-black uppercase tracking-[-.03em] text-white md:text-xl">{poster.title}</h3>
                      <span className="font-mono text-[.58rem] uppercase tracking-[.16em] text-white/35">Review {poster.id}</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-white/55">{poster.review || "Suas considerações sobre este filme entram aqui."}</p>
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-base font-bold" style={{ color: poster.reviewColor }}>Frase preferida:</p>
                      <p className="mt-1 whitespace-pre-line text-sm italic leading-relaxed text-white/65">{poster.favoriteQuote || "Sua frase ou monólogo favorito entra aqui."}</p>
                    </div>
                  </div>
                </div>
                <span aria-hidden="true" className="review-spark absolute -bottom-8 -right-3 font-display text-8xl font-black leading-none text-white/[.035]">✦</span>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="series-title" className="series-showcase mt-20 md:mt-32">
          <div className="mb-7 flex flex-col gap-3 border-b border-white/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[.68rem] uppercase tracking-[.2em] text-[#B8D8FF]/65">Mais um episódio?</p>
              <h2 id="series-title" className="mt-2 font-display text-3xl font-black uppercase tracking-[-.05em] md:text-5xl">Minha vitrine de séries</h2>
            </div>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-white/45">шест седем.</p>
          </div>

          <div className="series-frame relative isolate h-[430px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#171a21] shadow-[0_28px_80px_rgba(0,0,0,.38)] sm:h-[500px] lg:h-[580px]">
            <div className={`series-track absolute inset-y-0 left-0 flex h-full ${seriesTransition ? "transition-transform duration-700 ease-in-out" : ""}`} style={{ width: `${seriesSlides.length * 100}%`, transform: `translateX(-${activeSeriesIndex * (100 / seriesSlides.length)}%)` }}>
              {seriesSlides.map((series, slideIndex) => (
                <article key={`${series.id}-${slideIndex}`} aria-label={`Série: ${series.title}`} aria-hidden={slideIndex !== activeSeriesIndex} className="series-slide relative h-full shrink-0 overflow-hidden" style={{ flex: `0 0 ${100 / seriesSlides.length}%` }}>
                  {series.image ? (
                    <img src={series.image} alt={`Imagem de ${series.title}`} className="absolute inset-0 size-full object-cover" />
                  ) : (
                    <div aria-hidden="true" className="series-art absolute inset-0 grid place-items-center" style={{ background: `radial-gradient(ellipse at 72% 38%, ${series.color} 0%, #252631 52%, #13161d 100%)` }}>
                      <span className="font-display text-[16rem] font-black leading-none text-white/[.055] md:text-[24rem]">{series.id}</span>
                    </div>
                  )}
                  <div aria-hidden="true" className="series-overlay absolute inset-0" />
                  <div aria-hidden="true" className="series-description-shade absolute inset-x-0 bottom-0 z-[5] h-[36%]" />
                  <div className="relative z-10 flex h-full max-w-3xl flex-col justify-end px-7 pb-12 pt-16 sm:px-12 sm:pb-14 lg:px-16">
                    <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[#B8D8FF]">
                      <span className="rounded-sm bg-[#B8D8FF] px-1.5 py-1 text-[.62rem] font-black tracking-normal text-[#11141b]">SOPINHA</span>
                      Série em destaque
                    </p>
                    <h3 className="font-display text-4xl font-black uppercase leading-[.92] tracking-[-.055em] text-white sm:text-6xl md:text-7xl">{series.title}</h3>
                    <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/75 sm:text-base md:text-lg">{series.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <button type="button" aria-label="Série anterior" onClick={() => moveSeries(-1)} className="series-arrow absolute left-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/35 text-2xl text-white backdrop-blur transition hover:border-white/50 hover:bg-black/60 sm:left-5">‹</button>
            <button type="button" aria-label="Próxima série" onClick={() => moveSeries(1)} className="series-arrow absolute right-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/35 text-2xl text-white backdrop-blur transition hover:border-white/50 hover:bg-black/60 sm:right-5">›</button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2" aria-label={`Série ${activeSeriesDot + 1} de ${featuredSeries.length}`}>
              {featuredSeries.map((series, index) => (
                <button key={series.id} type="button" aria-label={`Mostrar ${series.title}`} aria-current={index === activeSeriesDot ? "true" : undefined} onClick={() => setActiveSeriesIndex(index + 1)} className={`series-dot h-1.5 rounded-full transition-all duration-300 ${index === activeSeriesDot ? "w-9 bg-[#B8D8FF]" : "w-4 bg-white/25 hover:bg-white/50"}`} />
              ))}
            </div>
            <span className="font-mono text-[.62rem] uppercase tracking-[.18em] text-white/35">Avanço automático · a cada 10 segundos</span>
          </div>
        </section>

        <section aria-labelledby="disliked-title" className="disliked-showcase mt-20 md:mt-28">
          <div className="mb-7 flex flex-col gap-3 border-b border-white/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[.68rem] uppercase tracking-[.2em] text-[#D8B7FF]/65">Só o Bresser para gostar dessas merdas · 08 espaços</p>
              <h2 id="disliked-title" className="mt-2 font-display text-3xl font-black uppercase tracking-[-.05em] md:text-5xl">essa porra é ruim.</h2>
            </div>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-white/45">Horas da minha vida que poderiam ter sido gastas estudando para o Enem. Clique no + para saber o motivo.</p>
          </div>

          <div className="poster-rail flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-5 sm:gap-5">
            {dislikedTitles.map((item, index) => (
              <article key={item.id} className="disliked-poster poster-card group relative aspect-[.76] w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/15 shadow-[0_18px_45px_rgba(0,0,0,.28)] sm:rounded-[1.35rem]" style={{ animationDelay: `${index * 75}ms` }}>
                <div aria-hidden="true" className="disliked-poster-art absolute inset-0 grid place-items-center">
                  <img src={item.poster} alt={`Pôster de ${item.title}`} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.045]" />
                </div>
                <div aria-hidden="true" className="poster-shine pointer-events-none absolute inset-0" />
                <span className="absolute left-3 top-3 z-10 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 font-mono text-[.55rem] uppercase tracking-[.12em] text-white/80 backdrop-blur-md">Filme · {item.id}</span>
                <span className="absolute bottom-3 left-3 z-10 max-w-[calc(100%-3.5rem)] truncate rounded-full border border-white/20 bg-black/55 px-2.5 py-1 font-mono text-[.58rem] font-bold tracking-[.04em] text-white shadow-sm backdrop-blur-md">{item.title}</span>
                <button type="button" aria-label={`${activeDislikedId === item.id ? "Fechar" : "Abrir"} explicação de ${item.title}`} aria-expanded={activeDislikedId === item.id} aria-controls="disliked-detail" onClick={() => toggleDislikedTitle(item.id)} className="poster-add absolute bottom-3 right-3 z-10 grid size-8 place-items-center rounded-full border border-white/35 bg-black/45 text-lg text-white/90 opacity-70 backdrop-blur-md transition">{activeDislikedId === item.id ? "−" : "+"}</button>
              </article>
            ))}
          </div>

          {activeDislikedId && (() => {
            const item = dislikedTitles.find((entry) => entry.id === activeDislikedId)
            if (!item) return null
            return (
              <article id="disliked-detail" ref={dislikedDetailRef} className="disliked-detail relative mx-auto mt-2 grid max-w-5xl scroll-mt-8 gap-6 overflow-hidden rounded-[1.5rem] border border-white/15 p-5 sm:grid-cols-[1fr_220px] sm:items-center sm:p-7">
                <div className="relative z-10">
                  <p className="font-mono text-[.62rem] uppercase tracking-[.2em] text-[#D8B7FF]/70">A explicação da sopinha · Filme {item.id}</p>
                  <h3 className="mt-2 font-display text-2xl font-black uppercase tracking-[-.04em]">Por que {item.title.toLowerCase()} é uma merda</h3>
                  <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-white/65">{item.explanation}</p>
                </div>
                <div className="relative z-10">
                  <p className="mb-2 font-mono text-[.58rem] font-bold uppercase tracking-[.13em] text-white/55">Honesta reação da sopinha</p>
                  <div className="disliked-reaction relative min-h-44 overflow-hidden rounded-2xl border border-white/10 sm:min-h-52" aria-label={`Reação para ${item.title}`}>
                    <img src={item.reaction} alt={`Imagem de reação: ${item.title}`} className="absolute inset-0 size-full object-cover" />
                  </div>
                </div>
                <button type="button" aria-label="Fechar explicação" onClick={() => setActiveDislikedId(null)} className="absolute right-3 top-3 z-20 grid size-8 place-items-center rounded-full border border-white/15 bg-black/25 text-lg text-white/70 transition hover:bg-white/10">×</button>
              </article>
            )
          })()}
        </section>

        <section aria-labelledby="tier-game-title" className="tier-game-section mt-20 md:mt-28">
          <div className="mb-7 flex flex-col gap-3 border-b border-white/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[.68rem] uppercase tracking-[.2em] text-[#D8B7FF]/70">Desafio interativo · 24 fotos</p>
              <h2 id="tier-game-title" className="mt-2 font-display text-3xl font-black uppercase tracking-[-.05em] md:text-5xl">Tier list da Sopinha</h2>
            </div>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-white/45">Monte a classificação como você acha que eu montei. Depois confira o quanto nossos gostos combinam.</p>
          </div>

          <div className="tier-game-shell overflow-hidden rounded-[1.75rem] border border-white/10 p-4 shadow-[0_28px_80px_rgba(0,0,0,.3)] sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[.62rem] uppercase tracking-[.18em] text-[#B8D8FF]/65">Adivinhe minha tier list</p>
                <h3 className="mt-1 font-display text-xl font-black uppercase tracking-[-.03em] sm:text-2xl">Quem ganha qual categoria?</h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 font-mono text-xs text-white/65">{tierPlacedCount} / {tierListActors.length} classificados</span>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-white/45">Arraste cada foto para uma linha. No celular, toque numa foto e depois em “Colocar aqui” na categoria desejada.</p>

            <div className="tier-board space-y-2.5">
              {tierCategories.map((tier) => {
                const actorsInTier = tierListActors.filter((actor) => tierPlacements[actor.id] === tier.id)
                return (
                  <div key={tier.id} onDragOver={(event) => event.preventDefault()} onDrop={(event) => handleTierDrop(event, tier.id)} className="tier-row group flex min-h-24 overflow-hidden rounded-xl border border-white/10" style={{ "--tier-color": tier.color } as CSSProperties}>
                    <div className="tier-label grid w-28 shrink-0 place-items-center px-2 py-3 text-center text-xs font-black uppercase leading-tight text-[#201b21] sm:w-36 sm:text-sm" style={{ backgroundColor: tier.color }}>{tier.label}</div>
                    <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 p-2 sm:gap-2.5 sm:p-3">
                      {actorsInTier.map((actor) => (
                        <button key={actor.id} type="button" draggable onDragStart={(event) => event.dataTransfer.setData("text/plain", actor.id)} onClick={() => setSelectedActorId(actor.id)} aria-label={`Selecionar ${actor.name}, classificado em ${tier.label}`} className={`tier-actor relative aspect-square w-[4.1rem] shrink-0 overflow-hidden rounded-lg border-2 transition sm:w-[5.2rem] ${selectedActorId === actor.id ? "is-selected" : "border-white/10"} ${tierChecked ? actor.baseTier === tier.id ? "is-correct" : "is-incorrect" : ""}`}>
                          <img src={actor.image} alt={actor.name} className="size-full object-cover" />
                          {tierChecked && <span className="tier-answer-mark absolute right-1 top-1 grid size-5 place-items-center rounded-full bg-black/70 text-xs font-black text-white">{actor.baseTier === tier.id ? "✓" : "×"}</span>}
                        </button>
                      ))}
                      {selectedActorId && <button type="button" onClick={() => { placeActor(selectedActorId, tier.id); setSelectedActorId(null) }} className="tier-place-button rounded-lg border border-dashed border-white/20 px-3 py-2 text-xs font-bold text-white/55 transition hover:border-white/50 hover:text-white">Colocar aqui</button>}
                      {actorsInTier.length === 0 && !selectedActorId && <span className="px-2 text-xs text-white/25">Solte fotos nesta linha</span>}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-black/15 p-3 sm:p-4" onDragOver={(event) => event.preventDefault()} onDrop={(event) => handleTierDrop(event, null)}>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[.62rem] uppercase tracking-[.16em] text-white/45">Fotos para classificar</p>
                {selectedActorId && <button type="button" onClick={() => { placeActor(selectedActorId, null); setSelectedActorId(null) }} className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-white/60 transition hover:bg-white/10">Devolver selecionado</button>}
              </div>
              <div className="flex min-h-24 flex-wrap items-center gap-2">
                {tierListActors.filter((actor) => !tierPlacements[actor.id]).map((actor) => (
                  <button key={actor.id} type="button" draggable onDragStart={(event) => event.dataTransfer.setData("text/plain", actor.id)} onClick={() => setSelectedActorId(selectedActorId === actor.id ? null : actor.id)} aria-label={`Selecionar ${actor.name}`} aria-pressed={selectedActorId === actor.id} className={`tier-actor relative aspect-square w-[4.1rem] shrink-0 overflow-hidden rounded-lg border-2 transition sm:w-[5.2rem] ${selectedActorId === actor.id ? "is-selected" : "border-white/10"}`}>
                    <img src={actor.image} alt={actor.name} className="size-full object-cover" />
                  </button>
                ))}
                {tierPlacedCount === tierListActors.length && <p className="px-2 text-xs text-white/35">Todas as fotos já foram classificadas.</p>}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p role="status" className="text-sm font-semibold text-[#ffd18e]">{tierMessage}</p>
              <div className="ml-auto flex flex-wrap gap-2">
                {tierChecked && <button type="button" onClick={resetTierGame} className="rounded-full border border-white/15 px-4 py-2.5 text-sm font-bold text-white/65 transition hover:bg-white/10">Jogar de novo</button>}
                <button type="button" onClick={checkTierAnswers} className="tier-check-button rounded-full px-5 py-2.5 text-sm font-black text-[#15151d] transition hover:-translate-y-0.5">{tierChecked ? "Atualizar resultado" : "Verificar resposta"}</button>
              </div>
            </div>

            {tierChecked && (
              <div className="tier-result mt-5 flex flex-col gap-2 rounded-2xl border border-[#B8D8FF]/20 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[.62rem] uppercase tracking-[.18em] text-[#B8D8FF]/65">Resultado do desafio</p>
                  <h4 className="mt-1 font-display text-2xl font-black uppercase">{tierRank}</h4>
                </div>
                <p className="text-lg font-bold text-white/80"><span className="text-3xl text-[#B8D8FF]">{tierCorrectCount}</span> de {tierListActors.length} na categoria certa</p>
              </div>
            )}
          </div>
        </section>

        <footer className="mt-16 flex items-center gap-3 text-xs font-medium uppercase tracking-[.18em] text-white/35">
          <span className="h-px w-10 bg-gradient-to-r from-[#B8D8FF] to-transparent" />
          seis sete
        </footer>
      </div>
    </main>
  )
}

export default FilmsPage
