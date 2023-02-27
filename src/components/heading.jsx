import React, { useEffect} from "react";
import { Center, ChakraProvider, Heading, Stack } from '@chakra-ui/react'
import theme from '../styles/theme'

function Header() {
    useEffect(() => {
        document.title = "Endue";  
    }, []);
    return (
        <ChakraProvider theme={theme}>
            <div>
                <Center h='350px'>
                    <Stack spacing={2}>
                        <Heading as='h1' size='2xl'>Endue</Heading>
                        <Heading as='h2' size='md' style={{ fontWeight: 'normal' }}>Launching soon, stay tuned!</Heading>
                    </Stack>
                </Center>
            </div>
        </ChakraProvider>
    )
}

export default Header;
