import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WA } from "@/lib/whatsapp";

const StickyMobileBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40
                  bg-white/95 backdrop-blur-md border-t border-slate/15
                  px-4 py-3 transition-transform duration-400 ease-out
                  ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ boxShadow: "0 -4px 20px rgba(7,23,57,0.08)" }}
    >
      <a
        href={WA.default}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full
                   bg-gold text-navy rounded-full py-3.5 px-6
                   font-body font-semibold text-base tracking-wide
                   transition-all hover:brightness-110"
      >
        <MessageCircle size={19} strokeWidth={2.2} />
        Agendar pelo WhatsApp
      </a>
    </div>
  );
};

export default StickyMobileBar;
