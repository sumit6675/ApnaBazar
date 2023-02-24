import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  useMediaQuery,
  VStack,
  MenuItem,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FcSearch } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrLogin } from "react-icons/gr";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Auth/auth.action";

function Navbar() {
  const { isAuth, name, email } = useSelector((store) => store.AuthManager);
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)");
  const [islesserThan740px] = useMediaQuery("(max-width: 750px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const btnRef = React.useRef();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast({
      title: "Logout  success.",
      description: "We will miss you 😭",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  if (isLargerThan1100) {
    return (
      <Box>
        <Flex
          w="100%"
          justifyContent="space-around"
          alignItems={"center"}
          m="auto"
          bg="rgb(195,194,189)"
          p="10px"
          px="3%"
          gap="30px"
        >
          <Link to="/">
            <Box>
              <Image
                src="https://iili.io/HE2SHlt.gif"
                alt="ApnaBazarLogo"
                border="0"
                w="190px"
                h="120px"
              />
            </Box>
          </Link>
          <Flex
            bg="white"
            borderRadius={"20px"}
            w="700px"
            p="5px"
            m="auto"
            textAlign={"center"}
          >
            <Input
              border={"none"}
              fontSize={"18px"}
              borderRadius="full"
              fontWeight="bold"
              placeholder="Find Your Favorite Product"
            />
            <FcSearch fontSize={"42px"} />
          </Flex>
          <Flex cursor={"pointer"}></Flex>
          <Link to="/cart">
            <Flex cursor={"pointer"}>
              <BsFillCartFill color="black" fontSize="24px" />
              <Heading
                cursor={"pointer"}
                fontSize={"24px"}
                color="black"
                _hover={{ textDecoration: "underline" }}
              >
                Cart
              </Heading>
            </Flex>
          </Link>

          {!isAuth ? (
            <Flex gap="30px">
              <Flex cursor={"pointer"} p="2">
                <GrLogin color="black" fontSize="24px" />
                <Link to="login">
                  <Heading
                    cursor={"pointer"}
                    fontSize={"24px"}
                    color="black"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Login
                  </Heading>
                </Link>
              </Flex>
              <Flex cursor={"pointer"} p="2">
                <RiLoginCircleFill color="black" fontSize="24px" />
                <Link to="/signup">
                  <Heading
                    cursor={"pointer"}
                    fontSize={"24px"}
                    color="black"
                    _hover={{ textDecoration: "underline" }}
                  >
                    SignUp
                  </Heading>
                </Link>
              </Flex>
            </Flex>
          ) : (
            <Menu>
              <MenuButton
                color="black"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Hi {name}
              </MenuButton>
              {email !== "admin@gmail.com" ? (
                <MenuList>
                  <MenuItem>
                    <NavLink to="/profile">My Profile</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/Orders">My Order</NavLink>
                  </MenuItem>
                  <MenuItem>My Address</MenuItem>
                  <Link to="/Wishlist">
                    <MenuItem>My Wishlist</MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <MenuItem>
                    <NavLink to="/admin/products">Admin Page</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              )}
            </Menu>
          )}
        </Flex>

        <Flex
          w="100%"
          textAlign={"center"}
          justifyContent="space-between"
          alignItems={"center"}
          m="auto"
          bg="blue"
          px="3%"
        >
          <Button
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
            bg="blue"
            border={"none"}
          >
            <NavLink to={"/phone"}> Mobiles</NavLink>
          </Button>

          <Button
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
            bg="blue"
            border={"none"}
          >
            <NavLink to="/laptop">Laptops</NavLink>
          </Button>

          <Button
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
            bg="blue"
            border={"none"}
          >
            <NavLink to="/men">Men Fashion</NavLink>
          </Button>

          <Button
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
            bg="blue"
            border={"none"}
          >
            <NavLink to="/women">Women Fashion</NavLink>
          </Button>

          <Button
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
            bg="blue"
            border={"none"}
          >
            <NavLink to="/home">Home Appliances</NavLink>
          </Button>
        </Flex>
      </Box>
    );
  } else if (isLargerThan750px) {
    return (
      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        bg="rgb(195,194,189)"
        p="20px"
        px="2%"
        gap="10px"
      >
        <Link to="/">
          <Box>
            <Image src="ApnaBazarLogo.gif" alt="logo" w="150px" h="100px" />
          </Box>
        </Link>
        <Flex
          bg="white"
          borderRadius={"20px"}
          w="400px"
          p="5px"
          m="auto"
          textAlign={"center"}
        >
          <Input
            border={"none"}
            fontSize={"15px"}
            borderRadius="full"
            fontWeight="bold"
            placeholder="Find Your Favorite Product"
          />
          <FcSearch fontSize={"42px"} />
        </Flex>
        {!isAuth ? (
          <Flex cursor={"pointer"} p="2">
            <GrLogin color="black" fontSize="24px" />
            <Link to="login">
              <Heading
                cursor={"pointer"}
                fontSize={"24px"}
                color="black"
                _hover={{ textDecoration: "underline" }}
              >
                Login
              </Heading>
            </Link>
          </Flex>
        ) : (
          <Menu>
            <MenuButton
              color="black"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Hi {name}
            </MenuButton>
            {email !== "admin@gmail.com" ? (
              <MenuList>
                <MenuItem>
                  <NavLink to="/profile">My Profile</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/Orders">My Order</NavLink>
                </MenuItem>
                <MenuItem>My Address</MenuItem>
                <Link to="/Wishlist">
                  <MenuItem>My Wishlist</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            ) : (
              <MenuList>
                <MenuItem>
                  <NavLink to="/admin/products">Admin Page</NavLink>
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            )}
          </Menu>
        )}
        <Box mx="20px">
          <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <GiHamburgerMenu fontSize={"55px"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="teal.300">
              <DrawerCloseButton />
              <DrawerHeader fontSize={"22px"} fontWeight="bold">
                Select Product Category
              </DrawerHeader>

              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignContent="center"
                  gap="25px"
                  m="auto"
                  p="auto"
                >
                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to={"/phone"}> Mobiles</NavLink>
                  </Heading>

                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to="/laptop">Laptops</NavLink>
                  </Heading>

                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to="/men">Men Fashion</NavLink>
                  </Heading>

                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to="/women">Women Fashion</NavLink>
                  </Heading>

                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to="/home">Home Appliances</NavLink>
                  </Heading>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    );
  } else if (islesserThan740px) {
    return (
      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        bg="rgb(195,194,189)"
        p="20px"
        px="2%"
        gap="10px"
      >
        <Link to="/">
          <Box>
            <Image src="ApnaBazarLogo.gif" alt="logo" w="100px" h="80px" />
          </Box>
        </Link>
        <Flex
          bg="white"
          borderRadius={"20px"}
          w="400px"
          p="5px"
          m="auto"
          textAlign={"center"}
        >
          <Input
            border={"none"}
            fontSize={"15px"}
            borderRadius="full"
            fontWeight="bold"
            placeholder="Find Your Favorite Product"
          />
          <FcSearch fontSize={"42px"} />
        </Flex>
        <Box mx="20px">
          <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <GiHamburgerMenu fontSize={"55px"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="red.300">
              <DrawerCloseButton />
              <DrawerHeader fontSize={"22px"} fontWeight="bold">
                Select Product Category
              </DrawerHeader>
              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignContent="center"
                  gap="25px"
                  m="auto"
                  p="auto"
                >
                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to={"/phone"}> Mobiles</NavLink>
                  </Heading>

                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to="/laptop">Laptops</NavLink>
                  </Heading>

                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to="/men">Men Fashion</NavLink>
                  </Heading>

                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to="/women">Women Fashion</NavLink>
                  </Heading>

                  <Heading
                    cursor={"pointer"}
                    fontSize={"17px"}
                    color="white"
                    _hover={{ bg: "red", textDecoration: "underline" }}
                  >
                    <NavLink to="/home">Home Appliances</NavLink>
                  </Heading>
                  {isAuth && (
                    <VStack>
                      <Heading
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="white"
                        _hover={{ bg: "red", textDecoration: "underline" }}
                      >
                        Hi {name}
                      </Heading>
                      <Heading
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="white"
                        _hover={{ bg: "red", textDecoration: "underline" }}
                      >
                        <NavLink to="/profile">My Profile</NavLink>
                      </Heading>
                      <Heading
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="white"
                        _hover={{ bg: "red", textDecoration: "underline" }}
                      >
                        <NavLink to="/Orders">My Order</NavLink>
                      </Heading>
                      <Heading
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="white"
                        _hover={{ bg: "red", textDecoration: "underline" }}
                      >
                        My Address
                      </Heading>
                      <Heading
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="white"
                        _hover={{ bg: "red", textDecoration: "underline" }}
                      >
                        <NavLink to="/Wishlist">My Wishlist</NavLink>
                      </Heading>
                      <Heading
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="white"
                        _hover={{ bg: "red", textDecoration: "underline" }}
                        onClick={handleLogout}
                      >
                        Logout
                      </Heading>
                    </VStack>
                  )}
                  {!isAuth && (
                   
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}
                        color="black"
                        _hover={{ textDecoration: "underline" }}
                      >
                        <NavLink to="/Wishlist">Login</NavLink>
                      </Heading>
                    
                  )}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    );
  }
}

export default Navbar;
