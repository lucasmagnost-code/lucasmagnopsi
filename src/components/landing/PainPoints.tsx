const pains = [
  '"Eu já tentei terapia. Não sei se isso é pra mim de novo."',
  '"Sinto que tem algo diferente em como eu funciono — só não sei nomear."',
  '"Quero entender o que se passa antes de aceitar mais um diagnóstico."',
  '"Cresci sendo \'inteligente demais\' ou \'sensível demais\'. Hoje isso pesa."',
  '"Estou em um momento de perda — e ninguém ao redor parece entender."',
  '"Funciono bem por fora. Por dentro, é cansativo demais."',
];

const PainPoints = () => (
  <section
    className="py-20 md:py-24 bg-off-white relative"
  >
    <div className="container max-w-5xl">
      <div className="text-center mb-12 fade-up">
        <span className="section-label">Talvez você se reconheça</span>
        <h2 className="font-display text-[36px] md:text-[48px] font-light text-navy leading-[1.15]">
          O que muitos pacientes me dizem<br className="hidden md:block" />
          <em className="text-slate not-italic font-normal"> antes de marcar a primeira sessão.</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pains.map((p, i) => (
          <div
            key={i}
            className="fade-up bg-white rounded-2xl p-6 shadow-card border border-slate/8
                       transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <div className="font-display text-gold text-[32px] leading-none mb-3 opacity-60">
              &ldquo;
            </div>
            <p className="font-display italic text-[17px] text-slate leading-[1.6]">
              {p.replace(/^"|"$/g, "")}
            </p>
          </div>
        ))}
      </div>

      <div className="fade-up mt-12 text-center">
        <p className="font-body text-[15px] text-slate/75 max-w-xl mx-auto leading-[1.8]">
          Se algo aqui ressoou — não significa que você precisa ter certeza.
          Significa apenas que talvez seja o momento de uma escuta atenta.
        </p>
      </div>
    </div>
  </section>
);

export default PainPoints;
