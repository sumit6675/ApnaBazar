import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  Center,
  useToast,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { backendLink } from "../backendLink";
import Sidebar from "../Componets/Sidebar";

export default function ProfilePage() {
  const { email, name } = useSelector((store) => store.AuthManager);
  const [phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const toast = useToast();
  useEffect(() => {
    fetch(`${backendLink}/users?email=${email}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setPhone(res.phone);
        setCity(res.City);
        setPincode(res.Pincode);
      });
  }, [email, flag]);
  const handleEditProfile = () => {
    const payload = {
      phone,
      City,
      pincode,
      addressName: address,
      state,
    };
    fetch(`${backendLink}/users/updateuser?id=${data._id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast({
          title: `Your Profile is Updated`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setFlag(!flag);
      });
  };
  return (
    <Box
      display={{
        lg: "flex",
        md: "flex",
      }}
      w="100%"
      justifyContent={{
        lg:"space-evenly",
        md:"space-evenly"
      }}
    >
      <Sidebar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        w="88%"
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            User Profile Edit
          </Heading>
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar
                  size="xl"
                  src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                ></Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
              defaultValue={name}
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="Enter Phone Number"
              _placeholder={{ color: "gray.500" }}
              type="text"
              defaultValue={data.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              defaultValue={email}
            />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="Enter Your  Address"
              _placeholder={{ color: "gray.500" }}
              type="text"
              defaultValue={data.addressName}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <FormControl id="City" isRequired>
            <FormLabel>City</FormLabel>
            <Input
              placeholder="Enter Your City Name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              defaultValue={data.City}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
          <FormControl id="State" isRequired>
            <FormLabel>State</FormLabel>
            <Input
              placeholder="Enter Your State Name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              defaultValue={data.state}
              onChange={(e) => setState(e.target.value)}
            />
          </FormControl>
          <FormControl id="pincode" isRequired>
            <FormLabel>Zpi Code</FormLabel>
            <Input
              placeholder="Enter Your Area Pin Code"
              _placeholder={{ color: "gray.500" }}
              type="text"
              defaultValue={data.pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleEditProfile}
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
            >
              Edit Profile
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

// export default ProfilePage;
