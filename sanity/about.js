export default {
  name: "about",
  title: "About",
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
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
  ],
};
