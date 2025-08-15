import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
  }),
});

export const collections = {
  blog: blogCollection, // 👈 must match the string in getCollection('blog')
};
