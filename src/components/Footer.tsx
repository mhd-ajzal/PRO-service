import Link from "next/link";
import { MeronaticLogo } from "./MeronaticLogo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <MeronaticLogo className="w-8 h-8" />
                <span className="text-xl font-bold text-foreground">Meronatic</span>
              </div>
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed">
              Meronatic provides professional Corporate Services in the UAE, helping businesses and individuals manage licensing, government procedures, and compliance.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
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
              <li>Phone: +971 50 000 0000</li>
              <li>Email: info@meronatic.com</li>
              <li className="pt-4 font-semibold text-foreground">Legal</li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Meronatic – Corporate Services UAE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}