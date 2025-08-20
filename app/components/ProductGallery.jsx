"use client";

import Image from "next/image";
import React, { useState } from "react";
import { urlForImage } from "../../sanity/lib/image";

const ProductGallery = ({ productDetails }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="items-center mb-4 md:mb-8">
        <Image
          className="mx-auto rounded-3xl shadow-lg"
          src={urlForImage(
            productDetails.images[selectedImage].asset._ref
          ).toString()}
          alt={urlForImage(
            productDetails.images[selectedImage].asset._ref
          ).toString()}
          width={0}
          height={0}
          quality={100}
          sizes="100vw"
          style={{ width: "auto", height: "100%" }}
        />
      </div>

      <div className="mx-auto mb-8 md:mb-0">
        <div className="grid grid-cols-5 gap-4">
          {productDetails.images.map((image, index) => {
            return (
              <div
                key={image._key}
                onClick={() => setSelectedImage(index)}
                className="relative flex h-auto cursor-pointer items-center justify-center"
              >
                <Image
                  className="hover:opacity-25 rounded-3xl h-full w-full object-cover"
                  src={urlForImage(image.asset._ref).toString()}
                  alt={urlForImage(image.asset._ref).toString()}
                  width={500}
                  height={500}
                />
                {index === selectedImage && (
                  <div
                    className="absolute inset-0 ring-2 ring-offset-1 ring-primary rounded-3xl shadow-lg ring-offset-primary"
                    aria-hidden="true"
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
