import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// -------------------------
// Collections
// -------------------------
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    date: z.string(),
  }),
});

const homeCollection = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content/copy' }),
  schema: z.object({
    headline: z.string(),
    image: z.object({
      alt: z.string(),
      src: z.string(),
    }),
  }),
});

const aboutCollection = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content/copy' }),
  schema: z.object({
    headline: z.string(),
    items: z.array(
      z.object({
        id: z.string(),
        type: z.string(),
        description: z.string(),
        headline: z.string(),
        tags: z.array(z.string()),
        link: z.object({
          label: z.string(),
          url: z.string(),
        }),
      })
    ),
    nda: z.object({
      headline: z.string(),
      images: z.array(
        z.object({
          alt: z.string(),
          src: z.string(),
        })
      ),
    }),
    knowMore: z.object({
      headline: z.string(),
      CTA: z.array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      ),
    }),
  }),
});

const blogPageCollection = defineCollection({
  loader: glob({ pattern: 'blog.md', base: './src/content/copy' }),
  schema: z.object({
    headline: z.string(),
  }),
});

const footerCollection = defineCollection({
  loader: glob({ pattern: 'footer.md', base: './src/content/copy' }),
  schema: z.object({
    headline: z.string(),
    CTA: z.object({
      label: z.string(),
      url: z.string().url(),
    }),
  }),
});

const navigationCollection = defineCollection({
  loader: glob({ pattern: 'navigation.md', base: './src/content/copy' }),
  schema: z.object({
    items: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      })
    ),
  }),
});

export const collections = {
  blog: blogCollection,
  home: homeCollection,
  about: aboutCollection,
  blogPage: blogPageCollection,
  footer: footerCollection,
  navigation: navigationCollection,
};

// -------------------------
// Page Titles
// -------------------------
export const PAGE_TITLES = {
  default: 'Marco Mazzai | Portfolio & Blog',
  about: 'About | Marco Mazzai',
  blog: 'Blog | Marco Mazzai',
  blogSuffix: '| Blog | Marco Mazzai',
};

// -------------------------
// Meta
// -------------------------
export const META = {
  keywords: '',
  description: '',
  title: '',
  og: {
    title: '',
    url: '',
    image: '',
    type: '',
    description: '',
    locale: '',
  },
};

