import { Box, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCarousal from "../Componets/Homepage/ProductCarousal";
import TopCarousel from "../Componets/Homepage/TopCarousel";

function HomePage() {
  const [count,setCount]=useState(0)
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)");
  const [islesserThan740px] = useMediaQuery("(max-width: 750px)");
  useEffect(()=>{
    if(isLargerThan1100){
      setCount(6)
    }else if(isLargerThan750px){
      setCount(3)
    }else if(islesserThan740px){
      setCount(2)
    }
  },[isLargerThan1100,isLargerThan750px,islesserThan740px])
  return (
    <Box bg="rgb(227,230,230)">
      <TopCarousel />
      <Image src="Details.jpg" alt="img" p="5" />
      <Heading ml="5" mb="-30px">Bestselling Affordable Smartphones</Heading>
      <ProductCarousal phone={"phone"} count={count} />
      <Image src="PhoneDetails.jpg" alt="img" />
      <Heading ml="5" mb="-30px">Bestselling Affordable Laptops</Heading>
      <ProductCarousal phone={"laptop"} count={count} />
      <Box width="85%" m="auto">
        <video controls width={"100%"}>
          <source src="FashionVideo.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </Box>
      <ProductCarousal phone={"women"} count={count} />
      <Image
        m="auto"
        mt="5"
        src="https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="img"
        w="85%"
      />
      <Box width="85%" m="auto" mt={["5","5","5","5","5"]}>
        <video controls width={"100%"}>
          <source src="MenFashion.mp4" type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </Box>
      <ProductCarousal phone={"men"} count={count} />
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
