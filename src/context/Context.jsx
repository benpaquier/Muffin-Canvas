import { createContext, useState } from "react";

const DataApiContext = createContext({});

const DataApiContextProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState({});
  const value = {
    dataApi: dataApi,
    setDataApi: setDataApi,
  };

  return (
    <DataApiContext.Provider value={value}>{children}</DataApiContext.Provider>
  );
};

export { DataApiContext, DataApiContextProvider };
