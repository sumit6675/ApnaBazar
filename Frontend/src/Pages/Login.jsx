import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Social from "../Componets/SocialMediaLoginSignup";
import { login } from "../Redux/Auth/auth.action";

function Login() {
  const [loginCreds, setLoginCreds] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const { isAuth } = useSelector((store) => store.AuthManager);
  const navigate = useNavigate();
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
      toast({
        title: "Login Sucsess",

        description: "We've login to your account for you.",

        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [isAuth, navigate, toast]);

  return (
    <Flex
      w="100%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={["3xl","3xl","4xl","4xl","4xl","4xl"]}>Sign in to your account</Heading>
          <NavLink to="/signup">
            <Text fontSize={"lg"} color={"gray.600"}>
              New To Website Please
              <Link color={"blue.400"}> Signup</Link> ✌️
            </Text>
          </NavLink>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter Email"
                onChange={hanldeChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Enter Password..."
                onChange={hanldeChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Heading textAlign={"center"} size="md">
              OR
            </Heading>
            <Social />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
