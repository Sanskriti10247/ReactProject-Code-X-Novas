// For clarity I created this file separately to only hold the Hero section.
// But in the final project I combined Hero + Navbar into HeroWithNavbar
// since scrolling & layout needed both together.
// Keeping this here for reference.

import React, { useState } from "react";

import strawberryBig from "../assets/big/strawberryBig.png";
import blueberryBig from "../assets/big/blueberryBig.png";
import evergreenBig from "../assets/big/evergreenBig.png";
import chocolateBig from "../assets/big/chocolateBig.png";

import strawberrySmall from "../assets/small/strawberrySmall.png";
import blueberrySmall from "../assets/small/blueberrySmall.png";
import evergreenSmall from "../assets/small/evergreenSmall.png";
import chocolateSmall from "../assets/small/chocolateSmall.png";

export default function Hero() {
  // All flavors stored in one object → image + gradient + title
  const flavors = {
    strawberry: {
      title: "Strawberry cone",
      image: strawberryBig,
      gradient:
        "radial-gradient(80.53% 192.72% at 0% 0%, #BE128D 0%, #FF6CEE 100%)",
    },
    blueberry: {
      title: "Blueberry cone",
      image: blueberryBig,
      gradient:
        "radial-gradient(80.53% 192.72% at 0% 0%, #236CDA 0%, #47C4F6 100%)",
    },
    evergreen: {
      title: "Evergreen cone",
      image: evergreenBig,
      gradient:
        "radial-gradient(80.53% 192.72% at 0% 0%, #2A9949 0%, #47F66E 100%)",
    },
    chocolate: {
      title: "Chocolate cone",
      image: chocolateBig,
      gradient:
        "radial-gradient(80.53% 192.72% at 0% 0%, #9C5C3F 0%, #E0BDB0 100%)",
    },
  };

  // state for which flavor is active
  const [active, setActive] = useState("strawberry");
  const { title, image, gradient } = flavors[active];

  return (
    <section
      style={{ background: gradient }}
      className="min-h-screen relative overflow-x-auto no-scrollbar"
    >
      {/* Wrapper for horizontal scroll */}
      <div className="flex items-center min-w-[2200px] px-6 md:px-16 lg:px-32 pt-6 pb-24">
        {/* Left Text */}
        <div className="text-white max-w-xl text-center lg:text-left">
          <h1 className="font-pacifico text-[64px] md:text-[100px] lg:text-[180px] leading-[1.1]">
            icecream
          </h1>
          <h2 className="font-poppins font-bold text-[32px] md:text-[48px] lg:text-[66px] mt-2">
            {title}
          </h2>
          <p className="font-poppins font-medium text-[18px] md:text-[20px] lg:text-[22px] leading-[160%] mt-6 w-[850px] whitespace-normal">
            Embark on a culinary journey of delight as you immerse yourself in
            our artisan-crafted ice cream collection—each flavor a story, each
            scoop an unforgettable chapter in your sweet odyssey!
          </p>
          <p className="font-poppins font-medium text-[18px] md:text-[20px] lg:text-[22px] leading-[160%] mt-4 w-[670px] whitespace-normal">
            Indulge in a world of imagination, where every scoop unveils a new
            taste adventure! Choose your favorite.
          </p>
        </div>

        {/* Right Cone Image */}
        <div className="ml-[560px] mt-[120px] flex justify-center lg:justify-end">
          <img
            key={active}
            src={image}
            alt={title}
            className="w-[250px] md:w-[400px] lg:w-[600px] h-auto object-contain transition-all duration-500 mb-[-100px]"
          />
        </div>
      </div>

      {/* Small Cones Selector */}
      <div className="absolute bottom-10 left-[126px] flex gap-6 md:gap-10">
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
    </section>
  );
}
