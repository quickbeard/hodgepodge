import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { Providers } from "./providers";
import SidebarWithHeader from "@/components/navigation/SidebarWithHeader";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
          <Providers>
            <SidebarWithHeader>{children}</SidebarWithHeader>
          </Providers>
        </body>
      </UserProvider>
    </html>
  );
}
