// NOTE: Like Hero, I’ve made this Navbar separate for clarity. 
// But in the final implementation, I merged it with Hero inside HeroWithNavbar.jsx 
// so that both scrolling + layout work seamlessly.

import React from "react";
import Logo from "../assets/logo.svg"; // using the logo file provided in the figma prototype

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full overflow-x-auto no-scrollbar px-8 lg:px-16 py-6 text-white z-50">
      <div className="flex items-center min-w-[2200px]">
        {/* Logo at the left */}
        <img
          src={Logo}
          alt="Chillz Logo"
          className="w-[90px] h-auto ml-[80px]" 
        />

        {/* Navigation links with spacing */}
        <div className="flex items-center gap-24 ml-[500px]">
          <a href="#" className="font-poppins font-bold text-[22px] hover:text-pink-200 transition">
            Home
          </a>
          <a href="#" className="font-poppins font-bold text-[22px] hover:text-pink-200 transition">
            Shop
          </a>
          <a href="#" className="font-poppins font-bold text-[22px] hover:text-pink-200 transition">
            Delivery
          </a>
          <a href="#" className="font-poppins font-bold text-[22px] hover:text-pink-200 transition">
            Contact
          </a>
        </div>

        {/* Order CTA button (visible when scrolling right) */}
        <div className="ml-[500px]">
          <button className="bg-transparent border-2 border-white text-white font-poppins font-bold text-[22px] px-8 py-3 rounded-md hover:border-white transition">
            Order Your Ice-cream
          </button>
        </div>
      </div>
    </nav>
  );
}
