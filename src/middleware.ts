// middleware.ts

import { NextResponse, type NextRequest } from "next/server";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";

// Define the type for the session object
type SessionOutput =
  inferRouterOutputs<AppRouter>["authorization"]["currentSession"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const res = await fetch(`${req.nextUrl.origin}/api/authSSR`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: req.headers.get("cookie") ?? "", // Forward the cookie
    },
  });

  // Check if the fetch was successful before parsing JSON. Explicitly type the session variable here
  const session: SessionOutput = res.ok ? await res.json() : null;

  // Helper function for redirection
  const redirectTo = (path: string) =>
    NextResponse.redirect(new URL(path, req.url));

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    if (!session) {
      return redirectTo("/api/auth/signin");
    }
    if (session.user?.role !== "admin") {
      return redirectTo("/"); // Not an admin
    }
  }

  // Protect link shortener page
  if (pathname.startsWith("/link")) {
    if (!session) {
      return redirectTo("/api/auth/signin");
    }
    const userRole = session.user?.role;
    if (userRole !== "member" && userRole !== "admin") {
      return redirectTo("/"); // Not a member or admin
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match all routes except for static assets and the auth API
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
