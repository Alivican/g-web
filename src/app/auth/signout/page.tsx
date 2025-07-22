"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

export default function SignOutPage() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center bg-gradient-to-b from-primary/10 to-transparent text-center">
      <div className="w-full max-w-md px-4">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-400 to-orange-500">
              <FaSignOutAlt className="text-2xl text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Keluar dari HIMAFI ITB
            </CardTitle>
            <CardDescription>
              Apakah Anda yakin ingin keluar dari akun Anda?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={handleSignOut}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
              size="lg"
            >
              <FaSignOutAlt className="mr-2" />
              Ya, Keluar
            </Button>

            <Link href="/" className="block">
              <Button variant="outline" className="w-full" size="lg">
                Batal
              </Button>
            </Link>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Anda akan diarahkan ke halaman utama setelah keluar.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
