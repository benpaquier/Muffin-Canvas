import React from "react";

import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";

import { CUSTOMER_UPDATE } from "../../api/graphql/customers/mutations";
import { GET_CUSTOMER_INFOS } from "../../api/graphql/customers/queries";

const EditUser = () => {
  // GET USER INFOS
  const { loading, error, data } = useQuery(GET_CUSTOMER_INFOS, {
    variables: {
      customerAccessToken: "2273532067bfb4ba12cfd27a52fe4748",
    },
  });

  // EDIT AN USER
  //   const [customerUpdate, { loading, error, data }] =
  //     useMutation(CUSTOMER_UPDATE);

  //   const handleClick = () => {
  //     customerUpdate({
  //       variables: {
  //         customer: {
  //           firstName: "Bidule",
  //           lastName: "LePeck",
  //         },
  //         customerAccessToken: "2273532067bfb4ba12cfd27a52fe4748",
  //       },
  //     });
  //   };

  if (loading) {
    return <p>"Loading"</p>;
  }
  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  if (data) {
    return <p>{JSON.stringify(data)}</p>;
  }

  // return <button onClick={handleClick}>Test Edit</button>;
};

export default EditUser;
