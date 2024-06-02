import {
  SimpleGrid,
  Select,
  Container,
  HStack
} from "@chakra-ui/react";

import axios from "axios";
import { useState, useEffect } from "react";
import ErrorIndicator from "../component/ErrorIndicator";
import LoadingIndicator from "../component/LoadingIndicator";
import ProductsCard from "../component/ProductsCard";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [sortbyPrice, setSortByPrice] = useState("")
  const [filterCategory, setFilterCategory] = useState("")

  async function fetchAndUpdateData(sortbyPrice, filterCategory) {
    setLoading(true);
    const queryParams = {}

    // if(sortbyPrice){
    //     queryParams._sort = "price",
    //     queryParams._order = sortbyPrice
    // }
    // if(filterCategory){
    //     queryParams.Category = filterCategory
    // }
    try {
      let res = await axios({
        method: "get",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
        // data:queryParams
      });
      // console.log(res.data.data);
      setProducts(res.data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }
console.log(sortbyPrice);
  useEffect(() => {
    fetchAndUpdateData(sortbyPrice, filterCategory);
  }, [sortbyPrice, filterCategory]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
    <Container>
    <HStack>
    <Select placeholder="Sort by price" onChange={(e)=> (setSortByPrice(e.target.value))}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
    </Select>
    <Select placeholder="Sort by price" onChange={(e)=> (setSortByPrice(e.target.value))}>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Kids">Kids</option>
        <option value="Home Decor">Home Decor</option>
    </Select>
    </HStack>
    </Container>  
      <SimpleGrid columns={{ base: "1", md: "2", lg: "3" }} spacing={10}>
        {products.map(function (item, index) {
          return (
            <div>
              <ProductsCard item={item} key={index} />
            </div>
          );
        })}
      </SimpleGrid>
    </>
  );
}
