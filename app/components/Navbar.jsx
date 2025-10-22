"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NextImage from "next/image";

import MenuNanaAnHovered from "../../public/nav_hover_1_NANA-min.png";
import MenuNanaAn from "../../public/nav_1_NANA-min.png";
import MenuArtHovered from "../../public/nav_hover_2_ART-min.png";
import MenuArt from "../../public/nav_2_ART-min.png";
import MenuSketchbookHovered from "../../public/nav_hover_3_SKETCH-min.png";
import MenuSketchbook from "../../public/nav_3_SKETCH-min.png";
import MenuAboutHovered from "../../public/nav_hover_4_ABOUT-min.png";
import MenuAbout from "../../public/nav_4_ABOUT-min.png";
import MenuShopHovered from "../../public/nav_hover_5_SHOP-min.png";
import MenuShop from "../../public/nav_5_SHOP-min.png";

import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target))
      setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <nav className="mb-4 md:mb-8 lg:mb-16" ref={menuRef}>
      <div className="flex content-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-start items-center">
            <Link href="/" className="w-32 md:w-full md:mr-6">
              <div
                onMouseOver={(e) => setHovered1(true)}
                onMouseLeave={(e) => setHovered1(false)}
                onTouchEnd={(e) => {
                  setHovered1(false);
                  setIsMenuOpen(false);
                }}
                onClick={() => {
                  setHovered1(false);
                  setIsMenuOpen(false);
                }}
              >
                <NextImage
                  src={hovered1 ? MenuNanaAnHovered : MenuNanaAn}
                  alt="Nana An"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex flex-end items-center md:ml-36 lg:ml-96">
            <Link href="/" className="mr-4">
              <div
                onMouseOver={(e) => setHovered2(true)}
                onMouseLeave={(e) => setHovered2(false)}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <NextImage
                  src={hovered2 ? MenuArtHovered : MenuArt}
                  alt="Art"
                />
              </div>
            </Link>
            <Link href="/sketchbook" className="md:mr-4 lg:mr-5">
              <div
                onMouseOver={(e) => setHovered3(true)}
                onMouseLeave={(e) => setHovered3(false)}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <NextImage
                  src={hovered3 ? MenuSketchbookHovered : MenuSketchbook}
                  alt="Sketchbook"
                />
              </div>
            </Link>
            <Link href="/about" className="md:mr-6 lg:mr-8">
              <div
                onMouseOver={(e) => setHovered4(true)}
                onMouseLeave={(e) => setHovered4(false)}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <NextImage
                  src={hovered4 ? MenuAboutHovered : MenuAbout}
                  alt="About"
                />
              </div>
            </Link>
            <Link href="/shop" className="mr-2">
              <div
                onMouseOver={(e) => setHovered5(true)}
                onMouseLeave={(e) => setHovered5(false)}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <NextImage
                  src={hovered5 ? MenuShopHovered : MenuShop}
                  alt="Shop"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-center gap-4">
          <Link href="/cart">
            <div className="flex items-center">
              <BiShoppingBag className="w-8 h-8 text-gray-text" />
            </div>
          </Link>

          <button
            className="text-gray-text outline-hidden"
            onClick={() => {
              toggleMenu();
            }}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
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
                className="w-8 h-8"
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
        {/* 드로어 */}
        <div className="absolute right-0 w-full z-50 bg-bg/95 shadow-sm">
          <div className="flex flex-col items-end p-4 space-y-2">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <NextImage
                className="w-auto h-10"
                src={hovered2 ? MenuArtHovered : MenuArt}
                alt="Art"
              />
            </Link>
            <Link href="/sketchbook" onClick={() => setIsMenuOpen(false)}>
              <NextImage
                className="w-auto h-10"
                src={hovered3 ? MenuSketchbookHovered : MenuSketchbook}
                alt="Sketchbook"
              />
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              <NextImage
                className="w-auto h-10"
                src={hovered4 ? MenuAboutHovered : MenuAbout}
                alt="About"
              />
            </Link>
            <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
              <NextImage
                className="w-auto h-10"
                src={hovered5 ? MenuShopHovered : MenuShop}
                alt="Shop"
              />
            </Link>
          </div>
        </div>

        {/* <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex flex-col items-end bg-bg/90 min-h-screen">
            <Link href="/">
              <div
                onMouseOver={(e) => setHovered2(true)}
                onMouseLeave={(e) => setHovered2(false)}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <NextImage
                  className="w-auto h-10"
                  src={hovered2 ? MenuArtHovered : MenuArt}
                  alt="Art"
                />
              </div>
            </Link>
            <Link href="/sketchbook">
              <div
                onMouseOver={(e) => setHovered3(true)}
                onMouseLeave={(e) => setHovered3(false)}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <NextImage
                  className="w-auto h-10"
                  src={hovered3 ? MenuSketchbookHovered : MenuSketchbook}
                  alt="Sketchbook"
                />
              </div>
            </Link>
            <Link href="/about">
              <div
                onMouseOver={(e) => setHovered4(true)}
                onMouseLeave={(e) => setHovered4(false)}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <NextImage
                  className="w-auto h-10"
                  src={hovered4 ? MenuAboutHovered : MenuAbout}
                  alt="About"
                />
              </div>
            </Link>
            <Link href="/shop">
              <div
                onMouseOver={(e) => setHovered5(true)}
                onMouseLeave={(e) => setHovered5(false)}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <NextImage
                  className="w-auto h-10"
                  src={hovered5 ? MenuShopHovered : MenuShop}
                  alt="Shop"
                />
              </div>
            </Link>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
