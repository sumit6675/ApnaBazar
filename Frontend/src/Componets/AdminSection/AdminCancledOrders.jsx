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
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { backendLink } from "../../backendLink";
import { useSelector } from "react-redux";

function AdminCancledOrders() {
  const { name } = useSelector((store) => store.AuthManager);
  const [page, setPage] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [data, setData] = React.useState([]);
  const [flag, setFlag] = React.useState(false);

  useEffect(() => {
    axios
      .get(`${backendLink}/orders/admin/Cancelled?page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [page, name, flag]);

  const handlepage = (p) => {
    setPage(page + p);
  };
  return (
    <div>
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
            //   onClick={handleOrderSerachByName}
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
    </div>
  );
}

export default AdminCancledOrders;
