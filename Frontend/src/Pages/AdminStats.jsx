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
import AdminStatsLastWeek from "../Componets/AdminSection/AdminStatsLastWeek";
import AdminStatsTypeToday from "../Componets/AdminSection/AdminStatsTypeToday";

const AdminStats = () => {
  return (
    <Flex>
      <AdminSideBar />
      <Box bg="#EBF7FF" w="95%">
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
              Admin Products Stats
            </Heading>

            <Box
              border="1px solid gray"
              mt="2rem"
              width="98%"
              borderRadius="1rem"
              p="1rem"
            >
              <Text fontSize="2rem">Apna Bazar Products Stats</Text>

              <Text fontSize="1.5rem" color="gray">
                Select any specific tabs for managing Stats
              </Text>

              <Box
                bg="white"
                w="98%"
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
                      Stats Database
                    </Text>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Today
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Last Week
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Last Month
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                       Last Quarter
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Last Six Month
                      </Text>
                    </Tab>

                    <Tab>
                      <Text
                        textAlign="center"
                        fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                        fontWeight="bold"
                      >
                        Last Year
                      </Text>
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                        <AdminStatsTypeToday/>
                    </TabPanel>

                    <TabPanel>
                        <AdminStatsLastWeek/>
                    </TabPanel>

                    <TabPanel>dispatch</TabPanel>

                    <TabPanel>outForDelivery</TabPanel>

                    <TabPanel>deliverd</TabPanel>
                    <TabPanel>Cancelled</TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default AdminStats;
