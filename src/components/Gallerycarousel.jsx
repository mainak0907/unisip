"use client";
import React from "react";
import { data } from "../constants/gallery_img";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Gallerycarousel = () => {
  const LeftIcon = () => <MdChevronLeft size={50} className="text-black" />;
  const RightIcon = () => <MdChevronRight size={50} className="text-black" />;

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="pb-10 bg-blue-50">
      <div className="text-white ml-12">
        <h1 className="lg:text-5xl text-black font-extrabold text-center mb-5 sm:text-2xl">
          GALLERY
        </h1>
      </div>

      <div className="flex items-center">
        <div
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
        >
          <LeftIcon />
        </div>
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <Link href="/projects" key={item.id}>
              <div className="inline-block p-3">
                <Image
                  className="cursor-pointer hover:scale-110 ease-in-out duration-300 shadow-lg rounded-xl"
                  src={item.img}
                  width={280}
                  height={50}
                  alt="Projects"
                />
              </div>
            </Link>
          ))}
        </div>
        <div
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
        >
          <RightIcon />
        </div>
      </div>
    </div>
  );
};

export default Gallerycarousel;
