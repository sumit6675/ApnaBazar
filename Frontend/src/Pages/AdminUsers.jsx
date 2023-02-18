import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AdminSideBar from "../Componets/AdminSection/AdminSideBar";
import AdminUsersTypes from "../Componets/AdminSection/AdminUsersTypes";

function AdminUsers() {
  return (
    <Flex>
      <AdminSideBar />
      <Box bg="#EBF7FF" w="85%">
        <Box color="black" align="center" justify="center" pb="1rem">
          <Box
            mt="2rem"
            mb="2rem"
            w="100%"
            bg="white"
            borderRadius="2rem"
            pt="3rem"
            pb="15rem"
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          >
            <Heading
              fontSize={{ base: "0.9rem", md: "2rem", lg: "2.8rem" }}
              textDecoration="underline"
              color="#257CFF"
            >
              Admin Users Section
            </Heading>
            <Box
              border="1px solid gray"
              mt="2rem"
              width="90%"
              borderRadius="1rem"
              p="1rem"
            >
              <Text fontSize="2rem">Apna Bazar</Text>
              <Text fontSize="1.5rem" color="gray">
                Select any specific tabs for managing Users
              </Text>

              <Box
                bg="white"
                w="90%"
                color="black"
                align="center"
                justify="center"
                margin="auto"
                borderRadius="1rem"
                p="3rem"
                // border="1px solid white"
                box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
              >
                <Tabs>
                  <TabList>
                    <Text
                      textAlign="center"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "2rem" }}
                      fontWeight="bold"
                      mr="2rem"
                    >
                      Database
                    </Text>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Users
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Admin
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                       Delivery Partner
                      </Text>
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                        <AdminUsersTypes userType="User"/>
                    </TabPanel>

                    <TabPanel>
                    <AdminUsersTypes userType="AdminUser"/>
                    </TabPanel>

                    <TabPanel>
                    <AdminUsersTypes userType="Delivery"/>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default AdminUsers;
