import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";

const page = () => {
  return (
    <div>
      <div className="mx-auto divide-y">
        <div className="font-medium md:text-xl tracking-[.2em] mb-4 text-center md:text-start">
          SHOPPING CART
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex flex-col md:w-3/5 mx-2 md:mx-0">
            <CartItems />
          </div>
          <div className="md:w-2/5 mt-8 mx-2 md:mx-0">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
