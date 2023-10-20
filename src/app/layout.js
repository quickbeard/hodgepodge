import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

import { SidebarWithHeader } from "@/components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quickbeard",
  description: "For research purposes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="img/favicon.ico" sizes="any" />
      </head>

      <body>
        <Providers>
          <SidebarWithHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
