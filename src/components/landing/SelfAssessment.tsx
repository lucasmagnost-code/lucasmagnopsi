import { useState } from "react";
import { ChevronRight, RotateCcw, Lock } from "lucide-react";
import { WA } from "@/lib/whatsapp";

type Score = "pos" | "mid" | "neg";

interface Option { label: string; score: Score }
interface Question { question: string; options: Option[] }

const questions: Question[] = [
  {
    question: "Nas últimas semanas, você sentiu que algo emocional, cognitivo ou comportamental está pesando mais do que você consegue carregar sozinho(a)?",
    options: [
      { label: "Sim, e está afetando minha rotina",      score: "pos" },
      { label: "Em alguns momentos, mas oscila",         score: "mid" },
      { label: "Não, só estou pesquisando",              score: "neg" },
    ],
  },
  {
    question: "Você já tentou organizar isso sozinho(a) por meio de autoconhecimento, conversas próximas ou conteúdo online, e sente que não basta mais?",
    options: [
      { label: "Sim, sinto que preciso de apoio profissional", score: "pos" },
      { label: "Tenho dúvida se uma terapia ajudaria",          score: "mid" },
      { label: "Não cheguei nesse ponto ainda",                 score: "neg" },
    ],
  },
  {
    question: "O que você procura agora?",
    options: [
      { label: "Psicoterapia para me entender melhor",        score: "pos" },
      { label: "Avaliação neuropsicológica",                  score: "pos" },
      { label: "Quero conversar antes de decidir",            score: "mid" },
    ],
  },
];

interface Result {
  title: string;
  text: string;
  cta: string;
  link: string;
}

const results: Record<"pos" | "mid" | "neg", Result> = {
  pos: {
    title: "Faz sentido conversarmos.",
    text: "O que você descreveu é justamente o tipo de situação para a qual existe acompanhamento clínico estruturado. Uma primeira conversa não compromete nada, mas pode te ajudar a enxergar o caminho com mais clareza.",
    cta: "Agendar minha primeira conversa",
    link: WA.quizPositivo,
  },
  mid: {
    title: "Vale uma conversa sem compromisso.",
    text: "Você não precisa ter certeza para começar. Uma conversa breve pode te ajudar a entender se faz sentido para o seu momento, sem pressão e sem expectativa.",
    cta: "Conversar pelo WhatsApp",
    link: WA.quizNeutro,
  },
  neg: {
    title: "Quando fizer sentido, estarei aqui.",
    text: "Cuidar de si tem ritmo próprio. Se mudar de ideia, ou se algum conteúdo aqui te tocar mais tarde, o caminho continua aberto.",
    cta: "Acompanhar no Instagram",
    link: "https://www.instagram.com/lucasmagno.psi/",
  },
};

const computeResult = (answers: Score[]): "pos" | "mid" | "neg" => {
  const counts = { pos: 0, mid: 0, neg: 0 };
  answers.forEach(a => counts[a]++);
  if (counts.pos >= 2) return "pos";
  if (counts.neg >= 2) return "neg";
  return "mid";
};

// Lead capture endpoint — Formspree placeholder.
// Para ativar: crie um form em https://formspree.io e cole o endpoint abaixo.
const LEAD_ENDPOINT = "https://formspree.io/f/xanjvqyq";
const LEAD_ENABLED = false;

type Phase = "questions" | "lead" | "result";

const SelfAssessment = () => {
  const [phase, setPhase] = useState<Phase>("questions");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Score[]>([]);
  const [leadName, setLeadName] = useState("");
  const [leadWA, setLeadWA] = useState("");
  const [leadError, setLeadError] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleAnswer = (score: Score) => {
    const next = [...answers, score];
    setAnswers(next);
    if (step === 1) {
      setPhase("lead");
    } else if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setPhase("result");
      submitLeadIfPossible(next);
    }
  };

  const submitLeadIfPossible = async (finalAnswers: Score[]) => {
    if (!LEAD_ENABLED || leadSubmitted || !leadName.trim() || !leadWA.trim()) return;
    try {
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nome: leadName,
          whatsapp: leadWA,
          origem: "Auto-avaliação do site",
          resultado: computeResult(finalAnswers),
          respostas: finalAnswers,
          data: new Date().toLocaleString("pt-BR"),
        }),
      });
      setLeadSubmitted(true);
    } catch (e) {
      // silent fail — quiz continues
    }
  };

  const proceedFromLead = (skipped: boolean) => {
    if (skipped) {
      setStep(2);
      setPhase("questions");
      return;
    }
    const cleanWA = leadWA.replace(/\D/g, "");
    if (!leadName.trim() || cleanWA.length < 10 || cleanWA.length > 13) {
      setLeadError("Para continuar, preencha nome e WhatsApp válido (com DDD).");
      return;
    }
    setLeadError("");
    setStep(2);
    setPhase("questions");
  };

  const reset = () => {
    setPhase("questions");
    setStep(0);
    setAnswers([]);
    setLeadName("");
    setLeadWA("");
    setLeadError("");
    setLeadSubmitted(false);
  };

  const totalSteps = questions.length + 1;
  const completedSteps =
    phase === "result"
      ? totalSteps
      : phase === "lead"
      ? 2.5
      : step;
  const progress = (completedSteps / totalSteps) * 100;

  const result = phase === "result" ? results[computeResult(answers)] : null;

  return (
    <section
      id="auto-avaliacao"
      className="py-20 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FAFAF8 0%, #eef2ee 100%)" }}
    >
      <div className="container max-w-2xl">
        <div className="text-center mb-10 fade-up">
          <span className="section-label">Auto-avaliação · 1 minuto</span>
          <h2 className="font-display text-[36px] md:text-[44px] font-light text-navy leading-[1.15]">
            Não sabe se uma terapia<br className="hidden md:block" /> faz sentido pra você?
          </h2>
          <p className="font-body text-[15px] text-slate/75 mt-4 max-w-md mx-auto leading-[1.8]">
            Três perguntas rápidas, anônimas e sem pegadinha. Só para te ajudar a refletir.
          </p>
        </div>

        <div className="fade-up bg-white rounded-3xl shadow-soft p-7 md:p-10 border border-slate/8">

          {/* Progress bar */}
          <div className="mb-7">
            <div className="flex justify-between font-body text-[11px] tracking-[0.18em] uppercase text-slate/60 mb-2">
              <span>
                {phase === "result"
                  ? "Resultado"
                  : phase === "lead"
                  ? "Quase lá"
                  : `Pergunta ${step + 1} de ${questions.length}`}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-slate/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Questions */}
          {phase === "questions" && (
            <div key={step} className="quiz-fade">
              <p className="font-display text-[22px] md:text-[26px] font-medium text-navy leading-[1.4] mb-7">
                {questions[step].question}
              </p>
              <div className="flex flex-col gap-3">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.score)}
                    className="group text-left flex items-center justify-between
                               px-6 py-4 rounded-xl border-2 border-slate/15
                               bg-white transition-all duration-300
                               hover:border-gold hover:bg-gold/5 hover:translate-x-1 cursor-pointer"
                  >
                    <span className="font-body text-[15px] text-navy leading-snug pr-3">
                      {opt.label}
                    </span>
                    <ChevronRight
                      size={18}
                      strokeWidth={1.8}
                      className="text-slate/40 flex-shrink-0 group-hover:text-gold transition-colors"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Lead capture (after Q2) */}
          {phase === "lead" && (
            <div className="quiz-fade">
              <p className="font-display text-[22px] md:text-[26px] font-medium text-navy leading-[1.4] mb-3">
                Antes da última pergunta, posso saber com quem estou conversando?
              </p>
              <p className="font-body text-[14px] text-slate/75 leading-[1.7] mb-6">
                Se preferir, pule esta etapa. Caso compartilhe, uso só para te retornar
                via WhatsApp se você desejar continuar a conversa depois.
              </p>

              <div className="flex flex-col gap-3 mb-2">
                <input
                  type="text"
                  placeholder="Seu primeiro nome"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl border-2 border-slate/15
                             bg-white font-body text-[15px] text-navy
                             focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp com DDD (ex: 61 99999-9999)"
                  value={leadWA}
                  onChange={(e) => setLeadWA(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl border-2 border-slate/15
                             bg-white font-body text-[15px] text-navy
                             focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {leadError && (
                <p className="font-body text-[13px] text-red-600 mb-3">{leadError}</p>
              )}

              <div className="flex items-center gap-2 text-[12px] text-slate/65 mb-6">
                <Lock size={12} strokeWidth={1.8} className="text-gold flex-shrink-0" />
                <span>Seus dados são tratados conforme a LGPD. Sem disparos automáticos. Sem spam.</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => proceedFromLead(false)}
                  className="btn-primary flex-1"
                >
                  Continuar para a última pergunta
                </button>
                <button
                  onClick={() => proceedFromLead(true)}
                  className="font-body text-[13px] text-slate/70 hover:text-slate underline underline-offset-4 px-3 py-2"
                >
                  Pular
                </button>
              </div>
            </div>
          )}

          {/* Result */}
          {phase === "result" && result && (
            <div className="quiz-fade text-center">
              <h3 className="font-display text-[28px] md:text-[34px] font-medium text-navy leading-[1.2] mb-4">
                {result.title}
              </h3>
              <p className="font-body text-[15px] text-slate leading-[1.85] mb-8 max-w-md mx-auto">
                {result.text}
              </p>
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                {result.cta}
              </a>
              <button
                onClick={reset}
                className="mx-auto mt-5 font-body text-[13px] text-slate/60 hover:text-slate
                           transition-colors flex items-center gap-1.5"
              >
                <RotateCcw size={13} strokeWidth={1.8} />
                Refazer auto-avaliação
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SelfAssessment;
