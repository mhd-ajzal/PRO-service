"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { MeronaticLogo } from "./MeronaticLogo";
import { FadeIn } from "./ui/FadeIn";
import { TextReveal } from "./ui/TextReveal";


export function HeroSection() {
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

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-transparent">
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes floatCard1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
          25% { transform: translate3d(15px, -10px, 0) rotateX(5deg) rotateY(8deg); }
          50% { transform: translate3d(-10px, 15px, 0) rotateX(-5deg) rotateY(-5deg); }
          75% { transform: translate3d(12px, 8px, 0) rotateX(3deg) rotateY(-8deg); }
        }
        @keyframes floatCard2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
          25% { transform: translate3d(-12px, 12px, 0) rotateX(-5deg) rotateY(5deg); }
          50% { transform: translate3d(15px, -8px, 0) rotateX(6deg) rotateY(-6deg); }
          75% { transform: translate3d(-8px, -12px, 0) rotateX(-4deg) rotateY(7deg); }
        }
        @keyframes floatCard3 {
          0%, 100% { transform: translate3d(0, 0, 0) rotateX(0) rotateY(0); }
          25% { transform: translate3d(10px, 15px, 0) rotateX(4deg) rotateY(-6deg); }
          50% { transform: translate3d(-15px, -10px, 0) rotateX(-6deg) rotateY(4deg); }
          75% { transform: translate3d(8px, -15px, 0) rotateX(5deg) rotateY(6deg); }
        }
        .float-1 { animation: floatCard1 6s ease-in-out infinite; }
        .float-2 { animation: floatCard2 7s ease-in-out infinite; }
        .float-3 { animation: floatCard3 8s ease-in-out infinite; }
        .float-1-delay { animation: floatCard1 6s ease-in-out infinite 0.5s; }
        .float-2-delay { animation: floatCard2 7s ease-in-out infinite 1s; }
        .float-3-delay { animation: floatCard3 8s ease-in-out infinite 1.5s; }
      `}</style>

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
            <Button size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contact">Request Consultation</a>
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#contact">Contact Our Team</a>
            </Button>
          </div>
        </FadeIn>

        {/* 3D Graphics Scene - Symmetric Layout */}
        <div className="relative mx-auto max-w-6xl h-80 md:h-[450px] lg:h-[550px]" style={{ perspective: '1000px' }}>

          {/* Central Hub - Meronatic Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <MeronaticLogo className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 drop-shadow-2xl" />
          </div>

          {/* LEFT SIDE - 3 Images */}

          {/* Left Top - Trade License */}
          <div className="float-1 absolute top-2 left-0 md:top-4 md:left-2 w-16 sm:w-20 md:w-32 lg:w-40 z-10">
            <img
              src="/assets/hero/hero-trade-license.png"
              alt="Trade License"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* Left Middle - HR Meeting */}
          <div className="float-2 absolute top-1/3 left-0 md:left-0 w-20 sm:w-24 md:w-36 lg:w-44 z-10">
            <img
              src="/assets/hero/hero-hr-meeting.jpg"
              alt="HR Consultancy"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* Left Bottom - Emirates ID */}
          <div className="float-3 absolute bottom-2 left-0 md:bottom-4 md:left-2 w-20 sm:w-24 md:w-36 lg:w-44 z-10">
            <img
              src="/assets/hero/hero-id.png"
              alt="Emirates ID"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* RIGHT SIDE - 3 Images */}

          {/* Right Top - Visa Processing */}
          <div className="float-2 absolute top-2 right-0 md:top-4 md:right-2 w-16 sm:w-20 md:w-32 lg:w-40 z-10">
            <img
              src="/assets/hero/hero-approval.png"
              alt="Visa Processing"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* Right Middle - HR Technology */}
          <div className="float-1 absolute top-1/3 right-0 md:right-0 w-20 sm:w-24 md:w-36 lg:w-44 z-10">
            <img
              src="/assets/hero/hero-hr-tech.jpg"
              alt="HR Technology"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* Right Bottom - Business Setup */}
          <div className="float-3-delay absolute bottom-2 right-0 md:bottom-4 md:right-2 w-20 sm:w-24 md:w-36 lg:w-44 z-10">
            <img
              src="/assets/hero/hero-setup.png"
              alt="Business Setup"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* TOP CENTER - 2 Images */}

          {/* Top Left of Center - HR Lifecycle */}
          <div className="float-1-delay absolute top-0 left-[18%] sm:left-[20%] md:left-[22%] w-20 sm:w-24 md:w-36 lg:w-44 z-10">
            <img
              src="/assets/hero/hero-hr-lifecycle.jpg"
              alt="HR Lifecycle"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* Top Right of Center - Documents */}
          <div className="float-2-delay absolute top-0 right-[18%] sm:right-[20%] md:right-[22%] w-14 sm:w-18 md:w-24 lg:w-32 z-10">
            <img
              src="/assets/hero/hero-docs.png"
              alt="Documents"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* BOTTOM CENTER - 2 Images */}

          {/* Bottom Left of Center - HR People */}
          <div className="float-3-delay absolute bottom-0 left-[18%] sm:left-[20%] md:left-[22%] w-20 sm:w-24 md:w-36 lg:w-44 z-10">
            <img
              src="/assets/hero/hero-hr-people.jpg"
              alt="HR People Management"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* Bottom Right of Center - Medical */}
          <div className="float-1-delay absolute bottom-0 right-[18%] sm:right-[20%] md:right-[22%] w-16 sm:w-20 md:w-28 lg:w-36 z-10">
            <img
              src="/assets/hero/hero-medical.png"
              alt="Medical Test"
              className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
            />
          </div>

          {/* Connecting Lines - All 10 images */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Left Side - 3 lines */}
            {/* Left Top - Trade License */}
            <line x1="50%" y1="50%" x2="8%" y2="10%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
            {/* Left Middle - HR Meeting */}
            <line x1="50%" y1="50%" x2="8%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            {/* Left Bottom - Emirates ID */}
            <line x1="50%" y1="50%" x2="8%" y2="90%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.6s' }} />

            {/* Right Side - 3 lines */}
            {/* Right Top - Visa Processing */}
            <line x1="50%" y1="50%" x2="92%" y2="10%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            {/* Right Middle - HR Technology */}
            <line x1="50%" y1="50%" x2="92%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
            {/* Right Bottom - Business Setup */}
            <line x1="50%" y1="50%" x2="92%" y2="90%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />

            {/* Top Center - 2 lines */}
            {/* Top Left of Center - HR Lifecycle */}
            <line x1="50%" y1="50%" x2="28%" y2="8%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.8s' }} />
            {/* Top Right of Center - Documents */}
            <line x1="50%" y1="50%" x2="72%" y2="8%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '2.1s' }} />

            {/* Bottom Center - 2 lines */}
            {/* Bottom Left of Center - HR People */}
            <line x1="50%" y1="50%" x2="28%" y2="92%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '2.4s' }} />
            {/* Bottom Right of Center - Medical */}
            <line x1="50%" y1="50%" x2="72%" y2="92%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '2.7s' }} />
          </svg>

          {/* Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
    </section>
  );
}