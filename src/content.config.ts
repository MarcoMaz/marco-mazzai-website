import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// -------------------------
// Helpers
// -------------------------
const partialDate = z.preprocess(
  (v) => {
    // pass through Date
    if (v instanceof Date) return v;

    // number year -> "YYYY"
    if (typeof v === 'number') return String(v);

    // keep strings as-is
    if (typeof v === 'string') return v;

    return v;
  },
  z.union([
    z.literal('Present'),
    z.date(),
    z.string().regex(/^\d{4}$/), // YYYY
    z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/), // YYYY-MM
    z.string().regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/), // YYYY-MM-DD
  ])
);

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
    githubLabel: z.string(),
    nda: z.object({
      headline: z.string(),
      images: z.array(
        z.object({
          alt: z.string(),
          src: z.string(),
        })
      ),
    }),
  }),
});

const petProjectsCollection = defineCollection({
  loader: glob({ pattern: 'petProjects.md', base: './src/content/copy' }),
  schema: z.object({
    petProjectsItems: z.array(
      z.object({
        headline: z.string(),
        type: z.string(),
        description: z.string(),
        date: z.object({
          from: partialDate,
          to: partialDate.optional(),
        }),
        tags: z.array(z.string()),
        githubUrl: z.string().url(),
        preview: z
          .object({
            title: z.string().optional(),
            url: z.string(),
          })
          .optional(),
      })
    ),
  }),
});

const workExperiencesCollection = defineCollection({
  loader: glob({ pattern: 'workExperiences.md', base: './src/content/copy' }),
  schema: z.object({
    workExperiencesItems: z.array(
      z.object({
        headline: z.string(),
        description: z.string(),
        role: z.string(),
        date: z.object({
          from: partialDate,
          to: partialDate.optional(),
        }),
        location: z.string(),
        tasks: z.array(z.string()),
      })
    ),
  }),
});

const educationCollection = defineCollection({
  loader: glob({ pattern: 'education.md', base: './src/content/copy' }),
  schema: z.object({
    educationItems: z.array(
      z.object({
        category: z.enum(['Frontend', 'Accessibility']),
        sections: z.array(
          z.object({
            type: z.enum(['Certifications', 'Advanced Courses', 'Conferences and Webinars']),
            date: z
              .object({
                from: partialDate.optional(),
                to: partialDate.optional(),
              })
              .optional(),
            items: z.array(z.string()),
          })
        ),
      })
    ),
  }),
});

const blogPageCollection = defineCollection({
  loader: glob({ pattern: 'blog.md', base: './src/content/copy' }),
  schema: z.object({
    headline: z.string(),
    description: z.string(),
  }),
});

const footerCollection = defineCollection({
  loader: glob({ pattern: 'footer.md', base: './src/content/copy' }),
  schema: z.object({
    headline: z.string(),
    builtWith: z.string(),
    orFindMe: z.string(),
    copyright: z.string(),
    CTA: z.object({
      label: z.string(),
      url: z.string().url(),
    }),
  }),
});

const navigationCollection = defineCollection({
  loader: glob({ pattern: 'navigation.md', base: './src/content/copy' }),
  schema: z.object({
    navigationItems: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      })
    ),
  }),
});

const socialLinksCollection = defineCollection({
  loader: glob({ pattern: 'socialLinks.md', base: './src/content/copy' }),
  schema: z.object({
    headline: z.string().optional(),
    CTA: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});

export const collections = {
  blog: blogCollection,
  home: homeCollection,
  about: aboutCollection,
  petProjects: petProjectsCollection,
  workExperiences: workExperiencesCollection,
  education: educationCollection,
  blogPage: blogPageCollection,
  footer: footerCollection,
  navigation: navigationCollection,
  socialLinks: socialLinksCollection,
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
  keywords:
    'Marco Mazzai, frontend developer, accessibility expert, a11y, design systems, web accessibility, React developer, UI engineer, WCAG, web performance, web site',
  description:
    'Marco Mazzai is a frontend developer specialized in web accessibility and design systems. He creates scalable, inclusive, and high-performance user interfaces that meet WCAG standards and deliver exceptional user experiences.',
  title: 'Marco Mazzai | Frontend Developer — Accessibility & Design Systems',
  og: {
    title: 'Marco Mazzai | Frontend Developer — Accessibility & Design Systems',
    url: '',
    image: '',
    type: 'website',
    description:
      'Portfolio and blog by Marco Mazzai, frontend developer focused on accessibility and design systems — crafting inclusive, scalable web experiences.',
    locale: 'en_US',
  },
};
