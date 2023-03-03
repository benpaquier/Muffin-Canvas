import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_OF_COLLECTION } from "../api/graphql/products/queries";

import Navbar from "../components/Navbar/Navbar.jsx";

const Collection = () => {
  const { collectionId } = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCTS_OF_COLLECTION, {
    variables: {
      id: `gid://shopify/Collection/${collectionId}`,
    },
  });
  {
    console.log(data);
  }
  return (
    <>
      <Navbar />
      <ul class="grid gap-4 mt-8 mr-8 ml-8 sm:grid-cols-2 lg:grid-cols-4">
        {data?.collection?.products?.edges.map((product) => (
          <Link to={`/product/${product.node.id.split("/")[4]}`}>
            <li>
              <a href="#" class="group block overflow-hidden">
                <img
                  src={product.node.images.edges[0].node.originalSrc}
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[240px]"
                />
              </a>
              <h4>{product.node.title}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Collection;
