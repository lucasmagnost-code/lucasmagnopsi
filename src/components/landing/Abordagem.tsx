import lucasTrabalho from "@/assets/lucas-trabalho.jpg";

const approaches = [
  {
    emoji: "◯",
    title: "Abordagem Centrada na Pessoa",
    tag: "ACP",
    color: "#5A8B6E",
    text: "Desenvolvida por Carl Rogers, a ACP parte do princípio de que você é o maior especialista em você mesmo. O terapeuta cria as condições de segurança, empatia e autenticidade para que você encontre seus próprios caminhos. Sem julgamento. Sem scripts.",
  },
  {
    emoji: "◈",
    title: "Terapia Cognitivo-Comportamental",
    tag: "TCC",
    color: "#4B6382",
    text: "A TCC trabalha com ferramentas concretas a relação entre pensamentos, emoções e comportamentos. Com as maiores evidências científicas para ansiedade, depressão e TDAH, é o complemento prático e objetivo da ACP.",
  },
  {
    emoji: "◇",
    title: "Psicoterapia Breve",
    tag: "Breve",
    color: "#A4B5C4",
    text: "Para quem tem objetivos específicos e quer um processo com foco e prazo definido. Eficaz para crises, adaptações e transições que pedem mais intensidade do que extensão.",
  },
];

const Abordagem = () => (
  <section className="py-20 md:py-28 bg-off-white">
    <div className="container max-w-4xl">

      <div className="text-center mb-14 fade-up">
        <span className="section-label">Como trabalho</span>
        <h2 className="font-display text-[40px] md:text-[52px] font-light text-navy leading-[1.1]">
          Uma abordagem que vê<br className="hidden md:block" /> a pessoa inteira.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {approaches.map((a, i) => (
          <div
            key={i}
            className="fade-up bg-white rounded-2xl p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            style={{ transitionDelay: `${i * 0.1}s`, borderTop: `3px solid ${a.color}` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[24px]" style={{ color: a.color }}>{a.emoji}</span>
              <span
                className="font-body text-[11px] font-semibold tracking-[0.16em] uppercase px-2 py-0.5 rounded"
                style={{ color: a.color, background: `${a.color}18` }}
              >
                {a.tag}
              </span>
            </div>
            <h3 className="font-display text-[20px] font-medium text-navy mb-3 leading-[1.3]">
              {a.title}
            </h3>
            <p className="font-body text-[13.5px] text-slate/80 leading-[1.8]">{a.text}</p>
          </div>
        ))}
      </div>

      {/* Foto + frase-chave */}
      <div className="mt-16 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
        <div className="md:col-span-5 fade-up">
          <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/5]">
            <img
              src={lucasTrabalho}
              alt="Lucas Magno no consultório"
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="md:col-span-7 fade-up" style={{ transitionDelay: "0.12s" }}>
          <span className="section-label">No consultório</span>
          <blockquote className="mt-4 font-display text-[24px] md:text-[30px] italic text-slate leading-[1.45]">
            "Consiga ser quem você é, a maior parte do tempo, filtrando o que impede isso."
          </blockquote>
          <p className="mt-5 font-body text-[14.5px] text-slate/75 leading-[1.85]">
            Presencial em Brasília, online para todo o Brasil. O que muda é o formato, não o cuidado:
            a mesma escuta, a mesma seriedade técnica, o mesmo respeito pelo seu tempo.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Abordagem;
