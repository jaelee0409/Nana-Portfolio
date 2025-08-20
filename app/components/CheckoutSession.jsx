"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutSession = ({ customerDetails }) => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    if (customerDetails) {
      clearCart();
    }
  }, [customerDetails]);

  if (!customerDetails) {
    return (
      <div className="font-medium md:text-xl tracking-[.2em] text-center">
        NO CHECKOUT SESSION FOUND
      </div>
    );
  }
  return (
    <div>
      <div className="font-medium md:text-xl tracking-[.2em] text-center">
        ORDER SUCCESSFUL!
      </div>
      <div className="flex items-center space-x-1 mt-8">
        <div className="font-baskervville">Thank you,</div>
        <div className="font-baskervville">
          <b>{customerDetails.name.toUpperCase()}</b>!
        </div>
      </div>
      <div className="mt-4 font-baskervville">
        Check your purchase email{" "}
        <span className="text-indigo-500">{customerDetails.email}</span> for
        your invoice.
      </div>
      <div className="mt-8">
        <Link href="/">
          <button className="border-2 border-black px-4 py-2 hover:bg-gray-200">
            GO BACK HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSession;
