"use client";  // 👈 Add this at the top

import { Contactus } from "@/components";
import Iframe from "react-iframe";
import { Footer } from "@/components";

export default function Contact() {
  // Function to open Gmail with a pre-filled email
  const openGmail = () => {
    const email = "support@unisip.in";
    const subject = encodeURIComponent("Inquiry about UniSip");
    const body = encodeURIComponent("Hello UniSip Team,\n\nI would like to inquire about...");
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    
    window.open(gmailURL, "_blank");
  };

  return (
    <>  
      <div className="flex md:flex-row flex-col">
        <div className="xl:w-2/5 lg:w-2/5 bg-white py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none flex basis-1/2 mx-auto">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className="xl:text-4xl text-3xl pb-4 text-black font-bold">DROP BY OUR OFFICE</h1>
            <p className="text-lg text-black pb-8 leading-relaxed font-normal lg:pr-4">
              Visit us and have coffee with us while we discuss the plans for your future project.
            </p>    

            {/* Phone Number */}
            <div className="flex pb-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="white" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
              <p className="pl-4 text-black text-base">+91 8585034143 / 7439825241</p>
            </div>

            {/* Email with Click Handler */}
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail mb-6" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="white" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={5} width={18} height={14} rx={2} />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <button onClick={openGmail} className="pl-4 text-base mb-6 text-blue-500 underline hover:text-blue-700">
                support@unisip.in
              </button>
            </div>                    

            {/* Google Maps Iframe */}
            <div className="flex pb-2 items-center">
              <Iframe 
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9259408948956!2d88.34746842385142!3d22.619240581262044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d64509a4943%3A0x47164efc4d2b3b43!2sVivekananda%20Colony%2C%20Liluah%2C%20Howrah%2C%20West%20Bengal%20711202!5e0!3m2!1sen!2sin!4v1739115191777!5m2!1sen!2sin"
                className="md:w-[640px] md:h-[300px] sm:w-[300px] sm:h-[300px]"
                display="block"
                position="relative"
              />
            </div>

            {/* View Projects Link */}
            <div className="flex items-center">
              <a href="/projects">
                <p className="text-black pt-2 tracking-wide underline hover:text-blue-500">View Our Projects</p>
              </a>
            </div>
          </div>
        </div>

        <Contactus />
      </div>
      
      <Footer />
    </>
  );
}
