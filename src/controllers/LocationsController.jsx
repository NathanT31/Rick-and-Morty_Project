import { useState, useEffect, useContext, useRef, useCallback } from "react";
import Pagination from "../components/Pagination/Pagination";

import DataFetcherAPI from "../scripts/DataFetcherAPI";
import { SearchContext } from "../scripts/SearchContext";

import Locations from "../pages/Locations";

function LocationsController() {
  const { info, results, isLoading, error, fetchData } = DataFetcherAPI();

  const { searchQuery } = useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(1);

  const fetchDataRef = useRef();
  fetchDataRef.current = fetchData;

  useEffect(() => {
    setCurrentPage(1);
    fetchDataRef.current({ type: "location", params: `name=${searchQuery}` });
  }, [searchQuery]);

  const handlePageClick = useCallback(
    ({ selected }) => {
      setCurrentPage(selected + 1);
      fetchDataRef.current({
        type: "location",
        params: `name=${searchQuery}&page=${selected + 1}`,
      });
    },
    [searchQuery]
  );

  const renderLocations = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Ha ocurrido un error</div>;
    }

    return (
      <Locations info={info} results={results} searchQuery={searchQuery} />
    );
  };

  return (
    <div className="flex flex-col">
      {renderLocations()}
      <Pagination
        pageCount={info.pages}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </div>
  );
}

export default LocationsController;
