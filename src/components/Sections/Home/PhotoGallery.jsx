import React, { useRef, useState, useEffect } from "react";

const GALLERY_IMAGES = [
  {
    id: 1011,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto-format&fit=crop",
    alt: "Audience at a conference",
    caption: "1000+ attendees last year",
  },
  {
    id: 1015,
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto-format&fit=crop",
    alt: "People networking at an event",
    caption: "Networking with innovators",
  },
  {
    id: 1020,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto-format&fit=crop",
    alt: "Professionals collaborating",
    caption: "Boost your profile - Recognition by IEEE",
  },
  {
    id: 1035,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto-format&fit=crop",
    alt: "Students working together on laptops",
    caption: "Build professional relationships",
  },
  {
    id: 1042,
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto-format&fit=crop",
    alt: "A speaker presenting to an audience",
    caption: "Learn from industry experts",
  },
];

function PhotoGallery({ variant = 'dark' }) {
  const galleryRef = useRef(null);
  const containerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const scrollGallery = (direction) => {
    const scrollAmount = 352;
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

  useEffect(() => {
    let interval;
    if (autoScroll) {
      interval = setInterval(() => {
        if (galleryRef.current) {
          const isAtEnd =
            galleryRef.current.scrollLeft + galleryRef.current.clientWidth >=
            galleryRef.current.scrollWidth - 10;
          if (isAtEnd) {
            galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollGallery(1);
          }
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoScroll]);

  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);
  
  const isDark = variant === 'dark';

  const darkClasses = {
    container: "bg-[#0A192F] text-white",
    title: "text-blue-300",
    cardBorder: "border-gray-700",
    buttonBg: "bg-black/50 hover:bg-black/70",
  };

  const lightClasses = {
    container: "bg-white text-black",
    title: "text-blue-800",
    cardBorder: "border-gray-200",
    buttonBg: "bg-black/50 hover:bg-black/70",
  };

  const currentTheme = isDark ? darkClasses : lightClasses;

  return (
    <div
      ref={containerRef}
      className={`${
        currentTheme.container
      } w-full min-h-screen flex flex-col items-center justify-center py-8 font-sans transition-all duration-1000 ease-in-out ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
          .font-montserrat {
            font-family: 'Montserrat', sans-serif;
          }
        `}
      </style>
      <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold ${currentTheme.title} mb-16 text-center w-full max-w-7xl px-4`}>Why Attend IEEE NSUT Conference 2025?</h1>
      <div className="relative w-[95%] max-w-7xl px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <button
          onClick={() => scrollGallery(-1)}
          className={`absolute left-0 lg:left-[-2rem] top-1/2 -translate-y-12 ${currentTheme.buttonBg} text-white p-3 rounded-full transition-all duration-300 z-10 hidden md:block`}
        >
          &#10094;
        </button>

        <div
          ref={galleryRef}
          className="gallery flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-8 w-full pb-4"
          style={{
            scrollbarWidth: 'none',  
            '-ms-overflow-style': 'none',  
            '::-webkit-scrollbar': {
                display: 'none',
            }
          }}
        >
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className={`flex-shrink-0 w-80 md:w-80 h-[28rem] relative rounded-3xl overflow-hidden shadow-2xl snap-center transition-all duration-300 hover:scale-[1.02] border-4 ${currentTheme.cardBorder}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/320x448/0A192F/FFFFFF?text=Image+Not+Found'; }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 p-4 bg-gradient-to-t from-black to-transparent text-white flex flex-col items-center justify-end text-center">
                <p className="w-full text-md md:text-lg font-light font-montserrat text-center pb-8 px-6">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollGallery(1)}
          className={`absolute right-0 lg:right-[-2rem] top-1/2 -translate-y-1/2 ${currentTheme.buttonBg} text-white p-3 rounded-full transition-all duration-300 z-10 hidden md:block`}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default PhotoGallery;
