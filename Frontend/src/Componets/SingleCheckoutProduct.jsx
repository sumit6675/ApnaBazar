import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

function SingleCheckoutProduct({ img, name, price }) {
  return (
    <Flex w="100%" alignItems={"center"} justifyContent={"space-evenly"}>
      <Image src={img} alt="name" w="60px" />
      <Box w="50%" fontWeight="bold" as="h3" lineHeight="tight" noOfLines={1}>
        {name}
      </Box>
      <Box w="10%" fontWeight="bold" as="h3" lineHeight="tight" noOfLines={1}>
        {"1"} &#x2715;
      </Box>
      <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
        Rs.{price}
      </Box>
      <Button size={"xs"} color="red">
        Remove
      </Button>
    </Flex>
  );
}

export default SingleCheckoutProduct;
