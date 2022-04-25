import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export const Login = () => (
  <Flex width="100%" height="100vh" bgColor="#225843">
    <Container
      width="100%"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack
        bgColor="#fff"
        spacing="8"
        borderWidth={1.5}
        borderColor="#efbcc8"
        borderRadius={10}
        padding={5}
      >
        <Stack spacing="6" justifyContent="center" alignItems="center">
          <Image
            src={require("../../assets/app-logo.png")}
            width="80px"
            height="80px"
            margin={0}
            padding={0}
          />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button
                variant="link"
                color="#225843"
                onClick={() => {
                  window.location.href = "/signup";
                }}
              >
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                borderWidth={1.5}
                borderColor="#a0a0a0"
              />
              <Input
                name="password"
                type={"password"}
                required
                placeholder="Password"
                borderWidth={1.5}
                borderColor="#a0a0a0"
              />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultIsChecked>Remember me</Checkbox>
              <Button variant="link" color="#225843" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button bgColor="#225843" color="#efbcc8">
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  </Flex>
);
