import { services } from "../../../data/services";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { LeadFormSection } from "../../../components/LeadFormSection";
import { FadeIn } from "../../../components/ui/FadeIn";
import { notFound } from "next/navigation";
import { Badge } from "../../../components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, ImageIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-transparent">
            <Header />
            <main className="flex-grow">
                {/* Hero Section for Service */}
                <section className="relative py-24 md:py-32 bg-transparent border-b border-primary/10">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10" />

                    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                        <div className="mb-8">
                            <Button variant="ghost" size="sm" asChild className="pl-0 hover:pl-2 transition-all">
                                <Link href="/#services">
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                                </Link>
                            </Button>
                        </div>

                        <FadeIn direction="up">
                            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                                Corporate Services
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl tracking-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
                                {service.description}
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Details & Benefits */}
                <section className="py-20 md:py-32 bg-transparent">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                            {/* Left Column: Image & Content (Span 8) */}
                            <div className="lg:col-span-8 space-y-8">
                                {/* Image Placeholder */}
                                <FadeIn direction="up">
                                    <div className="w-full aspect-video bg-muted/20 border border-primary/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                        <p className="text-muted-foreground font-medium flex items-center gap-2">
                                            <ImageIcon className="w-5 h-5" />
                                            Image Placeholder: {service.title}
                                        </p>
                                    </div>
                                </FadeIn>

                                <FadeIn direction="up" delay={0.1}>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Service Details</h2>
                                    <div className="prose prose-blue dark:prose-invert max-w-none text-muted-foreground">
                                        <p className="text-lg leading-relaxed mb-6">
                                            {service.description} We provide end-to-end support for {service.title}, ensuring
                                            full compliance with UAE regulations and a smooth, hassle-free process for your
                                            business.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                            {service.details.map((detail, i) => (
                                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-primary/10">
                                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                                    <span className="text-sm font-medium">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Right Column: Sticky Form (Span 4) */}
                            <div className="lg:col-span-4 sticky top-24">
                                <FadeIn direction="left" delay={0.2}>
                                    <div className="bg-card border border-primary/10 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
                                        <h3 className="text-xl font-bold mb-2">Get Started</h3>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            Submit your request for {service.title} assistance.
                                        </p>

                                        {/* Reuse LeadForm but pass the service title */}
                                        <div className="-mx-4 md:-mx-0">
                                            <LeadFormSection
                                                hideServiceDropdown={true}
                                                preselectedService={service.title}
                                                layout="compact"
                                                title="Get Started"
                                                subtitle="Request assistance."
                                            />
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Lead Form - Pre-selected and specific */}
                {/* The LeadFormSection was moved into the grid layout above */}

            </main>
            <Footer />
        </div>
    );
}
