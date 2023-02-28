import { Center, ChakraProvider, Heading, Text, VStack } from '@chakra-ui/react'
import theme from '../styles/theme'

export default function Body() {
    return (
      <ChakraProvider theme={theme}>
        <div>
          <Center h='400px'>
            <VStack spacing={2}>
              <Heading as='h1' size='xl' style={{ fontWeight: 'normal' }}>About us</Heading>
              <Text fontSize='md'>Building better software for infusion centers. We serve those who serve others.</Text>
            </VStack>
          </Center>
        </div>
      </ChakraProvider>
    )
}