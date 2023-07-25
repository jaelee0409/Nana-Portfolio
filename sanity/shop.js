import { client } from "./lib/client";

export default {
  name: "shop",
  title: "Shop",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 80,
      },
    },
    {
      name: "sku",
      title: "SKU",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "index",
      type: "number",
      readOnly: true,
      initialValue: async () => {
        const query = 'count(*[_type == "shop"])';
        const result = await client.fetch(query);
        return result + 1;
      },
    },
  ],
};
