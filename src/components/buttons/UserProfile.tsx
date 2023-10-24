import {
  Flex,
  Avatar,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function UserProfile() {
  const { data: session, status } = useSession();
  let name: string | undefined = "";
  let image: string | undefined = "";
  if (status === "authenticated") {
    name = session.user.name === null ? undefined : session.user.name;
    image = session.user.image === null ? undefined : session.user.image;
  }

  return (
    status === "authenticated" && (
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar name={name} src={image} size={"sm"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Your profile</MenuItem>
            <MenuItem>Upload avatar</MenuItem>
            <MenuDivider />
            <MenuItem>
              <Link href="/api/auth/signout">Log out</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    )
  );
}
