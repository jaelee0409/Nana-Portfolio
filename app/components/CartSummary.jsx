"use client";

import { useShoppingCart } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CartSummary = () => {
  const { formattedTotalPrice, cartDetails, cartCount, redirectToCheckout } =
    useShoppingCart();

  const isDisabled = cartCount === 0;

  const checkout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    });

    const data = await response.json();
    const result = await redirectToCheckout(data.id);
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="font-medium tracking-[.2em]">
        ORDER SUMMARY
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt>Subtotal</dt>
          <dd className="font-medium">{formattedTotalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center">
            <span>Shipping estimate</span>
          </dt>
          <dd className="font-medium">$0.00</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt>Order total</dt>
          <dd className="font-medium">{formattedTotalPrice}</dd>
        </div>
      </dl>

      <button
        onClick={checkout}
        disabled={isDisabled}
        className="font-medium tracking-[.2em] bg-[#556cd6] h-10 text-white w-full rounded-md mt-6 disabled:bg-gray-400"
      >
        CHECKOUT
      </button>
    </section>
  );
};

export default CartSummary;
