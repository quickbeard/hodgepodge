import type { Metadata } from "next";
import "./globals.css";

import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { Providers } from "./providers";
import SidebarWithHeader from "@/components/navigation/SidebarWithHeader";

export const metadata: Metadata = {
  title: "Quickbeard",
  description: "For research purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="img/favicon.ico" sizes="any" />
      </head>
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
