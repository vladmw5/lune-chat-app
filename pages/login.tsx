import Head from "next/head";
import { MoonIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Center h="100vh">
        <Stack
          align="center"
          bgColor="gray.600"
          py={10}
          px={14}
          rounded="3xl"
          boxShadow="lg"
          spacing={12}
        >
          <Stack align="center">
            <Text fontSize="3xl" as="b" color="#fff">
              Lune Chat
            </Text>
            <Box
              p={4}
              bgGradient="linear(to-tl, #5b28ca, #ff0044)"
              w="fit-content"
              rounded="3xl"
              boxShadow="md"
            >
              <MoonIcon w="100px" h="100px" color="white" />
            </Box>
          </Stack>

          <Button boxShadow="md">Sign In with Google</Button>
        </Stack>
      </Center>
    </>
  );
};

export default Login;
