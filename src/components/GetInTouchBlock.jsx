"use client";
import React, { useState } from "react";
import { Contactus } from ".";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const GetInTouchBlock = () => {
  const videos = [
    "https://www.youtube.com/embed/_Q5Olk-aXb0?rel=0&autoplay=1&mute=1",
    "https://www.youtube.com/embed/2btSDWyi5oQ?rel=0&autoplay=1&mute=1",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Video Slider Section */}
      <div className="w-full md:w-[50%] flex justify-center items-center px-4 sm:px-8 md:px-12">
        <div className="relative w-full max-w-[800px] h-[300px] sm:h-[400px] md:h-[650px] m-auto py-6 md:py-10 px-3">
          {/* Video */}
          <div className="relative w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl">
            <iframe
              key={currentIndex}
              src={videos[currentIndex]}
              title="Embedded Video"
              className="w-full h-full rounded-2xl sm:rounded-3xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-5 transform -translate-y-1/2 p-1 sm:p-2 bg-black/50 text-white rounded-full"
          >
            <BsChevronCompactLeft size={20} className="sm:size-30" />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-5 transform -translate-y-1/2 p-1 sm:p-2 bg-black/50 text-white rounded-full"
          >
            <BsChevronCompactRight size={20} className="sm:size-30" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-3 sm:mt-4">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 text-lg sm:text-2xl transition-all ${
                  index === currentIndex ? "text-black" : "text-gray-400"
                }`}
              >
                <RxDotFilled />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full md:w-[50%] flex justify-center items-center px-4 sm:px-8">
        <Contactus />
      </div>
    </div>
  );
};

export default GetInTouchBlock;
