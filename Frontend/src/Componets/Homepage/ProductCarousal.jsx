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
import { useNavigate } from 'react-router-dom';
import { backendLink } from '../../backendLink';
function ProductCarousal({phone,count}) {
  const navigate=useNavigate()
    const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`${backendLink}/products/${phone}?brand=All&sort=default`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [phone]);

  const handleSingleProduct=(id)=>{
    navigate(`/${phone}/${id}`);
  }

  return (
    <Box mt="30px" p="5">
        <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
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
            id={i._id}
            handleSingleProduct={()=>handleSingleProduct(i._id)}
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