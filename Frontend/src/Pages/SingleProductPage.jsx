import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ({ category }) => {
  const [singleData, setSingleData] = useState([]);
  const [prodductData,setProductData]=useState([])
  const params = useParams();

  useEffect(() => {
    let id = params.id;
    fetch(`http://localhost:8080/products/${category}/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setSingleData(res);
        setProductData(res.selection6)
      });
  }, [category, params]);
console.log(prodductData)
  return (
    <>
      <Box marginTop={12}>
        <Grid
          h={["1300px", "100px", "600px"]}
          templateRows={["repeat(8, 1fr)", "repeat(8, 1fr)", "repeat(8, 1fr)"]}
          templateColumns={[
            "repeat(4, 1fr)",
            "repeat(6, 1fr)",
            "repeat(10, 1fr)",
          ]}
        >
          <GridItem
            rowSpan={[1, 2, 4]}
            colSpan={[4, 6, 4]}
            display="flex"
            justifyContent="center"
            alignitem="center"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <Image
              src={singleData.image}
              alt={singleData.Name}
              _hover={{ cursor: "crosshair" }}
            />
          </GridItem>

          <GridItem
            colSpan={[4, 6, 6]}
            rowSpan={1}
            p={5}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <Text color="gray.500" marginBottom={5}>
              Article ID: {singleData._id}
            </Text>
            <Heading size="md" marginBottom={5}>
              {singleData.Name}
            </Heading>
          </GridItem>

          <GridItem
            colSpan={[4, 3, 3]}
            rowSpan={7}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
            p={5}
          >
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
                Shop for Rs.20,000 & above and get instant discount Up To
                Rs.5000,Use coupon codes "YES1000" for above 20,000 ,"YES2500"
                for above 50,000, "YES5000" for above 1,00,000..{" "}
                <span style={{ color: "#2871c4" }}>Read T&C</span>
              </ListItem>
              <ListItem>
                Get Cashback upto Rs. 1,000 on Mobikwik Wallet.{" "}
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
          </GridItem>

          <GridItem
            colSpan={[4, 3, 3]}
            rowSpan={7}
            p={5}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
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
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {singleData.reviewNumber} reviews
              </Box>
            </Box>
            <Text fontSize="lg" marginBottom={3}>
              MRP:{" "}
              <span style={{ textDecoration: "line-through" }}>
                {singleData.mrp}
              </span>{" "}
              <span style={{ fontSize: "12px" }}>(Inclusive of all taxes)</span>
            </Text>

            <Text
              fontSize="sm"
              color="green.600"
              style={{ fontWeight: "bold" }}
              marginBottom={3}
            >
              You Save: {singleData.discount}%
            </Text>

            <Text fontSize="sm" style={{ fontWeight: "bold" }} marginBottom={3}>
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

            <Flex w="full" justifyContent="space-between">
              <Button
                w="49%"
                color="white"
                bg="red"
                borderRadius="sm"
                fontSize="lg"
                p={6}
                _hover={{ bg: "blue.800" }}
                //   onClick={() => handlePost(singleData)}
              >
                ADD TO CART
              </Button>
              <Button
                w="49%"
                color="white"
                bg="orangered"
                borderRadius="sm"
                fontSize="lg"
                p={6}
                _hover={{ backgroundColor: "orangered" }}
                //   onClick={() => handleWish(singleData)}
              >
                Add to Wishlist
              </Button>
            </Flex>
          </GridItem>

        </Grid>
      </Box>
    </>
  );
};

export default SingleProduct;
