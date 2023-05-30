import { buildConfig } from "payload/config";
import path from "path";
import Media from "./collections/Media";
import Users from "./collections/Users";

import OurCompany from "./globals/OurCompany";
import HpaUses from "./globals/HpaUses";
import OurTeam from "./globals/OurTeam";
import InTheNews from "./globals/InTheNews";
import Memberships from "./globals/Memberships";

const serverUrl = process.env.NODE_ENV === "dev" ? "http://localhost:3000" : "http://159.89.245.218:3000"

export default buildConfig({
  serverURL: "http://localhost:3000",
  cors: ["*", "http://localhost:5173"],
  csrf: ["*", "http://localhost:5173"],
  admin: {
    user: Users.slug,
  },
  collections: [Media, Users],
  globals: [OurCompany, HpaUses, OurTeam, InTheNews, Memberships],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
