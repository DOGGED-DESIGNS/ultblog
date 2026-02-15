import z from "zod";

const postPerformanceSchema = z.object({
  id: z.string(), // ✅ added
  title: z.string(),
  category: z.string().nullable(),
  status: z.enum(["DRAFT", "PUBLISHED"]),
  performance: z.union([z.literal("TRENDING"), z.number(), z.null()]),
  featured: z.boolean(),
  author: z.string().nullable(),
});

export type PostPerformance = z.infer<typeof postPerformanceSchema>;
