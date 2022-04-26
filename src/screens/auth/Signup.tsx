import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
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
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { signup } from "../../helpers/auth";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (email && password) {
      signup(email, password, setLoading, setError);
    }
  };

  return (
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
                Sign up for a new account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Already have an account?</Text>
                <Button
                  variant="link"
                  color="#225843"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  Log in
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <Input
                  name="password"
                  type={"password"}
                  placeholder="Password"
                  required
                  borderWidth={1.5}
                  borderColor="#a0a0a0"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <Input
                  name="password"
                  type={"password"}
                  placeholder="Confirm Password"
                  required
                  borderWidth={1.5}
                  borderColor="#a0a0a0"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Stack>

              {error && (
                <Text color="red" alignSelf="center" justifySelf="center">
                  {error}
                </Text>
              )}

              <Stack spacing="6">
                <Button
                  bgColor="#225843"
                  color="#efbcc8"
                  onClick={handleSignup}
                  isLoading={loading}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};
