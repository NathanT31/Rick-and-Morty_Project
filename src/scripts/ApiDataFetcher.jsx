import { useState } from "react";

const ApiDataFetcher = () => {
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);
  const [busy, setBusy] = useState(false);

  const fetchData = async (page, type, searchQuery) => {
    if (!busy) {
      setBusy(true);
      try {
        const apiRequest = await fetch(
          `https://rickandmortyapi.com/api/${type}/?page=${page}&name=${searchQuery}`
        );

        if (!apiRequest.ok) {
          throw new Error("API request failed");
        }

        console.log("fetch");
        const apiData = await apiRequest.json();
        setData(apiData.results);
        setInfo(apiData.info);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
        setInfo(null);
      } finally {
        setBusy(false);
      }
    }
  };

  return {
    data,
    info,
    busy,
    fetchData,
  };
};

export default ApiDataFetcher;
