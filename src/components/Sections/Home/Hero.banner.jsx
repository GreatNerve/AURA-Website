import React from "react";
import { Button } from "@/components/ui/button";


const HeroBanner = () => (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white w-full h-screen flex flex-col justify-center items-center px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to AURA Conference 2025
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            The premier event for authors to publish their research papers, connect with thought leaders, innovators, and visionaries. Join us for inspiration, networking, and academic excellence.
        </p>
        <Button asChild className="rounded-full font-bold text-lg px-10 py-5 shadow-lg bg-white text-blue-700 hover:bg-blue-50 transition-colors">
            <a href="#register">
                Register Now
            </a>
        </Button>
    </section>
);

export default HeroBanner;
