import { gql } from "@apollo/client";

const GET_CUSTOMER_INFOS = gql`
  query GetCustomerInfos($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      email
      firstName
      lastName
      phone
      defaultAddress {
        id
        address1
        address2
        city
        company
        country
        firstName
        lastName
        phone
        name
        province
        zip
      }
      addresses(first: 10) {
        edges {
          node {
            id
            address1
            address2
            city
            company
            country
            firstName
            lastName
            phone
            name
            province
            zip
          }
        }
      }
    }
  }
`;

export { GET_CUSTOMER_INFOS };
