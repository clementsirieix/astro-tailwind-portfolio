import {defineCollection, z} from 'astro:content';

const projectCollection = defineCollection({
  type: 'data',
  schema: ({image}) =>
    z.object({
      name: z.string(),
      icon: image().refine((img) => img.width == 128 && img.height == 128, {
        message: 'Icon should be 128x128',
      }),
      iconAlt: z.string(),
      link: z.string().url(),
      date: z.string(),
    }),
});

export const blogSchema = z.object({
  createdAt: z.date(),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
});

export const collections = {
  project: projectCollection,
  blog: blogCollection,
};
