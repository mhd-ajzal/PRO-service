"use client";

import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { MeronaticLogo } from "./MeronaticLogo";
import { FadeIn } from "./ui/FadeIn";
import { TextReveal } from "./ui/TextReveal";


export function HeroSection() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const cards = scene.querySelectorAll('.floating-card');

    let animationFrameId: number;
    const animateCards = () => {
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const time = Date.now() * 0.001;
        const offset = index * 0.5;

        const x = Math.sin(time + offset) * 30;
        const y = Math.cos(time + offset * 1.2) * 20;
        const rotateX = Math.sin(time + offset) * 10;
        const rotateY = Math.cos(time + offset * 0.8) * 15;

        element.style.transform = `
          translate3d(${x}px, ${y}px, 0) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });

      animationFrameId = requestAnimationFrame(animateCards);
    };

    animateCards();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <FadeIn direction="up" delay={0.1}>
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-4 md:mb-6">
            UAE Corporate Services & Business Support
          </h1>
        </FadeIn>

        <div className="mb-3 md:mb-4 px-4">
          <FadeIn direction="up" delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
              Fast. Compliant. End-to-End Government & Business Solutions
            </p>
          </FadeIn>
        </div>

        <div className="mb-6 md:mb-8 px-4">
          <TextReveal
            text="Meronatic provides professional Corporate Services in the UAE, helping businesses and individuals manage licensing, government procedures, visas, and compliance through a structured and legally compliant process."
            className="mx-auto max-w-4xl text-base md:text-lg text-muted-foreground leading-relaxed"
            delay={0.4}
          />
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">Request Consultation</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#contact">Contact Our Team</a>
            </Button>
          </div>
        </FadeIn>

        {/* 3D Graphics Scene - PRO Services Theme */}
        <div className="relative mx-auto max-w-5xl h-64 md:h-96 lg:h-[500px]">
          <div
            ref={sceneRef}
            className="relative w-full h-full perspective-1000"
            style={{ perspective: '1000px' }}
          >
            {/* Central Hub - Replaced with Meronatic Logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <MeronaticLogo className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 drop-shadow-2xl" />
            </div>

            {/* Floating PRO Service Components - Responsive sizing */}

            {/* Trade License Card */}
            {/* Trade License Card */}
            {/* Trade License Card */}
            {/* Trade License Card */}
            <div className="floating-card absolute top-8 left-4 md:top-8 md:left-8 w-24 md:w-52 transform-gpu">
              <img
                src="/assets/hero/hero-trade-license.png"
                alt="Trade License"
                className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
              />
            </div>

            {/* Visa Processing Card */}
            {/* Visa Processing Card */}
            {/* Visa Processing Card */}
            {/* Visa Processing Card */}
            <div className="floating-card absolute top-20 right-4 md:top-20 md:right-6 w-24 md:w-48 transform-gpu">
              <img
                src="/assets/hero/hero-approval.png"
                alt="Visa Processing"
                className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
              />
            </div>

            {/* Emirates ID Card */}
            {/* Emirates ID Card */}
            {/* Emirates ID Card */}
            {/* Emirates ID Card */}
            <div className="floating-card absolute bottom-12 left-2 md:bottom-10 md:left-8 w-28 md:w-60 transform-gpu">
              <img
                src="/assets/hero/hero-id.png"
                alt="Emirates ID"
                className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
              />
            </div>

            {/* Business Setup Card */}
            {/* Business Setup Card */}
            {/* Business Setup Card */}
            {/* Business Setup Card */}
            <div className="floating-card absolute bottom-16 right-4 md:bottom-12 md:right-8 w-24 md:w-52 transform-gpu">
              <img
                src="/assets/hero/hero-setup.png"
                alt="Business Setup"
                className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
              />
            </div>

            {/* Government Approvals - Hidden on mobile */}
            {/* Documents - Moved to right side to balance layout */}
            {/* Documents - Moved to right side to balance layout */}
            {/* Documents - Moved to right side to balance layout */}
            <div className="floating-card absolute top-20 right-32 md:top-64 md:right-8 w-36 md:w-44 transform-gpu hidden sm:block">
              <img
                src="/assets/hero/hero-docs.png"
                alt="Documents"
                className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
              />
            </div>



            {/* Medical & Biometric Card - Hidden on mobile */}
            {/* Medical & Biometric Card - Hidden on mobile */}
            {/* Medical & Biometric Card - Hidden on mobile */}
            {/* Medical & Biometric Card - Hidden on mobile */}
            <div className="floating-card absolute top-40 left-40 md:top-60 md:left-8 w-40 md:w-56 transform-gpu hidden md:block">
              <img
                src="/assets/hero/hero-medical.png"
                alt="Medical Test"
                className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
              />
            </div>



            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            </svg>

            {/* Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {particles.map((style, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
                  style={{
                    left: style.left,
                    top: style.top,
                    animationDelay: style.delay,
                    animationDuration: style.duration
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}