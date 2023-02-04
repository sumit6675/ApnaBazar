import { Grid, Heading, Link, Skeleton, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import SingleProduct from "../Componets/SingleProduct";

function Productpage({ category }) {
  const [data, setData] = React.useState([]);
  const [discount, setDiscount] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState("All");
  React.useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/products/${category}?brand=${selectedValue}&discount=${discount}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, [category, selectedValue,discount]);

  if (loading) {
    return (
      <div>
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
      </div>
    );
  }

  const handleCheckboxClick = (value) => {
    setSelectedValue(value);
    console.log(value);
  };

  const checkboxList = [
    "All",
    "Redmi",
    "OnePlus",
    "Samsung",
    "Xiaomi",
    "IPhone",
  ];

  return (
    <Grid gridTemplateColumns={"0.15fr 0.85fr"}>
      <VStack gap="2">
      <VStack p="25px" gap="1" alignItems={"left"}>
        <Heading size="md">Brands</Heading>
        {checkboxList.map((value) => (
          <label key={value}>
            <input
              type="checkbox"
              value={value}
              checked={value === selectedValue}
              onChange={() => handleCheckboxClick(value)}
            />
            {value}
          </label>
        ))}
      </VStack>
      <VStack  p="25px" gap="0.5" alignItems={"left"}>
        <Heading size="md">Sort By Discount</Heading>
        <Link onClick={()=>setDiscount("lowToHigh")}>Low to High</Link>
        <Link onClick={()=>setDiscount("highToLow")}>High To Low</Link>
      </VStack>
      </VStack>
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
              mrp={i.mrp}
              key={i._id}
              discount={i.discount}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Productpage;
