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
    <Box
      p={{
        lg: 6,
        md: 4,
        sm: 2,
        base: 2,
      }}
      w={"100%"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
    >
      <Box rounded={"lg"} height={"230px"}>
        <Image
          rounded={"lg"}
          height={230}
          width={{
            lg: 282,
            md: 245,
            sm: 220,
            base: 220,
          }}
          src={image}
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Stack direction={"row"} align={"center"}>
          <Text
            color={"gray.500"}
            fontSize={{
              lg: "sm",
              md: "sm",
              sm: "xs",
              base: "xs",
            }}
            textTransform={"uppercase"}
          >
            {category}
          </Text>
          <Badge
            borderRadius="full"
            px={{ lg: "2", md: "2", sm: "1", base: "0" }}
            colorScheme="yellow"
          >
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
        <Text fontWeight={800} fontSize={"xl"}>
          ₹{price}
        </Text>
        <Text color={"gray.600"}>PaidBy:{payBy}</Text>
      </Stack>
    </Box>
  );
}
