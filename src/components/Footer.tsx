import Link from "next/link";
import { MeronaticLogo } from "./MeronaticLogo";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border/50">
      <div className="container mx-auto px-4 py-12 md:py-16 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MeronaticLogo className="w-8 h-8" />
                <span className="text-xl font-bold text-foreground">Meronatic</span>
              </div>
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed mx-auto md:mx-0">
              Meronatic PRO Services provides professional Corporate Services in the UAE, helping businesses and individuals manage licensing, government procedures, and compliance.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="https://www.linkedin.com/groups/17481009" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://www.tiktok.com/@meronaticpro?_r=1&_t=ZS-93DsU2BWswy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                {/* Custom TikTok Icon since standard library might miss it */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/meronaticpro" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.facebook.com/people/Meronatic-PRO-Services/61586641676555/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/business-setup" className="hover:text-primary transition-colors">Business Setup</Link></li>
              <li><Link href="/services/visa-immigration" className="hover:text-primary transition-colors">Visa Services</Link></li>
              <li><Link href="/services/trade-license" className="hover:text-primary transition-colors">Trade License</Link></li>
              <li><Link href="/services/emirates-id" className="hover:text-primary transition-colors">Emirates ID</Link></li>
              <li><Link href="/services/document-attestation" className="hover:text-primary transition-colors">Attestation</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact & Support</h3>
            <ul className="space-y-3">
              <li>Phone: +971 55 459 1737</li>
              <li>Email: info@meronatic.com</li>
              <li className="pt-4 font-semibold text-foreground">Legal</li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Meronatic PRO Services – Corporate Services UAE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}