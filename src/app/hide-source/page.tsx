import { Box } from "@chakra-ui/react";

import UploadButtonModal from "@/components/buttons/UploadButtonModal";

export default function HideSource() {
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <UploadButtonModal></UploadButtonModal>
    </Box>
  );
}
