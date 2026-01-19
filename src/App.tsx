import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ServicesSection } from "./components/ServicesSection";

import { AboutSection } from "./components/AboutSection";
import { LeadFormSection } from "./components/LeadFormSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <BenefitsSection />
        <ServicesSection />
        <AboutSection />
        <LeadFormSection />
      </main>
      <Footer />
    </div>
  );
}