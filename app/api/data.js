import { client } from "../../sanity/lib/client";

export async function getArtProjects() {
  const query = '*[_type == "art"]';
  let artProjects;
  try {
    artProjects = await client.fetch(query);
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return artProjects;
}

export async function getArtProjectDetails(slug) {
  const query = '*[_type == "art" && slug.current == $slug]';
  let artProjects;
  try {
    artProjects = await client.fetch(query, { slug });
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return artProjects;
}

export async function getSketchbookProjects() {
  const query = '*[_type == "sketchbook"]';
  let sketchProjects;
  try {
    sketchProjects = await client.fetch(query);
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return sketchProjects;
}

export async function getSketchbookProjectDetails(slug) {
  const query = '*[_type == "sketchbook" && slug.current == $slug]';
  let sketchProjects;
  try {
    sketchProjects = await client.fetch(query, { slug });
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return sketchProjects;
}
