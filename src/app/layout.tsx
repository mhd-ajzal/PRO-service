import "../index.css";
import React from "react";
import { Inter as FontSans } from "next/font/google"; // Using Inter as default sans font
import { cn } from "../components/ui/utils";
import { WhatsAppButton } from "../components/WhatsAppButton";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Meronatic PRO Services",
    description: "Professional PRO Services in UAE",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}>
                {children}
                <WhatsAppButton />
            </body>
        </html>
    );
}
