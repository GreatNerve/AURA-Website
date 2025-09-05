import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const aboutImage = "src/assets/about.jpg"; 

function About({ variant = 'dark' }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    if (containerRef.current) {
                        observer.unobserve(containerRef.current);
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const isDark = variant === 'dark';

    const darkClasses = {
        section: "bg-[#0A192F] py-12 px-4 md:px-16 mb-16 text-white",
        headings: "text-blue-300",
        text: "text-gray-300",
        buttonBg: "bg-blue-600 hover:bg-blue-500",
        buttonText: "text-white"
    };

    const lightClasses = {
        section: "bg-white py-12 px-4 md:px-16 mb-16",
        headings: "text-blue-700",
        text: "text-gray-700",
        buttonBg: "bg-blue-700 hover:bg-blue-50",
        buttonText: "text-white"
    };

    const currentTheme = isDark ? darkClasses : lightClasses;

    return (
        <section
            ref={containerRef}
            className={`${currentTheme.section} transition-all duration-1000 ease-in-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="max-w-6xl mx-auto">
                <h1 className={`text-4xl md:text-5xl font-bold ${currentTheme.headings} mb-2 text-center`}>
                    About IEEE NSUT Conference
                </h1>
                <h2 className={`text-xl md:text-2xl ${currentTheme.headings} italic mb-8 text-center`}>
                    Where Innovation Meets Opportunity
                </h2>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    <div className="flex-1">
                        <p className={`${currentTheme.text} mb-4`}>
                            The IEEE NSUT Conference is organized to foster research, collaboration, and innovation in cutting-edge domains of engineering and technology. Our mission is to provide a platform where academia, industry, and students come together to:
                        </p>
                        <ul className={`list-disc list-inside ${currentTheme.text} mb-4 space-y-1`}>
                            <li>Share groundbreaking research.</li>
                            <li>Discuss emerging trends.</li>
                            <li>Network for future collaborations.</li>
                        </ul>
                        <p className={`${currentTheme.text} mb-6`}>
                            Backed by IEEE, this conference serves as a stepping stone for young innovators to contribute towards solving real-world challenges.
                        </p>
                        <div className="flex flex-wrap gap-6 mb-6">
                            <div className="flex items-center gap-2">
                                <span className={`text-2xl font-bold ${currentTheme.headings}`}>25+</span>
                                <span className={`${currentTheme.text} text-sm`}>Keynote Speakers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`text-2xl font-bold ${currentTheme.headings}`}>1000+</span>
                                <span className={`${currentTheme.text} text-sm`}>attendees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`text-2xl font-bold ${currentTheme.headings}`}>50+</span>
                                <span className={`${currentTheme.text} text-sm`}>Sponsors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`text-2xl font-bold ${currentTheme.headings}`}>10+</span>
                                <span className={`${currentTheme.text} text-sm`}>Workshops</span>
                            </div>
                        </div>
                        <Button asChild className={`rounded-full font-bold text-lg px-10 py-5 shadow-lg ${currentTheme.buttonBg} ${currentTheme.buttonText} transition-colors`}>
                            <a href="/contact">
                                Join Us
                            </a>
                        </Button>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img
                            src={aboutImage}
                            alt="Conference"
                            className="rounded-3xl w-full object-cover shadow-lg"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/0A192F/FFFFFF?text=Image+Not+Found'; }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;