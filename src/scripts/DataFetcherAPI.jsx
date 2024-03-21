import { useState } from "react";

const DataFetcherAPI = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const fetchData = async ({ type, params }) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://rickandmortyapi.com/api/${type}/?${
          params?.length ? params : ""
        }`
      );
      const data = await response.json();

      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      console.log("fetch");
    }
  };

  return {
    info: data?.info || {},
    results: data?.results || [],
    isLoading,
    error,
    fetchData,
  };
};

export default DataFetcherAPI;
