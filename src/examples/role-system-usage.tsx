/**
 * Example usage of the role-based authorization system
 *
 * This file demonstrates how to use the implemented role system
 * in your Next.js application.
 */

import { type Session } from "next-auth";
import { api } from "~/trpc/react";
import {
  hasRole,
  canCreatePosts,
  canCreateLinks,
  canManageUsers,
} from "~/lib/auth-utils";

// Example: Using tRPC with role-based procedures
export function ExamplePostCreation() {
  // Only works if user has member or admin role
  const createPost = api.post.create.useMutation();
  const { data: permissions } = api.authorization.getPermissions.useQuery();

  const handleCreatePost = async () => {
    if (!permissions?.canCreatePosts) {
      alert("You need member privileges to create posts");
      return;
    }

    try {
      await createPost.mutateAsync({
        title: "My New Post",
        content: "This is my post content",
        type: "post",
        published: false, // Start as draft
      });
      console.log("Post created successfully!");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <button onClick={handleCreatePost} disabled={!permissions?.canCreatePosts}>
      Create Post
    </button>
  );
}

// Example: Using tRPC with admin-only procedures
export function ExampleLinkCreation() {
  // Only works if user has admin role
  const createLink = api.link.create.useMutation();
  const { data: permissions } = api.authorization.getPermissions.useQuery();

  const handleCreateLink = async () => {
    if (!permissions?.canCreateLinks) {
      alert("You need admin privileges to create links");
      return;
    }

    try {
      await createLink.mutateAsync({
        slug: "example",
        url: "https://example.com",
        override: false,
      });
      console.log("Link created successfully!");
    } catch (error) {
      console.error("Failed to create link:", error);
    }
  };

  return (
    <button onClick={handleCreateLink} disabled={!permissions?.canCreateLinks}>
      Create Short Link
    </button>
  );
}

// Example: Client-side role checking for UI rendering
export function ExampleRoleBasedUI({ session }: { session: Session | null }) {
  return (
    <div className="space-y-4">
      <h2>Available Actions</h2>

      {/* Always show for authenticated users */}
      {session && (
        <div>
          <h3>User Actions</h3>
          <button>View Gallery</button>
          <button>Rate Images</button>
          <p>Role: {session.user.role}</p>
        </div>
      )}

      {/* Show only for members and admins */}
      {canCreatePosts(session) && (
        <div>
          <h3>Content Creation</h3>
          <button>Create Post</button>
          <button>Create Blog</button>
          <button>Manage My Content</button>
        </div>
      )}

      {/* Show only for admins */}
      {canCreateLinks(session) && (
        <div>
          <h3>Link Management</h3>
          <button>Create Short Link</button>
          <button>Manage Links</button>
        </div>
      )}

      {/* Show only for admins */}
      {canManageUsers(session) && (
        <div>
          <h3>User Management</h3>
          <button>View All Users</button>
          <button>Manage User Roles</button>
        </div>
      )}
    </div>
  );
}

// Example: Manual role checking
export function checkUserCapabilities(session: Session | null) {
  console.log("=== User Capabilities ===");
  console.log("Is authenticated:", !!session);
  console.log("User role:", session?.user?.role ?? "not authenticated");
  console.log("Has user role:", hasRole(session, "user"));
  console.log("Has member role:", hasRole(session, "member"));
  console.log("Has admin role:", hasRole(session, "admin"));
  console.log("Can create posts:", canCreatePosts(session));
  console.log("Can create links:", canCreateLinks(session));
  console.log("Can manage users:", canManageUsers(session));
}
