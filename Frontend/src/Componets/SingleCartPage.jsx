import React from "react";
import { Flex, Box, Image, Button, Heading } from "@chakra-ui/react";
import { FcPlus } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";

const SingleCartItem = ({ name, img, price, id,deleteCart,addWishlist,count,handleMinus,handlePlus }) => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var tomorrow = new Date();
  tomorrow.setTime(tomorrow.getTime() + 1000 * 3600 * 24);
  // eslint-disable-next-line no-array-constructor
  var dayName = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  // eslint-disable-next-line no-array-constructor
  var monName = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  var now = new Date();
  var dtString =
    dayName[now.getDay()] +
    ", " +
    monName[now.getMonth()] +
    " " +
    now.getDate();
  var change =
    months[tomorrow.getMonth()] +
    " " +
    tomorrow.getDate() +
    ", " +
    tomorrow.getFullYear();
  return (
    <Flex
      key={id}
      border={"1px solid rgb(224, 224, 225)"}
      flexDirection="column"
      maxW={"full"}
      boxShadow={"rgb(0 0 0 / 6%) 0px 2px 2px"}
      borderRadius="4px"
      alignItems={"center"}
    >
      <Flex
        p={"16px"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent={{ sm: "center", base: "center" }}
        alignItems={{
          sm: "center",
          md: "normal",
          lg: "normal",
          xl: "normal",
          "2xl": "normal",
        }}
        gap={{ sm: "8px", base: "7px" }}
      >
        {/* //part1-17to 44line */}
        <Flex
          flexDirection="column"
          border={"0px solid blue"}
          justifyContent="center"
          alignItems={"center"}
          gap="2"
        >
          <Box>
            <Image src={img} alt={name} width="200px" height="220px" />
          </Box>
          <Box display={"flex"} gap="2">
            <Button onClick={handleMinus}>-</Button>
            <Button
              backgroundColor={"white"}
              disabled={true}
              fontWeight={"bold"}
            >
              {count}
            </Button>
            <Button onClick={handlePlus}>+</Button>
          </Box>
        </Flex>
        {/* //part2-line 46 to 71 */}
        <Flex
          flexDirection={"column"}
          border={"0px solid green"}
          textAlign={{
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          gap={2}
        >
          <Heading
            fontSize="14px"
            color={" rgb(0, 51, 128)"}
            fontWeight="600"
            lineHeight={"1.1"}
          >
            {name}
          </Heading>
          <Heading
            fontSize="14px"
            color={"rgb(102, 102, 102)"}
            fontWeight="600"
            lineHeight={"1.1"}
          >
            {id}
          </Heading>
          <Flex>
            <FcPlus />
            <Heading fontSize="12px" color={"red"}>
              RECOMMENDED SERVICES/WARRANTY
            </Heading>
          </Flex>
        </Flex>
        {/* //part3- line 71 to 99*/}
        <Flex
          flexDirection={"column"}
          textAlign={{
            sm: "center",
            md: "right",
            lg: "right",
            xl: "right",
            "2xl": "right",
          }}
          gap={1}
          fontWeight="500"
        >
          <Heading fontSize="18px" color={"rgb(0, 0, 0)"}>
          ₹{price}
          </Heading>
          <Heading
            fontSize="14px"
            color={"rgb(21, 150, 124)"}
            lineHeight={"1.5"}
          >
            {" "}
            Free Shipping
          </Heading>
          <Flex justifyContent="flex-end">
            <TbTruckDelivery size={20} />
            <Heading
              fontSize="13px"
              color={"rgb(0, 51, 128)"}
              lineHeight={"20px"}
            >
              Standard Delivery: {dtString} - {change}
            </Heading>
          </Flex>
          <Heading fontSize="12px" color={"rgb(102, 102, 102)"}>
            *Delivery assurance is subject to our delivery locations staying
            open as per govt. regulations
          </Heading>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        borderTop={"1px solid rgb(224, 224, 225)"}
        fontSize="13px"
        fontWeight={"500"}
        background="transparent"
        textAlign={"center"}
      >
        <Box width={"49%"} borderRight="1px solid rgb(224, 224, 225)">
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
            onClick={deleteCart}
          >
            Remove
          </Button>
        </Box>
        <Box width={"49%"}>
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
            onClick={addWishlist}
          >
            Move to Wishlist
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SingleCartItem;