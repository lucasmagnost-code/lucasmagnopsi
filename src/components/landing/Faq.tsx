import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { WA } from "@/lib/whatsapp";

const faqs = [
  {
    q: "Quanto custa a consulta?",
    a: "O valor da sessão fica entre R$100 e R$200, dependendo do tipo de atendimento. Se quiser saber exatamente antes de agendar, manda uma mensagem — respondo com prazer.",
  },
  {
    q: "Você atende pelo plano de saúde?",
    a: "No momento, o atendimento é particular. Dependendo do seu plano, é possível solicitar reembolso seguindo as regras da sua operadora. Posso te orientar sobre isso na primeira conversa.",
  },
  {
    q: "O atendimento funciona online?",
    a: "Sim. A teleconsulta é regulamentada pelo CFP e tem eficácia comprovada tanto para psicoterapia quanto para parte do processo de avaliação neuropsicológica. Atendo presencialmente em Brasília e online para todo o Brasil.",
  },
  {
    q: "Qual a diferença entre psicólogo e neuropsicólogo?",
    a: "O neuropsicólogo tem formação especializada para avaliar e compreender como o funcionamento do cérebro influencia o comportamento e a saúde mental. Isso me permite fazer psicoterapia E realizar avaliações neuropsicológicas completas com laudo — dois serviços que normalmente exigem profissionais diferentes.",
  },
  {
    q: "Quanto tempo dura o processo terapêutico?",
    a: "Cada processo é único. Alguns objetivos se alcançam em poucos meses; outros demandam mais tempo. Revisamos regularmente juntos o que está funcionando e o ritmo que faz sentido para você.",
  },
  {
    q: "O laudo é aceito em escolas, concursos e pelo INSS?",
    a: "Sim. O laudo segue os protocolos do CFP e é reconhecido por instituições de ensino, concursos públicos, INSS, empregadores e planos de saúde para benefícios ou adaptações.",
  },
  {
    q: "Você atende crianças?",
    a: "Meu atendimento é voltado para adultos e idosos (a partir dos 18 anos). Para crianças e adolescentes, posso indicar colegas especializados.",
  },
  {
    q: "Como agendar?",
    a: "Da forma mais simples: manda uma mensagem no WhatsApp. Sem formulário, sem espera longa. Respondo rapidamente.",
    cta: true,
  },
];

const Faq = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-off-white">
      <div className="container max-w-2xl">

        <div className="text-center mb-12 fade-up">
          <span className="section-label">Dúvidas frequentes</span>
          <h2 className="font-display text-[40px] md:text-[50px] font-light text-navy leading-[1.1]">
            Perguntas que quase todo mundo<br className="hidden md:block" /> tem antes de começar.
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="fade-up bg-white rounded-xl border border-slate/10 overflow-hidden"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-body text-[15px] font-medium text-navy pr-4">{item.q}</span>
                <ChevronDown
                  size={17}
                  strokeWidth={1.5}
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div className={`spec-content ${openIdx === i ? "open" : ""}`}>
                <div className="px-6 pb-5 pt-1 border-t border-slate/8">
                  <p className="font-body text-[14px] text-slate leading-[1.85]">{item.a}</p>
                  {item.cta && (
                    <a
                      href={WA.faq}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-4 btn-primary !py-2.5 !px-5 !text-[13px]"
                    >
                      Agendar via WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
