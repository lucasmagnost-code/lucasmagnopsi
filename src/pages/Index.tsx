import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import Credentials from "@/components/landing/Credentials";
import Sobre from "@/components/landing/Sobre";
import Specialties from "@/components/landing/Specialties";
import Avaliacao from "@/components/landing/Avaliacao";
import Abordagem from "@/components/landing/Abordagem";
import ComoFunciona from "@/components/landing/ComoFunciona";
import CtaCentral from "@/components/landing/CtaCentral";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

const Index = () => {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Credentials />
      <Sobre />
      <Specialties />
      <Avaliacao />
      <Abordagem />
      <ComoFunciona />
      <CtaCentral />
      <Faq />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
