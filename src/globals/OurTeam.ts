import { GlobalConfig } from "payload/types";

const OurTeam: GlobalConfig = {
  slug: "our-team",
  label: "Our Team",
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
      name: "teamMembers",
      type: "array",
      label: "Team Members",
      minRows: 0,
      maxRows: 12,
      labels: {
        singular: "Member",
        plural: "Members",
      },
      fields: [
        {
          name: "fullName",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: false,
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

export default OurTeam;
