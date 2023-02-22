import {
  Box,
  Button,
  Grid,
  Heading,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendLink } from "../backendLink";
import SingleProduct from "../Componets/SingleProduct";

function Productpage({ category }) {
  const [page, setPage] = React.useState(1);
  let [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedValue1, setSelectedValue] = useState("All");
  const [sort, setSort] = useState("default");
  const navigate = useNavigate();
  React.useEffect(() => {
    setLoading(true);
    fetch(
      `${backendLink}/products/${category}?brand=${selectedValue1}&sort=${sort}&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, [category, selectedValue1, sort, page]);

  const handleCheckboxClick = (value) => {
    setSelectedValue(value);
  };

  const checkboxList1 = [
    "All",
    "Redmi",
    "OnePlus",
    "Samsung",
    "Xiaomi",
    "IPhone",
  ];

  const checkboxList2 = ["All", "Dell", "MacBook", "HP", "ASUS", "Lenovo"];
  const checkboxList3 = ["All", "Jacket", "Puma", "High Neck Jacket"];
  const checkboxList4 = ["All", "saree", "Dress"];
  const checkboxList5 = ["All", "Masala", "Roll", "Ready To Eat"];
  const handlepage = (p) => {
    setPage(page + p);
  };
  if (loading) {
    return (
      <Grid gridTemplateColumns={"0.15fr 0.85fr"}>
        {category === "phone" && (
          <VStack gap="1">
            <VStack p="25px" gap="1" alignItems={"left"}>
              <Heading size="md">Brands</Heading>
              {checkboxList1.map((value) => (
                <label key={value}>
                  <input
                    type="checkbox"
                    value={value}
                    checked={value === selectedValue1}
                    onChange={() => handleCheckboxClick(value)}
                  />
                  {value}
                </label>
              ))}
            </VStack>
          </VStack>
        )}

        {category === "laptop" && (
          <VStack gap="1">
            <VStack p="25px" gap="1" alignItems={"left"}>
              <Heading size="md">Brands</Heading>
              {checkboxList2.map((value) => (
                <label key={value}>
                  <input
                    type="checkbox"
                    value={value}
                    checked={value === selectedValue1}
                    onChange={() => handleCheckboxClick(value)}
                  />
                  {value}
                </label>
              ))}
            </VStack>
          </VStack>
        )}

        {category === "men" && (
          <VStack gap="1">
            <VStack p="25px" gap="1" alignItems={"left"}>
              <Heading size="md">Brands</Heading>
              {checkboxList3.map((value) => (
                <label key={value}>
                  <input
                    type="checkbox"
                    value={value}
                    checked={value === selectedValue1}
                    onChange={() => handleCheckboxClick(value)}
                  />
                  {value}
                </label>
              ))}
            </VStack>
          </VStack>
        )}

        {category === "women" && (
          <VStack gap="1">
            <VStack p="25px" gap="1" alignItems={"left"}>
              <Heading size="md">Brands</Heading>
              {checkboxList4.map((value) => (
                <label key={value}>
                  <input
                    type="checkbox"
                    value={value}
                    checked={value === selectedValue1}
                    onChange={() => handleCheckboxClick(value)}
                  />
                  {value}
                </label>
              ))}
            </VStack>
          </VStack>
        )}

        {category === "home" && (
          <VStack gap="1">
            <VStack p="25px" gap="1" alignItems={"left"}>
              <Heading size="md">Brands</Heading>
              {checkboxList5.map((value) => (
                <label key={value}>
                  <input
                    type="checkbox"
                    value={value}
                    checked={value === selectedValue1}
                    onChange={() => handleCheckboxClick(value)}
                  />
                  {value}
                </label>
              ))}
            </VStack>
          </VStack>
        )}
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
      </Grid>
    );
  }

  const handleSignleProduct = (id) => {
    navigate(`/${category}/${id}`);
  };

  return (
    <Grid p="5" gridTemplateColumns={"0.15fr 0.85fr"}>
      {category === "phone" && (
        <VStack gap="1">
          <VStack p="25px" gap="1" alignItems={"left"}>
            <Heading size="md">Filter By Brands</Heading>
            {checkboxList1.map((value) => (
              <label key={value}>
                <input
                  type="checkbox"
                  value={value}
                  checked={value === selectedValue1}
                  onChange={() => handleCheckboxClick(value)}
                />
                {value}
              </label>
            ))}
          </VStack>
          <VStack>
            <Heading size="md">Sort By Rating</Heading>
            <Text onClick={() => setSort("RatingLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("RatingHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Price</Heading>
            <Text onClick={() => setSort("PriceLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("PriceHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Discount</Heading>
            <Text
              onClick={() => setSort("DiscountLowToHigh")}
              cursor={"pointer"}
            >
              Low To High
            </Text>
            <Text
              onClick={() => setSort("DiscountHighToLow")}
              cursor={"pointer"}
            >
              High To Low
            </Text>
          </VStack>
        </VStack>
      )}

      {category === "laptop" && (
        <VStack gap="1">
          <VStack p="25px" gap="1" alignItems={"left"}>
            <Heading size="md">Brands</Heading>
            {checkboxList2.map((value) => (
              <label key={value}>
                <input
                  type="checkbox"
                  value={value}
                  checked={value === selectedValue1}
                  onChange={() => handleCheckboxClick(value)}
                />
                {value}
              </label>
            ))}
          </VStack>
          <VStack>
            <Heading size="md">Sort By Rating</Heading>
            <Text onClick={() => setSort("RatingLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("RatingHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Price</Heading>
            <Text onClick={() => setSort("PriceLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("PriceHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Discount</Heading>
            <Text
              onClick={() => setSort("DiscountLowToHigh")}
              cursor={"pointer"}
            >
              Low To High
            </Text>
            <Text
              onClick={() => setSort("DiscountHighToLow")}
              cursor={"pointer"}
            >
              High To Low
            </Text>
          </VStack>
        </VStack>
      )}

      {category === "men" && (
        <VStack gap="1">
          <VStack p="25px" gap="1" alignItems={"left"}>
            <Heading size="md">Brands</Heading>
            {checkboxList3.map((value) => (
              <label key={value}>
                <input
                  type="checkbox"
                  value={value}
                  checked={value === selectedValue1}
                  onChange={() => handleCheckboxClick(value)}
                />
                {value}
              </label>
            ))}
          </VStack>
          <VStack>
            <Heading size="md">Sort By Rating</Heading>
            <Text onClick={() => setSort("RatingLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("RatingHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Price</Heading>
            <Text onClick={() => setSort("PriceLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("PriceHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Discount</Heading>
            <Text
              onClick={() => setSort("DiscountLowToHigh")}
              cursor={"pointer"}
            >
              Low To High
            </Text>
            <Text
              onClick={() => setSort("DiscountHighToLow")}
              cursor={"pointer"}
            >
              High To Low
            </Text>
          </VStack>
        </VStack>
      )}

      {category === "women" && (
        <VStack gap="1">
          <VStack p="25px" gap="1" alignItems={"left"}>
            <Heading size="md">Brands</Heading>
            {checkboxList4.map((value) => (
              <label key={value}>
                <input
                  type="checkbox"
                  value={value}
                  checked={value === selectedValue1}
                  onChange={() => handleCheckboxClick(value)}
                />
                {value}
              </label>
            ))}
          </VStack>
          <VStack>
            <Heading size="md">Sort By Rating</Heading>
            <Text onClick={() => setSort("RatingLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("RatingHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Price</Heading>
            <Text onClick={() => setSort("PriceLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("PriceHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Discount</Heading>
            <Text
              onClick={() => setSort("DiscountLowToHigh")}
              cursor={"pointer"}
            >
              Low To High
            </Text>
            <Text
              onClick={() => setSort("DiscountHighToLow")}
              cursor={"pointer"}
            >
              High To Low
            </Text>
          </VStack>
        </VStack>
      )}

      {category === "home" && (
        <VStack gap="1">
          <VStack p="25px" gap="1" alignItems={"left"}>
            <Heading size="md">Brands</Heading>
            {checkboxList5.map((value) => (
              <label key={value}>
                <input
                  type="checkbox"
                  value={value}
                  checked={value === selectedValue1}
                  onChange={() => handleCheckboxClick(value)}
                />
                {value}
              </label>
            ))}
          </VStack>
          <VStack>
            <Heading size="md">Sort By Rating</Heading>
            <Text onClick={() => setSort("RatingLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("RatingHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Price</Heading>
            <Text onClick={() => setSort("PriceLowToHigh")} cursor={"pointer"}>
              Low To High
            </Text>
            <Text onClick={() => setSort("PriceHighToLow")} cursor={"pointer"}>
              High To Low
            </Text>
          </VStack>
          <VStack>
            <Heading size="md">Sort By Discount</Heading>
            <Text
              onClick={() => setSort("DiscountLowToHigh")}
              cursor={"pointer"}
            >
              Low To High
            </Text>
            <Text
              onClick={() => setSort("DiscountHighToLow")}
              cursor={"pointer"}
            >
              High To Low
            </Text>
          </VStack>
        </VStack>
      )}

      <Box  w="90%" m="auto">
        <Grid w="100%" m="auto" templateColumns={"repeat(4, 1fr)"} gap="20px">
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
                  handleClick={() => handleSignleProduct(i._id)}
                />
              );
            })
          ) : (
            <Heading>Please Select Filters</Heading>
          )}
        </Grid>
        <Box w="30%" m="auto" mt="5">
          <Button mx="2" disabled={page === 1} onClick={() => handlepage(-1)}>
            Previous
          </Button>
          <Button mx="2" disabled={true}>{page}</Button>
          <Button mx="2" onClick={() => handlepage(1)}>Next</Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default Productpage;
