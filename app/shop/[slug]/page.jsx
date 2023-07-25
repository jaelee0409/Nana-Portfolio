import Image from "next/image";
import React from "react";
import { getShopProductDetails } from "../../api/data";
import ProductGallery from "../../components/ProductGallery";
import ProductInfo from "../../components/ProductInfo";

const page = async ({ params }) => {
  const productDetails = await getShopProductDetails(params.slug);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <ProductGallery productDetails={productDetails} />
      </div>
      <div className="md:w-1/2">
        <ProductInfo productDetails={productDetails} />
      </div>
    </div>
  );
};

export default page;
