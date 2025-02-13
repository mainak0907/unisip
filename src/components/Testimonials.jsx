"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonialsData = [
  {
    quote:
      "I recently had the opportunity to try UniSip Water, and I must say, I was thoroughly impressed. As someone who's particular about the taste and quality of their drinking water, I was excited to see how this brand would measure up.Taste 5/5 Packaging 5/5 Nutritional value 5/5",
    image: "https://i.postimg.cc/8ccr1j77/testimonial1.jpg",
  },
  {
    quote:
      "As a marketing student, I value branding, and Unisip excels with its customized water bottles. The quality is outstanding, the designs align perfectly with brand identity, and the service is seamless. These bottles add an elegant touch to the dining experience, and the water quality is exceptional. If you want high-quality, customized bottles that leave a lasting impression, I highly recommend Unisip.",
    image: "https://i.postimg.cc/KjW34xTJ/testimonial2.jpg",
  },
  {
    quote:
      "Unisip stands out with top-quality water, competitive prices, and unique designs. Their customized bottles in various sizes are perfect for corporate brands and restaurants. What sets them apart is their innovative marketing and commitment to delivering exactly what customers want. I was amazed by their unique designs and premium quality. With a customer-first approach, Unisip is truly a trustworthy brand.",
    image: "https://i.postimg.cc/Sxx8d1S6/Whats-App-Image-2025-02-10-at-21-30-55-6a21b40f.jpg",
  },
  {
    quote:"This product introduces a refreshing concept with a sleek design and stylish packaging that stands out. No gimmicks—just a perfect solution to quench your daily thirst. Its premium appeal makes it an ideal choice for brand collaborations, setting the stage for a game-changing experience.",
    image:"https://i.postimg.cc/9fQJjk3C/Whats-App-Image-2025-02-13-at-10-00-39-198d87f8.jpg"
  },
  {
    quote:"I received my UNISIP bottle a few weeks ago and was impressed by its compact, lightweight design, similar to a sports bottle. As a teacher and traveler, I’m always outdoors and near water, making this a great fit. My family and I have used UNISIP for over two weeks, and the water tastes great. Delivery has always been on time, and I highly recommend it!",
    image:"https://i.postimg.cc/ncBXMn8T/Whats-App-Image-2025-02-13-at-12-41-18-7ade3ee9.jpg"
  }
];

const TestimonialBox = ({ quote, image }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-2 mb-4 relative">
      <div className="bg-white rounded-lg shadow-lg p-4 h-full border-t-4 border-black text-center text-gray-700">
      <div className="mb-2 flex justify-center items-center border-2 border-black rounded-full w-28 h-28 overflow-hidden mx-auto">
  <Image 
    src={image} 
    alt="project" 
    width={112} 
    height={112} 
    className="rounded-full object-cover w-full h-full" 
    unoptimized 
  />
</div>
        <blockquote className="text-gray-800 font-medium text-lg md:text-xl leading-relaxed text-justify px-4 md:px-6">
          {quote}
        </blockquote>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollLeft = () => {
    setCurrentIndex(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
  };

  const handleScrollRight = () => {
    setCurrentIndex((currentIndex + 1) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonialsData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const visibleTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % testimonialsData.length],
    testimonialsData[(currentIndex + 2) % testimonialsData.length]
  ];

  return (
    <div className="py-5 bg-blue-50 relative">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-6">
          HEAR FROM OUR HAPPY CLIENTS...
        </h1>
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center -mx-2">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialBox key={index} quote={testimonial.quote} image={testimonial.image} />
            ))}
          </div>
        </div>
      </div>
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" 
        onClick={handleScrollLeft}
      >
        &lt;
      </button>
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" 
        onClick={handleScrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default Testimonials;