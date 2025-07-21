"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

import { RoleBasedMenu } from "~/components/role-based-menu";
import {
  ExampleLinkCreation,
  ExamplePostCreation,
  ExampleRoleBasedUI,
  checkUserCapabilities,
} from "~/examples/role-system-usage";

export default function RoleTestPage() {
  const { data: session } = useSession();

  return (
    <main className="mx-auto max-w-xl space-y-8 py-10">
      {/* Intro */}
      <section>
        <h1 className="mb-2 text-2xl font-bold">Role-Based Feature Demo</h1>
        <p className="text-muted-foreground">
          This page demonstrates the role-based authorization system. Sign in
          with different accounts to see how available actions change based on
          your role.
        </p>
      </section>

      {/* Role-based menu component */}
      <RoleBasedMenu />

      {/* Example: Role-based UI rendering */}
      <section>
        <h2 className="mb-2 text-xl font-semibold">Role-Based UI Example</h2>
        <ExampleRoleBasedUI session={session} />
      </section>

      {/* Example: Action buttons with permission checks */}
      <section>
        <h2 className="mb-2 text-xl font-semibold">Action Examples</h2>
        <div className="space-y-2">
          <ExamplePostCreation />
          <ExampleLinkCreation />
        </div>
      </section>

      {/* Docs link and tip */}
      <section className="text-sm text-muted-foreground">
        <p>
          <b>Tip:</b> Try logging in as a regular user, member, or admin to see
          different menu options.
        </p>
        <p>
          See the{" "}
          <Link
            href="/docs/ROLE_SYSTEM"
            className="underline hover:text-primary"
            target="_blank"
          >
            full documentation
          </Link>{" "}
          for more details.
        </p>
      </section>
    </main>
  );
}
