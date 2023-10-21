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
            <Avatar name={user.name} src={user.picture} size={"sm"} />
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
