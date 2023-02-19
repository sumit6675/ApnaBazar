import React, { useEffect } from "react";
import {
  Box,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { backendLink } from "../../backendLink";

const AdminProducts = ({ category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [page, setPage] = React.useState(1);
  const [name, setName] = React.useState("");
  const [data, setData] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [phoneImage, setPhoneImage] = React.useState("");
  const [PhoneName, setPhoneName] = React.useState("");
  const [phoneMRP, setPhoneMrp] = React.useState("");
  const [phoneDetails, setPhoneDetails] = React.useState("");
  const [phonePrice, setPhonePrice] = React.useState("");
  const [phoneRating, setPhoneRating] = React.useState("");
  let toast = useToast();
  useEffect(() => {
    axios
      .get(`${backendLink}/products/admin/${category}?page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [page, flag, category]);

  const handleAddProduct = () => {
    const MRP = parseInt(`${phoneMRP}`.replace(/[^0-9.-]+/g, ""));
    const price = parseInt(`${phonePrice}`.replace(/[^0-9.-]+/g, ""));
    const discount = (((MRP - price) / MRP) * 100).toFixed(2);
    const payload = {
      Name: PhoneName,
      image: phoneImage,
      mrp: phoneMRP,
      price: phonePrice,
      category: `${category}`,
      selection6: [],
      discount,
    };
    const detailsOfPhone = phoneDetails.split(".");
    if (detailsOfPhone.length > 0) {
      for (let i = 0; i < detailsOfPhone.length; i++) {
        if (detailsOfPhone[i].length > 0) {
          payload.selection6.push({ name: detailsOfPhone[i] });
        }
      }
    }

    axios
      .post(`${backendLink}/products/admin/${category}/add`, payload)
      .then((res) => {
        toast({
          title: "Product Data Added",
          description: `You successfully Added a new ${category} in database`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log("err", err);
        toast({
          title: `${category} Data not Added in database`,
          description: `Please Enter Proper Data`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${backendLink}/products/admin/${category}/delete/${id}`)
      .then((res) => {
        setFlag(!flag);
        toast({
          title: "Product Data deleted",
          description: `You successfully deleted ${category} data for id: ${id}`,
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

  const getPhoneByName = () => {
    axios
      .get(
        `${backendLink}/products/admin/${category}?name=${name}&page=${page}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  };
  const handlepage = (p) => {
    setPage(page + p);
  };
  return (
    <Box>
      <div>
        <Box
          display="flex"
          w="25rem"
          margin="auto"
          justifyContent="space-between"
        >
          <Input
            w="15rem"
            size={["sm", "sm", "md", "md"]}
            placeholder="Search Product By Name"
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
        </Box>
        <Box display={{ lg: "flex" }} mt="2rem" justify="space-between" w="50%">
          <Button
            variant={"outline"}
            textTransform={"capitalize"}
            onClick={() => setFlag(!flag)}
          >
            All Products
          </Button>

          <Button
            bg="#257CFF"
            borderRadius="1rem"
            variant="solid"
            ml={{ lg: "2rem" }}
            mr={{ lg: "2rem" }}
            mt={{ base: "2rem", lg: "0rem" }}
            mb={{ base: "2rem" }}
            color="white"
            _hover={{
              background: "white",
              color: "#257CFF",
              border: "2px solid #257CFF",
            }}
            onClick={onOpen}
          >
            Add New Product
          </Button>
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            size="sm"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                textDecoration="underline"
                color="#257cff"
                fontWeight="bold"
                fontSize="2.5rem"
              >
                Product Details
              </ModalHeader>
              <ModalCloseButton />

              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Enter Name of Product"
                    type="text"
                    name="departtime"
                    value={PhoneName}
                    onChange={(e) => setPhoneName(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Image</FormLabel>
                  <Input
                    placeholder="Enter Product Image"
                    type="text"
                    name="aarivtime"
                    value={phoneImage}
                    onChange={(e) => setPhoneImage(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>mrp</FormLabel>
                  <Input
                    placeholder="Enter Product MRP"
                    type="text"
                    name="duration"
                    value={phoneMRP}
                    onChange={(e) => setPhoneMrp(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Price</FormLabel>
                  <Input
                    placeholder="Enter Product Price"
                    type="text"
                    name="fare"
                    value={phonePrice}
                    onChange={(e) => setPhonePrice(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Rating</FormLabel>
                  <Input
                    placeholder="Enter Product Rating"
                    type="text"
                    name="fare"
                    value={phoneRating}
                    onChange={(e) => setPhoneRating(e.target.value)}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Product Details</FormLabel>
                  <Input
                    placeholder="Enter Product Details"
                    type="text"
                    name="fare"
                    value={phoneDetails}
                    onChange={(e) => setPhoneDetails(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
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
                  onClick={handleAddProduct}
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </div>
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>mrp</Th>
                <Th>price</Th>
                <Th>discount</Th>
                <Th>Total Qty.</Th>
                <Th>rating</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((i) => {
                  return (
                    <Tr key={i.name}>
                      <Td>
                        <Image
                          src={i.image}
                          alt={i.Name}
                          w="60px"
                          height={"60px"}
                        />
                      </Td>
                      <Td>
                        <Box
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          noOfLines={1}
                          w="280px"
                          alignContent={"center"}
                          h="72px"
                        >
                          {i.Name}
                        </Box>
                      </Td>
                      <Td>{i.mrp || i.price}</Td>
                      <Td>{i.price}</Td>
                      <Td>{i.discount || 0}</Td>
                      <Td>{i.TotalQtyAvailable}</Td>
                      <Td>{i.rating}</Td>
                      <Td>
                        <Button onClick={() => handleDelete(i._id)}>
                          Delete
                        </Button>
                      </Td>
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

export default AdminProducts;
