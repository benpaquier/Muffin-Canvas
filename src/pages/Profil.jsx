import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { GET_CUSTOMER_INFOS } from "../api/graphql/customers/queries.js";

import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useQuery } from "@apollo/client";

import { useEffect } from "react";

const Profil = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMER_INFOS, {
    variables: {
      customerAccessToken: localStorage.getItem("userToken"),
    },
  });

  const { user, setUser } = useContext(UserContext);

  const storeUser = () => {
    setUser(data);
  };

  useEffect(() => {
    storeUser();
  }, [data]);

  console.log(data);
  return (
    <>
      <Navbar />
      {loading && <p>Loading...</p>}
      {data && (
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h2>{`Hello ${data?.customer?.firstName} !`}</h2>
            <TextField
              id="email-input-read"
              label="Email"
              value={data?.customer?.email}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="firstName-input-read"
              label="Prénom"
              value={data?.customer?.firstName}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="lastName-input-read"
              label="Nom"
              value={data?.customer?.lastName}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="phone-input-read"
              label="Telephone"
              value={data?.customer?.phone}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div>
            <h2>Adresses</h2>
            {data?.customer?.addresses?.edges?.map((address) => (
              <div className="flex flex-col gap-4">
                <TextField
                  id="ad1-adress-input-read"
                  label="Rue et numéro"
                  value={address.node.address1}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="city-adress-input-read"
                  label="Ville"
                  value={address.node.city}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="country-adress-input-read"
                  label="Country"
                  value={address.node.country}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="zip-adress-input-read"
                  label="Zip"
                  value={address.node.zip}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Profil;
