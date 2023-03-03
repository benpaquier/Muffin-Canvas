import { gql } from "@apollo/client";

const CUSTOMER_CREATE = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        firstName
        lastName
        email
        phone
        acceptsMarketing
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`;

const CUSTOMER_LOGIN_WITH_CREDENTIALS = gql`
  mutation CustomerLoginWithCredentials(
    $input: CustomerAccessTokenCreateInput!
  ) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`;

const CUSTOMER_UPDATE = gql`
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
    $customerAccessToken: String!
  ) {
    customerUpdate(
      customer: $customer
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        id
        email
        firstName
        lastName
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`;

const CUSTOMER_ADDRESS_CREATE = gql`
  mutation customerAddressCreate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
  ) {
    customerAddressCreate(
      address: $address
      customerAccessToken: $customerAccessToken
    ) {
      customerAddress {
        address1
        address2
        city
        company
        country
        firstName
        lastName
        phone
        province
        zip
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`;

const CUSTOMER_ADDRESS_DELETE = gql`
  mutation customerAddressDelete($customerAccessToken: String!, $id: ID!) {
    customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
      customerUserErrors {
        field
        message
        code
      }
      deletedCustomerAddressId
    }
  }
`;

const CUSTOMER_ADDRESS_UPDATE = gql`
  mutation customerAddressUpdate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $id: ID!
  ) {
    customerAddressUpdate(
      address: $address
      customerAccessToken: $customerAccessToken
      id: $id
    ) {
      customerAddress {
        address1
        address2
        city
        company
        country
        firstName
        lastName
        phone
        province
        zip
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`;
const CUSTOMER_ADDRESS_DEFAULT_UPDATE = gql`
  mutation customerDefaultAddressUpdate(
    $addressId: ID!
    $customerAccessToken: String!
  ) {
    customerDefaultAddressUpdate(
      addressId: $addressId
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        id
        email
        firstName
        lastName
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`;

export {
  CUSTOMER_CREATE,
  CUSTOMER_LOGIN_WITH_CREDENTIALS,
  CUSTOMER_UPDATE,
  CUSTOMER_ADDRESS_CREATE,
  CUSTOMER_ADDRESS_DELETE,
  CUSTOMER_ADDRESS_UPDATE,
  CUSTOMER_ADDRESS_DEFAULT_UPDATE,
};
