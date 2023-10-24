import { Button } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function LoginButton() {
  const { status } = useSession();

  return (
    status !== "authenticated" && (
      <Button
        as={"a"}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"pink.400"}
        size={"sm"}
        href={"/api/auth/signin"}
        _hover={{
          bg: "pink.300",
        }}
      >
        Login
      </Button>
    )
  );
}
