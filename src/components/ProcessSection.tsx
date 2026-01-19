"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MessageSquareText, FileText, Landmark, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: MessageSquareText,
        title: "Consultation",
        description: "Understanding your requirement & document verification.",
    },
    {
        icon: FileText,
        title: "Document Submission",
        description: "Submit your documents online or physically.",
    },
    {
        icon: Landmark,
        title: "Government Processing",
        description: "Handled completely by our Corporate Services team.",
    },
    {
        icon: CheckCircle,
        title: "Completion",
        description: "Final delivery of documents, approvals, and visas.",
    },
];

export function ProcessSection() {
    return (
        <section id="process" className="py-20 md:py-32 relative overflow-hidden bg-transparent">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight mb-4 text-foreground">
                        How It Works
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-[800px] leading-relaxed">
                        A simple, transparent journey to get your business setup and running.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10 top-[4.5rem]" />

                    {steps.map((step, index) => (
                        <Card key={index} className="relative bg-card border-border/50 hover:border-primary/50 transition-colors duration-300 overflow-visible">
                            {/* Number Badge - Top Left Outside */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-background z-20">
                                {index + 1}
                            </div>

                            <CardHeader className="flex flex-col items-center pt-8 pb-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>
                                <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center pb-8">
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
