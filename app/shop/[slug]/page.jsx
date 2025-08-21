import Image from "next/image";
import React from "react";
import { getShopProductDetails } from "../../api/data";
import ProductGallery from "../../components/ProductGallery";
import ProductInfo from "../../components/ProductInfo";

const page = async ({ params }) => {
  const productDetails = await getShopProductDetails(params.slug);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="lg:w-1/2">
        <ProductGallery productDetails={productDetails} />
      </div>
      <div className="lg:w-1/2">
        <ProductInfo productDetails={productDetails} />
      </div>
    </div>
  );
};

export default page;
