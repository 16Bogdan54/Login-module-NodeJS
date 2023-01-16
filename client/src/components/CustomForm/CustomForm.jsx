import {Flex, Box, Heading, FormControl, FormLabel, Input, Button} from "@chakra-ui/react";
import {PasswordInput} from "./PasswordInput";

export const CustomForm = () => {
    return (
        <Flex direction='column' w='100%' h='100%' justifyContent='center' alignItems='center'>
            <Heading as='h2' size='xl'>Registration</Heading>
            <Box mt={3}>
                <FormControl>
                    <FormLabel >Email address</FormLabel>
                    <Input  mb={4} type='email' />
                    <PasswordInput/>
                    <Button colorScheme='blue' type='submit' my={4}>Submit</Button>
                </FormControl>
            </Box>
        </Flex>
    );
};

