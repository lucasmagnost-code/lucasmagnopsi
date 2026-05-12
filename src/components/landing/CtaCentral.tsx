import { WA } from "@/lib/whatsapp";
import HeroBackdrop from "./HeroBackdrop";

const CtaCentral = () => (
  <section
    className="py-24 relative grain overflow-hidden"
    style={{ background: "linear-gradient(135deg, #071739 0%, #0d2150 50%, #071739 100%)" }}
  >
    {/* Mesma geometria animada da Hero (anel que respira + linhas pontilhadas à deriva) */}
    <HeroBackdrop />

    {/* Decorative lines */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gold/20 z-[1]" />
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold/20 z-[1]" />

    <div className="container max-w-3xl text-center relative z-10">
      <div className="fade-up">
        <div className="w-12 h-[2px] bg-gold mx-auto mb-8" />

        <h2 className="font-display text-[52px] md:text-[64px] font-light text-white leading-[1.1] mb-6">
          Quando você estiver pronto,<br />
          <em className="text-gold not-italic">estarei aqui.</em>
        </h2>

        <p className="font-body text-[17px] text-white/60 leading-[1.8] max-w-lg mx-auto mb-10">
          Dar o primeiro passo é a parte mais difícil. A partir daí,
          caminhamos juntos, no seu tempo, sem julgamento.
        </p>

        <a
          href={WA.ctaFinal}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary cta-pulse text-[16px] px-10 py-5"
        >
          Agendar minha primeira conversa
        </a>

        <div className="mt-8">
          <a
            href="https://www.instagram.com/lucasmagno.psi/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] text-gold/70 hover:text-gold transition-colors underline underline-offset-4"
          >
            @lucasmagno.psi no Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CtaCentral;
