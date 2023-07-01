import MasonryLayout from "../components/MasonryLayout";

import { getSketchbookProjects } from "../api/data";

export default async function SketchbookPage() {
  const sketchProjects = await getSketchbookProjects();

  return (
    <>
      <MasonryLayout projects={sketchProjects} />
    </>
  );
}
