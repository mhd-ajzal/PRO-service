"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { FadeIn } from "./ui/FadeIn";
import { services } from "../data/services";

import { Phone, Mail, MessageCircle } from "lucide-react";

interface LeadFormSectionProps {
  hideServiceDropdown?: boolean;
  preselectedService?: string;
  title?: string;
  subtitle?: string;
  layout?: "split" | "compact";
}

export function LeadFormSection({
  hideServiceDropdown = false,
  preselectedService,
  title = "Request a Consultation",
  subtitle = "Our team will contact you shortly to discuss your requirements.",
  layout = "split"
}: LeadFormSectionProps) {

  // Compact Layout (Original style, good for sidebars)
  if (layout === "compact") {
    return (
      <section id="contact" className="py-8 bg-transparent relative overflow-hidden">
        <Card className="border-primary/20 shadow-xl bg-card/80 backdrop-blur">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
            <CardDescription className="text-sm">{subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <FormContent hideServiceDropdown={hideServiceDropdown} preselectedService={preselectedService} />
          </CardContent>
        </Card>
      </section>
    );
  }

  // Split Layout (Default for Main Page)
  return (
    <section id="contact" className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-card/60 backdrop-blur-md border border-primary/20 rounded-3xl overflow-hidden shadow-2xl">

              {/* Form Side (Span 8) */}
              <div className="lg:col-span-8 p-6 md:p-10 lg:p-12 relative">
                <div className="space-y-3 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
                  <p className="text-lg text-muted-foreground">{subtitle}</p>
                </div>
                <FormContent hideServiceDropdown={hideServiceDropdown} preselectedService={preselectedService} />
              </div>

              {/* Contact Info Side (Span 4) */}
              <div className="lg:col-span-4 bg-primary/5 border-l border-primary/10 p-6 md:p-10 flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">

                    <div className="flex items-start gap-4 group cursor-pointer hover:bg-primary/5 p-3 rounded-lg -mx-3 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-0.5">Call Us</p>
                        <p className="font-semibold text-lg">+971 50 123 4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer hover:bg-primary/5 p-3 rounded-lg -mx-3 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-0.5">Email Us</p>
                        <p className="font-semibold text-lg">info@meronatic.com</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="pt-8 border-t border-primary/10">
                  <Button className="w-full h-12 text-base gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FormContent({ hideServiceDropdown, preselectedService }: { hideServiceDropdown: boolean, preselectedService?: string }) {
  return (
    <form className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" placeholder="Enter your full name" required className="h-11 bg-background/50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+971 50 000 0000" required className="h-11 bg-background/50" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="name@company.com" required className="h-11 bg-background/50" />
        </div>
      </div>

      {!hideServiceDropdown && (
        <div className="space-y-2">
          <Label htmlFor="service">Service Required</Label>
          <Select defaultValue={preselectedService}>
            <SelectTrigger className="h-11 bg-background/50">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.slug}>
                  {service.title}
                </SelectItem>
              ))}
              <SelectItem value="other">Other Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea id="message" placeholder="Tell us more about your requirements..." className="min-h-[120px] bg-background/50" />
      </div>

      <Button type="submit" size="lg" className="w-full h-12 text-lg font-semibold shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5">
        Request Callback
      </Button>
    </form>
  )
}