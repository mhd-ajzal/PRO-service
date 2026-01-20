"use client";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MeronaticLogo } from "./MeronaticLogo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center space-x-8 h-full">
          <div className="flex items-center space-x-3">
            <MeronaticLogo className="h-10 w-auto" />
            <span className="text-lg font-semibold">Meronatic</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/#services" className="relative h-full flex items-center text-base font-semibold text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Services
            </a>
            <a href="/#benefits" className="relative h-full flex items-center text-base font-semibold text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Benefits
            </a>
            <a href="/#process" className="relative h-full flex items-center text-base font-semibold text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Process
            </a>
            <a href="/#contact" className="relative h-full flex items-center text-base font-semibold text-foreground hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="hidden md:inline-flex" size="lg" asChild>
            <a href="/#contact">Request Consultation</a>
          </Button>
          <Button variant="outline" size="lg" className="hidden sm:inline-flex" asChild>
            <a href="/#contact">Contact Our Team</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a
              href="/#services"
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/#benefits"
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="/#process"
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="/#contact"
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2 space-y-2">
              <Button className="w-full" size="lg" asChild onClick={() => setMobileMenuOpen(false)}>
                <a href="/#contact">Request Consultation</a>
              </Button>
              <Button variant="outline" className="w-full" size="lg" asChild onClick={() => setMobileMenuOpen(false)}>
                <a href="/#contact">Contact Our Team</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}