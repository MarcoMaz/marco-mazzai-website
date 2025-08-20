import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/content/blog" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    date: z.string(),
  }),
});

const copyCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: "./src/content/copy" }),
  schema: z.object({
    headline: z.string().optional(),
    image: z
      .object({
        alt: z.string(),
        src: z.string(),
      })
      .optional(),
    content: z.string().optional(),
    selectedWorks: z
      .object({
        headline: z.string(),
        items: z.array(
          z.object({
            id: z.string(),
            headline: z.string(),
            type: z.string(),
            description: z.string(),
            tags: z.array(z.string()),
            link: z.object({
              label: z.string(),
              url: z.string(),
            }),
          })
        ),
      })
      .optional(),
    nda: z
      .object({
        headline: z.string(),
        images: z.array(
          z.object({
            alt: z.string(),
            src: z.string(),
          })
        ),
      })
      .optional(),
    knowMore: z
      .object({
        headline: z.string(),
        CTA: z.array(
          z.object({
            label: z.string(),
            url: z.string(),
          })
        ),
      })
      .optional(),
    items: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    CTA: z
      .object({
        label: z.string(),
        url: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  copy: copyCollection,
};
