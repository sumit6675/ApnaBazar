import { Box, Button, Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleCartItem from "../Componets/SingleCartPage";

function Cart() {
  const { email } = useSelector((store) => store.AuthManager);
  const [cart, setCart] = useState([]);
  const [total,setTotal]=useState(0)
  useEffect(() => {
    fetch(`http://localhost:8080/users?email=${email}`)
      .then((res) => res.json())
      .then((res) => {
        setCart(res.cart)
        let tot=0
        for(let i=0;i<res.cart.length;i++){
          tot+=parseInt(res.cart[i].price.replace(/,/g, ""))
        }
        setTotal(tot)
      });
  },[email,total]);
  return (
    <Box p="10">
      <Heading textAlign={"center"}>Shopping Cart ({cart.length} items)</Heading>
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
          {cart.map((i) => (
            <SingleCartItem
              name={i.Name}
              img={i.image}
              price={i.price}
              id={i._id}
            />
          ))}
        </Flex>
        <VStack
          w="90%"
          h="400px"
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
            <span>Rs.{total.toLocaleString()}</span>
          </Flex>
          <Flex gap="5">
            <Heading size={"sm"}>Shipping + Tax</Heading>
            <span>Rs. 0.00</span>
          </Flex>
          <Flex gap="5">
            <Heading size={"sm"}>Coupon Code</Heading>
            <span>Add coupon code</span>
          </Flex>
          <Flex gap="5">
            <Heading size={"md"}>Total</Heading>
            <Heading size={"md"} fontWeight={"bold"}>
             Rs.{total.toLocaleString()}
            </Heading>
          </Flex>
          <Button>Checkout</Button>
        </VStack>
      </Grid>
    </Box>
  );
}

export default Cart;
