import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "../../sanity/lib/image";

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
      <div className="relative group cursor-pointer mb-3 md:mb-5 lg:mb-7 shadow-sm rounded-xl overflow-hidden">
        <Link href={`/${folderName}/${data.slug.current}`}>
          <Image
            className="group-hover:opacity-25 duration-300 h-full w-full object-cover"
            src={mainImageUrl}
            alt={mainImageUrl}
            width={500}
            height={500}
          />
          <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 flex justify-center items-center">
            <div className="text-center tracking-wider md:tracking-[0.2em] text-sm md:text-lg lg:text-2xl text-black/80 font-permanent-marker">
              {data.projectName.toUpperCase()}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Art;
