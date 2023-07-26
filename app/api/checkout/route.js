import { NextResponse } from "next/server";
import { validateCartItems } from "use-shopping-cart/utilities";
import inventory from "../../data/products";
import { stripe } from "../../lib/stripe";

export const POST = async (request) => {
  const cartDetails = await request.json();
  console.log("[POST] cartDetails");
  console.log(cartDetails);
  const lineItems = validateCartItems(inventory, cartDetails);
  console.log("[POST] lineItems");
  console.log(lineItems);
  const origin = request.headers.get("origin");
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    submit_type: "pay",
    payment_method_types: ["card"],
    shipping_address_collection: { allowed_countries: ["US"] },
    billing_address_collection: "auto",
    shipping_options: [{ shipping_rate: "shr_1NXiyCBAIs3IG1yTggiaNLJz" }],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  });

  return NextResponse.json(session);
};
