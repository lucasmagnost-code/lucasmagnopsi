import sobreImg from "@/assets/lucas-sobre.jpeg";

const Sobre = () => (
  <section id="sobre" className="py-20 md:py-28 bg-white relative">
    <div className="container max-w-5xl">
      <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">

        {/* Circular photo */}
        <div className="slide-left md:w-[40%] flex justify-center">
          <div className="relative flex-shrink-0">
            <div
              className="absolute bg-champagne/40"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                top: "14px",
                left: "14px",
              }}
            />
            <div
              className="photo-tilt relative overflow-hidden shadow-soft"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "3px solid #5A8B6E",
              }}
            >
              <img
                src={sobreImg}
                alt="Lucas Magno"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="slide-right md:w-[60%]">
          <span className="section-label">Sobre mim</span>

          <h2 className="font-display text-[40px] md:text-[52px] font-light text-navy leading-[1.1] mb-6">
            Humanidade e técnica<br />no mesmo espaço.
          </h2>

          <p className="font-body text-[15px] text-slate leading-[1.85] mb-4">
            Sou Lucas Magno, neuropsicólogo e psicólogo clínico com 5 anos de atuação e
            registro ativo no CRP (01/24403). Trabalho com adultos que estão passando por
            momentos de sofrimento, exaustão, luto ou conflitos nas suas relações,
            e que precisam mais do que respostas: precisam de espaço para sentir.
          </p>

          {/* Highlight box */}
          <div
            className="rounded-xl p-5 mb-6"
            style={{
              background: "#B8CFBA22",
              borderLeft: "3px solid #5A8B6E",
            }}
          >
            <p className="font-body text-[14px] text-navy/80 leading-[1.75]">
              Como neuropsicólogo, posso conduzir tanto processos de psicoterapia quanto
              avaliações neuropsicológicas completas, com documento técnico emitido conforme
              as resoluções do Conselho Federal de Psicologia.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote
            className="font-display text-[20px] italic leading-[1.5]"
            style={{ color: "#44597A" }}
          >
            "O objetivo não é consertar. É ajudar você a ser quem já é."
          </blockquote>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
        <path d="M0 24C480 48 960 0 1440 24V48H0V24Z" fill="#FAFAF8" />
      </svg>
    </div>
  </section>
);

export default Sobre;
