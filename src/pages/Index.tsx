import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import Credentials from "@/components/landing/Credentials";
import Sobre from "@/components/landing/Sobre";
import PainPoints from "@/components/landing/PainPoints";
import Specialties from "@/components/landing/Specialties";
import Avaliacao from "@/components/landing/Avaliacao";
import SelfAssessment from "@/components/landing/SelfAssessment";
import Abordagem from "@/components/landing/Abordagem";
import ComoFunciona from "@/components/landing/ComoFunciona";
import CtaCentral from "@/components/landing/CtaCentral";
import InstagramPreview from "@/components/landing/InstagramPreview";
import Etica from "@/components/landing/Etica";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";
import StickyMobileBar from "@/components/landing/StickyMobileBar";

const Index = () => {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Credentials />
      <Sobre />
      <PainPoints />
      <Specialties />
      <Avaliacao />
      <SelfAssessment />
      <Abordagem />
      <ComoFunciona />
      <CtaCentral />
      <InstagramPreview />
      <Etica />
      <Faq />
      <Footer />
      <WhatsAppFloat />
      <StickyMobileBar />
    </>
  );
};

export default Index;
