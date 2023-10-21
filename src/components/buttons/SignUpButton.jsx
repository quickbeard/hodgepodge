import { Button } from "@chakra-ui/react";

export default function SignUpButton() {
  return (
    <Button
      as={"a"}
      display={{ base: "none", md: "inline-flex" }}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      bg={"pink.400"}
      href={"#"}
      _hover={{
        bg: "pink.300",
      }}
    >
      Sign Up
    </Button>
  );
}
