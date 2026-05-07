import { useState, useEffect, useRef } from "react";
import heroImg from "@/assets/lucas-hero.png";
import { WA } from "@/lib/whatsapp";
import HeroBackdrop from "./HeroBackdrop";

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
      {/* Animated geometric backdrop (breathing ring + drifting lines) */}
      <HeroBackdrop />

      {/* Decorative elements (desktop only) */}
      <div className="hidden md:block absolute top-1/4 left-8 w-[1px] h-32 bg-gold/30 z-[1]" />
      <div className="hidden md:block absolute top-1/4 left-8 w-4 h-[1px] bg-gold/30 z-[1]" />
      <div className="hidden md:block absolute bottom-1/3 left-8 w-4 h-[1px] bg-gold/30 z-[1]" />

      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-24 md:pt-20 pb-16 md:pb-12">

        {/* PHOTO — order 1 mobile (top), order 2 desktop (right) */}
        <div className="w-full md:w-[48%] flex justify-center md:justify-end items-center md:items-end self-center md:self-end order-1 md:order-2">
          <div
            className="photo-parallax"
            style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
          >
            {/* Arch frame */}
            <div
              className="relative w-[80vw] h-[107vw] max-w-[320px] max-h-[427px] md:!w-[380px] md:!h-[504px] md:!max-w-none md:!max-h-none"
            >
              {/* Subtle accent ring behind photo */}
              <div
                className="absolute -right-2 -bottom-2 md:-right-3 md:-bottom-3 bg-gold/20"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "150px 150px 12px 12px",
                }}
              />
              {/* Photo container */}
              <div
                className="absolute inset-0 overflow-hidden shadow-soft"
                style={{ borderRadius: "150px 150px 12px 12px" }}
              >
                <img
                  src={heroImg}
                  alt="Lucas Magno, neuropsicólogo e psicólogo clínico"
                  className="w-full h-full object-cover object-top"
                />
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

        {/* TEXT — order 2 mobile (below), order 1 desktop (left) */}
        <div className="w-full md:w-[52%] flex flex-col gap-5 md:gap-6 order-2 md:order-1">

          {/* Badge */}
          <div className="fade-up flex items-center gap-3">
            <div className="w-10 h-[2px] bg-gold" />
            <span className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase text-gold/90">
              CRP 01/24403 · Brasília, DF · Híbrido
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up font-display text-[44px] sm:text-[54px] md:text-[68px] font-light text-white leading-[1.05]"
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
            className="fade-up font-body text-[16px] md:text-[17px] text-white/75 leading-[1.75] max-w-[480px]"
            style={{ transitionDelay: "0.2s" }}
          >
            Psicoterapia e avaliação neuropsicológica para adultos que querem entender
            o que sentem antes de decidir o que fazer. Atendimento online para o Brasil
            todo.
          </p>

          {/* CTAs */}
          <div
            className="fade-up flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mt-2"
            style={{ transitionDelay: "0.3s" }}
          >
            <a
              href={WA.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cta-pulse text-center"
            >
              Agendar Acolhimento
            </a>
            <a
              href="#abordagem"
              className="btn-ghost text-center inline-flex items-center justify-center gap-2"
            >
              Conheça minha abordagem
              <span className="text-gold">↓</span>
            </a>
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
