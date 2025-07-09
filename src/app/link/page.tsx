"use client";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { api } from "~/trpc/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

type LinkData = { slug: string; url: string };

export default function CreateLinkPage() {
  const [slug, setSlug] = useState("");
  const [url, setUrl] = useState("");

  const [showOverwriteModal, setShowOverwriteModal] = useState(false);
  const [pendingLink, setPendingLink] = useState<LinkData | null>(null);
  const [existingUrl, setExistingUrl] = useState<string | null>(null);
  const [finalLink, setFinalLink] = useState<LinkData | null>(null);

  const createLinkMutation = api.link.create.useMutation({
    onSuccess: (data) => {
      if (!data.success && data.error === "slug-exists") {
        // Backend signals a conflict, show the modal and store existing URL
        setPendingLink({ slug, url });
        setExistingUrl(data.existingUrl ?? null);
        setShowOverwriteModal(true);
      } else if (data.success && data.link) {
        // Link created or updated successfully
        setFinalLink(data.link);
        setShowOverwriteModal(false);
        setPendingLink(null);
        setExistingUrl(null);
      }
    },
    onError: (error) => {
      // Handle unexpected errors
      alert(`An unexpected error occurred: ${error.message}`);
      setShowOverwriteModal(false);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFinalLink(null); // Reset previous result
    createLinkMutation.mutate({ slug, url });
  };

  const handleConfirmOverwrite = () => {
    if (pendingLink) {
      createLinkMutation.mutate({ ...pendingLink, override: true });
    }
  };

  const handleCancelOverwrite = () => {
    setShowOverwriteModal(false);
    setPendingLink(null);
    setExistingUrl(null);
  };

  return (
    <>
      <div className="container mx-auto max-w-lg p-4">
        <Card>
          <CardHeader>
            <CardTitle>Create a new link</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <label htmlFor="url" className="block font-medium">
                Long URL
              </label>
              <Input
                id="url"
                type="url"
                value={url}
                placeholder="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                onChange={(e) => setUrl(e.target.value)}
                className="mt-1 w-full rounded border p-2"
                required
              />
            </CardContent>
            <CardContent>
              <label htmlFor="slug" className="block font-medium">
                Custom Slug
              </label>
              <Input
                id="slug"
                type="text"
                placeholder="rickroll"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="mt-1 w-full rounded border p-2"
                required
              />
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                disabled={createLinkMutation.isPending}
                className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
              >
                {createLinkMutation.isPending ? "Processing..." : "Create Link"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {finalLink && (
          <Alert className="mt-8 flex flex-wrap items-center justify-between space-x-4 bg-green-400/10">
            <div>
              <AlertTitle className="font-bold">Link Ready!</AlertTitle>
              <AlertDescription>
                <a
                  href={`https://link.himafiitb.com/${finalLink.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all font-mono text-foreground hover:underline"
                >{`https://link.himafiitb.com/${finalLink.slug}`}</a>
                <p className="break-all text-sm text-gray-500">
                  Redirects to: {finalLink.url}
                </p>
              </AlertDescription>
            </div>
            <div className="ml-auto flex-shrink-0 rounded-lg bg-white p-2">
              <QRCodeSVG
                value={`https://link.himafiitb.com/${finalLink.slug}`}
                size={80}
              />
            </div>
          </Alert>
        )}
      </div>

      {/* Overwrite Confirmation Modal */}
      <Dialog open={showOverwriteModal} onOpenChange={setShowOverwriteModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Overwrite</DialogTitle>
            <DialogDescription>
              The slug{" "}
              <span className="rounded bg-gray-200 px-1 font-mono">
                {pendingLink?.slug}
              </span>{" "}
              already exists.
            </DialogDescription>
          </DialogHeader>
          {existingUrl && (
            <div className="my-4 rounded border border-border bg-muted/50 p-3">
              <p className="text-sm text-muted-foreground">
                It currently points to:
              </p>
              <p className="break-all font-mono text-sm text-foreground">
                {existingUrl}
              </p>
            </div>
          )}
          <p>Do you want to overwrite it with your new URL?</p>
          <DialogFooter>
            <Button onClick={handleCancelOverwrite} variant="outline">
              Cancel
            </Button>

            <Button
              onClick={handleConfirmOverwrite}
              disabled={createLinkMutation.isPending}
              variant="destructive"
            >
              {createLinkMutation.isPending ? "Overwriting..." : "Overwrite"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
