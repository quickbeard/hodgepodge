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
import { useUser } from "@auth0/nextjs-auth0/client";

export default function UserProfile() {
  const { user } = useUser();
  let name: string | undefined = "";
  let src: string | undefined = "";
  if (user) {
    name = user.name === null ? undefined : user.name;
    src = user.picture === null ? undefined : user.picture;
  }

  return (
    user && (
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar name={name} src={src} size={"sm"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Upload Avatar</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuDivider />
            <MenuItem>
              <Link href="/api/auth/logout">Sign Out</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    )
  );
}
