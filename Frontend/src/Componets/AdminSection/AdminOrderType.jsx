import React, { useEffect } from "react";
import {
  Box,
  Input,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useToast,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { backendLink } from "../../backendLink";
import { useSelector } from "react-redux";

const AdminOrderType = ({ OrderType }) => {
  const { name } = useSelector((store) => store.AuthManager);
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  let toast = useToast();
  useEffect(() => {
    axios
      .get(`${backendLink}/orders/admin/${OrderType}?page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [page, flag, OrderType]);

  const handleOrderSerachByName = () => {
    axios
      .get(
        `${backendLink}/orders/admin/${OrderType}/getOrders?email=${email}&page=${page}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleNextProcess = (id) => {
    axios
      .patch(`${backendLink}/orders/admin/${OrderType}/dispatchorder/${id}`,{name:name})
      .then((res) => {
        setFlag(!flag);
        toast({
          title: "Order Dispatch successfully",
          description: `You successfully dispatch Order of id: ${id}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Order Dispatch Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  const handleOutForDelivery = (id) => {
    axios
      .patch(`${backendLink}/orders/admin/${OrderType}/outForDelivery/${id}`,{name:name})
      .then((res) => {
        setFlag(!flag);
        toast({
          title: " Order out for delivery success",
          description: `You successfully make order out for delivery of id: ${id}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "out for delivery Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  const handleDeliveredOrder = (id) => {
    axios
      .patch(`${backendLink}/orders/admin/${OrderType}/deliverd/${id}`)
      .then((res) => {
        setFlag(!flag);
        toast({
          title: " Order successfully deliverd",
          description: `You successfully deliverd order of id: ${id}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Order deliverd Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const handlepage = (p) => {
    setPage(page + p);
  };
  return (
    <Box>
      <div>
        <Box
          display="flex"
          w="40rem"
          margin="auto"
          justifyContent="space-between"
        >
          <Input
            w="20rem"
            size={["sm", "sm", "md", "md"]}
            placeholder="Search Orders By Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            ml="2rem"
            onClick={handleOrderSerachByName}
            variant="outline"
            size={["sm", "sm", "md", "md"]}
          >
            Search
          </Button>
          <Button
            bg="#257CFF"
            borderRadius="1rem"
            variant="solid"
            ml="3rem"
            color="white"
            _hover={{
              background: "white",
              color: "#257CFF",
              border: "2px solid #257CFF",
            }}
            mr={3}
            mb={4}
            onClick={() => setFlag(!flag)}
          >
            All Orders
          </Button>
        </Box>
      </div>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Product Image</Th>
                <Th>Order Id</Th>
                <Th>Product Name</Th>
                <Th>Price</Th>
                <Th>Paid By</Th>
                <Th>Order Status</Th>
                <Th>User Id</Th>
                <Th>User Email Id</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((i) => {
                  return (
                    <Tr key={i._id}>
                      <Td>
                        <Image
                          src={i.image}
                          alt={i.Name}
                          w="60px"
                          height={"60px"}
                        />
                      </Td>
                      <Td>{i._id}</Td>
                      <Td
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        noOfLines={1}
                        w="280px"
                        alignContent={"center"}
                        h="80px"
                      >
                        {i.Name}
                      </Td>
                      <Td>{i.price}</Td>
                      <Td>{i.payBy}</Td>
                      <Td> {i.orderStatus}</Td>
                      <Td>{i.UserId}</Td>
                      <Td>{i.UserEmail}</Td>
                      {OrderType === "Processing" && (
                        <Button onClick={() => handleNextProcess(i._id)}>
                          Dispatch Order
                        </Button>
                      )}
                      {OrderType === "dispatch" && (
                        <Button onClick={() => handleOutForDelivery(i._id)}>
                          Order Out For Delivey
                        </Button>
                      )}
                      {OrderType === "outForDelivery" && (
                        <Button onClick={() => handleDeliveredOrder(i._id)}>
                          Deliverd Order
                        </Button>
                      )}
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box>
          <Button disabled={page === 1} onClick={() => handlepage(-1)}>
            Previous
          </Button>
          <Button disabled={true}>{page}</Button>
          <Button onClick={() => handlepage(1)}>Next</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminOrderType;
