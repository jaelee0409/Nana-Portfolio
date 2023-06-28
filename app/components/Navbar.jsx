"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);

  return (
    <div className="mb-2 md:mb-16">
      <div className="flex content-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-start items-center">
            <Link href="/" className="w-32 md:w-full md:pr-6">
              <div
                onMouseOver={(e) => setHovered1(true)}
                onMouseOut={(e) => setHovered1(false)}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Image
                  src={hovered1 ? "/nav_hover_1_NANA.png" : "/nav_1_NANA.png"}
                  alt="Nana An"
                  width={658}
                  height={250}
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex flex-end items-center md:ml-36 lg:ml-96">
            <Link href="/" className="mr-4">
              <div
                onMouseOver={(e) => setHovered2(true)}
                onMouseOut={(e) => setHovered2(false)}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Image
                  src={hovered2 ? "/nav_hover_2_ART.png" : "/nav_2_ART.png"}
                  alt="Art"
                  width={375}
                  height={250}
                />
              </div>
            </Link>
            <Link href="/sketchbook" className="md:mr-4 lg:mr-5">
              <div
                onMouseOver={(e) => setHovered3(true)}
                onMouseOut={(e) => setHovered3(false)}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Image
                  src={
                    hovered3 ? "/nav_hover_3_SKETCH.png" : "/nav_3_SKETCH.png"
                  }
                  alt="Sketchbook"
                  width={782}
                  height={250}
                />
              </div>
            </Link>
            <Link href="/about" className="md:mr-6 lg:mr-8">
              <div
                onMouseOver={(e) => setHovered4(true)}
                onMouseOut={(e) => setHovered4(false)}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Image
                  src={hovered4 ? "/nav_hover_4_ABOUT.png" : "/nav_4_ABOUT.png"}
                  alt="About"
                  width={436}
                  height={250}
                />
              </div>
            </Link>
            <Link href="/shop" className="mr-2">
              <div
                onMouseOver={(e) => setHovered5(true)}
                onMouseOut={(e) => setHovered5(false)}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Image
                  src={hovered5 ? "/nav_hover_5_SHOP.png" : "/nav_5_SHOP.png"}
                  alt="Shop"
                  width={324}
                  height={250}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex md:hidden items-center justify-center">
          <button
            className="text-black outline-none"
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="absolute w-full pr-4 z-10">
          <div className="flex flex-col items-center bg-white/[0.90] mt-2">
            <Link href="/">
              <div
                onMouseOver={(e) => setHovered2(true)}
                onMouseOut={(e) => setHovered2(false)}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Image
                  className="w-auto h-10"
                  src={hovered2 ? "/nav_hover_2_ART.png" : "/nav_2_ART.png"}
                  alt="Art"
                  width={658}
                  height={250}
                />
              </div>
            </Link>
            <Link href="/sketchbook">
              <div
                onMouseOver={(e) => setHovered3(true)}
                onMouseOut={(e) => setHovered3(false)}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Image
                  className="w-auto h-10"
                  src={
                    hovered3 ? "/nav_hover_3_SKETCH.png" : "/nav_3_SKETCH.png"
                  }
                  alt="Sketchbook"
                  width={782}
                  height={250}
                />
              </div>
            </Link>
            <Link href="/about">
              <div
                onMouseOver={(e) => setHovered4(true)}
                onMouseOut={(e) => setHovered4(false)}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Image
                  className="w-auto h-10"
                  src={hovered4 ? "/nav_hover_4_ABOUT.png" : "/nav_4_ABOUT.png"}
                  alt="About"
                  width={436}
                  height={250}
                />
              </div>
            </Link>
            <Link href="/shop">
              <div
                onMouseOver={(e) => setHovered5(true)}
                onMouseOut={(e) => setHovered5(false)}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <Image
                  className="w-auto h-10"
                  src={hovered5 ? "/nav_hover_5_SHOP.png" : "/nav_5_SHOP.png"}
                  alt="Shop"
                  width={324}
                  height={250}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
