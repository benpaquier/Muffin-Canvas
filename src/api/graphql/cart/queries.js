import { gql } from "@apollo/client";

const GET_CART = gql`
  query getCart($id: ID!) {
    cart(id: $id) {
      id
      checkoutUrl
      totalQuantity
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            attributes {
              key
              value
            }
            merchandise {
              ... on ProductVariant {
                title
                product {
                  title
                }
              }
            }
            cost {
              totalAmount {
                currencyCode
                amount
              }
              subtotalAmount {
                currencyCode
                amount
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_CART };
