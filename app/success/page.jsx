import React from "react";
import { stripe } from "../lib/stripe";
import CheckoutSession from "../components/CheckoutSession";

const page = async ({ searchParams }) => {
  const sessionId = searchParams.session_id ?? "";
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
  const customerDetails = checkoutSession?.customer_details;

  return (
    <div>
      <CheckoutSession customerDetails={customerDetails} />
    </div>
  );
};

export default page;
