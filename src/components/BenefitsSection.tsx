import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Zap, Shield, HeadphonesIcon } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

const benefits = [
  {
    icon: Zap,
    title: "Fast & Structured Processing",
    description: "We follow defined workflows to minimize delays and avoid rejections."
  },
  {
    icon: Shield,
    title: "Fully UAE Compliant",
    description: "Every service follows UAE legal frameworks and authority standards."
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "One point of contact from start to completion — no confusion, no delays."
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight mb-4 px-4 font-bold">
              MERONATIC Advantages
            </h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up" className="h-full">
              <Card className="text-center h-full hover:shadow-lg transition-transform hover:-translate-y-1 bg-card/90 flex flex-col">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <benefit.icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-base text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}