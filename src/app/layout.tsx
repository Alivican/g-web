import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

import { Toaster } from "~/components/ui/sonner";
import { TopNav } from "~/components/topnav";
import { api } from "~/trpc/server";
import { ThemeProvider } from "~/components/theme-provider";
import { SessionProvider } from "next-auth/react";

import { auth } from "~/server/auth";

export const metadata: Metadata = {
  title: "GAMAIS ITB",
  description: "Keluarga Mahasiswa Islam (GAMAIS) Institut Teknologi Bandung",
  icons: [{ rel: "icon", url: "/LOGO GAMAIS.png" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <NextSSRPlugin
        /**
         * The `extractRouterConfig` will extract **only** the route configs
         * from the router to prevent additional information from being
         * leaked to the client. The data passed to the client is the same
         * as if you were to fetch `/api/uploadthing` directly.
         */
        routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>
            <TRPCReactProvider>
              <TopNav />
              {children}
            </TRPCReactProvider>
          </SessionProvider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
