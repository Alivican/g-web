"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { MoreHorizontal, Shield, User, UserCheck, Search } from "lucide-react";
import { api } from "~/trpc/react";
import { toast } from "sonner";

type UserWithRole = {
  id: string;
  name: string | null;
  email: string;
  role: "user" | "member" | "admin";
  image: string | null;
};

interface UsersTableProps {
  users: UserWithRole[];
}

const roleIcons = {
  user: User,
  member: UserCheck,
  admin: Shield,
};

const roleColors = {
  user: "default" as const,
  member: "secondary" as const,
  admin: "destructive" as const,
};

export function UsersTable({ users: initialUsers }: UsersTableProps) {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const updateRole = api.user.updateRole.useMutation({
    onSuccess: (updatedUser) => {
      if (updatedUser) {
        setUsers((prev) =>
          prev.map((user) =>
            user.id === updatedUser.id
              ? { ...user, role: updatedUser.role }
              : user,
          ),
        );
        toast.success("User role updated successfully");
      }
    },
    onError: (error) => {
      toast.error(`Failed to update user role: ${error.message}`);
    },
  });

  const handleRoleChange = (
    userId: string,
    newRole: "user" | "member" | "admin",
  ) => {
    updateRole.mutate({ userId, role: newRole });
  };

  const filteredUsers = users.filter(
    (user) =>
      (user.name?.toLowerCase() ?? "").includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users by name, email, or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="py-8 text-center text-muted-foreground"
                >
                  {searchTerm
                    ? "No users found matching your search."
                    : "No users found."}
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => {
                const RoleIcon = roleIcons[user.role];
                return (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        {user.image && (
                          <a
                            href={user.image}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={user.image}
                              alt={user.name ?? "User"}
                              className="h-8 w-8 rounded-full"
                            />
                          </a>
                        )}
                        <div>
                          <div className="font-medium">
                            {user.name ?? "Unknown"}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ID: {user.id.slice(0, 8)}...
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant={roleColors[user.role]}
                        className="flex items-center space-x-1"
                      >
                        <RoleIcon className="h-3 w-3" />
                        <span className="capitalize">{user.role}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            disabled={updateRole.isPending}
                          >
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Change Role</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleRoleChange(user.id, "user")}
                            disabled={user.role === "user"}
                          >
                            <User className="mr-2 h-4 w-4" />
                            User
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleRoleChange(user.id, "member")}
                            disabled={user.role === "member"}
                          >
                            <UserCheck className="mr-2 h-4 w-4" />
                            Member
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleRoleChange(user.id, "admin")}
                            disabled={user.role === "admin"}
                          >
                            <Shield className="mr-2 h-4 w-4" />
                            Admin
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
