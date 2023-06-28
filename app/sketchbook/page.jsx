import { client } from "../../sanity/lib/client";
import MasonryLayout from "../components/MasonryLayout";

export default async function SketchbookPage() {
  const query = '*[_type == "sketchbook"]';
  let sketchProjects;
  try {
    sketchProjects = await client.fetch(query);
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return (
    <>
      <MasonryLayout projects={sketchProjects} />
    </>
  );
}
