import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "../../../sanity/lib/image";
import {
  getArtProjectDetails,
  getPreviousArtProjectSlug,
  getNextArtProjectSlug,
} from "../../api/data";

const page = async ({ params }) => {
  const project = await getArtProjectDetails(params.slug);
  const images = project[0].image;
  const id = project[0].id;
  const prev = await getPreviousArtProjectSlug(id);
  const prevLink =
    prev === undefined || prev.length == 0
      ? "/"
      : "/art/" + prev[0].slug.current;
  const next = await getNextArtProjectSlug(id);
  const nextLink =
    next === undefined || next.length == 0
      ? "/"
      : "/art/" + next[0].slug.current;

  return (
    <>
      <div className="text-center font-bold md:text-xl tracking-[.2em] mb-2 md:mb-4 mt-4 md:mt-0 font-roboto">
        {project[0].projectName.toUpperCase()}
      </div>

      <div className="font-baskervville text-center text-sm md:text-base mb:8 md:mb-6 text-gray-text">
        {project[0].description}
      </div>

      {images?.map((image) => {
        const url = urlForImage(image.asset._ref).toString();
        return (
          <div key={url} className="mx-auto py-8 flex justify-center">
            <Image
              src={url}
              alt={url}
              width={2000}
              height={500}
              className="rounded-xl shadow-sm w-auto h-auto"
            />
          </div>
        );
      })}

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

        <Link href="/">
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
