import React, { useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Productonepage from './ProductOne';
import { Box } from '@chakra-ui/react';
function ProductCarousal({phone,count}) {
    const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/products/${phone}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [phone]);
  return (
    <Box mt="30px" p="5">
        <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={count}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    autoPlay={true}
  >
    {data.map((i) => {
      return (
        <SwiperSlide key={i._id}>
          <Productonepage
            image={i.image}
            alt={i.Name}
            title={i.Name}
            category={i.category}
            rate={i.rating}
            count={i.reviewNumber}
            key={i._id}
          />
        </SwiperSlide>
      );
    })}
    ...
  </Swiper>
    </Box>
  )
}

export default ProductCarousal