import React from "react";
import { useMutation } from "@apollo/client";

import { CUSTOMER_ADDRESS_UPDATE } from "../../api/graphql/customers/mutations";

const AddressUpdate = () => {
  const [customerAddressUpdate, { loading, error, data }] = useMutation(
    CUSTOMER_ADDRESS_UPDATE
  );

  const handleAddressUpdateClick = () => {
    customerAddressUpdate({
      variables: {
        address: {
          address1: "33 999999999",
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
        id: "gid://shopify/MailingAddress/9059245949204?model_name=CustomerAddress&customer_access_token=ff-jWAvjTRB14sthaGoGHZnsjBCowj6hkZVA5n_g_LKSeNhROaYsYhkka76rO9mNIHLh1ePjE7_12U82x1KUpY594DHkjEU4Jgm925a5UnCZz-XWc8ZAtdsxRdwfNu83ulfGdFlL8LWBpfd-ctD8KoTlUeeXm3M2TBnSUH_HjjZ6kwHGr55LckyGLYNcf9NoymKPp2SCYy8ciH_GHnmgduHARDQjkkeFh7mE7lqxAxwXEDo3aNayWPn5rxPZKbkY",
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

  return <button onClick={handleAddressUpdateClick}>Test UPDATE ADRESS</button>;
};

export default AddressUpdate;
