import { Grid, Heading, Skeleton } from "@chakra-ui/react";
import React from "react";
import SingleProduct from "../Componets/SingleProduct";

function Productpage({category}) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/products/${category}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData(res);
        setLoading(false);
      });
  }, [category]);
  const handleCart = (i) => {
    console.log(i);
  };

  if (loading) {
    return (
      <>
        <Heading
          my="55px"
          textAlign={"center"}
        >
         {category} Product Page
        </Heading>
        <Grid w="90%" m="auto" templateColumns={"repeat(4, 1fr)"} gap="20px">
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
      </>
    );
  }

  return (
    <div>
      <Heading
        my="55px"
        textAlign={"center"}
      >
        {category} Product Page
      </Heading>
      <Grid w="90%" m="auto" templateColumns={"repeat(4, 1fr)"} gap="20px">
        {data.map((i) => {
          return (
            <SingleProduct
              image={i.image}
              alt={i.Name}
              title={i.Name}
              price={i.price}
              category={i.category}
              rate={i.rating}
              count={i.reviewNumber}
              handleClick={() => handleCart(i)}
              key={i.id}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default Productpage;