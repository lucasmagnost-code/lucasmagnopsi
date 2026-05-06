import { useState, useEffect, useRef } from "react";
import heroImg from "@/assets/lucas-hero.png";
import { WA } from "@/lib/whatsapp";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center grain overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 70% at 70% 50%, #0d2150 0%, #071739 60%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-[1px] h-32 bg-gold/30" />
      <div className="absolute top-1/4 left-8 w-4 h-[1px] bg-gold/30" />
      <div className="absolute bottom-1/3 left-8 w-4 h-[1px] bg-gold/30" />

      <div className="container relative z-10 flex items-center gap-0 md:gap-12 pt-20 pb-12">

        {/* TEXT — left column */}
        <div className="w-full md:w-[52%] flex flex-col gap-6">

          {/* Badge */}
          <div className="fade-up flex items-center gap-3">
            <div className="w-10 h-[2px] bg-gold" />
            <span className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase text-gold/90">
              CRP 01/24403 · Brasília, DF · Híbrido
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up font-display text-[58px] md:text-[72px] font-light text-white leading-[1.05]"
            style={{ transitionDelay: "0.1s" }}
          >
            Ser quem você é,
            <br />
            <em className="text-gold not-italic font-normal">a maior parte</em>
            <br />
            do tempo.
          </h1>

          {/* Subheadline */}
          <p
            className="fade-up font-body text-[17px] text-white/65 leading-[1.75] max-w-[460px]"
            style={{ transitionDelay: "0.2s" }}
          >
            Neuropsicólogo e Psicólogo Clínico — com humanidade,
            empatia e rigor científico. Atendimento presencial e online.
          </p>

          {/* CTAs */}
          <div
            className="fade-up flex flex-col sm:flex-row items-start gap-4"
            style={{ transitionDelay: "0.3s" }}
          >
            <a
              href={WA.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cta-pulse"
            >
              Agendar Acolhimento
            </a>
            <a href="#auto-avaliacao" className="btn-ghost">
              Faço sentido pra você?
            </a>
          </div>
        </div>

        {/* PHOTO — right column */}
        <div className="hidden md:flex w-[48%] justify-end items-end self-end">
          <div
            className="photo-parallax"
            style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
          >
            {/* Arch frame */}
            <div
              className="relative"
              style={{ width: "380px", height: "520px" }}
            >
              {/* Gold accent ring behind photo */}
              <div
                className="absolute -right-3 -bottom-3 bg-gold/20"
                style={{
                  width: "380px",
                  height: "520px",
                  borderRadius: "220px 220px 16px 16px",
                }}
              />
              {/* Photo container */}
              <div
                className="absolute inset-0 overflow-hidden shadow-soft"
                style={{ borderRadius: "220px 220px 16px 16px" }}
              >
                <img
                  src={heroImg}
                  alt="Lucas Magno, neuropsicólogo"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient at bottom for blending */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent 78%, rgba(7,23,57,0.35) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 28C360 56 1080 0 1440 28V56H0V28Z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
