const WA = "https://whatsa.me/5514991335995/";

const steps = [
  {
    num: "1",
    icon: "💬",
    title: "Primeiro contato",
    desc: "Manda uma mensagem — sem formulário longo, sem compromisso. Conversamos brevemente sobre o que te trouxe até aqui.",
    color: "#A68B68",
  },
  {
    num: "2",
    icon: "📅",
    title: "Sessão inicial",
    desc: "Nossa primeira conversa é um espaço de escuta. Você decide o ritmo. Sem pressão, sem expectativa de resultado imediato.",
    color: "#4B6382",
  },
  {
    num: "3",
    icon: "📈",
    title: "Processo personalizado",
    desc: "Construímos juntos o caminho certo — seja psicoterapia, avaliação neuropsicológica ou a combinação dos dois.",
    color: "#071739",
  },
];

const ComoFunciona = () => (
  <section id="como-funciona" className="py-20 md:py-28 bg-white">
    <div className="container max-w-4xl">

      <div className="text-center mb-14 fade-up">
        <span className="section-label">O processo</span>
        <h2 className="font-display text-[40px] md:text-[52px] font-light text-navy leading-[1.1]">
          Três passos para começar.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, i) => (
          <div
            key={i}
            className="fade-up text-center md:text-left relative"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[55%] right-[-45%] h-[1px] bg-slate/15" />
            )}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-[26px] mb-4 mx-auto md:mx-0"
              style={{ background: `${step.color}15` }}
            >
              {step.icon}
            </div>
            <span
              className="font-display text-[52px] font-light leading-none block mb-2 opacity-10"
              style={{ color: step.color }}
            >
              {step.num}
            </span>
            <h3 className="font-display text-[20px] font-medium text-navy mb-2">{step.title}</h3>
            <p className="font-body text-[14px] text-slate/75 leading-[1.8]">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="fade-up text-center">
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary cta-pulse">
          Iniciar conversa no WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default ComoFunciona;
