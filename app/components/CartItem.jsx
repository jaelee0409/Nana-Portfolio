import { useShoppingCart } from "use-shopping-cart";
import { formatCurrencyString } from "use-shopping-cart";
import { urlForImage } from "../../sanity/lib/image";
import toast from "react-hot-toast";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      </div>,
      { duration: 2000 }
    );
  };

  return (
    <div className="flex items-center gap-8 py-4">
      <Image
        src={urlForImage(item.images[0].asset._ref).toString()}
        alt={urlForImage(item.images[0].asset._ref).toString()}
        width={500}
        height={500}
        className="h-16 w-16 object-cover object-center md:h-32 md:w-32"
      />
      <div className="justify-center">
        <span className="font-tinos">{name.toUpperCase()}</span>
      </div>
      <div className="font-tinos ml-auto">
        {formatCurrencyString({ value: price, currency: "USD" })}
      </div>

      <div className="flex items-center">
        <div className="flex border border-black items-center justify-center space-x-2 md:space-x-4 p-1">
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
              value={qnt}
              onChange={(event) => {
                if (
                  Number(event.target.value) <= 100 &&
                  Number(event.target.value) > 0
                )
                  setQnt(Number(event.target.value));
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
              <defs>
                <style />
              </defs>
              <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
              <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
            </svg>
          </span>
        </div>
      </div>

      <button
        onClick={removeItemFromCart}
        className="font-medium text-center w-8 h-8 hover:bg-gray-200 rounded-full transition-colors duration-500"
      >
        X
      </button>
    </div>
  );
}
