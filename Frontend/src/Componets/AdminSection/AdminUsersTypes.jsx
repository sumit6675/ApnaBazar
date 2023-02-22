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
} from "@chakra-ui/react";
import axios from "axios";
import { backendLink } from "../../backendLink";

const AdminUsersTypes = ({ userType }) => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  let toast = useToast();
  useEffect(() => {
    axios
      .get(`${backendLink}/users/admin/${userType}?page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [page, flag, userType]);

  const getPhoneByName = () => {
    axios
      .get(
        `${backendLink}/users/admin/${userType}?name=${name}&page=${page}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${backendLink}/users/admin/delete/${id}`)
      .then((res) => {
        setFlag(!flag);
        toast({
          title: "users Data deleted",
          description: `You successfully deleted ${userType} users data for id: ${id}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Delete failed",
          description: `You are not autherised`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const handleMakeAdmin = (id) => {
    axios
      .patch(`${backendLink}/users/admin/${userType}/makeAdmin/${id}`)
      .then((res) => {
        setFlag(!flag);
        toast({
          title: `${id} User Become Admin`,
          description: `You successfully make ${id} admin`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Making Admin failed",
          description: `You are not autherised`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const handleMakeDeliveryPartner = (id) => {
    axios
      .patch(
        `${backendLink}/users/admin/${userType}/makeDeliveryPartner/${id}`
      )
      .then((res) => {
        setFlag(!flag);
        toast({
          title: `${id} User Become Delivery Partner`,
          description: `You successfully make ${id} Delivery Partner`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Making Delivery Partner failed",
          description: `You are not autherised`,
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
            w="15rem"
            size={["sm", "sm", "md", "md"]}
            placeholder="Search User By Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            onClick={getPhoneByName}
            ml="2rem"
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
            All Users
          </Button>
        </Box>
      </div>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>email</Th>
                <Th>phone</Th>
                <Th>wishlist Count</Th>
                <Th>cart Count</Th>
                <Th>City</Th>
                <Th>state</Th>
                <Th>pincode</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((i) => {
                  return (
                    <Tr key={i.name}>
                      <Td> {i.name}</Td>
                      <Td>{i.email}</Td>
                      <Td>{i.phone}</Td>
                      <Td>{i.wishlist ? i.wishlist.length : 0}</Td>
                      <Td>{i.cart ? i.cart.length : 0}</Td>
                      <Td> {i.City}</Td>
                      <Td>{i.state}</Td>
                      <Td>{i.pincode}</Td>
                      <Td>
                        <Button onClick={() => handleDelete(i._id)}>
                          Delete
                        </Button>
                      </Td>
                      {userType === "User" && (
                        <Td>
                          <Button onClick={() => handleMakeAdmin(i._id)}>
                            Make a Admin
                          </Button>
                        </Td>
                      )}
                      {userType === "User" && (
                        <Td>
                          <Button
                            onClick={() => handleMakeDeliveryPartner(i._id)}
                          >
                            Make a Delivery Partner
                          </Button>
                        </Td>
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
export default AdminUsersTypes;
