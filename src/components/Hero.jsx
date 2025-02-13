"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import Slideshow from "./Slideshow";

export const Hero = () => {
  return (
    <div className="bg-blue-50 w-full flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-14 lg:px-12 py-2 lg:py-4 transform scale-90 md:scale-95 lg:scale-100">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold pb-4">
            WE PROVIDE
          </h1>
          <ReactTyped
            className="text-blue-700 text-2xl md:text-3xl lg:text-4xl font-bold"
            strings={[
              "CAFE BRANDING",
              "CUSTOM BOTTLES",
              "BOTTLE LABELS",
              "BUSINESS BRANDING",
              "EVENT BOTTLES",
              "CUSTOM PACKAGING",
              "BRANDED BOTTLES",
              "BULK BOTTLE SUPPLY",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
          <div className="mt-4 p-2 rounded-lg max-w-[100%] md:max-w-[90%] lg:max-w-[85%] mx-auto lg:mx-0">
            <p className="text-md md:text-lg leading-snug text-justify">
              We help businesses elevate their identity with premium, custom-labeled water bottles featuring their establishment and desired MRP. With on-site sales, these bottles enhance their visibility and create a premium experience for their customers. QR codes on the packaging link consumers to social media pages, delivery applications and offers, ensuring that people connect directly and meaningfully with them.
            </p>
          </div>

          <div className="mt-6">
            <Link href="/contactus">
              <button className="bg-blue-900 px-5 py-2 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                GET A QUOTE
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Slideshow */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <Link href="/projects">
            <div className="hidden md:block">
              <Slideshow />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;