"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";
import dynamic from "next/dynamic";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { toast } from "sonner";

// Dynamically import the QuillEditor to avoid SSR issues
const QuillEditor = dynamic(
  () =>
    import("../_components/quill-editor").then((mod) => ({
      default: mod.QuillEditor,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 animate-pulse rounded-md bg-gray-100" />
    ),
  },
);

interface EditPostPageProps {
  params: {
    id: string;
  };
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const postId = parseInt(params.id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState<"news" | "blog">("news");
  const [published, setPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Fetch the existing post
  const {
    data: post,
    isLoading: isLoadingPost,
    error,
  } = api.post.getById.useQuery(
    { id: postId },
    {
      enabled: !!postId && !isNaN(postId),
      retry: false,
    },
  );

  const updatePost = api.post.update.useMutation({
    onSuccess: (data) => {
      toast.success("Article updated successfully!");
      if (data?.id) {
        router.push(`/${type}/${data.id}`);
      } else {
        router.push("/editor/manage");
      }
    },
    onError: (error) => {
      toast.error("Failed to update article: " + error.message);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  // Initialize form with post data
  useEffect(() => {
    if (post && !isInitialized) {
      setTitle(post.title);
      setContent(post.content);
      setType(post.type as "news" | "blog");
      setPublished(post.published);
      setIsInitialized(true);
    }
  }, [post, isInitialized]);

  // Check if user is authenticated and has member/admin role
  if (status === "loading" || isLoadingPost) {
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
            <p>You need member or admin privileges to edit posts.</p>
            <Button onClick={() => router.push("/")} className="mt-4 w-full">
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Post Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The post you're trying to edit doesn't exist or you don't have
              permission to edit it.
            </p>
            <Button
              onClick={() => router.push("/editor/manage")}
              className="mt-4 w-full"
            >
              Back to Posts
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Check if user can edit this post (author or admin)
  if (session.user.role !== "admin" && post.author?.id !== session.user.id) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You can only edit your own posts.</p>
            <Button
              onClick={() => router.push("/editor/manage")}
              className="mt-4 w-full"
            >
              Back to Posts
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSave = async () => {
    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }

    if (!content.trim()) {
      toast.error("Please enter some content");
      return;
    }

    setIsLoading(true);
    updatePost.mutate({
      id: postId,
      title: title.trim(),
      content,
      type,
      published,
    });
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Edit Article</h1>
        <p className="text-muted-foreground">
          Update your article content and settings
        </p>
      </div>

      <div className="space-y-6">
        {/* Article Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Article Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter article title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Type Selection */}
            <div className="space-y-3">
              <Label>Article Type</Label>
              <RadioGroup
                value={type}
                onValueChange={(value) => setType(value as "news" | "blog")}
                className="flex space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="news" id="news" />
                  <Label htmlFor="news">News</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="blog" id="blog" />
                  <Label htmlFor="blog">Blog</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Published Toggle */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="published">Publish Article</Label>
                <p className="text-sm text-muted-foreground">
                  {published
                    ? "Article will be publicly visible"
                    : "Article will be saved as draft"}
                </p>
              </div>
              <Switch
                id="published"
                checked={published}
                onCheckedChange={setPublished}
              />
            </div>
          </CardContent>
        </Card>

        {/* Content Editor */}
        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
          </CardHeader>
          <CardContent>
            <QuillEditor
              value={content}
              onChange={handleContentChange}
              placeholder="Start writing your article..."
            />
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <Button
            variant="outline"
            onClick={() => router.push("/editor/manage")}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Article"}
          </Button>
        </div>
      </div>
    </div>
  );
}
