import React from "react";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-blue-700">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          For any queries regarding the AURA Conference 2025, feel free to reach out to us.
        </p>
        <div className="bg-blue-50 rounded-lg p-6 shadow-md inline-block">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Email</h2>
          <p className="text-gray-700 mb-2">contact@aura-conference.com</p>
          <h2 className="text-xl font-semibold mb-2 text-blue-700 mt-4">Phone</h2>
          <p className="text-gray-700 mb-2">+91 98765 43210</p>
        </div>
      </main>
    </div>
  );
}
