import React from "react";
import { useMutation } from "@apollo/client";

import { CUSTOMER_ADDRESS_DELETE } from "../../api/graphql/customers/mutations";

const AddressDelete = () => {
  const [customerAdressDelete, { loading, error, data }] = useMutation(
    CUSTOMER_ADDRESS_DELETE
  );

  const handleDeleteAddressClick = () => {
    customerAdressDelete({
      variables: {
        customerAccessToken: "2273532067bfb4ba12cfd27a52fe4748",
        id: "gid://shopify/MailingAddress/9059204071700?model_name=CustomerAddress&customer_access_token=0FaihwXRJmKj5tcKtSG1eUzur_NcbICc_Gj_uV8-Wd0psf0rKHJAzQLvscZ3T3JoWOihlKyYYG9VeaYO-FSFuMcNkrK8C1hojw_ptFps2xZESiEBC1UlhKX1LKb1exQC-ZkxN7vZTRALUe5emTpXeGmqBcNM65aQLlsXYSs2m0xhifzJzWBDlA2o9OqT9GUWdKEii-lrjhNuk2WJ4s9ko_54Rwt36kUkgwrlf9RWAa0hUBxRKK2vHAQzKiIkRcUv",
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

  return <button onClick={handleDeleteAddressClick}>DELETE ADDRESS</button>;
};

export default AddressDelete;
