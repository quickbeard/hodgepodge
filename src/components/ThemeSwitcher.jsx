"use client";
import { Button, useColorMode } from "@chakra-ui/react";

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </header>
  );
}
