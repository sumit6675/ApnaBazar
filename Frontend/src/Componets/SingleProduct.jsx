import React from "react";
import {
  Box,
  Image,
  Badge,
  Button,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
function SingleProduct({
  image,
  alt,
  title,
  price,
  rate,
  count,
  mrp,
  discount,
  handleClick,
}) {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      p="4"
      borderRadius="lg"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      overflow="hidden"
      w="100%"
    >
      <Image src={image} alt={alt} w="300px" h="300px" />

      <Box p="6">
        {+rate > 3.5 && (
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Best Seller
            </Badge>
          </Box>
        )}

        <Box
          mt="1"
          as="h4"
          fontWeight="semibold"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <Flex gap="1">
          <Heading size={"md"}>₹{price}</Heading>
          <s>
            <Heading size={"sm"}>{mrp}</Heading>
          </s>
        </Flex>

        <Box display="flex" alignItems="baseline">
          <Badge fontSize={"md"} borderRadius="full" px="2" colorScheme="teal">
            {discount ? `${discount}%OFF` : `0%OFF`}
          </Badge>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < rate ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {count} reviews
          </Box>
        </Box>
      </Box>
      <Button ml="40px" mb="20px" onClick={handleClick}>
        View Product
      </Button>
    </Box>
  );
}

export default SingleProduct;
