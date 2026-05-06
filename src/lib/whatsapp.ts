const PHONE = "5514991335995";

const buildLink = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${PHONE}?text=${encoded}`;
};

export const WA = {
  default: buildLink(
    "Olá, Lucas! Vi seu site e gostaria de agendar uma primeira conversa. 🙂"
  ),
  hero: buildLink(
    "Olá, Lucas! Vi seu site e gostaria de agendar uma primeira conversa. 🙂"
  ),
  avaliacao: buildLink(
    "Olá, Lucas! Tenho interesse na avaliação neuropsicológica. Pode me orientar sobre o processo?"
  ),
  primeiroPasso: buildLink(
    "Olá, Lucas! Quero dar o primeiro passo e iniciar uma conversa. 💬"
  ),
  ctaFinal: buildLink(
    "Olá, Lucas! Gostaria de agendar minha primeira consulta. Estou pronto(a) para começar."
  ),
  faq: buildLink(
    "Olá, Lucas! Vi seu site e ainda tenho algumas dúvidas. Pode me ajudar?"
  ),
  navbar: buildLink(
    "Olá, Lucas! Vi seu site e quero agendar uma consulta. 🙂"
  ),
  quizPositivo: buildLink(
    "Olá, Lucas! Fiz a auto-avaliação no seu site e gostaria de agendar uma conversa."
  ),
  quizNeutro: buildLink(
    "Olá, Lucas! Fiz a auto-avaliação e queria conversar para entender melhor se faz sentido começar."
  ),
} as const;

export const PHONE_NUMBER = PHONE;
