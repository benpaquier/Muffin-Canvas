import React from "react";

import { useMutation } from "@apollo/client";

import { CUSTOMER_CREATE } from "../../api/graphql/customers/mutations";

const SignUpUtil = (userData) => {
  const [customerCreate, { loading, error, data }] =
    useMutation(CUSTOMER_CREATE);

  const handleSubmit = (userData) => {
    customerCreate({
      variables: {
        input: userData,
      },
    });
    if (data) {
      console.log(data);
    }
  };

  if (loading) {
    return <p>"Loading"</p>;
  }
  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }
};

export default SignUpUtil;
