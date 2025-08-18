"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal, Pencil, Trash2, Eye, Plus } from "lucide-react";

export default function ManagePostsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: posts,
    isLoading,
    refetch,
  } = api.post.getMyPosts.useQuery(undefined, { enabled: !!session });

  const deletePost = api.post.delete.useMutation({
    onSuccess: () => {
      toast.success("Post deleted successfully");
      refetch();
      setDeleteId(null);
    },
    onError: (error) => {
      toast.error("Failed to delete post: " + error.message);
    },
  });

  const updatePost = api.post.update.useMutation({
    onSuccess: () => {
      toast.success("Post updated successfully");
      refetch();
    },
    onError: (error) => {
      toast.error("Failed to update post: " + error.message);
    },
  });

  // Check if user is authenticated and has member/admin role
  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  if (session.user.role === "user") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You need member or admin privileges to manage posts.</p>
            <Button onClick={() => router.push("/")} className="mt-4 w-full">
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const filteredPosts =
    posts?.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.type.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  const handleTogglePublish = (id: number, currentPublished: boolean) => {
    updatePost.mutate({
      id,
      published: !currentPublished,
    });
  };

  const handleDelete = (id: number) => {
    deletePost.mutate({ id });
  };

  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manage Posts</h1>
          <p className="text-muted-foreground">
            Manage your articles, drafts, and published content
          </p>
        </div>
        <Button onClick={() => router.push("/editor")}>
          <Plus className="mr-2 h-4 w-4" />
          New Article
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <Input
          placeholder="Search posts by title or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Posts List */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="text-lg">Loading posts...</div>
        </div>
      ) : filteredPosts.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <h3 className="text-lg font-medium">No posts found</h3>
            <p className="text-muted-foreground">
              {posts?.length === 0
                ? "You haven't created any posts yet."
                : "No posts match your search criteria."}
            </p>
            <Button onClick={() => router.push("/editor")} className="mt-4">
              Create your first post
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center space-x-2">
                      <h3 className="text-lg font-semibold">{post.title}</h3>
                      <Badge
                        variant={post.type === "news" ? "default" : "secondary"}
                      >
                        {post.type}
                      </Badge>
                      <Badge variant={post.published ? "default" : "outline"}>
                        {post.published ? "Published" : "Draft"}
                      </Badge>
                    </div>

                    <div
                      className="mb-2 line-clamp-2 text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: post.content.substring(0, 200) + "...",
                      }}
                    />

                    <div className="text-sm text-muted-foreground">
                      Created {formatDistanceToNow(post.createdAt)} ago
                      {post.updatedAt && post.updatedAt !== post.createdAt && (
                        <span>
                          {" "}
                          • Updated {formatDistanceToNow(post.updatedAt)} ago
                        </span>
                      )}
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {post.published && (
                        <DropdownMenuItem
                          onClick={() =>
                            router.push(`/${post.type}/${post.id}`)
                          }
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                        onClick={() => router.push(`/editor/${post.id}`)}
                      >
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          handleTogglePublish(post.id, post.published)
                        }
                      >
                        {post.published ? "Unpublish" : "Publish"}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setDeleteId(post.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={deleteId !== null}
        onOpenChange={() => setDeleteId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              post.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
