import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export default function SearchBar() {
  return (
    <InputGroup w="30rem">
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.500" />
      </InputLeftElement>
      <Input type="text" placeholder="Search" />
      <InputRightElement width="5rem">
        <Button
          as={"a"}
          h="1.75rem"
          w="4rem"
          size="sm"
          bg={useColorModeValue("gray.300", "gray.700")}
          _hover={{
            bg: useColorModeValue("gray.200", "gray.600"),
            cursor: "pointer",
          }}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
