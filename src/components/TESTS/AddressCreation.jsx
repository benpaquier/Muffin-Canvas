import React from "react";
import { useMutation } from "@apollo/client";
import { CUSTOMER_ADDRESS_CREATE } from "../../api/graphql/customers/mutations";

const AddressUpdated = () => {
  const [customerAddressCreate, { loading, error, data }] = useMutation(
    CUSTOMER_ADDRESS_CREATE
  );

  const handleAddressCreateClick = () => {
    customerAddressCreate({
      variables: {
        address: {
          address1: "33 avenue de France",
          address2: "33 rue de France",
          city: "Paris",
          company: "Facebook",
          country: "France",
          firstName: "Pablo",
          lastName: "Escobar",
          phone: "0807 66 666",
          province: "Midi",
          zip: "75013",
        },
        customerAccessToken: "2273532067bfb4ba12cfd27a52fe4748",
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

  return <button onClick={handleAddressCreateClick}>CREATE ADRESS</button>;
};

export default AddressUpdated;
