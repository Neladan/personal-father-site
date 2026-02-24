import { defineField } from "sanity";

export const seoFields = [
  defineField({
    name: "metaTitle",
    title: "Meta title",
    type: "string",
    validation: (rule) => rule.max(60),
  }),
  defineField({
    name: "metaDescription",
    title: "Meta description",
    type: "text",
    rows: 3,
    validation: (rule) => rule.max(160),
  }),
  defineField({
    name: "noIndex",
    title: "No index",
    type: "boolean",
    initialValue: false,
  }),
  defineField({
    name: "ogImage",
    title: "Open Graph image",
    type: "image",
    options: { hotspot: true },
  }),
];
