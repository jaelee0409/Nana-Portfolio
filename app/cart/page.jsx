import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";

const page = () => {
  return (
    <div>
      <div className="mx-auto divide-y divide-gray-300">
        <div className="font-roboto md:text-xl tracking-[.2em] pb-4 mb-8 text-center md:text-start">
          SHOPPING CART
        </div>

        <div className="flex flex-col lg:flex-row md:space-x-4 lx:space-x-8">
          <div className="lg:w-3/5">
            <CartItems />
          </div>

          <div className="lg:w-2/5">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
