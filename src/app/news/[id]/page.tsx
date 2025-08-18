"use client";

import { api } from "~/trpc/react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CalendarDays, User, ArrowLeft } from "lucide-react";

interface NewsPostPageProps {
  params: {
    id: string;
  };
}

export default function NewsPostPage({ params }: NewsPostPageProps) {
  const router = useRouter();
  const postId = parseInt(params.id);

  const {
    data: post,
    isLoading,
    error,
  } = api.post.getById.useQuery(
    { id: postId },
    {
      enabled: !!postId && !isNaN(postId),
      retry: false,
    },
  );

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-3/4 rounded bg-muted"></div>
          <div className="flex gap-4">
            <div className="h-4 w-24 rounded bg-muted"></div>
            <div className="h-4 w-32 rounded bg-muted"></div>
          </div>
          <div className="space-y-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-4 rounded bg-muted"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto max-w-4xl p-6">
        <Card>
          <CardContent className="py-12 text-center">
            <h3 className="mb-2 text-lg font-medium">Post Not Found</h3>
            <p className="mb-4 text-muted-foreground">
              The news article you're looking for doesn't exist or has been
              removed.
            </p>
            <Button onClick={() => router.push("/news")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl p-6">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/news">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

        <div className="mb-4 flex items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>Published {formatDistanceToNow(post.createdAt)} ago</span>
          </div>
          <Badge variant="default">News</Badge>
        </div>
      </div>

      {/* Article Content */}
      <Card>
        <CardContent className="p-8">
          <div
            className="prose prose-lg dark:prose-invert max-w-none quill-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="mt-8 border-t pt-8">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {post.updatedAt && post.updatedAt !== post.createdAt && (
              <span>
                Last updated {formatDistanceToNow(post.updatedAt)} ago
              </span>
            )}
          </div>
          <Link href="/news">
            <Button variant="outline">More News Articles</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
