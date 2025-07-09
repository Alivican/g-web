import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = url.hostname;

  // Check if the subdomain is 'link'
  console.log("Request received for hostname:", hostname);
  if (hostname.startsWith("link.")) {
    console.log("Subdomain 'link' detected, processing request...");
    const { pathname } = url;

    // Exclude known paths from the rewrite logic
    if (
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next") ||
      pathname.includes(".") // Exclude files with extensions (e.g., favicon.ico, images)
    ) {
      return NextResponse.next();
    }

    if (pathname !== "/") {
      // Rewrite the path to a specific API route for handling redirects
      return NextResponse.rewrite(new URL(`/api/redirect${pathname}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // The matcher is simplified as the logic is now handled inside the middleware.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
