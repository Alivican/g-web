"use client";

import { signIn, getProviders } from "next-auth/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import type { ClientSafeProvider } from "next-auth/react";

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center bg-gradient-to-b from-primary/10 to-transparent text-center">
      <div className="w-full max-w-md px-4">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
              <FaLock className="text-2xl text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Masuk ke HIMAFI ITB
            </CardTitle>
            <CardDescription>
              Silakan masuk untuk mengakses platform HIMAFI ITB
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {providers &&
              Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <Button
                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                  >
                    <div
                      className="mr-2 rounded-full bg-white"
                      style={{ padding: "1px" }}
                    >
                      <FcGoogle
                        style={{
                          fontSize: "24px",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                    </div>
                    Masuk dengan {provider.name}
                  </Button>
                </div>
              ))}

            {/* <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Dengan masuk, Anda menyetujui{" "}
                <span className="cursor-pointer text-blue-400 hover:underline">
                  Syarat & Ketentuan
                </span>{" "}
                dan{" "}
                <span className="cursor-pointer text-blue-400 hover:underline">
                  Kebijakan Privasi
                </span>{" "}
                kami.
              </p>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
