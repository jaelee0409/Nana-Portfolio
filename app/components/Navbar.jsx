"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mb-2 md:mb-16">
      <div className="flex content-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-start items-center">
            <Link href="/">
              <img
                src="/nav_1_NANA.png"
                alt="Nana An"
                className="w-32 md:w-full md:pr-6"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/nav_hover_1_NANA.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "/nav_1_NANA.png")}
                onClick={() => {
                  setMenuOpen(false);
                }}
                width={256}
                height={97}
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-end items-center md:ml-36 lg:ml-96">
            <Link href="/" className="mr-4">
              <img
                src="/nav_2_ART.png"
                alt="Art"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/nav_hover_2_ART.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "/nav_2_ART.png")}
              />
            </Link>
            <Link href="/sketchbook" className="md:mr-4 lg:mr-5">
              <img
                src="/nav_3_SKETCH.png"
                alt="Sketchbook"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/nav_hover_3_SKETCH.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "/nav_3_SKETCH.png")}
              />
            </Link>
            <Link href="/about" className="md:mr-6 lg:mr-8">
              <img
                src="/nav_4_ABOUT.png"
                alt="About"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/nav_hover_4_ABOUT.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "/nav_4_ABOUT.png")}
              />
            </Link>
            <Link href="/shop" className="mr-2">
              <img
                src="/nav_5_SHOP.png"
                alt="Shop"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/nav_hover_5_SHOP.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "/nav_5_SHOP.png")}
              />
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
              <img
                src="/nav_2_ART.png"
                alt="Art"
                className="h-10"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/nav_hover_2_ART.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "/nav_2_ART.png")}
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
              />
            </Link>
            <Link href="/sketchbook">
              <img
                src="/nav_3_SKETCH.png"
                alt="Sketchbook"
                className="h-10"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/nav_hover_3_SKETCH.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "/nav_3_SKETCH.png")}
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
              />
            </Link>
            <Link href="/about">
              <img
                src="/nav_4_ABOUT.png"
                alt="About"
                className="h-10"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/nav_hover_4_ABOUT.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "/nav_4_ABOUT.png")}
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
              />
            </Link>
            <Link href="/shop">
              <img
                src="/nav_5_SHOP.png"
                alt="Shop"
                className="h-10"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "/nav_hover_5_SHOP.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "/nav_5_SHOP.png")}
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
