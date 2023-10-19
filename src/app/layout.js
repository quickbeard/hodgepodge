import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "./theme-provider";
import Sidebar from "../components/Sidebar";

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

      <body className={"${inter.className} bg-slate-50 dark:bg-[#0d1117]"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Sidebar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
