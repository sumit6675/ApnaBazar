import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendLink } from "../../backendLink";
import Barchart from "./BarChart";
import Piechart from "./PieChar";

function AdminStatsLastType({StatsType}) {
  const [TotalQty, setTotaQty] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [phone, setPhone] = useState(0);
  const [laptop, setLaptop] = useState(0);
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);
  const [home, setHome] = useState(0);
  const [phonePrice, setPhonePrice] = useState(0);
  const [laptopPrice, setLaptopPrice] = useState(0);
  const [menPrice, setMenPrice] = useState(0);
  const [womenPrice, setWomenPrice] = useState(0);
  const [homePrice, setHomePrice] = useState(0);
  const [TopFiveDataNames, setTopFiveDataNames] = useState(0);
  const [TopFiveDataQty, setTopFiveDataQty] = useState(0);

  useEffect(() => {
    axios
      .get(`${backendLink}/orders/admin/${StatsType}`)
      .then((res) => {
        let tot = 0;
        let PhoneTotalSale = 0;
        let LaptopTotalSale = 0;
        let MenTotalSale = 0;
        let WomenTotalSale = 0;
        let HomeTotalSale = 0;
        for (let i = 0; i < res.data.length; i++) {
          tot += parseInt(res.data[i].price.replace(/,/g, ""));
          if (res.data[i].category === "Phone") {
            PhoneTotalSale += parseInt(res.data[i].price.replace(/,/g, ""));
          } else if (res.data[i].category === "Laptop") {
            LaptopTotalSale += parseInt(res.data[i].price.replace(/,/g, ""));
          } else if (res.data[i].category === "Men Clothing") {
            MenTotalSale += parseInt(res.data[i].price.replace(/,/g, ""));
          } else if (res.data[i].category === "Women Clothing") {
            WomenTotalSale += parseInt(res.data[i].price.replace(/,/g, ""));
          } else if (res.data[i].category === "Home Appliances") {
            HomeTotalSale += parseInt(res.data[i].price.replace(/,/g, ""));
          }
        }
        const productQuantities = {};
        res.data.forEach((i) => {
          if (productQuantities[i.Name] === undefined) {
            productQuantities[i.Name] = 1;
          } else {
            productQuantities[i.Name]++;
          }
        });
        let TopProductsArray = [];
        for (let key in productQuantities) {
          TopProductsArray.push({
            Name: key,
            Qty: productQuantities[key],
          });
        }
        TopProductsArray.sort((a, b) => b.Qty - a.Qty);
        const TopFiveProduct = TopProductsArray.slice(0, 5);
        const topFiveDataName = [];
        const TopFiveQty=[]
        for (let i = 0; i < TopFiveProduct.length; i++) {
          const str =TopFiveProduct[i].Name
          const words = str.split(" ");
          const first3Words = words.slice(0, 3);
          topFiveDataName.push(first3Words.join(" "))
          TopFiveQty.push(TopFiveProduct[i].Qty)
        }
        setTopFiveDataNames(topFiveDataName)
        setTopFiveDataQty(TopFiveQty)
        setPhonePrice(PhoneTotalSale);
        setLaptopPrice(LaptopTotalSale);
        setMenPrice(MenTotalSale);
        setWomenPrice(WomenTotalSale);
        setHomePrice(HomeTotalSale);
        setTotalPrice(tot);
        setTotaQty(res.data.length);
        let phoneQty = res.data.filter((i) => i.category === "Phone");
        setPhone(phoneQty.length);
        let laptopQty = res.data.filter((i) => i.category === "Laptop");
        setLaptop(laptopQty.length);
        let menQty = res.data.filter((i) => i.category === "Men Clothing");
        setMen(menQty.length);
        let womenQty = res.data.filter((i) => i.category === "Women Clothing");
        setWomen(womenQty.length);
        let homeQty = res.data.filter((i) => i.category === "Home Appliances");
        setHome(homeQty.length);
      })
      .catch((err) => console.log(err));
  }, [phone,TopFiveDataQty,StatsType]);

    const textNameObj={
        LastWeekStats:"Last Week's",
        LastMonthStats:"Last Month's",
        LastQuarterStats:"Last Quarter's",
        LastSixMonthsStats:"Last Six Months's",
        LastYearStats:"Last Year's"
    }

  return (
    <Box w="100%">
      <Flex
         p="6"
        gridTemplateColumns="(0.25fr  0.75fr)"
        w="95%"
        justifyContent={"space-evenly"}
        alignItems="center"
        my="10"
        boxShadow={
          "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"
        }
      >
        <Heading
          w="20%"
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          lineHeight={"110%"}
        >
         {textNameObj[StatsType]} Sales in Qty{" "}
          <Text mt="5px" fontSize="5xl" fontWeight="900">
            {TotalQty}
          </Text>
        </Heading>
        <Box w="80%">
          <Barchart
            name={`${textNameObj[StatsType]} Sales By Qty`}
            TodayBarDataByQty={[phone, laptop, men, women, home]}
            todayText={`${textNameObj[StatsType]} Sales In Different Categories`}
            TodayYaxisText={"Sales In (qty)"}
            colorOfBar="#f90000"
            TodayCatergory={[
              "Phones",
              "Laptops",
              "Mens Clothing",
              "Womens Clothing",
              "Home Appliances",
            ]}
          />
        </Box>
      </Flex>
      <Flex
        p="6"
        gridTemplateColumns="(0.25fr  0.75fr)"
        w="95%"
        justifyContent={"space-evenly"}
        alignItems="center"
        my="10"
        boxShadow={
          "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"
        }
      >
        <Heading
          w="20%"
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          lineHeight={"110%"}
        >
       {textNameObj[StatsType]} Top Five Products
        </Heading>
        <Box w="80%">
          <Piechart
          stdudentSubject={TopFiveDataNames}
          studentMarks={TopFiveDataQty}
          PieChartText="Top Five Products"
          />
        </Box>
      </Flex>
      <Flex
         p="6"
        gridTemplateColumns="(0.25fr  0.75fr)"
        w="95%"
        justifyContent={"space-evenly"}
        alignItems="center"
        my="10"
        boxShadow={
          "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"
        }
      >
        <Box w="80%">
          <Barchart
            name={`${textNameObj[StatsType]} Sales By ₹`}
            TodayBarDataByQty={[
              phonePrice,
              laptopPrice,
              menPrice,
              womenPrice,
              homePrice,
            ]}
            todayText={`${textNameObj[StatsType]} Sales In Different Categories`}
            TodayYaxisText={"Sales In (₹)"}
            colorOfBar="#645CBB"
            TodayCatergory={[
              "Phones",
              "Laptops",
              "Mens Clothing",
              "Womens Clothing",
              "Home Appliances",
            ]}
          />
        </Box>
        <Heading
          w="20%"
          fontWeight={600}
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          lineHeight={"110%"}
        >
        {textNameObj[StatsType]} Sales in Price
          <Text mt="5px" fontSize="3xl" fontWeight="900">
            ₹{TotalPrice.toLocaleString()}
          </Text>
        </Heading>
      </Flex>
    </Box>
  );
}


export default AdminStatsLastType