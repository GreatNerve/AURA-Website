import React from "react";

const Footer = () => (
  <footer className="w-full bg-transparent text-center text-base py-6">
    <div className="container mx-auto px-4">
      <div className="text-gray-400">&copy; {new Date().getFullYear()} AURA. All rights reserved.</div>
      <div className="mt-2 text-sm">
        <a
          href="/privacy"
          className="underline text-gray-400 hover:text-white mr-4 transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="underline text-gray-400 hover:text-white transition-colors"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

