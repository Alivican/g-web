import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { links } from "~/server/db/schema";
import { eq } from "drizzle-orm";

// Opt out of caching for this route
export const revalidate = 0;

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.redirect(new URL("/", _req.url));
  }

  try {
    const link = await db.query.links.findFirst({
      where: eq(links.slug, slug),
    });

    if (link) {
      return NextResponse.redirect(new URL(link.url));
    }
  } catch (error) {
    console.error("Database query failed:", error);
    // Redirect to home on error
    return NextResponse.redirect(new URL("/", _req.url));
  }

  // If slug is not found, redirect to the homepage.
  return NextResponse.redirect(new URL("/", _req.url));
}
