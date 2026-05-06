import { Check } from "lucide-react";
import { WA } from "@/lib/whatsapp";

const forWhom = [
  "Adultos com suspeita de TDAH ou TEA",
  "Queixas de memória ou concentração",
  "Idosos com preocupação sobre declínio cognitivo",
  "Laudos para concursos, escolas e INSS",
  "Profissionais que precisam de relatório formal",
  "Quem quer se entender melhor — com ou sem diagnóstico",
];

const steps = [
  { num: "01", title: "Entrevista Inicial",      desc: "Conversamos sobre sua história, queixas e objetivos.", time: "~1h" },
  { num: "02", title: "Aplicação dos Testes",    desc: "Instrumentos padronizados em sessão estruturada.",     time: "3-4 sessões" },
  { num: "03", title: "Interpretação Clínica",   desc: "Análise integrada dos dados coletados.",                time: "~1 semana" },
  { num: "04", title: "Devolutiva com Laudo",    desc: "Explicação dos resultados + laudo formal entregue.",   time: "~1h" },
];

const Avaliacao = () => (
  <section id="avaliacao" className="py-20 md:py-28 bg-white relative">
    <div className="container max-w-5xl">

      <div className="text-center mb-14 fade-up">
        <span className="section-label">Serviço principal · Diferencial</span>
        <h2 className="font-display text-[40px] md:text-[52px] font-light text-navy leading-[1.1] mb-3">
          Avaliação Neuropsicológica.
        </h2>
        <p className="font-body text-[16px] text-slate max-w-xl mx-auto">
          O serviço mais completo da neuropsicologia — e o mais subestimado por quem mais precisa.
        </p>
      </div>

      {/* Two columns */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        {/* What it is */}
        <div
          className="fade-up rounded-2xl p-7"
          style={{ background: "#E3C39D33", border: "1px solid #A68B6840" }}
        >
          <h3 className="font-display text-[22px] font-medium text-navy mb-4">O que é</h3>
          <p className="font-body text-[15px] text-slate leading-[1.85]">
            A avaliação neuropsicológica mapeia como o seu cérebro processa informação —
            atenção, memória, funções executivas, linguagem e inteligência. Usando testes
            validados internacionalmente, ela gera um laudo reconhecido pelo MEC, CFP, INSS
            e empregadores.
          </p>
        </div>

        {/* For whom */}
        <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
          <h3 className="font-display text-[22px] font-medium text-navy mb-4">Para quem é</h3>
          <ul className="flex flex-col gap-3">
            {forWhom.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-[14px] text-slate">
                <Check size={15} strokeWidth={2} className="text-gold mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Steps */}
      <div className="fade-up">
        <h3 className="font-display text-[24px] font-medium text-navy mb-8 text-center">
          Como funciona o processo
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] right-[-40%] h-[1px] bg-slate/15" />
              )}
              <span
                className="font-display text-[60px] font-light leading-none block mb-2"
                style={{ color: "rgba(7,23,57,0.08)" }}
              >
                {step.num}
              </span>
              <p className="font-display text-[17px] font-medium text-navy mb-1">{step.title}</p>
              <span className="font-body text-[10px] tracking-[0.18em] uppercase text-gold block mb-2">
                {step.time}
              </span>
              <p className="font-body text-[13px] text-slate/80 leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Investment note */}
      <div className="fade-up mt-14 max-w-xl mx-auto">
        <div
          className="rounded-2xl p-6 text-center"
          style={{
            background: "linear-gradient(135deg, #FAFAF8 0%, #f3ede2 100%)",
            border: "1px solid #A68B6830",
          }}
        >
          <span className="section-label">Investimento</span>
          <p className="font-body text-[14px] text-slate leading-[1.85]">
            O processo completo é personalizado conforme o escopo da avaliação.
            <br className="hidden md:block" />
            <span className="text-navy font-medium">
              Os valores são informados após a entrevista inicial — sem compromisso.
            </span>
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="fade-up text-center mt-10">
        <a
          href={WA.avaliacao}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark"
        >
          Quero agendar minha avaliação
        </a>
      </div>
    </div>

    {/* Wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
        <path d="M0 24C360 0 1080 48 1440 24V48H0V24Z" fill="#FAFAF8" />
      </svg>
    </div>
  </section>
);

export default Avaliacao;
