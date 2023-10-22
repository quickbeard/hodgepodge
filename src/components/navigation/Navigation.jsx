"use client";
import { Box, useColorModeValue } from "@chakra-ui/react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function SidebarWithHeader() {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Sidebar />
      <Navbar />
      <Box ml={{ base: 0, md: 60 }} p="4">
        Hello
      </Box>
    </Box>
  );
}
