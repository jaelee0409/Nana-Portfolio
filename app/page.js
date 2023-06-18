import React from "react";

import { client } from "../sanity/lib/client";
import MasonryLayout from "./components/MasonryLayout";

export default async function Home() {
  const query = '*[_type == "art"]';
  let artProjects;
  try {
    artProjects = await client.fetch(query);
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return (
    <>
      <MasonryLayout projects={artProjects} />
    </>
  );
}
