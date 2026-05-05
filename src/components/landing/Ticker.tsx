const CONTENT =
  "NEUROPSICOLOGIA ◆ AVALIAÇÃO NEUROPSICOLÓGICA ◆ PSICOTERAPIA PARA ADULTOS ◆ TEA & TDAH ◆ ABORDAGEM CENTRADA NA PESSOA ◆ TERAPIA COGNITIVO-COMPORTAMENTAL ◆ LUTO E PERDA ◆ ANSIEDADE ◆ DEPRESSÃO ◆ BRASÍLIA · ATENDIMENTO ONLINE ◆ ";

const Ticker = () => (
  <div
    className="h-[48px] overflow-hidden flex items-center"
    style={{ backgroundColor: "#4B6382" }}
  >
    <div className="ticker-track flex whitespace-nowrap font-body font-medium text-[11px] tracking-[0.14em] text-white/90">
      <span className="px-6">{CONTENT}</span>
      <span className="px-6">{CONTENT}</span>
    </div>
  </div>
);

export default Ticker;
