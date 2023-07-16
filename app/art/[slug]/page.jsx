import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "../../../sanity/lib/image";
import { getArtProjectDetails } from "../../api/data";

const page = async ({ params }) => {
  const project = await getArtProjectDetails(params.slug);
  const images = project[0].image;
  const id = project.id;

  return (
    <>
      <div className="text-center font-medium md:text-xl tracking-[.2em] mb-2 md:mb-4 mt-4 md:mt-0">
        {project[0].projectName.toUpperCase()}
      </div>
      <div className="font-tinos text-center text-sm md:text-lg mb-4">
        {project[0].description}
      </div>
      {images?.map((image) => {
        const url = urlForImage(image.asset._ref).toString();
        return (
          <div key={url}>
            <Image
              className="mx-auto py-4 md:py-8"
              src={url}
              alt={url}
              width={0}
              height={0}
              quality={100}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
            />
          </div>
        );
      })}
      <div className="flex flex-row items-center justify-center font-medium text-sm md:text-xl tracking-[.2em] mt-8 space-x-2 space-x-16">
        <Link href="/">&lArr; PREVIOUS</Link>
        <Link href="/">&uArr; ART</Link>
        <Link href="/">NEXT &rArr;</Link>
      </div>
    </>
  );
};

export default page;
