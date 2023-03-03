import { ApolloClient, InMemoryCache } from "@apollo/client";
import cors from "cors";

const client = new ApolloClient({
  uri: "https://muffin-canvas-1383.myshopify.com/api/2023-01/graphql.json/",
  cache: new InMemoryCache(),
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STOREFRONT_KEY,
  },
  fetchOptions: {
    mode: "no-cors",
  },
});

export default client;
