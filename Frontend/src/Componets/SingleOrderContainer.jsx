import {
  Box,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Badge,
  Container,
} from "@chakra-ui/react";

export default function SingleOrderContainer({
  Name,
  category,
  price,
  payBy,
  orderStatus,
  image,
}) {
  return (
    <Container>
        <Box
      p={6}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
    >
      <Box
        rounded={"lg"}
        height={"230px"}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          src={image}
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Stack direction={"row"} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {category}
          </Text>
          <Badge borderRadius="full" px="2" colorScheme="yellow">
            {orderStatus}
          </Badge>
        </Stack>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {Name}
        </Box>
        <Stack direction={"row"} align={"center"}>
          <Text fontWeight={800} fontSize={"xl"}>
          ₹.{price}
          </Text>
          <Text color={"gray.600"}>PaidBy:{payBy}</Text>
        </Stack>
      </Stack>
    </Box>
    </Container>
  );
}
