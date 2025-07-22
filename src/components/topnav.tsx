"use client";

import Link from "next/link";
import { api } from "~/trpc/react";
import type { RouterOutputs } from "~/trpc/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";

export function TopNav() {
  const { data: session } = useSession();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");

  const role = session?.user.role ?? "guest"; // Default to 'guest' if no session

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-center self-center bg-background/70 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-8 md:px-20">
      <div className="container flex h-20 items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-16 w-16 items-center justify-center">
              <img
                src="/LOGO GAMAIS.png"
                alt="gamais"
                width={128}
                height={128}
              />
            </div>
            <span className="font-bold max-lg:hidden">GAMAIS ITB</span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="items-center space-x-6 text-sm font-medium max-lg:hidden">
          <Link href="/tentangkami">Tentang Kami</Link>
          <Link href="/events">Events</Link>
          <Link href="/newseditor">News Editor</Link>
          <Link href="/contohabout">[Contoh] About</Link>
          <Link href="/contohfaq">[Contoh] FAQ</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/news">News</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
          {["admin", "member"].includes(role) && (
            <Link href="/link" className="font-semibold text-primary">
              Link shortener
            </Link>
          )}
          {["admin"].includes(role) && (
            <Link href="/admin" className="font-semibold text-primary">
              Admin
            </Link>
          )}
        </nav>

        {/* Right: Search, User, and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Search */}

          {/* User Info */}
          <div className="flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-4">
                <span className="hidden text-sm font-medium md:block">
                  {session.user.name}
                </span>
                <img
                  src={session.user.image ?? ""}
                  alt="User avatar"
                  className="h-8 w-8 rounded-full"
                />
                <Link href="/auth/signout">
                  <Button variant="outline">Sign Out</Button>
                </Link>
              </div>
            ) : (
              <Link href="/api/auth/signin">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <span className="font-bold">HIMAFI ITB</span>
                  </Link>
                  <Link href="/about">About</Link>
                  <Link href="/programs">Programs</Link>
                  <Link href="/news">News</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/faq">FAQ</Link>
                  {["admin", "member"].includes(role) && (
                    <Link
                      href="/link"
                      className="font-semibold text-destructive"
                    >
                      Link shortener
                    </Link>
                  )}
                  {["admin"].includes(role) && (
                    <Link
                      href="/admin"
                      className="font-semibold text-destructive"
                    >
                      Admin
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
