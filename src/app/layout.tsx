import "../index.css";
import React from "react";
import { Inter as FontSans } from "next/font/google"; // Using Inter as default sans font
import { cn } from "../components/ui/utils";
import { WhatsAppButton } from "../components/WhatsAppButton";
import Script from "next/script";

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
                <Script id="chatwoot-sdk" strategy="afterInteractive">
                    {`
                      (function(d,t) {
                        var BASE_URL="http://chatwoot-twcoc0go8gg8cgsg0kwcog4o.72.62.191.145.sslip.io";
                        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                        g.src=BASE_URL+"/packs/js/sdk.js";
                        g.async = true;
                        s.parentNode.insertBefore(g,s);
                        g.onload=function(){
                          window.chatwootSDK.run({
                            websiteToken: 'LFQQNMEq872v3i3jwoRmZPZ9',
                            baseUrl: BASE_URL
                          })
                        }
                      })(document,"script");
                    `}
                </Script>
            </body>
        </html>
    );
}
