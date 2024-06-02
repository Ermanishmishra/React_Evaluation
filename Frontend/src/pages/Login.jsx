import { Box, Heading, VStack,Input, Container,Button } from "@chakra-ui/react";


export default function Login(){
    
    function handelClick(){

    }

    return <Box>
        <Heading>Login pages</Heading>
        <Container>
        <VStack>
            <Input placeholder='Enter Email' size='md' />
            <Input placeholder='Enter Password' size='md' />
            <Button colorScheme='blue' onClick={handelClick}>Login</Button>
        </VStack>
       
        </Container>
    </Box>
}