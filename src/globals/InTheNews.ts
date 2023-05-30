import { GlobalConfig } from "payload/types";

const InTheNews: GlobalConfig = {
  slug: "in-the-news",
  label: "In The News",
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
      name: "articles",
      type: "array",
      label: "Articles",
      minRows: 0,
      maxRows: 12,
      labels: {
        singular: "Article",
        plural: "Articles",
      },
      fields: [
        {
          name: "articleTitle",
          label: "Article Title",
          type: "text",
          required: true,
        },
        {
          name: "articleDate",
          label: "Article Date",
          type: "date",
          required: true,
        },
        {
          name: "articleLink",
          label: "Article Link",
          type: "text",
          required: false,
        },
      ],
    },
  ],
};

export default InTheNews;
