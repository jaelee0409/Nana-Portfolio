import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";

const Art = ({ data }) => {
  let folderName;
  let mainImageUrl;
  if (data.image[0]) {
    mainImageUrl = urlForImage(data.image[0].asset._ref).toString();
    folderName = "art";
  } else {
    mainImageUrl = urlForImage(data.image.asset._ref).toString();
    folderName = "sketchbook";
  }

  return (
    <>
      <div className="relative group cursor-pointer mb-3 md:mb-5">
        <Link href={`/${folderName}/${data.slug.current}`} data={data}>
          <Image
            className="group-hover:opacity-30"
            src={mainImageUrl}
            alt={mainImageUrl}
            width={500}
            height={500}
          />
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-center p-8 text-center tracking-[.2em] text-black">
            {data.projectName.toUpperCase()}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Art;
