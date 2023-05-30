import { GlobalConfig } from "payload/types";

const Memberships: GlobalConfig = {
  slug: "memberships",
  label: "Memberships",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "pageTitle",
      label: "Page Title",
      type: "text",
    },
    {
      name: "pageDescription",
      label: "Page Description",
      type: "textarea",
    },
    {
      name: "item",
      type: "array",
      label: "Items",
      minRows: 0,
      maxRows: 12,
      labels: {
        singular: "Item",
        plural: "Items",
      },
      fields: [
        {
          name: "itemTitle",
          label: "Item Title",
          type: "text",
          required: true,
        },
        {
          name: "itemLink",
          label: "Item Link",
          type: "text",
          required: false,
        },
      ],
    },
  ],
};

export default Memberships;
