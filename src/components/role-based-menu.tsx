"use client";

import { useSession } from "next-auth/react";
import {
  hasRole,
  canCreatePosts,
  canCreateLinks,
  canManageUsers,
} from "~/lib/auth-utils";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function RoleBasedMenu() {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Please sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You need to be signed in to access features.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Actions</CardTitle>
        <p className="text-sm text-muted-foreground">
          Role: <span className="font-semibold">{session.user.role}</span>
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* All logged-in users can do basic actions */}
        <div>
          <h4 className="mb-2 font-medium">Basic Actions (All Users)</h4>
          <div className="space-y-1">
            <Button variant="outline" size="sm">
              View Gallery
            </Button>
            <Button variant="outline" size="sm">
              Rate Images
            </Button>
          </div>
        </div>

        {/* Members and Admins can create posts */}
        {canCreatePosts(session) && (
          <div>
            <h4 className="mb-2 font-medium">
              Content Creation (Members & Admins)
            </h4>
            <div className="space-y-1">
              <Button variant="secondary" size="sm">
                Create Post
              </Button>
              <Button variant="secondary" size="sm">
                Create Blog
              </Button>
              <Button variant="outline" size="sm">
                Manage My Posts
              </Button>
            </div>
          </div>
        )}

        {/* Only Admins can create links */}
        {canCreateLinks(session) && (
          <div>
            <h4 className="mb-2 font-medium">Link Management (Admins Only)</h4>
            <div className="space-y-1">
              <Button variant="default" size="sm">
                Create Short Link
              </Button>
              <Button variant="outline" size="sm">
                Manage Links
              </Button>
            </div>
          </div>
        )}

        {/* Only Admins can manage users */}
        {canManageUsers(session) && (
          <div>
            <h4 className="mb-2 font-medium">User Management (Admins Only)</h4>
            <div className="space-y-1">
              <Button variant="destructive" size="sm">
                Manage User Roles
              </Button>
              <Button variant="outline" size="sm">
                View All Users
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
