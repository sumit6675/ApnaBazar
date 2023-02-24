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
      alignContent={"center"}
      borderWidth="1px"
      p="4"
      borderRadius="lg"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      overflow="hidden"
      w="100%"
      alignItems={"center"}
    >
      <Image
        src={image}
        alt={alt}
        w={{
          base: "200px",
          sm: "250px",
          md: "250px",
          lg: "300px",
        }}
        h={{
          base: "200px",
          sm: "250px",
          md: "250px",
          lg: "300px",
        }}
      />

      <Box
        ml={{
          base: "0",
          sm: "0",
          md: "0",
          lg: "10%",
        }}
        w="90%"
        p={{
          base: "3",
          sm: "3",
          md: "6",
          lg: "6",
        }}
        m="auto"
        alignContent={"center"}
        alignItems="center"
      >
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
          noOfLines={2}
        >
          {title}
        </Box>

        <Flex gap={{ base: "0.5",
          sm: "0",
          md: "2",
          lg: "2",
          }} my="1">
          <Heading  size={{ base: "sm",
          sm: "sm",
          md: "md",
          lg: "md",
          }}>₹{price}</Heading>
          <s>
            <Heading size={{ base: "xs",
          sm: "xs",
          md: "sm",
          lg: "sm",
          }}>{mrp}</Heading>
          </s>
        </Flex>

        <Box w="80%" display="flex" m="auto" alignItems="baseline" my="1">
          <Badge fontSize={"md"} borderRadius="full" px="2" colorScheme="teal">
            {discount ? `${discount}%OFF` : `0%OFF`}
          </Badge>
        </Box>

        <Box w="100%"  display="flex" m="auto" my="2" alignItems="center">
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
      <Button
        ml={{
          base: "8%",
          sm: "10%",
          md: "15%",
          lg: "20%",
        }}
        mb="20px"
        onClick={handleClick}
      >
        View Product
      </Button>
    </Box>
  );
}

export default SingleProduct;
