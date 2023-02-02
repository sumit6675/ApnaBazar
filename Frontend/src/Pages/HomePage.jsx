import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ProductCarousal from "../Componets/Homepage/ProductCarousal";
import TopCarousel from "../Componets/Homepage/TopCarousel";

function HomePage() {
  return (
    <Box bg="rgb(227,230,230)">
      <TopCarousel />
      <Image src="Details.jpg" alt="img" p="5" />
      <Heading ml="5">Bestselling Affordable Smartphones</Heading>
      <ProductCarousal phone={"phone"} count={5} />
      <Image src="PhoneDetails.jpg" alt="img" />
      <Heading ml="5">Bestselling Affordable Laptops</Heading>
      <ProductCarousal phone={"laptop"} count={4} />
      <Box width="85%" m="auto">
        <video controls width={"100%"}>
          <source src="FashionVideo.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </Box>
      <ProductCarousal phone={"women"} count={6} />
      <Image
        m="auto"
        mt="5"
        src="https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="img"
        w="85%"
      />
      <Box width="85%" m="auto" mt="5">
        <video controls width={"100%"}>
          <source src="MenFashion.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </Box>
      <ProductCarousal phone={"men"} count={6} />
      <Image
        m="auto"
        mt="5"
        src="https://i.pinimg.com/originals/31/f7/c8/31f7c8126462f0a4cd13c085f898e981.png"
        w="85%"
        alt="img"
      />
    </Box>
  );
}

export default HomePage;
