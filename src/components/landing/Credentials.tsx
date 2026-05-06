import { GraduationCap, Stethoscope, BookOpen, Globe } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    num: "UnB · IPOG · FGV",
    label: "Formação acadêmica completa",
  },
  {
    icon: Stethoscope,
    num: "5+ anos",
    label: "de prática clínica",
  },
  {
    icon: BookOpen,
    num: "ACP · TCC",
    label: "Abordagens com evidências sólidas",
  },
  {
    icon: Globe,
    num: "Brasília + Online",
    label: "Atendimento híbrido para todo o Brasil",
  },
];

const Credentials = () => (
  <section className="bg-off-white py-16 relative">
    <div className="container max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-2">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="fade-up text-center px-2 relative md:px-6 group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-3
                           bg-gold/10 group-hover:bg-gold/20 transition-colors duration-400"
              >
                <Icon size={18} strokeWidth={1.5} className="text-gold" />
              </div>
              <span className="font-display text-[18px] md:text-[22px] font-semibold text-navy block leading-tight mb-1.5">
                {item.num}
              </span>
              <span className="font-body text-[11px] text-slate/80 uppercase tracking-[0.14em] leading-snug block">
                {item.label}
              </span>

              {/* Vertical separator (desktop only) */}
              {i < items.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate/15" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Credentials;
