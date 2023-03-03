import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./api/index.js";

import { DataApiContextProvider } from "./context/Context.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import Collection from "./pages/Collection.jsx";
import Product from "./pages/Product.jsx";
import Profil from "./pages/Profil.jsx";

function App() {
  return (
    <ApolloProvider client={client}>
      <DataApiContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profil" element={<Profil />} />
              <Route
                path="/collection/:collectionId"
                element={<Collection />}
              />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="*" element={<h1>404 Error</h1>} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </DataApiContextProvider>
    </ApolloProvider>
  );
}

export default App;
