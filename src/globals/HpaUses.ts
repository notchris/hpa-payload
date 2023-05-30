import { GlobalConfig } from "payload/types";

const HpaUses: GlobalConfig = {
  slug: "hpa-uses",
  label: "HPA Uses",
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
      name: "pageSections",
      type: "array",
      label: "Page Sections",
      minRows: 0,
      maxRows: 12,
      labels: {
        singular: "Section",
        plural: "Sections",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "content",
          type: "textarea",
          required: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default HpaUses;
