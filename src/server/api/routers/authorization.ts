import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const authorizationRouter = createTRPCRouter({
  currentSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),

  getPermissions: protectedProcedure.query(({ ctx }) => {
    const userRole = ctx.session.user.role;

    return {
      role: userRole,
      canCreatePosts: ["member", "admin"].includes(userRole),
      canCreateLinks: userRole === "admin",
      canManageUsers: userRole === "admin",
      isAdmin: userRole === "admin",
      isMember: ["member", "admin"].includes(userRole),
    };
  }),
});
