import Image from "next/image";
import Link from "next/link";
import { getShopProducts } from "../api/data";

import { urlForImage } from "../../sanity/lib/image";
import { toBase64, shimmer } from "../lib/image";
import FormattedPrice from "../components/FormattedPrice";

const ShopPage = async () => {
  const products = await getShopProducts();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => {
        const mainImageUrl = urlForImage(
          product.images[0].asset._ref
        ).toString();

        return (
          <div
            key={product._id}
            className="relative group cursor-pointer mb-3 md:mb-5 lg:mb-7 shadow-lg rounded-3xl overflow-hidden"
          >
            <Link href={`/shop/${product.slug.current}`}>
              <Image
                className="group-hover:opacity-25 duration-300"
                src={mainImageUrl}
                alt={mainImageUrl}
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(500, 500)
                )}`}
              />
              <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-center text-center tracking-[.2em] text-sm md:text-base">
                <div className="flex flex-col divide-y md:divide-y-2 divide-solid divide-black px-4">
                  <div className="font-permanent-marker text-sm md:text-2xl text-black/80 mb-4">
                    {product.name.toUpperCase()}
                  </div>
                  <div className="font-roboto text-xs md:text-base">
                    <FormattedPrice price={product.price} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;
