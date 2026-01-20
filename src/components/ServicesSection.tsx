"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { services } from "../data/services";
import { FadeIn } from "./ui/FadeIn";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, FileText, Plane, CreditCard, Users, FileCheck, ShieldCheck, Globe, Scale, Briefcase } from "lucide-react";
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform, useScroll } from "framer-motion";
import { cn } from "./ui/utils";

// Helper to map string IDs/slugs to icons
const iconMap: Record<string, any> = {
  "business-setup": Building2,
  "trade-license": FileText,
  "visa-immigration": Plane,
  "emirates-id": CreditCard,
  "medical-biometrics": Users,
  "mohre-gdrfa": FileCheck,
  "document-attestation": ShieldCheck,
  "hr-consultancy": Briefcase
};

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [radius, setRadius] = useState(450);

  useEffect(() => {
    setMounted(true);
    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 180 : 450);
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const orbitIcons = [
    { src: "/images/orbit/land-department.png", alt: "Dubai Land Department" },
    { src: "/images/orbit/ehs.jpg", alt: "EHS" },
    { src: "/images/orbit/rta.jpg", alt: "RTA - Roads & Transport Authority" },
    { src: "/images/orbit/ministry-economy.png", alt: "UAE Ministry of Economy & Tourism" },
    { src: "/images/orbit/tax-authority.png", alt: "Federal Tax Authority" },
    { src: "/images/orbit/civil-defense.jpg", alt: "Dubai Civil Defense" },
    { src: "/images/orbit/uae-emblem.jpg", alt: "United Arab Emirates" },
    { src: "/images/orbit/dubai-customs.jpg", alt: "Dubai Customs" },
    { src: "/images/orbit/dubai-police.jpg", alt: "Dubai Police" },
  ];

  return (
    <section id="services" className="py-12 md:py-32 relative bg-transparent overflow-hidden" ref={containerRef}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Orbit & Heading Container */}
        {/* We want an "n" shape orbit. We accomplish this by creating a container that clips the bottom half of a circular orbit. */}
        <div className="relative w-full max-w-[1400px] mx-auto mb-16 md:mb-24 flex flex-col items-center justify-end">

          {/* The Clipping Window for the Orbit */}
          {/* Height = Radius (approx) + icon buffer. Width = 2 * Radius + buffer. */}
          {/* We position the orbit center at the BOTTOM of this container. */}
          <div className="relative w-full h-[340px] md:h-[500px] overflow-hidden">
            {mounted && <PhysicsOrbit icons={orbitIcons} radius={radius} />}
          </div>

          {/* Heading - Placed "Middle of the loop" (Geometrically, inside the arch) */}
          {/* Since the loop is the top arch, the "middle" is effectively where the center of the circle would be, which is near the bottom of the clipping container. */}
          {/* We pull it up slightly to sit nicely under the arch. */}
          <div className="text-center -mt-12 md:-mt-20 relative z-20">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                Corporate Services
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mt-8">
                Comprehensive solutions for business setup, residency, and compliance in the UAE.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Service Cards Grid - Unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((service, index) => (
            // ... card content
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const Icon = iconMap[service.id] || Building2;

  return (
    <FadeIn delay={index * 0.1} direction="up" className="h-full">
      <Link href={`/services/${service.slug}`} className="block h-full group">
        <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/10 bg-card/60 backdrop-blur-sm group-hover:-translate-y-1 overflow-hidden relative flex flex-col">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 opacity-80" />

          <div className="p-5 flex flex-col h-full">
            {/* Header: Compact Row */}
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl md:text-2xl font-bold leading-tight mb-1 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Corporate Service
                </p>
              </div>
            </div>

            {/* Description */}
            <CardDescription className="text-base line-clamp-3 mb-4 leading-relaxed">
              {service.description}
            </CardDescription>

            {/* Benefits List - Compact Grid */}
            <div className="mt-auto pt-4 border-t border-primary/5">
              <ul className="grid grid-cols-1 gap-2 mb-4">
                {service.benefits?.slice(0, 3).map((benefit: string, i: number) => (
                  <li key={i} className="flex items-center text-sm font-medium text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-xs font-bold text-primary uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                View Details <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </FadeIn>
  )
}

function PhysicsOrbit({ icons, radius = 450 }: { icons: any[], radius?: number }) {
  const angle = useMotionValue(0);

  useAnimationFrame((time) => {
    const speed = 0.01;
    angle.set((time * speed) % 360);
  });

  // Center horizontally (50%), and position vertically at the BOTTOM of the container (100%)
  // effectively making the circle start from the bottom line and arc UPWARDS.
  return (
    <div className="absolute left-1/2 bottom-0 w-0 h-0 flex items-center justify-center">
      {icons.map((item, index) => (
        <PhysicsIcon
          key={index}
          item={item}
          index={index}
          total={icons.length}
          baseAngle={angle}
          radius={radius}
        />
      ))}
    </div>
  )
}

function PhysicsIcon({ item, index, total, baseAngle, radius }: any) {
  const gap = 360 / total;
  const offset = index * gap;

  // Standard Circle Math
  const x = useTransform(baseAngle, (a: number) => {
    const theta = (a + offset) * (Math.PI / 180);
    return Math.cos(theta) * radius;
  });

  const y = useTransform(baseAngle, (a: number) => {
    const theta = (a + offset) * (Math.PI / 180);
    // Negative sin = Upwards curve from 0 to 180.
    return -Math.sin(theta) * radius;
  });

  return (
    <motion.div
      className="absolute flex items-center justify-center z-0"
      style={{ x, y }}
    >
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white backdrop-blur-md border-2 border-primary/30 shadow-xl flex items-center justify-center p-1.5 md:p-2">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
}
