import { z, defineCollection, type CollectionEntry } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string({
        required_error: "A title is required for a blog post.",
      }),
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
          description: z.string({
            required_error: "All series must have a brief description.",
          }),
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
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverClasses: z.array(z.string()).optional(),
    }),
});

export type BlogPost = CollectionEntry<"blog">;

//export type BlogPost = CollectionEntry<"blog">;

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
  schema: z.object({
    title: z.string({ required_error: "A title is required for a project." }),
    draft: z
      .boolean({
        invalid_type_error: "A project page is either a draft or it isn't.",
      })
      .default(true),
    description: z
      .string({
        required_error: "A brief description for the project is required.",
        invalid_type_error: "A description should always be a string.",
      })
      .max(120),
    tools: z.array(
      z.string({
        required_error: "All projects must have a list of tools used.",
        invalid_type_error: "All tools are a list of strings.",
      }),
    ),
    category: z.string({
      required_error: "A project should always have a category.",
      invalid_type_error: "A category should always be a string.",
    }),
    featured: z
      .boolean({
        invalid_type_error: "All projects are either featured or not.",
      })
      .default(false),

    status: z.enum(["Planning", "In Development", "Completed"], {
      invalid_type_error:
        "A project is either planning, in development, or completed.",
    }),
    links: z.object({
      docs: z
        .string({
          invalid_type_error:
            "The documentation link should be a page to the url.",
        })
        .optional(),
      repo: z.string({
        invalid_type_error: "Pass the url to the repository as a string.",
        required_error: "The repository link is required.",
      }),
      live: z
        .string({
          invalid_type_error: "Pass the url to the live site as a string.",
        })
        .optional(),
    }),
  }),
});

export type Project = CollectionEntry<"projects">;

export const collections = {
  blog, projects
};
