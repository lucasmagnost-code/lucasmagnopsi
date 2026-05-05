import { useState } from "react";
import { ChevronDown } from "lucide-react";

const specs = [
  {
    title: "Autoestima e Autoimagem",
    short: "Quando a voz interna é mais dura do que qualquer pessoa ao redor jamais seria.",
    full: "Quando você não reconhece seu próprio valor. Trabalhamos juntos para identificar as raízes desse padrão e construir uma relação mais justa com você mesmo.",
  },
  {
    title: "Ansiedade",
    short: "Quando o pensamento não para e o corpo paga a conta.",
    full: "Quando o medo do que pode acontecer ocupa espaço de viver o que está acontecendo. Existem ferramentas concretas e comprovadas para isso.",
  },
  {
    title: "Depressão",
    short: "Quando a vontade de tentar parece distante demais.",
    full: "Quando tudo exige um esforço desproporcional ao resultado. Você não precisa atravessar isso sozinho — e existem caminhos para retomar o contato com a vida.",
  },
  {
    title: "Relacionamentos",
    short: "Quando os padrões que você repete nos relacionamentos começam a custar.",
    full: "Cônjuges, família, trabalho — os vínculos afetivos moldam quem somos. Existe outro caminho quando esses padrões já não servem.",
  },
  {
    title: "Luto e Perda",
    short: "Quando a dor de perder alguém — ou algo — parece maior do que você aguenta.",
    full: "O luto não tem prazo, mas pode ter suporte. Trabalhamos para que você possa carregar essa dor sem ser engolido por ela.",
  },
  {
    title: "Trauma e Violência",
    short: "Para quem carrega marcas que não escolheu.",
    full: "Reencontrar um lugar seguro dentro de si é possível — com tempo, cuidado e técnica adequada. Trabalho com abordagens validadas para trauma.",
  },
  {
    title: "TEA e TDAH Adulto",
    short: "Para adultos que cresceram sem diagnóstico e carregam o peso de não se encaixar.",
    full: "Entender como sua mente funciona muda tudo. Diagnóstico, compreensão e estratégias práticas para uma vida mais alinhada com quem você realmente é.",
  },
  {
    title: "Avaliação Neuropsicológica",
    short: "Mapeamento completo do funcionamento do seu cérebro com laudo formal.",
    full: "Atenção, memória, funções executivas, linguagem e inteligência — avaliados com testes internacionalmente validados. Laudo reconhecido pelo CFP, INSS e instituições de ensino.",
    cta: true,
  },
  {
    title: "Sintomatologia Cognitiva",
    short: "Quando você percebe mudanças na memória, atenção ou processamento.",
    full: "Diagnosticar o que está acontecendo é o primeiro passo para entender — e para escolher o caminho de cuidado mais adequado.",
  },
];

const Specialties = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-off-white">
      <div className="container max-w-3xl">

        <div className="text-center mb-14 fade-up">
          <span className="section-label">Para quem atendo</span>
          <h2 className="font-display text-[40px] md:text-[52px] font-light text-navy leading-[1.1]">
            Você se reconhece em alguma<br className="hidden md:block" /> dessas situações?
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {specs.map((s, i) => (
            <div
              key={i}
              className="fade-up rounded-xl overflow-hidden border border-slate/10 bg-white transition-all duration-300 hover:shadow-card cursor-pointer"
              style={{ transitionDelay: `${i * 0.04}s` }}
              onClick={() => toggle(i)}
            >
              <div className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="font-display text-[18px] font-medium text-navy">{s.title}</p>
                  <p className="font-body text-[13px] text-slate/70 mt-0.5">{s.short}</p>
                </div>
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`text-gold flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Expanded content */}
              <div className={`spec-content ${openIdx === i ? "open" : ""}`}>
                <div className="px-6 pb-5 pt-1 border-t border-slate/8">
                  <p className="font-body text-[14px] text-slate leading-[1.8]">{s.full}</p>
                  {s.cta && (
                    <a href="#avaliacao" className="inline-flex items-center gap-1 mt-3 font-body text-[13px] text-gold font-medium hover:underline">
                      Saiba mais sobre avaliação →
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

export default Specialties;
