import React from "react";

import { useMutation } from "@apollo/client";

import { CUSTOMER_CREATE } from "../../api/graphql/customers/mutations";

const SignUp = () => {
  const [customerCreate, { loading, error, data }] =
    useMutation(CUSTOMER_CREATE);

  const handleClick = () => {
    customerCreate({
      variables: {
        input: {
          email: "4ok3rpycz3@waterisgone.com",
          password: "Shopify",
        },
      },
    });
  };

  if (loading) {
    return <p>"Loading"</p>;
  }
  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  if (data) {
    return <p>{JSON.stringify(data)}</p>;
  }

  return <button onClick={handleClick}>Test</button>;
};

export default SignUp;
