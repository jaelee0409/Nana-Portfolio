import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";

const page = () => {
  return (
    <div>
      <div className="mx-auto divide-y divide-gray-300">
        <div className="font-roboto md:text-xl tracking-[.2em] pb-4 mb-8 text-center md:text-start">
          SHOPPING CART
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-3/5">
            <CartItems />
          </div>

          <div className="md:w-2/5">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
