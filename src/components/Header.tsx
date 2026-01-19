"use client";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MeronaticLogo } from "./MeronaticLogo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <MeronaticLogo className="h-10 w-auto" />
            <span className="text-lg font-semibold">Meronatic</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="hidden md:inline-flex" size="sm" asChild>
            <a href="#contact">Request Consultation</a>
          </Button>
          <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#contact">Contact PRO Team</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#benefits"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#process"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2 space-y-2">
              <Button className="w-full" size="sm" asChild onClick={() => setMobileMenuOpen(false)}>
                <a href="#contact">Request Consultation</a>
              </Button>
              <Button variant="outline" className="w-full" size="sm" asChild onClick={() => setMobileMenuOpen(false)}>
                <a href="#contact">Contact PRO Team</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}