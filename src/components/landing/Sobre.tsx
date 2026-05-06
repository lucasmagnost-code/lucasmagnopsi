import sobreImg from "@/assets/lucas-sobre.jpeg";

const Sobre = () => (
  <section id="sobre" className="py-20 md:py-28 bg-white relative">
    <div className="container max-w-5xl">
      <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">

        {/* Circular photo — mobile: centered top */}
        <div className="slide-left md:w-[40%] flex justify-center">
          <div className="relative flex-shrink-0">
            {/* Decorative offset background */}
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
            {/* Photo circle with gold border + tilt on hover */}
            <div
              className="photo-tilt relative overflow-hidden shadow-soft"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "3px solid #A68B68",
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
            momentos de dor, confusão, perda ou transição — e que precisam mais do que
            respostas: precisam de espaço para se reconhecer.
          </p>

          <p className="font-body text-[15px] text-slate leading-[1.85] mb-6">
            O que os meus pacientes mais dizem é que se surpreendem com a minha humanidade
            e empatia — e ao mesmo tempo com a profundidade do suporte técnico que ofereço.
            Porque acredito que essas duas coisas não apenas se combinam: uma potencializa a outra.
          </p>

          {/* Highlight box */}
          <div
            className="rounded-xl p-5 mb-6"
            style={{
              background: "#E3C39D22",
              borderLeft: "3px solid #A68B68",
            }}
          >
            <p className="font-body text-[14px] text-navy/80 leading-[1.75]">
              Como neuropsicólogo, posso tanto acompanhar você em psicoterapia quanto realizar
              avaliações neuropsicológicas completas — com laudo reconhecido pelo CFP, INSS e
              instituições de ensino.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote
            className="font-display text-[20px] italic leading-[1.5]"
            style={{ color: "#4B6382" }}
          >
            "O objetivo não é consertar — é ajudar você a ser quem já é."
          </blockquote>
        </div>
      </div>
    </div>

    {/* Wave divider */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
        <path d="M0 24C480 48 960 0 1440 24V48H0V24Z" fill="#FAFAF8" />
      </svg>
    </div>
  </section>
);

export default Sobre;
