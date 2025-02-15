"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/unisiplogo.png";

const Footer = () => {
  const openGmail = () => {
    const email = "support@unisip.in";
    const subject = encodeURIComponent("Inquiry about UniSip");
    const body = encodeURIComponent("Hello UniSip Team,\n\nI would like to inquire about...");
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    
    window.open(gmailURL, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white text-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image src={logo} alt="UniSip Logo" width={70} height={70} className="mb-2" />
            <h2 className="text-2xl font-semibold">UNISIP</h2>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">QUICK LINKS</h3>
            <ul className="space-y-1">
              <li><Link href="/about" className="text-gray-400 hover:text-white">ABOUT US</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white">OUR WORK</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">SERVICES</Link></li>
              <li><Link href="/contactus" className="text-gray-400 hover:text-white">CONTACT US</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-3">CONTACT US</h3>
            <p className="text-gray-400">3/7 Girish Ghosh Road P.O Belurmath, nr. Rangoli Mall, near Liluah, Howrah</p>
            <p className="text-gray-400">West Bengal 711202</p>
            <p className="text-gray-400">PHONE: (+91) 8981554464
            </p>
            <p className="text-gray-400">
              E-MAIL: <button onClick={openGmail} className="text-blue-400 hover:text-blue-600 underline">support@unisip.in</button>
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://www.facebook.com/profile.php?id=61571685556389" className="text-gray-400 hover:text-white">
            <Facebook className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/unisip.in/" className="text-gray-400 hover:text-white">
            <Instagram className="h-8 w-8" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} UniSip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
