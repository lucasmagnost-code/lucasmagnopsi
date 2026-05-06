import { ShieldCheck, Lock, FileCheck, Heart } from "lucide-react";

const tags = [
  { icon: ShieldCheck, label: "CFP · Código de Ética" },
  { icon: Lock,        label: "LGPD" },
  { icon: FileCheck,   label: "Sigilo absoluto" },
  { icon: Heart,       label: "Plataforma segura" },
];

const Etica = () => (
  <section
    className="py-20 md:py-24 relative grain overflow-hidden"
    style={{ background: "linear-gradient(160deg, #4B6382 0%, #3a4f6a 100%)" }}
  >
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/15" />
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/15" />

    <div className="container max-w-4xl text-center">
      <div className="fade-up">
        <span className="font-body text-[11px] font-semibold tracking-[0.22em] uppercase text-champagne block mb-4">
          Ética e cuidado
        </span>
        <h2 className="font-display text-[40px] md:text-[52px] font-light text-white leading-[1.1] mb-6">
          Seu espaço.<br />
          <em className="text-champagne not-italic">Seu sigilo.</em>{" "}
          Sem concessões.
        </h2>

        <p className="font-body text-[16px] text-white/80 leading-[1.85] max-w-2xl mx-auto mb-3">
          Todo atendimento, presencial ou online, segue o Código de Ética Profissional do Psicólogo (CFP)
          e as diretrizes da Lei Geral de Proteção de Dados (LGPD).
        </p>
        <p className="font-body text-[16px] text-white/80 leading-[1.85] max-w-2xl mx-auto mb-10">
          Suas informações são tratadas com o mais alto nível de confidencialidade.
          Plataformas de teleatendimento criptografadas. Nenhum dado é compartilhado fora da relação clínica.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {tags.map(({ icon: Icon, label }, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 font-body text-[13px] text-white
                         bg-white/10 border border-white/25 rounded-full px-5 py-2.5
                         backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <Icon size={15} strokeWidth={1.8} className="text-champagne" />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Crisis note — CFP recommendation */}
      <div className="fade-up mt-14 pt-8 border-t border-white/15">
        <p className="font-body text-[13px] text-white/70 leading-[1.85] max-w-2xl mx-auto">
          <strong className="text-champagne font-semibold">Atenção:</strong> este site não oferece atendimento
          em situações de crise ou emergência. Se você está passando por uma situação de crise
          ou pensamentos de autoextermínio, ligue para o
          {" "}
          <a
            href="tel:188"
            className="text-champagne underline underline-offset-4 hover:text-white transition-colors font-semibold"
          >
            CVV · 188
          </a>
          {" "}
          (24h, gratuito, sigiloso) ou procure a emergência mais próxima.
        </p>
      </div>
    </div>
  </section>
);

export default Etica;
