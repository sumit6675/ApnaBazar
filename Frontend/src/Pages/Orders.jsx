import React, { useEffect, useState } from "react";
import { Box, Container, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Sidebar from "../Componets/Sidebar";
import SingleOrderContainer from "../Componets/SingleOrderContainer";
import { backendLink } from "../backendLink";
import { useSelector } from "react-redux";
function Orders() {
  const { email } = useSelector((store) => store.AuthManager);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${backendLink}/users?email=${email}`)
      .then((res) => res.json())
      .then((res) => setData(res.orders));
  }, [email]);
  return (
    <Flex w="100%" gap="5">
      <Sidebar />
      <Box w="100%">
        <Heading lineHeight={1.1} textAlign="center" my="2" fontSize={{ base: "2xl", sm: "3xl" }}>
          ORDERS HISTORY
        </Heading>
        <Grid w="95%" gap="5" gridTemplateColumns={"repeat(4,1fr)"}>
          {data.map((i) => (
            <GridItem>
              <SingleOrderContainer
                Name={i.Name}
                category={i.category}
                price={i.price}
                payBy={i.payBy}
                orderStatus={i.orderStatus}
                image={i.image}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Orders;
