import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building2, CreditCard, FileCheck, ShieldCheck } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

const services = [
  {
    icon: Building2,
    title: "Business setup & licensing",
    description: "Complete support for mainland and freezone setup."
  },
  {
    icon: CreditCard,
    title: "Visa & immigration processing",
    description: "Efficient handling of all visa types."
  },
  {
    icon: FileCheck,
    title: "Government documentation",
    description: "Approvals, attestations, and legal translations."
  },
  {
    icon: ShieldCheck,
    title: "Compliance & renewals",
    description: "Timely renewals and regulatory compliance."
  }
];

export function IntroSection() {
  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <FadeIn direction="up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Service Overview
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We simplify complex UAE government procedures so you can focus on running and growing your business.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up" className="h-full">
              <Card className="text-center h-full hover:shadow-lg transition-shadow bg-card/80 backdrop-blur">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                  </div>
                  <CardTitle className="text-base md:text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn direction="up" delay={0.5}>
          <p className="text-sm md:text-base text-muted-foreground text-center mt-8 px-4 font-medium">
            All services are handled by experienced professionals with deep knowledge of UAE regulations.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}