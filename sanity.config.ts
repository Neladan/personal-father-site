import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./lib/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Personal Father Site CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
