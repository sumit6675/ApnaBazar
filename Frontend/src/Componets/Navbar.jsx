import {
  Box,
  Divider,
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
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FcSearch } from "react-icons/fc";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrLogin } from "react-icons/gr";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)");
  const [islesserThan740px] = useMediaQuery("(max-width: 750px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let isAuth = false;
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
              <Image src="ApnaBazarLogo.gif" alt="logo" w="190px" h="120px" />
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
                _hover={{textDecoration: "underline" }}
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
              <Link to="login">
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
                Hi
              </MenuButton>
              <MenuList>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>My Order</MenuItem>
                <MenuItem>My Address</MenuItem>
                <Link to="whishlist">
                  {" "}
                  <MenuItem>My Wishlist</MenuItem>
                </Link>
                <MenuItem>Logout</MenuItem>
              </MenuList>
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
            <NavLink to="/laptop">
            Laptops
            </NavLink>
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
           <NavLink to="/men">
           Men Fashion
           </NavLink>
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
            <NavLink to="/women">
           Women Fashion
           </NavLink>
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
           <NavLink to="/home">
           Home Appliances
           </NavLink>
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
            <Image src="ApnaBazarLogo.gif" alt="logo" w="190px" h="120px" />
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
        <Link to="/cart">
          <Flex cursor={"pointer"}>
            <BsFillCartFill color="black" fontSize="30px" />
            <Heading
              cursor={"pointer"}
              fontSize={"30px"}
              color="black"
              _hover={{ bg: "red", textDecoration: "underline" }}
            >
              Cart
            </Heading>
          </Flex>
        </Link>
        {/* {!isAuth ? (
            <Flex cursor={"pointer"}>
              <GrLogin color="white" fontSize="20px" />
              <Link to="login">
                <Heading
                  cursor={"pointer"}
                  fontSize={"17px"}
                  color="white"
                  _hover={{ bg: "red", textDecoration: "underline" }}
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
                Hi 
              </MenuButton>
              <MenuList>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>My Order</MenuItem>
                <MenuItem>My Address</MenuItem>
                <Link to="whishlist">
                  {" "}
                  <MenuItem>My Wishlist</MenuItem>
                </Link>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          )} */}
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
                  <Link to="mobilesandtablets">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      MOBILES & TABLETS
                    </Heading>
                  </Link>
                  <Link to="televisions">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      TELEVISIONS
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      HOME APPLIANCES
                    </Heading>
                  </Link>
                  <Link to="computers">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      COMPUTERS
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      KITCHEN APPLIANCES
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      PERSONAL CARE
                    </Heading>
                  </Link>
                  <Link to="accessories">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      ACCESSORIES
                    </Heading>
                  </Link>
                  <Link to="headphones">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      AUDIO
                    </Heading>
                  </Link>
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
            <Image src="ApnaBazarLogo.gif" alt="logo" w="140px" h="80px" />
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

              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignContent="center"
                  gap="25px"
                  m="auto"
                  p="auto"
                >
                  {/* {isAuth ? (
                      <Link to="profile">
                        <Heading
                          cursor={"pointer"}
                          fontSize={"24px"}
                          _hover={{ bg: "red", textDecoration: "underline" }}
                          fontWeight="bold"
                          color="black"
                          mt="35px"
                        >
                          Hi 
                        </Heading>
                      </Link>
                    ) : (
                      <Link to="profile">
                        <Heading
                          cursor={"pointer"}
                          fontSize={"24px"}
                          _hover={{ bg: "red", textDecoration: "underline" }}
                          fontWeight="bold"
                          color="black"
                          mt="35px"
                        >
                          Profile
                        </Heading>
                      </Link>
                    )} */}

                  {/* {!isAuth ? (
                      <Link to="/login">
                        <Heading
                          cursor={"pointer"}
                          fontSize={"24px"}
                          _hover={{ bg: "red", textDecoration: "underline" }}
                          fontWeight="bold"
                          color="black"
                        >
                          Login
                        </Heading>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <Heading
                          cursor={"pointer"}
                          fontSize={"24px"}
                          _hover={{ bg: "red", textDecoration: "underline" }}
                          fontWeight="bold"
                          color="black"
                        >
                          Logout
                        </Heading>
                      </Link>
                    )} */}

                  <Link to="/cart">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"24px"}
                      _hover={{ bg: "red", textDecoration: "underline" }}
                      fontWeight="bold"
                      color="black"
                    >
                      Cart
                    </Heading>
                  </Link>

                  <DrawerHeader fontSize={"22px"} fontWeight="bold">
                    <Divider color={"black"} />
                    Product Category
                    <Divider color={"black"} />
                  </DrawerHeader>

                  <Link to="mobilesandtablets">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      MOBILES & TABLETS
                    </Heading>
                  </Link>
                  <Link to="televisions">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      TELEVISIONS
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      HOME APPLIANCES
                    </Heading>
                  </Link>
                  <Link to="headphones">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      AUDIO
                    </Heading>
                  </Link>
                  <Link to="computers">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      COMPUTERS
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      KITCHEN APPLIANCES
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      PERSONAL CARE
                    </Heading>
                  </Link>
                  <Link to="accessories">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      ACCESSORIES
                    </Heading>
                  </Link>
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
