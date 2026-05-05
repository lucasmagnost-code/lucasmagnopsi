import { useState, useEffect } from "react";

const WA = "https://whatsa.me/5514991335995/";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Avaliação", href: "#avaliacao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-nav"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-[20px] font-semibold tracking-tight">
            <span className={scrolled ? "text-navy" : "text-white"}>Lucas Magno</span>
            <span className="text-gold"> Psi</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-body text-[13px] font-medium tracking-wide transition-colors hover:text-gold ${
                  scrolled ? "text-slate" : "text-white/80"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 !text-[13px]"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 flex flex-col gap-[5px]"
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[2px] ${scrolled ? "bg-navy" : "bg-white"}`} />
            <span className={`block w-5 h-[2px] ${scrolled ? "bg-navy" : "bg-white"}`} />
            <span className={`block w-5 h-[2px] ${scrolled ? "bg-navy" : "bg-white"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-navy flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-5 text-white text-3xl font-light"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
          >
            ✕
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-[26px] text-white hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
