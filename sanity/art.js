import { client } from "./lib/client";

export default {
  name: "art",
  title: "Art",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectName",
      title: "Project Name",
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
        source: "projectName",
        maxLength: 80,
      },
    },
    {
      name: "id",
      type: "number",
      readOnly: true,
      initialValue: async () => {
        const query = 'count(*[_type == "art"])';
        const result = await client.fetch(query);
        return result + 1;
      },
    },
  ],
};
