import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart";
import { urlForImage } from "../../sanity/lib/image";
import toast from "react-hot-toast";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function CartItem({ item }) {
  const { name, quantity, price } = item;
  const [qnt, setQnt] = useState(quantity);
  const { removeItem, setItemQuantity } = useShoppingCart();

  useEffect(() => {
    setItemQuantity(item.id, Number(qnt));
  }, [qnt]);

  const decreaseQuantity = () => {
    if (qnt > 1) {
      setQnt(qnt - 1);
    }
  };

  const increaseQuantity = () => {
    if (qnt < 100) setQnt(qnt + 1);
  };

  const removeItemFromCart = () => {
    removeItem(item.id);
    toast.error(
      <div className="flex items-center justify-center space-x-4">
        <span className="flex">
          <b className="mr-1">{name}</b> removed from cart
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-start lg:justify-between gap-4 py-8">
      <div className="flex items-center gap-8">
        {/* Image */}
        <Image
          src={urlForImage(item.images[0].asset._ref).toString()}
          alt={urlForImage(item.images[0].asset._ref).toString()}
          width={500}
          height={500}
          className="h-16 w-16 object-cover object-center md:h-32 md:w-32 rounded-xl shadow-sm"
        />

        {/* Name */}
        <div className="text-left flex-1 font-roboto tracking-[.2em]">
          {name.toUpperCase()}
        </div>
      </div>

      <div className="flex items-center justify-between w-full lg:w-auto space-x-8">
        {/* Price */}
        <div className="font-roboto text-gray-text text-sm md:text-base text-left">
          {formatCurrencyString({ value: price * quantity, currency: "USD" })}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center border border-gray-300 rounded-xl">
            <button
              onClick={decreaseQuantity}
              className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-200"
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
              className="w-12 text-center focus:outline-none focus:ring-0 appearance-none text-gray-text text-sm md:text-base
    [&::-webkit-outer-spin-button]:appearance-none
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-ms-clear]:hidden"
            />
            <button
              onClick={increaseQuantity}
              className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-200"
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

        {/* Remove */}
        <button
          onClick={removeItemFromCart}
          className="w-8 h-8 flex justify-center items-center text-red-500 hover:bg-gray-200 rounded-xl transition"
        >
          <IoCloseOutline className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
