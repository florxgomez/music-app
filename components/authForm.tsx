import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import { LinkBox, LinkOverlay } from "@chakra-ui/layout";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const signinMode = mode === "signin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await auth(mode, { email, password, name, lastName });
    setLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="30px" bg="gray.900" borderRadius="6px">
          <Box marginBottom="20px">
            <form onSubmit={handleSubmit}>
              {!signinMode && (
                <Box>
                  <Input
                    placeholder="First name"
                    type="input"
                    onChange={(e) => setName(e.target.value)}
                    marginBottom="10px"
                  />
                  <Input
                    placeholder="Last name"
                    type="input"
                    onChange={(e) => setLastName(e.target.value)}
                    marginBottom="10px"
                  />
                </Box>
              )}
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                marginBottom="10px"
              />
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                marginBottom="20px"
              />

              <Button
                type="submit"
                bg="green.500"
                isLoading={loading}
                sx={{
                  "&:hover": {
                    bg: "green.300",
                  },
                }}
              >
                {signinMode ? "Sign In" : "Sign Up"}
              </Button>
            </form>
          </Box>

          {signinMode && (
            <LinkBox>
              <NextLink
                href={{
                  pathname: "/signup",
                }}
                passHref
              >
                <LinkOverlay>Or create a new account</LinkOverlay>
              </NextLink>
            </LinkBox>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
