import {Flex, Box, Heading, FormControl, FormLabel, Input, Button} from "@chakra-ui/react";
import {PasswordInput} from "./PasswordInput";
import axios from "axios";

export const CustomForm = ({type, user, setUser}) => {

    const handleChange = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
        console.log("works")
    }

    const registerSubmit = () => {
        axios.post(`https://localhost:3001/register`, user)
    }

    return (
        <Flex  direction='column' w='100%' h='100%' justifyContent='center' alignItems='center'>
            <Heading as='h2' size='xl'>{type === "registration" ? "Registration" : "Login"}</Heading>
            <Box mt={3}>
                <FormControl>
                    <FormLabel >Email address</FormLabel>
                    <Input  mb={4} type='email' name="email" onChange={handleChange}/>
                    <PasswordInput handleChange={handleChange}/>
                    <Button colorScheme='blue' type='submit' my={4} onClick={registerSubmit}>Submit</Button>
                </FormControl>
            </Box>
        </Flex>
    );
};

