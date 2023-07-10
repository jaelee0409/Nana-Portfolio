import Image from "next/image";

import { urlForImage } from "../../../sanity/lib/image";
import { getArtProjectDetails } from "../../api/data";

const page = async ({ params }) => {
  const project = await getArtProjectDetails(params.slug);
  const images = project[0].image;

  return (
    <>
      <div className="text-center font-medium md:text-xl tracking-[.2em] pb-4">
        {project[0].projectName.toUpperCase()}
      </div>
      <div className="font-tinos text-center text-lg">
        {project[0].description}
      </div>
      {images?.map((image) => {
        const url = urlForImage(image.asset._ref).toString();
        return (
          <div key={url}>
            <Image
              className="mx-auto py-8"
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
    </>
  );
};

export default page;
