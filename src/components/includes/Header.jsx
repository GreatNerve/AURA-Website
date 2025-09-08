import React from "react";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Venue", href: "/venue" },
//   { name: "Contact", href: "/contact" },
// ];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-b-2xl border-b border-white/10 bg-[#023854] px-10 py-4" style={{ height: "68px" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <img src="/logo.png" alt="IEEE NSUT Logo" className="h-8 w-8" /> */}
          <span className="text-lg font-semibold text-white">IEEE NSUT</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center gap-8 text-gray-300">
          <li className="cursor-pointer hover:text-white"><a key = "Home" href="/"></a>Home</li>
          <li className="cursor-pointer hover:text-white"><a key="About" href="/about"></a>About</li>
          <li className="cursor-pointer hover:text-white"><a key="Venue" href="/venue"></a>Venue</li>
          <li className="cursor-pointer hover:text-white"><a key="Contact" href="/contact"></a>Contact</li>
           {/* Divider */}
          <li className="h-6 border-r border-white/40"></li>
          <li>
            <button className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#023854] hover:bg-gray-300">
              Register
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col justify-between w-6 h-5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>


        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-[68px] right-0 w-48 rounded-b-2xl bg-[#023854] shadow-lg md:hidden">
            <ul className="flex flex-col items-center gap-4 p-4 text-white text-lg">
              <li className="cursor-pointer hover:text-gray-300">Home</li>
              <li className="cursor-pointer hover:text-gray-300">About</li>
              <li className="cursor-pointer hover:text-gray-300">Venue</li>
              <li className="cursor-pointer hover:text-gray-300">Contact</li>
              <li>
                <button className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#023854] hover:bg-gray-300">
                    Register
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

