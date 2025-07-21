import { z } from "zod";

import {
  createTRPCRouter,
  memberProcedure,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { posts } from "~/server/db/schema";
import { eq, desc } from "drizzle-orm";

export const postRouter = createTRPCRouter({
  // Public procedures - anyone can read published posts
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.query.posts.findMany({
      where: eq(posts.published, true),
      orderBy: [desc(posts.createdAt)],
      with: {
        author: {
          columns: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.query.posts.findFirst({
        where: (model, { eq, and }) =>
          and(eq(model.id, input.id), eq(model.published, true)),
        with: {
          author: {
            columns: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      });
    }),

  // Member/Admin procedures - only members and admins can create/edit posts
  create: memberProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        type: z.enum(["post", "blog"]).default("post"),
        published: z.boolean().default(false),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [newPost] = await ctx.db
        .insert(posts)
        .values({
          title: input.title,
          content: input.content,
          type: input.type,
          published: input.published,
          authorId: ctx.session.user.id,
        })
        .returning();
      return newPost;
    }),

  update: memberProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1).optional(),
        content: z.string().min(1).optional(),
        type: z.enum(["post", "blog"]).optional(),
        published: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...updateData } = input;

      // Check if the post belongs to the user (unless user is admin)
      if (ctx.session.user.role !== "admin") {
        const existingPost = await ctx.db.query.posts.findFirst({
          where: eq(posts.id, id),
          columns: { authorId: true },
        });

        if (!existingPost || existingPost.authorId !== ctx.session.user.id) {
          throw new Error("Unauthorized to edit this post");
        }
      }

      const [updatedPost] = await ctx.db
        .update(posts)
        .set({
          ...updateData,
          published:
            updateData.published !== undefined
              ? updateData.published
                ? true
                : false
              : undefined,
        })
        .where(eq(posts.id, id))
        .returning();

      return updatedPost;
    }),

  delete: memberProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      // Check if the post belongs to the user (unless user is admin)
      if (ctx.session.user.role !== "admin") {
        const existingPost = await ctx.db.query.posts.findFirst({
          where: eq(posts.id, input.id),
          columns: { authorId: true },
        });

        if (!existingPost || existingPost.authorId !== ctx.session.user.id) {
          throw new Error("Unauthorized to delete this post");
        }
      }

      await ctx.db.delete(posts).where(eq(posts.id, input.id));
    }),

  // Protected procedure - logged in users can see their own drafts
  getMyPosts: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.query.posts.findMany({
      where: eq(posts.authorId, ctx.session.user.id),
      orderBy: [desc(posts.createdAt)],
    });
  }),
});
