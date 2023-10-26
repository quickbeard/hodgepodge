import { type IconType } from "react-icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSession } from "next-auth/react";

import SearchBar from "./SearchBar";
import SocialButton from "../buttons/SocialButton";
import ThemeSwitcher from "../buttons/ThemeSwitcher";
import LoginButton from "../buttons/LoginButton";
import UserProfile from "../buttons/UserProfile";

interface NavItem {
  label: string;
  iconRight?: IconType;
  iconLeft?: IconType;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Utilities",
    iconLeft: MdKeyboardArrowDown,
    children: [
      {
        label: "Hide Python source",
        subLabel: "Obfuscate and hide Python source code",
        href: "/hide-source",
      },
      {
        label: "Move secrets to Vault",
        subLabel: "Move secrets from a file to Vault",
        href: "#",
      },
    ],
  },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { status } = useSession();

  return (
    <Box
      ml={{ base: 0, md: 0 }}
      borderBottom="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      alignContent={"center"}
    >
      <Flex
        bg={useColorModeValue("gray.50", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Stack direction={"row"} spacing={7}>
          <Stack direction={"row"} spacing={2} align={"center"}>
            <Link href="/">
              <Image src="img/logo.png" alt="Logo" boxSize="35px" />
            </Link>
            <Text
              as="a"
              href="/"
              fontSize="xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
              Quickbeard
            </Text>
          </Stack>
          <IconButton
            onClick={onToggle}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Stack>

        <Stack
          flex={{ base: 1 }}
          justify={"flex-end"}
          direction={"row"}
          align={"center"}
          spacing={6}
        >
          <SearchBar />
          <Flex display={{ base: "none", md: "flex" }} ml={1} align={"center"}>
            <DesktopNav />
          </Flex>
        </Stack>

        <Stack
          flex={{ base: 1, md: 0 }}
          ml={0}
          align={"center"}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
        >
          <SocialButton name="github" href="https://github.com/minhn4" />
          <SocialButton name="linkedin" href="/" />
          <ThemeSwitcher />
          {status !== "authenticated"} ? <LoginButton /> : <UserProfile />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                alignContent={"center"}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.iconRight && (
                  <Icon mr="2" paddingBottom={"2px"} as={navItem.iconRight} />
                )}
                {navItem.label}
                {navItem.iconLeft && (
                  <Icon mr="2" paddingBottom={"2px"} as={navItem.iconLeft} />
                )}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children?.map((child) => (
            <Box as="a" key={child.label} py={2} href={child.href}>
              {child.label}
            </Box>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
