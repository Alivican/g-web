import { type Session } from "next-auth";

export type UserRole = "user" | "member" | "admin";

export function hasRole(session: Session | null, requiredRole: UserRole): boolean {
  if (!session?.user?.role) return false;
  
  const userRole = session.user.role;
  
  // Role hierarchy: admin > member > user
  switch (requiredRole) {
    case "user":
      return ["user", "member", "admin"].includes(userRole);
    case "member":
      return ["member", "admin"].includes(userRole);
    case "admin":
      return userRole === "admin";
    default:
      return false;
  }
}

export function isAdmin(session: Session | null): boolean {
  return hasRole(session, "admin");
}

export function isMember(session: Session | null): boolean {
  return hasRole(session, "member");
}

export function canCreatePosts(session: Session | null): boolean {
  return isMember(session);
}

export function canCreateLinks(session: Session | null): boolean {
  return isAdmin(session);
}

export function canManageUsers(session: Session | null): boolean {
  return isAdmin(session);
}
