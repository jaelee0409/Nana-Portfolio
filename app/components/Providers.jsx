"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { CartProvider as USCProvider } from "use-shopping-cart";

function CartProvider({ children }) {
  return (
    <USCProvider
      mode="checkout-session"
      shouldPersist
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      currency={"USD"}
      allowedCountries={["US"]}
      billingAddressCollection={true}
    >
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      {children}
    </USCProvider>
  );
}

export default CartProvider;
