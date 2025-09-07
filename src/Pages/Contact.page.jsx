import React from "react";
import { Mail, Phone, MapPin, Users, Twitter, Instagram, Linkedin } from "lucide-react";
import contactData from "@/data/contact.data.json";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// Map icon names from JSON to actual icon components
const iconMap = {
  Mail,
  Phone,
  MapPin,
  Users,
  Twitter,
  Instagram,
  Linkedin
};

export default function ContactPage() {
  return (
    <div className="bg-[#0f1b34] text-white py-16 sm:py-24">
      
      <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
        {/* Added gradient classes to the h1 element */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{contactData.title}</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto px-4">{contactData.subtitle}</p>
      </div>
      
      {/* Main container no longer has the border */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#172a46] p-8 rounded-xl shadow-2xl animate-fade-in" style={{ animationDelay: '300ms' }}>
        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">{contactData.contactInfo.title}</h2>
          <div className="space-y-2"> {/* Reduced spacing for a tighter look */}
            {contactData.contactInfo.items.map((item, index) => {
              const Icon = iconMap[item.icon];
              if (!Icon) return null;
              return (
                // Added transition and hover effect to the container
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-blue-500/10">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <a href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-4">{contactData.socials.title}</h3>
            <div className="flex gap-4">
              {contactData.socials.links.map((social, index) => {
                const Icon = iconMap[social.icon];
                 if (!Icon) return null;
                return (
                  <a
                    key={index}
                    href={social.href}
                    // Added transition and hover effect to social icons
                    className="p-3 bg-gray-700/50 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-blue-500/30"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form with the animated border */}
        <div className="animated-gradient-border rounded-xl bg-[#0f1b34] p-8">
          <h2 className="text-2xl font-semibold mb-6">{contactData.form.title}</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-gray-400">{contactData.form.fields.name}</Label>
                {/* Corrected focus styles to use focus-visible */}
                <Input id="name" type="text" className="bg-gray-800 border-gray-600 text-white mt-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-400">{contactData.form.fields.email}</Label>
                {/* Corrected focus styles to use focus-visible */}
                <Input id="email" type="email" className="bg-gray-800 border-gray-600 text-white mt-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject" className="text-gray-400">{contactData.form.fields.subject}</Label>
              {/* Corrected focus styles to use focus-visible */}
              <Input id="subject" type="text" className="bg-gray-800 border-gray-600 text-white mt-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent" />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-400">{contactData.form.fields.message}</Label>
              {/* Corrected focus styles to use focus-visible */}
              <Textarea id="message" rows="5" className="bg-gray-800 border-gray-600 text-white mt-2 min-h-[120px] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent" />
            </div>
            {/* Added transition and hover effect to the button */}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-base transition-transform duration-300 hover:scale-105">
              {contactData.form.buttonText}
            </Button>
          </form>
        </div>
      </div>

    </div>
  );
}

