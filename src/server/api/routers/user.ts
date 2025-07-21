import { z } from "zod";

import {
  createTRPCRouter,
  adminProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { users } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const userRouter = createTRPCRouter({
  // Admin only - get all users
  getAll: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.query.users.findMany({
      columns: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
      },
    });
  }),

  // Admin only - update user role
  updateRole: adminProcedure
    .input(
      z.object({
        userId: z.string(),
        role: z.enum(["user", "member", "admin"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const [updatedUser] = await ctx.db
        .update(users)
        .set({ role: input.role })
        .where(eq(users.id, input.userId))
        .returning({
          id: users.id,
          name: users.name,
          email: users.email,
          role: users.role,
        });
      
      return updatedUser;
    }),

  // Protected - get current user info
  getMe: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.query.users.findFirst({
      where: eq(users.id, ctx.session.user.id),
      columns: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
      },
    });
  }),
});
