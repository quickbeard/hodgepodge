"use client";

import "@/styles/FileUpload.css";

import {
  type ButtonProps,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { type ChangeEvent, useState } from "react";

type UploadButtonModalProps = {
  //   processFile: (file: File) => void;
  buttonProps?: ButtonProps;
  buttonText?: string;
  defaultDisplayText?: JSX.Element;
  noFilesDisplayText?: JSX.Element;
  modalTitle?: string;
  acceptFiles?: string;
};

const DefaultDisplayText = (
  <Text>
    Please drag and drop your file here <br /> or click to upload a file
  </Text>
);

const NoFilesDisplayText = (
  <>
    <Text color="red">No files chosen!</Text>
    {DefaultDisplayText}
  </>
);

export default function UploadButtonModal({
  //   processFile,
  buttonProps,
  buttonText = "Upload",
  defaultDisplayText = DefaultDisplayText,
  noFilesDisplayText = NoFilesDisplayText,
  modalTitle = "Upload a file",
  acceptFiles,
}: UploadButtonModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [displayText, setDisplayText] =
    useState<JSX.Element>(defaultDisplayText);
  const [dragActive, setDragActive] = useState(false);

  const [fileData, setFileData] = useState<File | null>(null);

  function previewFilename(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      setDisplayText(<p>{file.name}</p>);
    };
    reader.readAsDataURL(file);
  }

  const onModalClose = () => {
    setFileData(null);
    setDisplayText(defaultDisplayText);
    onClose();
  };

  const handleDrag = function (
    e: React.DragEvent<HTMLFormElement> | React.DragEvent<HTMLDivElement>,
  ) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (!file) return;
    setFileData(file);
    previewFilename(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (!file) return;
    setFileData(file);
    previewFilename(file);
  };

  const handleFileUpload = () => {
    if (!fileData) {
      setDisplayText(noFilesDisplayText);
      return;
    }
    onClose();
    // processFile(fileData);
    setFileData(null);
    setDisplayText(defaultDisplayText);
  };

  return (
    <HStack gap="4">
      <Button {...buttonProps} onClick={onOpen}>
        {buttonText}
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalBody>
            <FormControl
              height="11rem"
              width="25rem"
              maxWidth="100%"
              textAlign="center"
              position="relative"
              onDragEnter={handleDrag}
            >
              <Input
                id="input-file-upload"
                multiple
                accept={acceptFiles}
                type="file"
                onChange={handleFileChange}
              />
              <FormLabel
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderWidth="2px"
                borderRadius="1rem"
                borderStyle="dashed"
                borderColor={useColorModeValue("gray.300", "gray.500")}
                backgroundColor={useColorModeValue(
                  dragActive ? "white" : "gray.50",
                  dragActive ? "gray.800" : "gray.600",
                )}
                cursor="pointer"
                htmlFor="input-file-upload"
              >
                {displayText}
              </FormLabel>
              {dragActive && (
                <Box
                  position="absolute"
                  width="100%"
                  height="100%"
                  borderRadius="1rem"
                  top="0px"
                  right="0px"
                  bottom="0px"
                  left="0px"
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                />
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} variant="gray" onClick={onModalClose}>
              Cancel
            </Button>
            <Button
              isDisabled={!fileData}
              mr={0}
              variant="primary"
              onClick={handleFileUpload}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
}
