"use client";
import Image from "next/image";
import logo from "../assets/unisiplogo.png";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar pb-20 bg-white">
      {/* <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
/> */}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <style>
        {`
          @keyframes glow {
            0% { color: #1e3a8a; }
            50% { color: #3b82f6; }
            100% { color: #1e3a8a; }
          }
          .glowing-text {
            animation: glow 2s infinite alternate;
            font-weight: bold;
          }
        `}
      </style>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between px-16 py-2 w-full h-20 items-center border-b-[1px] fixed top-0 bg-white z-40">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} className="h-16 w-16" alt="Unisip Logo" priority />
            <span className="text-2xl font-extrabold text-gray-900">UNISIP</span>
          </Link>
          <span className="pl-4 text-xl flex items-center gap-2">
            <a href="tel:+918585034143" className="glowing-text text-gray-900 hover:text-blue-600 flex items-center gap-2">
              <i className="fa-solid fa-mobile-alt"></i> +91-8981554464

            </a>
          </span>
        </div>
        <div className="flex items-center border rounded-full shadow-md h-12 w-auto px-6 border-black">
          <Link href="/" className="px-4 border-r-2 text-sm font-bold text-gray-950 hover:text-blue-900">HOME</Link>
          <Link href="/about" className="px-4 border-r-2 text-sm font-bold text-gray-950 hover:text-blue-900">ABOUT US</Link>
          <Link href="/projects" className="px-4 text-sm font-bold text-black hover:text-blue-900">OUR WORK</Link>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold text-blue-950">#BOTTLEYOURBRAND</span>
          <Link href="/contactus">
            <div className="flex hover:bg-blue-500 justify-evenly items-center gap-2 rounded-full shadow-md border h-10 px-4 border-black">
              <button className="text-sm font-bold text-gray-900">CONTACT US</button>
              <i className="fa-solid fa-phone-volume text-gray-950"></i>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between px-6 py-2 w-full h-20 items-center border-b-[1px] fixed top-0 bg-white z-50">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} className="h-14 w-14" alt="Unisip Logo" />
          <span className="text-lg font-extrabold text-gray-900">UNISIP</span>
        </Link>
        <div className="flex items-center gap-6">
          <a href="tel:+918585034143" className="text-2xl">
            <i className="fa-solid fa-phone"></i>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
            <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white flex flex-col items-center gap-4 pt-20 shadow-lg z-40">
          <Link href="/" className="text-lg font-bold text-gray-900 hover:text-blue-900 px-4 py-2" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link href="/about" className="text-lg font-bold text-gray-900 hover:text-blue-900 px-4 py-2" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          <Link href="/projects" className="text-lg font-bold text-gray-900 hover:text-blue-900 px-4 py-2" onClick={() => setMenuOpen(false)}>OUR WORK</Link>
          <Link href="/contactus" className="text-lg font-bold text-gray-900 hover:text-blue-900 px-4 py-2" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
