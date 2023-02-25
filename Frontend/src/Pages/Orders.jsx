import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import Sidebar from "../Componets/Sidebar";
import SingleOrderContainer from "../Componets/SingleOrderContainer";
import { backendLink } from "../backendLink";
import { useSelector } from "react-redux";
import axios from "axios";
function Orders() {
  const { email } = useSelector((store) => store.AuthManager);
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const [flag, setFlag] = useState(false);
  const toast = useToast();
  useEffect(() => {
    setLoading(true);
    fetch(`${backendLink}/orders/getOrder?email=${email}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
      });
  }, [email,flag]);

  const handleCancle = (id) => {
    axios.patch(`${backendLink}/orders/cancleOrder/${id}`)
      .then((res) => {
        setFlag(!flag);
        toast({
          title: " Order successfully Cancled",
          description: `You successfully Cancled order of id: ${id}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Order Cancled Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  if (loading) {
    return (
      <Flex
        ox
        display={{
          lg: "flex",
          md: "flex",
        }}
        w="100%"
        justifyContent={{
          lg: "space-evenly",
          md: "space-evenly",
        }}
      >
        <Sidebar />
        <Grid
          w="90%"
          m="auto"
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap="20px"
        >
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
        </Grid>
      </Flex>
    );
  }
  return (
    <Box
      display={{
        lg: "flex",
        md: "flex",
      }}
      w="100%"
      justifyContent={{
        lg: "space-evenly",
        md: "space-evenly",
      }}
    >
      <Sidebar />
      <Box w="100%">
        <Heading
          lineHeight={1.1}
          textAlign="center"
          my="8"
          fontSize={{ base: "2xl", sm: "3xl" }}
        >
          ORDERS HISTORY
        </Heading>
        <Grid
          w="100%"
          gap="2"
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
        >
          {data.map((i) => (
            <GridItem>
              <SingleOrderContainer
                Name={i.Name}
                category={i.category}
                price={i.price}
                payBy={i.payBy}
                orderStatus={i.orderStatus}
                image={i.image}
                id={i._id}
                handleCancle={()=>handleCancle(i._id)}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Orders;
