import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";

const page = () => {
  return (
    <div>
      <div className="mx-auto divide-y">
        <div className="font-medium md:text-xl tracking-[.2em] mb-4">
          SHOPPING CART
        </div>

        <div className="flex space-x-8">
          <div className="flex flex-col w-3/4 mt-8">
            <CartItems />
          </div>
          <div className="w-1/4 mt-8">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
