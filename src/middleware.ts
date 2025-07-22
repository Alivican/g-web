import { NextResponse, type NextRequest } from "next/server";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";

// Define the type for the session object
type SessionOutput =
  inferRouterOutputs<AppRouter>["authorization"]["currentSession"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const res = await fetch(
    `${req.nextUrl.origin}/api/trpc/authorization.currentSession`,
    {
      headers: {
        "Content-Type": "application/json",
        // Forward the cookie header to the API route. This is necessary because Next.js doesn't
        // send the cookie header by default. This is a security feature to prevent CSRF attacks.
        // See https://nextjs.org/docs/going-to-production#cookie-forwarding
        Cookie: req.headers.get("cookie") ?? "",
      },
    },
  );

  let session: SessionOutput = null;
  // Check if the fetch was successful before parsing
  if (res.ok) {
    try {
      const body = await res.json();
      // tRPC nests the actual data inside the `result.data` property
      session = body.result.data.json;
    } catch (error) {
      console.error("Middleware: Failed to parse session JSON.", error);
    }
  }

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
  matcher: ["/((?!api/auth|api/trpc|_next/static|_next/image|favicon.ico).*)"],
};
