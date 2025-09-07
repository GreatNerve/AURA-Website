import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Venue", href: "/venue" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-transparent w-full z-10 py-4">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            IEEE
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

