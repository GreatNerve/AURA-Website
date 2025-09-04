import React from "react";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";

export default function VenuePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-blue-700">Venue</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          The AURA Conference 2025 will be held at the Grand Convention Center, New Delhi. The venue offers state-of-the-art facilities for presentations, networking, and collaboration.
        </p>
        <div className="bg-blue-50 rounded-lg p-6 shadow-md inline-block">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Grand Convention Center</h2>
          <p className="text-gray-700 mb-2">123 Conference Road, New Delhi, India</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">View on Google Maps</a>
        </div>
      </main>
    </div>
  );
}
