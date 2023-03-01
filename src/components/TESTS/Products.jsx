import React from "react";

import { useQuery } from "@apollo/client";

import {
  GET_ALL_COLLECTIONS_WITH_PRODUCTS,
  GET_PRODUCTS_OF_COLLECTION,
  GET_PRODUCT_INFOS,
} from "../../api/graphql/products/queries";

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCT_INFOS, {
    variables: {
      id: "gid://shopify/Product/8140663980308",
    },
  });

  if (loading) {
    return <p>"Loading"</p>;
  }
  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }
  return <p>{JSON.stringify(data)}</p>;
};

export default Products;
