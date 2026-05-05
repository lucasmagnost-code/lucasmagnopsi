const items = [
  { num: "UnB + IPOG + FGV", label: "Formação acadêmica completa" },
  { num: "5 anos",           label: "de atuação clínica" },
  { num: "ACP · TCC",        label: "Abordagens com evidências sólidas" },
  { num: "Híbrido",          label: "Presencial · Brasília · Online · Brasil" },
];

const Credentials = () => (
  <section className="bg-off-white py-14">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="fade-up text-center"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className="font-display text-[22px] md:text-[26px] font-semibold text-navy block leading-tight mb-1">
              {item.num}
            </span>
            <span className="font-body text-[12px] text-slate/80 uppercase tracking-[0.1em]">
              {item.label}
            </span>
            {i < items.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-slate/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Credentials;
