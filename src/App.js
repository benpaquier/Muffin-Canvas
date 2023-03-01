import logo from "./logo.svg";
import "./App.css";

import { ApolloProvider } from "@apollo/client";
import client from "./api/index.js";

import Products from "./components/TESTS/Products.jsx";
import SignUp from "./components/TESTS/SignUp.jsx";
import Login from "./components/TESTS/Login.jsx";
import EditUser from "./components/TESTS/EditUser.jsx";
import AddressCreation from "./components/TESTS/AddressCreation";
import AddressUpdated from "./components/TESTS/AddressUpdate";
import AddressDelete from "./components/TESTS/AddressDelete";
import DefaultAddressUpdate from "./components/TESTS/DefaultAddressUpdate";

function App() {
  return (
    <ApolloProvider client={client}>
      <Products />
      <EditUser />
      <AddressCreation />
      <AddressDelete />
      <AddressUpdated />
      <DefaultAddressUpdate />
      <Login />
    </ApolloProvider>
  );
}

export default App;
