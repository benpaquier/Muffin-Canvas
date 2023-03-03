import { GET_ALL_COLLECTIONS_WITH_PRODUCTS } from "../api/graphql/products/queries";
import { useQuery } from "@apollo/client";

import Navbar from "../components/Navbar/Navbar.jsx";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { DataApiContext } from "../context/Context";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_COLLECTIONS_WITH_PRODUCTS);

  const { dataApi, setDataApi } = useContext(DataApiContext);
  const storeDataApi = () => {
    setDataApi(data);
  };

  useEffect(() => {
    storeDataApi();
  }, [data]);

  console.log(dataApi);
  return (
    <>
      <Navbar />
      {loading && <p>Loading...</p>}
      {error && <p>Oups, error 🤔</p>}
      <ul class="grid gap-4 mt-8 mr-8 ml-8 sm:grid-cols-2 lg:grid-cols-4">
        {data?.collections?.edges?.map((collection) => (
          <Link to={`/collection/${collection.node.id.split("/")[4]}`}>
            <li>
              <a href="#" class="group block overflow-hidden">
                <img
                  src={collection.node.image?.url}
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[240px]"
                />
              </a>
              <h4>{collection.node.title}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
