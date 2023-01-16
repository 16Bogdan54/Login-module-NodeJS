import {Box, Center, Text, Container} from "@chakra-ui/react";
import {CustomForm} from './components/CustomForm/CustomForm'

// main component
const App = () => {
  return (
    <Box w="100%" h="100vh">
       <Center bg='tomato' h="15vh" w='100%'>
            <Text fontSize='4xl' as='b'>A login system test</Text>
       </Center>
        <Container>
            <Center>
                <CustomForm/>
            </Center>
        </Container>
    </Box>
  );
}

export default App;
