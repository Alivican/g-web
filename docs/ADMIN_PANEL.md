# Admin Panel

This admin panel provides user management functionality for the HIMAFI ITB website.

## Features

### User Management

- View all registered users in a table format
- Display user information including name, email, profile image, and current role
- Change user roles between `user`, `member`, and `admin`
- Real-time role updates with optimistic UI

### Access Control

- Only admin users can access the admin panel
- Middleware protection for `/admin` routes
- Automatic redirects for unauthorized access

## Pages

### `/admin`

Main admin dashboard with user management table.

### Access Requirements

- Must be authenticated
- Must have `admin` role

## Components

### UsersTable

Located at `/admin/_components/users-table.tsx`

- Displays all users in a shadcn/ui table
- Includes role badges with icons
- Dropdown menu for role changes
- Loading states and error handling

## Middleware Protection

The middleware protects:

1. `/admin/*` routes - requires admin role
2. `/link/*` routes - requires admin role (for link management)
3. `link.` subdomain - handles link redirection

## Role Hierarchy

- `user` - Basic user access
- `member` - Member privileges + basic user access
- `admin` - Full administrative access

## Usage

1. Sign in with an admin account
2. Navigate to the admin section via the navigation menu
3. View and manage user roles as needed

The admin link appears in the navigation bar only for users with admin privileges.
