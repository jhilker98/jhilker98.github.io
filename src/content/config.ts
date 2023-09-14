import { z, defineCollection, type CollectionEntry } from "astro:content";

const blogSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string({ required_error: "A title is required for a blog post." }),
    draft: z
      .boolean({ required_error: "Every post is either a draft or not." })
      .default(true),
    pubDate: z.date({
      required_error: "You need to have a date when the post was published.",
    }),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    lastModDate: z.date().optional(),
    featured: z
      .boolean({ invalid_type_error: "A post is either featured or not." })
      .default(false),
    series: z
      .object({
        name: z.string({ required_error: "Any series must have a name." }),
        weight: z.number({
          required_error:
            "Any post in a series must have a weight to sort by in that series.",
        }),
      })
      .optional(),
    description: z
      .string({
        required_error:
          "All posts must have a brief description of 120 characters explaining what the post is about.",
        invalid_type_error: "A description should always be a string.",
      })
      .max(120),
  }),
});

export type BlogPost = CollectionEntry<"blog">;

//export type BlogPost = CollectionEntry<"blog">;

const projectSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string({ required_error: "A title is required for a project." }),
    description: z.string({
      required_error: "A brief description for the project is required.",
    }),
  }),
});

export const collections = {
  blog: blogSchema,
  projects: projectSchema,
};
