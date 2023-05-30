import { GlobalConfig } from "payload/types";

const OurCompany: GlobalConfig = {
  slug: "our-company",
  label: "Our Company",
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
      name: 'sectionA',
      label: "Section A",
      type: 'group',
      fields: [
        {
          name: "pageData",
          label: "Section A",
          type: "richText",
        },
        {
          name: "image",
          label: "Page Image",
          type: "upload",
          relationTo: "media",
          required: false,
        },
      ],
    },
  ],
};

export default OurCompany;
