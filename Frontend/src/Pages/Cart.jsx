import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SingleCartItem from "../Componets/SingleCartPage";

function Cart() {
  return (
    <Box p="10">
      <Heading textAlign={"center"}>Shopping Cart (3 items)</Heading>
      <Grid gridTemplateColumns={"0.75fr 0.25fr"} my="5">
        <Flex
          flexDirection={"column"}
          border={"0px solid blue"}
          width={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "90%",
            xl: "90%",
            "2xl": "90%",
          }}
          gap={"4"}
        >
          <SingleCartItem />
        </Flex>
        <VStack
          w="90%"
          p="8"
          gap="5"
          alignItems={"left"}
          border="1px solid teal"
        >
          <Heading size={"md"} fontWeight="bold">
            Order Summary
          </Heading>
          <Flex gap="8">
            <Heading size={"sm"}>Subtotal</Heading>
            <span>£0.00</span>
          </Flex>
          <Flex gap="5">
            <Heading size={"sm"}>Shipping + Tax</Heading>
            <span>£0.00</span>
          </Flex>
          <Flex gap="5">
            <Heading size={"sm"}>Coupon Code</Heading>
            <span>Add coupon code</span>
          </Flex>
          <Flex gap="5">
            <Heading size={"md"}>Total</Heading>
            <Heading size={"md"} fontWeight={"bold"}>
              Rs.150
            </Heading>
          </Flex>
          <Button>Checkout</Button>
        </VStack>
      </Grid>
    </Box>
  );
}

export default Cart;
