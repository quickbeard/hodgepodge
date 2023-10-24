"use client";
import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function SidebarWithHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <Sidebar />
        <Navbar />
        {children}
      </Box>
    </SessionProvider>
  );
}
