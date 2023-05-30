import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  fields: [],
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
};

export default Media;
