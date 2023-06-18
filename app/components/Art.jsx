"use client";

import React, { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

import LightGalleryComponent from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lg-thumbnail.css";

import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-zoom.css";

import { urlForImage } from "@/sanity/lib/image";

const Art = ({ data }) => {
  const lightbox = useRef(null);
  const mainImageUrl = urlForImage(data.image[0].asset._ref).toString();

  return (
    <>
      <LightGalleryComponent
        // Once the component initializes, we'll assign the instance to our React ref.  This is used in the onClick() handler of each image in the Masonry layout
        onInit={(ref) => {
          if (ref) {
            lightbox.current = ref.instance;
          }
        }}
        plugins={[lgThumbnail, lgZoom]}
        // These options turn the component into a "controlled" component that let's us determine when to open/close it
        dynamic
        dynamicEl={data.image.map((img) => {
          const url = urlForImage(img.asset._ref).toString();

          return {
            src: url,
            thumb: url,
            alt: url,
            subHtml: `<div>
                <h1 className="text-lg">${data.projectName}</h1>
                <p className="text-lg">${data.description}</p>
            </div>`,
          };
        })}
        download={false}
        zoom={false}
        mousewheel={true}
      />

      <div className="relative group cursor-pointer mb-3 md:mb-5">
        <Image
          className="group-hover:opacity-30"
          // Here, we're using the ref to dynamically open the gallery to the exact image that was clicked by the user
          onClick={() => lightbox.current?.openGallery(0)}
          src={mainImageUrl}
          alt={mainImageUrl}
          width={500}
          height={500}
        />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-center text-center text-lg text-black">
          {data.projectName.toUpperCase()}
        </div>
      </div>
    </>
  );
};

export default Art;
