"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { FadeIn } from "./ui/FadeIn";
import { services } from "../data/services";

interface LeadFormSectionProps {
  hideServiceDropdown?: boolean;
  preselectedService?: string;
  title?: string;
  subtitle?: string;
}

export function LeadFormSection({
  hideServiceDropdown = false,
  preselectedService,
  title = "Request a Consultation",
  subtitle = "Our team will contact you shortly to discuss your requirements."
}: LeadFormSectionProps) {
  return (
    <section id="contact" className="py-20 md:py-32 bg-transparent relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/20 shadow-2xl bg-card/80 backdrop-blur">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-3xl md:text-4xl">{title}</CardTitle>
                <CardDescription className="text-lg">
                  {subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="Enter your full name" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+971 50 000 0000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="name@company.com" required />
                    </div>
                  </div>

                  {!hideServiceDropdown && (
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <Select defaultValue={preselectedService}>
                        <SelectTrigger>
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
                    <Textarea id="message" placeholder="Tell us more about your requirements..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Request Callback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}