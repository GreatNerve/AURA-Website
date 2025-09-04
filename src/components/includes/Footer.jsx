import React from "react";

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-6 text-center text-base">
    <div className="text-gray-700">&copy; {new Date().getFullYear()} AURA. All rights reserved.</div>
    <div className="mt-2 text-sm">
      <a
        href="/privacy"
        className="underline text-gray-700 hover:text-blue-700 mr-4 transition-colors"
      >
        Privacy Policy
      </a>
      <a
        href="/terms"
        className="underline text-gray-700 hover:text-blue-700 transition-colors"
      >
        Terms of Service
      </a>
    </div>
  </footer>
);

export default Footer;