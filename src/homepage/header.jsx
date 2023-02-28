import React, { useEffect} from "react";
import { Center, ChakraProvider, Heading, Image, VStack } from '@chakra-ui/react'
import SocialMediaButtons from "../components/buttons";
import theme from '../styles/theme'

export default function Header() {
    useEffect(() => {
      document.title = "Endue";  
    }, []);
    return (
      <ChakraProvider theme={theme}>
        <div>
          <Center h='350px'>
            <VStack spacing={2}>
              <Image
                objectFit='cover'
                src='/endue-logo.svg'
                alt='Endue Logo'
              />
              <Heading as='h2' size='md' style={{ fontWeight: 'normal', color: 'MidnightBlue' }}>Launching soon, stay tuned!</Heading>
            </VStack>
          </Center>

          <Center h='0px'>
            <SocialMediaButtons></SocialMediaButtons>
          </Center>
        </div>
      </ChakraProvider>
    )
}