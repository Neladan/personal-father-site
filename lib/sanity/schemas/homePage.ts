import { defineField, defineType } from "sanity";

export const homePageSchema = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero eyebrow",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero subtitle",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "quoteText",
      title: "Quote text",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "quoteAuthor",
      title: "Quote author",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
