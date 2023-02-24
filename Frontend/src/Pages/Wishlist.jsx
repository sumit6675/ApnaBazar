import { Box, Flex, Grid, Heading, Skeleton } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { backendLink } from "../backendLink";
import Sidebar from "../Componets/Sidebar";
import SingleProduct from "../Componets/SingleProduct";

function Wishlist() {
  const { email } = useSelector((store) => store.AuthManager);
  let [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch(`${backendLink}/users?email=${email}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res.wishlist);
      });
  }, [email]);

  const handleSignleProduct = (category, id) => {
    let obj = {
      "Men Clothing": "men",
      Laptop: "laptop",
      "Home Appliances": "home",
      Phone: "phone",
      "Women Clothing": "women",
    };
    navigate(`/${obj[category]}/${id}`);
  };

  if (loading) {
    return (
      <Flex
        ox
        display={{
          lg: "flex",
          md: "flex",
        }}
        w="100%"
        justifyContent={{
          lg: "space-evenly",
          md: "space-evenly",
        }}
      >
        <Sidebar />
        <Grid
          w="90%"
          m="auto"
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap="20px"
        >
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
          <Skeleton height="220px" />
        </Grid>
      </Flex>
    );
  }
  return (
    <Box
      display={{
        lg: "flex",
        md: "flex",
      }}
      w="100%"
      justifyContent={{
        lg: "space-evenly",
        md: "space-evenly",
      }}
    >
      <Sidebar />
      <Box>
        <Heading
          lineHeight={1.1}
          textAlign="center"
          my="8"
          fontSize={{ base: "2xl", sm: "3xl" }}
        >
          WISHLIST PAGE
        </Heading>
        <Grid
          w="100%"
          m="auto"
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap="2"
        >
          {data ? (
            data.map((i) => {
              return (
                <SingleProduct
                  image={i.image}
                  alt={i.Name}
                  title={i.Name}
                  price={i.price}
                  category={i.category}
                  rate={i.rating}
                  count={i.reviewNumber}
                  mrp={i.mrp}
                  key={i._id}
                  discount={i.discount}
                  handleClick={() => handleSignleProduct(i.category, i._id)}
                />
              );
            })
          ) : (
            <Heading>Please Select Filters</Heading>
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default Wishlist;
