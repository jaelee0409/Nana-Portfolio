"use client";

import { useEffect, useState } from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import toast from "react-hot-toast";
import Link from "next/link";

const ProductInfo = ({ productDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const {
    addItem,
    incrementItem,
    cartDetails,
    clearCart,
    redirectToCheckout,
    setItemQuantity,
  } = useShoppingCart();
  const isInCart = !!cartDetails?.[productDetails._id];

  useEffect(() => {
    setItemQuantity(productDetails.id, Number(quantity));
  }, [quantity]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 100) setQuantity(quantity + 1);
  };

  const addToCart = () => {
    const item = {
      ...productDetails,
    };
    isInCart ? incrementItem(item._id) : addItem(item, { count: quantity });

    toast.success(
      <div className="flex items-center justify-center space-x-4">
        <span>Added to cart</span>
        <Link href="/cart">
          <div className="flex items-center justify-center">
            <b>Open cart</b>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </Link>
      </div>,
      { duration: 2000 }
    );

    setQuantity(1);
  };

  const buyNow = async () => {
    clearCart();
    addItem(productDetails, { count: quantity });
    const b = JSON.stringify(cartDetails);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: b,
    });

    const data = await res.json();
    const result = await redirectToCheckout(data.id);
    if (result.error) {
      alert(result.error.message);
    }

    setQuantity(1);
  };

  return (
    <div className="flex flex-col">
      <div className="divide-y md:divide-y-2 divide-black mx-auto">
        <div className="font-medium md:text-xl tracking-[.2em] text-center mb-4">
          {productDetails.name.toUpperCase()}
        </div>
        <div className="font-medium md:text-xl tracking-[.2em] text-center">
          <div className="mt-4">
            {formatCurrencyString({
              value: productDetails.price,
              currency: "USD",
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <div className="font-tinos my-8 mx-2">{productDetails.description}</div>
        <ul className="font-tinos list-disc mx-4 mb-8">
          {productDetails.details.map((detail, i) => {
            return <li key={i}>{detail}</li>;
          })}
        </ul>

        <div className="flex mb-8 items-center">
          <div className="font-tinos mx-2">Quantity: </div>
          <div className="flex border md:border-2 border-black items-center justify-center space-x-2 md:space-x-4 p-1">
            <span
              onClick={() => {
                decreaseQuantity();
              }}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
              </svg>
            </span>

            <span>
              <input
                type="number"
                min={1}
                max={100}
                value={quantity}
                onChange={(event) => {
                  if (
                    Number(event.target.value) <= 100 &&
                    Number(event.target.value) > 0
                  )
                    setQuantity(Number(event.target.value));
                }}
                className="w-8 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center focus-visible:outline-none"
              />
            </span>

            <span
              onClick={() => {
                increaseQuantity();
              }}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex font-medium md:text-xl tracking-[.2em] space-x-4 items-center">
          <button
            className="px-4 py-2 md:px-6 md:py-4 bg-white hover:bg-gray-200 text-black border-2 border-black rounded-none"
            onClick={addToCart}
          >
            ADD TO CART
          </button>

          <button
            className="px-6 py-2 md:px-8 md:py-4 bg-[#E50914] hover:bg-red-600 rounded-full text-white"
            onClick={buyNow}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
