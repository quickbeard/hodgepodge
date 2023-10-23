import { Box } from "@chakra-ui/react";
import { PayPalButton } from "@/components/PayPal";

export default function Home() {
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <PayPalButton></PayPalButton>
    </Box>
  );
}
