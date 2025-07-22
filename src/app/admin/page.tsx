import { redirect } from "next/navigation";
import { api } from "~/trpc/server";
import { canManageUsers } from "~/lib/auth-utils";
import { UsersTable } from "./_components/users-table";

export default async function AdminPage() {
  const session = await api.authorization.currentSession();

  if (!canManageUsers(session)) {
    redirect("/");
  }

  const users = await api.user.getAll();

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage users and their roles</p>
      </div>

      <UsersTable users={users} />
    </div>
  );
}
