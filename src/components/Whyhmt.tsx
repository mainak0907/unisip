"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  path: string;
}

const services: Service[] = [
  {
    title: "LABEL DESIGNING",
    description: "Crafting visually stunning labels that make your brand stand out.",
    imageUrl: "https://i.postimg.cc/hP2yvgKN/image-1.png",
    path: "/projects/label-designing",
  },
  {
    title: "CUSTOM BOTTLES",
    description: "Unique bottle shapes and sizes tailored to your brand identity.",
    imageUrl: "https://i.postimg.cc/NMmcjXyF/clear-bottle.png",
    path: "/projects/custom-bottles",
  },
  {
    title: "TARGETED MARKETING",
    description: "Strategic branding solutions to reach your ideal audience.",
    imageUrl: "https://i.postimg.cc/5yc7wD1B/bottle-pic.jpg",
    path: "/projects/targeted-marketing",
  },
  {
    title: "CSR INITIATIVES",
    description: "Partner with us for sustainable branding for a positive impact.",
    imageUrl: "https://i.postimg.cc/76X1LchP/IMG-7304.jpg",
    path: "/projects/csr-initiatives",
  },
];

export default function Whyhmt() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.5;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 5);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 5);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black text-center mb-6 md:mb-10">
          OUR SERVICES
        </h2>
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
          >
            {services.map((service, index) => (
              <div key={index} className="flex-none w-[280px] sm:w-[320px] snap-center">
                <Link href="/contactus">
                  <div className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl text-center">
                    <div className="relative w-full h-60 sm:h-72">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        priority={index === 0}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="p-4 sm:p-6 bg-blue-950">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-white text-sm sm:text-base">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {showLeftButton && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-blue-950 bg-opacity-75 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200 focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            </button>
          )}
          {showRightButton && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-blue-950 bg-opacity-75 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200 focus:outline-none"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
