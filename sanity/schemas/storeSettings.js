export default {
  name: "storeSettings",
  title: "Settings",
  type: "document",
  icon: () => `🏪`,
  fields: [
    {
      name: "name",
      title: "Store Name",
      type: "string",
      description: "Name of the store",
    },
    {
      name: "masters",
      title: "Masters Currently Slicing",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
    },
    {
      name: "pizzas",
      title: "Hot Pizzas available in the case",
      type: "array",
      of: [{ type: "reference", to: [{ type: "pizza" }] }],
    },
  ],
};
