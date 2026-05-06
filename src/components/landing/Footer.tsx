import { Link } from "react-router-dom";
import { Instagram, MessageCircle, ShieldCheck } from "lucide-react";
import { WA } from "@/lib/whatsapp";

const navLinks = [
  { label: "Sobre",          href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Avaliação",      href: "#avaliacao" },
  { label: "Auto-avaliação", href: "#auto-avaliacao" },
  { label: "Como Funciona",  href: "#como-funciona" },
  { label: "FAQ",            href: "#faq" },
];

const Footer = () => (
  <footer className="bg-navy py-16">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">

        {/* Col 1 */}
        <div>
          <p className="font-display text-[22px] text-white mb-3">
            Lucas Magno <span className="text-gold">Psi</span>
          </p>
          <p className="font-body text-[13px] text-white/60 leading-[1.9]">
            Neuropsicólogo e Psicólogo Clínico<br />
            CRP 01/24403 · Brasília, DF<br />
            Atendimento presencial e online
          </p>
          <div className="mt-5 flex items-center gap-2 text-[11px] text-white/50">
            <ShieldCheck size={13} strokeWidth={1.8} className="text-gold flex-shrink-0" />
            <span>CFP · LGPD · Sigilo absoluto</span>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <p className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">Navegar</p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block font-body text-[13px] text-white/60 hover:text-gold transition-colors mb-2"
            >
              {link.label}
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
            className="flex items-center gap-2 font-body text-[13px] text-white/60 hover:text-gold transition-colors mb-3"
          >
            <Instagram size={14} strokeWidth={1.8} className="flex-shrink-0" />
            <span>@lucasmagno.psi</span>
          </a>

          <a
            href={WA.default}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-[13px] text-white/60 hover:text-gold transition-colors mb-5"
          >
            <MessageCircle size={14} strokeWidth={1.8} className="flex-shrink-0" />
            <span>WhatsApp direto</span>
          </a>

          <a
            href={WA.default}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex btn-primary !py-2.5 !px-5 !text-[13px]"
          >
            Agendar Consulta
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-[11px] text-white/40 text-center md:text-left">
          © 2026 Lucas Magno · CRP 01/24403 · Todos os direitos reservados
        </p>
        <div className="flex items-center gap-5 text-[11px]">
          <Link
            to="/privacidade"
            className="text-white/50 hover:text-gold transition-colors"
          >
            Política de Privacidade
          </Link>
          <a
            href="tel:188"
            className="text-white/50 hover:text-gold transition-colors"
            title="Centro de Valorização da Vida · 24h"
          >
            CVV · 188
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
