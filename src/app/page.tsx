'use client';

import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { IntroSection } from "../components/IntroSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { PartnersSection } from "../components/PartnersSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProcessSection } from "../components/ProcessSection";

import { AboutSection } from "../components/AboutSection";
import { LeadFormSection } from "../components/LeadFormSection";
import { Footer } from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <IntroSection />
                <ServicesSection />
                <ProcessSection />
                <AboutSection />
                <BenefitsSection />
                {/* <PartnersSection /> */}
                <LeadFormSection />
            </main>
            <Footer />
        </div>
    );
}
