// @ts-nocheck
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "@components/StudioNavbar";
import { getDefaulDocumentNode } from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: "CodingShacks_Studio",
  title: "CodingShacks Studio",
  projectId,
  dataset,
  plugins: [
    deskTool({ defaultDocumentNode: getDefaulDocumentNode }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
