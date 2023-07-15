import { client } from "./lib/client";

export default {
  name: "sketchbook",
  title: "Sketchbook",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
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
        const query = 'count(*[_type == "sketchbook"])';
        const result = await client.fetch(query);
        return result + 1;
      },
    },
  ],
};
