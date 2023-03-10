import React from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
function Productonepage({id, image, alt, title, rate, count,handleSingleProduct }) {
  return (
    <Box maxW="sm" p="2" borderWidth="1px" borderRadius="lg" overflow="hidden" m="auto">
      <Image src={image} alt={alt} w="98%" h="300px" />

      <Box p="6">
        {+rate > 3.5 && (
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="yellow">
              Best Seller
            </Badge>
          </Box>
        )}

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
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
      <Button ml="8" onClick={handleSingleProduct}>
          View Product
        </Button>
    </Box>
  );
}

export default Productonepage;
