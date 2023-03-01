import { gql } from "@apollo/client";

const CART_CREATE = gql`
  mutation cartCreate {
    cartCreate {
      cart {
        id
        createdAt
        updatedAt
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
        checkoutUrl
      }
      userErrors {
        field
        message
        code
      }
    }
  }
`;

const CART_ADD_LINES = gql`
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
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
      userErrors {
        message
        code
      }
    }
  }
`;

const CART_UPDATE_LINE = gql`
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
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
      userErrors {
        field
        message
      }
    }
  }
`;

export { CART_CREATE, CART_ADD_LINES, CART_UPDATE_LINE };
