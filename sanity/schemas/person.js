export default {
  name: "person",
  title: "Masters",
  type: "document",
  icon: () => `👨‍🍳`,
  fields: [
    {
      name: "name",
      title: "Person Name",
      type: "string",
      description: "Name of the person",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Tell us a bit about this person",
    },
  ],
};
