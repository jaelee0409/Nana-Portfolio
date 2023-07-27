"use client";

import Link from "next/link";
// import { DebugCart } from "use-shopping-cart";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BiShoppingBag } from "react-icons/bi";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        {/* <DebugCart /> */}
        {children}
      </div>
      <Footer />
      <div className="hidden md:block fixed bottom-16 right-16">
        <Link href="/cart">
          <div className="flex h-full items-center justify-center border-2 border-[#63AA9E] bg-white hover:bg-gray-200 rounded-full p-2">
            <div className="flex items-center">
              <BiShoppingBag className="w-8 h-8" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
