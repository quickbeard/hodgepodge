import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { Providers } from "./providers";
import SidebarWithHeader from "@/components/navigation/SidebarWithHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Quickbeard",
  description: "For research purposes",
  icons: [{ rel: "icon", url: "favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider headers={headers()}>
          <Providers>
            <SidebarWithHeader>{children}</SidebarWithHeader>
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
