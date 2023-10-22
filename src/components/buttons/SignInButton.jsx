import { Button, Input } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function SignInButton() {
  const { user } = useUser();

  return (
    !user && (
      <Button
        as={"a"}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"pink.400"}
        size={"sm"}
        href={"/api/auth/login"}
        _hover={{
          bg: "pink.300",
        }}
      >
        Sign In
      </Button>
    )
  );
}
