"use client";

import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import SidebarContent from "./Sidebar";
import Navbar from "./Navbar";

export const SidebarWithHeader = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Navbar />

      <Box ml={{ base: 0, md: 60 }} p="4">
        <a href="/api/auth/login">Login</a>
        <a href="/api/auth/logout">Logout</a>
      </Box>
    </Box>
  );
};
