import { defineField, defineType } from "sanity";

export const globalSeoSettingsSchema = defineType({
  name: "globalSeoSettings",
  title: "Global SEO Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Site description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default OG image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
