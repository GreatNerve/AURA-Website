
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
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-blue-700 tracking-tight">AURA</span>
        </div>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-700 transition-colors font-medium px-2 py-1 rounded-md hover:bg-blue-50"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="focus:outline-none">
            <Menu className="h-6 w-6 text-blue-700" />
          </Button>
        </div>
      </nav>
    </header>
  );
}