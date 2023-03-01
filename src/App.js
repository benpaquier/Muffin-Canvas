import logo from "./logo.svg";
import "./App.css";

import { ApolloProvider } from "@apollo/client";
import client from "./api/index.js";

import Products from "./components/TESTS/Products.jsx";
import SignUp from "./components/TESTS/SignUp.jsx";
import Login from "./components/TESTS/Login.jsx";
import EditUser from "./components/TESTS/EditUser.jsx";
import Cart from "./components/TESTS/Cart.jsx";

function App() {
  return (
    <ApolloProvider client={client}>
      <EditUser />
    </ApolloProvider>
  );
}

export default App;
