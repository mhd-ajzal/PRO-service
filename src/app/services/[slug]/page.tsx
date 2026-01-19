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
                {/* Details & Benefits */}
                <section className="py-20 bg-transparent">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">

                        {/* Image Placeholder */}
                        {/* Service Image */}
                        <FadeIn direction="up">
                            <div className="w-full aspect-video md:aspect-[21/9] bg-muted/20 border border-primary/10 rounded-3xl overflow-hidden mb-12 shadow-2xl relative group">
                                {service.image ? (
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                                        <p className="text-muted-foreground font-medium flex items-center gap-2">
                                            <ImageIcon className="w-6 h-6" />
                                            {service.title}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.1}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Service Details</h2>
                            <div className="prose prose-lg prose-blue dark:prose-invert max-w-none text-muted-foreground">
                                <p className="text-xl leading-relaxed mb-8">
                                    {service.description} We provide end-to-end support for {service.title}, ensuring
                                    full compliance with UAE regulations and a smooth, hassle-free process for your
                                    business.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                    {service.details.map((detail, i) => (
                                        <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-primary/10 hover:border-primary/20 transition-colors shadow-sm">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="text-base font-medium">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                    </div>
                </section>

                {/* Lead Form - Full Section */}
                <LeadFormSection
                    hideServiceDropdown={true}
                    preselectedService={service.title}
                    layout="split"
                    withContactInfo={false}
                    title="Get Started"
                    subtitle={`Request expert assistance for ${service.title}.`}
                />

                {/* Lead Form - Pre-selected and specific */}
                {/* The LeadFormSection was moved into the grid layout above */}

            </main>
            <Footer />
        </div>
    );
}
