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
      </div>
    );

    setQuantity(1);
  };

  const buyNow = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [productDetails._id]: { ...productDetails, quantity: quantity },
      }),
    });

    const data = await res.json();
    const result = await redirectToCheckout(data.id);
    if (result.error) {
      alert(result.error.message);
    }

    setQuantity(1);
  };

  return (
    <div className="flex flex-col max-w-lg mx-auto space-y-8 text-center items-center lg:items-start lg:text-start">
      {/* Name + Price */}
      <div className="text-xl tracking-[.2em] space-y-2">
        <h1 className="font-bold">{productDetails.name.toUpperCase()}</h1>
        <p className="">
          {formatCurrencyString({
            value: productDetails.price,
            currency: "USD",
          })}
        </p>
      </div>

      {/* Description */}
      <div className="mx-auto w-full text-gray-text space-y-4">
        <p className="font-baskervville text-base md:text-lg leading-relaxed">
          {productDetails.description}
        </p>
        <ul className="font-baskervville list-disc list-inside text-sm md:text-base space-y-1">
          {productDetails.details.map((detail, i) => (
            <li key={i} className="text-start ml-16 lg:ml-0">
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center space-x-2 mt-4">
        <span className="font-baskervville text-gray-text">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded-full px-2 py-1">
          <button
            onClick={decreaseQuantity}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 transition"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
            </svg>
          </button>

          <input
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => {
              if (+e.target.value <= 100 && +e.target.value > 0)
                setQuantity(+e.target.value);
            }}
            className="w-12 text-center focus:outline-none focus:ring-0 appearance-none
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-ms-clear]:hidden"
          />

          <button
            onClick={increaseQuantity}
            className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-300 transition"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
              <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={addToCart}
          className="px-6 py-3 rounded-xl border border-gray-300 font-bold hover:text-white hover:bg-black hover:border-black transition-transform duration-200 hover:scale-105"
        >
          ADD TO CART
        </button>

        <button
          onClick={buyNow}
          className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/80 hover:scale-105 hover:shadow-sm transition-transform duration-200"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
