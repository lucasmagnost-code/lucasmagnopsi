import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WA = "https://whatsa.me/5514991335995/";

const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    const onScroll = () => { if (window.scrollY > 300) setVisible(true); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, []);

  if (!visible) return null;

  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      title="Agendar pelo WhatsApp"
      className="fixed bottom-7 right-7 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-soft transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle size={26} strokeWidth={1.8} color="white" />
    </a>
  );
};

export default WhatsAppFloat;
