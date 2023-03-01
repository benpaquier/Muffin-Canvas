import React from "react";
import { useMutation } from "@apollo/client";
import { CUSTOMER_ADDRESS_DEFAULT_UPDATE } from "../../api/graphql/customers/mutations";

const DefaultAddressUpdate = () => {
  const [customerDefaultAddressUpdate, { loading, error, data }] = useMutation(
    CUSTOMER_ADDRESS_DEFAULT_UPDATE
  );

  const handleDefaultAddressUpdateClick = () => {
    customerDefaultAddressUpdate({
      variables: {
        addressId:
          "gid://shopify/MailingAddress/9059216687380?model_name=CustomerAddress&customer_access_token=k5vXaeLP6WBzG7enDAI-LPTGQ6vP5DAaxAr_-ooPtG9IP6RLM_n1To9b-AtOI4DmwSGLVivspN05dlNFf5YJpjp89CiIUhkh4r5wBiI3-WiFzDKeyFQIx3Cu5jkWSC2LpTD8VxO_DzE6nMuP87z_Ha1xs85ZBxu4uBMzyBV1Qr81yqXv_Z9RJQbPTIaCVuumHodEzwphJdEwLVTehiCIr015_d5WQdxj5GEbcEjStnV5uvixc_VpEMgbEuzRsJmX",
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

  return (
    <button onClick={handleDefaultAddressUpdateClick}>
      Update DEFAULT ADRESS
    </button>
  );
};

export default DefaultAddressUpdate;
