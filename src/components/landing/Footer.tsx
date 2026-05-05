const WA = "https://whatsa.me/5514991335995/";

const Footer = () => (
  <footer className="bg-navy py-16">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">

        {/* Col 1 */}
        <div>
          <p className="font-display text-[22px] text-white mb-3">
            Lucas Magno <span className="text-gold">Psi</span>
          </p>
          <p className="font-body text-[13px] text-white/50 leading-[1.9]">
            Neuropsicólogo e Psicólogo Clínico<br />
            CRP 01/24403 · Brasília, DF<br />
            Atendimento presencial e online
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <p className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">Links</p>
          {["#sobre", "#especialidades", "#avaliacao", "#como-funciona", "#faq"].map((href) => (
            <a
              key={href}
              href={href}
              className="block font-body text-[13px] text-white/50 hover:text-gold transition-colors mb-2 capitalize"
            >
              {href.replace("#", "").replace("-", " ")}
            </a>
          ))}
        </div>

        {/* Col 3 */}
        <div>
          <p className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">Canais</p>
          <a
            href="https://www.instagram.com/lucasmagno.psi/"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-body text-[13px] text-white/50 hover:text-gold transition-colors mb-2"
          >
            @lucasmagno.psi
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-3 btn-primary !py-2.5 !px-5 !text-[13px]"
          >
            Agendar Consulta
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8">
        <p className="font-body text-[11px] text-white/25 text-center">
          © 2026 Lucas Magno · CRP 01/24403 · Todos os direitos reservados · Política de Privacidade
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
