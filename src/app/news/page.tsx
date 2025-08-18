"use client";

import { api } from "~/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { CalendarDays, User } from "lucide-react";

export default function NewsPage() {
  const { data: posts, isLoading } = api.post.getByType.useQuery({
    type: "news",
  });

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">News</h1>
          <p className="text-muted-foreground">Latest news and updates</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 w-3/4 rounded bg-muted"></div>
                <div className="h-3 w-1/2 rounded bg-muted"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-3 rounded bg-muted"></div>
                  <div className="h-3 rounded bg-muted"></div>
                  <div className="h-3 w-2/3 rounded bg-muted"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">News</h1>
        <p className="text-muted-foreground">
          Latest news and updates from HIMAFI ITB
        </p>
      </div>

      {posts && posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="group transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    <span>{formatDistanceToNow(post.createdAt)} ago</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div
                  className="mb-4 line-clamp-3 text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html:
                      post.content.replace(/<[^>]*>/g, "").substring(0, 150) +
                      "...",
                  }}
                />
                <div className="flex items-center justify-between">
                  <Badge variant="default">News</Badge>
                  <Link href={`/news/${post.id}`}>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <h3 className="mb-2 text-lg font-medium">No news articles yet</h3>
            <p className="text-muted-foreground">
              Check back later for the latest news and updates.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
