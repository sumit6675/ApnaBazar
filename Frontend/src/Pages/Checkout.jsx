import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  PinInput,
  PinInputField,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdLocationCity, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { TbAddressBook } from "react-icons/tb";
import { PhoneIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
function Checkout() {
  const { email, name } = useSelector((store) => store.AuthManager);
  const [Username, setName] = useState(`${name}`);
  const [Useremail, setEmail] = useState(`${email}`);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [payment, SetPayment] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonthYear, setCardMonthYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [upiId, setupiId] = useState("");
  const toast = useToast();
  useEffect(() => {
    fetch(`http://localhost:8080/users?email=${email}`)
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.address.length; i++) {
          if (res.address.length > 0) {
            setAddress(res.address[0].address);
            setCity(res.address[0].city);
            setState(res.address[0].state);
            setPhone(res.address[0].phone);
          }
        }
      });
  }, [email]);
  const handleAddress = () => {
    const payload = {
      Username,
      Useremail,
      phone,
      address,
      city,
      state,
      pin,
    };
    if (!Useremail.includes("@") || !Useremail.includes(".com")) {
      toast({
        title: `Please Enter Proper Email`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (phone.length !== 10) {
      toast({
        title: `Please Enter Proper Phone Number , Phone Number Should Be Number equal to 10`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (
      address === "" ||
      pin === "" ||
      city === "" ||
      state === "" ||
      pin.length < 6
    ) {
      toast({
        title: `Please Enter All Details`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      fetch(`http://localhost:8080/users?email=${email}`)
        .then((res) => res.json())
        .then((res) => {
          let checkAddressInDatabase = false;
          for (let i = 0; i < res.address.length; i++) {
            if (res.address.length > 0 && res.address[i].pin === payload.pin) {
              checkAddressInDatabase = true;
            }
          }
          if (!checkAddressInDatabase) {
            fetch(`http://localhost:8080/users/addAdress?email=${email}`, {
              method: "PATCH",
              body: JSON.stringify(payload),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((json) => {
                SetPayment(true);
                toast({
                  title: `Address Saved Please select Payment Method`,
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
              });
          } else {
            SetPayment(true);
            toast({
              title: ` Address Saved Please select Payment Method`,
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          }
        });
    }
  };
  const handleCardPayment = () => {
    let payload = {
      cardNumber,
      cardMonthYear,
      cvv,
      nameOnCard,
      payBy: "CARD",
    };
    if (cardNumber !== 16) {
      toast({
        title: `Please Check Your Card Number`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (cardMonthYear.includes("/") || cardMonthYear.length !== 5) {
      toast({
        title: `Please Check Your Card expiry Year and Month it should be in MM/YY formate`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (cvv.length !== 3) {
      toast({
        title: `Please Check Your CVV Number`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (nameOnCard === "") {
      toast({
        title: `Please Enter Exact Name On Your Card`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      console.log(payload);
    }
  };
  const handleUpi = () => {
    const payload = {
      upiId: upiId,
      payBy: "UPI",
    };
    if (!upiId.includes("@")) {
      toast({
        title: `Please Check Your Upi Id`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      console.log(payload);
    }
  };
  const handleCod = () => {
    const payload = {
      payBy: "Cash",
    };
    console.log(payload);
  };
  return (
    <Box w="100%" margin="auto" p="5">
      <Tabs variant="soft-rounded" colorScheme="green" my="35px">
        <TabList w="50%" m="auto" justifyContent={"space-evenly"}>
          <Tab> CONTACT INFO</Tab>
          <Tab
            isSelected={payment === true}
            isDisabled={payment ? false : true}
          >
            PAYMENT
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel w="50%" m="auto">
            <WrapItem pl="10%" border="1px solid teal">
              <Box bg="white" borderRadius="lg">
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                    <FormControl id="name" isInvalid={!Username}>
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="gray.800" />}
                        />
                        <Input
                          type="text"
                          size="lg"
                          w="450px"
                          defaultValue={name}
                          placeholder={"Enter Your Name"}
                          onChange={(e) => setName(e.target.Username)}
                        />
                      </InputGroup>
                      {!Username && (
                        <FormErrorMessage>Name is required.</FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl id="email" isInvalid={!Useremail}>
                      <FormLabel>Mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input
                          type="text"
                          size="lg"
                          defaultValue={email}
                          placeholder={"Enter Your Mail"}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                      {!Useremail && (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl id="phone" isInvalid={!phone}>
                      <FormLabel>Phone Number</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<PhoneIcon color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          defaultValue={phone}
                          placeholder="Phone number"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </InputGroup>
                      {!phone && (
                        <FormErrorMessage>Phone is required.</FormErrorMessage>
                      )}
                    </FormControl>

                    <FormControl id="address" isInvalid={!address}>
                      <FormLabel>Address</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<TbAddressBook color="gray.800" />}
                        />
                        <Input
                          defaultValue={address}
                          type="text"
                          size="lg"
                          placeholder="Enter Your Shipping Address"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </InputGroup>
                      {!address && (
                        <FormErrorMessage>
                          Address is required.
                        </FormErrorMessage>
                      )}
                    </FormControl>

                    <FormControl id="city" isInvalid={!city}>
                      <FormLabel>City</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdLocationCity color="gray.800" />}
                        />
                        <Input
                          defaultValue={city}
                          type="text"
                          size="lg"
                          placeholder="Enter Your City Name"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </InputGroup>
                      {!city && (
                        <FormErrorMessage>City is required.</FormErrorMessage>
                      )}
                    </FormControl>

                    <FormControl id="state" isInvalid={!state}>
                      <FormLabel>State</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<TbAddressBook color="gray.800" />}
                        />
                        <Input
                          defaultValue={state}
                          type="text"
                          size="lg"
                          placeholder="Enter Your State Name"
                          onChange={(e) => setState(e.target.value)}
                        />
                      </InputGroup>
                      {!state && (
                        <FormErrorMessage>State is required.</FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl id="pincode" isInvalid={pin.length !== 6}>
                      <FormLabel>Pincode</FormLabel>
                      <PinInput
                        defaultValue={pin}
                        otp
                        onChange={(e) => setPin(e)}
                      >
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                      {pin.length !== 6 && (
                        <FormErrorMessage>
                          Pincode is required.
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        bg="#0D74FF"
                        color="white"
                        _hover={{}}
                        onClick={handleAddress}
                      >
                        Add Address
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </TabPanel>
          <TabPanel>
            <Heading w="30%" m="auto">
              Select Payment Menthod
            </Heading>

            <Tabs isFitted variant="enclosed" colorScheme="green" my="35px">
              <TabList w="50%" m="auto" justifyContent={"space-evenly"}>
                <Tab>BY CARD</Tab>
                <Tab>BY UPI</Tab>
                <Tab>BY CASH</Tab>
              </TabList>
              <TabPanels w="50%" m="auto">
                <TabPanel>
                  <Box w="50%" m="auto">
                    <WrapItem pl="20%" border="1px solid teal">
                      <Box bg="white" borderRadius="lg">
                        <Box m={8} color="#0B0E3F">
                          <VStack spacing={5}>
                            <FormControl
                              id="cardNumber"
                              isInvalid={!cardNumber}
                            >
                              <FormLabel>Card Number</FormLabel>
                              <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                  pointerEvents="none"
                                  children={<TbAddressBook color="gray.800" />}
                                />
                                <Input
                                  type="tel"
                                  size="lg"
                                  placeholder="Enter Your 16 digit Card Number"
                                  onChange={(e) =>
                                    setCardNumber(e.target.value)
                                  }
                                />
                              </InputGroup>
                              {cardNumber !== 16 && (
                                <FormErrorMessage>
                                  Card Number is required.
                                </FormErrorMessage>
                              )}
                            </FormControl>
                            <FormControl
                              id="cardMonthYear"
                              isInvalid={!cardMonthYear}
                            >
                              <FormLabel>Month/Year</FormLabel>
                              <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                  pointerEvents="none"
                                  children={<TbAddressBook color="gray.800" />}
                                />
                                <Input
                                  type="text"
                                  size="lg"
                                  placeholder="MM/YY"
                                  onChange={(e) =>
                                    setCardMonthYear(e.target.value)
                                  }
                                />
                              </InputGroup>
                              {cardMonthYear.length !== 5 && (
                                <FormErrorMessage>
                                  Month and year should be in MM/YY in this
                                  formate
                                </FormErrorMessage>
                              )}
                            </FormControl>
                            <FormControl
                              id="pincode"
                              isInvalid={cvv.length !== 3}
                            >
                              <FormLabel>CVV</FormLabel>
                              <PinInput
                                otp
                                onChange={(e) => {
                                  setCvv(e);
                                }}
                              >
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                              </PinInput>
                              {cvv.length !== 3 && (
                                <FormErrorMessage>
                                  Pincode is required.
                                </FormErrorMessage>
                              )}
                            </FormControl>
                            <FormControl
                              id="nameOnCard"
                              isInvalid={!nameOnCard}
                            >
                              <FormLabel>Name On Card</FormLabel>
                              <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                  pointerEvents="none"
                                  children={<TbAddressBook color="gray.800" />}
                                />
                                <Input
                                  type="text"
                                  size="lg"
                                  placeholder="Enter Name On Card"
                                  onChange={(e) => {
                                    setNameOnCard(e.target.value);
                                  }}
                                />
                              </InputGroup>
                              {!nameOnCard && (
                                <FormErrorMessage>
                                  Name is required.
                                </FormErrorMessage>
                              )}
                            </FormControl>
                            <FormControl id="name" float="right">
                              <Button
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                _hover={{}}
                                onClick={handleCardPayment}
                              >
                                PAY BY CARD
                              </Button>
                            </FormControl>
                          </VStack>
                        </Box>
                      </Box>
                    </WrapItem>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box w="50%" m="auto">
                    <WrapItem pl="20%" border="1px solid teal">
                      <Box bg="white" borderRadius="lg">
                        <Box m={8} color="#0B0E3F">
                          <VStack spacing={5}>
                            <FormControl id="upiId" isInvalid={!upiId}>
                              <FormLabel>UPI ID</FormLabel>
                              <InputGroup borderColor="#E0E1E7">
                                <InputLeftElement
                                  pointerEvents="none"
                                  children={<TbAddressBook color="gray.800" />}
                                />
                                <Input
                                  type="text"
                                  size="lg"
                                  placeholder="Enter Name On Card"
                                  onChange={(e) => {
                                    setupiId(e.target.value);
                                  }}
                                />
                              </InputGroup>
                              {!upiId && (
                                <FormErrorMessage>
                                  UPI ID is required.
                                </FormErrorMessage>
                              )}
                            </FormControl>
                            <FormControl id="name" float="right">
                              <Button
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                _hover={{}}
                                onClick={handleUpi}
                              >
                                PAY BY UPI
                              </Button>
                            </FormControl>
                          </VStack>
                        </Box>
                      </Box>
                    </WrapItem>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box w="50%" m="auto">
                    <WrapItem pl="20%" border="1px solid teal">
                      <Box bg="white" borderRadius="lg">
                        <Box m={8} color="#0B0E3F">
                          <VStack spacing={5}>
                            <FormLabel>
                              You are eligible for Cash On Delivery
                            </FormLabel>
                            <FormControl id="name" float="right">
                              <Button
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                _hover={{}}
                                onClick={handleCod}
                              >
                                PAY BY CASH
                              </Button>
                            </FormControl>
                          </VStack>
                        </Box>
                      </Box>
                    </WrapItem>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Checkout;
