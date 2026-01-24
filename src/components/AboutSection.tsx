"use client";

import { FadeIn } from "./ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105 -z-10" />
                <img
                  src="/images/mero-about.png"
                  alt="Meronatic Office"
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover grayscale-0 md:grayscale-0 hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    // Fallback if image doesn't exist, use a placeholder
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486406140926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3";
                  }}
                />
              </div>
            </FadeIn>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <FadeIn direction="left" delay={0.2}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                About Meronatic
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Meronatic is a UAE-based Corporate Services provider specializing in business support, government coordination, and compliance solutions.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Our mission is to remove complexity and make UAE government processes smooth and predictable. We focus on transparency, accuracy, legal compliance, and time efficiency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Transparency",
                  "Accuracy",
                  "Legal Compliance",
                  "Time Efficiency"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}