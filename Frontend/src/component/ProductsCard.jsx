import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Button,
  Select
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductsCard(props) {
  const { item } = props;
  const { title, category, price } = item;

  const  navigate = useNavigate()
  const {id} = useParams()
//   console.log(item);

function MoreDetails(){
    // navigate(`/product/details/${id}`)
    navigate("/products/details")
}

  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              category
            </Heading>
            <Text pt="2" fontSize="sm">
              {category}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              price
            </Heading>
            <Text pt="2" fontSize="sm">
              {price}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="blue" onClick={MoreDetails}>
          More Details
        </Button>
      </CardFooter>
    </Card>
  );
}
