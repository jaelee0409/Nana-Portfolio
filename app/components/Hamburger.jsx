"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Hamburger = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <div className="py-16"></div>
      <nav className="w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block sm:scale-50 md:scale-100">
              <Link href="/">
                <img
                  src="/nav_1_NANA.png"
                  alt="Nana An"
                  onMouseOver={(e) =>
                    (e.currentTarget.src = "/nav_hover_1_NANA.png")
                  }
                  onMouseOut={(e) => (e.currentTarget.src = "/nav_1_NANA.png")}
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
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
                      className="w-6 h-6 text-black"
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
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-black">
                <li>
                  <Link href="/">
                    <img
                      src="/nav_2_ART.png"
                      alt="Art"
                      onMouseOver={(e) =>
                        (e.currentTarget.src = "/nav_hover_2_ART.png")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.src = "/nav_2_ART.png")
                      }
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <img
                      src="/nav_3_SKETCH.png"
                      alt="Sketchbook"
                      onMouseOver={(e) =>
                        (e.currentTarget.src = "/nav_hover_3_SKETCH.png")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.src = "/nav_3_SKETCH.png")
                      }
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <img
                      src="/nav_4_ABOUT.png"
                      alt="About"
                      onMouseOver={(e) =>
                        (e.currentTarget.src = "/nav_hover_4_ABOUT.png")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.src = "/nav_4_ABOUT.png")
                      }
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <img
                      src="/nav_5_SHOP.png"
                      alt="Shop"
                      onMouseOver={(e) =>
                        (e.currentTarget.src = "/nav_hover_5_SHOP.png")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.src = "/nav_5_SHOP.png")
                      }
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hamburger;
