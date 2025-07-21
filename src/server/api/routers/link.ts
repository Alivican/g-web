import { z } from "zod";

import { createTRPCRouter, memberProcedure } from "~/server/api/trpc";
import { links } from "~/server/db/schema";
import { db } from "~/server/db";
import { eq } from "drizzle-orm";

export const linkRouter = createTRPCRouter({
  create: memberProcedure
    .input(
      z.object({
        slug: z.string().min(1),
        url: z.string().url(),
        override: z.boolean().optional().default(false),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const existingLink = await ctx.db.query.links.findFirst({
        where: eq(links.slug, input.slug),
      });
      if (existingLink && !input.override) {
        // If link exists and override is false, signal a conflict and return the existing URL.
        return {
          success: false,
          error: "slug-exists",
          existingUrl: existingLink.url,
        };
      }
      if (existingLink && input.override) {
        // If link exists and override is true, update it.
        const [updatedLink] = await db
          .update(links)
          .set({ url: input.url })
          .where(eq(links.slug, input.slug))
          .returning();
        return { success: true, link: updatedLink };
      }

      // If link doesn't exist, create it.
      const [newLink] = await db.insert(links).values(input).returning();
      return { success: true, link: newLink };
    }),
});
