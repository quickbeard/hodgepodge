import "@/styles/globals.css";

import type { Metadata } from "next";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { Providers } from "./providers";
import SidebarWithHeader from "@/components/navigation/SidebarWithHeader";

export const metadata: Metadata = {
  title: "Quickbeard",
  description: "For research purposes",
  icons: [{ rel: "icon", url: "img/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Providers>
            <SidebarWithHeader>{children}</SidebarWithHeader>
          </Providers>
        </body>
      </UserProvider>
    </html>
  );
}
