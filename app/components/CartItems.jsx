"use client";

import { useShoppingCart } from "use-shopping-cart";

import CartItem from "./CartItem";

const CartItems = () => {
  const { cartDetails, cartCount } = useShoppingCart();

  return (
    <div>
      {cartCount && cartCount > 0 ? (
        <div className="divide-y">
          {Object.values(cartDetails ?? {}).map((entry) => (
            <CartItem key={entry.id} item={entry} />
          ))}
        </div>
      ) : (
        <div className="">You have no items in your cart</div>
      )}
    </div>
  );
};

export default CartItems;
