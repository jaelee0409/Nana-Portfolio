import MasonryLayout from "./components/MasonryLayout";

import { getArtProjects } from "./api/data";

export default async function Home() {
  const artProjects = await getArtProjects();

  return (
    <>
      <MasonryLayout projects={artProjects} />
    </>
  );
}
