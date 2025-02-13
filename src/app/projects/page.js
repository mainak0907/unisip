import React from "react";
import { Footer } from "@/components";
import Link from "next/link";

const videos = [
  {
    title: "UNISIP LAUNCH",
    url: "https://www.youtube.com/embed/_Q5Olk-aXb0?rel=0&autoplay=1&mute=1",
  },
  {
    title: "AQUA PARTNER AT XAVRANG'25",
    url: "https://www.youtube.com/embed/2btSDWyi5oQ?rel=0&autoplay=1&mute=1",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="container mx-auto p-10">
          <h1 className="text-5xl font-bold text-center mb-10 text-gray-900">
            OUR WORK
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl p-8 border border-blue-950 hover:shadow-3xl transition-transform transform hover:scale-105 w-full"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  {video.title}
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    key={index} // Forces React to reload the iframe
                    className="w-full h-96 rounded-lg"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-blue-50 text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">READY TO GET STARTED?</h2>
          <p className="text-xl mb-8">
            We&apos;d love to hear from you and discuss how we can help your
            business grow.
          </p>
          <Link
            href="/contactus"
            className="bg-blue-950 text-white py-3 px-8 rounded-full font-semibold text-lg transition duration-300"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
