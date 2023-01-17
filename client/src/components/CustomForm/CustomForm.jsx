import {Flex, Box, Heading, FormControl, FormLabel, Input, Button, Text} from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import {PasswordInput} from "./PasswordInput";
import axios from "axios";
import {useId} from "react";

export const CustomForm = ({type, user, setUser}) => {

    const id = useId()

    const handleChange = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const registerSubmit = () => {
        axios.post(`http://localhost:3001/register`, user)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })
    }

    const loginSubmit = () => {
        axios.post(`http://localhost:3001/login`, user)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })

    }

    return (
        <Flex  direction='column' w='100%' h='100%' justifyContent='center' alignItems='center'>
            <Heading as='h2' size='xl'>{type === "registration" ? "Registration" : "Login"}</Heading>
            <Box mt={3}>
                <FormControl>
                    <FormLabel >Email address</FormLabel>
                    <Input id={`${id}e`} mb={4} type='email' name="email" onChange={handleChange}/>
                    <PasswordInput handleChange={handleChange} id={`${id}p`}/>
                    <Button colorScheme='blue' type='submit' my={4} onClick={type === "registration" ? registerSubmit : loginSubmit}>Submit</Button>
                </FormControl>
                {type === "registration" ? <Link to="/loginform"><Text fontSize="md">Sign in</Text></Link> : ""}
            </Box>
        </Flex>
    );
};

