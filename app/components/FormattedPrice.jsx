"use client";

import { formatCurrencyString } from "use-shopping-cart";

const FormattedPrice = ({ price }) => {
  return (
    <>
      {formatCurrencyString({
        value: price,
        currency: "USD",
      })}
    </>
  );
};

export default FormattedPrice;
