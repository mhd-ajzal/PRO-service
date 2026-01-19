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
          <h1 className="mx-auto max-w-4xl text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-4 md:mb-6">
            UAE Corporate Services & Business Support
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="mx-auto max-w-3xl text-base md:text-lg lg:text-xl text-muted-foreground mb-3 md:mb-4 px-4 font-medium">
            Fast. Compliant. End-to-End Government & Business Solutions
          </p>
        </FadeIn>

        <div className="mb-6 md:mb-8 px-4">
          <TextReveal
            text={`Meronatic provides professional Corporate Services in the UAE, helping businesses and individuals manage licensing,\ngovernment procedures, visas, and compliance through a structured and legally compliant process.`}
            className="mx-auto max-w-3xl text-sm md:text-base text-muted-foreground"
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
              <MeronaticLogo className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 drop-shadow-2xl" />
            </div>

            {/* Floating PRO Service Components - Responsive sizing */}

            {/* Trade License Card */}
            <div className="floating-card absolute top-8 left-4 md:top-16 md:left-20 w-28 h-20 md:w-40 md:h-24 bg-card border rounded-xl md:rounded-2xl shadow-lg p-2 md:p-4 transform-gpu">
              <div className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2">Trade License</div>
              <div className="space-y-1 md:space-y-2">
                <div className="h-2 md:h-3 bg-primary rounded w-12 md:w-16"></div>
                <div className="h-2 md:h-3 bg-muted rounded w-14 md:w-20"></div>
              </div>
            </div>

            {/* Visa Processing Card */}
            <div className="floating-card absolute top-20 right-4 md:top-32 md:right-16 w-28 h-24 md:w-36 md:h-28 bg-card border rounded-xl md:rounded-2xl shadow-lg p-2 md:p-4 transform-gpu">
              <div className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2">Visa</div>
              <div className="space-y-1 md:space-y-2">
                <div className="h-1.5 md:h-2 bg-blue-500 rounded w-full"></div>
                <div className="h-1.5 md:h-2 bg-green-500 rounded w-3/4"></div>
                <div className="h-1.5 md:h-2 bg-orange-500 rounded w-5/6"></div>
              </div>
            </div>

            {/* Emirates ID Card */}
            <div className="floating-card absolute bottom-12 left-2 md:bottom-20 md:left-12 w-32 h-24 md:w-44 md:h-32 bg-card border rounded-xl md:rounded-2xl shadow-lg p-2 md:p-4 transform-gpu">
              <div className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2">Emirates ID</div>
              <div className="space-y-1 md:space-y-2">
                <div className="h-3 md:h-4 bg-red-500/80 rounded w-24 md:w-32"></div>
                <div className="h-2 md:h-3 bg-muted rounded w-20 md:w-28"></div>
                <div className="h-1.5 md:h-2 bg-muted rounded w-16 md:w-24"></div>
              </div>
            </div>

            {/* Business Setup Card */}
            <div className="floating-card absolute bottom-16 right-4 md:bottom-24 md:right-20 w-28 h-28 md:w-38 md:h-36 bg-card border rounded-xl md:rounded-2xl shadow-lg p-2 md:p-4 transform-gpu">
              <div className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2">Business Setup</div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded"></div>
                  <div className="h-1.5 md:h-2 bg-muted rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded"></div>
                  <div className="h-1.5 md:h-2 bg-muted rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded"></div>
                  <div className="h-1.5 md:h-2 bg-muted rounded flex-1"></div>
                </div>
              </div>
            </div>

            {/* Government Approvals - Hidden on mobile */}
            <div className="floating-card absolute top-20 right-32 w-28 h-16 md:w-32 md:h-20 bg-card border rounded-xl md:rounded-2xl shadow-lg p-2 md:p-4 transform-gpu hidden sm:block">
              <div className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2">Approvals</div>
              <div className="space-y-1">
                <div className="h-1 bg-primary rounded w-3 md:w-4"></div>
                <div className="h-1 bg-primary rounded w-6 md:w-8"></div>
                <div className="h-1 bg-primary rounded w-9 md:w-12"></div>
              </div>
            </div>

            {/* Documents - Hidden on mobile */}
            <div className="floating-card absolute bottom-32 left-32 w-28 h-20 md:w-36 md:h-24 bg-card border rounded-xl md:rounded-2xl shadow-lg p-2 md:p-3 transform-gpu hidden sm:block">
              <div className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-1.5">Documents</div>
              <div className="flex flex-col gap-1.5 md:gap-2">
                <div className="flex items-center space-x-2">
                  <div className="min-w-[12px] h-[16px] md:min-w-[16px] md:h-[20px] bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-[2px]" />
                  <div className="h-1.5 bg-muted rounded w-3/4" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="min-w-[12px] h-[16px] md:min-w-[16px] md:h-[20px] bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-[2px]" />
                  <div className="h-1.5 bg-muted rounded w-1/2" />
                </div>
              </div>
            </div>

            {/* Medical & Biometric Card - Hidden on mobile */}
            <div className="floating-card absolute top-40 left-40 w-32 h-24 md:w-40 md:h-28 bg-card border rounded-xl md:rounded-2xl shadow-lg p-2 md:p-4 transform-gpu hidden md:block">
              <div className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2">Medical Test</div>
              <div className="space-y-1">
                <div className="h-1.5 md:h-2 bg-muted rounded w-full"></div>
                <div className="h-1.5 md:h-2 bg-muted rounded w-3/4"></div>
                <div className="h-1.5 md:h-2 bg-muted rounded w-5/6"></div>
              </div>
            </div>

            {/* Processing Status - Hidden on mobile */}
            <div className="floating-card absolute top-12 right-48 w-28 h-20 md:w-36 md:h-28 bg-card border rounded-xl md:rounded-2xl shadow-lg p-3 md:p-4 transform-gpu hidden lg:block">
              <div className="text-[10px] md:text-xs text-muted-foreground mb-2 md:mb-3 font-medium uppercase tracking-wider">Status</div>
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                  <div className="text-xs font-medium leading-none">Approved</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                  <div className="text-xs font-medium leading-none">Processing</div>
                </div>
              </div>
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