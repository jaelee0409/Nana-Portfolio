import { client } from "../../sanity/lib/client";

export async function getArtProjects() {
  const query = '*[_type == "art"] | order(id desc)';
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

export async function getPreviousArtProjectSlug(id) {
  const query = `*[ _type == "art" && id == $id + 1] {
    slug,
}`;
  let slug;
  try {
    slug = await client.fetch(query, { id });
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return slug;
}

export async function getNextArtProjectSlug(id) {
  const query = `*[ _type == "art" && id == $id - 1] {
    slug,
}`;
  let slug;
  try {
    slug = await client.fetch(query, { id });
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return slug;
}

export async function getSketchbookProjects() {
  const query = '*[_type == "sketchbook"] | order(id desc)';
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

export async function getPreviousSketchbookProjectSlug(id) {
  const query = `*[ _type == "sketchbook" && id == $id + 1] {
    slug,
}`;
  let slug;
  try {
    slug = await client.fetch(query, { id });
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return slug;
}

export async function getNextSketchbookProjectSlug(id) {
  const query = `*[ _type == "sketchbook" && id == $id - 1] {
    slug,
}`;
  let slug;
  try {
    slug = await client.fetch(query, { id });
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return slug;
}

export async function getShopProducts() {
  const query = '*[_type == "shop"]';
  let products;
  try {
    products = await client.fetch(query);
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return products;
}

export async function getShopProductDetails(slug) {
  const query = '*[_type == "shop" && slug.current == $slug]';
  let productDetails;
  try {
    productDetails = await client.fetch(query, { slug });
  } catch (error) {
    console.log("Data failed to fetch", error);
  }

  return productDetails[0];
}
