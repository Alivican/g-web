# Role-Based Authorization System

This application implements a three-tier role-based authorization system:

## User Roles

### 1. **User** (Default)

- **Description**: Any logged-in user
- **Permissions**:
  - View public content (gallery, published posts/blogs)
  - Rate images
  - View their own profile

### 2. **Member**

- **Description**: Users with content creation privileges
- **Permissions**:
  - All User permissions +
  - Create posts and blogs
  - Edit/delete their own posts
  - View drafts of their own content

### 3. **Admin**

- **Description**: Users with full system access
- **Permissions**:
  - All Member permissions +
  - Create/manage short links
  - Manage user roles
  - Edit/delete any user's posts
  - View all users

## Database Schema

### Users Table

```sql
users (
  id: varchar(255) PRIMARY KEY,
  name: varchar(255),
  email: varchar(255) NOT NULL,
  email_verified: timestamp,
  image: varchar(255),
  role: user_role NOT NULL DEFAULT 'user'  -- NEW FIELD
)
```

### Posts Table (NEW)

```sql
posts (
  id: serial PRIMARY KEY,
  title: varchar(256) NOT NULL,
  content: text NOT NULL,
  type: varchar(50) NOT NULL DEFAULT 'post',  -- 'post' or 'blog'
  published: integer NOT NULL DEFAULT 0,      -- 0 = draft, 1 = published
  author_id: varchar(255) NOT NULL REFERENCES users(id),
  created_at: timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at: timestamp
)
```

## API Endpoints

### tRPC Procedures by Role

#### Public Procedures (No Authentication Required)

- `authorization.currentSession` - Get current session info
- `post.getAll` - Get all published posts
- `post.getById` - Get specific published post
- `image.getImageRating` - Get image rating

#### Protected Procedures (Any Logged-in User)

- `authorization.getPermissions` - Get current user's permissions
- `post.getMyPosts` - Get user's own posts (including drafts)
- `image.getMyImages` - Get user's uploaded images
- `image.deleteMyImage` - Delete user's own images
- `image.rateImage` - Rate images
- `user.getMe` - Get current user info

#### Member Procedures (Members + Admins)

- `post.create` - Create new post/blog
- `post.update` - Update own posts (admins can edit any)
- `post.delete` - Delete own posts (admins can delete any)

#### Admin Procedures (Admins Only)

- `link.create` - Create short links
- `user.getAll` - Get all users
- `user.updateRole` - Update user roles

## Usage Examples

### Client-Side Role Checking

```typescript
import { useSession } from "next-auth/react";
import { hasRole, canCreatePosts, canCreateLinks } from "~/lib/auth-utils";

function MyComponent() {
  const { data: session } = useSession();

  if (canCreatePosts(session)) {
    return <CreatePostButton />;
  }

  if (canCreateLinks(session)) {
    return <CreateLinkButton />;
  }

  return <ViewOnlyContent />;
}
```

### Server-Side tRPC Usage

```typescript
// Member procedure example
export const memberProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (!["member", "admin"].includes(ctx.session.user.role)) {
    throw new TRPCError({ code: "FORBIDDEN", message: "Member role required" });
  }
  return next({ ctx });
});

// Usage in router
createPost: memberProcedure
  .input(z.object({ title: z.string(), content: z.string() }))
  .mutation(async ({ ctx, input }) => {
    // Only members and admins can reach this code
  });
```

## Components

- `<RoleBasedMenu />` - Example component showing role-based UI
- Auth utilities in `~/lib/auth-utils.ts` for client-side role checking

## Security Notes

1. **Server-side validation**: All role checks are enforced on the server via tRPC procedures
2. **Client-side helpers**: UI utilities are for UX only, not security
3. **Hierarchical roles**: Admin includes Member permissions, Member includes User permissions
4. **Default role**: New users default to "user" role and must be promoted by admins
