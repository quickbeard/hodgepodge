import { type IconType } from "react-icons";
import {
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
  type BoxProps,
  type FlexProps,
} from "@chakra-ui/react";
import {
  FiHome,
  FiCompass,
  FiShoppingBag,
  FiStar,
  FiSettings,
} from "react-icons/fi";

const LinkItems = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "Check Out", icon: FiShoppingBag, href: "checkout/" },
  { name: "Explore", icon: FiCompass, href: "#" },
  { name: "Favourites", icon: FiStar, href: "#" },
  { name: "Settings", icon: FiSettings, href: "#" },
];

export default function Sidebar() {
  const { isOpen, onClose } = useDisclosure();
  return (
    <>
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
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="5" justifyContent="space-between">
        <Link href="/">
          <Image src="img/logo.png" alt="Logo" boxSize="40px" />
        </Link>
        <Text
          as="a"
          href="/"
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Quickbeard
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  href: string;
  children: string | number;
}

const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};
