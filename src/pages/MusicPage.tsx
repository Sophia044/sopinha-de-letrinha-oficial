import { useEffect, useState, type CSSProperties } from "react"
import melanieFavoriteSongImage from "../../Imagens/músicas/melanie 1.jpg"
import melanieFavoriteAlbumImage from "../../Imagens/músicas/melanie 2.jpg"
import madHatterCover from "../../Imagens/músicas/mad hatter.jpg"
import tagYoureItCover from "../../Imagens/músicas/tag you're it.jpg"
import deadToMeCover from "../../Imagens/músicas/dead to me.jpg"
import highSchoolSweetheartsCover from "../../Imagens/músicas/high school sweethearts.jpg"
import grudgesCover from "../../Imagens/músicas/grudges.jpg"
import mitskiLushMural from "../../Imagens/músicas/mitski .jpg"
import jorgeBenJorMural from "../../Imagens/músicas/jorge ben jor.jpg"
import metallicaRideTheLightningMural from "../../Imagens/músicas/metallica.jpg"
import systemJokeMural from "../../Imagens/músicas/system.jpg"

const musicRankings = [
  {
    id: "faixas",
    eyebrow: "No repeat",
    title: "Músicas",
    subtitle: "Músicas favoritas (talvez a ordem não esteja certa).",
    accent: "#a8b8ff",
    items: [
      { title: "Feeling Good", detail: "Nina Simone" },
      { title: "Bohemian Rhapsody", detail: "Queen" },
      { title: "Mad Hatter", detail: "Melanie Martinez" },
      { title: "Sugar", detail: "System of a Down" },
      { title: "Jigsaw Falling Into Place", detail: "Radiohead" },
      { title: "Born to Die", detail: "Lana Del Rey" },
      { title: "Homem-Aranha", detail: "Jorge Vercillo" },
      { title: "Love Like You", detail: "Rebecca Sugar" },
      { title: "Atrás/Além", detail: "O Terno" },
      { title: "Supremacy", detail: "Muse" },
    ],
  },
  {
    id: "bandas",
    eyebrow: "as minhas bandas favoritas",
    title: "Bandas",
    subtitle: "Acho que nem conheço tantas bandas assim.",
    accent: "#f2a5d2",
    items: [
      { title: "Queen", detail: "Banda favorita" },
      { title: "Metallica", detail: "Banda favorita" },
      { title: "System of a Down", detail: "Banda favorita" },
      { title: "Highly Suspect", detail: "Banda favorita" },
      { title: "Ntiruts", detail: "Banda favorita" },
      { title: "Red Hot Chili Peppers", detail: "Banda favorita" },
      { title: "Legião Urbana", detail: "Banda favorita" },
      { title: "Guns N’ Roses", detail: "Banda favorita" },
      { title: "Radiohead", detail: "Banda favorita" },
      { title: "Limp Bizkit", detail: "Banda favorita" },
    ],
  },
  {
    id: "cantores",
    eyebrow: "Melanie Martinez",
    title: "Cantores",
    subtitle: "EU AMO A MELANIE.",
    accent: "#ffbd70",
    items: [
      { title: "Melanie Martinez", detail: "Cantora favorita" },
      { title: "Freddie Mercury", detail: "Cantor favorito" },
      { title: "Michael Jackson", detail: "Cantor favorito" },
      { title: "Rihanna", detail: "Cantora favorita" },
      { title: "Mitski", detail: "Cantora favorita" },
      { title: "Jorge Ben Jor", detail: "Cantor favorito" },
      { title: "Jamie Cullum", detail: "Cantor favorito" },
      { title: "Ray Charles", detail: "Cantor favorito" },
      { title: "O Rappa", detail: "Artista favorito" },
      { title: "Kanye West", detail: "Artista favorito" },
    ],
  },
]

const melanieVeinSongs = [
  { title: "Mad Hatter", cover: madHatterCover, favoriteLine: "I'm peeling the skin off my face."  },
  { title: "Tag, You’re It", cover: tagYoureItCover, favoriteLine: "I love it when I hear you breathing, I hope to God you're never leaving." },
  { title: "Dead to Me", cover: deadToMeCover, favoriteLine: "I need to kill you. That’s the only way to get you out of my head" },
  { title: "High School Sweethearts", cover: highSchoolSweetheartsCover, favoriteLine: "Could you hold me through the night? Put your lips all over mine. Salty face when I start crying." },
  { title: "Grudges", cover: grudgesCover, favoriteLine: "Fuck around that much, and oh, you'll find a grudge for life." },
]

const favoriteSongWallLines: Record<string, string> = {
  "atrás além": "Recuperando as memórias\nDo que eu fiz\nNo tempo junto ao seu lado\nFui feliz",
  "born to die": "Don't make me sad, don't make me cry\nSometimes love is not enough and the road gets tough, I don't know why.",
  circo: "Eu não sou nenhuma otária pra te esperar\nVocê não é tão inteligente pra me enganar.",
  "girl with one eye": "I took a knife and cut out her eye\nI took it home and watched it wither and die\nWell, she's lucky that I didn't slip her a smile.",
  heartless: "You wait a couple of months, then you gon' see\nYou'll never find nobody better than me.",
  "hit me like a man": "Hit me like a man\nLove me like a woman\nFrom the devil deep inside\nCan't you see what I'm wanting?.",
  "i hate everything about you": "I hate everything about you\nWhy do I love you?.",
  "i love you like an alcoholic": "I love you like an alcoholic\nOne last kiss\nI need you like I need a broken leg.",
  "i will always think of you": "No, I don't want to be alone now\nJust biding my time\nI need somebody dearly\nAnd darling, you'd be sublime.",
  "jigsaw falling": "So there is nothing to explain\nYou eye each other as you pass\nShe looks back, you look back.",
  "lets be friends": "Let's be friends, so we can make out\nYou're so hot, let me show you around.",
  "love interruption": "I want love to\nRoll me over slowly\nStick a knife inside me\nAnd twist it all around.",
  "my moon my man": "Take it slow\nTake it easy on me\nShed some light on me, please.",
  "norman fucking rockwell": "Goddamn, man-child\nYou fucked me so good that I almost said: I love you.",
  sozinho: "Por que você me deixa tão solto?\nPor que você não cola em mim?\nTô me sentindo muito sozinho.",
  sunny: "Sunny, thank you for that smile upon your face\nSunny, one so true, yes, I love you.",
  "the great gig in the sky": "Oooohohahhaohhhho.",
  "this i love": "I hoped she'd never leave me\nPlease, God, you must believe me\nI've searched the universe\nAnd found myself within' her eyes.",
  volta: "Que eu estou te esperando desde que eu nasci\nMinha vida pro momento que eu te conheci\nE o amor que eu guardava, eu guardei pra você.",
}

const favoriteSongWallCovers = Object.entries(import.meta.glob<string>("../../Imagens/músicas/letras músicas/*.{jpg,jpeg,png,webp}", { eager: true, import: "default", query: "?url" }))
  .map(([path, cover]) => {
    const filename = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "Música favorita"
    const title = filename.replace(/(^|\s)(\p{L})/gu, (_match, space: string, letter: string) => `${space}${letter.toLocaleUpperCase("pt-BR")}`)
    return { title, cover, favoriteLine: favoriteSongWallLines[filename.toLocaleLowerCase("pt-BR")] ?? `Sua frase favorita de ${title} entra aqui.` }
  })
  .sort((first, second) => first.title.localeCompare(second.title, "pt-BR"))

const mitskiFavoriteLines = [
  {
    song: "I Don’t Smoke",
    lyric: "If you need to be mean, be mean to me\nI can take it and put it inside of me\nIf your hands need to break more than trinkets in your room\nYou can lean on my arm as you break my heart",
    translation: "Se você precisa ser cruel, seja cruel comigo\nEu aguento e guardo isso dentro de mim\nSe suas mãos precisam quebrar mais coisas além dos objetos no seu quarto\nPode se apoiar no meu braço enquanto parte meu coração",
    comment: "E então, no primeiro dia a Mitski disse ‘haja luz’, e desde então isso ilumina minha vida.",
  },
  {
    song: "Nobody",
    lyric: "And I don’t want your pity\nI just want somebody near me\nGuess I’m a coward\nI just want to feel alright",
    translation: "E eu não quero sua pena\nSó quero alguém perto de mim\nAcho que sou covarde\nSó quero me sentir bem",
    comment: "Quando só falta o pastor falar seu nome no culto.",
  },
  {
    song: "A Pearl",
    lyric: "Sorry, I don’t want your touch\nIt’s not that I don’t want you\nSorry, I can’t take your touch",
    translation: "Desculpa, não quero seu toque\nNão é que eu não queira você\nDesculpa, não consigo suportar seu toque",
    comment: "Todas as minhas manhãs têm esse som antes de eu decidir que não vou dar nenhuma chance ao dia.",
  },
  {
    song: "Me and My Husband",
    lyric: "And I’m the idiot with the painted face\nIn the corner, taking up space\nBut when he walks in, I am loved, I am loved",
    translation: "E eu sou a idiota de rosto pintado\nNo canto, ocupando espaço\nMas quando ele entra, sou amada, sou amada",
    comment: "FREUD, EXPLICA ESSA MERDA POR FAVOR.",
  },
  {
    song: "Liquid Smooth",
    lyric: "I’m liquid smooth\nCome touch me, too\nAnd feel my skin is plump and full of life\nI’m in my prime",
    translation: "Sou líquido, macio\nVenha me tocar também\nE sinta minha pele viçosa, cheia de vida\nEstou no meu auge",
    comment: "Eu sou a PORRA de um líquido macio. E se você não entende isso, você é um homem.",
  },
]

function MusicPage() {
  const sanctuarySlides = [
    { title: "Melanie Martinez", eyebrow: "Espaço de adoração", description: "“Aqui é Melanie na VEIA, PORRA!” foi o que a Sophia disse enquanto desenvolvia este site. Na verdade, dizem que a Sopinha nasceu no instante em que Melanie cantou sua versão de “Toxic”, da Britney Spears, no The Voice.", tone: "#f293b5", kind: "melanie" },
    { title: "Mitski", eyebrow: "Artista em destaque", description: "Olha, a sopinha não tem depressão e ela não precisa de terapia, mas se algum dia ela desenvolver problemas psicológicos — que ela não tem no momento —, a culpa vai ser da Mitski.", tone: "#3d572e", kind: "artist" },
    { title: "Jorge Ben Jor", eyebrow: "Artista em destaque", description: "A Sopinha acha que esse cara é o maior pau-mandado do mundo inteiro. Todas as músicas dele são algum tipo de adoração a alguma mulher. Ele sabe das coisas.", tone: "#db7b37", kind: "artist" },
    { title: "Metallica", eyebrow: "Banda em destaque", description: "A Sophia é meio foda, às vezes. Ela literalmente platinou o Guitar Hero: Metallica, com cinco estrelas em todas as músicas. Depois de jogar esse jogo tantas vezes enquanto o cérebro ainda estava em uma etapa importante do desenvolvimento, agora suas conexões cerebrais funcionam ao som de 'Am I Evil?'.", tone: "#453786", kind: "artist" },
    { title: "System of a Down", eyebrow: "Banda em destaque", description: "Aqui é SUGAR, porra, não fode! SEM CAPITALISMO POR AQUI.", tone: "#7f2526", kind: "artist" },
    { title: "Letras tatuadas no meu cérebro", eyebrow: "Músicas favoritas", description: "Às vezes, algumas letras são legais. Estas são as minhas favoritas.", tone: "#bd78a0", kind: "songs" },
  ]
  const [activeSanctuarySlide, setActiveSanctuarySlide] = useState(0)
  const [isMelanieSongSecretOpen, setIsMelanieSongSecretOpen] = useState(false)
  const [activeMitskiQuoteIndex, setActiveMitskiQuoteIndex] = useState(0)
  const [showMitskiTranslation, setShowMitskiTranslation] = useState(false)
  const [isMetallicaLightningActive, setIsMetallicaLightningActive] = useState(false)
  const [songForSophia, setSongForSophia] = useState("")
  const [hasSentSongNote, setHasSentSongNote] = useState(false)
  const [songNoteComment, setSongNoteComment] = useState("")
  const [soupHasThisVibe, setSoupHasThisVibe] = useState(false)
  const isMetallicaShowcase = sanctuarySlides[activeSanctuarySlide].title === "Metallica"
  const isSystemShowcase = sanctuarySlides[activeSanctuarySlide].title === "System of a Down"

  useEffect(() => {
    if (!isMetallicaShowcase) {
      setIsMetallicaLightningActive(false)
      return
    }
    let strikeTimer = 0
    let flashTimer = 0
    const scheduleStrike = () => {
      strikeTimer = window.setTimeout(() => {
        setIsMetallicaLightningActive(true)
        flashTimer = window.setTimeout(() => {
          setIsMetallicaLightningActive(false)
          scheduleStrike()
        }, 760)
      }, 12000 + Math.random() * 6000)
    }
    scheduleStrike()
    return () => {
      window.clearTimeout(strikeTimer)
      window.clearTimeout(flashTimer)
    }
  }, [isMetallicaShowcase])
  return (
    <main className="music-page relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-6 text-white md:px-10 md:pt-9 lg:px-16">
      <div aria-hidden="true" className="music-aurora music-aurora-one" />
      <div aria-hidden="true" className="music-aurora music-aurora-two" />
      <div aria-hidden="true" className="music-aurora music-aurora-three" />
      <div aria-hidden="true" className="music-starfield" />
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <a href="#cardapio" className="music-back inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[.06] px-5 py-3 text-sm font-bold text-white/85 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10">
          <span aria-hidden="true">←</span> Voltar ao cardápio
        </a>

        <header className="music-hero relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 px-6 py-9 sm:mt-16 sm:px-10 sm:py-12 lg:mt-20 lg:px-14 lg:py-16">
          <div className="relative z-10 max-w-4xl">
            <p className="mb-6 flex items-center gap-3 font-mono text-[.65rem] font-bold uppercase tracking-[.22em] text-white/65 sm:text-xs">
              <span className="music-live-dot size-2 rounded-full" />
              SOPINHA NO REPEAT <span className="text-white/25">/</span> RANKINGS PÚBLICOS QUE DEVERIAM SER SEGUIDOS
            </p>
            <h1 className="font-display text-5xl font-black uppercase leading-[.88] tracking-[-.075em] sm:text-7xl md:text-8xl lg:text-[7rem]">
              Música é<br />
              <span className="music-title-gradient">igual maconha.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-white/60 sm:text-base md:text-lg">
              Trinta lugares no pódio para as faixas, bandas e vozes que moram na cabeça da Sopinha.
            </p>
            <nav aria-label="Ir para um ranking musical" className="mt-8 flex flex-wrap gap-2.5">
              {musicRankings.map((ranking) => (
                <button key={ranking.id} type="button" onClick={() => document.getElementById(`music-${ranking.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })} className="music-nav-chip rounded-full border border-white/15 bg-white/[.055] px-4 py-2 text-xs font-bold text-white/75 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[.12]">{ranking.title}</button>
              ))}
            </nav>
          </div>
          <div aria-hidden="true" className="music-equalizer absolute bottom-8 right-8 hidden items-end gap-2 opacity-75 md:flex lg:bottom-12 lg:right-14">
                {Array.from({ length: 15 }, (_, index) => <span key={index} style={{ animationDelay: `${index * -0.09}s`, height: `${18 + ((index * 13) % 38)}px` }} />)}
          </div>
          <span aria-hidden="true" className="music-hero-note absolute -right-4 top-0 hidden font-display text-[20rem] font-black leading-none md:block">♫</span>
        </header>

        <div className="music-rankings mt-12 grid items-start gap-5 xl:grid-cols-3">
          {musicRankings.map((ranking) => (
            <section key={ranking.id} id={`music-${ranking.id}`} aria-labelledby={`music-${ranking.id}-title`} className="music-ranking-card scroll-mt-8 overflow-hidden rounded-[1.65rem] border border-white/10" style={{ "--music-accent": ranking.accent } as CSSProperties}>
              <header className="music-ranking-heading p-5 sm:p-6">
                <div aria-hidden="true" className="music-vinyl"><span>♫</span></div>
                <p className="font-mono text-[.6rem] uppercase tracking-[.2em]" style={{ color: ranking.accent }}>{ranking.eyebrow} · TOP 10</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h2 id={`music-${ranking.id}-title`} className="font-display text-3xl font-black uppercase tracking-[-.055em] sm:text-4xl">{ranking.title}</h2>
                  <span className="music-ranking-count rounded-full border border-white/10 px-2.5 py-1 font-mono text-[.58rem] text-white/45">10 itens</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white/45 sm:text-sm">{ranking.subtitle}</p>
              </header>
              <ol className="music-ranking-list px-3 pb-3 sm:px-4 sm:pb-4">
                {ranking.items.map((item, index) => {
                  const isMelanie = ranking.id === "cantores" && index === 0
                  const sanctuarySlideIndex = sanctuarySlides.findIndex((slide) => slide.title.toLowerCase() === item.title.toLowerCase())
                  const hasSanctuary = sanctuarySlideIndex > 0
                  const itemAccent = sanctuarySlides[sanctuarySlideIndex]?.tone
                  const rowContent = (
                    <>
                      <span className="music-rank-number grid size-9 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold" style={{ color: ranking.accent }}>{String(index + 1).padStart(2, "0")}</span>
                      <span aria-hidden="true" className="music-rank-spark grid size-9 shrink-0 place-items-center rounded-full text-sm" style={{ color: ranking.accent }}>{isMelanie ? "✧" : index === 0 ? "✦" : "♪"}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold text-white/90 sm:text-[.95rem]">{item.title}</span>
                        <span className="mt-1 block truncate text-xs text-white/55">{isMelanie ? "A diva, um fandom e zero imparcialidade" : item.detail}</span>
                      </span>
                      {isMelanie && <span className="music-melanie-badge hidden shrink-0 rounded-full px-2.5 py-1 font-mono text-[.5rem] font-bold uppercase tracking-[.1em] sm:inline-flex">Abrir santuário</span>}
                      <span aria-hidden="true" className="music-row-arrow text-sm text-white/55 transition group-hover:translate-x-1">{isMelanie ? "↓" : "↗"}</span>
                    </>
                  )

                  return (
                    <li key={item.title} className={`music-rank-row group flex items-center gap-3 rounded-xl px-3 py-3.5 transition sm:gap-4 sm:px-4 ${isMelanie ? "music-melanie-entry" : hasSanctuary ? "music-sanctuary-entry" : ""}`} style={{ animationDelay: `${index * 45}ms`, ...(hasSanctuary ? { "--artist-accent": itemAccent } : {}) } as CSSProperties}>
                      {isMelanie || hasSanctuary ? (
                        <button type="button" onClick={() => { setActiveSanctuarySlide(sanctuarySlideIndex); document.getElementById("melanie-sanctuary")?.scrollIntoView({ behavior: "smooth", block: "center" }) }} aria-label={`Abrir o espaço de ${item.title}`} className={`${isMelanie ? "music-melanie-trigger" : "music-sanctuary-trigger"} flex w-full items-center gap-3 text-left sm:gap-4`}>
                          {rowContent}
                        </button>
                      ) : (
                        <div className="flex w-full items-center gap-3 sm:gap-4">{rowContent}</div>
                      )}
                    </li>
                  )
                })}
              </ol>
              <div aria-hidden="true" className="music-card-glow" />
            </section>
          ))}
        </div>

        <section id="melanie-sanctuary" aria-labelledby="melanie-sanctuary-title" className={`music-sanctuary relative mt-16 scroll-mt-8 overflow-hidden rounded-[2rem] border border-white/15 p-6 sm:mt-20 sm:p-9 lg:p-12 ${isSystemShowcase ? "music-sanctuary-system" : ""}`} style={{ "--sanctuary-accent": sanctuarySlides[activeSanctuarySlide].tone, ...(isSystemShowcase ? { backgroundImage: `linear-gradient(90deg, rgba(12, 8, 12, .62), rgba(12, 8, 12, .18) 72%, rgba(12, 8, 12, .24)), url("${systemJokeMural}")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" } : {}) } as CSSProperties}>
          <div aria-hidden="true" className="music-sanctuary-glow music-sanctuary-glow-one" />
          <div aria-hidden="true" className="music-sanctuary-glow music-sanctuary-glow-two" />
          <div className={`music-showcase relative z-10 ${sanctuarySlides[activeSanctuarySlide].title === "Mitski" ? "music-showcase-mitski" : isMetallicaShowcase ? "music-showcase-metallica" : ""}`} key={activeSanctuarySlide}>
            <div>
              <p className="mb-4 flex items-center gap-2 font-mono text-[.62rem] font-bold uppercase tracking-[.2em]" style={{ color: sanctuarySlides[activeSanctuarySlide].tone }}>
                <span aria-hidden="true" className="music-sanctuary-star">✦</span> {sanctuarySlides[activeSanctuarySlide].eyebrow} · entrada liberada
              </p>
              <h2 id="melanie-sanctuary-title" className="font-display text-4xl font-black uppercase leading-[.92] tracking-[-.06em] sm:text-6xl">
                {sanctuarySlides[activeSanctuarySlide].kind === "melanie" ? <>Espaço de adoração<br /><span className="music-melanie-gradient">da Melanie</span></> : <span style={{ color: sanctuarySlides[activeSanctuarySlide].tone }}>{sanctuarySlides[activeSanctuarySlide].title}</span>}
              </h2>
              <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/70 sm:text-base">
                {sanctuarySlides[activeSanctuarySlide].description}
              </p>
            </div>
            {sanctuarySlides[activeSanctuarySlide].kind === "melanie" ? <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <button type="button" aria-expanded={isMelanieSongSecretOpen} aria-controls="melanie-song-secret" onClick={() => setIsMelanieSongSecretOpen((open) => !open)} className="music-melanie-song-button music-melanie-favorite music-image-favorite music-melanie-photo-card w-full rounded-[1.4rem] border border-white/15 p-5 text-left sm:p-6" style={{ backgroundImage: `linear-gradient(0deg, rgba(35, 15, 28, .94), rgba(35, 15, 28, .18)), url("${melanieFavoriteSongImage}")` }}>
                  <span aria-hidden="true" className="music-favorite-icon grid size-11 place-items-center rounded-2xl text-xl">♫</span>
                  <p className="mt-5 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-white/75">A música favorita da sopa</p>
                  <p className="mt-2 font-display text-xl font-black uppercase leading-tight">indefinido (ela não consegue escolher)</p>
                  <span className="music-secret-hint mt-3 block font-mono text-[.55rem] font-bold uppercase tracking-[.14em] text-white/65">Tem mais uma… clique para descobrir ↓</span>
                </button>
                {isMelanieSongSecretOpen && <div id="melanie-song-secret" className="music-melanie-secret mt-3 rounded-[1.2rem] border p-4 sm:p-5">
                  <p className="font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-[#f7b0c5]">Segredo da Sopinha</p>
                  <h3 className="mt-2 font-display text-lg font-black uppercase leading-tight sm:text-xl">Mas ela poderia injetar essas na veia</h3>
                  <div className="music-secret-song-list mt-4" aria-label="Cinco músicas da Melanie">
                    {melanieVeinSongs.map((song, index) => <article key={song.title} className="music-secret-song">
                      <img src={song.cover} alt={`Capa de ${song.title}`} className="music-secret-song-cover" />
                      <p className="mt-2 font-display text-xs font-black uppercase leading-tight">{String(index + 1).padStart(2, "0")} · {song.title}</p>
                      <p className="mt-2 text-xs italic leading-relaxed text-white/70">“{song.favoriteLine}”</p>
                    </article>)}
                  </div>
                </div>}
              </div>
              <article className="music-melanie-favorite music-melanie-album music-image-favorite music-melanie-album-photo music-melanie-photo-card rounded-[1.4rem] border border-white/15 p-5 sm:p-6" style={{ backgroundImage: `linear-gradient(0deg, rgba(35, 15, 28, .9), rgba(35, 15, 28, .14)), url("${melanieFavoriteAlbumImage}")` }}>
                <span aria-hidden="true" className="music-favorite-icon grid size-11 place-items-center rounded-2xl text-xl">✿</span>
                <p className="mt-5 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-white/75">O álbum favorito da sopa</p>
                <p className="mt-2 font-display text-xl font-black uppercase leading-tight">Cry Baby / K12</p>
              </article>
            </div> : sanctuarySlides[activeSanctuarySlide].title === "Jorge Ben Jor" ? <div className="music-jorge-mural">
              <img src={jorgeBenJorMural} alt="Colagem de imagens de Jorge Ben Jor" className="music-jorge-mural-image" />
              <figure className="music-jorge-lyric-panel">
                <figcaption>Jorge Ben Jor <span>·</span> Amante Amado</figcaption>
                <blockquote>Quero ser mandado, adorado<br />Acariciado, machucado<br />E amado por você<br />E depois me mande embora<br />Mesmo que sejam quatro horas da manhã</blockquote>
              </figure>
            </div> : sanctuarySlides[activeSanctuarySlide].title === "Metallica" ? <div className={`music-metallica-wall ${isMetallicaLightningActive ? "is-lightning-active" : ""}`}>
              <img src={metallicaRideTheLightningMural} alt="Pôster de Ride the Lightning, do Metallica, com espaço para a letra à direita" className="music-metallica-mural-image" />
              <div className="music-metallica-lyric-panel">
                <p className="music-metallica-track">Metallica <span>·</span> Loverman</p>
                <blockquote>L is for love, baby<br />O is for only you that I do<br />V is for loving virtually everything that you are<br />E is for loving almost everything that you do</blockquote>
                <p className="music-metallica-comment">Essa nem é a música favorita da Sopinha; ela só achou legal o jogo de palavras e quis colocá-la aqui. Ela diz que prefere “For Whom the Bell Tolls”.</p>
              </div>
              <div aria-hidden="true" className="music-metallica-lightning">
                <svg viewBox="0 0 180 300" preserveAspectRatio="none"><path d="M105 0 63 79 93 74 42 158 81 144 55 224 137 109 103 119 139 45 110 53Z" /></svg>
              </div>
              {isMetallicaLightningActive && <div aria-hidden="true" className="music-metallica-flash" />}
            </div> : sanctuarySlides[activeSanctuarySlide].title === "Mitski" ? <div className="music-mitski-wall">
              <img src={mitskiLushMural} alt="Capa do álbum Lush, de Mitski, com espaço para frases no lado direito" className="music-mitski-mural-image" />
              <div className="music-mitski-quote-panel" key={activeMitskiQuoteIndex}>
                <div className="music-mitski-quote-topline">
                  <span className="font-mono text-[.58rem] font-bold uppercase tracking-[.18em] text-[#b1c894]">{mitskiFavoriteLines[activeMitskiQuoteIndex].song}</span>
                  <button type="button" onClick={() => setShowMitskiTranslation((current) => !current)} className="music-mitski-translate">{showMitskiTranslation ? "Ver em inglês" : "Traduzir para português"}</button>
                </div>
                <blockquote className="music-mitski-lyric whitespace-pre-line">{showMitskiTranslation ? mitskiFavoriteLines[activeMitskiQuoteIndex].translation : mitskiFavoriteLines[activeMitskiQuoteIndex].lyric}</blockquote>
                <p className="music-mitski-comment">{mitskiFavoriteLines[activeMitskiQuoteIndex].comment}</p>
                <div className="music-mitski-track-controls">
                  <button type="button" aria-label="Frase anterior" onClick={() => setActiveMitskiQuoteIndex((activeMitskiQuoteIndex + mitskiFavoriteLines.length - 1) % mitskiFavoriteLines.length)}>←</button>
                  <span>{String(activeMitskiQuoteIndex + 1).padStart(2, "0")} / {String(mitskiFavoriteLines.length).padStart(2, "0")}</span>
                  <button type="button" aria-label="Próxima frase" onClick={() => setActiveMitskiQuoteIndex((activeMitskiQuoteIndex + 1) % mitskiFavoriteLines.length)}>→</button>
                </div>
              </div>
            </div> : sanctuarySlides[activeSanctuarySlide].title === "System of a Down" ? null : sanctuarySlides[activeSanctuarySlide].kind === "songs" ? <div className="music-favorite-song-wall">
              <div className="music-favorite-song-heading"><div><p>Arquivo de faixas</p><h3>Músicas que a sopinha curte</h3></div><span>{favoriteSongWallCovers.length} capas</span></div>
              <div className="music-favorite-song-rail" aria-label="Capas das músicas favoritas; role para o lado para ver todas">
                {favoriteSongWallCovers.map((song, index) => <article key={song.title} className="music-favorite-song-card">
                  <img src={song.cover} alt={`Capa de ${song.title}`} loading="lazy" />
                  <p className="music-favorite-song-title">{String(index + 1).padStart(2, "0")} · {song.title}</p>
                  <p className="music-favorite-song-quote">“{song.favoriteLine}”</p>
                </article>)}
              </div>
            </div> : <div className="music-artist-placeholder grid min-h-48 place-items-center rounded-[1.4rem] border border-white/15 p-6 text-center"><span aria-hidden="true" className="text-7xl" style={{ color: sanctuarySlides[activeSanctuarySlide].tone }}>♫</span><p className="font-mono text-[.62rem] font-bold uppercase tracking-[.2em] text-white/55">Seu espaço para fotos, álbuns e favoritos</p></div>}
          </div>
          <div className="music-showcase-controls relative z-10 mt-8 flex items-center justify-between gap-4">
            <button type="button" aria-label="Vitrine anterior" onClick={() => setActiveSanctuarySlide((activeSanctuarySlide + sanctuarySlides.length - 1) % sanctuarySlides.length)} className="music-showcase-arrow">←</button>
            <div className="flex flex-wrap justify-center gap-2" aria-label="Escolher vitrine">
              {sanctuarySlides.map((slide, index) => <button key={slide.title} type="button" aria-label={`Mostrar ${slide.title}`} aria-current={index === activeSanctuarySlide ? "true" : undefined} onClick={() => setActiveSanctuarySlide(index)} className={`music-showcase-dot ${index === activeSanctuarySlide ? "is-active" : ""}`} />)}
            </div>
            <button type="button" aria-label="Próxima vitrine" onClick={() => setActiveSanctuarySlide((activeSanctuarySlide + 1) % sanctuarySlides.length)} className="music-showcase-arrow">→</button>
          </div>
          <span aria-hidden="true" className="music-sanctuary-decoration absolute -bottom-16 right-[38%] font-display text-[14rem] font-black leading-none">✧</span>
        </section>

        <section aria-labelledby="music-note-title" className="music-note-section mt-14 sm:mt-20">
          <h2 className="music-note-section-title">Que som tem a <span>Sopinha?</span></h2>
          <div className={`music-note-paper ${hasSentSongNote ? "is-note-delivered" : ""}`}>
            <div aria-hidden="true" className="music-note-tape">✦ correio musical ✦</div>
            <span aria-hidden="true" className="music-note-sticker music-note-sticker-one">♫</span>
            <span aria-hidden="true" className="music-note-sticker music-note-sticker-two">✿</span>
            {!hasSentSongNote ? (
              <form onSubmit={(event) => { event.preventDefault(); if (songForSophia.trim()) setHasSentSongNote(true) }} className="music-note-content music-note-game">
                <div className="music-note-game-topline"><p className="music-note-kicker">Desafio musical da Sopinha</p><span>FASE 01 <i>●</i> 02</span></div>
                <h2 id="music-note-title">Se a <span>Sophia</span> fosse uma música…</h2>
                <p className="music-note-prompt">Qual música combina com ela? Deixe sua recomendação no bilhete!</p>
                <label className="music-note-comment-label" htmlFor="song-note-comment">Um comentário sobre a escolha (opcional):</label>
                <textarea id="song-note-comment" className="music-note-comment-input" value={songNoteComment} onChange={(event) => setSongNoteComment(event.target.value)} maxLength={180} placeholder="Essa música combina com a Sophia porque…" rows={2} />
                <div className="music-note-vibe-row">
                  <label className="music-note-vibe-check"><input type="checkbox" checked={soupHasThisVibe} onChange={(event) => setSoupHasThisVibe(event.target.checked)} /><span className="music-note-check-box" aria-hidden="true">{soupHasThisVibe ? "✓" : ""}</span><span>essa sopa tem essa vibe</span></label>
                </div>
                <label htmlFor="song-for-sophia">Agora manda a música:</label>
                <div className="music-note-input-row">
                  <input id="song-for-sophia" value={songForSophia} onChange={(event) => setSongForSophia(event.target.value)} maxLength={120} placeholder="Uma música, artista ou os dois…" required />
                  <button type="submit">Enviar resposta <span aria-hidden="true">➜</span></button>
                </div>
                <div className="music-note-progress" aria-label="Progresso: fase 1 de 2"><span /></div>
                <p className="music-note-footnote">Ela não aceita músicas da Taylor Swift</p>
              </form>
            ) : (
              <div className="music-note-content music-note-confirmation" role="status" aria-live="polite">
                <p className="music-note-kicker">✦ missão cumprida ✦</p>
                <h2 id="music-note-title">A trilha sonora da Sophia é <span>“{songForSophia.trim()}”</span>!</h2>
                {songNoteComment.trim() && <p className="music-note-mood-result">“{songNoteComment.trim()}”</p>}
                {soupHasThisVibe && <p className="music-note-mood-result">☑ essa sopa tem essa vibe</p>}
                <p>Sua recomendação não vai ficar salva e a Sophia definitivamente não vai ver o que você recomendou pois nós não sabemos trabalhar com banco de dados. Mas tire um print e envie para a sopinha, ela vai gostar de saber (caso você não tenha o número dela você não é realmente importante, saia do site)! 💌</p>
                <button type="button" onClick={() => { setHasSentSongNote(false); setSongForSophia(""); setSongNoteComment(""); setSoupHasThisVibe(false) }} className="music-note-again">Jogar de novo ↺</button>
              </div>
            )}
          </div>
        </section>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs font-mono uppercase tracking-[.16em] text-white/35">
          <span>Uma playlist sem fim</span>
          <a href="#cardapio" className="transition hover:text-white/75">← Voltar ao cardápio</a>
        </footer>
      </div>
    </main>
  )
}

export default MusicPage
