import { useMutation } from "@apollo/client";
import React from "react";

import { CUSTOMER_LOGIN_WITH_CREDENTIALS } from "../../api/graphql/customers/mutations";

const Login = () => {
  const [customerLoginWithCredentials, { loading, error, data }] = useMutation(
    CUSTOMER_LOGIN_WITH_CREDENTIALS
  );

  const handleClick = () => {
    customerLoginWithCredentials({
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

  return <button onClick={handleClick}>Test Login</button>;
};

export default Login;
