import { gql } from "@apollo/client";

const GET_ALL_COLLECTIONS_WITH_PRODUCTS = gql`
  query GetAllCollectionsWithProducts {
    collections(first: 100) {
      edges {
        node {
          id
          description
          products(first: 100) {
            edges {
              node {
                id
                title
                images(first: 1) {
                  edges {
                    node {
                      originalSrc
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_PRODUCTS_OF_COLLECTION = gql`
  query getProductsOfCollection($id: ID!) {
    collection(id: $id) {
      title
      products(first: 100) {
        edges {
          node {
            id
            title
            description
            images(first: 1) {
              edges {
                node {
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_PRODUCT_INFOS = gql`
  query getProductInfos($id: ID!) {
    product(id: $id) {
      title
      description
      images(first: 1) {
        edges {
          node {
            originalSrc
          }
        }
      }
    }
  }
`;

export {
  GET_ALL_COLLECTIONS_WITH_PRODUCTS,
  GET_PRODUCTS_OF_COLLECTION,
  GET_PRODUCT_INFOS,
};
