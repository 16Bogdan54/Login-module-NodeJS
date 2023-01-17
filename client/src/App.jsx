import {Box, Center, Text, Container} from "@chakra-ui/react";
import {Registration} from "./components/pages/registration/Registration";
import {Login} from "./components/pages/login/Login";

const App = () => {
  return (
    <Box w="100%" h="100vh">
       <Center bg='tomato' h="15vh" w='100%'>
            <Text fontSize='4xl' as='b'>A login system test</Text>
       </Center>
        <Container p={10}>
           <Registration/>
            <Login/>
        </Container>
    </Box>
  );
}

export default App;
