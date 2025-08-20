import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "../../../sanity/lib/image";
import {
  getSketchbookProjectDetails,
  getPreviousSketchbookProjectSlug,
  getNextSketchbookProjectSlug,
} from "../../api/data";

const page = async ({ params }) => {
  const project = await getSketchbookProjectDetails(params.slug);
  const image = project[0].image;
  const url = urlForImage(image.asset._ref).toString();
  const id = project[0].id;
  const prev = await getPreviousSketchbookProjectSlug(id);
  const prevLink =
    prev === undefined || prev.length == 0
      ? "/sketchbook"
      : "/sketchbook/" + prev[0].slug.current;
  const next = await getNextSketchbookProjectSlug(id);
  const nextLink =
    next === undefined || next.length == 0
      ? "/sketchbook"
      : "/sketchbook/" + next[0].slug.current;

  return (
    <>
      <div className="text-center font-bold md:text-xl tracking-[.2em] mb-2 md:mb-4 mt-4 md:mt-0 font-roboto">
        {project[0].projectName.toUpperCase()}
      </div>
      <div className="font-baskervville text-center text-sm md:text-base mb-8 text-gray-text">
        {project[0].description}
      </div>
      <div>
        <Image
          className="mx-auto py-8"
          src={url}
          alt={url}
          width={0}
          height={0}
          quality={100}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex flex-row items-center justify-center font-medium tracking-[.2em] mt-8 space-x-16">
        <Link href={`${prevLink}`}>
          <div className="flex flex-row items-center justify-center hover:underline underline-offset-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <div className="hidden md:flex">PREVIOUS</div>
          </div>
        </Link>

        <Link href="/sketchbook">
          <div className="flex flex-row items-center justify-center hover:underline underline-offset-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:mr-4 hidden md:flex"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
            <div>PROJECTS</div>
          </div>
        </Link>

        <Link href={`${nextLink}`}>
          <div className="flex flex-row items-center justify-center hover:underline underline-offset-4">
            <div className="hidden md:flex">NEXT</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default page;
