// This is the combined version of Hero + Navbar together.
// I had to merge them into one component to make the scrolling behavior 
// and positioning of the big cone + navbar work properly.
// App.jsx only calls this file for rendering.

import React, { useState } from "react";
import Logo from "../assets/logo.svg";

// importing big cone images
import strawberryBig from "../assets/big/strawberryBig.png";
import blueberryBig from "../assets/big/blueberryBig.png";
import evergreenBig from "../assets/big/evergreenBig.png";
import chocolateBig from "../assets/big/chocolateBig.png";

// importing small cone images
import strawberrySmall from "../assets/small/strawberrySmall.png";
import blueberrySmall from "../assets/small/blueberrySmall.png";
import evergreenSmall from "../assets/small/evergreenSmall.png";
import chocolateSmall from "../assets/small/chocolateSmall.png";

export default function HeroWithNavbar() {
  // all cone data grouped together
  const flavors = {
    strawberry: {
      title: "Strawberry cone",
      image: strawberryBig,
      gradient:
        "radial-gradient(80.53% 192.72% at 0% 0%, #BE128D  0%, #FF6CEE  100%)",
    },
    blueberry: {
      title: "Blueberry cone",
      image: blueberryBig,
      gradient:
        "radial-gradient(80.53% 192.72% at 0% 0%, #236CDA  0%, #47C4F6  100%)",
    },
    evergreen: {
      title: "Evergreen cone",
      image: evergreenBig,
      gradient:
        "radial-gradient(80.53% 192.72% at 0% 0%, #2A9949 0%, #47F66E  100%)",
    },
    chocolate: {
      title: "Chocolate cone",
      image: chocolateBig,
      gradient:
        "radial-gradient(80.53% 192.72% at 0% 0%, #9C5C3F 0%, #E0BDB0  100%)",
    },
  };

  // keeping track of active cone
  const [active, setActive] = useState("strawberry");
  const { title, image, gradient } = flavors[active];

  return (
    <section
      style={{ background: gradient }}
      className="min-h-screen relative overflow-y-auto no-scrollbar pb-40"
    >
      {/* Main wrapper that controls horizontal width */}
      <div className="min-w-[1950px]">
        
        {/* Navbar at top */}
        <nav className="w-full px-8 lg:px-16 pt-4 text-white z-50">
          <div className="flex items-center min-w-[1800px]">
            {/* Logo */}
            <img
              src={Logo}
              alt="Chillz Logo"
              className="w-[90px] h-auto ml-[80px]"
            />

            {/* Navigation links */}
            <div className="flex items-center gap-24 ml-[500px]">
              <a href="#home" className="font-poppins font-bold text-[22px]">Home</a>
              <a href="#shop" className="font-poppins font-bold text-[22px]">Shop</a>
              <a href="#delivery" className="font-poppins font-bold text-[22px]">Delivery</a>
              <a href="#contact" className="font-poppins font-bold text-[22px]">Contact</a>
            </div>

            {/* Order CTA */}
            <div className="ml-[130px]">
              <button className="bg-transparent border-2 border-white text-white font-poppins font-bold text-[22px] px-8 py-3 rounded-md hover:border-white transition">
                Order Your Ice-cream
              </button>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <div className="flex items-center px-6 md:px-16 lg:px-32 pt-24 pb-16 -mt-4">
          {/* Left text */}
          <div className="text-white max-w-xl text-center lg:text-left">
            <h1 className="font-pacifico text-[64px] md:text-[100px] lg:text-[180px] leading-[1.1]">
              icecream
            </h1>
            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] lg:text-[66px] mt-2">
              {title}
            </h2>
            <p className="font-poppins font-medium text-[18px] lg:text-[22px] leading-[160%] mt-6 w-[850px] whitespace-normal">
              Embark on a culinary journey of delight as you immerse yourself in
              our artisan-crafted ice cream collection—each flavor a story, each
              scoop an unforgettable chapter in your sweet odyssey!
            </p>
            <p className="font-poppins font-medium text-[18px] lg:text-[22px] leading-[160%] mt-4 w-[670px] whitespace-normal">
              Indulge in a world of imagination, where every scoop unveils a new
              taste adventure! Choose your favorite.
            </p>
          </div>

          {/* Right big cone image */}
          <div className="absolute bottom-0 right-[-450px] flex justify-end items-end">
            <img
              key={active}
              src={image}
              alt={title}
              className="w-[320px] md:w-[450px] lg:w-[670px] object-contain transition-all duration-500"
            />
          </div>
        </div>

        {/* Small cone selector */}
        <div className="mt-12 ml-[126px] flex gap-6 md:gap-10">
          {Object.entries({
            strawberry: strawberrySmall,
            blueberry: blueberrySmall,
            evergreen: evergreenSmall,
            chocolate: chocolateSmall,
          }).map(([flavor, img]) => (
            <button key={flavor} onClick={() => setActive(flavor)}>
              <img
                src={img}
                alt={flavor}
                className={`w-[80px] md:w-[110px] lg:w-[137px] h-auto cursor-pointer transition-transform duration-300 ${
                  active === flavor ? "scale-110 opacity-100" : "opacity-70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
