import { Instagram } from "lucide-react";

const posts = [
  { topic: "Sobre TDAH adulto",            theme: "education" },
  { topic: "Avaliação neuropsicológica",   theme: "service"   },
  { topic: "Reflexão clínica",             theme: "quote"     },
  { topic: "Saúde mental do servidor",     theme: "education" },
  { topic: "Por que escutar não é resolver", theme: "quote"   },
  { topic: "Quando procurar avaliação",    theme: "service"   },
];

const themeStyles: Record<string, { bg: string; accent: string }> = {
  education: { bg: "linear-gradient(135deg, #071739 0%, #0d2150 100%)", accent: "#A68B68" },
  service:   { bg: "linear-gradient(135deg, #4B6382 0%, #3a4f6a 100%)", accent: "#E3C39D" },
  quote:     { bg: "linear-gradient(135deg, #A68B68 0%, #8c6f4a 100%)", accent: "#FAFAF8" },
};

const InstagramPreview = () => (
  <section className="py-20 md:py-24 bg-white">
    <div className="container max-w-5xl">
      <div className="text-center mb-12 fade-up">
        <span className="section-label">Conteúdo de autoridade</span>
        <h2 className="font-display text-[36px] md:text-[44px] font-light text-navy leading-[1.15] mb-3">
          Reflexões sobre mente,<br className="hidden md:block" /> ciência e cuidado.
        </h2>
        <p className="font-body text-[15px] text-slate/75 max-w-md mx-auto leading-[1.8]">
          Conteúdo semanal sobre neuropsicologia, autoconhecimento e saúde mental — sem promessas mágicas, com honestidade clínica.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
        {posts.map((post, i) => {
          const style = themeStyles[post.theme];
          return (
            <a
              key={i}
              href="https://www.instagram.com/lucasmagno.psi/"
              target="_blank"
              rel="noopener noreferrer"
              className="fade-up aspect-square rounded-2xl relative overflow-hidden
                         transition-transform duration-400 hover:-translate-y-1 hover:shadow-soft
                         flex items-end p-5 grain"
              style={{ background: style.bg, transitionDelay: `${i * 0.05}s` }}
            >
              <div
                className="absolute top-4 right-4 w-7 h-[1px]"
                style={{ background: style.accent, opacity: 0.6 }}
              />
              <p
                className="font-display italic text-[15px] md:text-[17px] leading-[1.35] relative z-10"
                style={{ color: style.accent }}
              >
                {post.topic}
              </p>
            </a>
          );
        })}
      </div>

      <div className="fade-up text-center">
        <a
          href="https://www.instagram.com/lucasmagno.psi/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-[14px] font-medium text-slate
                     hover:text-gold transition-colors"
        >
          <Instagram size={17} strokeWidth={1.8} />
          Seguir @lucasmagno.psi
        </a>
      </div>
    </div>
  </section>
);

export default InstagramPreview;
