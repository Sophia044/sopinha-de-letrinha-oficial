import { useState } from "react"

import dundieAward from "../../Imagens/os dundies/dundie.png"

type Difficulty = "facil" | "medio" | "dificil"

type AnswerOption = {
  label: string
  image?: string
  color?: string
  textColor?: string
}

type DundieQuestion = {
  question: string
  answers: AnswerOption[]
  correct: number
}

const questionBank: Record<Difficulty, DundieQuestion[]> = {
  facil: [
    {
      question: "Qual o estudioso favorito da Sopinha?",
      answers: [
        { label: "Durkheim", image: "1- fácil/durkheim.jpg" },
        { label: "Freud", image: "1- fácil/feud.jpg" },
        { label: "Foucault", image: "1- fácil/foucault.jpg" },
        { label: "Voltaire", image: "1- fácil/voltaire.jpg" },
      ],
      correct: 1,
    },
    {
      question: "Qual é o melhor Pokémon do mundo?",
      answers: [
        { label: "Snorlax", image: "2- fácil/snorlax.jpg" },
        { label: "Psyduck", image: "2- fácil/psyduck.jpg" },
        { label: "Gengar", image: "2- fácil/gengar.jpg" },
        { label: "Mewtwo", image: "2- fácil/mewtwo.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Qual é o refrigerante favorito da Sophia?",
      answers: [
        { label: "Pepsi Twist", image: "3- fácil/pepsi.jpg" },
        { label: "Coca-Cola", image: "3- fácil/coca-cola.jpg" },
        { label: "Fanta Uva", image: "3- fácil/fanta uva.jpg" },
        { label: "Schweppes", image: "3- fácil/schweppes.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Qual cantor tem mais aura?",
      answers: [
        { label: "Freddie Mercury", image: "4- fácil/freddie.jpg" },
        { label: "Michael Jackson", image: "4- fácil/michael jackson.jpg" },
        { label: "Chester", image: "4- fácil/chester.jpg" },
        { label: "David Bowie", image: "4- fácil/david.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Qual é o animal preferido da Little Soup?",
      answers: [
        { label: "Cobra", image: "5- fácil/cobra.jpg" },
        { label: "Focas", image: "5- fácil/focas.jpg" },
        { label: "Miyazaki", image: "5- fácil/miyazaki.jpg" },
        { label: "Cachorros", image: "5- fácil/cachorro.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Qual atriz merece o Dundie de melhor do mundo?",
      answers: [
        { label: "Natalie Portman", image: "6- fácil/natalie portman.jpg" },
        { label: "Jodie Foster", image: "6- fácil/jodie foster.jpg" },
        { label: "Florence Pugh", image: "6- fácil/Florence Pugh.jpg" },
        { label: "Meryl Streep", image: "6- fácil/merly streep.jpg" },
      ],
      correct: 3,
    },
  ],
  medio: [
    {
      question: "Qual personagem é o mais gostoso?",
      answers: [
        { label: "Rengoku", image: "7- médio/rengoku.jpg" },
        { label: "Gojo", image: "7- médio/gojo.jpg" },
        { label: "Kuroo", image: "7- médio/KUROO.jpg" },
        { label: "Zoro", image: "7- médio/zoro.jpg" },
      ],
      correct: 0,
    },
    {
      question: "Qual é a terceira cor favorita da Sopinha?",
      answers: [
        { label: "Vermelho", color: "#E83D4F", textColor: "#FFFFFF" },
        { label: "Preto", color: "#262126", textColor: "#FFFFFF" },
        { label: "Rosa", color: "#F2A3BD" },
        { label: "Roxo", color: "#7651B8", textColor: "#FFFFFF" },
      ],
      correct: 2,
    },
    {
      question: "Qual é o meme nichado favorito da Little Soup?",
      answers: [
        { label: "Reprima", image: "9- médio/reprima.jpg" },
        { label: "Baa Clarice", image: "9- médio/baaaa clarice.jpg" },
        { label: "Because Lacração...", image: "9- médio/because lacração.jpg" },
        { label: "Panda", image: "9- médio/panda.jpg" },
      ],
      correct: 2,
    },
    {
      question: "Qual é a personagem favorita dela no melhor jogo de terror indie?",
      answers: [
        { label: "Bendy", image: "10- médio/bendy.jpg" },
        { label: "Toy Bonnie", image: "10- médio/toy bonnie.jpg" },
        { label: "Boris", image: "10- médio/boris.jpg" },
        { label: "Withered Bonnie", image: "10- médio/Withered Bonnie.jpg" },
      ],
      correct: 2,
    },
    {
      question: "Qual é o livro preferido da Sophi?",
      answers: ["Alice no País das Maravilhas", "Coletânea da Clarice Lispector", "A Hipótese do Amor", "Orgulho e Preconceito"].map((label) => ({ label })),
      correct: 0,
    },
    {
      question: "Por qual personagem da Disney a Sophia criança era apaixonada?",
      answers: ["Kristoff", "Tadashi", "Tarzan", "Soluço"].map((label) => ({ label })),
      correct: 0,
    },
    {
      question: "Qual dos filmes que estão aí é o melhor?",
      answers: ["Obsessão", "Devoradores de Estrelas", "Corra!", "Cisne Negro"].map((label) => ({ label })),
      correct: 3,
    },
    {
      question: "Qual frase a Sopa mais gosta?",
      answers: ["Vai tomando", "Freud explica", "Tá, eu, o Uber e a Gabriela...", "Foi o que ela disse"].map((label) => ({ label })),
      correct: 2,
    },
    {
      question: "Quem leva o Dundie de mulher mais bonita do mundo?",
      answers: ["Zendaya", "Anne Hathaway", "Megan Fox", "Adriana Lima"].map((label) => ({ label })),
      correct: 1,
    },
  ],
  dificil: [
    {
      question: "Qual é o prefixo de hidrocarbonetos favorito da Sophia?",
      answers: ["met", "et", "prop", "but"].map((label) => ({ label })),
      correct: 2,
    },
    {
      question: "Qual é o episódio favorito dela de BoJack Horseman?",
      answers: ["The Old Sugarman Place", "Free Churro", "The View from Halfway Down", "Time's Arrow"].map((label) => ({ label })),
      correct: 0,
    },
    {
      question: "Qual é a melhor figurinha da Sopa?",
      answers: ["Robô olhando para a tela", "Kanye", "Ryan", "Gatinho coruja"].map((label) => ({ label })),
      correct: 2,
    },
    {
      question: "Quem é o personagem mais mentiroso de Jogos Vorazes?",
      answers: ["Katniss", "Peeta", "Snow", "Finnick"].map((label) => ({ label })),
      correct: 1,
    },
    {
      question: "Qual é o melhor personagem de Call of Duty?",
      answers: ["Ghost", "König", "Soap", "John Price"].map((label) => ({ label })),
      correct: 1,
    },
  ],
}

const difficultyInfo: Record<Difficulty, { label: string; number: string; color: string }> = {
  facil: { label: "Fácil", number: "01", color: "#B6DF89" },
  medio: { label: "Médio", number: "02", color: "#FFD36E" },
  dificil: { label: "Difícil", number: "03", color: "#FF9A8B" },
}

const difficultyOrder: Difficulty[] = ["facil", "medio", "dificil"]

const categoryImages = import.meta.glob(
  "../../Imagens/os dundies/categorias/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default", query: "?url" },
) as Record<string, string>

function shuffleQuestionAnswers(question: DundieQuestion): DundieQuestion {
  const answers = question.answers.map((answer, index) => ({
    answer,
    isCorrect: index === question.correct,
  }))

  for (let index = answers.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[answers[index], answers[randomIndex]] = [answers[randomIndex], answers[index]]
  }

  return {
    ...question,
    answers: answers.map(({ answer }) => answer),
    correct: answers.findIndex(({ isCorrect }) => isCorrect),
  }
}

function buildShuffledQuestionBank(): Record<Difficulty, DundieQuestion[]> {
  return {
    facil: questionBank.facil.map(shuffleQuestionAnswers),
    medio: questionBank.medio.map(shuffleQuestionAnswers),
    dificil: questionBank.dificil.map(shuffleQuestionAnswers),
  }
}

function Laurel({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none" className={className}>
      <path d="M19 53C8 42 8 24 17 10m28 43c11-11 11-29 2-43" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="m16 43 9-2m-11-9 10 1m-7-12 9 4m22 18-9-2m11-9-10 1m7-12-9 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="m32 14 2.4 6.7 6.7 2.3-6.7 2.4-2.4 6.7-2.3-6.7-6.7-2.4 6.7-2.3L32 14Z" fill="currentColor" />
    </svg>
  )
}

function AnswerContent({ answer, index }: { answer: AnswerOption; index: number }) {
  const imageSrc = answer.image
    ? categoryImages[`../../Imagens/os dundies/categorias/${answer.image}`]
    : undefined

  return (
    <>
      {imageSrc && <img src={imageSrc} alt="" className="absolute inset-0 size-full object-cover" />}
      {imageSrc && <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 to-transparent" aria-hidden="true" />}
      <span className="absolute left-3 top-3 z-10 grid size-8 place-items-center rounded-lg border border-[#302323]/15 bg-white/90 font-mono text-xs font-bold text-[#302323] backdrop-blur-sm">
        {String.fromCharCode(65 + index)}
      </span>
      <span className={`absolute inset-x-3 bottom-3 z-10 rounded-lg px-3 py-2 text-left font-bold ${imageSrc ? "bg-white/90 text-[#302323] backdrop-blur-sm" : answer.color ? "bg-white/85" : "bg-white/80 text-[#302323]"}`}>
        {answer.label}
      </span>
    </>
  )
}

export default function DundiesPage() {
  const [shuffledQuestions, setShuffledQuestions] = useState(buildShuffledQuestionBank)
  const [difficulty, setDifficulty] = useState<Difficulty>("facil")
  const [questionIndexes, setQuestionIndexes] = useState<Record<Difficulty, number>>({ facil: 0, medio: 0, dificil: 0 })
  const [scores, setScores] = useState<Record<Difficulty, number>>({ facil: 0, medio: 0, dificil: 0 })
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const questions = shuffledQuestions[difficulty]
  const questionIndex = questionIndexes[difficulty]
  const question = questions[questionIndex]
  const completed = questionIndex >= questions.length
  const currentAnswersCount = scores[difficulty]
  const totalAnswers = difficultyOrder.reduce((total, level) => total + scores[level], 0)
  const answeredCount = difficultyOrder.reduce((total, level) => total + questionIndexes[level], 0)

  function selectDifficulty(nextDifficulty: Difficulty) {
    setDifficulty(nextDifficulty)
    setSelectedAnswer(null)
  }

  function answerQuestion(answerIndex: number) {
    if (selectedAnswer !== null || !question) return
    setSelectedAnswer(answerIndex)
    if (answerIndex === question.correct) {
      setScores((current) => ({ ...current, [difficulty]: current[difficulty] + 1 }))
    }
  }

  function continueGame() {
    if (selectedAnswer === null || !question) return
    setQuestionIndexes((current) => ({ ...current, [difficulty]: current[difficulty] + 1 }))
    setSelectedAnswer(null)
  }

  function replayDifficulty() {
    setShuffledQuestions((current) => ({
      ...current,
      [difficulty]: questionBank[difficulty].map(shuffleQuestionAnswers),
    }))
    setQuestionIndexes((current) => ({ ...current, [difficulty]: 0 }))
    setScores((current) => ({ ...current, [difficulty]: 0 }))
    setSelectedAnswer(null)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF4E8] text-[#302323]">
      <div className="mx-auto max-w-[1240px] px-5 pb-20 pt-6 md:px-10 md:pt-9">
        <header className="flex items-center justify-between gap-4">
          <a
            href="#cardapio"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#302323] bg-white px-4 py-2.5 text-sm font-bold shadow-[3px_3px_0_#302323] transition hover:-translate-y-0.5"
          >
            <span aria-hidden="true">←</span> Voltar ao cardápio
          </a>
          <p className="hidden font-mono text-xs font-bold uppercase tracking-[.18em] text-[#7C6557] sm:block">
            Sopinha apresenta
          </p>
        </header>

        <section className="relative mt-8 grid items-center gap-10 overflow-hidden rounded-[2rem] border-2 border-[#302323] bg-[#FFE18C] px-6 py-9 shadow-[8px_8px_0_#302323] sm:px-10 md:mt-12 md:min-h-[420px] md:grid-cols-[1.2fr_.8fr] md:px-14 md:py-12">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#302323]/20 bg-white/60 px-3 py-1.5 font-mono text-[.65rem] font-bold uppercase tracking-[.18em]">
              <span className="size-2 rounded-full bg-[#BD263B]" /> Uma cerimônia nada oficial
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-black uppercase leading-[.9] tracking-[-.065em] sm:text-6xl md:text-7xl lg:text-8xl">
              The
              <br />
              <span className="text-[#BD263B]">Dundies</span>
              <span className="text-[#BD263B]">!</span>
            </h1>
            <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed sm:text-lg">
              Categorias muito específicas, quatro respostas possíveis e só uma chance de acertar o gosto caoticamente particular da Sophia.
            </p>
            <button
              type="button"
              onClick={() => document.getElementById("rodada")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-7 inline-flex items-center gap-3 rounded-full border-2 border-[#302323] bg-[#BD263B] px-5 py-3 font-bold text-white shadow-[3px_3px_0_#302323] transition hover:-translate-y-0.5 hover:shadow-[4px_5px_0_#302323]"
            >
              Começar a cerimônia <span aria-hidden="true">↓</span>
            </button>
          </div>

          <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-center md:max-w-[330px]">
            <div className="absolute aspect-square w-[88%] rounded-full border border-[#BD263B]/15 bg-[#F8C95D]/40" />
            <div className="absolute right-5 top-2 size-3 rounded-full bg-white" />
            <div className="absolute left-2 top-16 size-2 rounded-full bg-[#BD263B]" />
            <div className="relative z-10 flex h-[280px] w-full items-end justify-center rounded-[48%_48%_2rem_2rem] border-2 border-[#302323] bg-[#FFF0C2] px-8 pb-4 shadow-[5px_5px_0_#302323] sm:h-[310px]">
              <img src={dundieAward} alt="Estatueta dourada do Dundie Award" className="h-[96%] w-auto object-contain drop-shadow-[0_8px_4px_rgba(48,35,35,0.18)]" />
            </div>
            <div className="absolute -bottom-4 -right-2 z-20 -rotate-6 rounded-xl border-2 border-[#302323] bg-[#BD263B] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_#302323]">
              And the Dundie goes to...
            </div>
          </div>
          <Laurel className="absolute -bottom-12 -left-10 hidden size-44 text-[#BD263B]/10 md:block" />
        </section>

        <section id="rodada" className="mx-auto mt-16 max-w-[980px] scroll-mt-8 md:mt-24">
          <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#BD263B]">A grande pergunta</p>
              <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-[-.045em] sm:text-4xl">Você conhece a Sophia?</h2>
            </div>
            <div className="rounded-2xl border-2 border-[#302323] bg-white px-4 py-3 shadow-[3px_3px_0_#302323]">
              <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em] text-[#7C6557]">Dundies conquistados</p>
              <p className="mt-0.5 font-display text-2xl font-black">{totalAnswers} <span className="text-sm font-bold text-[#9A8171]">/ {answeredCount}</span></p>
            </div>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2 sm:gap-3">
            {difficultyOrder.map((level) => {
              const info = difficultyInfo[level]
              const isActive = difficulty === level
              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => selectDifficulty(level)}
                  aria-pressed={isActive}
                  className={`flex items-center justify-between gap-2 rounded-xl border-2 px-3 py-3 text-left transition sm:px-5 ${isActive ? "border-[#302323] shadow-[3px_3px_0_#302323]" : "border-[#302323]/15 bg-white hover:border-[#302323]/45"}`}
                  style={isActive ? { backgroundColor: info.color } : undefined}
                >
                  <span>
                    <span className="block font-mono text-[.55rem] font-bold uppercase tracking-[.14em] opacity-70">Nível {info.number}</span>
                    <span className="mt-0.5 block font-display text-sm font-black uppercase sm:text-lg">{info.label}</span>
                  </span>
                  <span className="rounded-full bg-white/75 px-2 py-1 font-mono text-[.65rem] font-bold">{scores[level]}/{questionBank[level].length}</span>
                </button>
              )
            })}
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border-2 border-[#302323] bg-white shadow-[6px_6px_0_#302323]">
            <div className="flex items-center justify-between gap-3 border-b-2 border-[#302323] px-5 py-4 sm:px-8" style={{ backgroundColor: `${difficultyInfo[difficulty].color}90` }}>
              <p className="font-mono text-xs font-bold uppercase tracking-[.14em]">Dificuldade {difficultyInfo[difficulty].label}</p>
              {!completed && (
                <p className="font-mono text-[.65rem] font-bold uppercase tracking-wider text-[#7C6557]">
                  Rodada {questionIndex + 1} de {questions.length}
                </p>
              )}
            </div>

            {completed ? (
              <div className="px-5 py-10 text-center sm:px-8 sm:py-14">
                <Laurel className="mx-auto size-16 text-[#BD263B]" />
                <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[.18em] text-[#BD263B]">Fim da categoria</p>
                <h3 className="mt-2 font-display text-3xl font-black uppercase">Você fez {scores[difficulty]} de {questions.length} pontos!</h3>
                <p className="mx-auto mt-3 max-w-lg font-semibold text-[#7C6557]">A academia dos Dundies agradece sua participação nessa cerimônia completamente desnecessária.</p>
                <button type="button" onClick={replayDifficulty} className="mt-7 rounded-full border-2 border-[#302323] bg-[#FFE18C] px-5 py-3 font-bold shadow-[3px_3px_0_#302323] transition hover:-translate-y-0.5">
                  Jogar essa categoria de novo
                </button>
              </div>
            ) : question ? (
              <div className="px-5 py-7 sm:px-8 sm:py-9">
                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#FFE18C] font-display text-lg font-black">?</span>
                  <div>
                    <p className="font-mono text-[.65rem] font-bold uppercase tracking-[.17em] text-[#BD263B]">Quem leva o Dundie?</p>
                    <h3 className="mt-2 max-w-2xl font-display text-2xl font-black leading-tight tracking-[-.04em] sm:text-3xl">{question.question}</h3>
                    <p className="mt-2 text-sm font-medium text-[#7C6557]">Escolha uma alternativa e descubra o gosto caótico da Sophia.</p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 justify-items-center gap-3 sm:gap-4">
                  {question.answers.map((answer, index) => {
                    const revealed = selectedAnswer !== null
                    const isCorrect = index === question.correct
                    const isSelected = index === selectedAnswer
                    let stateClass = "border-[#302323]/15 bg-[#FBF8F2] hover:border-[#302323]/50 hover:bg-[#FFF5D6]"
                    if (revealed && isCorrect) stateClass = "border-[#527B3B] bg-[#E2F0D4] ring-2 ring-[#527B3B]/35"
                    else if (revealed && isSelected) stateClass = "border-[#BD263B] bg-[#FCE1DC] ring-2 ring-[#BD263B]/25"

                    return (
                      <button
                        key={`${questionIndex}-${index}`}
                        type="button"
                        onClick={() => answerQuestion(index)}
                        disabled={revealed}
                        aria-pressed={isSelected}
                        className={`relative aspect-square w-full max-w-[260px] overflow-hidden rounded-xl border-2 text-sm transition disabled:cursor-default lg:max-w-[340px] ${stateClass}`}
                        style={answer.color ? { backgroundColor: answer.color, color: answer.textColor ?? "#302323" } : undefined}
                      >
                        <AnswerContent answer={answer} index={index} />
                        {revealed && isCorrect && (
                          <>
                            <img src={dundieAward} alt="O Dundie desta categoria" className="dundie-award-pop pointer-events-none absolute right-3 top-3 z-10 h-[82px] w-[62px] origin-bottom object-contain drop-shadow-[0_3px_2px_rgba(48,35,35,0.25)] sm:right-4 sm:top-4" />
                            <span className="absolute bottom-2 right-3 rounded-full bg-[#527B3B] px-2 py-1 font-mono text-[.55rem] font-bold uppercase tracking-wider text-white">Vencedora</span>
                          </>
                        )}
                      </button>
                    )
                  })}
                </div>

                {selectedAnswer !== null && (
                  <div className="mt-6 rounded-xl border border-[#302323]/10 bg-[#FFFCF6] p-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
                    <div>
                      <p className="font-display text-lg font-black">
                        {selectedAnswer === question.correct ? "Você conhece muito a Sophia!" : "Ih, quase levou esse Dundie!"}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#7C6557]">
                        O Dundie vai para: <strong className="text-[#302323]">{question.answers[question.correct]?.label}</strong>
                      </p>
                    </div>
                    <button type="button" onClick={continueGame} className="mt-4 w-full rounded-full border-2 border-[#302323] bg-[#FFE18C] px-5 py-3 font-bold shadow-[3px_3px_0_#302323] transition hover:-translate-y-0.5 sm:mt-0 sm:w-auto">
                      {questionIndex + 1 === questions.length ? "Ver resultado" : "Próxima pergunta"}
                    </button>
                  </div>
                )}
              </div>
            ) : null}

            {!completed && (
              <div className="border-t border-[#302323]/10 bg-[#FFFCF6] px-5 py-4 sm:px-8">
                <div className="flex items-center justify-between font-mono text-[.6rem] font-bold uppercase tracking-[.12em] text-[#7C6557]">
                  <span>Progresso da categoria</span>
                  <span>{questionIndex}/{questions.length}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#302323]/10">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(questionIndex / questions.length) * 100}%`, backgroundColor: difficultyInfo[difficulty].color }} />
                </div>
              </div>
            )}
          </div>
        </section>

        <footer className="mx-auto mt-14 flex max-w-[980px] items-center justify-center gap-3 text-center font-mono text-[.65rem] font-bold uppercase tracking-[.16em] text-[#9A8171]">
          <span className="h-px flex-1 bg-[#302323]/15" />
          <span>Prêmio aprovado por ninguém</span>
          <span className="h-px flex-1 bg-[#302323]/15" />
        </footer>
      </div>
    </main>
  )
}
