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
          <div className="flex h-full items-center justify-center border-2 gap-2 border-primary bg-bg 2xl:bg-transparent hover:bg-primary hover:text-white rounded-3xl px-6 py-3">
            <div className="font-roboto font-bold">CART</div>
            <BiShoppingBag className="w-5 h-5" />
          </div>
        </Link>
      </div>
    </>
  );
}
