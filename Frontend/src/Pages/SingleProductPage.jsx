import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { backendLink } from "../backendLink";
import ProductCarousal from "../Componets/Homepage/ProductCarousal";

const SingleProduct = ({ category }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { email } = useSelector((store) => store.AuthManager);
  const [singleData, setSingleData] = useState([]);
  const [prodductData, setProductData] = useState([]);
  const [menData, setMenData] = useState([]);
  const params = useParams();

  useEffect(() => {
    let id = params.id;
    fetch(`${backendLink}/products/${category}/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setSingleData(res);
        setProductData(res.selection6);
        let men = singleData.selection2;
        setMenData(men.split("\n"));
      });
  }, [category, params, singleData.selection2]);
  
  const handleCart = () => {

    fetch(`${backendLink}/users?email=${email}`)
      .then((res) => res.json())
      .then((res) => {
        let checkProductInCart = false;
        for (let i = 0; i < res.cart.length; i++) {
          if (res.cart[i]._id === singleData._id) {
            checkProductInCart = true;
          }
        }

        if (!checkProductInCart) {
          fetch(`${backendLink}/users/cart?email=${email}`, {
            method: "PATCH",
            body: JSON.stringify({...singleData,qty:1}),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              toast({
                title: `${singleData.Name} Product added successfully`,
                description: "Product added successfully in Cart",
                status: "success",
                duration: 4000,
                isClosable: true,
              });
              navigate("/cart");
            });
        } else {
          toast({
            title: `${singleData.Name} Product Already Exists`,
            description: "Product Already Exists in Cart",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      });
  };
  const addWishlist = (product) => {
    fetch(`${backendLink}/users?email=${email}`)
      .then((res) => res.json())
      .then((res) => {
        let checkProductInWishlist = false;
        for (let i = 0; i < res.wishlist.length; i++) {
          if (res.wishlist[i]._id === product._id) {
            checkProductInWishlist = true;
          }
        }
        if (!checkProductInWishlist) {
          fetch(`${backendLink}/users/addWishlist?email=${email}`, {
            method: "PATCH",
            body: JSON.stringify(product),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              toast({
                title: `${product.Name} Product added successfully`,
                description: "Product added successfully in Wishlist",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
            });
        } else {
          toast({
            title: `${product.Name} Product Already Exists`,
            description: "Product Already Exists in Wishlist",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      });
  };
  return (
    <Box p="5">
      <Grid gridTemplateColumns={"0.25fr 0.40fr 0.35fr"}>
        <Container>
          <Image
            src={singleData.image}
            _hover={{ cursor: "crosshair" }}
            alt="image"
            w="85%"
          />
        </Container>
        <Grid>
          <Container>
            <Heading marginBottom={3} size="md">
              {singleData.Name}
            </Heading>
            <Text marginBottom={3} size="md">
              ProductId: {singleData._id}
            </Text>
            <Heading size="sm" marginBottom={3}>
              Gain more with offers (4)
            </Heading>
            <UnorderedList color="gray.600" fontSize="sm" marginBottom={4}>
              <ListItem>
                Wall mount bracket is on chargeable basis.{" "}
                <span style={{ color: "#2871c4" }}>Read T&C</span>
              </ListItem>
              <ListItem>
                Buy RCP warranty and save up to 55%.{" "}
                <span style={{ color: "#2871c4" }}>Read T&C</span>
              </ListItem>
              <ListItem>
                Shop for ₹20,000 & above and get instant discount Up To
                ₹5000,Use coupon codes "YES1000" for above 20,000 ,"YES2500"
                for above 50,000, "YES5000" for above 1,00,000..{" "}
                <span style={{ color: "#2871c4" }}>Read T&C</span>
              </ListItem>
              <ListItem>
                Get Cashback upto ₹ 1,000 on Mobikwik Wallet.{" "}
                <span style={{ color: "#2871c4" }}>Read T&C</span>
              </ListItem>
            </UnorderedList>
            <Heading size="sm" marginBottom={3}>
              Save more with EMI/Cashback (1){" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  color: "#2871c4",
                }}
              >
                Read T&C
              </span>
            </Heading>
            <UnorderedList color="gray.600" fontSize="sm" marginBottom={4}>
              <ListItem>
                EMIs (Credit Cards) from ₹792.16/month |{" "}
                <span style={{ color: "#2871c4" }}>
                  View all Standard Credit Cards EMI options
                </span>
              </ListItem>
            </UnorderedList>
            <Heading size="sm" marginBottom={3}>
              Warranty
            </Heading>
            <UnorderedList color="gray.600" fontSize="sm" marginBottom={5}>
              <ListItem>
                <span style={{ fontWeight: "bold" }}>Warranty:</span> 1 Year
                manufacturer warranty
              </ListItem>
            </UnorderedList>
            <Heading size="sm" marginBottom={3}>
              Product Details
            </Heading>
            <UnorderedList color="gray.600" fontSize="sm" marginBottom={4}>
              {category !== "men" &&
                prodductData.map((i) => (
                  <ListItem key="i._id">{i.name}</ListItem>
                ))}
            </UnorderedList>
            <UnorderedList color="gray.600" fontSize="sm" marginBottom={4}>
              {category === "men" &&
                menData.map((i) => <ListItem key={i}>{i}</ListItem>)}
            </UnorderedList>
            <Heading size="sm" marginBottom={3}>
              Additional Services & Warranties (3){" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#2871c4",
                }}
              >
                View All
              </span>
            </Heading>
          </Container>
        </Grid>
        <VStack>
          <Heading size="lg" marginBottom={5} color="blue.700">
            ₹{singleData.price}
          </Heading>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < singleData.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="md">
              {singleData.reviewNumber} reviews
            </Box>
          </Box>
          <Text fontSize="lg" marginBottom={1}>
            MRP:{" "}
            <span style={{ textDecoration: "line-through" }}>
              {singleData.mrp}
            </span>{" "}
            <span style={{ fontSize: "12px" }}>(Inclusive of all taxes)</span>
          </Text>

          <Text
            fontSize="md"
            color="green.600"
            style={{ fontWeight: "bold" }}
            marginBottom={3}
          >
            You Save: {singleData.discount}%
          </Text>

          <Text fontSize="md" style={{ fontWeight: "bold" }} marginBottom={3}>
            EMIs (Credit Cards) from ₹792.16/month |{" "}
            <span style={{ color: "#2871c4" }}>View Plans</span>
          </Text>

          <Text fontSize="lg" style={{ fontWeight: "bold" }} marginBottom={3}>
            FREE Shipping!
          </Text>

          <Input
            w="70%"
            borderRadius="none"
            placeholder="Enter / Detect PIN Code"
            p={2}
            marginBottom={3}
          ></Input>

          <VStack w="full" justifyContent="space-between">
            <Button
              w="45%"
              color="white"
              bg="red"
              borderRadius="sm"
              fontSize="lg"
              p={6}
              _hover={{ bg: "blue.800" }}
              onClick={handleCart}
            >
              ADD TO CART
            </Button>
            <Button
              w="45%"
              color="white"
              bg="orangered"
              borderRadius="sm"
              fontSize="lg"
              p={6}
              _hover={{ backgroundColor: "orangered" }}
                onClick={() => addWishlist(singleData)}
            >
              Add to Wishlist
            </Button>
          </VStack>
        </VStack>
      </Grid>
      <Heading margin={"auto"} mt="3" marginBottom={3} size="md">
        Related products with free delivery on eligible orders
      </Heading>
      <ProductCarousal phone={category} count={5} />
    </Box>
  );
};

export default SingleProduct;
