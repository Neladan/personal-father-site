import { defineField, defineType } from "sanity";

export const newsletterSectionSchema = defineType({
  name: "newsletterSection",
  title: "Newsletter Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "privacyNote",
      title: "Privacy note",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "successMessage",
      title: "Success message",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
