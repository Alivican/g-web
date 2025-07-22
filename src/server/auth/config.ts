import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { db } from "~/server/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "~/server/db/schema";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: "user" | "member" | "admin";
      // ...other properties
    } & DefaultSession["user"];
  }

  interface User {
    role: "user" | "member" | "admin";
    // ...other properties
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
    signOut: "/auth/signout", // Custom sign-out page
    // signIn: "/api/auth/signin", // Option 2 & 3: Use default NextAuth page
  },

  // Option 2 & 3: Theme customization for default NextAuth page
  // theme: {
  //   colorScheme: "dark",
  //   brandColor: "#1976d2", // HIMAFI blue
  //   logo: "/himafi-logo.png",
  //   buttonText: "#ffffff"
  // },

  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  callbacks: {
    session: ({ session, user }) => {
      const userWithRole = user as typeof user & {
        role?: "user" | "member" | "admin";
      };
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: userWithRole.role ?? "user",
        },
      };
    },
  },
} satisfies NextAuthConfig;
