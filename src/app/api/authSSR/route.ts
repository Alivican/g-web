// api/authSSR/route.ts

import { NextResponse } from "next/server";
import { api } from "~/trpc/server"; // Or however you get your session server-side

// This ensures the route is always executed dynamically
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await api.authorization.currentSession();

  // If there's no session, you can return a 401 Unauthorized or just null
  if (!session) {
    return NextResponse.json(null, { status: 401 });
  }

  // IMPORTANT: Send the entire session object, not { data: { auth: ... } }
  return NextResponse.json(session);
}
